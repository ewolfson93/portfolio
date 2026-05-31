"use client";

import { useEffect, useState } from "react";
import {
  LayoutGrid,
  Users,
  Wallet,
  Zap,
  Calendar,
  Flag,
  TrendingUp,
  Search,
  CheckCircle2,
  AlertTriangle,
  Clock,
} from "lucide-react";
import {
  demoStudents,
  demoKpis,
  demoSchedule,
  demoActivity,
  demoRevenue,
  demoFinance,
  type StudentStatus,
} from "@/lib/demo-data";
import { cn } from "@/lib/utils";

type Tab = "overview" | "roster" | "finance" | "automations";

const tabs: { id: Tab; label: string; icon: typeof LayoutGrid }[] = [
  { id: "overview", label: "Overview", icon: LayoutGrid },
  { id: "roster", label: "Roster", icon: Users },
  { id: "finance", label: "Finance", icon: Wallet },
  { id: "automations", label: "Automations", icon: Zap },
];

const statusStyle: Record<StudentStatus, string> = {
  active: "bg-signal/15 text-signal border-signal/30",
  onboarding: "bg-accent/15 text-accent border-accent/30",
  paused: "bg-amber-500/15 text-amber-500 border-amber-500/30",
  completed: "bg-muted/15 text-muted border-border-strong",
};

const tabIds: Tab[] = ["overview", "roster", "finance", "automations"];

export function DemoDashboard() {
  const [tab, setTab] = useState<Tab>("overview");

  // Deep-linkable tabs via hash (e.g. /demo#roster), and keep the hash in sync.
  useEffect(() => {
    const fromHash = window.location.hash.replace("#", "") as Tab;
    if (tabIds.includes(fromHash)) setTab(fromHash);
  }, []);

  function select(next: Tab) {
    setTab(next);
    if (typeof history !== "undefined") {
      history.replaceState(null, "", next === "overview" ? "#" : `#${next}`);
    }
  }

  return (
    <div className="overflow-hidden rounded-card border border-border bg-surface shadow-lg">
      {/* App top bar */}
      <div className="flex items-center justify-between gap-3 border-b border-border bg-surface-2 px-4 py-3">
        <div className="flex items-center gap-2.5">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-accent font-mono text-[13px] font-medium text-accent-foreground">
            mc
          </span>
          <span className="font-display text-sm font-semibold">
            My Chem Mentor · Operations
          </span>
        </div>
        <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-1 font-mono text-[11px] tracking-wide text-amber-500">
          DEMO DATA
        </span>
      </div>

      <div className="flex flex-col sm:flex-row">
        {/* Sidebar */}
        <nav className="flex shrink-0 gap-1 border-b border-border p-2 sm:w-48 sm:flex-col sm:border-b-0 sm:border-r sm:p-3">
          {tabs.map((t) => {
            const active = tab === t.id;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => select(t.id)}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex flex-1 items-center gap-2.5 rounded-md px-3 py-2 text-sm transition-colors sm:flex-none",
                  active
                    ? "bg-accent/12 text-foreground"
                    : "text-muted hover:text-foreground",
                )}
              >
                <t.icon
                  className={cn("h-4 w-4", active ? "text-accent" : "")}
                  aria-hidden
                />
                <span className="hidden sm:inline">{t.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Content */}
        <div className="min-w-0 flex-1 p-4 sm:p-6">
          {tab === "overview" && <Overview />}
          {tab === "roster" && <Roster />}
          {tab === "finance" && <Finance />}
          {tab === "automations" && <Automations />}
        </div>
      </div>
    </div>
  );
}

