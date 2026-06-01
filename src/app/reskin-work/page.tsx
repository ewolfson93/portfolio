import type { Metadata } from "next";
import { Gallery4, type Gallery4Item } from "@/components/ui/gallery4";
import { ForceDark } from "@/components/reskin/force-dark";
import { caseStudies } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Reskin · work carousel",
  description: "Branded work carousel built from the case studies (isolated view).",
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

export default function ReskinWorkPage() {
  return (
    <>
      <ForceDark />
      <div className="min-h-screen bg-[#080b14]">
        <Gallery4 title="Selected work" items={workItems} />
      </div>
    </>
  );
}
