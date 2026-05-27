# BestonFX Web POC Execution Plan — Single Source of Truth

_Last updated: 2026-05-27_

> **This file is the single source of truth for the current phase.** If any other doc (README, AGENTS, orchestration plan, task board, prompts) conflicts with this file, **this file wins** — pause and report the conflict instead of guessing.

## Current Phase: Framer/Fizens POC First

**Primary objective:** Create a near-usable BestonFX visual POC inside Framer by adapting the purchased Fizens template, so the team can review a finished-looking concept before any production build.

**Next.js is not the main build target in this phase.** It remains the planning repo, prompt library, compliance-rule repository, and the _future_ production foundation — built only after the Framer POC is approved.

**Current deliverable:** a presentable `BestonFX Framer POC v0.1` the team can review.

### In scope now (Framer-first)

- Duplicate the Fizens template into `BestonFX Framer POC v0.1`
- Audit / adapt / remove / replace Fizens sections via Framer MCP
- Create missing components with Workshop (`prompts/workshop-components.md`)
- Compliance-safe copy and section mapping (`docs/framer-poc-map.md`)

### Not in scope now

- Building a new production website in Next.js
- Polishing the Next.js homepage / UI as the main deliverable
- Exporting the full Framer site with Unframer
- Building production backend / CRM / trading portal
- Publishing compliance-sensitive copy

### Role of each surface this phase

| Surface | Role now |
|---|---|
| **Framer (main execution surface)** | Duplicate Fizens, adapt/remove/replace sections, build missing components in Workshop, controlled audit + batch edits via Framer MCP |
| **Next.js repo** | Planning repo, prompt library, compliance-rule repository, future production foundation (after POC approval), optional local technical scaffold for repo health only |

### Related docs (operational detail, governed by this file)

- `docs/task-board.md` — active tasks and execution order
- `docs/orchestration-plan.md` — agent roles, gates, branches
- `docs/framer-poc-map.md` — Fizens → BestonFX section mapping
- `prompts/workshop-components.md` — Workshop component specs
- `prompts/framer-mcp-claude.md` — Framer MCP operator prompts
- `CONTEXT.md`, `AGENTS.md`, `CLAUDE.md`, `.cursor/rules/bestonfx.mdc` — agent guardrails
- `docs/compliance-copy-rules.md`, `docs/agents/` — compliance + skills

## AI Hero / Pocock Skill Routing

Default workflow for new web/app features, refactors, production migrations, or high-impact fixes:

```text
/grill-me -> /to-prd -> /to-issues -> /tdd -> /improve-codebase-architecture
```

Use the flow like this:

1. `/grill-me` - clarify requirement, UX flow, data model, permissions, analytics, edge states, and compliance-sensitive unknowns. If the answer exists in the repo, inspect the repo instead of asking.
2. `/to-prd` - turn aligned context into a PRD with problem statement, solution, user stories, implementation decisions, testing decisions, and out-of-scope items.
3. `/to-issues` - break the PRD into vertical slices with acceptance criteria, blockers, and `AFK` / `HITL` ownership.
4. `/tdd` - implement one slice at a time through behavior tests on public interfaces. Mock only system boundaries.
5. `/improve-codebase-architecture` - review architecture before major work, after rapid buildout, or when tests become hard to write.

Repo context for these skills:

- Issue tracker: `docs/agents/issue-tracker.md`
- Triage labels: `docs/agents/triage-labels.md`
- Domain docs: `CONTEXT.md`, `docs/agents/domain.md`, `docs/adr/`

Compliance rules in BestonFX docs always override speed or workflow convenience.

## Workstreams

Ordered by current-phase priority. Framer POC leads; Next.js production work is parked until POC approval.

| Priority | Workstream | Goal | Main owner | Supporting tool | Output |
|---|---|---|---|---|---|
| 1 | Framer POC | Adapt Fizens into the BestonFX visual concept | Claude Code + Framer MCP | Workshop | Framer preview link + section map |
| 2 | Compliance | Review copy, claims, risk warning, bot policy | Human / Legal | Claude Code | Approved copy matrix |
| 3 | Orchestration | Keep roles, branches, file ownership, task order clear | Claude Code | Human | Updated `docs/task-board.md` |
| 4 | Repo health | Keep Next.js repo green (typecheck/lint/scan/build) — health only, no production UI build | Codex | — | Check results |
| 5 | Team review | Help team decide production scope | Founder / PM | Everyone | Decision package |
| — _(deferred)_ | Next.js production rebuild | Rebuild/export approved Framer sections into Next.js | Cursor Composer 2.5 | Codex | Deferred until Framer POC approved (backlog `B009`) |

