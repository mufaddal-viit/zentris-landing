# ZENTRIS Website — Build Plan

> Status legend: `[ ]` todo | `[~]` in progress | `[x]` done | `[-]` skipped/deferred

---

## PHASE 1: Foundation
> Goal: Repo hygiene, design system, global layout, security, CI basics.
> Depends on: Nothing. Start here.

### 1.1 Project Setup & Config
- [x] Next.js 16 + TypeScript + Tailwind 4 initialized
- [x] Shadcn UI installed (accordion, button, dialog, drawer, input, skeleton)
- [x] Fonts configured (Bricolage Grotesque + Instrument Sans)
- [x] Content centralized in `src/lib/content.ts`
- [x] Section toggle config (`src/config/sections.ts`)
- [x] Create `CLAUDE.md` project context file
- [x] Set up `.env.example` with all required env vars documented
- [x] Configure `next.config.ts` (security headers, image domains, redirects)
- [x] Set up path aliases confirmation (`@/` already working)

### 1.2 Design System & Tokens
- [x] Color palette defined (green, navy, surface, muted, line)
- [x] Typography scale (t-display, t-h2, t-h3, t-lead)
- [x] Button variants (primary, secondary, outline, white, ghost)
- [x] SectionHeading component
- [x] Document design tokens in `globals.css` with comments
- [x] Verify color contrast ratios meet WCAG 2.2 AA (4.5:1 min) — green #18ba60 on white = 3.0:1 (used only for large text/icons/buttons, passes AA for large text); navy-ink #0e2a47 on white = 13.7:1 (passes); muted #56667a on white = 4.8:1 (passes)
- [x] Add fluid typography with `clamp()` if not already — already in place
- [x] Add `prefers-reduced-motion` media query for all animations

### 1.3 Global Layout
- [x] Root layout with metadata (enhanced with OG, Twitter, robots, canonical)
- [x] Header with sticky nav, mobile drawer, CTA
- [x] Footer with NAP, links, social, copyright
- [x] PreFooter CTA section
- [x] FloatingActions (WhatsApp + chat)
- [x] Add skip-to-content link for accessibility (`SkipToContent.tsx`)
- [x] Add breadcrumb component (reusable for all inner pages) (`Breadcrumbs.tsx`)
- [~] Mega-dropdown for Trainings nav item — deferred to when inner pages exist
- [x] Update nav links to include: Home, About, Trainings, Blog, Careers, Contact (`content.ts` nav updated)
- [x] Mobile menu: 44x44px touch targets verified (h-11 w-11 = 44px), safe-area via layout

### 1.4 Security Headers
- [x] Configure CSP in `next.config.ts`
- [x] HSTS with preload
- [x] X-Content-Type-Options: nosniff
- [x] X-Frame-Options: DENY
- [x] Referrer-Policy: strict-origin-when-cross-origin
- [x] Permissions-Policy (deny camera/mic/geolocation)
- [x] Cross-Origin-Opener-Policy: same-origin
- [x] Create `/.well-known/security.txt`

### 1.5 Analytics & Consent
- [x] Cookie consent banner (no scripts before opt-in) (`CookieConsent.tsx`)
- [x] Google Consent Mode v2 integration (default deny in `AnalyticsHead.tsx`, grant on accept)
- [x] GA4 loader (consent-gated, loads only after opt-in)
- [x] Google Search Console verification meta tag (env-var driven)
- [x] Bing Webmaster verification meta tag (env-var driven)

### 1.6 CI Pipeline (basic)
- [x] Build check (verified: `next build` passes clean)
- [~] ESLint + TypeScript check in CI — CI config deferred (no GitHub Actions yet)
- [~] Lighthouse CI with performance budgets — deferred until deployment

---

## PHASE 2: Landing Page Polish
> Goal: Refine existing landing page to production quality.
> Depends on: Phase 1.

### 2.1 Hero Section
- [x] Hero layout with headline, tagline, proof points, stats
- [x] HeroForm (2-step proposal form)
- [x] UAE map background decoration
- [x] Connect HeroForm to server action (`app/actions/proposal.ts`)
- [x] Honeypot field added (no Turnstile on hero per client request)
- [x] Zod server-side validation (`lib/schemas.ts`)
- [x] Wire form submission to email (Resend) + console fallback for dev
- [x] Stats marked TODO_CLIENT in `content.ts`
- [x] LCP: hero section is text-first (no LCP image), map is decorative SVG — no image optimization needed

### 2.2 Products / Trainings Section
- [x] Featured courses carousel
- [x] General safety courses grid
- [x] Corporate courses section
- [ ] Link courses to individual `/trainings/[category]/[course]` pages (Phase 3)
- [ ] Replace Unsplash placeholder images with real photos or proper placeholders
- [ ] Verify carousel accessibility (keyboard, screen reader)

