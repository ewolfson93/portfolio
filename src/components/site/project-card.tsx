import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/lib/site-data";

export function ProjectCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={`/work/${study.slug}`}
      className="group relative flex h-full flex-col rounded-card border border-border bg-surface p-6 transition-all hover:border-border-strong hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="font-mono text-xs tracking-wide text-accent">
          {study.category}
        </span>
        <ArrowUpRight className="h-5 w-5 shrink-0 text-muted transition-colors group-hover:text-foreground" />
      </div>

      <h3 className="mt-3 font-display text-xl font-semibold tracking-tight">
        {study.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {study.tagline}
      </p>

      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-border pt-4">
        {study.metrics.map((m) => (
          <div key={m.label} className="flex flex-col">
            <span className="font-display text-base font-semibold text-foreground">
              {m.value}
            </span>
            <span className="text-[11px] leading-tight text-muted">
              {m.label}
            </span>
          </div>
        ))}
      </div>
    </Link>
  );
}
