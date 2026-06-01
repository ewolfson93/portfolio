import type { Metadata } from "next";
import Link from "next/link";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { Button } from "@/components/ui/button";
import AboutSection from "@/components/ui/about-section";
import { Gallery4, type Gallery4Item } from "@/components/ui/gallery4";
import { ForceDark } from "@/components/reskin/force-dark";
import { caseStudies } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Reskin exploration · full page",
  description: "Assembled reskin candidate: branded hero, about, and work carousel.",
};

const gradients = [
  "linear-gradient(135deg, #0b1f3a 0%, #1666b5 100%)",
  "linear-gradient(135deg, #0c1530 0%, #1657c8 100%)",
  "linear-gradient(135deg, #06231f 0%, #0f766e 100%)",
  "linear-gradient(135deg, #161336 0%, #4338ca 100%)",
  "linear-gradient(135deg, #07121f 0%, #2f7df0 100%)",
  "linear-gradient(135deg, #0a1830 0%, #2563eb 100%)",
];

const workItems: Gallery4Item[] = caseStudies.map((c, i) => ({
  id: c.slug,
  title: c.title,
  description: c.tagline,
  href: `/work/${c.slug}`,
  category: c.category,
  gradient: gradients[i % gradients.length],
}));

export default function ReskinFullPage() {
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
            <Link href="#work">
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

      <AboutSection />

      <div id="work" className="scroll-mt-16 bg-[#080b14]">
        <Gallery4 title="Selected work" items={workItems} />
      </div>
    </>
  );
}
