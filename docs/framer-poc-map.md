# Framer POC Map

_Last updated: 2026-05-27 — T006 Workshop component handoff_

## Goal

Create `BestonFX Framer POC v0.1` from the purchased Fizens template so the team can see a finished-looking concept before production rebuild/export.

## Current design direction

| Decision | Value |
|---|---|
| Source template | Fizens light-mode finance SaaS template |
| Visual direction | Light fintech, royal blue, Prompt font, generous whitespace |
| Primary blue | `#0040C1` |
| Bright blue | `#2970FF` |
| Surface | White + `ink-50` / `ink-100` |
| LINE accent | `#06C755` only on LINE conversion paths |
| Risk accent | `#B45309` amber only on compliance/risk surfaces |
| Rejected legacy direction | Dark navy / champagne gold / dark glassmorphism |

This supersedes earlier plan text that mentioned dark navy and champagne gold. Use `DESIGN.md` and `docs/brand/tokens.json` as source of truth.

## Audit status

| Item | Value |
|---|---|
| Source template | Fizens (light-mode SaaS finance-app template) |
| T003 connection | Framer MCP connected and audited read-only |
| T006 worker connection | Framer MCP / Workshop unavailable in this worker → `blocked-by-tool` for canvas execution |
| T006 output | Component specs and Workshop prompts in `prompts/workshop-components.md` |
| Web pages | 17 from T003 audit |
| Auth design pages | 5 (Sign Up/In, Forgot/Reset Password, Password Protection) |
| Components | ~64 from T003 audit |
| Published URL | None yet — `production: null`, `staging: null` (founder must publish for stakeholder preview) |
| Fonts | Fizens Poppins + Instrument Sans → remap to Prompt (Thai-first) |
| Theme | Light theme kept; old dark-navy + champagne-gold direction is superseded |

---

## Fizens web pages -> BestonFX mapping

| Fizens page | Treatment | BestonFX target |
|---|---|---|
| `/` (home) | Adapt heavily | Trust-first broker homepage (see section map below) |
| `/features` | Adapt | `/markets` + `/tools` (trading conditions and tools, no unverified claims) |
| `/pricing` | Replace | `/accounts` (account types, spreads/fees — blocked on D002) |
| `/about` | Adapt | `/why-bestonfx` (trust, transparency, DX ecosystem) |
| `/integration` + `/integration/:slug` | Adapt or remove | Platform/tool integrations (MT5, TradingView) only if verified |
| `/download` | Adapt | Platform download page after platform claims are approved |
| `/contact` | Adapt | `/support` + LINE-first CTA |
| `/articles` + `/articles/:slug` | Adapt | Market insights / education CMS with compliance review |
| `/changelog` | Remove | Not relevant to broker site |
| `/team-member/:slug` | Remove until verified | Avoid unverifiable team/credential claims |
| `/jobs/:slug` | Remove | Out of POC scope |
| `/overview` | Remove or repurpose | Possibly DX ecosystem strip |
| `/term-and-conditions` | Custom-build | Legal — needs legal review |
| `/privacy-policy` | Custom-build | Legal — needs legal review |
| `/404` | Keep | Restyle to brand |
| Auth design pages (5) | Defer | Account portal scope, not POC marketing surface |

---

## Fizens HOME section order (actual from T003)

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

1. RiskDisclosureBar *(Workshop — not in Fizens)*
2. PremiumTradingHero *(replace HeroSection)*
3. TrustStackCards *(replace AboutSection / BenefitSection)*
4. AccountPathSelector *(replace PricingSection framing; blocked by D002)*
5. MarketsPreview *(adapt FeaturesSection; no unverified spread/leverage/execution claims)*
6. TradingToolsGrid *(adapt AdditionSection)*
7. DXEcosystemStrip *(repurpose /overview content; no performance framing)*
8. LineSupportCTA *(Workshop — replace generic CTA)*
9. IBCommissionEstimatorMock *(Workshop; replaces direct earning/partner promises)*
10. AIChatBotMock *(Workshop floating layer or inline help block)*
11. FAQ *(adapt FaqSection — add risk, account, LINE, IB)*
12. LegalFooter *(custom-build Footer)*

