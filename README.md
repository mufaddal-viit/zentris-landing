# ZENTRIS Management Training - demo landing page

Next.js 16 (App Router) + Tailwind CSS 4 + lucide-react. Single page at `/`.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Structure

- `src/app/page.tsx` - section order
- `src/lib/content.ts` - all copy, courses, pricing, testimonials, clients (edit here)
- `src/lib/uae-paths.ts` - UAE emirate outlines (Simplemaps, free for commercial use)
- `src/components/*` - one file per section
- `public/brand/` - logo, icon, ae.svg

## Placeholder content to confirm with the client

Everything marked `DEMO` in `src/lib/content.ts`:

- Stats (12k+, 300+, 26+, 98%)
- Pricing tiers and prices
- Accreditations other than KHDA
- Testimonials, client wordmarks and project case studies
- Course durations/levels and corporate courses beyond Time Management Fundamentals
- Photos are Unsplash placeholders

Forms are front-end only (no submission endpoint yet).