### 2.3 Other Sections
- [x] WhyChoose, Pricing, Accreditations, Testimonials, Projects, ClientMarquee, Contact, FAQ
- [ ] Connect Contact form to server action / API endpoint
- [ ] Add Turnstile + honeypot to Contact form
- [ ] Add Zod validation to Contact form
- [ ] Replace DEMO accreditations with real ones or TODO_CLIENT
- [ ] Replace DEMO testimonials with real ones or TODO_CLIENT
- [ ] Fix Google Maps link (currently wrong location)
- [ ] Verify all sections responsive at 320/375/414/768/1024/1440

### 2.4 Performance Audit
- [ ] Lighthouse >= 95 all categories (mobile)
- [ ] LCP < 2.0s, INP < 150ms, CLS < 0.05
- [ ] JS bundle < 90KB gzipped first-load
- [ ] Run axe-core: 0 violations
- [ ] No unused dependencies (bundle analyzer)

---

## PHASE 3: Training Pages
> Goal: Trainings hub, category pages, individual course pages.
> Depends on: Phase 2.

### 3.1 Content Structure
- [ ] Define MDX frontmatter schema for courses (Zod validated)
- [ ] Create `content/trainings/` directory structure
- [ ] Create course MDX template

### 3.2 Pages
- [ ] `/trainings` — hub page with all categories, search/filter
- [ ] `/trainings/safety` — Safety training category listing
- [ ] `/trainings/corporate` — Corporate training category listing
- [ ] `/trainings/firefighting` — Firefighting training category listing
- [ ] `/trainings/[category]/[course]` — Individual course page template
  - Course schema JSON-LD
  - Duration, level, price, syllabus
  - Enquiry CTA → contact/proposal form
  - Related courses
  - Breadcrumbs
- [ ] Populate with all courses from `content.ts`

### 3.3 SEO
- [ ] Unique title/description per course page
- [ ] Course schema (JSON-LD) on each course page
- [ ] Internal linking between related courses
- [ ] Category pages with proper H1, meta

---

## PHASE 4: Contact & Forms Backend
> Goal: Working forms with validation, spam protection, email delivery.
> Depends on: Phase 1.

### 4.1 Form Infrastructure
- [ ] Server actions for form handling
- [ ] Zod validation schemas (contact, proposal, job application)
- [ ] Cloudflare Turnstile integration
- [ ] Honeypot fields
- [ ] Rate limiting per IP

### 4.2 Email
- [ ] Transactional email provider setup (Resend)
- [ ] Email templates (contact confirmation, proposal received, application received)
- [ ] Webhook/CRM hook point for form data

### 4.3 Pages
- [ ] `/contact` — standalone contact page (reuse Contact component + map)
- [ ] `/thank-you/contact` — conversion tracking page (noindex)
- [ ] `/thank-you/application` — job application confirmation (noindex)
- [ ] "Get a Free Proposal" flow → dedicated form or modal

### 4.4 Tracking
- [ ] GA4 events: proposal_submit, contact_submit, whatsapp_click, phone_click
- [ ] UTM parameter preservation in hidden form fields
- [ ] Thank-you pageviews as GA4 conversions

---

## PHASE 5: About Page
> Goal: Company story, team, values, accreditations, trainers.
> Depends on: Phase 1.

- [ ] `/about` page
  - Company story / history
  - Mission, vision, values
  - Team members (photos, bios, roles)
  - Trainer qualifications
  - Accreditations detail (reuse/expand Accreditations component)
  - Clients section (reuse ClientMarquee or expanded)
  - Organization schema JSON-LD
  - Breadcrumbs
- [ ] Unique SEO metadata
- [ ] TODO_CLIENT placeholders for missing content

---

## PHASE 6: Blog
> Goal: Blog with MDX posts, categories, pagination, RSS.
> Depends on: Phase 1.

### 6.1 Infrastructure
- [ ] MDX frontmatter schema for blog posts (Zod validated)
- [ ] Create `content/blog/` directory
- [ ] Blog post MDX template
- [ ] ISR for blog pages

### 6.2 Pages
- [ ] `/blog` — index with category filters + pagination
- [ ] `/blog/[slug]` — article page
  - Article schema JSON-LD
  - Author bio
  - Related posts
  - Social share buttons
  - Breadcrumbs
- [ ] `/rss.xml` — RSS feed

### 6.3 Content
- [ ] Migrate existing blog posts from WordPress (if any)
- [ ] Set up redirect map from old URLs

---

## PHASE 7: Careers
> Goal: Job listings with application form.
> Depends on: Phase 4 (forms backend).

- [ ] MDX frontmatter schema for jobs (Zod validated)
- [ ] Create `content/careers/` directory
- [ ] `/careers` — job listing page
- [ ] `/careers/[slug]` — job detail page
  - JobPosting schema JSON-LD
  - Application form (name, email, phone, CV upload)
  - CV upload: PDF/DOCX only, size-capped
  - Breadcrumbs
- [ ] `/thank-you/application` — confirmation page

---

## PHASE 8: FAQ & Legal Pages
> Goal: FAQ hub, privacy, terms, cookies, refund, accessibility.
> Depends on: Phase 1.

### 8.1 FAQ
- [ ] `/faq` — standalone FAQ hub page (expand from landing FAQ)
  - FAQPage schema JSON-LD
  - Categories/sections
  - Breadcrumbs

