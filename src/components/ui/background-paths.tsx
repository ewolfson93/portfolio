"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";

function FloatingPaths({
  position,
  reduce,
  colorClassName,
}: {
  position: number;
  reduce: boolean;
  colorClassName: string;
}) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className={`w-full h-full ${colorClassName}`}
        viewBox="0 0 696 316"
        fill="none"
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03}
            initial={{ pathLength: reduce ? 1 : 0.3, opacity: 0.6 }}
            animate={
              reduce
                ? { pathLength: 1, opacity: 0.4 }
                : {
                    pathLength: 1,
                    opacity: [0.3, 0.6, 0.3],
                    pathOffset: [0, 1, 0],
                  }
            }
            transition={
              reduce
                ? { duration: 0 }
                : {
                    duration: 20 + Math.random() * 10,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }
            }
          />
        ))}
      </svg>
    </div>
  );
}

export function BackgroundPaths({
  title = "Background Paths",
  subtitle,
  cta,
  bgClassName = "bg-neutral-950",
  pathColorClassName = "text-white",
  titleGradientClassName = "from-white to-white/80",
  subtitleClassName = "text-white/75",
  // RGB triplet used to build the soft center scrim (match the background).
  scrimRgb = "10, 10, 10",
}: {
  title?: string;
  subtitle?: string;
  cta?: ReactNode;
  bgClassName?: string;
  pathColorClassName?: string;
  titleGradientClassName?: string;
  subtitleClassName?: string;
  scrimRgb?: string;
}) {
  const reduce = useReducedMotion() ?? false;
  const words = title.split(" ");

  // Many-stop falloff so the transition reads as continuous, not banded.
  const scrim =
    `radial-gradient(ellipse 72% 60% at 50% 50%, ` +
    `rgba(${scrimRgb}, 0.92) 0%, ` +
    `rgba(${scrimRgb}, 0.88) 18%, ` +
    `rgba(${scrimRgb}, 0.78) 32%, ` +
    `rgba(${scrimRgb}, 0.6) 44%, ` +
    `rgba(${scrimRgb}, 0.4) 56%, ` +
    `rgba(${scrimRgb}, 0.2) 68%, ` +
    `rgba(${scrimRgb}, 0.08) 80%, ` +
    `rgba(${scrimRgb}, 0) 92%)`;

  return (
    <div
      className={`relative min-h-screen w-full flex items-center justify-center overflow-hidden ${bgClassName}`}
    >
      <div className="absolute inset-0">
        <FloatingPaths position={1} reduce={reduce} colorClassName={pathColorClassName} />
        <FloatingPaths position={-1} reduce={reduce} colorClassName={pathColorClassName} />
      </div>

      {/* Soft radial scrim keeps text legible; lines still read at the edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: scrim }}
      />

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: reduce ? 1 : 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-8 tracking-tighter">
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block mr-4 last:mr-0">
                {word.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={`${wordIndex}-${letterIndex}`}
                    initial={{ y: reduce ? 0 : 100, opacity: reduce ? 1 : 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: wordIndex * 0.1 + letterIndex * 0.03,
                      type: "spring",
                      stiffness: 150,
                      damping: 25,
                    }}
                    className={`inline-block text-transparent bg-clip-text bg-gradient-to-r ${titleGradientClassName}`}
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className={`mx-auto mb-10 max-w-xl text-base sm:text-lg ${subtitleClassName}`}
            >
              {subtitle}
            </motion.p>
          )}

          <div
            className="inline-block group relative bg-gradient-to-b from-white/10 to-black/10
              p-px rounded-2xl backdrop-blur-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {cta ?? (
              <Button
                variant="ghost"
                className="rounded-[1.15rem] px-8 py-6 text-lg font-semibold backdrop-blur-md
                  bg-black/95 hover:bg-black/100 text-white transition-all duration-300
                  group-hover:-translate-y-0.5 border border-white/10
                  hover:shadow-md hover:shadow-neutral-800/50"
              >
                <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                  Discover Excellence
                </span>
                <span className="ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300">
                  →
                </span>
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
