# P0 Image Generation Handoff — ChatGPT + reference-first

_2026-06-01 · engine: ChatGPT (decision ก) · brand blue `#0040c1`_

Workflow ต่อ asset: **แนบ reference → วาง prompt (assemble แล้วด้านล่าง) → generate → QA (accept/reject) → upscale → export WebP.**
ทำทีละ asset, อย่ายิงรวด. ลำดับ: **Hero → Trust → Markets.**

Pack ต้นทาง: `docs/research/bestonfx-chatgpt-image-prompt-pack-2026-06-01.html`

---

## Reference library

| Ref | ชนิด | ใช้ยังไง |
|---|---|---|
| `assets/references/ref-fizens-home-base.png` | **attachable file** (licensed Fizens) | brand + layout rhythm + card style + light-blue palette — แนบทุก asset |
| [Revolut Business — Treasury](https://mobbin.com/screens/d46c7d63-8792-46eb-9408-f3191f2df02e) | Mobbin (view/screenshot) | **Hero terminal target** — light theme, clean cards, watchlist/alerts empty states. ใกล้ brand สุด |
| [Kraken Pro](https://mobbin.com/screens/dc79dfe7-9770-4b56-904d-865de83ba119) | Mobbin (view/screenshot) | terminal widget density (market watch + order panel). **dark → ให้ recolor เป็น light ตาม prompt** |
| [Fey](https://mobbin.com/screens/04809e37-04f0-4946-8f83-762df8e7bde6) | Mobbin (view/screenshot) | **Markets target** — markets list rows + sector/watchlist. dark → recolor |

> Mobbin = reference เท่านั้น (ห้าม copy 1:1). prompt บังคับ abstract/non-functional อยู่แล้ว → output ต้องไม่เหมือน UI เจ้าไหนตรงๆ.

### External design inspiration — curated (เปิดดูเองแล้ว 2026-06-01)

> ⚠ **Forex design refs เกือบทั้งหมดผิด compliance เรา** — เปิดดูแล้วยืนยัน: เต็มไปด้วย win-rate %, fake stats, Trustpilot, award badge, gold coin, "grow/guaranteed" hype. **ใช้ได้แค่ layout / spacing / light-treatment → recolor `#0040c1` + ตัด numbers/badges/claims ทิ้งหมด. ห้ามลอก content.**

**Tier 1 — ใกล้ BestonFX สุด (light, broker-sober)**
- **Mobbin · Revolut Business** — light, clean cards, watchlist/alerts empty states, ไม่มี hype. compliance-safe. → Hero anchor.
  https://mobbin.com/screens/d46c7d63-8792-46eb-9408-f3191f2df02e
- **Dribbble · Ivo Ivanov — "Forex trade ideas that actually work"** — light lavender/white, white cards, microcharts, calm. layout ดี. ⚠ ตัด "71.2% / +70 pips / winning trades" (banned). อยู่ใน https://dribbble.com/search/forex-landing-page (popular, ใบแรกๆ)

**Tier 2 — layout เท่านั้น (recolor light)**
- **Behance · CALFINEX (Forex Broker Website)** — blue broker landing, device-mockup hero, white feature-card sections (มี navy panels = ตัด). → Hero/Trust/feature rhythm.
  https://www.behance.net/gallery/176761641/Forex-Broker-Website-Design
- **Mobbin · Fey** — markets list + sector rows + watchlist (dark→recolor). → Markets structure.
  https://mobbin.com/screens/04809e37-04f0-4946-8f83-762df8e7bde6
- **Mobbin · Kraken Pro** — terminal widget density (dark→recolor). → Hero density.
  https://mobbin.com/screens/dc79dfe7-9770-4b56-904d-865de83ba119

**เลี่ยง (เปิดดูแล้ว off-brand / compliance)**
- Dribbble `trading_platform` tag — ส่วนใหญ่ dark crypto terminal
- Behance "Forex Trading Website" (183742341) — dark purple ทั้งหน้า
- Dribbble Onexcell / "Grow your trading skills" — fake stats + Trustpilot + award + gold + hype
- Pinterest boards — login-gated, ยังไม่ได้ verify เอง (browse เองได้: ค้น "fintech landing page light blue")

Map → asset:
- **Hero:** Revolut (anchor) + Ivo Ivanov (light layout) + CALFINEX (device hero) [+ Kraken density]
- **Trust:** CALFINEX feature/security sections (recolor; ห้าม seal/badge จริง)
- **Markets:** Ivo Ivanov + Fey (rows) — abstract, no readable price

---

## 01 · Hero (P0) — `beston-home-hero-command-center.webp`

**แนบ:** `ref-fizens-home-base.png` (brand) + screenshot Revolut Business (light terminal). ถ้าอยากได้ density เพิ่ม แนบ Kraken ด้วย (สั่ง recolor light).

**Paste นี้:**

```
Create a premium Forex/CFD broker landing-page hero visual for BestonFX.

Scene: a clean, light-themed trading command center interface floating on a white and very pale blue workspace. The interface is inspired by MT5-style market watch panels, order widgets, symbol cards, and risk/rebate modules, but it must be abstract and non-functional, with no readable prices, no P&L, no account balance, no spread numbers, no leverage values, no profit percentage.

Visual layout: asymmetric composition. Right side contains the main terminal mockup with layered rounded white cards, thin #e5e7eb borders, royal blue #0040c1 accent lines, subtle #2970ff glow, and small neutral grey chart lines. Left side has clean negative space for Thai headline overlay in Framer. Use a soft blue bloom behind the terminal, not neon.

Objects to include: market watch card with abstract market rows (no readable ticker symbols, no readable numbers — use blurred placeholder glyphs only); risk notice chip; rebate/T&C chip; LINE support chip; small device frame or floating dashboard panel. Real symbol names and numbers are added as Framer chips later, never inside the image.

Mood: calm, credible, premium, transparent-cost broker, not hype. It should feel like a real product UI, not a generic AI dashboard.

Lighting and style: daylight fintech, white surface, soft shadows, high clarity, realistic web UI render, no dark-gold luxury, no cyberpunk, no smiling trader, no stock photo, no official regulator seal, no fake logo, no fake testimonial.

Aspect ratio: 16:9 landscape. Resolution: request the largest size ChatGPT offers (~1536x1024). Leave safe crop margins for desktop and mobile Framer responsive use. Generate one image only.

---
BestonFX visual direction: light premium fintech website, white and soft blue surfaces, royal blue accent #0040c1 only, subtle #2970ff hover-blue glow, clean rounded UI cards, Prompt Thai-font friendly spacing, calm broker-sober mood, generous whitespace, credible product UI, Thai-first audience, Fizens-inspired finance SaaS layout rhythm.
Strict constraints: no black-and-gold luxury styling, no dark navy page background, no casino or gambling mood, no cyberpunk neon, no fake profit chart, no visible P&L, no account balance, no fake spread/leverage/license numbers, no official regulator logo or seal, no testimonial faces, no star ratings, no "trusted by millions", no text-heavy layout, no garbled Thai text, no brand logo inside the image unless provided separately.
Composition rules: leave clean negative space for Thai headline and CTA overlays, keep important objects away from the edges for responsive Framer cropping, use crisp UI shapes and realistic soft shadows, avoid clutter, avoid stock-photo people.
Output: one high-resolution still image, 16:9 landscape, largest size ChatGPT supports (~1536x1024 px), web landing-page asset, no explanation, no extra variations unless asked.
```

**Accept** ถ้า: light + royal blue, abstract terminal cards, มี negative space ซ้าย, ดูเป็น web UI.
**Reject** ถ้า: อ่านเลข/ticker/P&L ได้ · glass/transparent panel (เคย reject V2) · ดูเป็น hardware lab console (เคยพลาด V4) · พื้น dark/navy · คนยิ้ม · seal/logo ใดๆ.

---

## 02 · Trust (P0) — `beston-trust-compliance-stack.webp`

**แนบ:** `ref-fizens-home-base.png` (card style).

**Paste นี้:**

```
Create a trust and compliance visual for a Thai Forex/CFD broker website, BestonFX.

Scene: a clean white desk-like digital surface with layered verification cards, document cards, a subtle shield outline, and platform proof cards arranged in a neat stack. Use abstract badges only, not official regulator seals. The cards can suggest "entity verification", "risk disclosure", "platform", and "support", but do not use readable license numbers, regulator logos, or official emblems.

Visual style: light fintech, white and soft blue surfaces, royal blue #0040c1 accent, thin #e5e7eb borders, subtle blue glow, professional document-card metaphor, high credibility. Use crisp vector-like UI inside a photoreal web-render composition.

Composition: horizontal 16:9 section image. Leave empty space on one side for Framer text overlay. Keep all documents and chips inside safe margins. Make the visual feel structured and trustworthy, not decorative.

What to include: 4 to 6 stacked cards, abstract shield line icon, neutral check marks, a small platform card, a small risk disclosure card, soft blue verification ribbon. Text should be unreadable or placeholder lines only.

Avoid: fake regulator logo, fake license number, fake award, star rating, "trusted by" claims, passport/KYC sensitive document photo, gold seal, stamp, black-gold private bank style, cyber security padlock cliché, human testimonial portrait.

Aspect ratio: 16:9 landscape, largest size ChatGPT offers (~1536x1024). Generate one image only.

---
BestonFX visual direction: light premium fintech website, white and soft blue surfaces, royal blue accent #0040c1 only, subtle #2970ff hover-blue glow, clean rounded UI cards, Prompt Thai-font friendly spacing, calm broker-sober mood, generous whitespace, credible product UI, Thai-first audience, Fizens-inspired finance SaaS layout rhythm.
Strict constraints: no black-and-gold luxury styling, no dark navy page background, no casino or gambling mood, no cyberpunk neon, no fake profit chart, no visible P&L, no account balance, no fake spread/leverage/license numbers, no official regulator logo or seal, no testimonial faces, no star ratings, no "trusted by millions", no text-heavy layout, no garbled Thai text, no brand logo inside the image unless provided separately.
Composition rules: leave clean negative space for Thai headline and CTA overlays, keep important objects away from the edges for responsive Framer cropping, use crisp UI shapes and realistic soft shadows, avoid clutter, avoid stock-photo people.
Output: one high-resolution still image, 16:9 landscape, largest size ChatGPT supports (~1536x1024 px), web landing-page asset, no explanation, no extra variations unless asked.
```

**Accept** ถ้า: abstract verification/document cards + shield outline, placeholder text, light.
**Reject** ถ้า: regulator logo/seal/license number · star rating · KYC/passport photo · gold seal.

---

## 03 · Markets (P0) — `beston-markets-instrument-universe.webp`

**แนบ:** `ref-fizens-home-base.png` (card grid) + screenshot Fey (markets list, recolor light).

**Paste นี้:**

```
Create a premium "markets universe" visual for BestonFX, a Forex/CFD broker website.

Scene: a clean grid of market category cards floating on a white and pale blue fintech interface. Suggest categories through abstract cards: Forex, Gold, Indices, Crypto, Oil. Each card shows a tiny icon and abstract line-chart shapes only — no readable ticker symbols, no readable price, no percentage, no profit/loss, no real-time claim. Category and symbol names are added as Framer chips later, not inside the image.

Visual style: Fizens-inspired light finance SaaS, white cards, thin borders, royal blue #0040c1 accents, soft blue hover glow, neutral grey secondary lines, calm spacious layout. It should look like a polished Framer section visual, not a trading terminal screenshot.

Composition: 16:9 landscape. Place the most detailed cards in the center-right and leave clean negative space on the left for Thai copy overlay. Keep a horizontal ticker rhythm, with some cards slightly staggered for depth.

Compliance: include subtle "sample data" feeling through placeholder chips or abstract dots, but do not write long text. Do not show live prices, returns, account balances, candles implying a guaranteed uptrend, green profit visuals, or a large upward arrow.

Avoid: casino energy, neon chart, green-money rain, aggressive trading desk, dark Bloomberg clone, gold, fake "low spread" or "fast withdraw" labels.

Aspect ratio: 16:9 landscape, largest size ChatGPT offers (~1536x1024). Generate one image only.

---
BestonFX visual direction: light premium fintech website, white and soft blue surfaces, royal blue accent #0040c1 only, subtle #2970ff hover-blue glow, clean rounded UI cards, Prompt Thai-font friendly spacing, calm broker-sober mood, generous whitespace, credible product UI, Thai-first audience, Fizens-inspired finance SaaS layout rhythm.
Strict constraints: no black-and-gold luxury styling, no dark navy page background, no casino or gambling mood, no cyberpunk neon, no fake profit chart, no visible P&L, no account balance, no fake spread/leverage/license numbers, no official regulator logo or seal, no testimonial faces, no star ratings, no "trusted by millions", no text-heavy layout, no garbled Thai text, no brand logo inside the image unless provided separately.
Composition rules: leave clean negative space for Thai headline and CTA overlays, keep important objects away from the edges for responsive Framer cropping, use crisp UI shapes and realistic soft shadows, avoid clutter, avoid stock-photo people.
Output: one high-resolution still image, 16:9 landscape, largest size ChatGPT supports (~1536x1024 px), web landing-page asset, no explanation, no extra variations unless asked.
```

**Accept** ถ้า: abstract category cards + neutral microchart, light, มี negative space.
**Reject** ถ้า: อ่าน price/ticker ได้ · green up arrow / profit · dark Bloomberg look.

---

## หลัง generate
1. คัด candidate → log ลง `assets/generated/_qa-report.md` (accept/reject + เหตุผล)
2. ผ่านแล้ว → upscale (Magnific/fal) → target res ใน 9-asset plan (Hero 2400x1600)
3. export **WebP/AVIF** → วางใน Framer (Auto resolution, hero = priority ไม่ lazy-load, mobile = poster ใบเดียว)
4. ใส่ Thai copy / CTA / risk text / label `ตัวอย่างแดชบอร์ด — ไม่ใช่ข้อมูลจริง` **ใน Framer** ไม่ใช่ในรูป
