# Framer MCP Master Prompt - BestonFX x Fizens

> Safe operator protocol for rebuilding the BestonFX Framer POC from the purchased Fizens template.
>
> **Do not paste this whole document as one build command.** Use one phase at a time. Each phase has a required `STOP` checkpoint before the next write step.
>
> Last revised: 2026-06-03 by Codex after Framer safety review.

---

## 0. Source Of Truth

Read these before touching Framer:

1. `docs/research/bestonfx-framer-source-of-truth-2026-06-01.md`
2. `docs/wireframes/sitemap.md`
3. `docs/wireframes/pages/home.md`
4. `docs/wireframes/generated/beston-fizens-wireframe-handoff.html`
5. `docs/framer-poc-map.md` only for Fizens inventory, not final IA

Priority order:

```text
User latest instruction
-> docs/research/bestonfx-framer-source-of-truth-2026-06-01.md
-> docs/wireframes/*
-> generated handoff HTML
-> Fizens template inventory
```

Locked public CTA pair:

```text
Primary: เปิดบัญชี
Secondary: ทัก LINE OA ติดต่อ admin
```

Locked Home angle:

```text
H1: Trade Smarter Not Harder
Subhead: เทรดบน MT5 พร้อม Rebate $5/lot, เริ่มได้แบบ No Minimum และมีทีมไทยคุยผ่าน LINE OA 24/7
```

Confirmed business facts:

```text
Rebate: $5/lot for eligible trading volume
Rebate payout: Every Monday / ทุกวันจันทร์
Minimum deposit: No Minimum
Support: Thai Support 24/7 via LINE OA
Regulatory proof: FSCA/MSB documents from old-site evidence only until registry wording is verified
```

Use `[verify]` or `รอยืนยันข้อมูลจากฝ่ายกำกับดูแลก่อนเผยแพร่` for anything not confirmed.

---

## 1. Non-Negotiable Framer Safety Rules

These rules override every build instruction below.

### 1.1 No Destructive Global Changes

Do not:

- remove or overwrite existing Fizens color styles globally
- remove or overwrite existing Fizens text styles globally
- apply a new color to all interactive elements in the project
- apply a new font/style to all existing text nodes in the project
- batch replace many pages or many top-level sections at once
- publish the site

Instead:

- create new styles prefixed with `Beston / ...`
- remap only the page or section currently being edited
- report exactly which nodes/styles were changed
- stop after each phase for screenshot review

### 1.2 No Full-Page Code Component Shell

Do not replace a native Fizens page with a full-page Code Component.

Forbidden patterns:

```text
BestonPageShell
single Code Component that renders the entire page
batch updateCodeFile / createCodeFile to replace full pages
```

Allowed code components only when native Framer is insufficient:

```text
small RiskDisclosureBar
small ticker behavior
small calculator mock
small terminal/mockup visual
small AIChatWidget mock
```

If a code component is needed, stop first and ask for approval with:

```text
Component name
Why native Framer is insufficient
Exact page/section where it will be inserted
Rollback plan
```

### 1.3 Preserve Fizens Structure

Default approach:

```text
duplicate or adapt existing Fizens sections
keep native Framer layers/components
hide unsafe proof sections instead of removing them
rename hidden layers with a clear prefix: GATED / ...
```

Do not delete original sections. Hide them or move them into a clearly named backup frame.

### 1.4 Thai Text Rendering

Thai text must remain in normal text layers.

Do not:

- split Thai words into per-character spans/layers
- use per-character animation on Thai text
- force uppercase transforms on Thai labels
- use mono fonts for Thai labels/body copy

Use:

```text
Prompt, Noto Sans Thai, or Framer-safe Thai font fallback
tracking: 0
line-height: readable, not compressed
whole Thai strings in one text layer
```

### 1.5 Compliance Guardrails

Do not introduce:

- guaranteed profit claims
- risk-free claims
- guaranteed IB income
- fake user counts
- fake ratings
- fake testimonials
- fake awards
- unverified license numbers
- unverified spread, execution, deposit, or withdrawal SLA claims
- public deposit CTA
- extra account tiers such as Pro, ECN, VIP, Raw Spread
- any regulator beyond FSCA/MSB unless current registry proof is provided

