# Framer POC Map

## Goal

Create `BestonFX Framer POC v0.1` from the purchased Fizens template so the team can see a finished-looking concept before production rebuild/export.

## Recommended section order: Home

1. Sticky Risk Disclosure Bar
2. PremiumTradingHero
3. TrustStackCards
4. AccountPathSelector
5. MarketsPreview
6. TradingToolsGrid
7. DXEcosystemStrip
8. LineSupportCTA
9. IBPartnerCTA
10. AIChatBotMock
11. FAQ
12. LegalFooter

## Fizens section treatment

| Fizens section | Treatment | Note |
|---|---|---|
| Header/nav | Adapt | Replace SaaS nav with broker nav |
| Hero | Adapt heavily | Replace generic finance app copy |
| Logos | Remove/adapt | Use only verified partners |
| Feature cards | Adapt | Convert to trust, tools, support |
| Stats | Remove until verified | No fake users/reviews/ratings |
| How it works | Adapt | Risk-first onboarding flow |
| Testimonials | Remove until verified | Avoid profit testimonials |
| Pricing | Replace | Account comparison / fees |
| Blog | Adapt | Market insights + education |
| FAQ | Adapt | Add risk, account, LINE, IB |
| Footer | Custom-build | Legal and risk disclosures |

## Workshop-only components

- RiskDisclosureBar
- PremiumTradingHero
- TrustStackCards
- TradingToolsGrid
- LineSupportCTA
- IBCommissionEstimatorMock
- AIChatBotMock

## Production handoff rule

Every Framer section should be tagged as:

```text
reuse-in-next
rebuild-in-next
visual-only
needs-legal-review
```

## POC limitations

- No real CRM integration
- No real trading portal integration
- No live commission data
- No final legal/regulatory claims
- No live AI RAG unless content is approved
