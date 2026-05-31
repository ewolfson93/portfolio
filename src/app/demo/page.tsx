import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { DemoDashboard } from "@/components/demo/demo-dashboard";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Live demo · Operations dashboard",
  description:
    "Interactive demo of the My Chem Mentor operations dashboard, running on fully simulated data.",
};

export default function DemoPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
      <Reveal>
        <Link
          href="/work/ops-dashboard"
          className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Back to the case study
        </Link>

        <h1 className="mt-8 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Operations dashboard
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          This is the real interface from the AI operations platform, running on a fully
          simulated dataset so it can be shown publicly. Switch tabs to explore the roster,
          finance view, and the automation runs that feed it. In production the same UI reads
          live data from the knowledge vaults; no real student information appears here.
        </p>
      </Reveal>

      <Reveal delay={0.08} className="mt-8">
        <DemoDashboard />
      </Reveal>

      <Reveal delay={0.12}>
        <p className="mt-6 text-xs text-muted">
          Every name, course, and figure on this page is invented for demonstration.
        </p>
      </Reveal>
    </div>
  );
}
