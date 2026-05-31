# BestonFX — Next.js Build Handoff Report

**Source:** สรุปจาก `claude Beston-Framer Research Report.pdf` (28 พ.ค. 2026)  
**Scope:** เฉพาะสิ่งที่ใช้ build เว็บด้วย **Next.js + Cursor** — **ไม่รวม** Framer MCP, Workshop, Unframer, หรือขั้นตอนแก้ canvas  
**Branch งานทดลอง:** `experiment/cursor-solo-site`  
**อัปเดต report นี้:** 29 พ.ค. 2026

---

## TL;DR

1. **โครงหน้า Home** ควรยึด **section architecture ของ Fizens** (Hero → trust strip → features bento → benefit scroll → stats → how-it-works → testimonials → pricing/accounts → blog → FAQ → footer) แล้วใส่เนื้อหา broker จริง — ไม่ต้องออกแบบ information architecture ใหม่
2. **Wow factor** มาจาก **motion ในโค้ด** (GSAP ScrollTrigger + optional Spline 3D) ไม่ใช่จาก design tool แยก — คลิป reference = zoom-through / parallax / fade-rise (ทำใน Next.js ได้เต็มที่)
3. **Compliance:** ถอด claim ปลอมจาก live site; โฟกัส **พฤติกรรม broker ไทย + international regulator disclosure** — ไม่ใช้ Thai SEC เป็น gate หลัก (ตามที่ founder กำหนด)
4. **CTA ล็อก:** Primary **เปิดบัญชี** · Secondary **ทัก LINE OA ติดต่อ admin**
5. **Framer ยังจำเป็นไหม?** สำหรับ wow + scroll + production → **Next.js เป็นทางหลัก**; stakeholder preview แบบเร็วยังใช้ mock/Framer ได้แต่ไม่บังคับ

---

## 1) Design direction — สิ่งที่ต้อง reconcile

PDF เสนอ **dark navy `#0A1024` + champagne gold `#C9A227`** (“Bloomberg Terminal meets Swiss private bank”)

Repo ปัจจุบัน (CEO + `DESIGN.md` + `docs/brand/tokens.json`) ล็อก **light Fizens-derived + royal blue `#0040C1`**

| แหล่ง | Palette | สถานะ |
|--------|---------|--------|
| PDF research | Navy + gold | แนวทางเก่าในเอกสาร |
| `DESIGN.md` / tokens.json | Light + `#0040c1` | **Source of truth ปัจจุบัน** |

**คำแนะนำ:** ใช้ light + royal blue ต่อสำหรับ Next.js build นี้ — นำ **motion patterns** และ **section map** จาก PDF มาใช้ ไม่นำ palette เข้มทับโดยไม่ยืนยัน founder

เอกสาร Fizens anatomy: `fizens-home-snapshot.md`, `fizens-home-full.png`

---

## 2) Fizens → BestonFX section skeleton (ใช้กับ Next.js)

ลำดับ section ที่ PDF audit จาก Fizens Home (เก็บ architecture, เปลี่ยน copy/asset):

| # | Fizens section | BestonFX ใช้เป็น | หมายเหตุ |
|---|----------------|------------------|----------|
| 0 | — | Risk bar (sticky) + LINE floating | compliance + conversion |
| 1 | Hero | Premium trading hero + device/Spline | CTA เปิดบัญชี / LINE |
| 2 | Trust counter (fake stats) | Trust chips (MSB/FSCA wording ระวัง overclaim) | ถอด fake user count |
| 3 | Logo strip | Partner / trust marquee | ไม่ใส่ rating ปลอม |
| 4 | App CTA split | Markets preview / intelligence | ไม่ใช่ generic finance app |
| 5 | Bento features | Accounts / why / spreads framing | ตัวเลข = placeholder |
| 6 | More features row | Trading tools grid | Demo / mock labels |
| 7 | Benefit sticky scroll | DX ecosystem หรือ trust narrative | ไม่อ้าง performance |
| 8 | Stats (wealth grow) | **ลบหรือแทน** — ห้าม implied profit | M5 count-up เฉพาะข้อมูลยืนยันได้ |
| 9 | How it works | 3-step: สมัคร → ฝาก → เทรด | ตรง live site |
| 10 | Testimonials | CMS + disclaimer | ไม่ใช้ Fizens 4.8/5 14K |
| 11 | Pricing | Account tiers | D002 blocked → placeholder |
| 12 | Blog | คง route `/articles` หรือ defer | CMS later |
| 13 | FAQ | คำถามบัญชี/LINE/ความเสี่ยง | |
| 14–15 | Footer CTA + footer | Legal links + risk repeat | |

**หน้าอื่น (จาก PDF §6)** — map ไป route ที่ repo มีแล้ว:

| Route | เนื้อหาหลัก |
|-------|-------------|
| `/` | Home (immersive) |
| `/why-bestonfx` | Vision, certs, team (ระวัง WikiFX score) |
| `/accounts` | Standard / Demo / compare |
| `/markets` | Forex, indices, commodities, crypto CFD |
| `/tools` | Calculators demo |
| `/partners` | IB — no guaranteed income |
| `/support` | LINE-first |
| `/legal/risk-disclosure` | Full disclosure |