MSB must be described carefully as registration/evidence, not as a forex license.

All sample market/ticker data must be labeled:

```text
ตัวอย่าง - ไม่ใช่ราคาจริง
```

### 1.6 Asset Gate

Before building any visual-heavy section, confirm the asset exists inside Framer or is uploaded.

Required asset checks:

```text
hero-command-center.png
markets-universe.png
line-ai-support.png
LINE QR / LINE URL, if used
```

If an asset is missing, use a simple native Framer placeholder only for layout review and label it:

```text
Asset placeholder - waiting for approved visual
```

Do not pretend placeholder art is final.

---

## 2. Phase 0 Prompt - Audit Only

Copy this phase first. It must not write to Framer.

```text
You are connected to Framer MCP for the BestonFX x Fizens project.

PHASE 0 = AUDIT ONLY. Do not modify anything.

Tasks:
1. Identify the active Framer project name and current page list.
2. Identify the Home page and current top-level sections.
3. List current reusable components.
4. List current color styles.
5. List current text styles.
6. List current code files/components.
7. List available uploaded assets relevant to:
   - hero-command-center
   - markets-universe
   - line-ai-support
   - LINE QR / LINE URL
8. Confirm whether a manual Framer Version History checkpoint or duplicate project exists.

Safety constraints:
- Do not create, update, delete, hide, rename, move, or publish anything.
- Do not create or update code files.
- Do not batch edit any page or style.

Report:
- page inventory
- reusable component inventory
- styles inventory
- uploaded asset inventory
- missing assets
- backup/checkpoint status
- recommended first write phase

STOP after the report. Wait for approval before Phase 1.
```

---

## 3. Phase 1 Prompt - Safe Styles And Home Workspace

Only run after Phase 0 is approved.

```text
PHASE 1 = CREATE SAFE WORKSPACE. Modify only what is listed here.

Backup:
1. Confirm a manual Framer Version History checkpoint or duplicate project exists.
2. If not confirmed, STOP and ask the operator to create one.

Home workspace:
1. Work on a duplicated Home page or clearly recoverable Home draft.
2. Do not overwrite original Fizens layers without a visible backup.
3. Do not touch other pages.

Styles:
Create new styles only. Prefix all with `Beston /`.

Color styles:
- Beston / Primary: #0040c1
- Beston / Primary Light: #2970ff
- Beston / Blue Soft: #edf4ff
- Beston / Background: #ffffff
- Beston / Background Soft: #f7faff
- Beston / Border: #dbe6f7
- Beston / Text Primary: #0c1322
- Beston / Text Secondary: #64748b
- Beston / Success: #10B981
- Beston / Danger: #EF4444
- Beston / LINE Green: #06c755
- Beston / Risk Amber: #fff7ed
- Beston / Risk Ink: #9a5b00

Text styles:
- Beston / Display: Prompt or Thai-safe fallback, 56 desktop / 34 mobile, weight 800, tracking 0
- Beston / Section: Prompt or Thai-safe fallback, 40 desktop / 28 mobile, weight 700, tracking 0
- Beston / Card Title: Prompt or Thai-safe fallback, 24, weight 700
- Beston / Body: Prompt or Thai-safe fallback, 16, line-height 1.65
- Beston / Body Large: Prompt or Thai-safe fallback, 18, line-height 1.6
- Beston / Button: Prompt or Thai-safe fallback, 14, weight 600
- Beston / Legal: Prompt or Thai-safe fallback, 13, line-height 1.55
- Beston / Mono Number: SF Mono or system mono, 12, for numbers/status only

Do not remove Fizens styles.
Do not remap all existing text nodes.
Do not remap all buttons globally.

Report:
- created styles
- Home draft/backup location
- any blockers

STOP after Phase 1.
```

---

## 4. Phase 2A Prompt - Home Top Sections

Run only after Phase 1 is approved. Build top-of-page only.

