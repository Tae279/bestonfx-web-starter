# Import Into Framer

_Last updated: 2026-06-01_

## Current Status

The 7 Framer Code Components are ready in this repo, mirrored to the Framer
operator repo, and created in the active Framer project as Code Files:

```text
/Users/tae279/Dev_💻/Cursor Tae/bestonfx-framer/content/framer-code-components/
```

| Component                   | Framer Code File ID |
| --------------------------- | ------------------- |
| `RiskDisclosureBar`         | `cHdyRho`           |
| `TerminalHero`              | `fOnrYfL`           |
| `TrustStackCards`           | `yeTpO4g`           |
| `LineSupportCTA`            | `hQAVLTi`           |
| `TradingToolsGrid`          | `FvrywXM`           |
| `IBCommissionEstimatorMock` | `IEFWv4l`           |
| `AIChatBotMock`             | `NCEG5qk`           |

QA staging canvas:

```text
Design Page: BestonFX Code Components QA
Node ID: Nq6CRdEzE
Stack ID: WUjwURa_M
```

The QA page contains linked instances of all 7 components for visual review.
It does not publish to the website.

## Import Order

Already created in Framer. If recreating in another project, create one Framer
Code File per component:

1. `RiskDisclosureBar.tsx`
2. `TerminalHero.tsx`
3. `TrustStackCards.tsx`
4. `LineSupportCTA.tsx`
5. `TradingToolsGrid.tsx`
6. `IBCommissionEstimatorMock.tsx`
7. `AIChatBotMock.tsx`

Do not paste `framer-shim.d.ts` into Framer. It exists only so local TypeScript checks can validate the files.

## Placement

The QA page proves the components can be inserted into Framer canvas. Final
page-level placement is handled by T004/T006.

Direct `getNodeXml` on Home (`augiA20Il`) is currently too slow because the
Fizens page contains many external code modules. For final placement, use a
narrower selected node target in Framer or place sections manually from the QA
page before using MCP for fine adjustments.

| Component                   | Placement                             |
| --------------------------- | ------------------------------------- |
| `RiskDisclosureBar`         | All pages, above Navbar               |
| `TerminalHero`              | Home hero                             |
| `TrustStackCards`           | Home trust section / Why page         |
| `LineSupportCTA`            | Home, Support, and final CTA sections |
| `TradingToolsGrid`          | `/tools` only                         |
| `IBCommissionEstimatorMock` | `/partners` only                      |
| `AIChatBotMock`             | Floating layer or inline Help block   |

## Canvas Rules

- Home must not include the full tools grid or IB estimator.
- CTA labels stay `เปิดบัญชี` and `ทัก LINE OA ติดต่อ admin`.
- LINE green is only for LINE conversion actions.
- Risk amber is only for risk/compliance surfaces.
- No fake stats, testimonials, star ratings, license claims, spread/leverage claims, or guaranteed-income wording.
- Keep `[verify]` and `รอยืนยันข้อมูลจากฝ่ายกำกับดูแลก่อนเผยแพร่` placeholders until legal/founder approval.

## QA

After importing:

1. Check widths: `320`, `375`, `390`, `430`, `768`, `1024`, `1440`.
2. Confirm RiskDisclosureBar appears before the first high-intent CTA.
3. Confirm mobile CTAs do not overflow or hide behind the AI chat launcher.
4. Confirm `TradingToolsGrid` appears only on `/tools`.
5. Confirm `IBCommissionEstimatorMock` appears only on `/partners`.
6. Return status using the format in `prompts/workshop-components.md`.
