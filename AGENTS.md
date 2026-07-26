<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# Project Identity

This is the personal portfolio website of **Sanket Talaviya**, a Full Stack Engineer. It is a single-page, dark-mode portfolio targeting remote startups, SaaS companies, AI-enabled companies, product engineering teams, technical founders, and engineering managers.

The portfolio is a **product-engineering profile**, not a project showcase. It communicates: _"Engineer who can independently own and deliver complex product systems."_

---

# Engineering Philosophy

- **Business impact first.** Every section, project, and achievement exists to build hiring confidence.
- **Content over decoration.** Typography, layout, and spacing carry the design — not animations, illustrations, or visual gimmicks.
- **All content visible.** Important information is never hidden behind accordions, modals, tabs, or carousels.
- **Clarity over cleverness.** Visitors should understand who Sanket is and what he's built within 60 seconds.
- **Measurable outcomes.** Every project description ties technical work to business results.

---

# Coding Standards

- **Consistent section structure.** Every section follows the pattern: label → heading → content. Content is wrapped in `<section className="section-padding border-t border-border">` with a `.section-container` inner div.
- **Reveal animation wrapper.** Animated entrance uses the shared `<Reveal delay={...}>` component wrapping each block. All animations are 300ms, fade+slide only.
- **Tailwind-only styling.** No CSS modules, no styled-components, no inline `<style>` blocks. Global CSS is only for scrollbar, font smoothing, selection, reveal helper classes, and shared layout utilities (`section-container`, `section-padding`).
- **Hover transitions.** Interactive elements use explicit `transition-colors duration-200` or `duration-300` classes.
- **Direct color tokens.** All colors use the hardcoded hex palette defined in the design system — never Tailwind color scale classes (e.g., `gray-50`, `zinc-100`).

---

# Naming Conventions

- **Component files:** PascalCase (e.g., `Hero.tsx`, `Nav.tsx`)
- **Data file:** `portfolio.ts` — camelCase, exporting typed constants
- **Sections:** named by content role (e.g., `Hero`, `Impact`, `Systems`, `EngineeringInterests`, `Experience`, `Skills`, `Contact`)
- **Reusable UI primitives:** named by behavior (e.g., `Reveal`)
- **CSS utility classes:** kebab-case semantic names (e.g., `.section-container`, `.section-padding`)

---

# Folder Conventions

```
src/
├── app/                  # Next.js App Router (layout, page, globals.css, sitemap)
├── components/           # Reusable shared components (Nav, Footer, Reveal)
│   └── sections/         # One file per page section
├── data/                 # Centralized portfolio data with TypeScript types
public/
└── resume/               # Static assets including downloadable resume PDF
context/
└── context.md            # Human-authored design/strategy brief (not generated)
memory-bank/              # AI context documentation (this system)
```

- Data lives in `src/data/portfolio.ts`. All props flow from here — no hardcoded text in components.
- Sections are stored under `src/components/sections/` and imported directly into `page.tsx`.
- Reusable behavior components (like `Reveal`) stay at `src/components/`.

---

# Component Conventions

- **Default exports only.** Every component uses `export default function ComponentName()`.
- **Client components explicitly marked.** Any component using hooks (`useState`, `useEffect`, `useRef`) starts with `"use client"`.
- **Data-driven rendering.** Components receive no props; they import data directly from `@/data/portfolio`.
- **Section components** follow a consistent structure: `<section id="..." className="section-padding border-t border-border">` → `<div className="section-container">` → `<Reveal>` blocks for animated content.
- **Sections are self-contained.** Each section has its own imports, its own `Reveal` usage, and handles its own responsive layout.
- **No prop drilling.** Data flows from `portfolio.ts` directly into the component that renders it.

---

# TypeScript Conventions

- **Strict mode enabled** (`tsconfig.json`).
- **Path alias:** `@/*` maps to `./src/*`.
- **Types co-located with data.** Type definitions (e.g., `FeaturedSystem`, `SkillGroup`, `Experience`) are defined in `src/data/portfolio.ts` alongside the data they type.
- **Explicit return types on functions** are used sparingly — inferred where obvious.
- **No `any`.** All data structures are fully typed.

---

# Styling Conventions

- **Tailwind CSS v4** with `@tailwindcss/postcss`.
- **Dark-only palette** (no light mode support initially):
  - Background: `#0A0A0A`
  - Surface: `#111111`
  - Elevated Surface: `#171717`
  - Border: `#262626`
  - Primary Text: `#FAFAFA`
  - Secondary Text: `#A1A1AA`
  - Muted Text: `#71717A`
  - Accent: `#FFFFFF`
  - Success: `#22C55E`