```text
PHASE 2A = HOME TOP SECTIONS ONLY.

Scope:
- RiskDisclosureBar
- Navbar
- Hero / TerminalHero
- RegulatoryStrip

Rules:
- Use native Fizens layers/components where possible.
- Do not create a full-page Code Component.
- Do not touch pages other than Home draft.
- Do not delete original sections.
- Do not publish.

SECTION 00 - RiskDisclosureBar:
- Position before navbar, sticky or top-visible.
- Background: Beston / Risk Amber.
- Text: Forex/CFD และ Leverage มีความเสี่ยงสูง อาจทำให้สูญเสียเงินลงทุน โปรดศึกษาข้อมูลและความเสี่ยงก่อนตัดสินใจ
- Link: อ่านเพิ่มเติม -> /legal/risk-disclosure
- Mobile: 2 lines max, no CTA overlap.

SECTION 01 - Navbar:
- Keep Fizens nav structure.
- Links:
  - ทำไมต้อง beston -> /why-bestonfx
  - ตลาด -> /markets
  - บัญชี -> /accounts
  - เครื่องมือ -> /tools
  - พาร์ทเนอร์ -> /partners
  - ช่วยเหลือ -> /support
- Right actions:
  - เข้าสู่ระบบ -> text link
  - เปิดบัญชี -> primary pill
- Mobile: hamburger plus visible เปิดบัญชี pill.

SECTION 02 - Hero / TerminalHero:
- H1: Trade Smarter Not Harder
- Eyebrow: โบรกเกอร์ Forex/CFD เพื่อคนไทย
- Subhead: เทรดบน MT5 พร้อม Rebate $5/lot, เริ่มได้แบบ No Minimum และมีทีมไทยคุยผ่าน LINE OA 24/7
- Proof line: เทรดบน MT5 · Rebate $5/lot · รายละเอียดบัญชี [verify]
- Primary CTA: เปิดบัญชี
- Secondary CTA: ทัก LINE OA ติดต่อ admin
- Right visual: hero-command-center.png if uploaded.
- If asset is missing, use labeled placeholder and report it.
- Visual label: ตัวอย่างแดชบอร์ด - ไม่ใช่ข้อมูลจริง
- Motion: simple appear + subtle parallax only.
- Mobile: text first, CTAs full width, disable heavy parallax.

SECTION 03 - RegulatoryStrip:
- Label: ข้อมูลให้ตรวจสอบก่อนเริ่ม
- Badges:
  - FSCA
  - MSB
  - MetaTrader 5
  - บริษัท เบสตัน อินเตอร์เนชั่นแนล กรุ๊ป จำกัด [verify registry/เลขที่]
- No extra regulators unless registry proof is provided.
- 2x2 grid on mobile.

Report:
- sections modified
- Fizens sections reused/adapted
- assets used/missing
- desktop screenshot
- mobile screenshot
- any [verify] items

STOP after Phase 2A.
```

---

## 5. Phase 2B Prompt - Home Benefits And Decision Sections

Run only after Phase 2A screenshots are approved.

