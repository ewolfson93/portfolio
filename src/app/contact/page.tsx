import type { Metadata } from "next";
import { Mail, ArrowUpRight } from "lucide-react";
import { socials } from "@/lib/site-data";
import { Reveal } from "@/components/motion/reveal";
import { GithubIcon, LinkedinIcon } from "@/components/site/brand-icons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch about agentic AI systems, automation, and contract or advisory work.",
};

const channels = [
  {
    label: "Email",
    value: socials.email,
    href: `mailto:${socials.email}`,
    icon: Mail,
    primary: true,
  },
  {
    label: "GitHub",
    value: "github.com/ewolfson93",
    href: socials.github,
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    value: "in/eric-wolfson",
    href: socials.linkedin,
    icon: LinkedinIcon,
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-28">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          Contact
        </p>
        <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          Let&apos;s talk about your system.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          Whether it is an agentic build, an automation that has to be reliable, or
          a data pipeline that keeps breaking, send a short note about what you are
          working on and I will reply.
        </p>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="mt-10 space-y-3">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer"
              className="group flex items-center justify-between gap-4 rounded-card border border-border bg-surface p-5 transition-colors hover:border-border-strong"
            >
              <div className="flex items-center gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-lg border border-border bg-surface-2 text-accent">
                  <c.icon className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <div className="text-sm text-muted">{c.label}</div>
                  <div className="font-display text-base font-semibold">
                    {c.value}
                  </div>
                </div>
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted transition-colors group-hover:text-foreground" />
            </a>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.12}>
        <p className="mt-10 text-sm text-muted">
          Based in the Eastern time zone. Open to remote contract and advisory
          engagements.
        </p>
      </Reveal>
    </div>
  );
}
