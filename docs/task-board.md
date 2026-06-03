# BestonFX Task Board

_Last updated: 2026-06-03_

## Current Sprint

**Sprint name:** Framer/Fizens POC First  
**Goal:** Deliver a presentable `BestonFX Framer POC v0.1` by adapting the purchased Fizens template. Next.js is the future production foundation only — not a current build target. Source of truth: `docs/plan.md` + `docs/research/bestonfx-framer-source-of-truth-2026-06-01.md`.

---

## Status Legend

| Status      | Meaning                               |
| ----------- | ------------------------------------- |
| Todo        | Not started                           |
| Ready       | Scoped and ready for agent execution  |
| In Progress | Agent is working on it                |
| Review      | Needs human/lead review               |
| Blocked     | Cannot proceed without decision/input |
| Done        | Accepted                              |

---

## Active Tasks

| ID   | Task                                                  | Owner                            | Branch                                      | Allowed files / workspace                                                                                                                                                                                    | Status | Acceptance criteria                                                                                                                                                                                                                   |
| ---- | ----------------------------------------------------- | -------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| T001 | Align docs to the Framer-first single source of truth | Claude Code                      | `agent/framer-first-single-source`          | `docs/plan.md`, `docs/task-board.md`, `docs/orchestration-plan.md`, `README.md`, `prompts/*`, `AGENTS.md`, `CLAUDE.md`, `.cursor/rules/*`                                                                    | Review | `docs/plan.md` is the SSOT; current phase is explicitly Framer-first; Next.js = future foundation; no doc tells an agent to build/polish Next.js now                                                                                  |
| T002 | Optional technical baseline check (repo health only)  | Codex                            | `agent/codex-baseline-check`                | `package.json`, lockfile, config files only if needed                                                                                                                                                        | Done   | `npm install`, `npm run typecheck`, `npm run lint`, `npm run compliance:scan`, `npm run build` documented; repo health only, no production UI build                                                                                   |
| T003 | Framer MCP audit of the duplicated Fizens project     | Claude Code                      | `framer-poc`                                | `docs/framer-poc-map.md`, screenshots/notes only                                                                                                                                                             | Done   | Pages, components, section order, reuse/adapt/remove table documented                                                                                                                                                                 |
| T011 | Research-backed Framer/Fizens source-of-truth reset   | Codex                            | `codex/bestonfx-framer-research-2026-06-01` | `docs/research/*`, `docs/wireframes/*`, `docs/plan.md`, `docs/task-board.md`, `docs/framer-poc-map.md`, `prompts/framer-mcp-claude.md`                                                                       | Done   | Broker IA, Home section order, Fizens adaptation, motion, copy, trust, Framer features, and agent handoff rules are updated from 2026-06-01 research; `docs/framer-poc-map.md` no longer overrides wireframes                         |
| T004 | Improve Framer/Fizens homepage visual layout          | Claude Code + Framer MCP + Human | `framer-poc`                                | Framer workspace, `docs/research/bestonfx-framer-source-of-truth-2026-06-01.md`, `docs/wireframes/pages/home.md`, `docs/framer-poc-map.md`, `prompts/workshop-components.md`, `docs/framer-mcp-master-prompt.md` | Blocked | Framer homepage follows the 2026-06-01 Home IA; no full tools grid or IB block on Home; premium hero, visible risk warning, LINE CTA, mock-data labels, and no regulatory/profit/spread/leverage/commission/IB-income claims invented. Blocked until the Framer canvas restore/current state is confirmed by human review. |
| T005 | Framer Code Components                                | Human + Claude Code              | `framer-poc`                                | Framer workspace, `docs/framer-code-components/`, `prompts/workshop-components.md`, `docs/wireframes/components.md`, `docs/framer-poc-map.md`                                                                | Review | Code kit is ready, mirrored to the Framer operator repo, created as 7 Framer Code Files, and staged on the non-published `BestonFX Code Components QA` design page. Final page placement is handled by T004/T006.                     |
| T006 | Framer page expansion                                 | Claude Code + Framer MCP + Human | `framer-poc`                                | Framer workspace, `docs/research/bestonfx-framer-source-of-truth-2026-06-01.md`, `docs/wireframes/sitemap.md`, `prompts/framer-mcp-claude.md`                                                                | Todo   | Why / Accounts / Markets / Tools / Partners / Support / Articles / Legal pages built in Framer from Fizens layouts with safe placeholders; risky Fizens copy + template purchase artifacts removed                                    |
| T007 | Compliance / copy review                              | Human / Legal + Claude Code      | `framer-poc`                                | `docs/compliance-copy-rules.md`, copy in Framer                                                                                                                                                              | Todo   | All POC copy passes compliance rules; risky Fizens copy replaced; unconfirmed facts use `รอยืนยันข้อมูลจากฝ่ายกำกับดูแลก่อนเผยแพร่`; risk warning on claim-bearing pages                                                              |
| T008 | Demo walkthrough                                      | Claude Code                      | `framer-poc`                                | `docs/poc-checklist.md`, new `docs/demo-walkthrough.md`                                                                                                                                                      | Todo   | 5-minute stakeholder walkthrough of the Framer POC: home, trust, accounts, tools, LINE, IB, AI bot, legal footer                                                                                                                      |
| T009 | Founder / team review                                 | Human owner                      | —                                           | All review artifacts                                                                                                                                                                                         | Todo   | Framer preview link + screenshots + open decisions (D001–D007) ready for the team                                                                                                                                                     |
| T010 | Decide rebuild / export path into Next.js             | Founder + Claude Code            | —                                           | Decision note                                                                                                                                                                                                | Todo   | Team decides which approved Framer sections to rebuild or export into Next.js (next phase)                                                                                                                                            |

