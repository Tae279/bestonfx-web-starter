# BestonFX Framer Code Components

_Last updated: 2026-06-01_

These files are the source-of-truth Framer Code Components for `BestonFX Framer POC v0.1`.

## Usage

1. Open the Framer project.
2. Go to **Assets** -> **Code** -> **Create Code File**.
3. Create one code file per component.
4. Paste the matching `.tsx` file contents into Framer.
5. Insert the component onto the canvas and use Property Controls for copy, sticky mode, and visual variants.

Current active Framer project already has the 7 Code Files and a non-published
QA design page named `BestonFX Code Components QA`.

## Current Batch

| File                            | Framer placement                      | Status    |
| ------------------------------- | ------------------------------------- | --------- |
| `RiskDisclosureBar.tsx`         | All pages, above Navbar               | In Framer |
| `TerminalHero.tsx`              | Home hero                             | In Framer |
| `TrustStackCards.tsx`           | Home trust section / Why page         | In Framer |
| `LineSupportCTA.tsx`            | Home, Support, and final CTA sections | In Framer |
| `TradingToolsGrid.tsx`          | `/tools` only                         | In Framer |
| `IBCommissionEstimatorMock.tsx` | `/partners` only                      | In Framer |
| `AIChatBotMock.tsx`             | Floating layer / inline Help block    | In Framer |

## Guardrails

- Do not add profit, risk-free, account-condition, spread, leverage, or regulation claims.
- Keep every unconfirmed value marked with `[verify]` or `รอยืนยันข้อมูลจากฝ่ายกำกับดูแลก่อนเผยแพร่`.
- Keep the risk warning visible before high-intent CTAs.
- Workshop is optional fallback only; these Code Components are the primary path.

## Reference

- Framer Code Components: https://www.framer.com/developers/components-introduction
- Property Controls: https://www.framer.com/developers/property-controls
- Auto-Sizing: https://www.framer.com/developers/auto-sizing