## Agent Operating Prompts

### Claude Code - T001 Orchestrator

Use branch: `agent/claude-orchestration`

Read:

```text
README.md
AGENTS.md
CLAUDE.md
CONTEXT.md
.cursor/rules/bestonfx.mdc
docs/plan.md
docs/orchestration-plan.md
docs/task-board.md
docs/framer-poc-map.md
docs/compliance-copy-rules.md
```

Task:

```text
You are the Lead Architect and Orchestrator for the BestonFX website project.

Start with Task T001.

1. Review whether docs/plan.md, docs/orchestration-plan.md, and docs/task-board.md are consistent.
2. Improve docs/task-board.md only if sequencing, ownership, branch names, or acceptance criteria should be clearer.
3. Do not edit application code.
4. Do not change business copy.
5. Do not touch API routes, Supabase schema, or UI components.

Rules:
- No guaranteed profit claims
- No regulatory claims unless explicitly provided
- No fake stats
- No guaranteed IB income

Return:
1. files reviewed
2. files changed
3. recommended next task for Codex
4. recommended next task for Cursor Composer 2.5
5. recommended next Framer MCP action
6. risks
```

### Codex - Technical Baseline

Use branch: `agent/codex-baseline-check`

Task:

```text
You are the Implementation and Verification Agent for BestonFX.

Verify the technical baseline only.

Run:
- npm run typecheck
- npm run lint
- npm run compliance:scan
- npm run build

Rules:
- Do not redesign UI.
- Do not change copy unless required to fix a failing compliance scan.
- Do not add fake stats.
- Do not invent regulatory, spread, leverage, commission, or IB claims.
- Fix only technical setup issues if any.
- Repo health only in this phase — do not build or polish production UI.

Return:
1. commands run
2. result of each command
3. files changed
4. root cause if anything failed
5. remaining risks
```

### Cursor Composer 2.5 - Next.js UI (DEFERRED this phase)

> **Not a current-phase task.** The Framer POC is the deliverable now. Cursor Composer is optional support for **local reference mockups only** — it is not the primary tool for the Framer POC. Do **not** treat Next.js homepage/UI polish as the current deliverable. Next.js production rebuild happens only after the Framer POC is approved (backlog `B009`).

If explicitly asked to produce a local reference mockup (optional, non-blocking):

Use branch: `agent/cursor-homepage-ui`

Files allowed:

```text
src/app/(public)/page.tsx
src/components/site/*
src/app/globals.css only if strictly needed for visual polish
```

Files not allowed:

```text
src/app/api/*
src/lib/compliance/*
src/lib/bot/*
supabase/*
docs/compliance-copy-rules.md
```

Prompt:

```text
You are producing an OPTIONAL local reference mockup for BestonFX — not the current deliverable.

Task:
Improve the homepage visual presentation only, as a reference for the Framer POC direction.

Design direction (current brand — light, royal blue; source: DESIGN.md + docs/brand/tokens.json):
- Premium Thai forex/CFD broker, trust-first, broker-sober
- Light theme, white background, royal blue #0040C1, bright blue #2970FF, soft blue #EFF4FF
- Font: Prompt (Thai + Latin)
- Mobile-first
- LINE CTA visible above the fold
- Risk warning must remain visible
- The old dark-navy + champagne-gold direction is superseded — do not use it.

Compliance rules:
- No guaranteed profit
- No risk-free language
- No fake statistics
- No regulatory claims
- No guaranteed IB income

Before editing, list:
1. files you will edit
2. sections you will touch
3. compliance risks

After editing, run or ask user to run:
- npm run typecheck
- npm run lint
- npm run compliance:scan
```

### Framer MCP - POC Audit

Before editing Framer:

```text
1. Duplicate the Fizens template
2. Rename project to BestonFX Framer POC v0.1
3. Install Workshop
4. Install MCP plugin
5. Connect MCP URL to Claude Code or Cursor
```

Audit prompt:

```text
You are connected to the BestonFX Framer POC through MCP.

First, do not edit anything.

Read the Framer project structure.
Return:
1. list of pages
2. list of reusable components
3. main homepage section order
4. which Fizens sections should be reused, adapted, or removed
5. risky copy that implies profit, savings, guaranteed growth, fake statistics, or unverified claims
6. proposed BestonFX homepage section map

Rules:
- Do not modify the canvas yet.
- Do not add regulatory/license claims.
- Do not add fake stats.
- Do not claim profit, low risk, or guaranteed IB income.
```

