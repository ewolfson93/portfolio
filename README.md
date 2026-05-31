# Eric Wolfson — Portfolio

Standalone portfolio site positioning Eric Wolfson (PhD chemist, founder of My Chem Mentor) as an
**agentic systems engineer** available for AI contract and advisory work.

Live focus: six case studies drawn from a self-built AI operations platform (orchestration server,
26 production skills, ML pipelines, agent-memory vaults, dashboards).

## Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4** with semantic design tokens (`src/app/globals.css`)
- **Motion** (`motion/react`) for scroll reveals and micro-interactions
- **Bricolage Grotesque** (display) / **IBM Plex Sans** (body) / **JetBrains Mono** (labels)
- All routes prerender (SSG)

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (all routes prerender)
npm run start    # serve the production build
```

## Theme

Default theme follows the visitor's system preference; a toggle persists the choice to
`localStorage`. A `?theme=dark` / `?theme=light` query param forces a theme (handy for shareable
links and screenshots).

## Editing content

All copy and the six case studies live in **`src/lib/site-data.ts`** — a single typed source of
truth. Add a `CaseStudy` object to the `caseStudies` array and a new route renders automatically at
`/work/<slug>` (via `generateStaticParams`). Architecture diagrams are data-driven through the
`diagram: DiagramStage[]` field rendered by `src/components/site/flow-diagram.tsx` (no image needed).

Screenshots are optional per case study (`screenshots[]`). `CaseStudyFigure` degrades gracefully if
an image is absent. Any captured screenshot of internal tooling must have student / personal data
redacted before it is committed (blur names, emails, phone numbers).

## Design system

See `DESIGN.md` for tokens, typography, and motion rules, and `PRODUCT.md` for audience and voice.
The build is checked against UI anti-patterns with:

```bash
npx impeccable detect "http://localhost:3000/?theme=dark"
```

## Deploy

Push to GitHub and import to **Vercel** (zero-config for Next.js). Set a custom domain in the Vercel
dashboard.
