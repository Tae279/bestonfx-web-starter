# BestonFX — Design System

> **Light-theme royal-blue fintech.** Derived from the Fizens Framer template (`fizens.framer.ai`),
> the CEO-preferred direction. This **replaces** the prior dark-navy + champagne-gold look.
> Machine-readable tokens: [`docs/brand/tokens.json`](docs/brand/tokens.json) · Wired into `tailwind.config.ts` + `src/app/globals.css`.

## Brand essence

- **Bloomberg-clean meets Swiss private bank — in daylight.** Calm, premium, trust-first.
- Lots of whitespace, large rounded surfaces, one confident blue, soft blue glow for depth.
- **Broker-sober:** we borrow Fizens' light/blue clarity but drop its playful consumer cues
  (no pink accent, no cartoon energy). No casino / gambling visual language.
- Thai-first. LINE-first conversion path.

## Color

Royal blue is the **single chromatic anchor**. Everything else is neutral `ink` gray.
Use LINE green only on the LINE conversion path; amber only for risk/compliance.

| Role | Token | Hex |
|---|---|---|
| Primary (CTA, links, accent) | `brand-700` | `#0040c1` |
| Bright / hover | `brand-500` | `#2970ff` |
| Chip / badge background | `brand-50` / `brand-100` | `#f5faff` / `#eff4ff` |
| Soft border / badge ring | `brand-200` | `#d1e0ff` |
| Deep blue sections | `brand-900` | `#0b2a73` |
| Page background | white | `#ffffff` |
| Heading / primary text | `ink-900` | `#171717` |
| Body text | `ink-600` | `#4b5563` |
| Muted / labels | `ink-500` | `#6b7280` |
| Faint labels | `ink-400` | `#9ca3af` |
| Default border | `ink-200` | `#e5e7eb` |
| Muted surface | `ink-50` / `ink-100` | `#fafafa` / `#f3f4f6` |
| LINE (conversion only) | `line-500/600` | `#06C755` / `#05b54c` |
| Risk / compliance | `amber-700` | `#b45309` |

Full 50→950 scales for `brand` + `ink` live in `tailwind.config.ts`.

## Typography

**Prompt** (Google) — geometric humanist sans, the Poppins equivalent that covers **Thai + Latin**.
Loaded via `next/font/google` in `src/app/layout.tsx` as the `--font-sans` variable. Weights 300–700.

| Role | Size | Weight | Tracking | Leading |
|---|---|---|---|---|
| Display (h1) | `clamp(2.5rem, 6vw, 4rem)` | 600 | `-0.03em` (`tracking-tightest`) | 1.05 |
| h2 | `clamp(2rem, 4vw, 3rem)` | 600 | `-0.02em` | 1.1 |
| h3 | `clamp(1.5rem, 3vw, 2.25rem)` | 600 | `-0.02em` | 1.2 |
| Body | `1.125rem` | 400 | 0 | 1.6 |
| Eyebrow | `0.875rem` | 500 | `0.28em` uppercase | — |

Tight negative tracking on display sizes is signature; Thai script keeps default tracking automatically.

## Shape & elevation

- **Radius:** pills (`rounded-full`) for CTAs + chips; `rounded-3xl` (24px) / `rounded-[2rem]` (32px) for cards. Generous, never sharp.
- **Cards:** `.premium-card` = white surface, `1px ink-200` border, soft neutral shadow, blue-tinted shadow on hover.
- **Signature glow:** `shadow-glow` = `0 15px 44px rgba(0,64,193,0.25)` — the hero/primary-surface lift.
- **Buttons:** primary = `bg-brand-700` + white text + `shadow-glow-sm`; secondary = `brand-50` tint + `brand-200` border + `brand-700` text.

## Backgrounds

- Page: white + faint `hero-radial` blue wash top-left/top-right (`bg-hero-radial`).
- Brand gradient (for deep-blue sections / future hero blocks): `bg-brand-gradient`
  `linear-gradient(124deg, #0040c1, #2739c7, #495ad9)`.

## Required motifs

| Motif | Where | Why |
|---|---|---|
| One blue, lots of white | Everywhere | Fizens clarity; trust through restraint |
| Pill CTAs + soft blue glow | Primary actions, hero card | Fizens' depth cue |
| Rounded white cards on ink-50 sections | Trust / tools / accounts | Light fintech-SaaS rhythm |
| Amber risk strip + amber compliance notes | Top bar, every claim-bearing block | Regulatory visibility, set apart from brand blue |
| LINE green only on LINE blocks | LINE CTA / chat preview | Conversion signposting |

## Banned (reject if generated)

1. Champagne gold (`#D4AF37`) — removed.
2. Dark-navy / graphite page backgrounds (`#050b18`, `#101318`) — light only now.
3. Dark glassmorphism cards (`bg-white/[0.04]` on dark).
4. Fizens' playful pink accent — too consumer for a broker.
5. Guaranteed-profit / risk-free / fake-stat visual framing (see `CONTEXT.md` compliance boundaries).
6. Casino / gambling color or motion language.

## Files

| File | Purpose |
|---|---|
| `docs/brand/tokens.json` | Canonical W3C design tokens (source of truth) |
| `tailwind.config.ts` | `brand` + `ink` scales, `shadow-glow`, gradients, Prompt font family |
| `src/app/globals.css` | Light CSS vars, body wash, `.premium-card`, `.risk-text` |
| `src/app/layout.tsx` | Prompt font loader (`--font-sans`) |
| `src/components/ui/{button,badge}.tsx` | Brand-tokenized primitives |
