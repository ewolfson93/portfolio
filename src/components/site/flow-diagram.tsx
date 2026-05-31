import { Fragment } from "react";
import { ChevronRight } from "lucide-react";
import type { DiagramStage } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const kindDot: Record<NonNullable<DiagramStage["kind"]>, string> = {
  input: "bg-signal",
  process: "bg-accent",
  agent: "bg-accent-strong",
  store: "bg-muted",
  output: "bg-signal",
};

function StageCard({ stage }: { stage: DiagramStage }) {
  return (
    <div className="flex min-w-[8.5rem] flex-1 flex-col rounded-lg border border-border bg-surface p-3 shadow-sm">
      <div className="flex items-center gap-2">
        <span
          className={cn(
            "h-2 w-2 shrink-0 rounded-full",
            kindDot[stage.kind ?? "process"],
          )}
          aria-hidden
        />
        <span className="font-display text-[13px] font-semibold leading-tight">
          {stage.label}
        </span>
      </div>
      {stage.detail && (
        <span className="mt-1 pl-4 text-xs leading-snug text-muted">
          {stage.detail}
        </span>
      )}
      {stage.parallel && (
        <div className="mt-2.5 flex flex-col gap-2 border-l border-border-strong pl-3">
          {stage.parallel.map((p) => (
            <div key={p.label}>
              <span className="block font-mono text-xs font-medium text-foreground">
                {p.label}
              </span>
              {p.detail && (
                <span className="block text-xs leading-snug text-muted">
                  {p.detail}
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function FlowDiagram({
  stages,
  title,
}: {
  stages: DiagramStage[];
  title?: string;
}) {
  return (
    <figure>
      {title && (
        <figcaption className="mb-4 flex items-center gap-2 font-mono text-xs tracking-wide text-muted">
          <span className="h-px w-6 bg-border-strong" aria-hidden />
          {title}
        </figcaption>
      )}
      <div className="flex flex-col items-stretch gap-2 md:flex-row md:items-stretch">
        {stages.map((stage, i) => (
          <Fragment key={stage.label}>
            <StageCard stage={stage} />
            {i < stages.length - 1 && (
              <div
                className="flex shrink-0 items-center justify-center text-border-strong"
                aria-hidden
              >
                <ChevronRight className="hidden h-5 w-5 md:block" />
                <ChevronRight className="h-5 w-5 rotate-90 md:hidden" />
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </figure>
  );
}
