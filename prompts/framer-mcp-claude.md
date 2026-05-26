# Framer MCP Prompts for Claude Code / Cursor

## 1. Audit first

```text
You are connected to the BestonFX Framer POC through MCP.

First, do not edit anything.

Read the project structure as XML.
Return:
1. List of pages
2. List of reusable components
3. Main homepage section order
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
Using Framer MCP, create or update color styles for BestonFX:

- Navy 950: #050B18
- Navy 900: #081426
- Graphite 900: #101318
- Gold 500: #D4AF37
- Gold 300: #F2D27A
- Text Primary: #F8FAFC
- Text Secondary: #A7B0C0
- Risk Red: #EF4444
- LINE Green: #06C755

Apply these to global styles where safe.
Do not flatten components.
Do not change typography yet.
Show affected nodes before applying.
```

## 4. Create page structure

```text
Using Framer MCP, create the following POC pages:

1. Home
2. Why BestonFX
3. Accounts
4. Markets
5. Tools
6. Partners
7. Support
8. Legal / Risk Disclosure

Use existing Fizens page layouts where possible.
For each page, create a hero section and placeholder content blocks.
Do not create final legal claims.
Use "รอยืนยันข้อมูลจากฝ่ายกำกับดูแล" where regulatory or account conditions are unknown.
```
