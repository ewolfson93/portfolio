import type { Metadata } from "next";
import AboutSection from "@/components/ui/about-section";
import { ForceDark } from "@/components/reskin/force-dark";

export const metadata: Metadata = {
  title: "Reskin · about section",
  description: "Branded about + capabilities + stats section (isolated view).",
};

export default function ReskinAboutPage() {
  return (
    <>
      <ForceDark />
      <AboutSection />
    </>
  );
}
