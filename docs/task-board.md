# BestonFX Task Board

_Last updated: 2026-05-27_

## Current Sprint

**Sprint name:** Framer POC + Next.js Foundation  
**Goal:** Give the team a near-usable Framer visual POC while keeping the Next.js production foundation aligned and compliance-safe.

---

## Status Legend

| Status | Meaning |
|---|---|
| Todo | Not started |
| Ready | Scoped and ready for agent execution |
| In Progress | Agent is working on it |
| Review | Needs human/lead review |
| Blocked | Cannot proceed without decision/input |
| Done | Accepted |

---

## Active Tasks

| ID | Task | Owner | Branch | Allowed files | Status | Acceptance criteria |
|---|---|---|---|---|---|---|
| T001 | Finalize multi-agent orchestration plan | Claude Code | `agent/claude-orchestration` | `docs/orchestration-plan.md`, `docs/task-board.md`, `AGENTS.md`, `CLAUDE.md`, `.cursor/rules/*` | Ready | Plan defines roles, branches, file ownership, gates, stop conditions |
| T002 | Run initial dependency + build check | Codex | `agent/codex-baseline-check` | `package.json`, lockfile, config files only if needed | Todo | `npm install`, `npm run typecheck`, `npm run lint`, `npm run compliance:scan`, `npm run build` results documented |
| T003 | Audit Framer/Fizens project through MCP | Claude Code | `framer-poc` | `docs/framer-poc-map.md`, screenshots/notes only | Todo | Pages, components, section order, reusable/adapt/remove table documented |
| T004 | Improve homepage visual layout in Next.js | Cursor Composer 2.5 | `agent/cursor-homepage-ui` | `src/app/(public)/page.tsx`, `src/components/site/*` | Todo | Mobile-first homepage has hero, trust cards, tools, LINE CTA, IB CTA, AI bot mock, visible risk warning |
| T005 | Strengthen compliance scanner | Codex | `agent/codex-baseline-check` | `scripts/*`, `src/lib/compliance/*`, `docs/compliance-copy-rules.md` | Todo | Scanner catches banned profit/risk-free/IB-income/fake-stat phrases and passes current repo |
| T006 | Create Framer Workshop components | Human + Claude Code | `framer-poc` | Framer workspace, `prompts/workshop-components.md`, `docs/framer-poc-map.md` | Todo | Risk bar, hero, LINE CTA, IB estimator mock, AI bot mock, tools grid created or documented |
| T007 | Build public page polish pass | Cursor Composer 2.5 | `agent/cursor-homepage-ui` | `src/app/(public)/*`, `src/components/site/*` | Todo | Why, Accounts, Markets, Tools, Partners, Support pages feel consistent and premium |
| T008 | Add API route verification notes | Codex | `agent/codex-baseline-check` | `src/app/api/*`, `src/lib/*` | Todo | API placeholders are safe, typed, and do not expose production secrets or advice logic |
| T009 | Create demo walkthrough script | Claude Code | `framer-poc` | `docs/poc-checklist.md`, new `docs/demo-walkthrough.md` | Todo | 5-minute stakeholder walkthrough explains home, trust, accounts, tools, LINE, IB, AI bot, legal footer |
| T010 | Founder review package | Human owner | `dev` | All review artifacts | Todo | Framer preview + local Next.js preview + screenshots + open decisions ready |

---

## Backlog

| ID | Task | Preferred owner | Priority | Notes |
|---|---|---|---|---|
| B001 | Create Supabase seed data for CMS placeholders | Codex | Medium | Use safe placeholder content only |
| B002 | Add `docs/agent-run-log.md` | Claude Code | Medium | Useful once multiple agents start editing |
| B003 | Add `docs/compliance-review-log.md` | Claude Code | Medium | Track every sensitive claim and approval status |
| B004 | Add screenshot capture checklist | Cursor Composer 2.5 | Low | Useful for stakeholder demo |
| B005 | Build campaign landing page generator skeleton | Codex | Medium | Phase 2, not necessary for first Framer POC |
| B006 | Create IB dashboard mock data | Codex | Medium | Must clearly mark estimated vs confirmed commission |
| B007 | Create LINE LIFF onboarding wireframe | Claude Code + Cursor | Medium | Keep as mock until LINE channel details are ready |
| B008 | Add RAG document ingestion skeleton | Codex | Medium | Use approved docs only; no trading advice |

---

## Blocked / Needs Founder Decision

| ID | Decision needed | Why it matters | Owner |
|---|---|---|---|
| D001 | Confirm legal/regulatory entity wording | Affects footer, risk pages, trust cards, bot answers | Founder / Legal |
| D002 | Confirm account types and fee conditions | Affects Accounts page and comparison table | Founder / Product |
| D003 | Confirm allowed DX Trade positioning | High compliance risk if framed as signal/profit service | Founder / Compliance |
| D004 | Confirm IB commission model | Affects Partner landing page and IB estimator mock | Founder / IB Manager |
| D005 | Confirm primary conversion CTA | Determines hero and nav priority: demo, LINE, waitlist, account open, or IB apply | Founder / Marketing |
| D006 | Confirm support operating hours / SLA | Affects Support page and LINE CTA copy | Operations |
| D007 | Confirm whether Thai-only or Thai+English launch | Affects routing, SEO, copy production workload | Founder / Marketing |

---

## Agent Prompts

Canonical operating prompts live in `docs/plan.md` -> **Agent Operating Prompts** (Claude Code, Codex, Cursor Composer 2.5, Framer MCP, Workshop). Do not duplicate prompt text here — update `docs/plan.md` to avoid drift.

---

## First Execution Order

Run tasks in this order:

```text
1. T001 — finalize orchestration docs
2. T002 — run technical checks
3. T003 — Framer MCP audit
4. T004 — homepage visual improvement
5. T005 — compliance scanner improvement
6. T006 — Workshop components
7. T007 — public page polish
8. T008 — API route verification notes
9. T009 — demo walkthrough
10. T010 — founder/team review
```

---

## Review Checklist Per Task

Before marking any task `Done`, confirm:

- [ ] Task ID exists.
- [ ] Owner is clear.
- [ ] Files changed are listed.
- [ ] No other agent is editing same files.
- [ ] Compliance-sensitive changes are flagged.
- [ ] Commands were run or marked not applicable.
- [ ] Screenshots provided if UI-related.
- [ ] Human decision is recorded if required.

---

## Sprint Exit Criteria

The sprint is complete when:

- [ ] Framer POC is presentable to team.
- [ ] Next.js local preview runs.
- [ ] Homepage and key pages align with Framer POC direction.
- [ ] Risk warning is visible across public pages.
- [ ] No fake metrics/testimonials remain.
- [ ] Task board is updated with open decisions.
- [ ] Founder/team can decide whether to rebuild manually or export selected Framer components later.
