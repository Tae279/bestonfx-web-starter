# Copy Deck v2 — beston (Framer redesign)

> Editorial copy pass over the Framer × Fizens wireframes. Sources (verbatim): `docs/wireframes/pages/*.md` · `components.md` · `compliance-copy-rules.md`.
> **Honest framing:** the existing wireframe copy is already solid and compliance-aware. This pass **sharpens weak headlines, removes one self-inflicted compliance risk, threads the transparency/rebate hook, and adds CTA microcopy** — it does not rewrite what already works. Slots marked **คงเดิม** are good as-is.
> Per slot: **เดิม** (verbatim current) → **✅ ใหม่** (improved Thai) → _EN_ gloss → _ทำไม_.
> **Locked facts (do not break):** lowercase **beston** in body · platform **MT5 only** · account types **Standard · Demo Account** · Rebate **$5/lot** สำหรับรายการที่เข้าเงื่อนไข (ไม่ใช่สัญญากำไร) · proof badges **FSCA · MSB · MT5 · เอกสารบริษัท** `[verify registry/wording]` · No Minimum confirmed · Thai Support 24/7 confirmed · Stats & Testimonials **GATED** (ห้ามตัวเลขปลอม) · ทุกตัวเลขที่ยังไม่ยืนยันติด `[verify]`.

---

## ⚠️ Top fix (high value) — Home hero proof line
- เดิม: `100,000+ ผู้ใช้ลงทะเบียน [verify] · ถอนเงินได้ทุกวัน · MetaTrader 5`
- ✅ ใหม่: `MT5 · Rebate $5/lot · No Minimum · Thai Support 24/7`
- _ทำไม:_ แบรนด์ตั้งกฎ Stats = **GATED จนกว่าจะยืนยัน** และชู "ไม่มีสถิติปลอม" เป็นจุดขาย — การโชว์ "100,000+ [verify]" ตั้งแต่ hero **ขัดกับตัวเอง** และเสี่ยงสุดในหน้า. แทนด้วย proof ที่ไม่ใส่ตัวเลขหรือ SLA จนกว่าจะยืนยันจริง.

---

## Big idea & positioning

**Positioning:** *เทรดบนความจริง — Rebate ชัด เริ่มง่าย คุยกับทีมไทย*
**Why:** beston ชู honesty vs โบรกเกอร์ offshore ที่ขายฝัน. 3 เสาที่ทุกหน้าควรวน: **Rebate $5/lot · No Minimum · Thai Support 24/7**. honesty คือ flex ที่ compliant แม้ registry wording ยัง `[verify]`.

## Voice & tone (8 rules)
1. **ตรงไปตรงมา** — พูดที่ยืนยันได้ ระบุชัดเมื่อรอยืนยัน.
2. **สงบ พรีเมียม** — มั่นใจแบบไม่ตะโกน ไม่มี `!`.
3. **ประโยคสั้น** หนึ่งใจความ ตัดคำเติม (ที่สุด/อย่างแท้จริง).
4. **ขึ้นด้วยประโยชน์** ก่อนบอกว่าเรามีอะไร.
5. **Rebate = เงินคืน/ลดต้นทุน** เสมอ — ห้ามวางเป็นกำไร/รายได้การันตี.
6. **คำต้องห้าม** (จาก compliance-copy-rules): กำไรแน่นอน, ไม่ขาดทุน, ไร้ความเสี่ยง, อันดับ 1, ดีที่สุด, รวยเร็ว, เหมาะกับทุกคน.
7. **"คุณ"** เสมอ — คุยกับนักเทรดคนเดียว.
8. **beston ตัวเล็ก** ใน body · คำเทคนิคอังกฤษได้ (spread, leverage, rebate, MT5).

## CTA system
| ระดับ | ปุ่ม | Microcopy |
|---|---|---|
| Primary | `เปิดบัญชี` / `เปิดบัญชีทันที` | `ใช้เวลาไม่กี่นาที` |
| Secondary | `ทัก LINE OA ติดต่อ admin` | `คุยกับ admin ก่อนเริ่มใช้งาน` |
| LINE support | `ทัก LINE OA ติดต่อ admin` | `ปรึกษาทีมไทย ไม่กดดัน` |
| ลังเล | `สอบถามทีมไทยผ่าน LINE` | — |

---

# SHARED COMPONENTS

