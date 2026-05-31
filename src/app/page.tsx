import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { hero, heroStats, capabilities, caseStudies, socials } from "@/lib/site-data";
import { ProjectCard } from "@/components/site/project-card";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";
import { ConsoleMock } from "@/components/site/console-mock";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="bg-grid absolute inset-0 -z-10" aria-hidden />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-background"
          aria-hidden
        />
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <Reveal>
              <p className="font-mono text-[13px] tracking-wide text-accent">
                {hero.kicker}
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="mt-5 max-w-xl font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl">
                {hero.headline}
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                {hero.sub}
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="#work"
                  className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-strong"
                >
                  View the work
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium transition-colors hover:border-border-strong"
                >
                  Get in touch
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="lg:justify-self-end">
            <ConsoleMock />
          </Reveal>
        </div>

        {/* Stats strip */}
        <div className="border-t border-border bg-surface/40">
          <StaggerGroup className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-5 sm:px-8 md:grid-cols-4">
            {heroStats.map((s) => (
              <StaggerItem key={s.label} className="py-6">
                <div className="font-display text-3xl font-bold tracking-tight text-foreground">
                  {s.value}
                </div>
                <div className="mt-1 text-sm text-muted">{s.label}</div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Selected work */}
      <section id="work" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 sm:px-8 sm:py-24">
        <Reveal>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                Selected work
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Six systems, one platform
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              Each is a working piece of a self-built AI operations platform. Click
              any one for the architecture, my role, and what it produced.
            </p>
          </div>
        </Reveal>

        <StaggerGroup className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <StaggerItem key={study.slug} className="h-full">
              <ProjectCard study={study} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* Capabilities */}
      <section className="border-y border-border bg-surface/40">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Capabilities
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Full-stack across the agentic stack
            </h2>
          </Reveal>

          <StaggerGroup className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((cap) => (
              <StaggerItem key={cap.group}>
                <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-muted-strong">
                  {cap.group}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {cap.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-foreground"
                    >
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <div className="rounded-card border border-border bg-surface p-8 sm:p-12">
            <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Have an AI system that needs to actually ship?
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
              I take agentic projects from architecture to a running, observable
              system. Open to contract and advisory work.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-strong"
              >
                Start a conversation
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <a
                href={socials.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium transition-colors hover:border-border-strong"
              >
                Browse the code
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
