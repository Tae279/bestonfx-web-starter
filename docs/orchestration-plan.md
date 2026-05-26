# BestonFX Multi-Agent Orchestration Plan

_Last updated: 2026-05-26_

## Purpose

This document defines how the BestonFX website team should coordinate multiple AI coding/design agents without creating conflicting edits, compliance drift, or duplicated architecture.

The immediate goal is to run a lightweight, human-controlled orchestration model for:

1. Framer/Fizens visual POC
2. Next.js production foundation
3. Compliance-safe UX/copy
4. AI bot, LINE, CMS, analytics, and IB portal scaffolding

This is not a fully autonomous agent system. Human approval remains required before publishing, merging, or presenting compliance-sensitive claims.

---

## Operating Principle

Use agents as specialized workers, not as independent product owners.

```text
Human owner / PM
  -> approves strategy, claims, legal-sensitive copy, final merge

Claude Code
  -> lead architect / orchestrator / Framer MCP operator

Codex
  -> implementation + verification agent

Cursor Composer 2.5
  -> fast UI/page/component builder inside Cursor

Framer Workshop + MCP
  -> Framer POC visual editing surface
```

---

## Agent Roles

| Agent / Tool | Primary role | Best use | Must not do |
|---|---|---|---|
| Claude Code | Lead Architect / Orchestrator | Break down tasks, inspect repo, operate Framer MCP, review compliance-sensitive copy, create task prompts | Do not make broad production edits without scoped task approval |
| Codex | Implementation / Verification Agent | Create components, fix TypeScript/build errors, add tests, run checks, implement API skeletons | Do not invent financial/regulatory/commission claims |
| Cursor Composer 2.5 | UI Builder | Improve pages, layouts, responsive behavior, Tailwind/shadcn component wiring | Do not edit API, DB schema, compliance rules, or legal copy unless explicitly assigned |
| Framer Workshop | Framer component generator | Create visual POC components such as hero, risk bar, LINE CTA, IB estimator mock | Do not create production logic/auth/backend |
| Framer MCP | Framer canvas automation | Audit project, batch-update text/styles, create placeholder pages, insert generated components | Do not run unsupervised whole-site redesigns |
| Human owner | Final approver | Product decisions, legal-sensitive copy, regulatory wording, final merge | Do not skip approval gates for speed |

---

## Source of Truth

| Area | Source of truth |
|---|---|
| Production architecture | `docs/architecture-decision.md` |
| Product positioning | `docs/product-brief.md` |
| Compliance copy rules | `docs/compliance-copy-rules.md` |
| Framer visual POC mapping | `docs/framer-poc-map.md` |
| Agent workflow | `docs/orchestration-plan.md` |
| Active tasks | `docs/task-board.md` |
| Agent instructions | `AGENTS.md`, `CLAUDE.md`, `.cursor/rules/bestonfx.mdc` |

If an agent finds a conflict between files, it must pause and report the conflict instead of guessing.

---

## Branch Strategy

```text
main
  production-ready only

dev
  integration branch

agent/claude-orchestration
  docs, task breakdown, architecture notes, Framer MCP plans

agent/codex-build
  implementation, API skeletons, tests, type/build fixes

agent/cursor-ui
  UI, page layout, responsive polish

framer-poc
  Framer POC notes, exported snippets, screenshots, section maps
```

Rules:

1. One agent works on one branch at a time.
2. No agent commits directly to `main`.
3. No two agents edit the same file set in parallel.
4. Every PR or merge candidate must include:
   - task ID
   - files changed
   - commands run
   - screenshots if UI-related
   - compliance impact note
   - remaining risks

---

## File Ownership Matrix

| File / Area | Primary owner | Backup | Human approval required |
|---|---|---|---|
| `docs/orchestration-plan.md` | Claude Code | Human | Yes |
| `docs/task-board.md` | Claude Code | Human | Yes |
| `docs/architecture-decision.md` | Claude Code | Human | Yes |
| `docs/compliance-copy-rules.md` | Claude Code | Human/legal | Yes |
| `docs/framer-poc-map.md` | Claude Code | Cursor | Yes for major structure |
| `AGENTS.md` | Claude Code | Human | Yes |
| `CLAUDE.md` | Claude Code | Human | Yes |
| `.cursor/rules/*` | Claude Code | Cursor | Yes |
| `src/components/site/*` | Cursor Composer 2.5 | Codex | Medium |
| `src/app/(public)/*` | Cursor Composer 2.5 | Codex | Medium |
| `src/app/api/*` | Codex | Claude Code | Yes |
| `src/lib/compliance/*` | Codex | Claude Code | Yes |
| `src/lib/bot/*` | Codex | Claude Code | Yes |
| `src/lib/line/*` | Codex | Claude Code | Yes |
| `src/lib/analytics/*` | Codex | Claude Code | Yes |
| `supabase/migrations/*` | Codex | Claude Code | Yes |
| Framer canvas edits | Claude Code via MCP | Human | Yes |
| Workshop components | Human + Claude Code | Cursor | Yes before presentation |

