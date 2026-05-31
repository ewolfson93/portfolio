import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { caseStudies, getCaseStudy } from "@/lib/site-data";
import { GithubIcon } from "@/components/site/brand-icons";
import { FlowDiagram } from "@/components/site/flow-diagram";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";
import { CaseStudyFigure } from "@/components/site/case-study-figure";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: study.title,
    description: study.tagline,
    openGraph: { title: study.title, description: study.tagline },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const idx = caseStudies.findIndex((c) => c.slug === slug);
  const next = caseStudies[(idx + 1) % caseStudies.length];

  return (
    <article className="pb-24">
      {/* Header */}
      <header className="border-b border-border">
        <div className="bg-grid absolute inset-x-0 -z-10 h-72" aria-hidden />
        <div className="mx-auto max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
          <Link
            href="/#work"
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            All work
          </Link>

          <p className="mt-8 font-mono text-[13px] tracking-wide text-accent">
            {study.category}
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            {study.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            {study.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            {study.metrics.map((m) => (
              <div key={m.label}>
                <div className="font-display text-2xl font-bold tracking-tight">
                  {m.value}
                </div>
                <div className="text-xs text-muted">{m.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {study.demoUrl && (
              <Link
                href={study.demoUrl}
                className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-strong"
              >
                Open the live demo
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            )}
            {study.repoUrl && (
              <a
                href={study.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-medium transition-colors hover:border-border-strong"
              >
                <GithubIcon className="h-4 w-4" />
                {study.repoLabel ?? "View repository"}
              </a>
            )}
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-4xl space-y-16 px-5 pt-16 sm:px-8">
        {/* Problem */}
        <Reveal>
          <Section label="The problem">
            <p className="max-w-[68ch] text-base leading-relaxed text-foreground">
              {study.problem}
            </p>
          </Section>
        </Reveal>

        {/* Approach */}
        <Reveal>
          <Section label="Approach">
            <ol className="max-w-[72ch] space-y-4">
              {study.approach.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-md border border-border bg-surface-2 font-mono text-xs text-accent">
                    {i + 1}
                  </span>
                  <p className="text-base leading-relaxed text-foreground">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </Section>
        </Reveal>

        {/* Architecture */}
        <Reveal>
          <Section label="Architecture">
            <FlowDiagram stages={study.diagram} title={study.diagramTitle} />
          </Section>
        </Reveal>

        {/* Screenshots */}
        {study.screenshots && study.screenshots.length > 0 && (
          <Reveal>
            <Section label="In the system">
              <div className="space-y-6">
                {study.screenshots.map((shot) => (
                  <CaseStudyFigure key={shot.src} shot={shot} />
                ))}
              </div>
            </Section>
          </Reveal>
        )}

        {/* Role + Outcomes */}
        <Reveal>
          <div className="grid gap-10 sm:grid-cols-2">
            <Section label="My role">
              <ul className="space-y-3">
                {study.role.map((r, i) => (
                  <li key={i} className="text-base leading-relaxed text-foreground">
                    {r}
                  </li>
                ))}
              </ul>
            </Section>
            <Section label="Outcome">
              <ul className="space-y-3">
                {study.outcomes.map((o, i) => (
                  <li key={i} className="flex gap-2.5">
                    <Check
                      className="mt-1 h-4 w-4 shrink-0 text-signal"
                      aria-hidden
                    />
                    <span className="text-base leading-relaxed text-foreground">
                      {o}
                    </span>
                  </li>
                ))}
              </ul>
            </Section>
          </div>
        </Reveal>

        {/* Highlights */}
        {study.highlights && (
          <Reveal>
            <Section label="What stands out">
              <div className="grid gap-3 sm:grid-cols-3">
                {study.highlights.map((h) => (
                  <div
                    key={h}
                    className="rounded-lg border border-border bg-surface p-4 text-sm font-medium leading-snug"
                  >
                    {h}
                  </div>
                ))}
              </div>
            </Section>
          </Reveal>
        )}

        {/* Stack */}
        <Reveal>
          <Section label="Stack">
            <div className="flex flex-wrap gap-2">
              {study.stack.map((s) => (
                <Badge key={s}>{s}</Badge>
              ))}
            </div>
          </Section>
        </Reveal>
      </div>

      {/* Next case study */}
      <div className="mx-auto mt-20 max-w-4xl px-5 sm:px-8">
        <Link
          href={`/work/${next.slug}`}
          className="group flex items-center justify-between gap-4 rounded-card border border-border bg-surface p-6 transition-colors hover:border-border-strong"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-muted">
              Next
            </p>
            <p className="mt-1 font-display text-xl font-semibold">{next.title}</p>
          </div>
          <ArrowRight className="h-5 w-5 text-muted transition-transform group-hover:translate-x-1 group-hover:text-foreground" />
        </Link>
      </div>
    </article>
  );
}

function Section({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted">
        <span className="h-px w-6 bg-border-strong" aria-hidden />
        {label}
      </h2>
      {children}
    </section>
  );
}