```text
PHASE 2B = HOME BENEFITS AND DECISION SECTIONS.

Scope:
- WhyBestonBento
- MarketsTicker
- AccountComparison preview

Rules:
- Home must not include the full TradingToolsGrid.
- Home must not include IB/partner estimator.
- Do not use fake live prices.
- Do not claim spread, execution speed, or license numbers unless verified.
- Do not delete Fizens sections; hide and rename unsafe leftovers.

SECTION 04 - WhyBestonBento:
- Title: ทำไมต้อง beston
- Asymmetric bento grid:
  - 1 large hero tile
  - 2 wide tiles
  - 3-4 mid tiles
- Style: white/soft-blue, Beston blue accents, rounded premium Fizens rhythm.

Tiles:
1. Cash Back
   Body: รับ Rebate $5/lot จากปริมาณการเทรดที่เข้าเงื่อนไข และจ่ายเป็นรอบทุกวันจันทร์
   Visual: rebate meter + cash-back receipt

2. No Minimum
   Body: เริ่มจาก Demo หรือบัญชีจริงได้โดยไม่มีขั้นต่ำ เลือกทุนตามระดับความเสี่ยงที่รับได้
   Visual: small balance card + first-order ticket

3. Thai Support 24/7
   Body: คุยกับทีมไทยผ่าน LINE OA เรื่องบัญชี เอกสาร MT5 และ Rebate ได้ตลอดเวลา
   Visual: LINE chat stack + 24/7 clock ring

4. Flexible Leverage
   Body: ปรับเลเวอเรจได้สูงสุด 1:1000 สำหรับคนที่เข้าใจ margin และความเสี่ยงแล้ว [verify]
   Visual: leverage slider + margin ratio

5. Fast Execution
   Body: ส่งคำสั่งบน MT5 ได้รวดเร็ว ลดจังหวะพลาดช่วงตลาดเคลื่อนไหวแรง [verify benchmark]
   Visual: order ticket + speed trail

6. License & Registration
   Body: มีเอกสาร FSCA/MSB และข้อมูลบริษัทให้ตรวจสอบก่อนตัดสินใจ; wording และเลขทะเบียนต้อง verify ก่อน publish
   Visual: document stack + registry cards

Motion:
- stagger 80-120ms
- transform/opacity only
- reduced-motion fallback
- no per-character Thai animation

SECTION 05 - MarketsTicker:
- Title: ทุกตลาดที่คุณอยากเทรด ครบในที่เดียว
- Label: ตัวอย่าง - ไม่ใช่ราคาจริง
- Chips:
  - EURUSD
  - XAUUSD
  - US30
  - USOIL
  - BTCUSD
- Optional sparklines are sample only and must be labeled.
- Auto-scroll may pause on hover/tap.

SECTION 06 - AccountComparison preview:
- H2: เลือกบัญชีง่าย ๆ แค่ 2 แบบ
- Sub: Standard สำหรับเทรดจริง ส่วน Demo Account สำหรับลองระบบและฝึกใช้ MT5 ด้วยเงินจำลอง

Standard card:
- Tag: บัญชีเทรดจริง
- Bullets:
  - เทรดจริงบน MT5 พร้อม Rebate $5/lot
  - [verify] Spread
  - [verify] Leverage
  - [verify] Commission
- CTA: เปิดบัญชี

Demo Account card:
- Tag: บัญชีทดลอง
- Bullets:
  - ลองระบบ ฝึกวางออเดอร์ ทำความคุ้นเคยกับ MT5
  - เงินจำลอง
  - ไม่มี Rebate
- CTA: ทัก LINE OA ติดต่อ admin

Link below cards:
- ดูรายละเอียดบัญชี -> /accounts

Report:
- sections modified
- hidden/gated Fizens leftovers
- desktop screenshot
- mobile screenshot
- [verify] items

STOP after Phase 2B.
```

---

## 6. Phase 2C Prompt - Home Lower Sections

Run only after Phase 2B screenshots are approved.

