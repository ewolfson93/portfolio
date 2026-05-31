/* ----------------------------------------------------------------------------
   Single source of truth for portfolio content. Edit copy and case studies here.
   Numbers are deliberately conservative and defensible (LOC, page counts, cadence).
---------------------------------------------------------------------------- */

export const socials = {
  // TODO(eric): confirm LinkedIn handle before deploy.
  github: "https://github.com/ewolfson93",
  linkedin: "https://www.linkedin.com/in/ericwolfson",
  email: "ewolfson@mychemmentor.com",
};

export const hero = {
  kicker: "Agentic systems engineer · PhD chemist",
  headline: "I build AI systems that actually run a business.",
  sub: "Orchestration servers, multi-agent skill ecosystems, ML data pipelines, and agent-memory architectures, built with the error handling, observability, and taste that production work demands.",
};

export const heroStats: { value: string; label: string }[] = [
  { value: "26", label: "production AI skills" },
  { value: "~25K", label: "lines across the platform" },
  { value: "3", label: "agent-memory vaults (~840 pages)" },
  { value: "5", label: "live external integrations" },
];

export type Capability = {
  group: string;
  items: string[];
};

export const capabilities: Capability[] = [
  {
    group: "AI & agents",
    items: [
      "Multi-agent orchestration",
      "Claude Agent SDK / skills",
      "MCP server integration",
      "Prompt & context engineering",
      "RAG & agent memory",
      "Recursive sub-agent patterns",
    ],
  },
  {
    group: "Backend & data",
    items: [
      "Python · FastAPI",
      "SSE / streaming APIs",
      "Subprocess orchestration",
      "Job persistence & state",
      "Speech-to-text (faster-whisper / Groq)",
      "Schema validation & invariants",
    ],
  },
  {
    group: "Frontend",
    items: [
      "Next.js · React · TypeScript",
      "Tailwind · design systems",
      "Vanilla-JS SPAs",
      "Motion / animation",
      "Live dashboards & data-viz",
      "Accessibility-first UI",
    ],
  },
  {
    group: "Integrations & practice",
    items: [
      "Google Workspace (Gmail / Drive / Calendar)",
      "QuickBooks · GA4 analytics",
      "Graceful degradation & fallbacks",
      "Observability & audit logging",
      "Data-quality linting",
      "Brand & voice as code",
    ],
  },
];

/* --------------------------------- diagrams -------------------------------- */

export type DiagramStage = {
  label: string;
  detail?: string;
  kind?: "input" | "process" | "agent" | "store" | "output";
  /** Renders as a parallel fan-out of nodes under this stage. */
  parallel?: { label: string; detail?: string }[];
};

/* ------------------------------- case studies ------------------------------ */