Remove from home flow: **StaticsSection** (performance/growth framing), **Testimonial** sections, star ratings, and any fake user/review metrics until verified.

---

## T006 Workshop component specs

Canonical prompts live in `prompts/workshop-components.md`. This table maps each component to Framer placement and production handoff intent.

| Component | Framer placement | Handoff tag | Mobile requirement | Compliance requirement | T006 status |
|---|---|---|---|---|---|
| RiskDisclosureBar | Global top of home and any claim-bearing page | `rebuild-in-next`, `needs-legal-review` | Sticky/readable at 320px; no dismiss control for POC | Approved risk warning visible before CTA | Spec'd; canvas blocked-by-tool |
| PremiumTradingHero | Home section 1 after risk bar | `rebuild-in-next` | Single column; stacked full-width CTAs; mockup below copy | No fake stats, no regulation, no account/spread/leverage claims | Spec'd; canvas blocked-by-tool |
| TrustStackCards | Home trust section | `reuse-in-next` or `rebuild-in-next` | 1-column cards with readable Thai copy | No ratings, awards, testimonials, or “trusted by” count | Spec'd; canvas blocked-by-tool |
| LineSupportCTA | Home mid/lower CTA and Support page | `rebuild-in-next` | Full-width buttons; QR/chat mockup below copy | No personalized trading advice; support hours placeholder | Spec'd; canvas blocked-by-tool |
| TradingToolsGrid | Tools preview section | `rebuild-in-next` | 1-column grid; status pill visible | Demo/mock labels; no accuracy or profit claim | Spec'd; canvas blocked-by-tool |
| IBCommissionEstimatorMock | Partner/IB section | `visual-only`, `needs-legal-review` | Inputs stack before output; disclaimer always visible | No real commission rate, no guaranteed income | Spec'd; canvas blocked-by-tool |
| AIChatBotMock | Floating layer or inline Help block | `visual-only`, `needs-legal-review` | Launcher does not cover risk bar, bottom CTA, or legal links | General info only; no investment advice | Spec'd; canvas blocked-by-tool |

### Component copy baseline

Use only the copy in `prompts/workshop-components.md` unless founder/legal provides approved alternatives. Unknown fields must use:

```text
รอยืนยันข้อมูลจากฝ่ายกำกับดูแลก่อนเผยแพร่
```

### Mobile acceptance for all T006 components

- Check 320px, 375px, 390px, and 430px widths.
- No horizontal scrolling.
- Primary CTA and LINE CTA stack full-width.
- Risk warning remains readable and not covered by floating AI bot.
- IB estimator disclaimer remains visible on first screen of the component.
- Chat/QR mockups collapse below text and do not squeeze Thai copy.

---

## Risky copy found (compliance — must fix before any presentation)

| Location | Current copy | Risk | Action |
|---|---|---|---|
| Hero | "Trusted to use by millions users over 140 countries" | Fake/unverified user-count stat | Remove. Replace only with verified trust signal or `รอยืนยันข้อมูลจากฝ่ายกำกับดูแลก่อนเผยแพร่` |
| Hero headline | "Start Managing Your Finance With Our Tool" | Generic SaaS, not broker | Replace with trust-first BestonFX hero |
| StaticsSection | "See Your Wealth Grow" + metric cards | Implies growth/profit; metrics likely fake | Remove section. Read `Sections/Statics` component before any reuse |
| Testimonial components | `Sections/Testimonial`, `Tesimonial Card`, `Star Rating` | Profit testimonials / fake ratings | Remove until verified with source |
| Pricing | "Try For Free And Start Controlling Your Finances" + `madebykota.com/buy/...` purchase link | Free-trial framing + template purchase link | Replace with account types/fees after D002; delete purchase link |
| Features | "Investment Tracking — stocks, bonds, and funds", budgeting, debt mgmt | Generic finance-app, not forex/CFD; risk of implying advice | Replace with broker features; no advice framing |