### Latest execution notes

- **Phase pivot (2026-05-27):** Current phase is now **Framer/Fizens POC first** (see `docs/plan.md`, the single source of truth). The Next.js homepage polish noted below is **parked** — no longer the current deliverable, tracked in backlog `B009`. The Next.js repo stays a future production foundation + repo-health surface only.
- **Research reset (2026-06-01):** Latest source is `docs/research/bestonfx-framer-source-of-truth-2026-06-01.md`. Use `docs/wireframes/*` for page IA. Treat `docs/framer-poc-map.md` as Fizens inventory/legacy notes, not final Home order. Home must not include the full tools grid or IB block.
- **Framer Code Components kit (2026-06-01):** All 7 T005 components are ready under `docs/framer-code-components/`, mirrored to `/Users/tae279/Dev_💻/Cursor Tae/bestonfx-framer/content/framer-code-components/`, created in the confirmed Framer project as Code Files, and staged as linked instances on the non-published `BestonFX Code Components QA` design page (`Nq6CRdEzE`). Page-level placement remains for T004/T006.
- **T004 recovery note (2026-06-01):** A wireframe stack replacement attempt was reverted via Framer undo. Home is back on the original Fizens section stack (`HeroSection`, `AboutSection`, `FeaturesSection`, `AdditionSection`, `BenefitSection`, `StaticsSection`, `HowItWorkSection`, `SectionsTestimonial`, `PricingSection`, `BlogSection`, `FaqSection`, `SectionsCta`). Next T004 pass must adapt the purchased Fizens sections in place, not replace the template with a new generic stack.
- **T004 in-place completion (2026-06-01):** Reconnected Framer MCP and adapted the Fizens Home in place. Current `Main` children: `RiskDisclosureBar`, `HeroSection`, `AboutSection`, `FeaturesSection`, `AdditionSection`, `BenefitSection`, `HowItWorkSection`, `PricingSection`, `BlogSection`, `FaqSection`, `SectionsCta`, `LineSupportCta`, `AiChatBotMock`. Verified by Framer MCP that required wireframe copy is present and risky template strings (`madebykota.com/buy`, fake stats, financial-freedom/app-store copy, Advanced Plan, testimonials/star-rating labels) are absent from Home.
- **T004 text-only pass (2026-06-01):** Applied the Home wireframe copy onto the existing Fizens section stack without rebuilding layout. Updated hero, regulatory strip, trust pillars, market sample labels, rebate copy, steps, accounts, article teaser, FAQ, CTA, nav, and footer text. Hid only gated/fake social-proof surfaces (`StaticsSection`, `SectionsTestimonial`, app-store CTA buttons, hero avatar counter, third pricing card) to keep the POC compliance-safe.
- **T004 safety reset (2026-06-03):** A later full-page Code Component / batch page replacement attempt made the Framer canvas unsafe for continued edits. Unsafe local helper files were removed from the repo workspace, and `docs/framer-mcp-master-prompt.md` was committed (`1b665f8`) as the only approved MCP operating protocol. Next Framer action must be **Phase 0 Audit Only** after a human confirms the canvas has been restored or is safe to inspect.
- **Noise cleanup (2026-06-03):** Next.js `/v2` and package drift were reverted because the current deliverable remains Framer-first. Remaining work is docs alignment, task board accuracy, and controlled Framer audit/review.
- `framer-poc` already contains the Fizens-derived light/royal-blue design system (`DESIGN.md`, `docs/brand/tokens.json`) and an earlier homepage visual QA polish (now parked per the pivot above).
- Verified: `npm run typecheck`, `npm run compliance:scan`, `npm run build` passed on 2026-05-27.
- Browser QA passed for hero overlap, inline AI help section, and footer public links.
- Linear: `DX-81` moved to In Review; follow-up `DX-160` tracks POC/mock label cleanup before public launch.

---

## Backlog

