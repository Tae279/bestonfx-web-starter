---
name: bestonfx-framer-build-sop
description: Use when rebuilding BestonFX pages inside the purchased Fizens Framer template. Covers page mapping, brand tokens, motion language, Workshop/MCP sequence, asset specs, compliance gates, and QA.
---

# BestonFX Framer Build SOP

## Build Surface

Current deliverable is a Framer POC based on the purchased Fizens template. Do not rebuild in Next.js until the Framer POC is approved.

## Required Inputs

Read before editing:

- `docs/plan.md`
- `docs/research/bestonfx-framer-perfect-research-2026-06-01.md` **(latest SOT)**
- `docs/research/bestonfx-framer-perfect-handoff-2026-06-01.md`
- `docs/wireframes/sitemap.md` + `docs/wireframes/pages/home.md`
- `docs/framer-poc-map.md`
- `docs/compliance-copy-rules.md`
- `docs/skills/international-forex-broker-market-compliance/SKILL.md`
- `prompts/workshop-components.md`

## Brand Direction Check

**Confirmed direction (2026-06-01):** Light theme + royal blue `#0040c1` + Prompt — derived from Fizens, CEO-preferred. See `DESIGN.md` and `docs/brand/tokens.json`.

Do **not** use dark navy + gold unless founder explicitly reverses in writing. Prior briefs mentioning "Bloomberg Terminal dark" are superseded by the Jun 2026 research handoff.

## Framer Execution Order

1. Duplicate Fizens and rename project to `BestonFX Framer POC v0.1`.
2. Connect Framer MCP plugin and capture page/component inventory.
3. Remove template purchase links, fake stats, testimonials, ratings, and wealth-growth copy.
4. Create missing components in Workshop in this order:
   - RiskDisclosureBar
   - TerminalHero
   - ImmersiveScrollStage
   - TrustStackCards / FeatureGrid
   - AccountPathSelector / AccountComparison preview
   - MarketsTicker / MarketsPreview
   - TradingToolsGrid (on `/tools` only — not Home)
   - LineSupportCTA / CTABanner
   - IBCommissionEstimatorMock (on `/partners` only)
   - AIChatBotMock
5. Apply Framer-native motion patterns from the handoff: hero bloom reveal, scroll parallax stack, fade-rise, sticky stack, cursor-tracked device depth, page transition.
6. Wire CTAs only: `เปิดบัญชี` and `ทัก LINE OA ติดต่อ admin`. Do not add public deposit CTA.
7. Run breakpoint QA at 320, 375, 390, 430, 768, 1024, 1440.

## Motion Defaults

- Entry reveal: opacity `0 -> 1`, y `32 -> 0`, blur `8 -> 0`, duration `0.65s`, easing `cubic-bezier(.16,1,.3,1)`.
- Hero device: scale `0.92 -> 1`, rotateX `8deg -> 0`, y `48 -> 0`, duration `0.9s`.
- Parallax layers: background y `-6% -> 6%`, mid y `-12% -> 12%`, foreground y `-20% -> 20%`.
- Immersive scroll stage: wrapper height `180vh`, sticky visual height `100vh`, text/card opacity `0 -> 1 -> 0`, foreground y `80 -> 0 -> -80`.
- Page hero parallax: on scroll `0 -> 45vh`, background y `0 -> 28`, mid y `0 -> -18`, foreground y `0 -> -36`; mobile values 50%.
- Cursor depth on desktop only: rotateX `-4deg..4deg`, rotateY `-6deg..6deg`, translate `-10..10px`.
- Respect reduced-motion: keep opacity fade only, no parallax/cursor tracking.

## QA Gate

Do not mark done unless:

- Risk warning is visible before first CTA.
- CTA labels are exactly `เปิดบัญชี` and `ทัก LINE OA ติดต่อ admin`.
- No public deposit CTA is present.
- No unverified facts remain.
- LINE CTA is visible above or near the first conversion path.
- No Fizens template links remain.
- Mobile has no horizontal scroll.
- Animation uses transform/opacity only.