---

## 3) Motion Language → Next.js (ไม่ใช่ Framer)

PDF ตั้งชื่อ effect M1–M7 — แปลเป็น implementation ใน repo:

| ID | ชื่อ | พฤติกรรม | Next.js implementation |
|----|------|-----------|------------------------|
| **M1** | Hero device bloom-reveal | opacity 0→1, scale 0.92→1, y +24→0, ~900ms expo ease | GSAP `fromTo` on hero device / Spline wrapper |
| **M2** | Cursor-tracked depth | orbital icons 3 layers intensity | `mousemove` + rAF หรือ GSAP quickTo; **ปิดบน touch** |
| **M3** | Scroll parallax stack | BG 60% / mid 85% / fg 110% speed | ScrollTrigger `scrub` หลาย layer |
| **M4** | Section fade-rise | opacity + y +32, stagger 80ms | ScrollTrigger batch per section |
| **M5** | Count-up stat | 0→target 1800ms once | GSAP + `once: true` |
| **M6** | Gold/brand underline | CTA hover | CSS `scaleX` underline (`brand-700`) |
| **M7** | Ticker marquee | 30–40s linear | CSS animation หรือ GSAP |

**Reference clip (facil pay style):** zoom-through hero frame → ใช้ **M1 + M3** บน hero section (scale device ขณะ scroll แรก ~45vh) — เหมาะ Home มากที่สุด; หน้ารองใช้ M4 เบาๆ ไม่ซ้ำทุก section แบบเดียวกัน

**Performance budget (จาก PDF):**

- Animated layers ≤ **12** ต่อ viewport
- เฉพาะ `transform` + `opacity`
- Spline: lazy / click-to-load + `prefers-reduced-motion` fallback
- Optional: Lenis smooth scroll (ติดตั้งแยกถ้าต้องการ)

**Dependency:** `gsap` อยู่ใน `package.json` แล้ว — ยังไม่มี component ที่ wire ScrollTrigger

---

## 4) CTA & conversion (ตาม founder ล่าสุด)

| ลำดับ | ป้าย | สไตล์ | ปลายทาง |
|-------|------|-------|---------|
| 1 | **เปิดบัญชี** | Primary solid `brand-700` + glow | `cp.bestonfx.com/newAccount.html` (หรือ env) |
| 2 | **ทัก LINE OA ติดต่อ admin** | LINE green `#06C755` | `NEXT_PUBLIC_LINE_OA_URL` |

PDF เดิมมี “ฝากเงิน” เป็น secondary — **ไม่ใช้เป็น CTA หลักใน build นี้** (ลดความเสี่ยง compliance / สับสน funnel)

---

## 5) Compliance (ปรับตามทิศทาง founder)

### ไม่ใช้เป็น gate หลัก

