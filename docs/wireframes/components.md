# Component Library — beston

> **Single source of truth** for every reusable section across all wireframes.
> Every page in `pages/*.md` references these components by name. Change a component here → it changes everywhere.
> **Brand direction:** light surfaces + royal blue `#0040c1` (Fizens-native, confirmed 2026-05-29) + Prompt font. Gold/dark-navy dropped.
> **Compliance is structural, not optional** — see "Compliance-bound components" below.
> **Latest research:** `docs/research/bestonfx-framer-source-of-truth-2026-06-01.md`.

---

## How to read this file

Each component lists:
- **Purpose** — what job it does
- **Variants** — named layout options pages can pick from
- **Anatomy** — the elements inside
- **Responsive collapse** — how it reflows desktop → mobile
- **Reuse** — which pages use it

Wireframes reference components like `[Hero / TerminalHero]` or `[FeatureGrid / 3-col]`.

---

## Global tokens (shared by all components)

| Token | Value |
|---|---|
| Container max-width | `1180px` |
| Section padding | `120px` desktop / `64px` mobile |
| Grid | 8px base |
| Card radius | `24px` · pill `999px` · input `14px` |
| Primary color | Royal blue `#0040c1` |
| Conversion color | LINE green `#06C755` (CTA only) |
| Risk/compliance color | Amber `#f59e0b` on `#fff7ed` (isolated from brand blue) |
| Font | Prompt (Thai + Latin) |
| Breakpoints | Desktop `1200` · Tablet `768` · Phone `390` |

**Copy rules (enforced in every component):**
- Body copy uses lowercase **"beston"**, never "BestonFX".
- **No** guaranteed-profit / risk-free / "ได้แน่นอน" language.
- Platform = **MT5** primary. No MT4/cTrader in marketing copy unless compliance re-approves. `[verify platform list]`
- Every unverified figure carries a `[verify]` flag and must pass `claim_registry` before publish.
- Risk warning must be reachable from every page (bar + footer).

---

## 1. Navbar
**Purpose:** Persistent wayfinding + always-visible primary conversion CTA.
**Variants:**
- `Default` — logo left · nav center · CTA cluster right
- `Condensed` — appears after `scrollY > 40px`, reduced height + blurred white bg (motion M9)

**Anatomy:** logo · nav links (เหตุผลที่เลือก beston · ตลาด · บัญชี · เครื่องมือ · พาร์ทเนอร์ · ช่วยเหลือ) · `เข้าสู่ระบบ` (text) · `เปิดบัญชี` (primary blue pill).
**Responsive collapse:** Tablet/Phone → links collapse into hamburger drawer; `เปิดบัญชี` pill stays visible in the bar (never hidden behind the menu).
**Reuse:** ALL pages.

---

## 2. RiskDisclosureBar `[compliance-bound]`
**Purpose:** Mandatory risk warning, sticky above the fold — international-regulator convention (FCA/CySEC/ASIC).
**Variants:** `Sticky` (top, above Navbar) · `Inline` (legal page, full text).
**Anatomy:** amber shield icon · one-line risk warning · `อ่านเพิ่มเติม` link → `/legal/risk-disclosure`.
**Copy (validated):** `Forex/CFD และ Leverage มีความเสี่ยงสูง อาจทำให้สูญเสียเงินลงทุน โปรดศึกษาข้อมูลและความเสี่ยงก่อนตัดสินใจ`
**Responsive collapse:** Desktop one line (40px) → Phone two lines (auto height), icon stays.
**Reuse:** ALL pages (sticky). Legal page also shows inline full text.

---

## 3. Hero
**Purpose:** First-impression brand + value proposition + primary CTA. Highest-leverage section.
**Variants:**
- `TerminalHero` — left copy / right device-mockup ("trading terminal" preview). Home only. Motion: bloom-reveal + cursor-depth + scroll-scrub.
- `SplitHero` — left copy / right single supporting visual. Why / Markets / Partners.
- `CenteredHero` — centered headline + subhead + CTA, compact. Utility/content pages (Tools, Support, Articles).

**Anatomy:** eyebrow label · H1 (max 2 lines) · subhead · primary CTA + secondary CTA · proof line (`[verify]` if numeric) · optional visual.
**Responsive collapse:** split layouts stack to single column (copy first, visual second); H1 drops `56→34px`; CTAs go full-width stacked.
**Reuse:** every page has exactly one Hero.

---

