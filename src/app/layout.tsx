import type { Metadata } from "next";
import { Bricolage_Grotesque, IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteNav } from "@/components/site/site-nav";
import { SiteFooter } from "@/components/site/site-footer";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const sans = IBM_Plex_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const SITE_URL = "https://ericwolfson.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Eric Wolfson · Agentic Systems Engineer",
    template: "%s · Eric Wolfson",
  },
  description:
    "I design and ship agentic AI systems: orchestration servers, multi-agent skills, ML data pipelines, and agent-memory architectures. PhD chemist turned platform builder.",
  openGraph: {
    title: "Eric Wolfson · Agentic Systems Engineer",
    description:
      "Agentic AI platforms, multi-agent orchestration, ML pipelines, and agent-memory architecture.",
    url: SITE_URL,
    siteName: "Eric Wolfson",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eric Wolfson · Agentic Systems Engineer",
    description:
      "Agentic AI platforms, multi-agent orchestration, ML pipelines, and agent-memory architecture.",
  },
};

// Set theme before paint to avoid a flash of the wrong color scheme.
const themeScript = `
(function () {
  try {
    var param = new URLSearchParams(window.location.search).get('theme');
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var dark = param ? param === 'dark' : stored ? stored === 'dark' : prefersDark;
    document.documentElement.classList.toggle('dark', dark);
  } catch (e) {
    document.documentElement.classList.add('dark');
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${display.variable} ${sans.variable} ${mono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-foreground"
        >
          Skip to content
        </a>
        <SiteNav />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
