# Agent Instructions for Codex / Cursor Agents

## Project intent

Build BestonFX public website and surrounding system foundation:

- Public marketing site
- Compliance-aware copy system
- AI customer-service bot skeleton
- LINE LIFF / Messaging API skeleton
- Supabase CMS / analytics / IB foundation
- Framer POC handoff docs

## Non-negotiable compliance rules

Agents must not introduce copy that implies:

- Guaranteed profit
- Risk-free trading
- Guaranteed IB income
- Guaranteed signal accuracy
- Legal/regulatory status not explicitly provided
- Fake testimonials, fake ratings, fake user counts

Use placeholders like:

```text
รอยืนยันข้อมูลจากฝ่ายกำกับดูแลก่อนเผยแพร่
```

for regulatory/account/trading conditions that are not confirmed.

## Preferred implementation style

- TypeScript strict
- Small, typed components
- Server-first routes where possible
- No secrets in code
- No direct dependency on existing CRM/trading portal
- Keep routes and data contracts stable for future integration

## Before modifying copy

Run:

```bash
npm run compliance:scan
```

Then update docs if new claims are introduced.

## Safe agent tasks

- Create typed React components
- Create route skeletons
- Add mock data
- Add Supabase migrations
- Write docs/prompts
- Add tests later

## Unsafe agent tasks without human review

- Legal copy
- Trading advice
- Regulatory wording
- Commission terms
- Spread/leverage claims
- DX Trade signal claims
- Customer testimonials
