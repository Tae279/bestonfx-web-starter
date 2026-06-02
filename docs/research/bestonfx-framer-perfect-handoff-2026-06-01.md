# BestonFX Framer Build Handoff — Operator Guide

**Source of truth:** 1 June 2026 · Cursor  
**Audience:** Founder / Framer operator / agency  
**Prerequisite read:** `bestonfx-framer-source-of-truth-2026-06-01.md` + `bestonfx-framer-perfect-research-2026-06-01.md`  
**Polished HTML dashboard:** `docs/research/bestonfx-framer-perfect-handoff-2026-06-01.html`  
**Template:** [Fizens](https://fizens.framer.ai/) → project name `BestonFX Framer POC v0.1`

---

## Quick start (30-second brief)

Build a **light, royal-blue, Prompt-font** broker site from Fizens. Home = **13 sections** (no Tools, no IB). Every page funnels to **`เปิดบัญชี`** or **`ทัก LINE OA ติดต่อ admin`**. Risk bar sticky on all pages. Motion: **one hero wow + scroll reveals** — not carnival.

---

## Phase 0 — Before touching canvas

- [ ] Duplicate Fizens template → rename `BestonFX Framer POC v0.1`
- [ ] Connect Framer MCP (optional) — audit pages/components
- [ ] Read `docs/research/bestonfx-framer-source-of-truth-2026-06-01.md` (latest source-of-truth index)
- [ ] Read `docs/wireframes/pages/home.md` (section order is law)
- [ ] Confirm brand: light theme, `#0040c1`, **not** dark navy/gold legacy
- [ ] Run compliance baseline: `npm run compliance:scan` on any new Thai copy

---

## Phase 1 — Global cleanup (Day 1)

### Delete / replace immediately

| Fizens artifact | Action |
|---|---|
| Lemon Squeezy “Get Template” buttons | Delete |
| `madebykota.com/buy/...` links | Delete |
| “Trusted by millions users…” | Delete |
| StaticsSection / “See Your Wealth Grow” | Remove from all pages |
| Testimonial + Star Rating | Hide until legal provides quotes |
| Finance-app copy (budgeting, debt, tax) | Replace with broker copy |
| Pink accent tokens | Remove |
| `/changelog`, `/jobs`, `/team-member`, `/overview` | Unpublish or delete |

### Global components to create first

Create these Framer components before page assembly:

1. **RiskDisclosureBar** — sticky top, amber `#fff7ed`, full validated copy
2. **Navbar** — Default + Condensed variant (scroll > 40px)
3. **Footer** — legal entity, address, full risk block
4. **CTABanner** — LineFirst + AccountFirst variants

### Workshop component queue

Use `prompts/workshop-components.md` for exact Workshop prompts and acceptance specs.

| Order | Workshop component | Place in Framer | Rule |
|---:|---|---|---|
| 1 | RiskDisclosureBar | All pages above Navbar | No dismiss in POC |
| 2 | TerminalHero | Home Hero | Sample data labels required |
| 3 | TrustStackCards | Home trust pillars + `/why-bestonfx` | No fake stats/testimonials |
| 4 | LineSupportCTA | Home final CTA + `/support` | No personalized trading advice |
| 5 | TradingToolsGrid | `/tools` only | Do not place full tools grid on Home |
| 6 | IBCommissionEstimatorMock | `/partners` only | Mock only; no real rate/income output |
| 7 | AIChatBotMock | Floating helper | General info only; route to LINE |

**Font remap:** Poppins / Instrument Sans → **Prompt** (all Text Styles).

**Color remap:**

| Token | Hex |
|---|---|
| Primary | `#0040c1` |
| Primary hover | `#2970ff` |
| Surface | `#ffffff`, `#fafafa` |
| Ink text | `#171717`, `#4b5563` |
| LINE CTA | `#06C755` |
| Risk | `#b45309` on `#fff7ed` |

---

## Phase 2 — Home page build (Day 2–4)

### Section build order

Build top-to-bottom. Do not skip Risk bar.

| Step | Component | Fizens source | Framer notes |
|---:|---|---|---|
| 1 | RiskDisclosureBar | New Workshop | Fixed position above nav |
| 2 | Navbar | Main Navbar | Add Condensed variant |
| 3 | TerminalHero | HeroSection | Replace all copy; terminal mock right |
| 4 | RegulatoryStrip | Logo strip / About | 4 badges, muted bg |
| 5 | FeatureGrid 3-col | FeaturesSection | Trust pillars — not feature dump |
| 6 | MarketsTicker | New / Gallery | Marquee; label mock data |
| 7 | AccountComparison preview | PricingSection | **2 cards only** + link to /accounts |
| 8 | StepProcess | HowItWorkSection | 3 steps + CTA |
| 9 | FeatureSplit Rebate | BenefitSection row 1 | ImageRight; T&C disclaimer |
| 10 | ArticleGrid teaser | BlogSection | 3–4 CMS cards |
| 11 | FAQ | FaqSection | Top 5 questions |
| 12 | CTABanner LineFirst | Final CTA block | LINE primary |
| 13 | Footer | Footer | Compliance block |
| — | AIChatWidget | New | Fixed bottom-right |

### Copy paste blocks (Home)

**Risk bar:**
```
Forex/CFD และ Leverage มีความเสี่ยงสูง อาจทำให้สูญเสียเงินลงทุน โปรดศึกษาข้อมูลและความเสี่ยงก่อนตัดสินใจ
```

**Hero:**
```
Eyebrow: โบรกเกอร์ Forex/CFD เพื่อคนไทย
H1: Trade Smarter Not Harder
Sub: เทรดบน MT5 ด้วยข้อมูลที่ชัดเจนขึ้น: ต้นทุน, Rebate ตาม T&C, ความเสี่ยงที่ควรรู้ และทีมไทยที่คุยผ่าน LINE OA ได้
Risk note: การเทรดมีความเสี่ยง — เราอยากให้คุณรู้ก่อน ไม่ใช่รู้ทีหลัง
Proof: เทรดบน MT5 · Rebate ตาม T&C · รายละเอียดบัญชี [verify]
Label on mock: ตัวอย่างแดชบอร์ด — ไม่ใช่ข้อมูลจริง
CTA primary: เปิดบัญชี
CTA secondary: ทัก LINE OA ติดต่อ admin
```

**CTA banner close:**
```
H2: พร้อมเทรดบนความจริงแล้วหรือยัง?
Sub: เปิดบัญชี หรือทัก LINE OA ติดต่อ admin ก่อนก็ได้ — เราไม่เร่งคุณ
Primary: ทัก LINE OA ติดต่อ admin
Secondary: เปิดบัญชี
```

### Home — explicit exclusions

Do **not** insert on Home:

- `TradingToolsGrid` → build on `/tools` only
- `IBCommissionEstimatorMock` → build on `/partners` only
- Stats counters (gated)
- Testimonial carousel (gated)
- Third pricing tier / SaaS “Advanced plan”

---

## Phase 3 — Primary pages (Day 5–8)

| Framer page | Clone from Fizens | Wireframe spec |
|---|---|---|
| `/why-bestonfx` | `/about` | `pages/why-bestonfx.md` |
| `/markets` | `/features` | `pages/markets.md` |
| `/accounts` | `/pricing` | `pages/accounts.md` |
| `/tools` | `/features` + new | `pages/tools.md` — **full calculator grid here** |
| `/partners` | `/about` + new | `pages/partners.md` — **IB estimator here** |
| `/support` | `/contact` | `pages/support.md` |
| `/articles` | `/articles` | `pages/articles.md` |

Each page minimum: RiskBar → Nav → Hero → 2–4 sections → CTABanner → Footer → AIChatWidget.

---

## Phase 4 — Motion implementation

### Framer Scroll Transform recipes

**Section fade-rise (default):**
- While in view: Opacity 0 → 1, Y 40 → 0
- Easing: ease-out, duration ~0.6s
- Stagger children: 0.08s

**Navbar Condensed:**
- Scroll position > 40px → switch to Condensed variant
- Add backdrop blur 12px, height −8px

**Hero terminal (Tier A):**
- On load: opacity, scale 0.92→1, rotateX 8→0
- Scroll 0–45vh: background layer Y 0→28, foreground Y 0→−36
- Desktop: mouse move → subtle rotateX/Y (±4°)

**MarketsTicker:**
- Infinite horizontal motion, slow (40–60s loop)
- Hover/tap: pause

**Reduced motion variant:**
- Duplicate key sections as “Reduced” component set
- Use `@media (prefers-reduced-motion: reduce)` code override OR manual variant toggle
- Keep opacity fades only; disable parallax and marquee

Full motion inventory: `docs/research/bestonfx-framer-motion-research-checklist-2026-05-31.html`

---

## Phase 5 — CMS & content

### Articles collection fields

| Field | Type |
|---|---|
| title | string |
| slug | slug |
| category | enum (Advice, Risk, Platform, Rebate) |
| cover | image |
| publishedAt | date |
| readTime | number |
| body | rich text |

Seed 3 articles (titles from wireframe — compliance review before publish).

---

## Phase 6 — QA checklist (must pass)

### Compliance

- [ ] Risk bar visible before first CTA on every page
- [ ] No fake user counts, star ratings, profit testimonials
- [ ] All mocks labelled `ตัวอย่าง`
- [ ] Rebate copy includes `ไม่ใช่สัญญากำไร`
- [ ] AI widget disclaimer present
- [ ] Footer full risk + entity name
- [ ] `npm run compliance:scan` clean on changed copy

### IA

- [ ] Home has **no** Tools grid
- [ ] Home has **no** IB estimator
- [ ] `/tools` has calculators + MT5 section
- [ ] `/partners` has IB estimator
- [ ] Nav matches 6 items + เปิดบัญชี pill

### Visual

- [ ] Prompt font everywhere
- [ ] `#0040c1` primary — no gold, no dark-navy page bg
- [ ] LINE green only on LINE CTAs
- [ ] Thai line breaks readable at 390px

### Motion

- [ ] Hero wow works once — not distracting on re-scroll
- [ ] Reduced-motion path tested
- [ ] No horizontal scroll 320–430px
- [ ] AI bubble doesn’t cover risk bar or footer CTAs

### Performance

- [ ] Hero image optimized (<200KB target)
- [ ] Unused Fizens pages removed from sitemap
- [ ] Mobile Lighthouse performance ≥85 (stretch goal)

---

## Handoff tags (for production migration)

Tag each Framer section:

| Tag | Meaning |
|---|---|
| `reuse-in-next` | Restyle only in Next.js |
| `rebuild-in-next` | Reimplement in code |
| `visual-only` | Mock / demo — no backend |
| `needs-legal-review` | Block publish until legal OK |

| Section | Tags |
|---|---|
| RiskDisclosureBar | rebuild-in-next, needs-legal-review |
| TerminalHero | rebuild-in-next |
| RegulatoryStrip | needs-legal-review |
| Calculators | visual-only |
| IB estimator | visual-only, needs-legal-review |
| AIChatWidget | visual-only, needs-legal-review |

---

## Open dependencies (HITL)

| ID | Blocks |
|---|---|
| D001 | Footer / regulatory wording |
| D002 | Account types, spreads, fees on `/accounts` |
| D004 | Real IB commission rates |
| D005 | CTA priority if changed |
| D006 | Support hours copy |
| D007 | Thai-only vs bilingual |

Use placeholder: `รอยืนยันข้อมูลจากฝ่ายกำกับดูแลก่อนเผยแพร่`

---

## Fizens → Beston section map (Home) — one glance

```
Fizens HeroSection          → TerminalHero
Fizens partner logos        → RegulatoryStrip (replace brands with regulators)
Fizens About headline       → (drop or merge into FeatureGrid header)
Fizens FeaturesSection      → FeatureGrid trust 3-col
Fizens AdditionSection      → ❌ NOT Home → /tools
Fizens BenefitSection       → FeatureSplit (Rebate)
Fizens StaticsSection       → ❌ REMOVED (gated Stats)
Fizens HowItWorkSection     → StepProcess
Fizens Testimonial          → ❌ GATED OFF
Fizens PricingSection       → AccountComparison preview (2 cards)
Fizens BlogSection          → ArticleGrid teaser
Fizens FaqSection           → FAQ
Fizens pre-footer CTA       → CTABanner LineFirst
Fizens Footer               → Footer (legal-heavy)
```

---

## After POC approval

1. CEO/stakeholder sign-off on Framer preview URL
2. Export section map + copy matrix to Next.js team
3. Do **not** duplicate tracking/content between Framer and Next.js live
4. Production rebuild follows wireframes + this handoff

---

## Document index

| File | Role |
|---|---|
| `bestonfx-framer-perfect-research-2026-06-01.md` | Why / research |
| `docs/wireframes/pages/home.md` | Home copy + anatomy |
| `docs/framer-poc-map.md` | Component inventory (Home order synced Jun 2026) |
| `docs/reports/home-ia-drift-handoff.md` | Historical mistake log |
| `prompts/workshop-components.md` | Workshop prompts |
