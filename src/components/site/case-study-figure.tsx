"use client";

import { useState } from "react";
import { ImageOff } from "lucide-react";

type Shot = { src: string; alt: string; caption: string };

export function CaseStudyFigure({ shot }: { shot: Shot }) {
  const [failed, setFailed] = useState(false);

  return (
    <figure>
      <div className="overflow-hidden rounded-card border border-border bg-surface-2">
        {failed ? (
          <div className="flex aspect-[16/10] flex-col items-center justify-center gap-3 text-muted">
            <ImageOff className="h-7 w-7" aria-hidden />
            <span className="px-6 text-center text-sm">{shot.caption}</span>
          </div>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={shot.src}
            alt={shot.alt}
            loading="lazy"
            onError={() => setFailed(true)}
            className="w-full"
          />
        )}
      </div>
      <figcaption className="mt-3 text-sm text-muted">
        {shot.caption}{" "}
        <span className="text-muted/70">· identifying details redacted</span>
      </figcaption>
    </figure>
  );
}