### RiskDisclosureBar `[compliance — คงเดิมเป๊ะ]`
- `Forex/CFD และ Leverage มีความเสี่ยงสูง อาจทำให้สูญเสียเงินลงทุน โปรดศึกษาข้อมูลและความเสี่ยงก่อนตัดสินใจ` + ลิงก์ `อ่านเพิ่มเติม` → `/legal/risk-disclosure`. **ห้ามแก้** (validated).

### Navbar
- เดิม links: `เหตุผลที่เลือก beston · ตลาด · บัญชี · เครื่องมือ · พาร์ทเนอร์ · ช่วยเหลือ`
- ✅ ใหม่: `ทำไมต้อง beston · ตลาด · บัญชี · เครื่องมือ · พาร์ทเนอร์ · ช่วยเหลือ`
- _ทำไม:_ "ทำไมต้อง beston" สั้น/พูดเหมือนคน > "เหตุผลที่เลือก" + ตรงกับ H-copy หน้านั้น. ปุ่ม `เปิดบัญชี` (blue) · `เข้าสู่ระบบ` คงเดิม.

### Footer `[compliance]`
- ✅ Tagline ใต้โลโก้: `Rebate $5/lot สำหรับรายการที่เข้าเงื่อนไข พร้อมทีมไทยทาง LINE และข้อมูลให้ตรวจสอบก่อนเริ่ม`
- คงเดิม: full risk block · entity `บริษัท เบสตัน อินเตอร์เนชั่นแนล กรุ๊ป จำกัด` · `111 ประดิษฐ์มนูธรรม แขวงลาดพร้าว กรุงเทพฯ 10230` · `support@bestonfx.com` · regulator line `[verify]`
- ✅ Copyright: `© 2026 beston. สงวนลิขสิทธิ์`

### AIChatWidget — label `ผู้ช่วยอัตโนมัติ — ไม่ใช่คำแนะนำการลงทุน` `[คงเดิม]`

---

# 1) HOME — `/`

### Hero (TerminalHero)
- Eyebrow เดิม: `โบรกเกอร์ Forex สำหรับเทรดเดอร์ไทย` → ✅ `โบรกเกอร์ Forex/CFD เพื่อคนไทย`
- H1 เดิม: `Trade Smarter / Not Harder`
- ✅ Founder override H1: **`Trade Smarter Not Harder`**
- _ทำไม:_ founder เลือก short English hook เพราะสั้น กระชับ impact คล้าย Fizens/finance-template rhythm. ให้ Thai subhead ทำหน้าที่ขยายความและคุม compliance.

- Subhead เดิม: `เทรดกับ beston — รับ Rebate เงินคืน $5/lot · MT5 · ซัพพอร์ตผ่าน LINE`
- ✅ ใหม่: `เทรดบน MT5 พร้อม Rebate $5/lot, เริ่มได้แบบ No Minimum และมีทีมไทยคุยผ่าน LINE OA 24/7`
- _ทำไม:_ headline เป็น hook กว้างได้ แต่ subhead ต้องทำให้คำว่า smarter หมายถึงข้อมูลที่ตรวจสอบได้ ไม่ใช่ผลลัพธ์การเทรด.

- Proof line: **ดู ⚠️ Top fix ด้านบน**
- CTA เดิม: `เปิดบัญชีทันที` · `ทัก LINE OA ติดต่อ admin` → ✅ คงเดิม + microcopy `ใช้เวลาไม่กี่นาที` / `คุยกับ admin ก่อนเริ่มใช้งาน`
- Device label: `ตัวอย่างแดชบอร์ด — ไม่ใช่ข้อมูลจริง` `[คงเดิม]`

### RegulatoryStrip
- เดิม: label `กำกับดูแล & แพลตฟอร์ม` · `ใบอนุญาต FSCA เลขที่ [verify]`
- ✅ ใหม่ label: `ข้อมูลให้ตรวจสอบก่อนเริ่ม` (badges FSCA · MSB · MT5 · เอกสารบริษัท, registry wording `[verify]`)

