"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import {
  Server,
  Bot,
  Cpu,
  Database,
  ShieldCheck,
  LayoutDashboard,
  Boxes,
  Code,
  Plug,
  Sparkles,
  CheckCircle,
  Star,
  ArrowRight,
  Zap,
} from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useSpring,
  useReducedMotion,
  type Variants,
} from "motion/react";
import Link from "next/link";
import { ConsoleMock } from "@/components/site/console-mock";

const ACCENT = "#4f8df5";

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion() ?? false;
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.3 });
  const show = (inView: boolean) => (reduce || inView ? "visible" : "hidden");

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.18, delayChildren: 0.2 },
    },
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const services = [
    {
      icon: <Server className="w-6 h-6" />,
      secondaryIcon: <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-[#6b8cc0]" />,
      title: "Agentic orchestration",
      description:
        "FastAPI control planes that dispatch AI skills three ways, stream output live over SSE, and persist every run for audit.",
      position: "left",
    },
    {
      icon: <Bot className="w-6 h-6" />,
      secondaryIcon: <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-[#6b8cc0]" />,
      title: "Multi-agent skills",
      description:
        "Two dozen production skills with recursive sub-agents, safety gates, and brand and voice enforced as machine-checkable rules.",
      position: "left",
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      secondaryIcon: <Star className="w-4 h-4 absolute -top-1 -right-1 text-[#6b8cc0]" />,
      title: "ML & data pipelines",
      description:
        "Speech-to-insight pipelines with graceful degradation: local-GPU transcription, cloud fallback, and downstream triggers.",
      position: "left",
    },
    {
      icon: <Database className="w-6 h-6" />,
      secondaryIcon: <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-[#6b8cc0]" />,
      title: "Agent memory & RAG",
      description:
        "Bounded working memory with a hot-cache, append-only logs, and token-ceiling auto-archiving across knowledge vaults.",
      position: "right",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      secondaryIcon: <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-[#6b8cc0]" />,
      title: "Data quality & safety",
      description:
        "Blocking validators that catch corruption before it reaches a deliverable, plus web pipelines with real validity gates.",
      position: "right",
    },
    {
      icon: <LayoutDashboard className="w-6 h-6" />,
      secondaryIcon: <Star className="w-4 h-4 absolute -top-1 -right-1 text-[#6b8cc0]" />,
      title: "Interfaces & dashboards",
      description:
        "Live operations dashboards and design systems, fast without a framework and accessible by default.",
      position: "right",
    },
  ];

  const stats = [
    { icon: <Boxes />, value: 26, label: "Production AI skills", suffix: "" },
    { icon: <Code />, value: 25, label: "Lines across the platform", suffix: "K" },
    { icon: <Database />, value: 840, label: "Agent-memory pages", suffix: "+" },
    { icon: <Plug />, value: 5, label: "Live integrations", suffix: "" },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full py-24 px-4 bg-gradient-to-b from-[#081226] to-[#0b1832] text-[#e8ecf4] overflow-hidden relative"
    >
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#1666B5]/10 blur-3xl"
        style={{ y: y1 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[#4f8df5]/10 blur-3xl"
        style={{ y: y2 }}
      />

      <motion.div
        className="container mx-auto max-w-6xl relative z-10"
        initial={reduce ? "visible" : "hidden"}
        animate={show(isInView)}
        variants={containerVariants}
      >
        <motion.div className="flex flex-col items-center mb-6" variants={itemVariants}>
          <span className="text-[#4f8df5] font-medium mb-2 flex items-center gap-2 font-mono text-sm tracking-wide">
            <Zap className="w-4 h-4" />
            How I work
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4 text-center tracking-tight">
            What I build
          </h2>
          <motion.div
            className="h-1 bg-[#4f8df5] rounded-full"
            initial={{ width: reduce ? 96 : 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        <motion.p
          className="text-center max-w-2xl mx-auto mb-16 text-[#b9c4d8]/80 leading-relaxed"
          variants={itemVariants}
        >
          I design and ship agentic AI systems end to end: the orchestration, the
          skills, the pipelines, and the memory underneath. Built with the error
          handling, observability, and taste that production work demands.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="space-y-16">
            {services
              .filter((s) => s.position === "left")
              .map((s, i) => (
                <ServiceItem key={`l-${i}`} {...s} variants={itemVariants} delay={i * 0.15} direction="left" />
              ))}
          </div>

          {/* Center visual: live console card instead of a stock photo */}
          <div className="flex justify-center items-center order-first md:order-none mb-8 md:mb-0">
            <motion.div className="relative w-full max-w-sm" variants={itemVariants}>
              <motion.div
                className="rounded-xl overflow-hidden shadow-xl"
                initial={{ scale: reduce ? 1 : 0.94, opacity: reduce ? 1 : 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <ConsoleMock />
              </motion.div>
              <div className="absolute inset-0 border-2 border-[#4f8df5]/30 rounded-2xl -m-3 z-[-1]" />
              <motion.div
                className="absolute -top-4 -right-8 w-16 h-16 rounded-full bg-[#1666B5]/15"
                style={{ y: y1 }}
              />
              <motion.div
                className="absolute -bottom-6 -left-10 w-20 h-20 rounded-full bg-[#4f8df5]/15"
                style={{ y: y2 }}
              />
            </motion.div>
          </div>

          <div className="space-y-16">
            {services
              .filter((s) => s.position === "right")
              .map((s, i) => (
                <ServiceItem key={`r-${i}`} {...s} variants={itemVariants} delay={i * 0.15} direction="right" />
              ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          ref={statsRef}
          className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={reduce ? "visible" : "hidden"}
          animate={show(isStatsInView)}
          variants={containerVariants}
        >
          {stats.map((s, i) => (
            <StatCounter key={i} {...s} delay={i * 0.1} />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-20 border border-white/10 bg-white/[0.03] text-white p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur"
          initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 30 }}
          animate={
            reduce || isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex-1">
            <h3 className="font-display text-2xl font-semibold mb-2">
              Have an AI system that needs to ship?
            </h3>
            <p className="text-white/60">Open to contract and advisory work.</p>
          </div>
          <Link
            href="/contact"
            className="bg-[#1666B5] hover:bg-[#1657c8] text-white px-6 py-3 rounded-lg flex items-center gap-2 font-medium transition-colors"
          >
            Start a conversation <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

interface ServiceItemProps {
  icon: React.ReactNode;
  secondaryIcon?: React.ReactNode;
  title: string;
  description: string;
  variants: Variants;
  delay: number;
  direction: "left" | "right";
}

function ServiceItem({ icon, secondaryIcon, title, description, variants, delay, direction }: ServiceItemProps) {
  const reduce = useReducedMotion() ?? false;
  return (
    <motion.div
      className="flex flex-col group"
      variants={variants}
      transition={{ delay }}
      whileHover={reduce ? undefined : { y: -5, transition: { duration: 0.2 } }}
    >
      <motion.div
        className="flex items-center gap-3 mb-3"
        initial={{ x: reduce ? 0 : direction === "left" ? -20 : 20, opacity: reduce ? 1 : 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
      >
        <div className="text-[#4f8df5] bg-[#4f8df5]/10 p-3 rounded-lg transition-colors duration-300 group-hover:bg-[#4f8df5]/20 relative">
          {icon}
          {secondaryIcon}
        </div>
        <h3 className="text-xl font-medium text-[#e8ecf4] group-hover:text-[#4f8df5] transition-colors duration-300">
          {title}
        </h3>
      </motion.div>
      <p className="text-sm text-[#b9c4d8]/75 leading-relaxed pl-12">{description}</p>
    </motion.div>
  );
}

interface StatCounterProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix: string;
  delay: number;
}

function StatCounter({ icon, value, label, suffix, delay }: StatCounterProps) {
  const reduce = useReducedMotion() ?? false;
  const countRef = useRef(null);
  const isInView = useInView(countRef, { once: true });
  const [hasAnimated, setHasAnimated] = useState(false);
  const springValue = useSpring(0, { stiffness: 50, damping: 12 });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      springValue.set(value);
      setHasAnimated(true);
    }
  }, [isInView, value, springValue, hasAnimated]);

  const animated = useTransform(springValue, (latest) => Math.floor(latest));

  return (
    <motion.div
      className="border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 rounded-xl flex flex-col items-center text-center group hover:bg-white/[0.06] transition-colors duration-300"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
      }}
    >
      <div className="w-14 h-14 rounded-full bg-white/[0.04] flex items-center justify-center mb-4 text-[#4f8df5] group-hover:bg-[#4f8df5]/10 transition-colors duration-300">
        {icon}
      </div>
      <div ref={countRef} className="font-display text-3xl font-bold text-[#e8ecf4] flex items-center">
        {reduce ? <span>{value}</span> : <motion.span>{animated}</motion.span>}
        <span>{suffix}</span>
      </div>
      <p className="text-[#b9c4d8]/70 text-sm mt-1">{label}</p>
      <div className="w-10 h-0.5 bg-[#4f8df5] mt-3 group-hover:w-16 transition-all duration-300" />
    </motion.div>
  );
}
