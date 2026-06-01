import type { Metadata } from "next";
import Link from "next/link";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { Button } from "@/components/ui/button";
import { ForceDark } from "@/components/reskin/force-dark";

export const metadata: Metadata = {
  title: "Reskin exploration · paths",
  description: "A second visual direction for the portfolio, in progress.",
};

export default function ReskinPathsPage() {
  return (
    <>
      <ForceDark />
      <BackgroundPaths
        title="Agentic Systems"
        subtitle="Orchestration servers, multi-agent skills, ML pipelines, and agent-memory architectures, engineered to ship."
        cta={
          <Button
            asChild
            variant="ghost"
            className="rounded-[1.15rem] px-8 py-6 text-lg font-semibold backdrop-blur-md
              bg-black/95 hover:bg-black/100 text-white transition-all duration-300
              group-hover:-translate-y-0.5 border border-white/10
              hover:shadow-md hover:shadow-neutral-800/50"
          >
            <Link href="/">
              <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                View the work
              </span>
              <span className="ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300">
                →
              </span>
            </Link>
          </Button>
        }
      />
    </>
  );
}
