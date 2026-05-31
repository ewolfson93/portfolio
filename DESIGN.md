# DESIGN.md — Portfolio Design System

Tokens are defined in `src/app/globals.css` (`:root` light, `.dark` dark) and exposed to Tailwind v4
via `@theme inline`. Default theme is **dark**; light mode is a first-class toggle.

## Color (hex; source of truth is globals.css)
Personal engineering brand that echoes the My Chem Mentor navy/blue without copying the tutoring site.

| Token | Dark | Light | Use |
|---|---|---|---|
| background | `#080b14` | `#fbfbfd` | page base |
| surface | `#0f1626` | `#ffffff` | cards |
| surface-2 | `#141d31` | `#f4f6fb` | insets, diagrams |
| foreground | `#e8ecf4` | `#0b1220` | primary text |
| muted | `#93a0b7` | `#586173` | secondary text |
| border | `#1f2a40` | `#e4e7ee` | hairlines |
| accent | `#4f8df5` | `#1f6feb` | primary action, links |
| accent-strong | `#3b7bef` | `#1657c8` | hover |
| signal | `#38bdf8` | `#0e9bbd` | success / "ok" states |

No purple/violet gradients. Accent is a controlled blue; signal is a cyan used sparingly for success.

## Typography
- **Display / headings:** Space Grotesk (`--font-display`) — technical, geometric.
- **Body / UI:** Inter (`--font-sans`).
- **Mono / labels / code:** JetBrains Mono (`--font-mono`) — used for kickers, metrics labels, console.

Not Inter-everywhere: headings are deliberately Space Grotesk to avoid template sameness.

## Layout
- Max content width `max-w-6xl` (home/sections), `max-w-4xl` (case studies), `max-w-3xl` (prose pages).
- Generous vertical rhythm (`py-20`/`py-24`). 56px background grid on hero and case-study headers.
- Cards use `--radius-card` (0.875rem), 1px borders, subtle shadow on hover.

## Motion
- Motion (formerly Framer Motion), `motion/react`. Scroll-reveal fade+rise, staggered groups.
- Reduced-motion honored globally via `prefers-reduced-motion` in globals.css.

## Components
- `site-nav`, `site-footer`, `theme-toggle`, `project-card`, `flow-diagram` (data-driven architecture
  diagrams), `console-mock` (animated hero visual), `case-study-figure` (screenshot with graceful fallback).

## Accessibility
- Skip link, visible focus rings (`:focus-visible`), aria-labels on icon buttons, semantic landmarks.
- Target contrast AA on text against background/surface in both themes.
