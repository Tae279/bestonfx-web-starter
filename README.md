# BestonFX Web Starter

Starter repo สำหรับ **BestonFX public website + Framer POC handoff + AI bot + LINE + Supabase CMS/analytics/IB foundation**

> This repo is a production-oriented scaffold. It is not wired to real brokerage CRM, trading portal, payment, KYC, or live commission systems.

## Stack

- Next.js 14 App Router
- TypeScript strict
- Tailwind CSS
- shadcn/ui-compatible structure
- Supabase-ready data model
- LINE webhook skeleton
- AI customer-service bot skeleton with compliance guardrails
- Compliance copy scanner
- Framer POC documentation and Workshop/MCP prompts

## Quick start

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open:

```text
http://localhost:3000
```

## Main routes

```text
/                         Public homepage
/why-bestonfx             Trust / positioning
/accounts                 Account comparison placeholder
/markets                  Markets overview placeholder
/tools                    Trading tools preview
/partners                 IB partnership landing
/partners/dashboard       IB portal placeholder
/support                  Help + LINE support
/legal/risk-disclosure    Risk disclosure page
/admin                    Admin placeholder
/api/bot/chat             Website bot API skeleton
/api/line/webhook         LINE webhook skeleton
/api/analytics/track      Analytics event collector skeleton
```

## Important compliance rule

Do **not** publish claims about regulation, spreads, leverage, commission, payouts, win rate, signal accuracy, ranking, or number of users unless the claim is registered in the future `claim_registry` and approved.

Run the copy scan before committing marketing changes:

```bash
npm run compliance:scan
```

## Framer POC workflow

Use the docs in:

```text
docs/framer-poc-map.md
prompts/workshop-components.md
prompts/framer-mcp-claude.md
```

Recommended order:

1. Duplicate Fizens into `BestonFX Framer POC v0.1`
2. Use Workshop to create custom visual components
3. Use Framer MCP for controlled batch copy/style/page edits
4. Keep this repo as production foundation
5. Export/rebuild only selected sections after stakeholder approval

## Environment

See `.env.example`.

## Repo conventions

- Marketing copy should live in `src/content` or typed component props.
- Compliance-sensitive copy should use `ComplianceNote` or `RiskDisclosureBar`.
- Bot answers must pass through `src/lib/bot/guardrails.ts`.
- Analytics event names should be defined in `src/lib/analytics/events.ts`.
- Supabase schema starts in `supabase/migrations/0001_initial_schema.sql`.