## 4. RegulatoryStrip (Logo Cloud variant) `[compliance-bound]`
**Purpose:** Trust signal — regulators + platform badges. Replaces generic "brand partners" logo cloud.
**Anatomy:** muted strip · label `กำกับดูแล & แพลตฟอร์ม` · badges: FSCA · CySEC · MSB · MetaTrader 5. License numbers `[verify]`.
**Responsive collapse:** 4-across → 2×2 grid on phone; badges keep equal size.
**Reuse:** Home, Why, Accounts.

---

## 5. FeatureSplit
**Purpose:** Explain one feature/benefit with supporting visual; alternating image side builds rhythm.
**Variants:** `ImageRight` · `ImageLeft` (alternate down the page).
**Anatomy:** eyebrow · H2 · body (2–3 lines) · bullet list (3) · text link or CTA · visual panel.
**Responsive collapse:** stacks to single column, visual below copy regardless of desktop side.
**Reuse:** Why, Markets, Tools, Partners.

---

## 6. FeatureGrid
**Purpose:** Show 3–6 parallel features/benefits at a scannable glance.
**Variants:** `3-col` · `2-col` · `4-col`.
**Anatomy:** section header (eyebrow + H2 + optional subhead) · cards (icon · title · 1-line body).
**Responsive collapse:** 3/4-col → 2-col tablet → 1-col phone (stagger reveal preserved).
**Reuse:** Home, Why, Markets, Tools, Support.

---

## 7. Stats `[compliance-bound — gated]`
**Purpose:** Quantified credibility (users, withdrawals, instruments).
**Anatomy:** 3-col counters · big number + label.
**⚠ Status:** **DISABLED until every figure is verified.** No fake numbers. Count-up animation (M6) stays off until approval.
**Responsive collapse:** 3-col → stacked rows on phone.
**Reuse:** Home (gated), Why (gated).

---

## 8. StepProcess
**Purpose:** Reduce friction by showing how-it-works in 3–4 numbered steps.
**Anatomy:** section header · numbered step cards (number · title · 1-line body) · trailing CTA.
**Responsive collapse:** horizontal row → vertical timeline on phone.
**Reuse:** Home (เปิดบัญชี 3 ขั้น), Accounts, Partners.

---

## 9. AccountComparison (Pricing variant)
**Purpose:** Let users compare account types and self-select → drives `เปิดบัญชี`.
**Anatomy:** 2 columns (Standard · Demo Account) · feature rows (purpose · real/virtual funds · spread/commission `[verify]` · leverage `[verify]` · rebate eligibility · platform MT5) · per-column CTA.
**Responsive collapse:** 2-col table → stacked cards on phone (one account per card, sticky CTA).
**Reuse:** Accounts (full), Home (preview = 2 cards, link to full).

---

## 10. MarketsTicker (Gallery variant)
**Purpose:** Show tradable instruments + live-feel price motion.
**Anatomy:** horizontal marquee strip · instrument chips (symbol · price · % change) labelled `ตัวอย่าง — ไม่ใช่ราคาจริง` until live feed connected `[verify data source]`.
**Responsive collapse:** marquee speed unchanged; chips shrink; pause-on-hover → tap-to-pause on touch.
**Reuse:** Home, Markets.

---

## 11. Calculator (Tool block)
**Purpose:** Interactive utility (rebate estimator, IB commission, pip/margin calc) — engagement + lead intent.
**Variants:** `RebateEstimator` · `IBCommissionEstimator` · `PipCalculator`.
**Anatomy:** input fields · live result panel · disclaimer `ผลลัพธ์เป็นการประมาณการ ไม่ใช่การการันตี` · CTA.
**Responsive collapse:** side-by-side input/result → stacked (inputs top, result below); result panel sticky on scroll.
**Reuse:** Tools, Partners (IB).

---

## 12. Testimonial `[compliance-bound — gated]`
**Purpose:** Social proof via real customer quotes.
**⚠ Status:** **DISABLED until real, consented testimonials exist.** No invented quotes/ratings.
**Anatomy (when enabled):** quote · name + role · optional avatar · source attribution.
**Responsive collapse:** carousel → single card swipe on phone.
**Reuse:** Home (gated), Why (gated).

---

## 13. FAQ
**Purpose:** Remove objections + capture long-tail search (FAQPage JSON-LD).
**Anatomy:** section header · accordion rows (Q · expandable A) · trailing "ยังมีคำถาม?" → Support CTA.
**Responsive collapse:** full-width accordion on all sizes; tap target ≥44px.
**Reuse:** Home (top 5), Accounts, Tools, Partners, Support (full set), Markets.

---