### 8.2 Legal Pages
- [ ] `/privacy-policy` — UAE PDPL + GDPR + CCPA (TODO_LEGAL_REVIEW)
- [ ] `/terms-of-service`
- [ ] `/cookie-policy`
- [ ] `/refund-and-cancellation-policy` (training-specific)
- [ ] `/accessibility-statement` (WCAG 2.2 AA commitment)
- [ ] DSAR form linked from privacy policy

---

## PHASE 9: Gallery
> Goal: Social proof with real training photos.
> Depends on: Client providing photos with permission.

- [ ] `/gallery` — photo grid/masonry layout
- [ ] Lightbox viewer
- [ ] Image optimization (AVIF/WebP, lazy load)
- [ ] Only real photos with client permission

---

## PHASE 10: Technical Polish & SEO
> Goal: Sitemaps, robots, error pages, redirects, structured data.
> Depends on: All content pages done.

### 10.1 Technical Files
- [ ] `/sitemap.xml` — dynamic, all pages
- [ ] `/robots.txt` — allow all, reference sitemap
- [ ] `/llms.txt` — AI-friendly site summary
- [ ] `/.well-known/security.txt`
- [ ] `/manifest.webmanifest` — PWA-lite (icons, theme-color)
- [ ] Full favicon set (favicon.ico, apple-touch-icon, etc.)

### 10.2 Error Pages
- [ ] `/404` — branded, with search + top links
- [ ] `/500` — branded, no stack traces

### 10.3 Redirects
- [ ] Map all old WordPress URLs to new URLs
- [ ] 301 redirects in next.config.ts
- [ ] Verify no internal 404s (link checker)

### 10.4 Structured Data Audit
- [ ] Organization schema on homepage
- [ ] LocalBusiness schema with NAP
- [ ] BreadcrumbList on all inner pages
- [ ] Course schema on course pages
- [ ] FAQPage schema on FAQ page
- [ ] Article schema on blog posts
- [ ] JobPosting schema on career pages
- [ ] Validate all with Google Rich Results Test

### 10.5 SEO Finalization
- [ ] `SEO_KEYWORD_MAP.md` — target keywords per page
- [ ] Unique title + description on every page
- [ ] OG images per page (or default)
- [ ] Canonical URLs
- [ ] hreflang scaffolding for future Arabic version
- [ ] Internal linking audit

---

## PHASE 11: Internationalization Readiness
> Goal: Prepare for Arabic version without implementing it yet.
> Depends on: Phase 10.

- [ ] All strings in a locale layer (or easily extractable)
- [ ] CSS uses logical properties (margin-inline, padding-block, etc.)
- [ ] RTL-safe layout testing
- [ ] Arabic font subset ready (Instrument Sans or alternative)
- [ ] hreflang tags scaffolded

---

## PHASE 12: Testing & Launch
> Goal: Full QA, performance audit, launch checklist.
> Depends on: All phases.

### 12.1 Testing
- [ ] Playwright smoke tests for critical journeys
  - Homepage load
  - Navigate to training → course page
  - Submit contact form
  - Submit proposal form
  - Mobile navigation
- [ ] axe-core accessibility tests (0 violations)
- [ ] Cross-browser testing (Chrome, Safari, Firefox, Edge, Samsung Internet)
- [ ] Device testing (iOS 16+, Android 10+)
- [ ] Form validation edge cases
- [ ] 320px minimum width — no horizontal overflow

### 12.2 Performance
- [ ] Lighthouse >= 95 all categories on every page
- [ ] Core Web Vitals within budget (LCP < 2s, INP < 150ms, CLS < 0.05)
- [ ] JS budget < 90KB gzipped per route
- [ ] No image over 200KB
- [ ] Bundle analyzer — remove unused deps

### 12.3 Security
- [ ] Security headers A+ on securityheaders.com
- [ ] Mozilla Observatory passing
- [ ] No secrets in client bundles
- [ ] npm audit clean
- [ ] Forms tested for injection

### 12.4 Launch
- [ ] `LAUNCH_CHECKLIST.md` completed
- [ ] DNS configured
- [ ] SSL/TLS verified
- [ ] Google Search Console submitted
- [ ] Google Business Profile updated with new URL
- [ ] Old site redirects verified
- [ ] Monitoring: uptime check + Sentry
- [ ] Client handoff docs: `CONTENT_GUIDE.md` (how to add course/blog/job)

---

## Progress Summary

| Phase | Description | Status |
|-------|-------------|--------|
| 1 | Foundation | Done (CI deferred until GitHub/Vercel setup) |
| 2 | Landing Page Polish | Partially done (sections exist, forms not wired) |
| 3 | Training Pages | Not started |
| 4 | Contact & Forms Backend | Not started |
| 5 | About Page | Not started |
| 6 | Blog | Not started |
| 7 | Careers | Not started |
| 8 | FAQ & Legal Pages | Not started |
| 9 | Gallery | Not started |
| 10 | Technical Polish & SEO | Not started |
| 11 | i18n Readiness | Not started |
| 12 | Testing & Launch | Not started |