Stat numbers, pricing tiers, and testimonial text live inside component definitions (`Sections/Statics`, `Pricing Plans`, `Sections/Testimonial`), not just the page. Read those component nodes during build to catch remaining fake numbers.

## Artifacts to delete or replace in Framer

- `Get template button (Delete this)` component
- `madebykota.com/buy/...` purchase link
- Fizens finance-app copy about wealth growth, investment tracking, budgeting, debt management
- Fake user count / country count / star rating / testimonial blocks
- Any old dark-navy/gold component variants generated before the Fizens-derived light direction was confirmed

---

## Color / font remap

| Fizens | BestonFX |
|---|---|
| `/Primary/1` `#0040C1` | Keep as royal-blue primary |
| Bright Fizens blue | Use `#2970FF` for hover/bright accents |
| White background | Keep; use white + `ink-50` / `ink-100` surfaces |
| Poppins / Instrument Sans | Prompt across all TextStyles |
| Any playful pink accent | Remove |
| Any dark navy / champagne-gold legacy variant | Remove unless founder reverses direction |

See `DESIGN.md` and `docs/brand/tokens.json` for the current design system.

---

## Components to reuse / adapt / replace

- **Reuse (restyle only):** Button, Main Navbar, Nav Link, FAQ Item/List, Article Card, Blog/Filter
- **Adapt carefully:** Feature Card, Metric Card, How It Works, Stepper, Bento 1-4, Hero Highlight
- **Replace with Workshop / rebuild in Next.js:** hero, trust cards, risk bar, LINE CTA, IB estimator, AI bot, tools grid
- **Remove until verified:** Testimonial Card, Star Rating, Sections/Statics, Sections/Testimonial
- **Legal custom build:** Terms, Privacy, Risk Disclosure, footer legal copy

## Production handoff tags

Every Framer section should be tagged as one of:

```text
reuse-in-next
rebuild-in-next
visual-only
needs-legal-review
```

Recommended tags for T006:

| Component | Tag |
|---|---|
| RiskDisclosureBar | `rebuild-in-next`, `needs-legal-review` |
| PremiumTradingHero | `rebuild-in-next` |
| TrustStackCards | `rebuild-in-next` |
| LineSupportCTA | `rebuild-in-next` |
| TradingToolsGrid | `rebuild-in-next` |
| IBCommissionEstimatorMock | `visual-only`, `needs-legal-review` |
| AIChatBotMock | `visual-only`, `needs-legal-review` |

## POC limitations

- No real CRM integration
- No real trading portal integration
- No live commission data
- No final legal/regulatory claims
- No live AI RAG unless content is approved
- No real account, spread, leverage, payout, or execution-speed values until approved
- No personalized trading advice from AI bot or support copy

## Open dependencies

- Framer Workshop/MCP execution is blocked in this worker because no Framer MCP tools are available here
- Project not published -> no stakeholder preview link yet (founder action)
- D001 legal/regulatory entity wording -> blocks footer/legal/trust wording
- D002 account types/fees -> blocks Pricing/Accounts replacement
- D003 DX Trade positioning -> blocks any signal/performance framing
- D004 IB commission model -> blocks real IB estimator content
- D005 primary conversion CTA -> may change hero/nav priority
- D006 support operating hours/SLA -> blocks final support copy
- D007 Thai-only vs Thai+English launch -> blocks localization scope
- Legal review -> Terms, Privacy, Risk Disclosure pages

## Next Framer operator steps

1. Open `prompts/workshop-components.md`.
2. Generate components in the specified order.
3. Apply Prompt font and the light royal-blue token system.
4. Insert components into the homepage section map above.
5. Check mobile widths: 320px, 375px, 390px, 430px.
6. Remove risky Fizens copy and template purchase artifacts.
7. Return status using the format at the bottom of `prompts/workshop-components.md`.
