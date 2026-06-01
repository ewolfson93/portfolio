import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { ForceDark } from "@/components/reskin/force-dark";

export const metadata: Metadata = {
  title: "Reskin exploration",
  description: "A new visual direction for the portfolio, in progress.",
};

export default function ReskinPage() {
  return (
    <>
      <ForceDark />
      <HeroGeometric
        badge="Eric Wolfson · Agentic Systems Engineer"
        title1="Agentic systems,"
        title2="shipped to production"
        subtitle="Orchestration servers, multi-agent skills, ML pipelines, and agent-memory architectures, built with the error handling and taste that real work demands."
        cta={
          <>
            <Link
              href="#work"
              className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.08] px-5 py-2.5 text-sm text-white/90 backdrop-blur transition-colors hover:bg-white/[0.14]"
            >
              View the work
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/[0.10] px-5 py-2.5 text-sm text-white/60 transition-colors hover:text-white"
            >
              Get in touch
            </Link>
          </>
        }
      />

      {/* Placeholder runway for the components you'll step in next. */}
      <section
        id="work"
        className="relative border-t border-white/[0.06] bg-[#030303] py-24"
      >
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/30">
            Next sections drop in here
          </p>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-white/90 sm:text-4xl">
            A canvas, not a finished page
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/40">
            This is the reskin hero in place. Bring the next components and we will
            blend them into this direction: the floating geometry, the dark glass,
            and the gradient type can carry through the whole page.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {["Work", "Capabilities", "Contact"].map((label) => (
              <div
                key={label}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 text-white/50 backdrop-blur"
              >
                {label} block
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
