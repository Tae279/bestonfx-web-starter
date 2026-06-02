# BestonFX Framer/Fizens Source of Truth

_Last updated: 2026-06-01 (Asia/Bangkok)_  
_Scope: broker website IA, Framer/Fizens adaptation, motion, copy, trust, and Framer handoff rules._

> This file is the latest source of truth for the new `bestonfx.com` Framer POC. It supersedes `docs/framer-poc-map.md` for final site IA and Home section order. `docs/framer-poc-map.md` remains useful as a Fizens template inventory only.
>
> **Craft layer (2026-06-01, by Claude):** for design-excellence, scroll-animation "wow", micro-interactions, conversion copy, trust data, visuals, and Framer features/tips, read `bestonfx-framer-design-craft-playbook-2026-06-01.md`. It is **additive** — it does not change the IA or compliance decisions in this file.

## Decision Snapshot

| Topic | Source-of-truth decision |
|---|---|
| Execution surface | Framer POC first, using the purchased Fizens template because CEO likes it |
| Visual direction | Fizens-derived light fintech, royal blue `#0040c1`, Prompt, premium whitespace |
| Differentiation | Transparent cost + rebate + Thai LINE support + visible risk/trust proof |
| Primary CTAs | `เปิดบัญชี` and `ทัก LINE OA ติดต่อ admin` |
| Home IA | Persuade and route. No full tools grid. No IB block. No fake stats/testimonials. |
| Source priority | This file -> `bestonfx-framer-design-craft-playbook-2026-06-01.md` (design/motion/Framer craft) -> `docs/wireframes/*` -> `DESIGN.md` -> `docs/framer-poc-map.md` inventory |
| Compliance posture | International-regulator style proof, risk-first copy, no Thai SEC framing as controlling gate |

## Research Anchors

