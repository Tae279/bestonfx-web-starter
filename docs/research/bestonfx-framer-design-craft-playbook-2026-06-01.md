# BestonFX Framer — Design Excellence, Motion & Framer-Craft Playbook

**Source of truth:** 2026-06-01 · **by Claude** (deep-research addendum)
**Branch:** `codex/bestonfx-framer-research-2026-06-01`
**Template baseline:** [Fizens](https://fizens.framer.ai/) (CEO-approved)
**Status:** Additive deep-dive. Does **not** replace the existing IA/compliance source of truth — it goes *deeper* on the layer the brief emphasised: wow-design, scroll animation, micro-interactions, conversion copy, trust, visuals, Framer features/tips, and how to look **outstanding and different from ordinary broker sites and AI-generated sites**.

---

## 0. How to use this doc

This is the **craft layer** on top of the existing research set. Read order stays:

| # | Doc | Role |
|---:|---|---|
| 1 | `bestonfx-framer-source-of-truth-2026-06-01.md` | Decisions + IA index |
| 2 | `bestonfx-framer-perfect-research-2026-06-01.md` | Strategy + IA + compliance |
| 3 | `bestonfx-framer-perfect-handoff-2026-06-01.md` | Step-by-step Framer build |
| 4 | **This file** | **Design/motion/Framer-craft/copy/anti-generic — the "make it wow + premium" layer** |
| 5 | `docs/wireframes/*` | Section copy + anatomy |
| 6 | `DESIGN.md` + `docs/brand/tokens.json` | Tokens |

Everything here obeys the **hard rules** already locked: light + royal blue `#0040c1`, Prompt font, beston lowercase, MT5 only, CTAs `เปิดบัญชี` / `ทัก LINE OA ติดต่อ admin`, risk-first, **no fake stats / testimonials / superlatives**, Rebate framed as `ตาม T&C ไม่ใช่สัญญากำไร`, every unverified figure carries `[verify]`.

> **All conversion percentages in this doc are EXTERNAL industry benchmarks** (cited studies / other firms), used to justify *why* a pattern pays off. **They are not beston numbers and must never appear as beston claims on the site.**

---

## 1. The thesis — how to beat "ordinary broker" AND "AI-generated"

Two failure modes to escape. Ordinary broker sites = hype, gold/black "luxury", fake stats, spread arms-race, cluttered 100-page nav. AI-generated sites = Inter font, purple→blue gradient, uniform 16px radius / 24px padding, stock photos, generic fade-ins, hedging copy. beston must read as **neither** — it must read as a *calm, premium, honest fintech product*.

### 1A. Anti-AI-slop checklist (tells → beston fix)

| AI-slop tell | beston fix (already in tokens — enforce it) |
|---|---|
| **Inter / Roboto default** | **Prompt** everywhere (Thai+Latin display) — distinctive + on-brand. Tighten display tracking `-0.03em`; let Thai keep natural tracking. |
| **Purple→blue decorative gradient** | One semantic blue `#0040c1`. Gradient only on deep hero/CTA surfaces (`brand-gradient`), never as decoration. |
| **Uniform 16px radius + 24px padding** | Intentional variation: pills `999px` (CTA/chips) · cards `24px` · inputs `14px`. Section padding `120/64px`. Hierarchy through *varied* scale, not one radius. |
| **Generic fade-in on everything / no hover** | Purposeful, tiered motion (§6–8). Every interactive element has a hover. Motion communicates state / directs attention / carries brand calm. |
| **Stock photos, AI 3D blobs** | Real MT5 terminal mock (labelled `ตัวอย่าง`), real LINE chat UI, regulator badges (SVG), rebate diagram. No smiling-trader stock, no plastic 3D. |
| **Vague aspirational headlines** ("Build the future") | Specific, verifiable, honesty-contrast copy: `เห็นทุกต้นทุน คืนทุกการเทรด`. |
| **Hedging copy** ("may help", "best-in-class") | Founder-voice, concrete, risk-aware. Test: "would the CEO actually say this?" |
| **Layout that fits any industry** | Broker-specific blocks: RiskDisclosureBar, RegulatoryStrip, AccountComparison, MarketsTicker, RebateExplainer. |

**Restraint, not excess.** The most distinctive fintech products (Stripe, Linear, Notion) win on restraint. beston's edge is *confidence through calm* — one blue, lots of white, one wow moment, honest numbers.

### 1B. beston's deliberate divergences (turn constraints into the brand)

1. **Light + royal blue while 2026 fintech trends dark-navy + gradient.** The herd is going dark; beston stays in daylight. This *is* the differentiation — "broker-sober in daylight" reads premium and stands out in a sea of dark clones. (CEO-locked anyway.)
2. **Honesty-over-hype.** Competitors lean on superlatives (`#1`, `ดีที่สุด`, `spread 0.0`). beston *can't* (compliance) → flip it into the campaign: *"ทุกโบรกเกอร์บอกว่าตัวเองดีที่สุด เราขอบอกความจริง."* No competitor can copy honesty without abandoning their own hype.
3. **Clarity over %.** Rebate = `$5/lot` concrete, not a fuzzy `%`. Clear beats big.
4. **LINE-human path.** Thai users want to talk before KYC. A real Thai team via LINE is a trust moat offshore brokers can't match.

---

## 2. Information architecture — validated against industry

The existing **14-route IA** (6 primary nav + support/content + legal cluster + external app) is **confirmed correct** against 2026 broker-architecture sources. Cross-check:

| Industry tier (WSA / finxsol) | beston route | Verdict |
|---|---|---|
| Core conversion: Account Types, Trading Conditions, Platforms, Funding, Onboarding | `/accounts`, `/markets`, `/tools` (+ external register/funding) | ✅ covered; funding stays in external portal (correct for POC) |
| Trust & proof: Regulation, Security of Funds, About, Contact | `/why-bestonfx`, `/support`, footer + `/regulatory-disclosures` | ✅ covered |
| Scale (SEO/retention): Education, Partners/IB, Blog | `/articles`, `/partners` | ✅ covered |
| Legal: Risk, Terms, Privacy | `/legal/*` | ✅ covered |

**Governing principle (industry-wide):** *"every key page earns its place by answering exactly one trader question."* beston already enforces this (sitemap §"Hierarchy rationale"). **Keep nav to 6** — sprawl is the #1 IA mistake.

**Two reinforcements from research:**
- **Don't send paid/affiliate traffic to Home.** Build dedicated 1-offer/1-action landing pages (single-goal pages convert **2.4–2.8×** multi-purpose pages). Add to backlog: campaign LP template (out of POC scope, flag for production).
- **Risk disclosure at every decision point**, not only the sticky bar + footer — surface a short risk note beside leverage/account/rebate blocks too (beston already does this in Hero + Rebate; extend to `/accounts` leverage row and `/tools` calculator outputs).

---

## 3. Conversion spine + the evidence (why each rule pays)

> External benchmarks — evidence, **not** beston claims.

| Pattern beston already uses | External evidence it pays | Source |
|---|---|---|
| Regulator badges high (RegulatoryStrip right after hero) | FCA badge footer→hero lifted broker conversion **2.1% → 3.4%**; another report **+17% demo starts in 30 days** | WSA; broker CRO |
| Outcome-led headline (`เห็นทุกต้นทุน คืนทุกการเทรด`) | Feature→outcome headline = **+78% conversion** (copy only, 2,200 sessions) | WSA fintech |
| Single primary CTA + 1 secondary | Multiple competing CTAs can cut conversion **up to 266%**; single-goal pages **2.4–2.8×** | LandingPageFlow; Unbounce |
| Short forms / defer KYC | 11 fields → email+password lifted completion **18% → 54%** | WSA fintech |
| Speed as launch criteria | 1s mobile delay = **−20%** conversions; **53%** abandon >3s; CWV: LCP<2.5s, CLS<0.1, INP<200ms | WSA; finxsol |
| Mobile-first | Mobile = **62.5%** global / **49.4%** finance traffic (higher in SE-Asia) | Unbounce; finxsol |
| Trust beside the CTA, not buried | 94% of first impressions are design-driven; security near forms cuts abandonment | WSA; Eleken |
| Honest empty states (gated Stats/Testimonials) | Generic/fake social proof is the top "skeptical-trader" trust killer | WSA; 925studios |

**Health benchmark to aim for (not to display):** a structurally sound broker site reaches **3–8% demo conversion** on targeted traffic; **<1% signals a structural UX/trust failure**, not bad traffic. Instrument GA4/GTM from day one (`form_start`, `kyc_start`, `deposit_cta_click`, LINE-click) — production phase.

---

## 4. Hero that converts — `TerminalHero` deep spec

The single highest-leverage section. Rules (research-backed):

- **Everything essential above the fold**: H1, subhead, both CTAs, proof line, risk note, terminal visual — no scroll required to see the offer.
- **Clear > clever.** H1 states value plainly (`เห็นทุกต้นทุน คืนทุกการเทรด`); save rhythm/wordplay for subhead. Vague/clever headlines lose skimmers.
- **Confident type.** Oversized H1 (`clamp(2.5rem,6vw,4rem)`, weight 600, tracking `-0.03em`) + generous white = premium, intentional.
- **One primary CTA** (`เปิดบัญชี`, blue pill) + **one secondary** (`ทัก LINE OA ติดต่อ admin`). Never a third.
- **Trust within the hero**: proof line `ถอนได้ทุกวัน [verify] · เทรดบน MT5 · Rebate ทุก lot ตาม T&C` + RegulatoryStrip immediately after (badge-in-hero is the proven conversion lever).
- **Risk note in the hero**, not just the bar: `การเทรดมีความเสี่ยง — เราอยากให้คุณรู้ก่อน ไม่ใช่รู้ทีหลัง`. Signals maturity, escapes "hype broker" pattern.
- **The visual = product, not decoration.** Real MT5 terminal mock, light UI, blue accent, label `ตัวอย่างแดชบอร์ด — ไม่ใช่ข้อมูลจริง`. Interactive/animated mock > static screenshot > stock photo (interactive demos out-convert illustrations).
- **LCP discipline.** Hero image is the LCP element → export WebP/AVIF, target <200KB, set explicit dimensions (no CLS).

Layout: two-column desktop (copy left / terminal right). Mobile: copy first, CTAs full-width stacked, terminal below, H1 `56→34px`. Centered variant is statistically strong for software but beston's split-with-product-mock is the right call (shows the platform).

---

## 5. Copywriting that converts (frameworks → beston)

beston already has an excellent locked spine (`เทรดบนความจริง` / `เห็นทุกต้นทุน คืนทุกการเทรด`). This formalises *why* it works and gives the operator framework hooks per section.

### Framework cheat-sheet (pick per section)
| Framework | Shape | Best beston use |
|---|---|---|
| **PAS** | Problem → Agitate → Solution | Why-beston ("โบรกเกอร์ซ่อนต้นทุน → คุณเสียโดยไม่รู้ตัว → beston เปิด MT5 ดูเองได้") |
| **AIDA** | Attention → Interest → Desire → Action | Home flow overall (hero → pillars → rebate → CTA) |
| **BAB** | Before → After → Bridge | Rebate section ("เทรดแล้วต้นทุนหาย → ได้คืนทุก lot → Rebate $5/lot ตาม T&C") |
| **4Us** | Useful · Urgent · Unique · Ultra-specific | CTA + microcopy (`เริ่มวันนี้ ใน 5 นาที`) |
| **FAB** | Feature → Advantage → Benefit | Markets/Tools spec rows |

### Rules (research-backed)
1. **Outcome > feature.** "Settle FX 3× faster" beat the feature version by **+78%**. beston: lead with what the trader *gets* (`เห็นทุกบาท`, `ได้คืนทุก lot`), not the mechanism.
2. **Concrete > vague.** Numbers and verifiable facts (`$5/lot`, `5 นาที`, `MT5`) carry weight; superlatives don't (and are banned).
3. **Compliance-safe credibility.** Replace "guaranteed/best/#1" with verifiable statements: `กำกับโดย FSCA [verify]`, `เทรดบน MT5`, `ทีมไทยตอบเอง`. (Industry equivalent: "regulated by FCA", "99.9% uptime".)
4. **Microcopy reassurance near every CTA/field**: `เริ่มวันนี้ ใน 5 นาที` · `คุยกับ admin ก่อนเริ่มใช้งาน` · `เราไม่เร่งคุณ` · (forms) `ใช้เวลา 2 นาที` · `เราไม่เปิดเผยข้อมูลของคุณ`. Field reassurance measurably lifts completion.
5. **Honesty-contrast as the hook** (beston's signature): `คู่แข่งขายฝัน — เราขายความจริง`.
6. **Parallel/antonym rhythm** (already in copy deck): เห็น↔คืน · ได้↔เสีย · ก่อน↔ทีหลัง.

Full copy lives in `docs/wireframes/copy-deck-punchy.md` (punchy) + `copy-deck-v2.md` (calm/legal). This playbook doesn't change locked copy — it documents the conversion logic and gives Legal-safe fallbacks already noted there.

---

## 6. Scroll-animation "wow" catalog (Framer build recipes)

**Principle:** one true wow (hero), purposeful reveals everywhere else, compliance copy always static & readable. Use **Framer Scroll Transform + `Section in View`**, not global page-scroll, so transforms are scoped and performant. Animate **transform + opacity only** (GPU); never width/height/padding/margin. Cap **≤12 animated layers per viewport**. Y offset **>40px reads as "jumping"** — keep reveals subtle (≈20–40px).

### Tier A — the hero "wow" (once)
| Effect | Framer build | Values |
|---|---|---|
| **Bloom reveal** | Appear on load | opacity 0→1, Y 32→0, blur 8→0, 0.65s, ease `cubic-bezier(.16,1,.3,1)` |
| **Terminal depth (scroll-scrub)** | Scroll Transform, Section in View, layered (bg/mid/fg) | scale 0.92→1, rotateX 8°→0, Y 48→0 over first 45–60vh; bg Y 0→28, mid 0→−18, fg 0→−36 |
| **Cursor parallax** (desktop only) | Code override / interaction | rotateX/Y ±4–6°, translate ±10px; **off on touch + reduced-motion** |

### Tier B — section reveals (throughout)
| Effect | Where | Build |
|---|---|---|
| **Fade-rise + stagger** | every section header & card grid | Appear, opacity 0→1 + Y 24–40→0, threshold 0.2–0.3, `once:true`, stagger 50–100ms |
| **Sticky proof story** (scrollytelling) | Rebate / Why / Markets | sticky media panel (height 100vh) inside ~180vh wrapper; text/cards opacity 0→1→0, fg Y 80→0→−80 |
| **Nav condense** | global | scrollY>40px → Condensed variant, backdrop blur 12px, height −8px |
| **Markets marquee** | MarketsTicker | infinite horizontal loop 40–60s; pause on hover / tap |
| **FAQ accordion** | FAQ | height spring ~0.35s |

### Tier C — picked from the modern scroll-craft set (use 1–2 max, only where they tell beston's story)
From current award-winning Framer patterns — adopt **sparingly**, broker-sober:
| Pattern | beston-appropriate use | Caution |
|---|---|---|
| **Stacking cards on scroll** (sticky + increasing top-offset + slight scale-down) | StepProcess "เปิดบัญชี 3 ขั้น" — steps stack as you scroll | keep calm; no 3D carnival |
| **Cross-section reveal** (cards fade+scale from 0 via scroll variant) | FeatureGrid trust pillars reveal | subtle scale only |
| **Immersive scroll zoom** (sticky + preserve-3D, layered cutouts scale) | Hero terminal only | one place; never on text |
| **Text parallax layers** (stacked text, different scroll speeds) | optional section divider / brand moment | **never** on risk/legal text |

**Banned scroll moves:** parallax on risk/legal text (vestibular + compliance), scroll-jacking / full-page snap, count-up stats (gated anyway), autoplay video w/ sound, blur+scale on body text.

### CSS scroll-driven note (production / Next.js, not Framer)
Modern browsers support the native scroll-driven animations API (`animation-timeline`) which offloads work to the compositor thread — cheaper than JS scroll listeners. Framer abstracts this; relevant when the approved POC is rebuilt in Next.js.

---

## 7. Micro-interaction catalog (exact specs)

Sweet spot **200–500ms**; hover feedback **100–200ms**. Every interactive element gets one. Purpose: signal clickability, confirm action, carry brand calm.

| Element | Interaction | Spec |
|---|---|---|
| Primary button | hover | scale 1.02–1.03, glow shadow grows (`shadow-glow-sm`→`glow`), 120ms; **never move position** |
| Primary button | press | scale 0.98, 80ms |
| LINE CTA | hover/press | green darken `#06C755`→`#05b54c`; subtle lift |
| Card (trust/account/article) | hover | Y −4px, border `ink-200`→`brand-200`, shadow soft→card, 150ms spring (stiffness 400 / damping 30) |
| Pill / chip | hover | bg tint shift `brand-50`→`brand-100` |
| Nav link | hover | underline slide-in (scaleX 0→1, left origin) |
| Magnetic CTA (optional, hero only) | cursor near | button eases ±6px toward cursor; **desktop only, off reduced-motion** |
| Input field | focus | border→`brand-700`, ring `0 0 0 3px brand-200`, label lift |
| Accordion (FAQ) | open/close | height spring 0.35s + chevron rotate 180° |
| Calculator (Tools/Partners) | input change | result panel number eases to new value; disclaimer stays static & visible |
| Form submit | states | idle→loading spinner→success ✓ / error microcopy (`ลองอีกครั้ง`) |
| Marquee ticker | hover/tap | pause |
| Image-in-frame (terminal/article cover) | hover | scale 1.05 inside `overflow:hidden` |

**Anti-slop rule:** no two unrelated elements share the exact same generic fade — match motion personality to beston (precise + calm, like Stripe; not bouncy like Duolingo).

---

## 8. Motion engineering — values, performance, accessibility

Consolidated motion tokens (reuse everywhere — define once):

```
--ease-brand: cubic-bezier(.16,1,.3,1)   /* signature ease-out */
--dur-hover: 120ms     --dur-reveal: 600ms     --dur-transition: 300ms
--reveal-y: 28px       --stagger: 80ms         --spring-snappy: stiffness 400 / damping 30
--spring-gentle: stiffness 100 / damping 20 / mass 1
```

| Purpose | Duration | Why |
|---|---|---|
| Hover feedback | 100–200ms | feels instant |
| Appear / reveal | 300–600ms | readable, not sluggish |
| Page transition | 200–400ms (250ms fade) | fast > elaborate |
| Text reveal total | <1.5s | done before reader arrives |

**Performance guardrails (research-confirmed):**
- Animate **only** `transform` + `opacity`. Avoid layout props.
- Don't animate 30+ elements at once — stagger to spread load.
- Never change a button's position on hover (breaks click reliability).
- Never hijack scroll.
- Test on a mid-range Android, not just desktop.
- Framer compiles to Framer Motion → identical perf to hand-code; use visual tools for ~90%, code overrides only for cursor parallax / Lenis / data-driven.

**Reduced-motion (mandatory):** duplicate key sections as a "Reduced" variant OR wrap motion in `@media (prefers-reduced-motion: reduce)`. Keep **opacity fades only**; disable parallax, cursor depth, marquee auto-loop, scroll-scrub. Parallax is a known vestibular trigger — non-negotiable. Prefer *granular* (slower/dampened) over hard `animation:none` where possible. Enable Framer's site-level reduced-motion setting and test with the OS flag on.

---

## 9. Visuals & imagery that impact

2026 direction: away from static stock → **authentic, specific, interactive, dimensional**. Stock-photo + plastic-AI-3D = instant "generic" signal.

| Asset | Spec | Compliance label |
|---|---|---|
| **MT5 terminal mock** (hero) | Light UI, blue accent, real symbols, animated or interactive > static | `ตัวอย่างแดชบอร์ด — ไม่ใช่ข้อมูลจริง` |
| **LINE support mock** | Real Thai chat UI | no fake response-time numbers |
| **Markets universe** | Symbol grid / ticker, real tickers | `ตัวอย่าง — ไม่ใช่ราคาจริง` |
| **Regulator/trust stack** | Crisp SVG badges, document/card metaphor | license numbers `[verify]`, no fake seals |
| **Rebate diagram** | Clean lot→rebate flow visual | `ตาม T&C ไม่ใช่สัญญากำไร` |
| **Article covers** | Thai-first editorial, consistent grid | not casino/chart-hype |

**Premium-imagery rules:**
- One strong hero visual > six mediocre stock photos.
- **No** smiling-trader stock, gold/black luxury tropes, casino neon, dark Bloomberg clone, generic AI dashboards, plastic 3D blobs, fake "live profit" screenshots, upward-curve hero charts.
- **3D done right:** if used, **Spline** (web-ready, designer-built) for a subtle hero accent — light, on-brand blue, low-poly/clean, GPU-cheap. Optional, not required; the terminal mock already carries the hero.
- **Texture for warmth (anti-flat, anti-AI):** very subtle film-grain/noise overlay or soft hand-tuned gradient mesh on deep-blue sections adds craft without breaking sobriety. Use at low opacity only.
- Export WebP/AVIF (Framer auto-AVIFs + responsively resizes), lazy-load below fold, set dimensions to protect CLS.

Asset briefs already exist: `docs/research/bestonfx-forex-broker-visual-image-plan-2026-05-31.html` + samples in `docs/research/assets/bestonfx-visual-samples/` + generated set in `docs/wireframes/generated/assets/beston/`.

---

## 10. Framer features, tips & tricks (2025–2026)

### Build with these Framer strengths
| Feature | beston use |
|---|---|
| **Components + Variants** | Navbar Default/Condensed · CTABanner LineFirst/AccountFirst · Hero Terminal/Split/Centered · FAQ item · cards. One source → changes everywhere. |
| **Variables (Framer)** | Tokenise color/spacing/radius/durations so the whole site shares one system (anti-AI-slop consistency). |
| **Scroll Transform + Section in View** | All scroll motion (§6) — scoped, synced, performant. |
| **Sticky** | Risk bar, nav, sticky proof-story panels. |
| **Effects (blur/shadow/gradient)** | Hero bloom, card hover glow, deep-blue section depth. |
| **Breakpoints** | 320 / 390 / 768 / 1200 — test Thai line-wraps at each (Thai wraps differently than Latin). |
| **CMS** | Articles collection from day one (fields below). |
| **Code components** | Lenis smooth-scroll (official Framer component), GSAP ScrollTrigger sync, Spline embed, ticker pause, reduced-motion override — *only* where native Framer is insufficient. |
| **Localization** | Thai default; English locale + localized paths later if D007 approves. |
| **AI readability** | Framer pre-renders + serves markdown to AI agents — good headings/IA = GEO/AI-search visibility. |

### Code-component stack (use sparingly)
- **Lenis** — buttery smooth scroll; official Framer component, drag onto desktop breakpoint, tune intensity. Sync with GSAP via `lenis.on('scroll', ScrollTrigger.update)` if combining.
- **GSAP ScrollTrigger** — only for a complex bespoke sequence Framer's Scroll Transform can't express.
- **Spline** — optional 3D hero accent.
- Keep code minimal: each code component is a perf + maintenance cost.

### Performance / SEO / GEO (Framer specifics)
- Framer is statically generated on a global CDN → **near-perfect CWV by default**; don't undo it with heavy media or 10 code components.
- Images auto-convert to **AVIF** (≈25–34% smaller than JPEG) + responsive sizes + lazy-load. Still compress the hero.
- **One H1 per page** (highest-leverage SEO fix); H2/H3 hierarchy clean.
- Page/CMS **SEO fields**: SEO title ≤60, description ≤160, social image 1200×630, canonical URL.
- **Flat CMS URLs**: `/articles/[slug]`, not `/articles/category/slug`.
- **GEO/AI**: open each content page with a **direct 40–80-word answer** (LLMs extract these into chat answers); add **FAQPage / Organization / BreadcrumbList JSON-LD**.
- Set **redirects** for any changed routes from old `bestonfx.com`; submit `/sitemap.xml` after publish.

### Template-adaptation tips (Fizens)
1. **Duplicate first**, never edit the purchased original. Rename `BestonFX Framer POC v0.1`.
2. **Unpublish unused Fizens pages early** (`/changelog`, `/jobs`, `/team-member`, `/overview`, auth pages) — cuts component bloat.
3. Remove template purchase artifacts (Lemon Squeezy "Get Template", `madebykota.com/buy/...`) and finance-app copy (budgeting/debt/tax) immediately.
4. Remap **Poppins/Instrument Sans → Prompt** across all Text Styles; remap palette to `#0040c1` system; **delete pink accent**.
5. Gate **StaticsSection / Testimonials / star ratings** off until verified.

---

## 11. Section-by-section craft map (Fizens → beston → wow)

The build-ready table: each beston Home section, its Fizens source, and the craft to apply (motion · micro · visual · copy logic). Home order is **wireframe-canonical** (`docs/wireframes/pages/home.md`); **no Tools grid / no IB on Home**.

| # | beston section | Fizens source | Motion (Tier) | Micro-interaction | Visual | Copy framework |
|---|---|---|---|---|---|---|
| 1 | RiskDisclosureBar | *(new)* | none (static, sticky) | `อ่านเพิ่มเติม` underline | amber `#fff7ed` + shield | legal — verbatim |
| 2 | Navbar | Main Navbar | B: condense on scrollY>40 | link underline-slide; `เปิดบัญชี` hover glow | logo | — |
| 3 | TerminalHero | HeroSection | **A: bloom + terminal depth + cursor parallax** | CTA hover/press; (optional magnetic) | MT5 mock (interactive) `ตัวอย่าง` | outcome headline (§4) |
| 4 | RegulatoryStrip | logo cloud | B: fade-rise | badge subtle hover | SVG regulator badges | proof, `[verify]` |
| 5 | FeatureGrid (3 pillars) | FeaturesSection | B/C: cross-section reveal, stagger | card lift -4px | line icons, one blue | PAS micro per pillar |
| 6 | MarketsTicker | *(new / Gallery)* | B: marquee 40–60s | pause on hover/tap | symbol chips | label `ตัวอย่าง` |
| 7 | AccountComparison preview (2) | PricingSection | B: fade-rise | card hover, CTA | 2 clean cards | self-select, BAB |
| 8 | StepProcess (3) | HowItWorkSection | **C: stacking cards on scroll** | number hover | numbered cards | friction-removal |
| 9 | FeatureSplit — Rebate | BenefitSection | **B: sticky proof story** | CTA hover | lot→rebate diagram | BAB + T&C note |
| 10 | ArticleGrid teaser | BlogSection | B: stagger | cover zoom 1.05, card lift | editorial covers | education trust |
| 11 | FAQ | FaqSection | B: fade-rise | accordion spring + chevron | — | objection-handling |
| 12 | CTABanner LineFirst | pre-footer CTA | B: fade-rise | LINE green press, QR hover | LINE QR (desktop) | soft close, 4Us |
| 13 | Footer | Footer | none | link hover | — | legal + identity |
| — | AIChatWidget (float) | *(new)* | gentle bubble idle | open→sheet (mobile) | bubble | label `ไม่ใช่คำแนะนำ` |
| — | Stats / Testimonial | Statics / Testimonial | **GATED — disabled** | — | — | — |

Per-page heroes use the right variant (Split/Centered) per `components.md`; apply the same Tier-B reveals + §7 micro-interactions site-wide for consistency.

---

## 12. QA + benchmarks (definition of "wow + done")

**Craft / anti-slop audit (new — run before CEO review):**
- [ ] Prompt font everywhere; **no Inter/Roboto** leaked from Fizens
- [ ] One blue `#0040c1`; **no** decorative purple/blue gradient; **no** gold/dark-navy
- [ ] Radius/padding intentionally varied (pills/cards/inputs), not uniform 16/24
- [ ] Every interactive element has a hover/press micro-interaction
- [ ] One real hero wow; reveals subtle (≤40px); **no** generic fade-on-everything
- [ ] No stock photos / plastic 3D / fake dashboards; mocks labelled `ตัวอย่าง`
- [ ] Copy is founder-voice + concrete; no hedging, no superlatives

**Motion / a11y:**
- [ ] transform+opacity only; ≤12 animated layers/viewport
- [ ] reduced-motion path tested (parallax/marquee/cursor off)
- [ ] no scroll-jacking; hero wow doesn't distract on re-scroll
- [ ] AI bubble never covers risk bar / footer CTAs / legal links

**Compliance (unchanged, must pass):**
- [ ] risk bar before first CTA on every page; footer full risk block
- [ ] no fake stats/testimonials/superlatives; Stats & Testimonials gated
- [ ] all mocks labelled; Rebate carries `ไม่ใช่สัญญากำไร`; AI disclaimer present
- [ ] `npm run compliance:scan` clean on changed copy

**Performance (launch criteria, not nice-to-have):**
- [ ] LCP <2.5s · CLS <0.1 · INP <200ms (mobile)
- [ ] hero image WebP/AVIF, <200KB, dimensions set
- [ ] unused Fizens pages unpublished
- [ ] one H1/page; SEO fields set; FAQ JSON-LD; sitemap submitted

**Conversion targets (internal, never displayed):** aim demo conversion **3–8%** on targeted traffic; <1% = structural problem. Instrument GA4/GTM funnel (production).

---

## 13. Sources (2026 deep-research pass)

Broker / conversion / fintech:
- WSA — How to Build a Forex Broker Website That Converts Traders (2026): https://wsa.design/news/how-to-build-a-forex-broker-website-that-converts-traders-in-2026
- WSA — High-Converting Landing Pages for Fintech (structure, copy, data): https://wsa.design/news/high-converting-landing-pages-for-fintech-websites-structure-copy-and-data-insights
- WSA — Fintech Web Design Trends 2026: https://wsa.design/news/modern-fintech-web-design-trends-in-2026
- finxsol — Brokerage Website Development 2026 (architecture guide): https://finxsol.com/blog/forex-broker-website-development-guide/
- Eleken — Fintech design guide (trust patterns) 2026: https://www.eleken.co/blog-posts/modern-fintech-design-guide
- Unbounce conversion benchmarks (via WSA, Q4 2024, 57M conversions)

Anti-AI-slop / distinctive design:
- 925studios — AI Slop Web Design guide (2026): https://www.925studios.co/blog/ai-slop-web-design-guide
- Bolt — create stunning websites in 2026 (without looking like AI): https://bolt.new/blog/2026-create-stunning-websites-bolt

Framer craft / animation:
- Framer Academy — Scroll animations / Scroll transform / Section in view: https://www.framer.com/academy/lessons/scroll-animations
- Framer University — 8 Stunning Scroll Animations (remix): https://framer.university/blog/8-stunning-scroll-animations-in-framer-(with-remix-links)
- Framer University — Top scroll animation techniques: https://framer.university/lessons/5-scroll-animation-techniques
- framerwebsites.com — Framer Animations: Complete Guide 2026: https://framerwebsites.com/blog/framer-animations-complete-guide
- Lenis for Framer (official smooth-scroll component): https://www.framer.com/marketplace/components/lenis/
- darkroom/lenis: https://github.com/darkroomengineering/lenis
- Framer — SEO features & PageSpeed: https://www.framer.com/help/articles/guide-to-seo-features-and-tools/ · https://www.framer.com/help/articles/how-to-optimize-pagespeed-insights/

Motion / micro-interactions / scrollytelling / a11y:
- noboringdesign — micro-interaction examples: https://www.noboringdesign.com/blog/examples-of-micro-interactions-in-web-design
- Codrops — Sticky Grid Scroll (scroll-driven): https://tympanus.net/codrops/2026/03/02/sticky-grid-scroll-building-a-scroll-driven-animated-grid/
- Maglr — best scrollytelling examples 2026: https://www.maglr.com/blog/best-scrollytelling-examples
- web.dev — prefers-reduced-motion: https://web.dev/articles/prefers-reduced-motion
- MDN — prefers-reduced-motion: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion

Copy / hero / visuals:
- landy-ai — landing page copywriting frameworks (PAS/AIDA/BAB) 2026: https://www.landy-ai.com/blog/landing-page-copywriting-frameworks
- perfectafternoon — hero section design 2026: https://www.perfectafternoon.com/2025/hero-section-design/
- designrevision — fintech SaaS landing pages 2026: https://designrevision.com/blog/fintech-saas-landing-pages
- eevy — visual commerce trends 2026 (3D / authentic vs stock): https://eevy.ai/blog/visual-commerce-trends-2026

Compliance framing (carried from existing SOT): FCA COBS 4 · ESMA CFD intervention · ASIC CFD order.

---

## Changelog
| Date | By | Change |
|---|---|---|
| 2026-06-01 | Claude | New craft addendum — design-excellence, scroll-wow, micro-interaction, copy, trust-data, visuals, Framer-tricks, anti-AI-slop; mapped to Fizens + existing component library; conversion benchmarks added as external evidence. |