### Workshop Components

Create and review in this order:

```text
1. RiskDisclosureBar
2. PremiumTradingHero
3. TrustStackCards
4. LineSupportCTA
5. TradingToolsGrid
6. IBCommissionEstimatorMock
7. AIChatBotMock
```

Review criteria:

- Fits the light royal-blue premium brand (see `DESIGN.md`)
- Mobile view works
- No fake numbers
- No profit language
- No regulatory claim
- Disclaimer visible where needed

## Execution Sequence

Framer-first order (canonical — matches `docs/task-board.md`):

```text
1.  T001 - Align docs to the Framer-first single source of truth
2.  T002 - Optional technical baseline check (repo health only)
3.  T003 - Framer MCP audit of the duplicated Fizens project
4.  T004 - Framer/Fizens homepage visual layout
5.  T005 - Workshop components
6.  T006 - Framer page expansion
7.  T007 - Compliance / copy review
8.  T008 - Demo walkthrough
9.  T009 - Founder / team review
10. T010 - Decide rebuild / export path into Next.js
```

Do not polish Next.js UI as a current deliverable. Next.js rebuild/export happens only after the Framer POC is approved.

## POC Acceptance Criteria

### Technical

- `npm run typecheck` passes
- `npm run lint` passes
- `npm run compliance:scan` passes
- `npm run build` passes
- Localhost opens without static asset 404

### UI (Framer POC homepage)

- Homepage looks premium in the light royal-blue brand (`#0040C1`), not the superseded dark-navy/gold
- Hero communicates trust-first positioning
- LINE CTA is visible above the fold
- Risk warning is visible
- Mobile layout is usable

### Framer

- Framer preview link exists
- Fizens sections are mapped to BestonFX sections
- Workshop components inserted where Fizens is weak
- Risky copy removed or replaced with placeholders

### Compliance

- No guaranteed profit
- No risk-free wording
- No fake statistics
- No unverified testimonials
- No unapproved regulatory claims
- No guaranteed IB income
- Risk warning appears on high-risk pages

### Business

- Founder can understand the new positioning in under 5 minutes
- Team can see how BestonFX, DX Academy, DX Trade, and DX Exclusive connect
- IB flow is understandable
- Site direction is approved for production build or next design iteration

## Decision Package

Send Founder / Leadership:

```text
1. Framer preview link
2. Local Next.js screenshots or Vercel preview link
3. docs/framer-poc-map.md
4. docs/poc-checklist.md
5. One-page decision note:
   - what is approved
   - what is placeholder
   - what needs legal confirmation
   - what goes into production next
```

Send Legal / Compliance:

```text
1. docs/compliance-copy-rules.md
2. Hero copy
3. Account page copy
4. Markets page copy
5. Partners / IB copy
6. DX Trade / DX Exclusive copy if included
7. Risk Disclosure page
8. Any spread/leverage/commission/regulatory statements
9. Bot answer policy draft
```

Send Design / Marketing:

```text
1. Framer preview link
2. docs/framer-poc-map.md
3. screenshots of key pages
4. brand tokens (current — light, royal blue; see `DESIGN.md` + `docs/brand/tokens.json`):
   - Primary blue: #0040C1
   - Bright blue: #2970FF
   - Soft blue surface: #EFF4FF
   - Border: #E5E7EB
   - Heading text: #171717
   - Body text: #4B5563
   - LINE green: #06C755 (LINE conversion paths only)
   - Risk amber: #B45309 (compliance/risk surfaces only)
5. homepage section map
6. Workshop component list
```

## Hard Rules

```text
1. Do not invent regulation/license claims.
2. Do not invent spreads, leverage, commission, execution speed, or payout numbers.
3. Do not use fake testimonials.
4. Do not use fake user/review statistics.
5. Do not claim DX Trade signals generate profit.
6. Do not claim IB income is guaranteed.
7. Do not let AI edit all files at once.
8. Do not deploy without compliance review.
9. Do not connect production secrets to Framer MCP.
10. Do not merge agent branches without human review.
```

## Founder / PM Checklist

```text
[ ] Primary CTA: demo, LINE, waitlist, open account, or IB?
[ ] Legal entity / regulatory wording confirmed?
[ ] Account types and conditions confirmed?
[ ] IB commission rules confirmed?
[ ] DX Trade positioning confirmed?
[ ] DX Exclusive positioning confirmed?
[ ] LINE OA / LIFF access ready?
[ ] Supabase project owner decided?
[ ] Vercel project owner decided?
[ ] Framer POC approved or needs another iteration?
```