function Overview() {
  return (
    <div className="space-y-6">
      {/* KPI tiles */}
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {demoKpis.map((k) => (
          <div key={k.label} className="rounded-lg border border-border bg-surface-2 p-4">
            <div className="text-xs text-muted">{k.label}</div>
            <div className="mt-1.5 font-display text-2xl font-bold tracking-tight">
              {k.value}
            </div>
            <div
              className={cn(
                "mt-1 flex items-center gap-1 text-[11px]",
                k.trend === "up" ? "text-signal" : "text-muted",
              )}
            >
              {k.trend === "up" && <TrendingUp className="h-3 w-3" aria-hidden />}
              {k.delta}
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {/* Today's schedule */}
        <section>
          <SectionHead icon={Calendar} title="Today's sessions" meta="4 scheduled" />
          <div className="mt-3 space-y-2">
            {demoSchedule.map((s) => (
              <div
                key={s.time}
                className="flex items-center gap-3 rounded-lg border border-border bg-surface-2 px-3 py-2.5"
              >
                <span className="w-16 shrink-0 font-mono text-xs text-accent">
                  {s.time}
                </span>
                <div className="min-w-0">
                  <div className="truncate text-sm font-medium">{s.student}</div>
                  <div className="truncate text-xs text-muted">{s.topic}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Automation activity */}
        <section>
          <SectionHead icon={Zap} title="This morning's automations" meta="6 runs" />
          <div className="mt-3 space-y-2">
            {demoActivity.slice(0, 5).map((a) => (
              <div
                key={a.skill}
                className="flex items-center gap-3 rounded-lg border border-border bg-surface-2 px-3 py-2.5"
              >
                {a.status === "ok" ? (
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-signal" aria-hidden />
                ) : (
                  <AlertTriangle className="h-4 w-4 shrink-0 text-amber-500" aria-hidden />
                )}
                <div className="min-w-0 flex-1">
                  <div className="truncate font-mono text-xs text-foreground">
                    {a.skill}
                  </div>
                  <div className="truncate text-xs text-muted">{a.detail}</div>
                </div>
                <span className="shrink-0 font-mono text-[11px] text-muted">
                  {a.ms}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function Roster() {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between gap-3">
        <SectionHead icon={Users} title="Student roster" meta={`${demoStudents.length} students`} />
        <div className="hidden items-center gap-2 rounded-md border border-border bg-surface-2 px-3 py-1.5 text-sm text-muted sm:flex">
          <Search className="h-4 w-4" aria-hidden />
          <span>Search</span>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-surface-2 text-xs text-muted">
              <th className="px-4 py-2.5 font-medium">Student</th>
              <th className="px-4 py-2.5 font-medium">Course</th>
              <th className="px-4 py-2.5 font-medium">Status</th>
              <th className="px-4 py-2.5 font-medium">Package</th>
              <th className="px-4 py-2.5 font-medium">Next session</th>
              <th className="px-4 py-2.5 font-medium">Flags</th>
            </tr>
          </thead>
          <tbody>
            {demoStudents.map((s) => {
              const pct = Math.round((s.sessionsUsed / s.sessionsPaid) * 100);
              return (
                <tr
                  key={s.name}
                  className="border-b border-border last:border-0 hover:bg-surface-2/60"
                >
                  <td className="px-4 py-2.5 font-medium">{s.name}</td>
                  <td className="px-4 py-2.5 text-muted">{s.course}</td>
                  <td className="px-4 py-2.5">
                    <span
                      className={cn(
                        "inline-flex rounded-full border px-2 py-0.5 text-[11px] capitalize",
                        statusStyle[s.status],
                      )}
                    >
                      {s.status}
                    </span>
                  </td>
                  <td className="px-4 py-2.5">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-16 overflow-hidden rounded-full bg-border">
                        <div
                          className="h-full rounded-full bg-accent"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                      <span className="font-mono text-[11px] text-muted">
                        {s.sessionsUsed}/{s.sessionsPaid}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-2.5 text-muted">
                    {s.nextSession ?? "Not scheduled"}
                  </td>
                  <td className="px-4 py-2.5">
                    {s.flags > 0 ? (
                      <span className="inline-flex items-center gap-1 text-amber-500">
                        <Flag className="h-3.5 w-3.5" aria-hidden />
                        {s.flags}
                      </span>
                    ) : (
                      <span className="text-muted">None</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Finance() {
  const max = Math.max(...demoRevenue.map((r) => r.value));
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {[
          { label: "Collected YTD", value: demoFinance.collectedYtd },
          { label: "Open pipeline", value: demoFinance.pipeline },
          { label: "Outstanding", value: demoFinance.outstanding },
          { label: "Monthly recurring", value: "$9.4k" },
        ].map((c) => (
          <div key={c.label} className="rounded-lg border border-border bg-surface-2 p-4">
            <div className="text-xs text-muted">{c.label}</div>
            <div className="mt-1.5 font-display text-2xl font-bold tracking-tight">
              {c.value}
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {/* Revenue chart */}
        <section className="rounded-lg border border-border bg-surface-2 p-5">
          <SectionHead icon={TrendingUp} title="Monthly revenue" meta="6 months" />
          <div className="mt-5 flex h-40 items-end gap-3">
            {demoRevenue.map((r) => (
              <div
                key={r.month}
                className="flex-1 rounded-t-md bg-accent/80"
                style={{ height: `${Math.round((r.value / max) * 100)}%` }}
                title={`$${r.value}k`}
              />
            ))}
          </div>
          <div className="mt-2 flex gap-3">
            {demoRevenue.map((r) => (
              <span
                key={r.month}
                className="flex-1 text-center font-mono text-[11px] text-muted"
              >
                {r.month}
              </span>
            ))}
          </div>
        </section>

        {/* Package mix */}
        <section className="rounded-lg border border-border bg-surface-2 p-5">
          <SectionHead icon={Wallet} title="Package mix" meta="by revenue" />
          <div className="mt-5 space-y-3.5">
            {demoFinance.packageMix.map((p) => (
              <div key={p.label}>
                <div className="mb-1.5 flex justify-between text-xs">
                  <span className="text-foreground">{p.label}</span>
                  <span className="font-mono text-muted">{p.pct}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-border">
                  <div
                    className="h-full rounded-full bg-accent"
                    style={{ width: `${p.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function Automations() {
  return (
    <div>
      <SectionHead icon={Zap} title="Recent automation runs" meta="via Agentic OS" />
      <div className="mt-4 overflow-hidden rounded-lg border border-border">
        {demoActivity.map((a) => (
          <div
            key={a.skill}
            className="flex items-center gap-3 border-b border-border px-4 py-3 last:border-0"
          >
            {a.status === "ok" ? (
              <CheckCircle2 className="h-4 w-4 shrink-0 text-signal" aria-hidden />
            ) : (
              <AlertTriangle className="h-4 w-4 shrink-0 text-amber-500" aria-hidden />
            )}
            <span className="w-40 shrink-0 truncate font-mono text-xs text-foreground">
              {a.skill}
            </span>
            <span className="min-w-0 flex-1 truncate text-sm text-muted">
              {a.detail}
            </span>
            <span className="hidden items-center gap-1 font-mono text-[11px] text-muted sm:flex">
              <Clock className="h-3 w-3" aria-hidden />
              {a.when} · {a.ms}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionHead({
  icon: Icon,
  title,
  meta,
}: {
  icon: typeof LayoutGrid;
  title: string;
  meta?: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <Icon className="h-4 w-4 text-accent" aria-hidden />
      <h2 className="font-display text-sm font-semibold">{title}</h2>
      {meta && <span className="text-xs text-muted">· {meta}</span>}
    </div>
  );
}