### WhyBestonBento — header `ทำไมต้อง beston`
- `Cash Back` — `รับ Rebate $5/lot จากปริมาณการเทรดที่เข้าเงื่อนไข และจ่ายเป็นรอบทุกวันจันทร์`
- `No Minimum` — `เริ่มจาก Demo หรือบัญชีจริงได้โดยไม่มีขั้นต่ำ เลือกทุนตามระดับความเสี่ยงที่รับได้`
- `Thai Support 24/7` — `คุยกับทีมไทยผ่าน LINE OA เรื่องบัญชี เอกสาร MT5 และ Rebate ได้ตลอดเวลา`
- `Flexible Leverage` — `ปรับเลเวอเรจได้สูงสุด 1:1000 สำหรับคนที่เข้าใจ margin และความเสี่ยงแล้ว [verify]`
- `Fast Execution` — `ส่งคำสั่งบน MT5 ได้รวดเร็ว ลดจังหวะพลาดช่วงตลาดเคลื่อนไหวแรง [verify benchmark]`
- `License & Registration` — `มีเอกสาร FSCA/MSB และข้อมูลบริษัทให้ตรวจสอบก่อนตัดสินใจ [verify registry/wording]`

### MarketsTicker — `ตัวอย่าง — ไม่ใช่ราคาจริง` `[คงเดิม]`

### AccountComparison preview (Standard · Demo Account)
- ใช้เป็น 2-card preview ในหน้า Home
- ✅ ใหม่: H2 `เลือกบัญชีง่าย ๆ แค่ 2 แบบ` · sub `Standard สำหรับเทรดจริง ส่วน Demo Account สำหรับลองระบบและฝึกใช้ MT5 ด้วยเงินจำลอง` · Standard CTA `เปิดบัญชี` · Demo CTA `ทัก LINE OA ติดต่อ admin`

### StepProcess — `เปิดบัญชีใน 3 ขั้นตอน`
- `สมัคร` (กรอกข้อมูล + KYC) → `ทัก LINE OA ติดต่อ admin` → `เตรียม MT5 และอ่านความเสี่ยง` · CTA `เปิดบัญชี`

### FeatureSplit — Rebate (core USP)
- H2 เดิม: `Rebate เงินคืน $5 ต่อ lot`
- ✅ ใหม่ H2: **`ทุก lot ที่เข้าเงื่อนไข ได้ Rebate คืน`**
- _EN:_ Every eligible lot earns rebate.
- _ทำไม:_ rebate คิดจาก volume ไม่ใช่ผลกำไร จึงต้องเล่าเป็น mechanism ไม่ใช่ผลลัพธ์การลงทุน.
- Body + bullets: `Rebate $5 ต่อ lot คิดจากปริมาณการเทรด ไม่ใช่ผลกำไร และจ่ายเป็นรอบทุกวันจันทร์` · `Lot ค้าง ≥1 นาที` · `BTCUSD/US30/USOIL คิด lot ÷ 10` · `ไม่ใช่สัญญากำไร — เป็นเงินคืนจากปริมาณการเทรด` · CTA `ดูเงื่อนไข Rebate`

### Stats / Testimonial — `[GATED — ปิดไว้]` ห้ามใส่ตัวเลข/รีวิวปลอม

### ArticleGrid teaser — header เดิม `เรียนรู้การเทรด` → ✅ `ความรู้สำหรับนักเทรดไทย`

### CTABanner (LineFirst)
- H2 เดิม: `พร้อมเริ่มเทรดกับ beston?`
- ✅ ใหม่: `พร้อมเทรดกับโบรกเกอร์ที่โปร่งใสแล้วหรือยัง?`
- subhead เดิม `เปิดบัญชี หรือสอบถามทีมไทยผ่าน LINE` **คงเดิม** · CTA `ทัก LINE OA ติดต่อ admin` (green) · `เปิดบัญชี`

---

# 2) WHY beston — `/why-bestonfx`

### Hero (SplitHero)
- H1 เดิม: `โบรกเกอร์ที่เลือกความโปร่งใส มากกว่าคำสัญญา` **คงเดิม (แข็งแรง)**
- Sub เดิม: `เราเชื่อว่าความไว้ใจสร้างจากข้อมูลจริง ไม่ใช่ตัวเลขที่ปั้นขึ้น`
- ✅ ปรับเล็ก: `ความไว้ใจสร้างจากข้อมูลจริง ไม่ใช่ตัวเลขที่ปั้นขึ้น — เราพูดเฉพาะสิ่งที่ยืนยันได้`
- CTA `เปิดบัญชี` · `ดูข้อมูลใบอนุญาต` **คงเดิม**

### FeatureSplit — Regulation `[คงเดิม]`
- H2 `เอกสารบริษัทและข้อมูลให้ตรวจสอบ` · body `beston แสดงเอกสาร FSCA/MSB และข้อมูลบริษัทสำหรับตรวจสอบก่อนตัดสินใจ` · bullets FSCA `[verify]` · MSB registration `[verify]` · AML/KYC · CTA `ดูเอกสารบริษัท`