| ID   | Task                                                                                 | Preferred owner      | Priority                 | Notes                                                                                                                                                                                                                                  |
| ---- | ------------------------------------------------------------------------------------ | -------------------- | ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| B001 | Create Supabase seed data for CMS placeholders                                       | Codex                | Medium                   | Use safe placeholder content only                                                                                                                                                                                                      |
| B002 | Add `docs/agent-run-log.md`                                                          | Claude Code          | Medium                   | Useful once multiple agents start editing                                                                                                                                                                                              |
| B003 | Add `docs/compliance-review-log.md`                                                  | Claude Code          | Medium                   | Track every sensitive claim and approval status                                                                                                                                                                                        |
| B004 | Add screenshot capture checklist                                                     | Cursor Composer 2.5  | Low                      | Useful for stakeholder demo                                                                                                                                                                                                            |
| B005 | Build campaign landing page generator skeleton                                       | Codex                | Medium                   | Phase 2, not necessary for first Framer POC                                                                                                                                                                                            |
| B006 | Create IB dashboard mock data                                                        | Codex                | Medium                   | Must clearly mark estimated vs confirmed commission                                                                                                                                                                                    |
| B007 | Create LINE LIFF onboarding wireframe                                                | Claude Code + Cursor | Medium                   | Keep as mock until LINE channel details are ready                                                                                                                                                                                      |
| B008 | Add RAG document ingestion skeleton                                                  | Codex                | Medium                   | Use approved docs only; no trading advice                                                                                                                                                                                              |
| B009 | Rebuild or polish approved Framer POC sections in Next.js after stakeholder approval | Cursor Composer 2.5  | Low (until POC approved) | Was the current-phase Next.js homepage polish (old T004). Prior Next.js homepage polish already exists on `framer-poc` (light/royal-blue system, passed checks 2026-05-27) — now parked. Resume only after the Framer POC is approved. |
| B010 | Strengthen Next.js compliance scanner                                                | Codex                | Medium                   | Was T005. Repo-health item, not current-phase priority. Scanner catches banned profit/risk-free/IB-income/fake-stat phrases.                                                                                                           |
| B011 | Add API route verification notes                                                     | Codex                | Medium                   | Was T008. API placeholders safe, typed, no secrets/advice logic. Next phase.                                                                                                                                                           |

---

## Blocked / Needs Founder Decision

| ID   | Decision needed                                  | Why it matters                                                                    | Owner                |
| ---- | ------------------------------------------------ | --------------------------------------------------------------------------------- | -------------------- |
| D001 | Confirm legal/regulatory entity wording          | Affects footer, risk pages, trust cards, bot answers                              | Founder / Legal      |
| D002 | Confirm account types and fee conditions         | Affects Accounts page and comparison table                                        | Founder / Product    |
| D003 | Confirm allowed DX Trade positioning             | High compliance risk if framed as signal/profit service                           | Founder / Compliance |
| D004 | Confirm IB commission model                      | Affects Partner landing page and IB estimator mock                                | Founder / IB Manager |
| D005 | Confirm primary conversion CTA                   | Determines hero and nav priority: demo, LINE, waitlist, account open, or IB apply | Founder / Marketing  |
| D006 | Confirm support operating hours / SLA            | Affects Support page and LINE CTA copy                                            | Operations           |
| D007 | Confirm whether Thai-only or Thai+English launch | Affects routing, SEO, copy production workload                                    | Founder / Marketing  |

---

## Agent Prompts

Canonical operating prompts live in `docs/plan.md` -> **Agent Operating Prompts** (Claude Code, Codex, Cursor Composer 2.5, Framer MCP, Framer Code Components). Do not duplicate prompt text here — update `docs/plan.md` to avoid drift.

---

## First Execution Order

Run tasks in this order (Framer-first):

```text
1.  T001 — align docs to the Framer-first single source of truth
2.  T002 — optional technical baseline check (repo health only)
3.  T003 — Framer MCP audit of the duplicated Fizens project
4.  T011 — research-backed Framer/Fizens source-of-truth reset
5.  T004 — Framer/Fizens homepage visual layout
6.  T005 — Framer Code Components
7.  T006 — Framer page expansion
8.  T007 — compliance / copy review
9.  T008 — demo walkthrough
10. T009 — founder / team review
11. T010 — decide rebuild / export path into Next.js
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

- [ ] Framer POC (`BestonFX Framer POC v0.1`) is presentable to the team.
- [ ] Framer homepage and key pages reflect the BestonFX light royal-blue direction.
- [ ] Risk warning is visible across Framer POC pages that bear claims.
- [ ] No fake metrics / testimonials / fake user counts remain in the Framer POC.
- [ ] Next.js repo stays green (repo health only — not a sprint deliverable).
- [ ] Task board is updated with open decisions (D001–D007).
- [ ] Founder/team can decide whether to rebuild manually or export selected Framer components later (T010).
