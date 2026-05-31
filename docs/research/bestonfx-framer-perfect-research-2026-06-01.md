# BestonFX Framer Perfect Site — Deep Research Report

**Source of truth:** 1 June 2026 · Compiled by Cursor; indexed by `bestonfx-framer-source-of-truth-2026-06-01.md`  
**Branch:** `codex/bestonfx-framer-research-2026-06-01`  
**Template baseline:** [Fizens](https://fizens.framer.ai/) (CEO-approved)  
**Build surface:** Framer POC first — Next.js is future production only (`docs/plan.md`)

---

## Executive summary

A premium Thai forex/CFD broker site wins on **trust density**, not feature count. The best 2025–2026 broker marketing sites:

1. Show **risk before romance** — sticky risk bar, no buried disclaimers.
2. Keep **primary nav to six decisions** — why trust · markets · accounts · tools · partners · support.
3. Put **conversion on Home as preview**, full detail on `/accounts` and `/partners`.
4. Use **LINE as co-primary CTA** for Thai users who want human reassurance before KYC.
5. Avoid **fake stats, star ratings, wealth-growth framing** — the #1 signal of generic/AI broker sites.
6. Use **motion with restraint** — scroll reveals and one hero “wow” moment; never motion that obscures compliance copy.

This report merges industry patterns, Fizens template anatomy, and validated BestonFX wireframes (`docs/wireframes/`) into one research baseline for the Framer rebuild.

---

## Source-of-truth hierarchy (read this first)

When documents conflict, follow this order:

| Priority | Document | Role |
|---:|---|---|
| 1 | `bestonfx-framer-source-of-truth-2026-06-01.md` | Latest compact source-of-truth index |
| 2 | **This file** + `bestonfx-framer-perfect-handoff-2026-06-01.md` | Expanded research + Framer execution (Jun 2026) |
| 2b | `bestonfx-framer-design-craft-playbook-2026-06-01.md` (Claude) | Design/motion/Framer-craft/copy/trust-data/anti-AI-slop deep-dive |
| 3 | `docs/wireframes/sitemap.md` + `pages/*.md` + `components.md` | IA, section order, copy validation |
| 4 | `DESIGN.md` + `docs/brand/tokens.json` | Visual tokens (light + `#0040c1`) |
| 5 | `docs/plan.md` | Phase gate: Framer POC before Next.js |
| 6 | `docs/framer-poc-map.md` | Fizens inventory — **Home section map superseded by wireframes** (see drift report) |
| 7 | Prior HTML handoffs (`2026-05-29`, `2026-05-31`) | Reference only — do not override wireframes |

**Critical IA correction:** `TradingToolsGrid` and `IBCommissionEstimator` do **not** belong on Home. Tools → `/tools`. IB → `/partners`. See `docs/reports/home-ia-drift-handoff.md`.

---

## 1. Ideal sitemap (retail broker, Thai-aware)

Validated structure — **14 public routes** (+ external conversion app):

```
/                          Home — persuade in 5s → เปิดบัญชี / LINE
/why-bestonfx              Trust story, regulation, transparency
/markets                   Instrument breadth (FX, metals, indices, oil, crypto)
/accounts                  Standard vs Demo — conversion hub
/tools                     MT5 + calculators (rebate, pip, margin)
/partners                  IB program + commission estimator
/support                   LINE-first help, channels, hours
/articles                  Education hub (CMS)
/articles/[slug]           Article detail (CMS)
/legal/risk-disclosure     Full risk warning (mandatory)
/legal/terms               Terms [to be written]
/legal/privacy             Privacy / AML-KYC [to be written]
/regulatory-disclosures    License + entity [to be written, verify]
/404                       Recovery links
```

**External (linked, not wireframed):** `traders.bestonfx.com/register` · login · demo flows.

### Why six primary nav items (not ten)

Retail forex sites often sprawl (100+ pages). BestonFX deliberately limits primary nav to decisions a Thai retail trader actually makes:

| Nav item | Question answered | Why not folded into Home |
|---|---|---|
| Why beston | “Can I trust you?” | Needs room for regulation narrative |
| Markets | “Can I trade my symbol?” | Breadth proof without cluttering Home |
| Accounts | “Which account fits me?” | **Conversion hub** — Home only previews |
| Tools | “Is the platform serious?” | Calculators need space; burying on Home kills engagement |
| Partners | “Can I earn as IB?” | Major channel — deserves primary nav |
| Support | “Can I get help in Thai?” | LINE-first reassurance |

Education stays at `/articles` — no separate `/academy` (DX Academy is sibling brand).

---

## 2. Home page — what belongs (and what does not)

### Correct section order (wireframe-approved)

| # | Section | Fizens analogue | Purpose |
|---|---|---|---|
| 1 | RiskDisclosureBar | *(new)* | Compliance + trust signal |
| 2 | Navbar | Main Navbar | Persistent CTA |
| 3 | TerminalHero | HeroSection | Value prop + terminal mock |
| 4 | RegulatoryStrip | Logo cloud / About | FSCA · CySEC · MSB · MT5 |
| 5 | FeatureGrid (3-col) | FeaturesSection (partial) | Trust pillars |
| 6 | MarketsTicker | *(new / marquee)* | Market energy, labelled mock |
| 7 | AccountComparison preview | PricingSection (2 cards) | Self-select → `/accounts` |
| 8 | StepProcess | HowItWorkSection | Open account in 3 steps |
| 9 | FeatureSplit (Rebate) | BenefitSection | Hook with T&C framing |
| 10 | ArticleGrid teaser | BlogSection | Education trust |
| 11 | FAQ | FaqSection | Objection handling |
| 12 | CTABanner (LINE-first) | Pre-footer CTA | Soft close |
| 13 | Footer | Footer | Legal + identity |
| — | AIChatWidget (float) | *(new)* | Assist → LINE |

**Gated (hidden until verified):** Stats, Testimonial carousel.

### Do NOT on Home

| Block | Correct page | Reason |
|---|---|---|
| Full calculator grid | `/tools` | IA: interactive tools need dedicated URL + SEO |
| IB commission estimator | `/partners` | Different audience; dilutes trader focus |
| Full pricing table | `/accounts` | Home = preview only |
| Long regulation essay | `/why-bestonfx` | Home = strip + link |
| Fake user counts / star ratings | nowhere | Compliance + anti-slop |
| “Wealth growth” stats | nowhere | Implies profit; Fizens StaticsSection pattern banned |

---

## 3. Per-page essentials (beyond Home)

| Page | Hero variant | Must-have sections | Primary CTA |
|---|---|---|---|
| `/why-bestonfx` | SplitHero | RegulatoryStrip · FeatureGrid · FeatureSplit ×2 · Stats (gated) · FAQ · CTABanner | เปิดบัญชี |
| `/markets` | SplitHero | MarketsTicker · instrument FeatureGrid · FeatureSplit · FAQ · CTABanner | เปิดบัญชี |
| `/accounts` | SplitHero | Full AccountComparison · StepProcess · FAQ · CTABanner AccountFirst | เปิดบัญชี |
| `/tools` | CenteredHero | MT5 FeatureSplit · Calculator blocks · FAQ · CTABanner | เปิดบัญชี / LINE |
| `/partners` | SplitHero | IB story · FeatureSplit · IBCommissionEstimator · StepProcess · FAQ | สมัครพาร์ทเนอร์ / LINE |
| `/support` | CenteredHero | SupportChannels · FAQ (full) · CTABanner LineFirst | LINE |
| `/articles` | CenteredHero | ArticleGrid full · CTABanner | อ่าน / LINE |
| Legal | CenteredHero | Inline risk / terms body | — |

Full wireframe copy: `docs/wireframes/pages/*.md`.

---

## 4. Fizens template anatomy → BestonFX adaptation

Live audit: [fizens.framer.ai](https://fizens.framer.ai/) · snapshot: `fizens-home-snapshot.md`

### Fizens Home scroll order (template default)

1. Hero — “Start Managing Your Finance”
2. Partner logo strip
3. About headline — “all-in-one solution”
4. Key Features grid
5. Additional features chips
6. Benefit — 3 alternating rows (Time / Growth / Security)
7. Statistics — “See Your Wealth Grow” (**remove**)
8. How It Works — 3 steps
9. Testimonials + star rating (**gated off**)
10. Pricing — 3 tiers + template purchase link (**replace**)
11. Blog teaser
12. FAQ
13. Final CTA + Footer

### Page mapping (Fizens → BestonFX)

| Fizens route | BestonFX route | Treatment |
|---|---|---|
| `/` | `/` | Heavy adapt — section map above |
| `/features` | `/markets` + `/tools` | Split content; remove budgeting/debt copy |
| `/pricing` | `/accounts` | 2 account types, not SaaS tiers |
| `/about` | `/why-bestonfx` | Trust narrative |
| `/articles` | `/articles` | CMS education |
| `/contact` | `/support` | LINE-first |
| `/integration` | `/tools` (partial) | MT5 / TradingView if verified |
| `/download` | `/tools` or footer | Platform download after approval |
| `/changelog`, `/jobs`, `/team-member` | — | Remove POC |
| `/overview` | — | Remove or DX ecosystem footnote |
| Auth pages (5) | — | Defer — trading portal domain |

### Fizens components to delete or strip

- “Get Template” / Lemon Squeezy purchase links
- “Trusted by millions users over 140 countries”
- StaticsSection / wealth growth metrics
- Testimonial + Star Rating until real quotes
- Finance-app features (budgeting, debt, tax prep)
- Pink playful accents — broker-sober only

---

## 5. Trust & compliance patterns (2025–2026)

### Non-negotiables (BestonFX + international norm)

1. **Risk warning above fold** — sticky amber bar on every page (FCA/CySEC/ASIC convention).
2. **No invented regulation** — use `รอยืนยันข้อมูลจากฝ่ายกำกับดูแลก่อนเผยแพร่` until verified.
3. **No guaranteed profit / risk-free / fixed rebate as promise** — Rebate = “ตาม T&C ไม่ใช่สัญญากำไร”.
4. **Mock data labelled** — terminal, ticker, calculator outputs: `ตัวอย่าง — ไม่ใช่ข้อมูลจริง`.
5. **AI disclaimer** — `ผู้ช่วยอัตโนมัติ — ไม่ใช่คำแนะนำการลงทุน`.
6. **Footer full risk block** on every page.

### Trust-building without fake social proof

| Technique | Example | Why it works |
|---|---|---|
| Process transparency | 3-step open account + LINE touchpoint | Reduces “black box broker” fear |
| Cost transparency | Rebate mechanics + T&C link | Differentiator vs offshore opacity |
| Risk-first copy | Hero risk note under subhead | Signals maturity |
| Education teaser | Articles before CTA | Soft trust for researchers |
| Entity identity | Legal name + Bangkok address in footer | Real company anchor |
| Regulator strip | Badge row with `[verify]` slots | Answers #1 objection fast |

Run `npm run compliance:scan` before any copy publish.

---

## 6. Premium vs generic / AI-generated broker sites

### Premium signals (do)

- **One chromatic anchor** (`#0040c1`) + generous white space (Fizens clarity, broker-sober).
- **Real photography or bespoke terminal mock** — not stock “business handshake”.
- **Typographic hierarchy** — Prompt, tight display tracking, Thai-first line breaks.
- **Purposeful motion** — one hero moment + section reveals; parallax on mock only.
- **Honest empty states** — hide Stats/Testimonials until real data.
- **LINE green only on LINE paths** — clear conversion signposting.
- **Asymmetric layouts** — FeatureSplit alternation breaks template grid monotony.

### Generic / AI slop signals (avoid)

- Purple gradient on white + Inter font
- “Trusted by 10M+ traders” without source
- 3 identical icon cards with vague copy (“Advanced trading”, “Fast execution”)
- Star ratings + fake testimonials
- Casino neon, gold/black “luxury broker” cliché
- Wall of 12 feature chips nobody reads
- Identical hero + pricing + testimonial order from every SaaS template
- Over-animated everything (blur, scale, parallax on text)

---

## 7. Copy & conversion framework

### Conversion spine

Every primary page → **`เปิดบัญชี`** or **`ทัก LINE OA ติดต่อ admin`**.

| Funnel stage | Home mechanism | Copy tone |
|---|---|---|
| Awareness | Hero Angle 0 | Direct, cost-focused |
| Trust | RegulatoryStrip + FeatureGrid | Calm, factual |
| Intent | Account preview + Steps | Friction removal |
| Objection | FAQ | Plain Thai |
| Close | LINE-first CTABanner | Non-pushy |

### Approved Home hero (Angle 0)

- Eyebrow: `โบรกเกอร์ Forex/CFD เพื่อคนไทย`
- H1: **`เห็นทุกต้นทุน คืนทุกการเทรด`**
- Subhead: `ต้นทุนที่เห็นชัด · เงินคืนที่จับต้องได้ · ทีมไทยที่อยู่ข้างคุณเสมอ`
- Risk note: `การเทรดมีความเสี่ยง — เราอยากให้คุณรู้ก่อน ไม่ใช่รู้ทีหลัง`

### CTA rules

- Primary pill: royal blue `เปิดบัญชี`
- Secondary: outline or LINE green for LINE paths
- No public “ฝากเงิน” CTA on marketing site
- Nav always shows `เปิดบัญชี` — never hide behind hamburger on mobile

---

## 8. Visuals & imagery

### Asset strategy

| Asset | Spec | Label |
|---|---|---|
| Hero terminal mock | Desktop dashboard, light UI, blue accent | `ตัวอย่างแดชบอร์ด — ไม่ใช่ข้อมูลจริง` |
| LINE support mock | Chat UI, Thai copy | No fake response times |
| Markets universe | Symbol grid / ticker | Mock prices |
| Trust stack | Regulator badges (SVG) | `[verify]` numbers |
| Rebate visual | Simple diagram: lot → rebate flow | T&C footnote |
| Article covers | Editorial, not casino | CMS |

Sample references: `docs/research/assets/bestonfx-visual-samples/`

### Image rules

- WebP/AVIF in Framer; lazy below fold
- No charts showing guaranteed upward curves as hero
- No fake “live profit” screenshots
- Prefer **one strong hero visual** over six mediocre stock photos

---

## 9. Motion & micro-interactions playbook

**Principle:** Motion proves craft; compliance copy stays static and readable.

### Tier A — Hero (wow, once)

| Effect | Framer approach | Reduced motion |
|---|---|---|
| Bloom reveal | Opacity 0→1, y 32→0, blur 8→0, 0.65s | Opacity only |
| Terminal depth | Scale 0.92→1, rotateX 8°→0, 0.9s | Static |
| Cursor parallax (desktop) | rotateX/Y ±4–6° on mouse | Off |
| Background radial | Slow CSS/gradient drift | Static |

### Tier B — Scroll (throughout page)

| Effect | Where | Settings |
|---|---|---|
| Fade-rise | Section headers, cards | Viewport enter, stagger 0.08s |
| Sticky condensed nav | Navbar | scrollY > 40px, blur backdrop |
| Markets marquee | Ticker | Slow loop; pause on hover/tap |
| FeatureSplit parallax | Rebate section | Foreground y -20→20 over section |
| FAQ accordion | FAQ | Height spring, 0.35s |

### Tier C — Micro (delight)

| Effect | Target |
|---|---|
| Button hover | scale 1.02 + glow shadow |
| Card hover | translateY -4px + border brand-200 |
| Pill chip | subtle background shift |
| LINE CTA | green darken on press |
| Nav link | underline slide |

### Banned motion

- Parallax on risk warning text
- Infinite bounce on CTAs
- Scroll-jacking full-page snap (hurts compliance scan)
- Auto-playing video with sound
- Count-up stats (disabled until verified anyway)

Detailed checklist: `docs/research/bestonfx-framer-motion-research-checklist-2026-05-31.html`  
Framer build SOP motion defaults: `docs/skills/bestonfx-framer-build-sop/SKILL.md`
Expanded recipes + exact values + micro-interaction catalog: `bestonfx-framer-design-craft-playbook-2026-06-01.md` §6–8

---

## 10. Framer platform — features & tips (2025–2026)

### Use these Framer strengths

| Feature | BestonFX use |
|---|---|
| **Components + variants** | Navbar Default/Condensed, Hero variants, FAQ item |
| **Scroll transforms** | Hero mock parallax, section fade-rise |
| **Sticky positioning** | Risk bar, nav, optional step visual |
| **CMS** | Articles collection |
| **Effects (blur, shadow)** | Hero bloom, card hover |
| **Breakpoints** | 320 / 390 / 768 / 1200 — test Thai line wraps |
| **Code overrides (light)** | Ticker pause, reduced-motion media query |
| **Localization** | Thai primary; EN secondary if D007 approves |

### Performance tips (template adaptation)

1. **Duplicate template first** — never edit purchased original in-place without backup.
2. **Remove unused Fizens pages** from publish map early — cuts component bloat.
3. **Limit simultaneous scroll listeners** — prefer Framer Scroll Transform over custom JS.
4. **Compress hero images** — largest LCP element.
5. **Avoid nested blurs** on mobile — GPU cost.
6. **Prefers-reduced-motion** — duplicate “Reduced” component variant with fades only.

### Framer docs (reference)

- [Scroll animations](https://www.framer.com/help/articles/scroll-animation/)
- [Components](https://www.framer.com/help/articles/components/)
- [CMS](https://www.framer.com/help/articles/cms/)
- [Performance](https://www.framer.com/help/articles/site-optimization/)

---

## 11. Competitive pattern notes (structure only)

Patterns observed across tier-1 retail brokers (IC Markets, Pepperstone, Exness, local Thai-facing brands) — **no claims copied**:

| Pattern | Adoption for BestonFX |
|---|---|
| Sticky risk disclaimer | ✅ RiskDisclosureBar |
| Regulator logos above fold | ✅ RegulatoryStrip |
| Account type comparison | ✅ Home preview + `/accounts` |
| Platform download section | ✅ `/tools` |
| Education / analysis hub | ✅ `/articles` |
| Partner / IB program page | ✅ `/partners` |
| Live chat / LINE | ✅ LINE-first |
| Client portal separate domain | ✅ traders.bestonfx.com |

Differentiation: **rebate transparency + Thai LINE care + no fake stats** — not “lowest spreads” arms race.

---

## 12. Build phases & QA gates

| Phase | Deliverable | Gate |
|---|---|---|
| P0 | Template duplicate + delete risky Fizens copy | No fake stats / purchase links |
| P1 | Global: Risk bar, Nav, Footer, tokens | Prompt font + `#0040c1` |
| P2 | Home sections 1–13 per wireframe | **No Tools/IB on Home** |
| P3 | Primary pages (6) | Each has Hero + CTABanner |
| P4 | CMS Articles + 3 seed posts | Compliance scan pass |
| P5 | Legal skeleton | Legal review HITL |
| P6 | Motion polish + reduced-motion pass | Lighthouse mobile ≥85 target |
| P7 | Stakeholder preview publish | CEO sign-off |

---

## 13. Related artifacts

| File | Purpose |
|---|---|
| `bestonfx-framer-perfect-handoff-2026-06-01.md` | Step-by-step Framer operator guide |
| `bestonfx-framer-design-craft-playbook-2026-06-01.md` | Design/motion/Framer-craft/copy/anti-AI-slop deep-dive (Claude) |
| `docs/reports/home-ia-drift-handoff.md` | Why old Home IA was wrong |
| `docs/wireframes/spec.html` | Visual wireframe deck |
| `fizens-home-snapshot.md` | Template DOM snapshot |
| `prompts/workshop-components.md` | Workshop prompts |

---

## Changelog

| Date | Change |
|---|---|
| 2026-06-01 | Initial deep research — supersedes ad-hoc poc-map Home order; wireframes win |