### FeatureSplit — Transparency
- H2 เดิม: `ค่าธรรมเนียมที่คุณตรวจสอบได้เอง` **คงเดิม (ดี)**
- Body `สเปรดและค่าธรรมเนียมแสดงบน MT5 แบบเรียลไทม์ ไม่มีค่าซ่อนเร้น` **คงเดิม**
- bullets คงเดิม: `สเปรดลอยตัว ดูได้บน MT5` · `เงื่อนไข Rebate อธิบายแยกเป็นข้อ` · `ถอนเงินได้ทุกวัน [verify SLA]`

### FeatureGrid — Thai-first (`ดูแลแบบเข้าใจคนไทย`) `[คงเดิม]`
- `ซัพพอร์ตภาษาไทยผ่าน LINE` · `ฝาก/ถอนช่องทางไทย [verify]` · `เนื้อหาให้ความรู้ภาษาไทย`

### CTABanner
- H2 เดิม: `ตัดสินใจด้วยข้อมูล ไม่ใช่คำสัญญา` **คงเดิม (ยอด)** · `เปิดบัญชี` · `สอบถามผ่าน LINE`

---

# 3) MARKETS — `/markets`

### Hero (SplitHero)
- H1 เดิม: `ตลาดทั่วโลก ในที่เดียว`
- ✅ ใหม่ H1: **`เทรดตลาดที่คุณถนัด ครบในที่เดียว`**
- _ทำไม:_ "ตลาดทั่วโลก ในที่เดียว" generic โบรกเกอร์ → ทำเป็น user-centric.
- Sub ใหม่: `รองรับ FX, ทอง, ดัชนี, น้ำมัน และคริปโตบน MT5 พร้อมข้อมูลตัวอย่างที่แยกจากราคา real-time` · CTA `เปิดบัญชี` · `ดูเงื่อนไขบน MT5`

### FeatureGrid — asset classes `[คงเดิม — concrete ดี]`
- `Forex` คู่เงินหลัก/รอง `[verify จำนวน]` · `โลหะมีค่า` (XAUUSD, XAGUSD) · `ดัชนีหุ้นโลก` (US30, NAS100) · `พลังงาน` (USOIL) · `คริปโต` (BTCUSD)

### FeatureSplit — trading conditions
- H2 เดิม: `เงื่อนไขการเทรด`
- ✅ ใหม่ H2: `เห็นเงื่อนไขจริงก่อนเปิดออเดอร์`
- Body `สเปรดและเงื่อนไขการเทรดลอยตัวตามตลาด ตรวจสอบบน MT5 ก่อนเปิดออเดอร์` · bullets `สเปรด [verify]` · `Leverage 1:50–1:1000 [verify]` · `MetaTrader 5`

### CTABanner
- H2 เดิม: `เริ่มเทรดตลาดที่คุณถนัด` **คงเดิม** · `เปิดบัญชี` · `ทัก LINE OA ติดต่อ admin`

---

# 4) ACCOUNTS — `/accounts` (conversion hub)

### Hero (SplitHero)
- ✅ ใหม่ H1: `เลือกบัญชีให้ตรงจังหวะการเทรด`
- ✅ ใหม่ Sub: `มีแค่ 2 ทางเลือก: Standard สำหรับเทรดจริง และ Demo Account สำหรับลองระบบด้วยเงินจำลอง`

### AccountComparison full (Standard · Demo Account)
- Standard: `เทรดจริงบน MT5 พร้อม Rebate $5/lot สำหรับรายการที่เข้าเงื่อนไข` · rows `[verify]`: `Spread` · `Commission` · `Leverage` · `แพลตฟอร์ม MT5` · CTA `เปิดบัญชี`
- Demo Account: `ลองระบบ ฝึกวางออเดอร์ และทำความคุ้นเคยกับ MT5 ด้วยเงินจำลอง` · rows `[verify]`: `เงินจำลอง` · `สภาพแวดล้อมทดลอง` · `ไม่มี Rebate` · `แพลตฟอร์ม MT5` · CTA `ทัก LINE OA ติดต่อ admin`

### FeatureGrid — account benefits
- `เงื่อนไขบัญชีไม่ซับซ้อน` · `ซัพพอร์ตภาษาไทยผ่าน LINE OA` · `Rebate $5/lot สำหรับ Standard ที่เข้าเงื่อนไข`

