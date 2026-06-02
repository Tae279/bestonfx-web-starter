# BestonFX Context

## Product

BestonFX is a pre-launch Thai-market forex/CFD broker website and system foundation.

The repo supports:

- Public marketing site
- Compliance-aware copy system
- AI customer-service bot skeleton
- LINE LIFF / Messaging API skeleton
- Supabase CMS, analytics, and IB foundation
- Framer POC handoff documentation

## Audience

- Thai retail traders
- Beginner and intermediate traders from LINE, Discord, TikTok, and YouTube
- IB partners
- DX ecosystem users across DX Academy, DX Trade, and DX Exclusive

## Positioning

- Thai-first
- LINE-first support and conversion
- Premium, calm, trust-first finance aesthetic
- Light theme with royal blue (`#0040c1`) accent and the Prompt typeface — derived from the
  Fizens template (CEO-preferred). This replaces the prior dark-navy + champagne-gold direction.
- See `DESIGN.md` and `docs/brand/tokens.json` for the brand system
- Next.js is the _future_ production foundation, built after the Framer POC is approved. Current phase is the Framer/Fizens POC — source of truth: `docs/plan.md` + `docs/research/bestonfx-framer-source-of-truth-2026-06-01.md`.

## Compliance Boundaries

Never invent or imply:

- Guaranteed profit
- Risk-free trading
- Guaranteed IB income
- Guaranteed signal accuracy
- Regulatory or legal status not explicitly provided
- Spread, leverage, commission, or payout terms not explicitly provided
- Fake testimonials, ratings, awards, or user counts
- Personalized trading advice

Use this placeholder when facts are not approved:

```text
รอยืนยันข้อมูลจากฝ่ายกำกับดูแลก่อนเผยแพร่
```

## Implementation Boundaries

- Keep TypeScript strict.
- Use small, typed components.
- Prefer server-first routes where possible.
- Keep routes and data contracts stable for future integration.
- Do not add secrets to code.
- Do not depend directly on existing CRM or trading portal systems.

## Agent Workflow

Default flow for web/app work:

```text
/grill-me -> /to-prd -> /to-issues -> /tdd -> /improve-codebase-architecture
```

Important rule: BestonFX compliance boundaries override the workflow when they conflict.
