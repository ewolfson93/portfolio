# Follow-ups

Tracked work remaining on the portfolio, in rough priority order.

## 1. Screenshots / a "demo mode" dashboard  (deferred by design)

The case studies currently lead with data-driven architecture diagrams (no images). Real screenshots
of the dashboard and vaults are deferred because those screens contain **real student PII**, which
must never leave the Students vault.

**Decision (2026-05-31):** instead of redacting real screens, build a **seeded fake dataset** that
simulates a scaled practice. This protects real data and, importantly, shows the system at a more
impressive scale than the current handful of real students.

Two tiers:

- **Tier A (quick):** generate ~15-25 fictional students (realistic names, courses, package math,
  session history) into a `dashboard-data.demo.js`, load it in the existing `dashboard.html`, and
  capture screenshots. Low effort, reuses the current UI.
- **Tier B (polished):** rebuild a read-only "demo dashboard" view inside this portfolio's own
  Next.js + Tailwind stack (same data shape, modern brand-matched visuals). More work, but the
  screenshots would look portfolio-grade and could double as a live interactive demo route
  (e.g. `/demo`).

Recommendation: do Tier A first to validate the look, then decide whether Tier B is worth it. A
permanent demo dataset is reusable for screenshots, screen recordings, and live walkthroughs.

## 2. Custom domain

Deploying to a free `vercel.app` URL first. Attach a domain later (recommended: `ericwolfson.com`
or `ericwolfson.dev`). Buy at Cloudflare Registrar or Porkbun, then add it in the Vercel dashboard
(two DNS records).

## 3. LinkedIn URL

`src/lib/site-data.ts` `socials.linkedin` is a placeholder (`in/ericwolfson`). Replace with the real
profile URL.

## 4. Optional design tooling

For future component iteration: 21st.dev Magic MCP (shadcn components) and the ui-ux-pro-max skill
(design-system generation). Not required; the site was built to a high bar without them.

## 5. Optional: pin the repo + add topics on GitHub

Pin `portfolio` and `Agentic-OS-Repo` on the profile, and add topics (next.js, ai, agents,
portfolio) for discoverability.