- **Theme tokens defined in CSS** via `@theme inline { ... }` in `globals.css`.
- **No CSS color scale classes** (e.g., `bg-gray-900`). All colors are hardcoded hex values.
- **CSS custom properties** are only used for font family definitions (`--font-geist-sans`, `--font-geist-mono`).

---

# Accessibility Expectations

- **Semantic HTML.** `<nav>`, `<header>`, `<main>`, `<footer>`, `<section>`, `<article>` are used appropriately.
- **Skip links.** NOT YET IMPLEMENTED — TODO.
- **Keyboard navigation.** Interactive elements are native `<a>` and `<button>` elements with visible focus states — TODO: verify focus ring visibility.
- **Color contrast.** The dark background (`#0A0A0A`) with `#FAFAFA` text provides strong contrast. Muted text (`#71717A`) on dark background MAY FAIL WCAG AA — TODO: verify and fix if needed.
- **`aria-label`** used on mobile menu toggle button.
- **Reduced motion.** NOT YET IMPLEMENTED — TODO. The `prefers-reduced-motion` media query should disable scroll-triggered reveal animations.
- **`suppressHydrationWarning`** on `<html>` due to `next-themes`.

---

# Performance Expectations

- **Lighthouse target:** 95+ across all categories.
- **Static generation preferred.** The portfolio has no dynamic content at build time.
- **Minimal client JavaScript.** Only `Nav` and `Reveal` use client-side hooks.
- **Font optimization.** Geist font loaded via `next/font/google` with `subsets: ["latin"]` — automatic subsetting and self-hosting by Next.js.
- **Passive scroll listener.** `{ passive: true }` on scroll event handlers.
- **IntersectionObserver** used for reveal animations (performant vs scroll events).
- **No heavy dependencies.** Only `clsx`, `lucide-react`, `next-themes`, `tailwind-merge` beyond React/Next core.

---

# Architecture Rules

- **Single-page layout.** All sections are composed in `src/app/page.tsx`. There are no sub-pages.
- **Centralized data layer.** All portfolio content lives in `src/data/portfolio.ts` as typed exports. Adding a project, skill, or experience only requires editing this file.
- **Shared animation primitive.** `Reveal` component handles all scroll-triggered entrance animations via a single `IntersectionObserver` implementation.
- **No routing.** All content is on a single page with anchor-based navigation.
- **Static-first.** `sitemap.ts` uses `export const dynamic = 'force-static'`. The site is fully pre-renderable.

---

# Decision-Making Principles

When adding or modifying content, follow this priority order:
1. **Business Impact** — what measurable outcome was achieved?
2. **Ownership** — what did the engineer independently own and deliver?
3. **Architecture** — how was the system designed?
4. **Product Complexity** — what made this challenging?
5. **Technical Implementation** — what technologies were used?

Technology names are supporting evidence, never the headline.

---

# Things the AI Should Never Do

- **Never add light mode.** The portfolio is dark-only by design.
- **Never add animations beyond fade/slide reveal.** No bounce, spin, elastic, floating, infinite, or particle effects.
- **Never hide content behind interaction.** No accordions, carousels, tabs, modals, or popups for important content.
- **Never add stock photos, illustrations, avatars, laptop mockups, coding screenshots, or AI-generated hero art.**
- **Never add skill progress bars, percentage ratings, radar charts, or visual skill rankings.**
- **Never add a contact form.** Direct links to email, LinkedIn, GitHub are the only contact methods.
- **Never change the color palette without explicit instruction.** The hex values are locked.
- **Never convert section components to accept props from page.tsx.** Data flows from `portfolio.ts` directly.
- **Never add a "light/dark" theme toggle.** The site is dark-only.
- **Never add unnecessary npm dependencies.**

---

# Definition of Done

A change is complete when:
- [ ] It renders correctly at all responsive breakpoints (mobile 640px, tablet 1024px, desktop 1100px+)
- [ ] It uses only the hardcoded color palette (no Tailwind color scale classes)
- [ ] Content is driven from `src/data/portfolio.ts` (no hardcoded strings in components)
- [ ] Reveal animations wrap new content blocks with appropriate delays
- [ ] No new dependencies were added (or if added, justified)
- [ ] The single-page scroll experience remains intact
- [ ] TypeScript compiles without errors (`tsc --noEmit`)
- [ ] ESLint passes (`npm run lint`)
- [ ] The visitor journey (Who → What → Complex Systems → Impact → Trust → Contact) is preserved