- **Thai SEC financial-promotion checklist แบบเข้ม** — CFD/offshore ไม่ได้อยู่ใต้ SEC แบบ broker ในประเทศ (PDF §12 risk #8)

### ยังต้องทำ

- Risk warning มองเห็นก่อน CTA สำคัญ (sticky bar + hero note + footer)
- ถอด claim ที่ PDF พบบน live site:
  - “โบรกเกอร์ Forex อันดับ 1 ของไทย”
  - “เทรดเดอร์กว่า 800,000 / 1000K+ users” (unverified)
  - WikiFX **7.22** (ของจริง ~**5.79**, high risk flag)
- MSB = **registration** ไม่ใช่ “forex license” — disclose แบบ international / entity ชัด
- Placeholder: `รอยืนยันข้อมูลจากฝ่ายกำกับดูแลก่อนเผยแพร่`
- รัน `npm run compliance:scan` ก่อน merge

### พฤติกรรม broker ไทย (แนวปฏิบัติ ไม่ใช่คำสั่งกฎหมาย)

- Risk disclaimer ชัด ทุกหน้า marketing
- ไม่ guarantee profit / IB income / signal accuracy
- Testimonials = “ความคิดเห็นส่วนบุคคล” + ไม่มีตัวเลขกำไรใน quote
- โปรโมชันมี T&C + ไม่ imply กำไรแน่นอน

---

## 6) Assets (ไม่ผ่าน Framer)

| Asset | เครื่องมือ | ใช้ที่ |
|-------|-----------|--------|
| Hero device still | Higgsfield / Nano Banana Pro | Hero fallback ถ้าไม่มี Spline |
| Bloom glow | CSS radial / ภาพ PNG | Hero background |
| Orbital symbols (EUR, XAU, BTC…) | Higgsfield 512² | M2 parallax layers |
| Feature spots | 2D icons | Bento / tools |
| Hero 3D shell | **Spline Pro** | `NEXT_PUBLIC_SPLINE_HERO_SCENE` |

**Spline (สำหรับคนที่สมัครแล้วแต่ยังไม่เป็น):** `docs/design/spline-getting-started.md`  
**Code:** `src/components/v2/SplineHero.tsx` — ใส่ URL ใน `.env.local` แล้ว hero สลับเป็น 3D

---

## 7) Skills & tools ที่แนะนำ (Next.js path)

| Skill / tool | ใช้เมื่อ |
|--------------|----------|
| `ui-ux-pro-max` | Layout, a11y, breakpoints, anti-patterns |
| `impeccable` | หลีกเลี่ยง generic AI UI; typography/spacing |
| `21st_magic` MCP | Generate/refine component snippets แล้ว integrate |
| `grill-me` → `to-prd` → `to-issues` | ก่อน slice ใหญ่ |
| `higgsfield-*` | Hero still / video (optional) |
| GSAP ScrollTrigger | M1–M7 |
| Spline React | Hero 3D optional |

**ติดตั้งแล้วใน branch:** `@splinetool/react-spline`, `gsap`, skills `grill-with-docs`, `triage`

---

## 8) สถานะ repo ณะ 29 พ.ค. 2026

### ทำแล้ว (ยังไม่ merge)

| รายการ | Path |
|--------|------|
| แยก chrome เดิม → `(public)/layout` | `src/app/(public)/layout.tsx` |
| Root layout เหลือ font + metadata | `src/app/layout.tsx` |
| Copy ชุด v2 (CTA เปิดบัญชี / LINE) | `src/content/v2-home.ts` |
| Components v2 (12 ไฟล์) | `src/components/v2/*` |
| Spline wrapper + env example | `SplineHero.tsx`, `.env.example` |
| Spline คู่มือ | `docs/design/spline-getting-started.md` |

### ยังไม่ทำ (blockers สำหรับ “wow”)

| รายการ | Priority |
|--------|----------|
| Route **`/v2`** (หรือแทน `/` หลังอนุมัติ) | P0 |
| **ImmersiveHero** + ScrollTrigger (M1/M3/M4) | P0 |
| Wire **21st Magic** สำหรับ 1–2 components (nav/hero card) | P1 |
| หน้ารอง immersive เบาๆ (why, markets) | P2 |
| `npm run build` + compliance scan ผ่าน | P0 |
| Spline scene URL จาก founder | P1 optional |

### เว็บเดิม (production foundation)

- `/` ยังใช้ `src/components/site/*` — เปรียบเทียบกับ `/v2` ได้หลัง route พร้อม

---

## 9) Framer vs Next.js — สรุปสำหรับ roadmap

| คำถาม | คำตอบ |
|--------|--------|
| ต้องมี Framer เพื่อ wow scroll แบบคลิป? | **ไม่** — ทำใน Next.js ได้ดีกว่า |
| Framer ยังมีประโยชน์? | Preview เร็วให้ stakeholder ที่ไม่รัน dev server |
| Source of truth ระยะยาว? | **Next.js repo** + `DESIGN.md` + tokens |
| Export จาก Framer? | Optional สำหรับ asset/reference — ไม่บังคับ |

---

## 10) Build sequence แนะนำ (Next.js only)

| Step | Action | Output |
|------|--------|--------|
| 1 | Lock tokens + `docs/design/fizens-derived-spec.md` (optional) | Design brief |
| 2 | `app/v2/page.tsx` + layout ไม่ซ้ำ chrome เดิม | `/v2` เห็นได้ |
| 3 | `ImmersiveHome` + GSAP hero scroll stage | Wow hero |
| 4 | 21st Magic → polish Nav / hero card | UI lift |
| 5 | หน้ารอง: template `PageHero` + M4 | Consistency |
| 6 | Spline URL → swap hero right | 3D |
| 7 | compliance:scan + build + preview mobile | Ship-ready branch |

---

## 11) Open questions (founder)

1. Palette สุดท้าย: **light royal blue** (repo) vs **navy+gold** (PDF)?
2. Min deposit / leverage จริง ($50 vs $300, 500:1) — ยัง conflict
3. DX Academy / Trade / Exclusive — ยืนยันชื่อและ URL
4. International regulator copy ฉบับอนุมัติ (MSB/FSCA wording)
5. Spline scene URL เมื่อ export เสร็จ
6. เปิด `/v2` เป็น demo หรือ promote เป็น `/` หลัง sign-off?

---

## 12) Recommended first action (Cursor)

```bash
git checkout experiment/cursor-solo-site
npm run dev
# เป้าหมายถัดไป: สร้าง src/app/v2/page.tsx + ImmersiveHeroScroll.tsx
```

**Preview เป้าหมาย:** `http://localhost:3000/v2` — เทียบกับ `http://localhost:3000/`

---

## Appendix: สิ่งที่ตัดออกจาก PDF โดยเจตนา

- Framer MCP audit / XML / Workshop / Tommy D. Rossi plugin
- Framer Color/Text Styles / canvas build steps 0–11
- Unframer export pipeline
- `bestonfx-design-system-framer-sop` skill (Framer-specific)
- Thai SEC skill เป็น gate หลัก (ยังเก็บแนว banned phrases ทั่วไป)

---

*Report generated for internal handoff. แก้ไขเมื่อ founder ตัดสิน palette หรือ promote `/v2` เป็น production home.*
