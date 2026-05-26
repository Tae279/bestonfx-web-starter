# BestonFX Web POC Execution Plan

_Last updated: 2026-05-27_

## Purpose

ใช้ไฟล์นี้เป็น master plan สำหรับทำ BestonFX POC ให้ทีม, Claude Code, Codex, Cursor Composer 2.5, Framer MCP, Workshop, Legal, Marketing และ Founder เดินไปทางเดียวกัน โดยไม่หลุด compliance risk ของเว็บ Forex/CFD

Primary objective:

```text
ทำให้ทีมเห็น BestonFX website POC ที่ดูเกือบใช้งานได้จริง
โดยมี 2 tracks ทำคู่กัน:
1. Framer POC สำหรับ visual/stakeholder review
2. Next.js repo สำหรับ production foundation
```

This plan is operational. For source-of-truth rules, read:

- `CONTEXT.md`
- `AGENTS.md`
- `CLAUDE.md`
- `.cursor/rules/bestonfx.mdc`
- `docs/orchestration-plan.md`
- `docs/task-board.md`
- `docs/agents/`

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

| Workstream | Goal | Main owner | Supporting tool | Output |
|---|---|---|---|---|
| Repo baseline | Make Next.js stable | Codex | Cursor | Typecheck, lint, compliance scan, build results |
| Orchestration | Keep roles, branches, file ownership, and task order clear | Claude Code | Human | Updated `docs/task-board.md` if needed |
| Framer POC | Convert Fizens into BestonFX visual concept | Claude Code + Framer MCP | Workshop | Framer preview link and section map |
| Homepage UI | Polish homepage after baseline and Framer direction are clear | Cursor Composer 2.5 | Codex | Mobile-first premium homepage |
| Compliance | Review copy, claims, risk warning, and bot policy | Human / Legal | Claude Code | Approved copy matrix |
| Team review | Help team decide production scope | Founder / PM | Everyone | Decision package |

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

Return:
1. commands run
2. result of each command
3. files changed
4. root cause if anything failed
5. remaining risks
```

### Cursor Composer 2.5 - Homepage UI

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
You are the UI Builder for BestonFX.

Task:
Improve the homepage visual presentation only.

Design direction:
- Premium Thai forex/CFD broker
- Dark navy + champagne gold
- Bloomberg Terminal meets Swiss private bank
- Mobile-first
- LINE CTA visible above the fold
- Risk warning must remain visible

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

- Fits navy/gold premium brand
- Mobile view works
- No fake numbers
- No profit language
- No regulatory claim
- Disclaimer visible where needed

## Execution Sequence

Current sequence:

```text
1. T001 - Claude Code orchestration review
2. T002 - Codex technical baseline check
3. T003 - Framer MCP audit
4. T004 - Cursor Composer homepage UI polish
5. T005 - Compliance scanner strengthening
6. T006 - Workshop components
7. T007 - Public page polish pass
8. T009 - Demo walkthrough
9. T010 - Founder/team review
```

Do not run homepage UI polish before the technical baseline and Framer direction are clear.

## POC Acceptance Criteria

### Technical

- `npm run typecheck` passes
- `npm run lint` passes
- `npm run compliance:scan` passes
- `npm run build` passes
- Localhost opens without static asset 404

### UI

- Homepage looks premium, dark navy/gold
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
4. brand tokens:
   - Navy 950: #050B18
   - Navy 900: #081426
   - Graphite 900: #101318
   - Gold 500: #D4AF37
   - Gold 300: #F2D27A
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
