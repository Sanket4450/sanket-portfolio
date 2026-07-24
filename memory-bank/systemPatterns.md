# System Patterns

## Folder Structure

```
sanket-portfolio/
├── src/
│   ├── app/                    # Next.js App Router entry points
│   │   ├── globals.css         # Global styles, theme tokens, utility classes
│   │   ├── icon.svg            # Favicon
│   │   ├── layout.tsx          # Root layout (metadata, fonts, JSON-LD, body)
│   │   ├── page.tsx            # Single-page composition (all sections)
│   │   └── sitemap.ts          # Static sitemap generation
│   ├── components/
│   │   ├── Footer.tsx          # Footer (server component)
│   │   ├── Nav.tsx             # Sticky nav with mobile menu (client component)
│   │   ├── Reveal.tsx          # Shared IntersectionObserver animation wrapper (client component)
│   │   └── sections/
│   │       ├── Contact.tsx
│   │       ├── EngineeringInterests.tsx
│   │       ├── Experience.tsx
│   │       ├── Hero.tsx
│   │       ├── Impact.tsx
│   │       ├── Skills.tsx
│   │       └── Systems.tsx
│   └── data/
│       └── portfolio.ts        # All portfolio content + TypeScript types
├── public/
│   └── resume/
│       └── sanket_talaviya_resume.pdf
├── context/
│   └── context.md              # Human-authored design brief (not AI-generated)
├── memory-bank/                # AI context documentation
├── AGENTS.md                   # AI instruction manual
├── CLAUDE.md                   # Points to AGENTS.md
├── package.json
├── tsconfig.json
├── eslint.config.mjs
├── next.config.ts
└── postcss.config.mjs
```

## Routing Strategy

- **Single-page application** with no sub-routes.
- Anchor-based navigation: links use `href="#section-id"` to scroll to sections.
- `sitemap.ts` exports `force-static` dynamic config — the site is fully static.
- Next.js App Router used purely as a static site generator.

## Rendering Strategy

- **Static generation.** All content is known at build time; no server-side data fetching.
- Pages are pre-rendered as static HTML.
- No `getStaticProps`, no `generateStaticParams`, no dynamic routes.
- Two client components: `Nav` (scroll detection + mobile menu) and `Reveal` (IntersectionObserver).
- All section components are server components (no `"use client"` directive).

## Component Organization

- **Sections** (`src/components/sections/`): One file per page section, imported and composed in `page.tsx`.
- **Shared components** (`src/components/`): `Nav`, `Footer`, `Reveal`.
- **No atomic design or component library.** Components are purpose-built for this single page.
- Section components follow a consistent structural pattern:
  ```
  <section id="..." className="section-padding border-t border-[#262626]">
    <div className="section-container">
      <Reveal>{/* label */}</Reveal>
      <Reveal>{/* heading */}</Reveal>
      <Reveal delay={...}>{/* content */}</Reveal>
    </div>
  </section>
  ```

## State Management

- **No global state management library.** No Redux, Zustand, Context API for app state.
- `Nav` component uses local `useState` for scroll position and mobile menu toggle.
- `Reveal` component uses local `useState` for visibility tracking.
- All content is read-only data from `portfolio.ts` — no mutations, no user input.
- `next-themes` is a dependency but is not actively used (the site is dark-only).

## Data Flow

- **Unidirectional, import-based.**
- All portfolio content lives in `src/data/portfolio.ts` as typed `const` exports.
- Components import data directly: `import { personal, featuredSystems } from "@/data/portfolio"`.
- Components receive **no props** — they are self-contained data consumers.
- TypeScript types are co-located in `portfolio.ts` alongside the data.
- To add/change content, only `portfolio.ts` needs editing.

## Animation Approach

- **Single shared primitive:** `Reveal` component.
- Uses `IntersectionObserver` with `threshold: 0.1` and `rootMargin: "0px 0px -40px 0px"`.
- Fade + slide-up: `opacity 0 → 1`, `translateY(24px) → 0`.
- All animations are 300ms with `ease-out` timing.
- Staggered delays: child blocks receive incrementing `delay` values (e.g., `i * 75` ms).
- Observer disconnects after first intersection (one-shot animation).
- Currently no `prefers-reduced-motion` support (marked as TODO in AGENTS.md).

## Theme Management

- **Dark-only.** No light mode, no theme toggle.
- `next-themes` is installed but configured for dark-only (see `suppressHydrationWarning` on `<html>`).
- Colors are hardcoded hex values throughout all components.
- CSS `@theme inline` block in `globals.css` defines semantic tokens, but components use raw hex values directly.
- Background: `#0A0A0A`, text: `#FAFAFA`, borders: `#262626`.

## Layout Patterns

- `section-container`: `max-width: 1100px`, centered with horizontal padding (24px desktop, 16px mobile).
- `section-padding`: `120px` vertical (desktop), `80px` (tablet), `64px` (mobile).
- Hero section is full-height: `min-h-[90vh]` with flex centering.
- Content max-widths: 700px (hero text), 600px (experience timeline), 1100px (standard).
- Featured Systems use a two-column grid: `grid-cols-[1fr_380px]` on desktop, stacked on mobile.
- Impact and skills use responsive grids: 1 col mobile → 2 col tablet → 4-5 col desktop.

## Shared Architectural Patterns

- **Data-driven rendering.** All text, links, and lists come from `portfolio.ts` — no hardcoded strings in JSX.
- **Section consistency.** Every section uses the same structural pattern (section > container > Reveal blocks).
- **Direct imports from `page.tsx`.** No barrel exports, no index files re-exporting sections.
- **Inline SVG icons** for GitHub and LinkedIn (Hero and Contact sections duplicate these) — no icon library used for these.
- **Lucide React** used for standard icons (Menu, X, Check, ArrowDown, Mail, FileText, Briefcase, Layers, ArrowRight).
- **No CSS modules, no styled-components, no inline `<style>` tags.** All styling is Tailwind utility classes or global CSS.