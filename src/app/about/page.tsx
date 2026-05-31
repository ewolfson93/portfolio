import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "PhD chemist turned agentic systems engineer. How I think about building AI systems that hold up in production.",
};

const principles = [
  {
    title: "Systems, not scripts",
    body: "A useful AI tool is fine. A platform where every piece feeds the next, runs are observable, and failures degrade gracefully is what holds up. I build for the second one.",
  },
  {
    title: "Error handling is the product",
    body: "The demo is the easy 80 percent. The value is in the fallbacks, the validation gates, and the audit trail that catch the cases that break naive implementations.",
  },
  {
    title: "Context is engineered",
    body: "Prompts, voice, brand, and agent memory are constraints you can encode and check, not vibes you hope for. I treat them like any other part of the system.",
  },
  {
    title: "Taste matters",
    body: "Interfaces and deliverables that people actually want to use are part of the work, not an afterthought handed to someone else.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
      <Reveal>
        <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          PhD chemist who builds AI platforms.
        </h1>
      </Reveal>

      <Reveal delay={0.06}>
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-foreground">
          <p>
            I run a chemistry tutoring and mentorship practice, and over the past
            year I rebuilt how it operates around AI. Not as a novelty, but as the
            real machinery: an orchestration server, a couple dozen production
            skills, ML pipelines that turn recordings into deliverables, and a
            knowledge architecture that gives agents a working memory.
          </p>
          <p>
            The doctorate is part of how I work, not a line on a resume. Research
            training is the habit of designing an approach, instrumenting it, and
            being honest about what the results actually show. That maps cleanly
            onto building systems that have to run unattended and not quietly
            corrupt their own data.
          </p>
          <p>
            I am past the wrapper stage. The work on this site is the evidence: real
            architecture, real error handling, real things shipping every day.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <h2 className="mt-16 font-display text-2xl font-bold tracking-tight">
          How I work
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {principles.map((p) => (
            <div
              key={p.title}
              className="rounded-card border border-border bg-surface p-6"
            >
              <h3 className="font-display text-base font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.12}>
        <div className="mt-16 rounded-card border border-border bg-surface-2/60 p-8">
          <h2 className="font-display text-2xl font-bold tracking-tight">
            What I take on
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted">
            Agentic systems and multi-agent workflows, AI automation that has to be
            reliable, ML and data pipelines, RAG and agent-memory design, and the
            interfaces that sit on top. Contract and advisory work.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-strong"
          >
            Get in touch
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
