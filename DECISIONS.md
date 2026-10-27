# Architectural Decisions Log

## D-001: Section Toggle Config
**Date:** 2026-10-27
**Decision:** Created `src/config/sections.ts` with boolean flags to toggle landing page sections on/off at build time.
**Why:** Client needs to quickly enable/disable sections without touching component code. Next.js tree-shakes disabled sections from the bundle.

## D-002: Centralized Content File
**Decision:** All site content lives in `src/lib/content.ts`.
**Why:** Single source of truth. Change company info, courses, testimonials, etc. in one place. Avoids scattered hardcoded strings.

## D-003: Font Stack
**Decision:** Bricolage Grotesque (display) + Instrument Sans (body), self-hosted via next/font.
**Why:** Distinctive, professional pairing. Self-hosted for performance (no external requests).

## D-004: Phosphor Icons over Lucide
**Decision:** Primary icon set is @phosphor-icons/react (Lucide also installed but secondary).
**Why:** Already deeply used across all components. Phosphor has more icon variety for training/safety domain.
