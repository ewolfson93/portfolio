import type { Metadata } from "next";
import Link from "next/link";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { Button } from "@/components/ui/button";
import { ForceDark } from "@/components/reskin/force-dark";

export const metadata: Metadata = {
  title: "Reskin exploration · paths (branded)",
  description: "Background-paths direction in the navy/blue brand palette.",
};

export default function ReskinPathsBrandPage() {
  return (
    <>
      <ForceDark />
      <BackgroundPaths
        title="Agentic Systems"
        subtitle="Orchestration servers, multi-agent skills, ML pipelines, and agent-memory architectures, engineered to ship."
        bgClassName="bg-[#081226]"
        pathColorClassName="text-[#4f8df5]"
        titleGradientClassName="from-white to-[#9cc4ff]"
        subtitleClassName="text-[#b9d2f7]/85"
        scrimRgb="8, 18, 38"
        cta={
          <Button
            asChild
            variant="ghost"
            className="rounded-[1.15rem] px-8 py-6 text-lg font-semibold backdrop-blur-md
              bg-[#1666B5] hover:bg-[#1657c8] text-white transition-all duration-300
              group-hover:-translate-y-0.5 border border-white/15
              hover:shadow-md hover:shadow-[#1666B5]/40"
          >
            <Link href="/">
              <span className="opacity-95 group-hover:opacity-100 transition-opacity">
                View the work
              </span>
              <span className="ml-3 opacity-80 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300">
                →
              </span>
            </Link>
          </Button>
        }
      />
    </>
  );
}
