# BestonFX Visual Direction

_2026-06-01 · defined via `ui-ux-pro-max` (archetype) + `impeccable:shape` (brief/anti-slop) · pairs with [`DESIGN.md`](../../DESIGN.md) + [`tokens.json`](tokens.json)_

> Locks the **visual direction** for the Framer POC + future Next.js + all generated imagery. Palette/font/compliance = governed by `DESIGN.md`; this file adds **concept, signature move, per-asset art direction**.

## Concept — "Calm Canvas" (Fizens+)
BestonFX = **transparent trading infrastructure you can see working** — shown as a calm, airy canvas, not a dense terminal and not luxury hype. Trust comes from visible structure + restraint, not badges.

- **Archetype** (ui-ux-pro-max): **Trust & Authority** + device/UI-mockup landing. ⚠ pro-max's default "trust" palette (gold/purple/dark) + ratings/stars = **rejected** (off-brand + compliance). Keep the archetype's *structure*, override its color.
- **Mood:** calm · credible · premium-sober · infrastructural. "Bloomberg-clean minus the dark, minus the hype." Daylight fintech.

## System (locked, see DESIGN.md/tokens.json)
- **Palette:** white + soft-blue surfaces · royal `#0040c1` single anchor · `#2970ff` interactive · ink grays for text · amber = risk only · LINE green = LINE only. **No gold / purple / dark-navy.**
- **Type:** Prompt (Thai + Latin), display + body · tabular figures for any numerals. (pro-max suggested IBM Plex Sans — validates the "banking-serious" sans mood; we keep Prompt.)
- **Layout:** asymmetric hero (visual right / headline+CTA left) · 8pt rhythm · generous negative space · sticky risk bar · one primary CTA per section (`เปิดบัญชี`) + LINE secondary.
- **Motion:** 150–300ms ease-out enter; parallax only to reveal layered info; respect `prefers-reduced-motion`; no decorative motion, no counters.

## Signature visual move (the distinctive, anti-slop element)
1. **Floating rounded white cards** on white — soft *realistic* shadow, **no glass**, no neon.
2. **One soft blue bloom** behind the card cluster = the single light gesture (not gradients everywhere).
3. **Thin royal-blue hairlines** linking cards = "a connected, verifiable system" (subtle, not decorative).
4. **Deep negative space** = confidence/calm.

> **Anti-slop guardrails:** avoid the generic AI-fintech cliché — purple/teal gradient blobs, glassmorphism, floating 3D crypto coins, neon grids, dense Bloomberg terminals, smiling traders. Our differentiator = **restraint + light + the single blue bloom + hairline connections**.

## Per-asset art direction (P0)
| Asset | Calm Canvas treatment |
|---|---|
| **Hero** | Right = a *small cluster* of floating white cards (one abstract dashboard panel + compact market-watch card + risk chip + LINE chip), soft blue bloom, blue hairlines, lots of air. **NOT a dense terminal.** Left = headline + CTA negative space. Abstract, no readable numbers. |
| **Trust** | Calm staggered stack of floating verification cards + status chips (`verified` / `รอยืนยัน`) + minimal shield outline, blue hairlines = system. No seals/badges/stars. |
| **Markets** | Floating category cards (Forex/Gold/Indices/Crypto/Oil) on white, each = tiny icon + abstract microchart, staggered depth, soft blue bloom. No readable tickers/prices. |

## Reference ranking (under Calm Canvas)
1. **`ref-fizens-home-base.png`** — the anchor (Calm Canvas = Fizens+)
2. **Mobbin Revolut Business** — clean light floating cards, calm
3. **Behance CALFINEX** — airy blue landing + device hero
4. **Dribbble Ivo Ivanov** — light white-card layout (strip win-rate %)
- _Demoted:_ Mobbin Kraken / Fey (dense dark terminals) — only if a single market-watch card needs density cue; otherwise skip.

## Links
- Image prompts: [`bestonfx-chatgpt-image-prompt-pack-2026-06-01.html`](../research/bestonfx-chatgpt-image-prompt-pack-2026-06-01.html)
- P0 handoff: [`P0-generate-handoff.md`](../../assets/references/P0-generate-handoff.md)
- Strategy/9-asset: [`bestonfx-forex-broker-visual-image-plan-2026-05-31.html`](../research/bestonfx-forex-broker-visual-image-plan-2026-05-31.html)