### CTABanner
- H2 เดิม: `พร้อมเปิดบัญชีแล้วหรือยัง?` **คงเดิม** · `เปิดบัญชี` · `สอบถามทีมไทยผ่าน LINE`

---

# 5) TOOLS — `/tools`

### Hero (CenteredHero)
- H1 เดิม: `เครื่องมือที่ช่วยให้คุณเทรดอย่างมั่นใจ`
- ✅ ใหม่ H1: **`MT5 และเครื่องมือคำนวณ ก่อนวางแผนเทรด`**
- _ทำไม:_ "เทรดอย่างมั่นใจ" คลุมเครือ + เฉียด over-promise → ทำให้เป็นประโยชน์รูปธรรมที่ tool ทำได้จริง.
- Sub เดิม: `MetaTrader 5 พร้อมเครื่องคำนวณ Rebate, Pip และ Margin` **คงเดิม** · CTA `เปิดบัญชี` · `ดาวน์โหลด MT5`

### FeatureGrid — MT5 ทุกอุปกรณ์ `[คงเดิม]` (Desktop/Mobile/Web `[verify]`)

### Calculator — RebateEstimator `[คงเดิม]`
- result `เงินคืนโดยประมาณ` · disclaimer `ผลลัพธ์เป็นการประมาณการสำหรับรายการที่เข้าเงื่อนไข ไม่ใช่การการันตี · BTCUSD/US30/USOIL คิด lot ÷ 10` · CTA `เปิดบัญชีเพื่อรับ Rebate`

### Calculator — PipCalculator — disclaimer `ใช้เพื่อการศึกษา ไม่ใช่คำแนะนำการลงทุน` `[คงเดิม]`

### FeatureSplit — `ทำไมต้อง MetaTrader 5` `[คงเดิม]`

### CTABanner
- H2 ใหม่: `อยากลองเครื่องมือก่อนเริ่มจริง?` · `เปิดบัญชี` · `ทัก LINE OA ติดต่อ admin`

---

# 6) PARTNERS (IB) — `/partners`

### Hero (SplitHero)
- H1 เดิม: `แนะนำเทรดเดอร์ รับค่าคอมมิชชั่นต่อเนื่อง`
- ✅ ใหม่ H1: **`แนะนำเทรดเดอร์ รับคอมมิชชันโปร่งใส จ่ายตรงเวลา`**
- _ทำไม:_ คง motive (recurring income) + เติม 2 จุดต่าง (โปร่งใส/ตรงเวลา) ที่ defensible + กัน implied guarantee.
- Sub เดิม: `เข้าร่วมโปรแกรม IB ของ beston — โครงสร้างค่าตอบแทนโปร่งใส จ่ายตรงเวลา` **คงเดิม** · CTA `ทัก LINE OA ติดต่อ admin` · `ดูเงื่อนไขพาร์ทเนอร์ [verify]`

### FeatureGrid — why partner `[คงเดิม]`
- `ค่าคอมมิชชั่นโปร่งใส [verify โครงสร้าง]` · `แดชบอร์ดติดตามผลเรียลไทม์` · `ทีมซัพพอร์ตพาร์ทเนอร์ภาษาไทย`

### Calculator — IBCommissionEstimator `[คงเดิม — disclaimer แข็งแรง]`
- disclaimer `ตัวเลขเป็นการประมาณการ ไม่ใช่การการันตีรายได้ ขึ้นกับกิจกรรมจริงของลูกค้า [verify อัตรา]` · CTA `ทัก LINE OA ติดต่อ admin`

### FeatureSplit — dashboard preview — label `ตัวอย่างแดชบอร์ด — ไม่ใช่ข้อมูลจริง` `[คงเดิม]`

### CTABanner
- H2 เดิม: `เริ่มสร้างรายได้กับ beston Partner`
- ✅ ใหม่: `เริ่มเป็นพาร์ทเนอร์กับ beston วันนี้`
- _ทำไม:_ เลี่ยง "สร้างรายได้" ที่เฉียด income-promise → action-oriented neutral. · `ทัก LINE OA ติดต่อ admin` · `ดูเงื่อนไขพาร์ทเนอร์ [verify]`

---

# 7) SUPPORT — `/support`

### Hero (CenteredHero) `[คงเดิม — เหมาะกับหน้า help]`
- H1 `ต้องการความช่วยเหลือ? ทีมไทยพร้อมดูแล` · Sub `ติดต่อผ่าน ทัก LINE OA ติดต่อ admin หรืออีเมล — หรือค้นหาคำตอบจากคำถามที่พบบ่อย` · CTA `ทัก LINE OA ติดต่อ admin` · `ดู FAQ`

