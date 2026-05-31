import Link from "next/link";
import { Mail } from "lucide-react";
import { socials } from "@/lib/site-data";
import { GithubIcon, LinkedinIcon } from "./brand-icons";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="font-display text-sm font-semibold">Eric Wolfson, PhD</p>
          <p className="mt-1 text-sm text-muted">
            Agentic systems engineer · available for AI contract work
          </p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid h-9 w-9 place-items-center rounded-md border border-border text-muted transition-colors hover:border-border-strong hover:text-foreground"
          >
            <GithubIcon className="h-[18px] w-[18px]" />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid h-9 w-9 place-items-center rounded-md border border-border text-muted transition-colors hover:border-border-strong hover:text-foreground"
          >
            <LinkedinIcon className="h-[18px] w-[18px]" />
          </a>
          <a
            href={`mailto:${socials.email}`}
            aria-label="Email"
            className="grid h-9 w-9 place-items-center rounded-md border border-border text-muted transition-colors hover:border-border-strong hover:text-foreground"
          >
            <Mail className="h-[18px] w-[18px]" aria-hidden />
          </a>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 text-xs text-muted sm:px-8">
          <span>© {new Date().getFullYear()} Eric Wolfson</span>
          <Link href="/#work" className="transition-colors hover:text-foreground">
            View work
          </Link>
        </div>
      </div>
    </footer>
  );
}
