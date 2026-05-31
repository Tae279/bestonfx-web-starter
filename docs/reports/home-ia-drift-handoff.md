# Home IA Drift — Forensic Handoff

**Date:** 1 June 2026 · Cursor  
**Status:** Resolved in wireframes + Jun 2026 research — this doc explains the mistake so it is not repeated in Framer.

---

## Summary

The committed Next.js home and early `docs/framer-poc-map.md` placed **TradingToolsGrid** and **IBCommissionEstimator** on Home. Validated wireframes (`docs/wireframes/pages/home.md`) and broker IA best practice place those blocks on **`/tools`** and **`/partners`** respectively.

**Wireframes win.** Framer build must follow wireframe Home order.

---

## Wrong vs correct (Home)

### Wrong (introduced `f17b166`, reinforced in framer-poc-map)

```
Risk → Nav → Hero → TrustStack → Accounts preview
  → TradingToolsGrid  ❌
  → LINE CTA
  → IBPartnerCTA      ❌
  → AIChatBot
```

### Correct (wireframe + research SOT)

```
Risk → Nav → Hero → RegulatoryStrip → FeatureGrid (trust)
  → MarketsTicker → AccountComparison preview → StepProcess
  → FeatureSplit (Rebate) → ArticleGrid teaser → FAQ
  → CTABanner → Footer (+ AIChatWidget float)
```

**Not on Home:** full Tools grid, IB estimator, gated Stats, gated Testimonials.

---

## Root cause

| Source | Error |
|---|---|
| `docs/framer-poc-map.md` (May 2026) | Mapped Fizens `AdditionSection` → `TradingToolsGrid` on Home (#6) |
| `f17b166` Next.js scaffold | Copied same mapping into `src/app/(public)/page.tsx` |
| Fizens template habit | SaaS templates stack “more features” on Home — wrong for broker IA |

Fizens `AdditionSection` (“…and more additional features”) is a **template showcase**, not a broker information architecture pattern.

---

## Fizens template ≠ Beston Home

Fizens default Home includes sections Beston must **remove or relocate**:

| Fizens section | Beston treatment |
|---|---|
| AdditionSection (feature chips) | → `/tools` page body |
| StaticsSection | Remove (gated) |
| Testimonials | Gated off |
| 3-tier Pricing | → 2 account cards; full table on `/accounts` |
| Partner program | → `/partners` only |

---

## Action for Framer operator

1. Do **not** copy Fizens Home 1:1.
2. Use `docs/research/bestonfx-framer-source-of-truth-2026-06-01.md` first, then `docs/research/bestonfx-framer-perfect-handoff-2026-06-01.md` section table.
3. When adapting Fizens components, ask: *“Is this persuasion (Home) or utility (Tools)?”*
4. If utility → dedicated page.

---

## Next.js note (future production)

When POC is approved and Next.js is rebuilt:

- Remove `TradingToolsGrid` from `src/app/(public)/page.tsx`
- Remove IB CTA block from Home
- Align with `docs/wireframes/pages/home.md`

Current phase remains **Framer-first** — fix IA in Framer POC, not Next.js polish.

---

## References

- `docs/wireframes/pages/home.md`
- `docs/wireframes/sitemap.md` — “`/tools` separated from `/markets`”
- `docs/research/bestonfx-framer-source-of-truth-2026-06-01.md`
- `docs/research/bestonfx-framer-perfect-research-2026-06-01.md` §2