---

## Approval Gates

### Gate 1: Architecture

Pass criteria:

- Sitemap is approved.
- Framer POC vs Next.js production responsibility is clear.
- No duplicated CMS strategy.
- AI bot, LINE, analytics, IB portal boundaries are documented.

### Gate 2: UI / UX

Pass criteria:

- Mobile-first layout works.
- LINE CTA is visible above or near first conversion path.
- Risk warning is visible.
- No fake statistics or fake testimonials.
- Visual direction matches dark navy + gold premium finance aesthetic.

### Gate 3: Compliance

Pass criteria:

- No profit guarantee.
- No risk-free claim.
- No unverified regulatory/license wording.
- No guaranteed IB income.
- No performance/testimonial claim without source.
- Risk warning appears on commercial/trading-related pages.
- Sensitive placeholders use wording such as `รอยืนยันข้อมูลจากฝ่ายกำกับดูแล`.

### Gate 4: Technical

Required commands:

```bash
npm run typecheck
npm run lint
npm run compliance:scan
npm run build
```

Pass criteria:

- All commands pass, or failures are documented with owner and next fix.
- No production secret appears in committed files.
- API placeholders do not expose unsafe behavior.

### Gate 5: Founder / Business Review

Pass criteria:

- Positioning feels right.
- DX Academy / DX Trade / DX Exclusive boundaries are approved.
- IB path is commercially acceptable.
- LINE-first conversion strategy is approved.
- Any sensitive claim is either approved or removed.

---

## Compliance Rules for All Agents

Agents must not create, imply, or preserve language that suggests:

- guaranteed profit
- low-risk or risk-free trading
- guaranteed win rate
- guaranteed IB income
- regulatory/license status without explicit source
- fake reviews, fake user counts, fake awards, fake ratings
- personalized trading advice
- “signal = profit” framing

Approved default risk warning:

```text
Forex/CFD และ Leverage มีความเสี่ยงสูง อาจทำให้สูญเสียเงินลงทุน และไม่มีการรับประกันผลตอบแทน
```

Use placeholder for unknown facts:

```text
รอยืนยันข้อมูลจากฝ่ายกำกับดูแล
```

---

## Agent Task Template

Every agent task should include:

```markdown
## Task ID

## Owner

## Objective

## Allowed files

## Files not allowed

## Acceptance criteria

## Commands to run

## Compliance notes

## Output required
- Files changed
- Commands run
- Screenshots if UI
- Remaining risks
```

---

## Recommended Working Sequence

### Day 1: Stabilize foundation

1. Claude Code reviews `AGENTS.md`, `CLAUDE.md`, `.cursor/rules/bestonfx.mdc`.
2. Claude Code creates or updates this orchestration plan and the task board.
3. Codex installs dependencies and runs checks.
4. Cursor Composer does not edit until file ownership is clear.

### Day 2: Framer POC audit + homepage alignment

1. Claude Code uses Framer MCP to audit the Fizens structure.
2. Claude Code updates `docs/framer-poc-map.md`.
3. Cursor Composer improves the Next.js homepage according to the map.
4. Codex fixes only technical issues introduced by UI work.

### Day 3: Core public pages

1. Cursor Composer improves Accounts, Markets, Tools, Partners, Support pages.
2. Codex adds tests/checks and cleans component typing.
3. Claude Code reviews copy for compliance-sensitive issues.

### Day 4: Framer POC polish

1. Workshop generates missing POC components.
2. Framer MCP applies controlled text/style updates.
3. Claude Code creates demo walkthrough notes.

### Day 5: Review package

1. Run technical checks.
2. Run compliance scan.
3. Capture screenshots.
4. Present Framer POC and local Next.js preview.
5. Decide what to rebuild/export into Next.js.

---

## Stop Conditions

Agents must stop and request human decision if:

- A task requires regulatory/license wording.
- A task involves spread, leverage, commission, payout, or account condition claims.
- A task edits legal pages, risk warnings, or disclaimers.
- A task changes auth, data model, RLS, or payment/payout logic.
- Two agents need to edit the same file.
- Build failure requires broad architecture changes.
- Framer MCP proposes destructive canvas operations.

---

## Definition of Done

A task is done only when:

1. Acceptance criteria are met.
2. Compliance impact is documented.
3. Required commands are run or explicitly marked not applicable.
4. Files changed are listed.
5. Remaining risks are noted.
6. Human owner approves merge/presentation if needed.
