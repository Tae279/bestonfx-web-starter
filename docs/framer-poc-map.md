# Framer POC Map

_Last updated: 2026-05-27 — T003 audit via Framer MCP_

## Goal

Create `BestonFX Framer POC v0.1` from the purchased Fizens template so the team can see a finished-looking concept before production rebuild/export.

## Audit status

| Item | Value |
|---|---|
| Source template | Fizens (light-mode SaaS finance-app template) |
| Connection | Framer MCP connected and audited (read-only, no canvas edits) |
| Web pages | 17 |
| Auth design pages | 5 (Sign Up/In, Forgot/Reset Password, Password Protection) |
| Components | ~64 |
| Published URL | None yet — `production: null`, `staging: null` (founder must publish for stakeholder preview) |
| Primary color | Blue `#0040C1` / `#2970FF` — **needs full remap to navy + gold** |
| Fonts | Poppins + Instrument Sans — **needs remap to Prompt (Thai-first)** |
| Theme | Light (white background) — **BestonFX is dark navy premium → theme inversion required, not just color swap** |

---

## Fizens web pages -> BestonFX mapping

| Fizens page | Treatment | BestonFX target |
|---|---|---|
| `/` (home) | Adapt heavily | Trust-first broker homepage (see section map below) |
| `/features` | Adapt | `/markets` + `/tools` (trading conditions, platforms) |
| `/pricing` | Replace | `/accounts` (account types, spreads/fees — blocked on D002) |
| `/about` | Adapt | `/why-bestonfx` (trust, transparency, DX ecosystem) |
| `/integration` + `/integration/:slug` | Adapt or remove | Platform/tool integrations (MT5, TradingView) if verified |
| `/download` | Adapt | Platform download (MT5 / app) |
| `/contact` | Adapt | `/support` + LINE-first CTA |
| `/articles` + `/articles/:slug` | Adapt | Market insights / education (CMS) |
| `/changelog` | Remove | Not relevant to broker site |
| `/team-member/:slug` | Remove until verified | Avoid unverifiable team/credential claims |
| `/jobs/:slug` | Remove | Out of POC scope |
| `/overview` | Remove or repurpose | Possibly DX ecosystem strip |
| `/term-and-conditions` | Custom-build | Legal — needs legal review |
| `/privacy-policy` | Custom-build | Legal — needs legal review |
| `/404` | Keep | Restyle to brand |
| Auth design pages (5) | Defer | Account portal scope, not POC marketing surface |

---

## Fizens HOME section order (actual)

1. HeroSection
2. AboutSection
3. FeaturesSection
4. AdditionSection
5. BenefitSection
6. StaticsSection
7. HowItWorkSection
8. PricingSection
9. BlogSection
10. FaqSection
11. Footer

## Proposed BestonFX HOME section map

1. Sticky Risk Disclosure Bar *(Workshop — not in Fizens)*
2. PremiumTradingHero *(replace HeroSection)*
3. TrustStackCards *(replace AboutSection / BenefitSection)*
4. AccountPathSelector *(replace PricingSection framing)*
5. MarketsPreview *(adapt FeaturesSection)*
6. TradingToolsGrid *(adapt AdditionSection)*
7. DXEcosystemStrip *(repurpose /overview content)*
8. LineSupportCTA *(Workshop — replace generic CTA)*
9. IBPartnerCTA *(Workshop)*
10. AIChatBotMock *(Workshop)*
11. FAQ *(adapt FaqSection — add risk, account, LINE, IB)*
12. LegalFooter *(custom-build Footer)*

Remove from home flow: **StaticsSection** (performance/growth framing) and any **Testimonial** section until verified.

---

## Risky copy found (compliance — must fix before any presentation)

| Location | Current copy | Risk | Action |
|---|---|---|---|
| Hero | "Trusted to use by millions users over 140 countries" | Fake/unverified user-count stat | Remove. Replace only with verified trust signal or `รอยืนยันข้อมูลจากฝ่ายกำกับดูแล` |
| Hero headline | "Start Managing Your Finance With Our Tool" | Generic SaaS, not broker | Replace with trust-first BestonFX hero |
| StaticsSection | "See Your Wealth Grow" + metric cards | Implies growth/profit; metrics likely fake | Remove section. Read `Sections/Statics` component before any reuse |
| Testimonial components | `Sections/Testimonial`, `Tesimonial Card`, `Star Rating` | Profit testimonials / fake ratings | Remove until verified with source |
| Pricing | "Try For Free And Start Controlling Your Finances" + `madebykota.com/buy/...` purchase link | Free-trial framing + template purchase link | Replace with account types/fees (D002); delete purchase link |
| Features | "Investment Tracking — stocks, bonds, and funds", budgeting, debt mgmt | Generic finance-app, not forex/CFD; risk of implying advice | Replace with broker features (markets, execution, platforms); no advice framing |

> Stat numbers, pricing tiers, and testimonial text live inside component definitions (`Sections/Statics`, `Pricing Plans`, `Sections/Testimonial`), not the page. Read those component nodes during build to catch remaining fake numbers.

## Artifacts to delete

- `Get template button (Delete this)` component (Fizens template leftover)
- `madebykota.com/buy/...` purchase link in features

## Color / font remap

| Fizens | BestonFX |
|---|---|
| `/Primary/1` `#0040C1` (blue) | Gold accent `#D4AF37`; primary surfaces navy |
| `/Gray/White` background | Navy `#050B18` / `#081426` (dark theme) |
| Poppins (display) + Instrument Sans | Prompt (Thai-first) across all TextStyles |

---

## Components to reuse / adapt / replace

- **Reuse (restyle only):** Button, Main Navbar, Nav Link, FAQ Item/List, Footer (heavy custom), Article Card, Blog/Filter
- **Adapt:** Feature Card, Metric Card, How It Works, Stepper, Bento 1-4, Hero Highlight
- **Replace with Workshop:** hero, trust cards, risk bar, LINE CTA, IB estimator, AI bot, tools grid
- **Remove until verified:** Testimonial Card, Star Rating, Sections/Statics, Sections/Testimonial

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

## Open dependencies

- Project not published -> no stakeholder preview link yet (founder action)
- D002 account types/fees -> blocks Pricing/Accounts replacement
- D003 DX Trade positioning -> blocks any signal/performance framing
- D004 IB commission model -> blocks IB estimator content
- Legal review -> Terms, Privacy, Risk Disclosure pages