## 14. ArticleGrid (Blog Teaser variant)
**Purpose:** Surface education content (CMS-driven) → SEO + trust + return visits.
**Variants:** `Teaser` (3–4 latest, on Home) · `Full` (paginated grid, on Articles).
**Anatomy:** card (cover · category chip · title · date · read-time) · hover lift.
**Responsive collapse:** 4-col → 2-col tablet → 1-col phone.
**Reuse:** Home (teaser), Articles (full), Why (related links).

---

## 15. CTABanner
**Purpose:** Mid/end-of-page conversion push. LINE-first for Thai market.
**Variants:** `LineFirst` (LINE green primary + เปิดบัญชี secondary) · `AccountFirst` (เปิดบัญชี primary + LINE secondary).
**Anatomy:** H2 · 1-line subhead · LINE OA QR/link `[verify]` · primary + secondary CTA.
**Responsive collapse:** horizontal → stacked; QR shows on desktop, tap-to-add-LINE button on phone.
**Reuse:** every page (1 banner before footer minimum).

---

## 16. SupportChannels (Contact variant)
**Purpose:** Make help reachable in <1 click; LINE-first.
**Anatomy:** channel cards (LINE OA · email `support@bestonfx.com` · hours `[verify]`) · contact form (optional) · office address.
**Address (validated):** `บริษัท เบสตัน อินเตอร์เนชั่นแนล กรุ๊ป จำกัด · 111 ประดิษฐ์มนูธรรม แขวงลาดพร้าว กรุงเทพฯ 10230`
**Responsive collapse:** card row → stacked; form full-width.
**Reuse:** Support (full), Footer (condensed links).

---

## 17. Footer `[compliance-bound]`
**Purpose:** Secondary nav + legal + full risk disclosure + company identity.
**Anatomy:** column links (บริษัท · ผลิตภัณฑ์ · ช่วยเหลือ · กฎหมาย) · LINE/social · company legal name + address · **full risk warning block** · regulator line + license numbers `[verify]` · copyright.
**Responsive collapse:** 4-column → accordion or stacked columns on phone; risk block stays full-text.
**Reuse:** ALL pages.

---

## 18. AIChatWidget (floating)
**Purpose:** Always-available assist → deflect to LINE OA or answer FAQ.
**Anatomy:** floating bubble (bottom-right) · expand panel · labelled `ผู้ช่วยอัตโนมัติ — ไม่ใช่คำแนะนำการลงทุน`.
**Responsive collapse:** bubble shrinks; panel becomes near-fullscreen sheet on phone.
**Reuse:** ALL public pages (not legal/dashboard).

---

## Compliance-bound components (must-pass before publish)

| Component | Gate |
|---|---|
| RiskDisclosureBar | Exact validated copy, sticky, on every page |
| RegulatoryStrip | License numbers `[verify]` before showing |
| Stats | DISABLED until all numbers verified |
| Testimonial | DISABLED until real consented quotes |
| Footer | Full risk block + legal entity mandatory |
| MarketsTicker | Labelled "ตัวอย่าง" until live feed connected |

---

## Section-reuse matrix (consistency check)

| Component | Home | Why | Markets | Accounts | Tools | Partners | Support | Articles | Legal |
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| Navbar | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| RiskDisclosureBar | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Hero | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| RegulatoryStrip | ✓ | ✓ | – | ✓ | – | – | – | – | – |
| FeatureSplit | – | ✓ | ✓ | – | ✓ | ✓ | – | – | – |
| FeatureGrid | ✓ | ✓ | ✓ | – | ✓ | ✓ | ✓ | – | – |
| Stats (gated) | ◐ | ◐ | – | – | – | – | – | – | – |
| StepProcess | ✓ | – | – | ✓ | – | ✓ | – | – | – |
| AccountComparison | ✓ | – | – | ✓ | – | – | – | – | – |
| MarketsTicker | ✓ | – | ✓ | – | – | – | – | – | – |
| Calculator | – | – | – | – | ✓ | ✓ | – | – | – |
| Testimonial (gated) | ◐ | ◐ | – | – | – | – | – | – | – |
| FAQ | ✓ | – | ✓ | ✓ | ✓ | ✓ | ✓ | – | – |
| ArticleGrid | ✓ | ✓ | – | – | – | – | – | ✓ | – |
| CTABanner | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | – |
| SupportChannels | – | – | – | – | – | – | ✓ | – | – |
| Footer | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| AIChatWidget | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | – |

✓ = used · ◐ = gated (disabled until verified) · – = not used
