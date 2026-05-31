# Follow-ups

Tracked work remaining on the portfolio, in rough priority order.

## 1. Demo dashboard  (Tier B SHIPPED 2026-05-31)

Instead of redacting real screens (which hold student PII), the portfolio ships a live, brand-matched
**operations dashboard at `/demo`** running on a fully fictional seeded dataset (`src/lib/demo-data.ts`,
22 invented students). Tabs: Overview, Roster, Finance, Automations. Deep-linkable via hash
(`/demo#roster`). Linked from the nav and the ops-dashboard case study.

This protects real data and shows the system at a more impressive scale than the current handful of
real students. The live route doubles as the "screenshot" — no static captures of real tooling needed.

Optional later: tune the fake data further, add more tabs (Inbox, Mentorship) to mirror the real v2.7
dashboard, or record a short screen walkthrough of `/demo` for the case study.

## 2. Custom domain

Deploying to a free `vercel.app` URL first. Attach a domain later (recommended: `ericwolfson.com`
or `ericwolfson.dev`). Buy at Cloudflare Registrar or Porkbun, then add it in the Vercel dashboard
(two DNS records).

## 3. LinkedIn URL  (DONE)

`socials.linkedin` is set to `in/eric-wolfson`.

## 4. Optional design tooling

For future component iteration: 21st.dev Magic MCP (shadcn components) and the ui-ux-pro-max skill
(design-system generation). Not required; the site was built to a high bar without them.

## 5. Optional: pin the repo + add topics on GitHub

Pin `portfolio` and `Agentic-OS-Repo` on the profile, and add topics (next.js, ai, agents,
portfolio) for discoverability.