```text
PHASE 2C = HOME LOWER SECTIONS.

Scope:
- StepProcess
- Rebate FeatureSplit
- Gated Stats
- Gated Testimonials
- ArticleGrid teaser
- FAQ
- CTABanner
- Footer
- AIChatWidget mock

Rules:
- Hide unsafe stats/testimonials; do not delete.
- No fake proof.
- No hard conversion pressure on legal or risk content.
- Do not publish.

SECTION 07 - StepProcess:
- H2: เปิดบัญชีเสร็จใน 3 ขั้น ไม่ถึง 5 นาที
- Step 1: สมัคร - กรอกข้อมูลและยืนยันตัวตน (KYC)
- Step 2: ทัก LINE OA - คุยกับ admin เรื่องเอกสาร แพลตฟอร์ม และขั้นตอนบัญชี
- Step 3: เตรียม MT5 - ดาวน์โหลด MT5 และศึกษาความเสี่ยงก่อนเริ่มใช้งาน
- CTA: เปิดบัญชี
- Mobile: vertical timeline.

SECTION 08 - Rebate FeatureSplit:
- H2: ทุก lot ที่เข้าเงื่อนไข ได้ Rebate คืน
- Body: Rebate $5 ต่อ lot คิดจากปริมาณการเทรด ไม่ใช่ผลกำไร และจ่ายเป็นรอบทุกวันจันทร์
- Bullets:
  - Lot ค้างอย่างน้อย 1 นาที
  - BTCUSD/US30/USOIL คิด lot ÷ 10
  - เป็นเงินคืนจากปริมาณการเทรด ไม่ใช่สัญญากำไร
- CTA: ดูเงื่อนไข Rebate

SECTION 09 - Stats gated:
- Hide existing Fizens StaticsSection.
- Rename hidden layer: GATED / Stats - waiting for verified numbers.
- Do not create replacement stats.

SECTION 10 - Testimonials gated:
- Hide testimonial carousel and star-rating components.
- Rename hidden layer: GATED / Testimonials - waiting for real quotes and consent.
- Do not create replacement testimonials.

SECTION 11 - ArticleGrid teaser:
- H2: ความรู้ที่ใช้ได้จริง ก่อนเสียเงินจริง
- Cards:
  - เริ่มต้นใช้ MT5 ใน 10 นาที
  - จัดการความเสี่ยงก่อนวางออเดอร์แรก
  - Rebate ทำงานอย่างไร
- Use education-first copy.

SECTION 12 - FAQ:
- H2: ยังมีคำถาม?
- Questions:
  - beston กำกับดูแลโดยใคร?
  - ฝากขั้นต่ำเท่าไร?
  - ใช้แพลตฟอร์มไหน?
  - Rebate $5/lot คืออะไร?
  - ถอนเงินใช้เวลานานแค่ไหน? [verify]
- Link: ยังมีคำถาม? -> /support

SECTION 13 - CTABanner LineFirst:
- H2: พร้อมเทรดบนความจริงแล้วหรือยัง?
- Sub: เปิดบัญชี หรือทัก LINE OA ติดต่อ admin ก่อนก็ได้
- Primary CTA: ทัก LINE OA ติดต่อ admin
- Secondary CTA: เปิดบัญชี
- Optional QR only after official LINE URL/QR is verified.

SECTION 14 - Footer:
- Columns:
  - Company: เกี่ยวกับเรา, ติดต่อ
  - Products: ตลาด, บัญชี, เครื่องมือ, พาร์ทเนอร์
  - Help: ช่วยเหลือ, บทความ, คำถามที่พบบ่อย
  - Legal: การเปิดเผยความเสี่ยง, เงื่อนไขการใช้งาน, นโยบายความเป็นส่วนตัว, ข้อมูลกำกับดูแล
- Bottom:
  - Rebate $5/lot สำหรับรายการที่เข้าเงื่อนไข พร้อมทีมไทยทาง LINE และข้อมูลให้ตรวจสอบก่อนเริ่ม
  - บริษัท เบสตัน อินเตอร์เนชั่นแนล กรุ๊ป จำกัด
  - 111 ประดิษฐ์มนูธรรม แขวงลาดพร้าว กรุงเทพฯ 10230
  - support@bestonfx.com
  - full risk warning
- Remove or hide template credits from the public POC only if license permits.

SECTION 15 - AIChatWidget mock:
- Label: ผู้ช่วยอัตโนมัติ - ไม่ใช่คำแนะนำการลงทุน
- Mobile: must not cover footer legal links or CTAs.
- Mock only. Do not answer trading advice.

Report:
- sections modified
- gated sections and where they are hidden
- desktop screenshot
- mobile screenshot
- [verify] items
- anything blocked by missing assets/links

STOP after Phase 2C.
```

---

## 7. Phase 3 Prompt - Home QA Only

Run only after the Home build phases are approved.

```text
PHASE 3 = HOME QA ONLY.

Do not add new sections unless a clear defect is found.
Do not publish.

Check:
1. Desktop visual hierarchy.
2. Mobile layout and text wrapping.
3. Thai text rendering.
4. Sticky risk bar and nav do not overlap.
5. CTAs are visible and consistent.
6. No public deposit CTA.
7. No fake stats, testimonials, ratings, awards, or unverified claims.
8. All sample market data says: ตัวอย่าง - ไม่ใช่ราคาจริง
9. All [verify] items are visible where needed.
10. Reduced-motion fallback is enabled for heavy motion.
11. AIChatWidget does not cover legal links on mobile.
12. Footer includes legal links and risk warning.

Report:
- pass/fail checklist
- desktop screenshot
- mobile screenshot
- exact issues found
- proposed fixes, without applying them

STOP after QA report.
```

---

## 8. Other Pages - One Page At A Time

Do not run this until Home is approved.

Pick only one page per MCP run:

