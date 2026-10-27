# Zentrix Project — AI Context

## What is this?
ZENTRIS Management Training — full website for a KHDA-approved training institute in Dubai, UAE. Corporate/Management Training, Occupational Safety Training, Firefighting Training.

## Tech Stack
- Next.js 16 (App Router, React 19, TypeScript)
- Tailwind CSS 4
- Shadcn UI (accordion, button, dialog, drawer, input, skeleton)
- Phosphor Icons
- Fonts: Bricolage Grotesque (display) + Instrument Sans (body)
- Hosting: Vercel

## Project Structure
```
web/src/
  app/          → pages and layout
  components/   → all UI sections
  components/ui → shadcn primitives
  config/       → sections.ts (on/off toggles for landing page)
  lib/          → content.ts (all site content), utils.ts, uae-paths.ts
```

## Key Files
- `src/lib/content.ts` — ALL site content lives here (company info, courses, testimonials, etc.)
- `src/config/sections.ts` — toggle landing page sections on/off
- `src/app/page.tsx` — landing page assembly
- `src/app/layout.tsx` — root layout with fonts and metadata

## Working Rules
- Never invent facts, stats, testimonials, client logos, or certifications
- Use `TODO_CLIENT:` placeholders for unverified content
- Track needed content in `CONTENT_NEEDED.md`
- Log architectural decisions in `DECISIONS.md`
- Track progress in `PLAN.md`
- All content comes from `src/lib/content.ts` — single source of truth
- SEO, a11y, performance, security built into every page
- Mobile-first, progressive enhancement
- No client JS unless the element is interactive
