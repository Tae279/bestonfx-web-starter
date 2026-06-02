# Framer MCP Prompts for Claude Code / Cursor

## 0. Read latest source first

```text
Before using Framer MCP or editing the canvas, read:

1. docs/research/bestonfx-framer-source-of-truth-2026-06-01.md
2. docs/research/bestonfx-framer-perfect-handoff-2026-06-01.md
3. docs/wireframes/sitemap.md
4. docs/wireframes/pages/home.md
5. docs/wireframes/components.md
6. DESIGN.md

Use docs/framer-poc-map.md only as Fizens template inventory and legacy risky-copy notes.
Do not use docs/framer-poc-map.md as final Home IA.

Home must not include the full TradingToolsGrid or IBPartnerCTA.
Tools/calculators belong on /tools.
IB/partner content belongs on /partners.
```

## 1. Audit first

```text
You are connected to the BestonFX Framer POC through MCP.

First, do not edit anything.

Read the project structure as XML.
Return:
1. List of pages
2. List of reusable components
3. Main homepage section order from `docs/wireframes/pages/home.md`, with any conflicts from the current canvas flagged
4. Which Fizens sections should be reused, adapted, or removed
5. Risky copy that implies profit, savings, guaranteed growth, or unverified statistics

Do not modify the canvas yet.
```

## 2. Replace copy safely

```text
Using Framer MCP, update homepage copy only.

Rules:
- Thai-first
- Premium, trust-first
- No guaranteed profit
- No "risk-free"
- No fake statistics
- No unverified testimonials
- No regulatory/license claims unless explicitly provided
- Add risk warning in hero and footer
- Preserve layout unless text overflow breaks mobile

Before applying changes, show me a proposed copy map:
nodeId | old text | new text | compliance note
```

## 3. Apply brand colors

```text
Using Framer MCP, create or update color styles for BestonFX (current brand — light, royal blue; source: DESIGN.md + docs/brand/tokens.json):

- Primary blue: #0040C1
- Bright blue (hover/accent): #2970FF
- Soft blue surface: #EFF4FF
- Page background: #FFFFFF
- Border: #E5E7EB
- Heading text: #171717
- Body text: #4B5563
- LINE green: #06C755 (LINE conversion paths only)
- Risk amber: #B45309 (compliance/risk surfaces only)

The old dark-navy + champagne-gold palette is superseded — do not create or keep it.
Remap TextStyles to the Prompt font (Thai-first).
Apply these to global styles where safe.
Do not flatten components.
Show affected nodes before applying.
```

## 4. Create page structure

```text
Using Framer MCP, create the following POC pages from `docs/research/bestonfx-framer-source-of-truth-2026-06-01.md` and `docs/wireframes/sitemap.md`:

1. Home
2. Why BestonFX
3. Accounts
4. Markets
5. Tools
6. Partners
7. Support
8. Articles
9. Legal / Risk Disclosure
10. Legal / Terms
11. Legal / Privacy
12. Regulatory Disclosures

Use existing Fizens page layouts where possible.
For each page, create a hero section and placeholder content blocks.
Do not create final legal claims.
Use "รอยืนยันข้อมูลจากฝ่ายกำกับดูแล" where regulatory or account conditions are unknown.
```
