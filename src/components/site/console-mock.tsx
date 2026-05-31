"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

const lines: { text: string; tone: "cmd" | "ok" | "info" | "dim" }[] = [
  { text: "$ agentic-os invoke daily-brief", tone: "cmd" },
  { text: "→ dispatch: claude skill (headless)", tone: "dim" },
  { text: "● vault-ingest      3 new sessions", tone: "info" },
  { text: "● analytics         GA4 synced", tone: "info" },
  { text: "● dashboard         6 tabs refreshed", tone: "info" },
  { text: "✓ job 8f3a1c9b2d04   exit 0  ·  4.1s", tone: "ok" },
];

const toneClass: Record<string, string> = {
  cmd: "text-foreground",
  ok: "text-signal",
  info: "text-muted-strong",
  dim: "text-muted",
};

export function ConsoleMock() {
  const reduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const animate = mounted && !reduced;

  return (
    <div className="w-full max-w-md overflow-hidden rounded-card border border-border bg-surface shadow-lg">
      <div className="flex items-center gap-2 border-b border-border bg-surface-2 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-border-strong" aria-hidden />
        <span className="h-2.5 w-2.5 rounded-full bg-border-strong" aria-hidden />
        <span className="h-2.5 w-2.5 rounded-full bg-border-strong" aria-hidden />
        <span className="ml-2 font-mono text-xs text-muted">
          agentic-os · live job stream
        </span>
      </div>
      <div className="space-y-1.5 p-4 font-mono text-[12.5px] leading-relaxed sm:p-5">
        {lines.map((line, i) =>
          animate ? (
            <motion.div
              key={line.text}
              className={toneClass[line.tone]}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.22, duration: 0.35 }}
            >
              {line.text}
            </motion.div>
          ) : (
            <div key={line.text} className={toneClass[line.tone]}>
              {line.text}
            </div>
          ),
        )}
        <span
          className="inline-block h-4 w-2 bg-accent align-middle motion-safe:animate-pulse"
          aria-hidden
        />
      </div>
    </div>
  );
}