| Source | What matters for BestonFX |
|---|---|
| [Fizens Framer Marketplace](https://www.framer.com/marketplace/templates/fizens/) | Fizens is a finance SaaS template with 21 pages, smooth animations, CMS, components, forms, rich media, slideshows/tickers, sticky scrolling, and visual breakpoints. Keep its premium structure and motion affordances, but replace personal-finance copy. |
| [Fizens live preview](https://fizens.framer.ai/) | Original copy is about personal finance, budgeting, savings, debt, investment tracking, and pricing. These are wrong for a Forex/CFD broker and must not be carried into BestonFX. |
| [Framer SEO guide](https://www.framer.com/help/articles/guide-to-seo-features-and-tools/) | Use page-level titles/descriptions, semantic headings, image alt text, video posters, redirects, CMS metadata, and JSON-LD where needed. |
| [Framer animations/effects](https://www.framer.com/help/articles/how-animations-and-effects-work-in-framer/) | Framer uses Motion and supports high-performance animation, gestures, layout animations, code components, and code overrides. |
| [Framer scroll transform lesson](https://www.framer.com/academy/lessons/framer-animations-scroll-transform) | Use Scroll Transform with `Section in View` for coordinated parallax/reveals instead of animating everything globally on page scroll. |
| [Framer reduced motion](https://www.framer.com/help/articles/reduced-motion-settings/) | Must enable reduced-motion behavior for parallax, transform, layout animations, and custom cursors. |
| [Framer localization](https://www.framer.com/help/localization/) | Keep Thai-first now; prepare Thai/English later with Framer localization and localized paths if D007 approves bilingual launch. |
| [Framer AI readability](https://www.framer.com/help/articles/make-site-readable-by-ai-agents/) | Framer pre-renders pages, generates sitemap/robots, and serves markdown to AI agents. Good IA and headings matter for AI/search discoverability. |
| [FCA COBS 4](https://handbook.fca.org.uk/handbook/cobs4) | Marketing must be fair, clear, not misleading; capital-at-risk products must make that risk clear. |
| [ESMA CFD intervention](https://www.esma.europa.eu/lv/press-news/esma-news/esma-adopts-final-product-intervention-measures-cfds-and-binary-options) | Broker sites should make CFD risk prominent, avoid incentives that amplify trading harm, and use understandable risk warnings. |
| [ASIC CFD order](https://www.asic.gov.au/about-asic/news-centre/find-a-media-release/2021-releases/21-060mr-asic-s-cfd-product-intervention-order-takes-effect/) | CFD marketing must avoid sales practices that amplify retail loss; leverage/risk must be handled cautiously. |
| [Pepperstone](https://pepperstone.com/en/) | Strong broker IA separates ways to trade, markets, platforms, analysis, learn, about, partners, support, and legal/risk footer. |
| [IG](https://www.ig.com/en) | Mature broker IA includes top risk warning, live/demo account CTAs, markets, platforms/tools, learning, support/chat, and detailed trust/legal links. |
| [OANDA](https://www.oanda.com/us-en/) | Mature broker IA separates instruments, spreads/margins, pricing, platforms, tools/resources, account types, support, and education. |
| [Exness accounts](https://www.exness.com/standard-accounts/) and [platforms](https://www.exness.com/trading-platforms/) | Account pages compare deposits/spreads/commission/instruments; platform pages compare device support, markets, orders, charts, analytics, alerts, and account management. |
| [XM About](https://www.xm.com/about) | Trust pages use direct brand voice, risk warnings near CTAs, scale metrics only when verified, awards only when real. |
| [web.dev prefers-reduced-motion](https://web.dev/prefers-reduced-motion/) | Parallax/zoom/scroll motion can harm some users; provide reduced-motion variants. |
| [Google Core Web Vitals](https://developers.google.com/search/docs/appearance/core-web-vitals) | Modern motion must protect loading performance, interactivity, and visual stability. |

## Site Structure

Build the Framer POC around **9 public marketing surfaces + legal utilities**. This is enough for a serious broker site without turning the POC into a bloated broker encyclopedia.

| Route | Page | Main question answered | Fizens source |
|---|---|---|---|
| `/` | Home | Why should I trust and act now? | Home, but reorganized by user intent |
| `/why-bestonfx` | Why beston | Why this broker versus unknown offshore brokers? | About / Overview |
| `/markets` | Markets | Can I trade the markets I care about? | Features / integration-style grids |
| `/accounts` | Accounts | Which account path fits me? | Pricing, heavily rewritten |
| `/tools` | Platforms & tools | What platform, calculators, and utilities do I get? | Features / AdditionSection |
| `/partners` | Partners / IB | How does the partner program work without income promises? | Custom from pricing/forms/cards |
| `/support` | Support | How do I get Thai help quickly? | Contact |
| `/articles` | Articles | What should I learn before risking money? | Articles CMS |
| `/articles/[slug]` | Article detail | Long-form education and SEO | CMS detail |
| `/legal/risk-disclosure` | Risk disclosure | What are the real trading risks? | Legal custom |
| `/legal/terms` | Terms | Contractual terms | Legal custom |
| `/legal/privacy` | Privacy / AML-KYC | Data and KYC handling | Legal custom |
| `/regulatory-disclosures` | Regulatory details | Entity/license proof after verification | Legal custom |
| `/404` | Not found | Recover lost visitors | 404 |

**External conversion routes:** registration, login, and demo/live account portal remain external (`traders.bestonfx.com` or approved final URL). Framer CTAs link out; they are not Framer pages.

## Home Page Best Practice

Home should not be a feature dump. Home has one job: **make a Thai trader believe this is transparent, legitimate, and worth opening an account or asking LINE admin.**

| Order | Section | Purpose | Fizens component treatment |
|---|---|---|---|
| 1 | RiskDisclosureBar | Put risk before persuasion | Custom sticky bar |
| 2 | Navbar | Persistent route + `เปิดบัญชี` | Keep Fizens nav structure, Thai labels |
| 3 | Hero / TerminalHero | Value prop, CTAs, terminal visual | Replace Fizens personal-finance hero |
| 4 | RegulatoryStrip | Proof immediately after claim | Replace logo cloud with regulator/platform badges |
| 5 | Trust 3 Pillars | Transparency, risk-first, Thai care | Adapt Fizens feature cards |
| 6 | MarketsTicker | Live market energy without calculator clutter | Use ticker/slideshow pattern; mark sample data |
| 7 | AccountPreview | Standard vs Demo path | Adapt Pricing cards, only 2 preview cards |
| 8 | Open Account Steps | Reduce friction | Adapt HowItWorkSection |
| 9 | Rebate Explainer | Make the hook clear and compliant | FeatureSplit with T&C/risk note |
| 10 | Articles Teaser | Trust through education | Use Fizens Articles CMS cards |
| 11 | FAQ | Answer objections before bounce | Keep Fizens FAQ accordion |
| 12 | LINE CTA Banner | Thai conversion path, no pressure | Replace generic CTA with LINE-first CTA |
| 13 | Footer | Legal identity, full risk block, secondary nav | Custom legal footer |
| Floating | AIChatWidget | Help, FAQ, route to LINE | Floating visual-only helper |

### Home Anti-Drift Rules

- Do **not** put the full `TradingToolsGrid` on Home. Use `/tools` for calculators and platform/tool depth.
- Do **not** put `IBPartnerCTA` on Home. Use `/partners` for IB and partner estimator.
- Do **not** use Fizens `StaticsSection` unless every number is verified.
- Do **not** use testimonials, star ratings, country/user counts, award counts, or execution numbers unless source/consent is verified.
- Do **not** use "ฝากเงิน" as a public primary CTA unless founder explicitly approves.

## Page-by-Page Best Practices

| Page | Recommended sections |
|---|---|
| Home | Risk bar, nav, hero, regulatory strip, trust pillars, markets ticker, account preview, steps, rebate explainer, articles, FAQ, LINE CTA, footer |
| Why beston | Hero, entity/regulator proof, transparency matrix, client protection/security story, Thai support story, no-fake-stats pledge, FAQ, CTA |
| Markets | Hero, asset class cards, major symbols, trading hours/conditions placeholders, risk note per asset, "not real-time" labels, CTA |
| Accounts | Hero, Standard/Demo comparison, account steps, required documents/KYC, rebate eligibility, fees placeholders, FAQ, CTA |
| Tools | Hero, MT5 platform proof, rebate calculator, pip/margin calculators, economic calendar placeholder, tool disclaimers, CTA |
| Partners | Hero, IB program model, estimator mock, eligibility, payout/T&C placeholders, compliance disclaimer, lead form/LINE CTA |
| Support | Hero, LINE-first channel cards, email, office, hours `[verify]`, FAQ, escalation flow, CTA |
| Articles | CMS grid, categories (MT5, risk, rebate, beginner, platform), SEO metadata, no trading advice, soft CTA |
| Risk disclosure | Full risk copy, CFD/leverage explanation, no advice notice, legal links, responsible trading resources |

## Copywriting System

**Core approved angle (founder override):** `Trade Smarter Not Harder`

Use the English H1 as the short campaign hook. The Thai subheadline must carry the concrete, compliance-safe meaning: MT5, clear account/trading information, Rebate according to T&C, risk visibility, and Thai LINE support.

| Copy layer | Rule | Example |
|---|---|---|
| Hero | Short English hook + Thai compliance-safe explanation | `เทรดบน MT5 ด้วยข้อมูลที่ชัดเจนขึ้น: ต้นทุน, Rebate ตาม T&C, ความเสี่ยงที่ควรรู้ และทีมไทยที่คุยผ่าน LINE OA ได้` |
| CTA | Two-path conversion | `เปิดบัญชี` + `ทัก LINE OA ติดต่อ admin` |
| Risk note | Near high-intent CTA | `การเทรดมีความเสี่ยง — เราอยากให้คุณรู้ก่อน ไม่ใช่รู้ทีหลัง` |
| Rebate | Explain mechanism, not profit | `Rebate คิดจากปริมาณการเทรดตาม T&C ไม่ใช่การรับประกันกำไร` |
| Trust | Show evidence, avoid hype | `เลขทะเบียน/ใบอนุญาตรอยืนยันก่อนเผยแพร่` |
| Education | Reduce fear, not promise success | `ความรู้ที่ใช้ได้จริง ก่อนเสียเงินจริง` |

**Banned copy:**

- Guaranteed profit, risk-free trading, guaranteed IB income, guaranteed signal accuracy
- `อันดับ 1` unless externally verified and legally approved
- `ปลอดภัย 100%`, `กำไรแน่นอน`, `ถอนเร็วที่สุด`, `สเปรดต่ำสุด` unless approved with evidence
- Any fake testimonial, rating, user count, country count, volume, or award

## Trust-Building System

Trust must be structural, not decorative.

| Trust layer | Required treatment |
|---|---|
| Risk warning | Sticky top + hero note + footer full block + legal page |
| Entity proof | Company name, address, support email, regulator/entity line after verification |
| Regulator proof | FSCA/CySEC/MSB badges only with verified wording and numbers; MSB must not be called a forex license |
| Platform proof | MT5 proof, device support, account management, sample terminal visuals |
| Cost proof | Account comparison, rebate rules, spread/fee placeholders until verified |
| Human support | LINE OA admin as primary Thai conversion/support path |
| Education | Articles and FAQ explain MT5, leverage, risk, rebate, and account steps |
| Legal footer | Full risk block, legal docs, jurisdiction/distribution caveat |

## Visual Direction

Fizens gives the site its premium base: light, spacious, rounded, blue-led, soft gradients, responsive components, and motion readiness. BestonFX must add broker-specific visual proof.

| Visual asset | Use | Rule |
|---|---|---|
| Trading terminal hero | Above fold hero | Must be labelled `ตัวอย่าง — ไม่ใช่ข้อมูลจริง` until live data exists |
| Market universe image | Markets ticker/Markets page | Use real symbols but sample prices |
| Trust compliance stack | Why/Regulatory section | Show document/badge/card metaphor, not fake seals |
| Rebate math visual | Home + Tools | Show formula and T&C disclaimer |
| LINE support visual | Support + CTA | QR/link only after official URL verified |
| Education covers | Articles | Thai-first editorial, not stock-chart hype |

**Avoid:** generic smiling trader stock photos, luxury-gold broker tropes, casino-like neon, random AI dashboards, dark Bloomberg clone, and decorative images that do not explain the product.

## Framer Motion System

Use "wow" where it tells the story. The goal is premium movement, not motion noise.

| ID | Motion pattern | Where | Framer implementation |
|---|---|---|---|
| M1 | Hero bloom reveal | Hero terminal and CTA | Appear effect + scale/opacity/y transform |
| M2 | Scroll-scrub terminal depth | First 60-80vh of Home | Scroll Transform, `Section in View`, foreground/mid/background layers |
| M3 | Sticky proof story | Rebate / Why / Markets | Sticky media panel + vertical content rail |
| M4 | Card reveal cascade | Trust, Accounts, Articles | Appear effect with small stagger |
| M5 | Ticker motion | MarketsTicker | Native ticker/slideshow; tap/hover pause |
| M6 | Micro hover | Cards/buttons/chips | subtle lift, border tint, glow, underline scale |
| M7 | Calculator feedback | Tools/Partners | Input focus, result panel update, disclaimer stays visible |
| M8 | Nav condense | All pages | Sticky nav becomes shorter with blur after scroll |
| M9 | CTA confirmation | Forms/LINE clicks | Button state, loading, success/error microcopy |

### Motion Guardrails

- Use transform/opacity first; avoid animating layout-heavy properties.
- Use `Section in View` rather than global page scroll for most transforms.
- Disable or simplify cursor effects and heavy parallax on touch/mobile.
- Respect reduced motion in Framer site settings and test with reduced-motion enabled.
- Keep animated layers under 12 per viewport.
- Never hide risk warning, legal links, or CTA behind animation timing.
- Motion must answer: "what changed, where should I look, what can I do next?"

## Fizens Adaptation Map

| Fizens page/section | BestonFX treatment |
|---|---|
| Home Hero | Replace with TerminalHero and approved broker angle |
| About / Benefit | Adapt into trust, transparency, Thai support story |
| Features | Split across Markets and Tools; Home only gets ticker/teaser |
| AdditionSection | Use for Tools page, not Home full grid |
| Pricing | Replace with Accounts comparison |
| StaticsSection | Disable until verified |
| Testimonials / star ratings | Disable until real consented quotes exist |
| Blog / Articles | Keep as CMS-based education |
| Contact | Replace with LINE-first Support |
| Terms / Privacy | Keep as legal utility shell, rewrite copy |
| Auth pages | Out of POC scope; portal is external |

## Framer Build Tips

- Create global styles first: Prompt font, royal blue, LINE green, risk amber, light surfaces.
- Convert common patterns to components: RiskBar, Navbar, Hero, SectionHeader, CTA pair, FAQ item, Article card, Account card.
- Use component variants for `LineFirst` vs `AccountFirst` CTA banners.
- Use Framer Code Components for missing broker-specific POC components: `RiskDisclosureBar`, `TerminalHero`, `TrustStackCards`, `LineSupportCTA`, `TradingToolsGrid` (`/tools` only), `IBCommissionEstimatorMock` (`/partners` only), and `AIChatBotMock`. Exact specs live in `prompts/workshop-components.md` (legacy filename kept for compatibility); follow https://www.framer.com/developers/components-introduction. Workshop is optional fallback only.
- Use CMS collections for Articles from day one, with fields: title, slug, category, excerpt, cover, read time, meta title, meta description, review status.
- Add page/CMS metadata in Framer Page Settings; use CMS variables for article metadata.
- Add descriptive alt text and video posters.
- Use redirects when changing routes from old `bestonfx.com`.
- Submit `/sitemap.xml` after publishing.
- Prepare localization only after D007. If bilingual: Thai default, English as locale, localized paths enabled.
- Keep code components minimal: calculators, ticker behavior, or special terminal visuals only when native Framer is insufficient.

## Agent Handoff Rules

Before editing Framer or source files, every agent must read:

1. `docs/research/bestonfx-framer-source-of-truth-2026-06-01.md`
2. `docs/wireframes/sitemap.md`
3. `docs/wireframes/pages/home.md`
4. `docs/wireframes/components.md`
5. `DESIGN.md`
6. `docs/framer-poc-map.md` only for Fizens inventory, not final Home IA
7. `docs/research/bestonfx-framer-design-craft-playbook-2026-06-01.md` for motion / micro-interaction / Framer-craft / anti-AI-slop specifics

Paste-ready instruction for Cursor/Claude:

```text
Read docs/research/bestonfx-framer-source-of-truth-2026-06-01.md first.
Then read docs/wireframes/sitemap.md and docs/wireframes/pages/home.md.
Use docs/framer-poc-map.md only as Fizens template inventory, not final Home IA.
Home must not include the full TradingToolsGrid or IBPartnerCTA.
Apply the research-backed Framer/Fizens IA and motion system to the Framer POC.
Keep CTAs: เปิดบัญชี and ทัก LINE OA ติดต่อ admin.
Do not invent regulatory, spread, leverage, commission, performance, testimonial, or user-count claims.
```

## Open Decisions

| ID | Decision | Blocks |
|---|---|---|
| D001 | Exact legal/regulatory entity wording and license numbers | RegulatoryStrip, footer, risk pages |
| D002 | Final account types, spreads, commissions, leverage, deposit rules | Accounts, pricing-style cards |
| D003 | Allowed DX Trade positioning | Any signal/tool copy |
| D004 | IB commission model and payment timing | Partners, IB estimator |
| D005 | Final external URLs for register/login/demo/LINE OA | CTAs |
| D006 | Support hours and SLA | Support page, LINE CTA copy |
| D007 | Thai-only or Thai+English launch | Framer localization, SEO paths |
