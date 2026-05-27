# Agent Instructions for Codex / Cursor Agents

## Project intent

> **Current phase: Framer/Fizens POC first.** Source of truth: `docs/plan.md`. The current deliverable is a Framer POC built from the purchased Fizens template. Do **not** start building or polishing the Next.js production site now — it is the _future_ production foundation, after POC approval.

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

## Default AI Hero workflow

Use this flow by default for web/app features, bug fixes, refactors, and prototype-to-production work:

```text
/grill-me -> /to-prd -> /to-issues -> /tdd -> /improve-codebase-architecture
```

- Start with `/grill-me` when requirements are broad, ambiguous, high-impact, or compliance-sensitive.
- Use `/to-prd` after alignment to capture the product decision, user stories, implementation decisions, testing decisions, and out-of-scope items.
- Use `/to-issues` to break approved PRDs into thin vertical slices with acceptance criteria, blockers, and `AFK` / `HITL` ownership.
- Use `/tdd` for implementation slices: one failing behavior test, minimal implementation, then refactor only when green.
- Use `/improve-codebase-architecture` before major work, after rapid feature buildout, or when tests become hard to write.
- If the answer exists in this repo, inspect the repo instead of asking the user.
- Compliance rules in this file always override workflow convenience.

## Agent skills context

- Issue tracker: GitHub Issues for `Tae279/bestonfx-web-starter`. See `docs/agents/issue-tracker.md`.
- Triage labels: default Matt Pocock skill labels. See `docs/agents/triage-labels.md`.
- Domain docs: single-context layout with root `CONTEXT.md` and `docs/adr/`. See `docs/agents/domain.md`.

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