| Page | Fizens source | Scope |
| --- | --- | --- |
| `/why-bestonfx` | `/about` | trust story, regulator/entity proof, support story, FAQ, CTA |
| `/markets` | `/features` | market categories, sample labels, risk notes, CTA |
| `/accounts` | `/pricing` | Standard + Demo only, KYC steps, account FAQs |
| `/tools` | `/features` + `/integration` + `/download` | MT5, Rebate/Pip/Margin calculators, Economic Calendar, education disclaimers |
| `/partners` | `/pricing` + `/contact` | IB application, payout info, estimator mock only with clear disclaimer |
| `/support` | `/contact` | LINE-first support, email, office, FAQ, AI helper label |
| `/articles` | `/articles` | education CMS grid, category chips, soft CTA |
| `/legal/risk-disclosure` | `/term-and-conditions` | readable legal page, no conversion pressure |
| `/legal/terms` | `/term-and-conditions` | terms page |
| `/legal/privacy` | `/privacy-policy` | privacy page |
| `/regulatory-disclosures` | custom | FSCA/MSB evidence and verified wording only |
| `/404` | `/404` | restyle only |

For each page, use this prompt:

```text
Build exactly one page: [ROUTE].

Rules:
- Do not touch other pages.
- Reuse Fizens native structure where possible.
- Create no full-page Code Component.
- Do not delete original sections; hide and rename unsafe layers.
- Keep the public CTA pair: เปิดบัญชี / ทัก LINE OA ติดต่อ admin.
- Keep RiskDisclosureBar, Navbar, Footer.
- No fake stats/testimonials/ratings.
- No unverified license numbers, spreads, execution speed, or SLAs.
- Add [verify] where source data is missing.
- Do not publish.

Report:
- page modified
- Fizens source reused
- components adapted
- desktop screenshot
- mobile screenshot
- [verify] items
- blockers

STOP after this one page.
```

---

## 9. Tools Page Detail - Economic Calendar

Economic Calendar belongs on `/tools`, not Home.

Use this section only after `/tools` is the active one-page task.

```text
Add Economic Calendar section on /tools.

Goal:
- Help traders check upcoming market-moving events.
- Make it useful without giving trading advice.

Implementation preference:
1. TradingView widget or approved third-party embed if Framer supports it cleanly.
2. If live embed is blocked, use a static preview card labeled as placeholder.

Copy:
- H2: Economic Calendar
- Sub: เช็คข่าวสำคัญที่อาจทำให้ตลาดผันผวน ก่อนวางแผนการเทรด
- Label: ข้อมูลจากผู้ให้บริการภายนอก โปรดตรวจสอบซ้ำก่อนใช้งานจริง
- Disclaimer: ใช้เพื่อการศึกษา ไม่ใช่คำแนะนำการลงทุน

UX:
- show date/time, currency, impact, event name
- highlight High impact events
- mobile table must scroll horizontally or collapse into cards
- no fake live data unless connected to a real widget/source

Report data source and embed status.
STOP after /tools page report.
```

---

## 10. Final Compliance Checklist

Before asking for stakeholder review, verify:

```text
RiskDisclosureBar visible on every public page
No public deposit CTA
Primary CTA remains เปิดบัญชี
Secondary CTA remains ทัก LINE OA ติดต่อ admin
Only Standard and Demo Account are shown
No fake stats
No fake testimonials
No star ratings
No guaranteed outcome claims
No unverified regulator/license numbers
No unverified spread/execution/SLA claims
All sample market data is labeled
MSB is not described as a forex license
AI widget says it is not investment advice
Legal links exist in footer
Mobile responsive reviewed
Reduced motion reviewed
No full-page Code Component shell was used
No batch page replacement was used
No publish action was taken
```

---

## 11. Report Format After Every Phase

Use this exact report format:

```text
Phase completed:

Changed:
- ...

Reused Fizens components:
- ...

Created new styles/components:
- ...

Hidden/gated items:
- ...

Assets used:
- ...

Missing / verify:
- ...

Screenshots:
- Desktop: [attached or link]
- Mobile: [attached or link]

Rollback notes:
- ...

Next recommended phase:
- ...

STOP. Waiting for approval.
```