### SupportChannels `[คงเดิม — ข้อมูลจริง]`
- `ทัก LINE OA ติดต่อ admin — ตอบเร็วที่สุด` · `support@bestonfx.com` · `เวลาทำการ [verify]` · entity + address จริง · form `ชื่อ · อีเมล · หัวข้อ · ข้อความ` → `ส่งข้อความ`

### CTABanner — `ยังหาคำตอบไม่เจอ?` / `ทักทีมไทยผ่าน ทัก LINE OA ติดต่อ admin ได้เลย` `[คงเดิม]`

---

# 8) ARTICLES — `/articles`

### Hero (CenteredHero)
- H1 เดิม: `เรียนรู้การเทรดอย่างเข้าใจความเสี่ยง` **คงเดิม (on-brand)**
- Sub `คู่มือ MT5, การจัดการความเสี่ยง และวิธีใช้ Rebate ให้คุ้มค่า` **คงเดิม**

### ArticleGrid full — chips `ทั้งหมด · MT5 · ความเสี่ยง · Rebate · เริ่มต้น` `[คงเดิม]`
- sample titles คงเดิม (ดี): `เริ่มต้นใช้ MT5 ใน 10 นาที` · `จัดการความเสี่ยงก่อนวางออเดอร์แรก` · `Rebate $5/lot ทำงานอย่างไร` · `อ่านใบอนุญาตโบรกเกอร์อย่างไร`

### CTABanner — `พร้อมลงมือเทรดจริง?` · `ทัก LINE OA ติดต่อ admin` · `เปิดบัญชี` `[คงเดิม]`

### Article detail `/articles/[slug]` — meta `โดยทีม beston · [date] · X นาทีอ่าน` · related `บทความที่เกี่ยวข้อง` · end CTA `อยากลองใช้จริงไหม?` `[คงเดิม]`

---

# 9) RISK DISCLOSURE — `/legal/risk-disclosure` `[compliance — ห้ามแต่งเสริม]`

### Hero (compact) — `เอกสารทางกฎหมาย` / `การเปิดเผยความเสี่ยง (Risk Disclosure)` / `โปรดอ่านอย่างละเอียดก่อนตัดสินใจเทรด` `[คงเดิม]`

### LegalBody `[คงเดิม — โครงสร้างถูกต้อง]`
- Mandatory: `Forex/CFD และ Leverage มีความเสี่ยงสูง อาจทำให้สูญเสียเงินลงทุน โปรดศึกษาข้อมูลและความเสี่ยงก่อนตัดสินใจ`
- 7 sections: ลักษณะความเสี่ยง · Leverage · สภาพคล่อง/ความผันผวน · ไม่รับประกันผลกำไร · ความเหมาะสม · การกำกับดูแลและเขตอำนาจ `[verify registry/wording]` · ติดต่อ/ร้องเรียน (`support@bestonfx.com`)
- _Note:_ เนื้อหากฎหมายฉบับเต็มรอทีม Legal `[verify]`. AIChatWidget **OFF** บนหน้านี้.

---

## [NEEDS INPUT] — ยืนยันก่อน publish (จาก compliance-copy-rules)
- ใบอนุญาต/ทะเบียน FSCA/MSB + entity wording — Legal
- Spread / Commission / Leverage สำหรับ Standard และเงื่อนไข Demo Account — Ops
- Rebate $5/lot: ยืนยันอัตรา + eligibility + เงื่อนไขฉบับเต็ม — Ops
- ช่องทางฝาก-ถอน + SLA "ถอนทุกวัน" — Ops/Finance
- fund segregation (เงินทุนแยกบัญชี) ยืนยันได้แค่ไหน — Legal/Finance
- อัตรา + รอบจ่ายคอมมิชชัน IB — Ops
- LINE OA URL + QR + เวลาทำการ — Operations
- จำนวนคู่เงิน/สินทรัพย์จริง — Ops
- Swap-Free eligibility — Ops
- ลิงก์ดาวน์โหลด MT5 (Win/macOS/Web) + EA support — Ops
- MarketsTicker: live feed source — Ops
- ตัวเลขผู้ใช้/ปริมาณถอน (ถ้าจะเปิด Stats) + testimonials จริง — Marketing/Legal
- เนื้อหา Risk Disclosure / Terms / Privacy ฉบับเต็ม — Legal
