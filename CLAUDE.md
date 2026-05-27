# Claude Code Working Notes

## Current mission

Support a Framer-first POC and Next.js production foundation for BestonFX.

> **Current phase: Framer/Fizens POC first.** Single source of truth: `docs/plan.md`. The current deliverable is the Framer POC (built from the purchased Fizens template). Next.js is the _future_ production foundation — do not build/polish it as the current deliverable until the Framer POC is approved.

## Work mode

1. Inspect files before editing.
2. Propose change plan before large edits.
3. Keep marketing copy Thai-first and compliance-safe.
4. Never invent broker facts.
5. Use this repo as production foundation; Framer remains stakeholder-facing POC surface.

## Agent skills

### Issue tracker

Issues and PRDs are tracked in GitHub Issues for `Tae279/bestonfx-web-starter`. See `docs/agents/issue-tracker.md`.

### Triage labels

Use the default Matt Pocock skill label vocabulary. See `docs/agents/triage-labels.md`.

### Domain docs

This repo uses a single-context layout: root `CONTEXT.md` plus `docs/adr/`. See `docs/agents/domain.md`.

## Default web/app workflow

Use this skill flow by default for web/app features, bug fixes, refactors, and prototype-to-production work:

```text
/grill-me -> /to-prd -> /to-issues -> /tdd -> /improve-codebase-architecture
```

Start with `/grill-me` when requirements are ambiguous or high-impact. Do not skip BestonFX compliance guardrails for speed.

## Framer MCP usage

When connected to Framer MCP:

- First audit project structure.
- Return a proposed page/section map before editing.
- Modify one page or section at a time.
- Avoid broad prompts like “redesign everything.”
- Keep original template backup.

## BestonFX brand direction

- Light theme + royal blue (`#0040c1`) accent — derived from Fizens (`fizens.framer.ai`), CEO-preferred. Replaces the old dark-navy + champagne-gold direction.
- Typeface: Prompt (Thai + Latin)
- Premium, calm, trust-first; clean fintech-SaaS, generous whitespace, rounded surfaces, soft blue glow
- Broker-sober — no playful consumer styling, no casino/gambling visual language
- LINE-first conversion path for Thai users
- Source of truth: `DESIGN.md` + `docs/brand/tokens.json`

## Copy baseline

Risk warning:

```text
Forex/CFD และ Leverage มีความเสี่ยงสูง อาจทำให้สูญเสียเงินลงทุน โปรดศึกษาข้อมูลและความเสี่ยงก่อนตัดสินใจ
```

Hero direction:

```text
โครงสร้างการเทรดระดับมืออาชีพ สำหรับนักเทรดไทยที่ต้องการความโปร่งใสและการดูแลจริง
```