export type CaseStudy = {
  slug: string;
  order: number;
  title: string;
  category: string;
  tagline: string;
  summary: string;
  metrics: { value: string; label: string }[];
  problem: string;
  approach: string[];
  diagramTitle: string;
  diagram: DiagramStage[];
  role: string[];
  outcomes: string[];
  stack: string[];
  highlights?: string[];
  repoUrl?: string;
  repoLabel?: string;
  /** Image slots; absent images degrade gracefully to the diagram. */
  screenshots?: { src: string; alt: string; caption: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "agentic-os",
    order: 1,
    title: "Agentic OS",
    category: "Platform · orchestration server",
    tagline:
      "A FastAPI control plane that turns AI skills and routines into a clickable, streaming operations console.",
    summary:
      "The backbone of the whole system: a self-hosted server that dispatches AI skills three different ways, streams their output live to a browser, and persists every run for audit.",
    metrics: [
      { value: "~8K", label: "lines of Python" },
      { value: "3", label: "dispatch paths" },
      { value: "SSE", label: "live job streaming" },
    ],
    problem:
      "Dozens of AI skills and automations existed as disconnected CLI scripts. There was no way to launch one from a UI, watch it work in real time, cancel it, or look back at what ran and why. Fire-and-forget scripts don't scale into an operating system.",
    approach: [
      "Built a FastAPI server exposing a REST surface plus Server-Sent Events for line-by-line stdout streaming.",
      "Designed a three-path dispatcher: native Python builtins run inline, file-based scripts subprocess through a launcher, and Claude-driven skills shell out to `claude -p` headlessly.",
      "Added a job store with 12-char hex IDs, cancellation via process-tree kill, and on-disk history partitioned by month for a full audit trail.",
      "Wrapped Gmail / Calendar / Drive / QuickBooks through MCP so a single draft-builder module can assemble context-aware emails under enforced voice rules.",
    ],
    diagramTitle: "Request → dispatch → stream → persist",
    diagram: [
      { label: "Browser console", detail: "POST /skill/invoke", kind: "input" },
      {
        label: "Dispatcher",
        detail: "routes by skill type",
        kind: "process",
        parallel: [
          { label: "Builtin", detail: "inline Python" },
          { label: "Script", detail: "subprocess launcher" },
          { label: "Claude skill", detail: "claude -p headless" },
        ],
      },
      { label: "Job store", detail: "state + SSE stream", kind: "agent" },
      { label: "History", detail: "jobs/YYYY-MM/*.json", kind: "store" },
      { label: "Live UI", detail: "stdout streamed to browser", kind: "output" },
    ],
    role: [
      "Sole architect and engineer: API design, dispatch model, streaming, state, and the email draft-builder.",
      "Designed for headless and interactive contexts so the same skills run from the UI or from a scheduler.",
    ],
    outcomes: [
      "Every routine is now launchable, observable, and cancellable from one console.",
      "Full run history makes the system auditable, with no guessing about what executed.",
      "Published as a public repository with a generalized, data-free configuration.",
    ],
    stack: [
      "Python",
      "FastAPI",
      "Server-Sent Events",
      "MCP",
      "subprocess",
      "Claude Agent SDK",
    ],
    highlights: [
      "Three-path dispatch in one coherent API",
      "1,000+ LOC voice-aware email draft-builder",
      "Process-tree cancellation on Windows",
    ],
    repoUrl: "https://github.com/ewolfson93/Agentic-OS-Repo",
    repoLabel: "Agentic-OS-Repo",
  },
  {
    slug: "session-transcript-pipeline",
    order: 2,
    title: "Session-Transcript Pipeline",
    category: "ML data pipeline",
    tagline:
      "Screen recording in, structured student deliverable out. A full speech-to-insight pipeline with graceful degradation.",
    summary:
      "Turns raw tutoring-session recordings into transcripts, routes them into a knowledge vault, and auto-generates a branded recap PDF and follow-up email without manual touch.",
    metrics: [
      { value: "~700", label: "lines of pipeline code" },
      { value: "large-v3", label: "local GPU transcription" },
      { value: "<12h", label: "recording to deliverable" },
    ],
    problem:
      "Every tutoring session produced a recording that held real teaching value, but extracting it by hand (transcribing, summarizing, writing a recap, drafting a follow-up) was slow and never happened consistently.",
    approach: [
      "Watcher scans for new recordings, parses the student from the filename, and dispatches each file into the pipeline.",
      "Transcription runs locally on GPU with faster-whisper large-v3 (CUDA, fp16) and falls back to the Groq API when the local path is unavailable.",
      "A routing step parses the transcript, classifies topics and learning outcomes, and writes a dated session note into the student vault.",
      "Creation of that note triggers the follow-up skill: a content-driven recap PDF plus an email draft in the writer's voice.",
    ],
    diagramTitle: "OBS recording → transcript → vault → deliverable",
    diagram: [
      { label: "OBS recording", detail: ".mp4 on disk", kind: "input" },
      { label: "Watcher", detail: "detect + identify student", kind: "process" },
      {
        label: "Transcribe",
        detail: "with fallback",
        kind: "agent",
        parallel: [
          { label: "Local GPU", detail: "faster-whisper large-v3" },
          { label: "Groq API", detail: "fallback path" },
        ],
      },
      { label: "Route", detail: "topics + outcomes → vault note", kind: "store" },
      { label: "Follow-up", detail: "recap PDF + email draft", kind: "output" },
    ],
    role: [
      "Designed and built the full pipeline: watcher, transcription with fallback, routing, and the downstream trigger.",
      "Tuned the GPU path (cuBLAS DLL colocation, calendar-id routing fix, native-exit crash tolerance).",
    ],
    outcomes: [
      "Sessions become structured, searchable knowledge automatically.",
      "Branded recap deliverables ship reliably instead of slipping.",
      "Graceful degradation means a local-GPU hiccup never stalls the pipeline.",
    ],
    stack: [
      "Python",
      "faster-whisper",
      "CUDA",
      "Groq API",
      "Google Workspace (MCP)",
      "HTML→PDF",
    ],
    highlights: [
      "Local-first ML with cloud fallback",
      "Filename → student → calendar resolution",
      "Auto-triggers the deliverable, end to end",
    ],
  },
  {
    slug: "agent-memory-vaults",
    order: 3,
    title: "Agent-Memory Vault Architecture",
    category: "RAG · knowledge systems",
    tagline:
      "Three knowledge vaults with a hot-cache, an append-only log, and token-ceiling auto-archiving. Agent memory designed at the systems level.",
    summary:
      "A markdown-native knowledge architecture that keeps an agent's working memory bounded and fast while scaling to hundreds of interlinked pages across business, students, and research.",
    metrics: [
      { value: "~840", label: "interlinked pages" },
      { value: "3", label: "specialized vaults" },
      { value: "v2", label: "sharded schema" },
    ],
    problem:
      "A single growing knowledge file eventually blows past an agent's context window, and re-reading an entire wiki on every task is slow and expensive. Knowledge systems need bounded, fast working memory without losing history.",
    approach: [
      "Designed a hot-cache pattern: a small, capped 'read-first' page surfaces active threads and key numbers so the agent loads context cheaply.",
      "Made the log append-only: an immutable, time-travelable record of every ingest and decision (event-sourcing applied to a vault).",
      "For per-entity records, built a sharded folder schema with token ceilings and threshold-triggered auto-archiving that pages old content out deterministically.",
      "Enforced reciprocal cross-linking so the vault is a queryable graph, not a pile of files.",
    ],
    diagramTitle: "Bounded working memory, unbounded history",
    diagram: [
      { label: "New source", detail: "email · doc · session", kind: "input" },
      { label: "Ingest protocol", detail: "write page · update links", kind: "process" },
      {
        label: "Live tier",
        detail: "bounded by token ceilings",
        kind: "agent",
        parallel: [
          { label: "Hot-cache", detail: "read-first snapshot" },
          { label: "Profile / notes", detail: "capped working set" },
        ],
      },
      { label: "Auto-archive", detail: "at ~90% ceiling → shard", kind: "store" },
      { label: "Append-only log", detail: "immutable audit trail", kind: "output" },
    ],
    role: [
      "Designed the schema, the hot-cache eviction rules, and the token-ceiling archive thresholds.",
      "Documented a v1→v2 migration protocol and ran the pilot migration without loss of fidelity.",
    ],
    outcomes: [
      "Agent context stays small and fast even as the knowledge base grows for years.",
      "History is never lost; archived entries stay indexed and deep-linkable.",
      "The same pattern generalizes across three very different knowledge domains.",
    ],
    stack: [
      "Markdown / Obsidian",
      "YAML frontmatter",
      "Agent ingestion protocols",
      "Event-sourced logs",
      "Knowledge-graph linking",
    ],
    highlights: [
      "Hot-cache = bounded agent working memory",
      "Token-ceiling auto-archive (deterministic, not time-based)",
      "Append-only log for full auditability",
    ],
  },
  {
    slug: "job-scout-pipeline",
    order: 4,
    title: "Safety-Gated Web Pipeline",
    category: "Web-data pipeline",
    tagline:
      "A daily job-discovery agent with four-gate link validation and a recursive sub-agent that verifies anything it can't confirm.",
    summary:
      "Searches the web across categories, scores results against a profile, and refuses to surface a single dead or expired link, delegating verification to a cheaper sub-agent when unsure.",
    metrics: [
      { value: "4", label: "validation gates" },
      { value: "daily", label: "scheduled run" },
      { value: "0", label: "dead links shipped" },
    ],
    problem:
      "Naive scrapers happily return broken URLs, expired postings, and listings whose requirements don't match. A digest that wastes the reader's time on dead links is worse than no digest.",
    approach: [
      "Search across defined categories, then score each result against a structured profile with a tiered rubric.",
      "Run a four-gate validity check: URL specificity, HTTP status (404 / 403 / paywall), expiration sentinels, and credential-block parsing.",
      "When a gate is ambiguous, for example a 403 that might still be live, spawn a cheaper sub-agent to verify via cached snippets or RSS before deciding.",
      "Deduplicate against a persisted seen-set so the daily digest never repeats a posting.",
    ],
    diagramTitle: "Search → score → validate → verify → digest",
    diagram: [
      { label: "Web search", detail: "by category", kind: "input" },
      { label: "Score", detail: "tiered rubric vs profile", kind: "process" },
      {
        label: "4-gate validation",
        detail: "drop anything unverifiable",
        kind: "agent",
        parallel: [
          { label: "URL + HTTP", detail: "specificity · 404 / 403" },
          { label: "Expiry + creds", detail: "sentinels · JD blocks" },
        ],
      },
      { label: "Sub-agent verify", detail: "cheaper model on ambiguity", kind: "store" },
      { label: "Deduped digest", detail: "no repeats, no dead links", kind: "output" },
    ],
    role: [
      "Designed the validation gates and the escalation rule that delegates uncertain checks to a sub-agent.",
      "Built the scoring rubric and the persistent dedup layer.",
    ],
    outcomes: [
      "A reliable daily digest that respects the reader's attention.",
      "Production data-pipeline discipline: never emit an unverified row; if unsure, delegate; if still unsure, drop it.",
    ],
    stack: [
      "Python",
      "WebSearch",
      "Recursive sub-agents",
      "Tiered scoring",
      "Persistent dedup",
    ],
    highlights: [
      "Four independent validity gates",
      "Escalate-to-cheaper-model on ambiguity",
      "Zero dead links by construction",
    ],
  },
  {
    slug: "voice-governed-content",
    order: 5,
    title: "Voice-Governed Content Engine",
    category: "Content systems · brand as code",
    tagline:
      "Writing skills that enforce a personal voice as machine-checkable rules, version content as markdown, and render branded PDFs.",
    summary:
      "A family of generation skills (blog, session recap, consult follow-up) that treat brand and voice as enforceable constraints, not vibes, with a pre-save checklist that fails the draft if it drifts.",
    metrics: [
      { value: "3+", label: "generation skills" },
      { value: "11", label: "point voice checklist" },
      { value: ".md→PDF", label: "versioned output" },
    ],
    problem:
      "AI writing tools produce generic, on-the-nose copy that doesn't sound like the author and quietly reintroduces the same tells every time. Voice consistency at volume needs to be enforced, not hoped for.",
    approach: [
      "Encoded the author's voice as an explicit rule set: banned constructions, AI tells, punctuation rules, and tone calibrations drawn from real edits.",
      "Added a pre-save checklist the draft must pass (em-dash scrub, cliché detection, citation audit, structural checks) before it is allowed to ship.",
      "Adopted a markdown-sidecar convention: an editable `.md` source plus a rendered `.html`/PDF, so content is versionable and re-renderable.",
      "Built topic-driven, brand-consistent PDF templates rather than one rigid layout.",
    ],
    diagramTitle: "Source → draft → voice gate → branded deliverable",
    diagram: [
      { label: "Source", detail: "research vault / transcript", kind: "input" },
      { label: "Draft", detail: "voice rules applied", kind: "process" },
      {
        label: "Voice gate",
        detail: "fails the draft on drift",
        kind: "agent",
        parallel: [
          { label: "Banned patterns", detail: "AI tells · em-dashes" },
          { label: "Structure + cites", detail: "audited pre-save" },
        ],
      },
      { label: "Markdown source", detail: "editable, versioned", kind: "store" },
      { label: "Branded PDF / HTML", detail: "topic-driven design", kind: "output" },
    ],
    role: [
      "Authored the voice rule sets and the enforcement checklist, calibrated from real corrections over time.",
      "Designed the brand-consistent, accessibility-aware deliverable templates.",
    ],
    outcomes: [
      "Generated content sounds like the author, consistently, at volume.",
      "Brand and voice are reproducible engineering artifacts, not one-off prompts.",
    ],
    stack: [
      "Claude Agent SDK",
      "Markdown",
      "HTML / CSS",
      "HTML→PDF",
      "Design tokens",
    ],
    highlights: [
      "Voice as machine-checkable rules",
      "Draft fails the gate on drift",
      "Versioned markdown-sidecar output",
    ],
  },
  {
    slug: "ops-dashboard",
    order: 6,
    title: "Operations Dashboard & Validators",
    category: "Frontend · data quality",
    tagline:
      "A framework-free SPA rendering a live operations view, backed by 2,600 lines of integrity checks across three validators.",
    summary:
      "A vanilla-JavaScript single-page app with live job streaming and a multi-tab operations view, paired with an obsessive data-quality layer that catches corruption before it reaches a deliverable.",
    metrics: [
      { value: "~2.6K", label: "LOC of validators" },
      { value: "6+", label: "operations tabs" },
      { value: "100+", label: "records in the live view" },
    ],
    problem:
      "A platform that feeds dashboards, PDFs, and emails from shared data files is only as trustworthy as that data. Silent corruption (a bad date, a broken cross-link, an out-of-sync count) cascades into every downstream artifact.",
    approach: [
      "Built the UI as a framework-free SPA: vanilla DOM, CSS custom properties for theming, careful rendering of a 100+ record roster.",
      "Wired live job output into the view via Server-Sent Events.",
      "Wrote three separate validators (lint, behavior, and pipeline) that check roster consistency, KPI math, date formats, and end-to-end integrity.",
      "Treated validator failures as blocking: bad data is caught at the source, not in a student's PDF.",
    ],
    diagramTitle: "Data → validators → live operations view",
    diagram: [
      { label: "Data files", detail: "roster · KPIs · analytics", kind: "input" },
      {
        label: "Validators",
        detail: "blocking on failure",
        kind: "process",
        parallel: [
          { label: "Lint", detail: "schema + consistency" },
          { label: "Behavior", detail: "state invariants" },
          { label: "Pipeline", detail: "end-to-end integrity" },
        ],
      },
      { label: "Dashboard SPA", detail: "vanilla JS · themed", kind: "agent" },
      { label: "Live jobs", detail: "SSE stream", kind: "output" },
    ],
    role: [
      "Built the dashboard UI and the three-part validation suite.",
      "Designed the theming system and the live-streaming job view.",
    ],
    outcomes: [
      "Data problems surface as failed checks, not as broken deliverables.",
      "A usable, fast operations view without the weight of a frontend framework.",
    ],
    stack: [
      "Vanilla JS",
      "CSS custom properties",
      "Server-Sent Events",
      "Python validators",
      "JSON data layer",
    ],
    highlights: [
      "Framework-free SPA, still fast at scale",
      "2,600 LOC of inspection logic",
      "Blocking data-quality gates",
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
