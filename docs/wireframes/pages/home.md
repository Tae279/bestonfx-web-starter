# Wireframe — Home `/`

_Last updated: 2026-06-01. Current source: `docs/research/bestonfx-framer-source-of-truth-2026-06-01.md`._

> **เป้าหมายของหน้า:** ภายใน 5 วินาทีแรก ต้องสื่อว่า `Trade Smarter Not Harder`: เทรดบน MT5 ด้วยข้อมูลที่ชัดเจนขึ้น, เข้าใจ Rebate ตาม T&C, เห็นความเสี่ยงที่ควรรู้ และมีทีมไทยช่วยดูแล แล้วพาผู้ใช้ไปที่ **เปิดบัญชี** หรือ **ทัก LINE OA ติดต่อ admin**.
> **CTA หลัก:** `เปิดบัญชี` · **CTA รอง:** `ทัก LINE OA ติดต่อ admin`
> **ระดับเอฟเฟกต์:** เต็ม — ใช้ hero ที่ pin ตอน scroll และ layered parallax ได้ แต่ฐานต้องนิ่ง น่าเชื่อถือ และไม่กลบข้อความความเสี่ยง.
> **Component ที่ใช้:** Navbar · RiskDisclosureBar · Hero/TerminalHero · RegulatoryStrip · FeatureGrid · MarketsTicker · AccountComparison(preview) · StepProcess · FeatureSplit · Stats(gated) · Testimonial(gated) · ArticleGrid(teaser) · FAQ · CTABanner · Footer · AIChatWidget

> **Anti-drift:** Do not add the full `TradingToolsGrid` or `IBPartnerCTA` to Home. Tools/calculators belong on `/tools`; IB/partner conversion belongs on `/partners`.

---

## ลำดับ section (บน → ล่าง)

### 1. RiskDisclosureBar — `Sticky`
- **โครง:** แถบ sticky เต็มความกว้างอยู่เหนือ navbar, พื้นหลัง amber `#fff7ed`, icon shield ซ้าย, ข้อความบรรทัดเดียว, link `อ่านเพิ่มเติม` ขวา.
- **ข้อความ:** `Forex/CFD และ Leverage มีความเสี่ยงสูง อาจทำให้สูญเสียเงินลงทุน โปรดศึกษาข้อมูลและความเสี่ยงก่อนตัดสินใจ`
- **เหตุผล UX:** การเตือนความเสี่ยงเหนือ fold เป็นแพตเทิร์นของเว็บโบรกเกอร์ที่จริงจัง และช่วยสร้าง trust เพราะไม่ซ่อนความเสี่ยงไว้ท้ายหน้า.
- **การตอบสนอง:** เดสก์ท็อป ใช้หนึ่งบรรทัด; มือถือ แตกเป็นสองบรรทัดได้ แต่ icon และ link ต้องยังเห็น.

### 2. Navbar — `Default → Condensed`
- **โครง:** logo ซ้าย · nav กลาง · `เข้าสู่ระบบ` + `เปิดบัญชี` แบบ blue pill ทางขวา; เมื่อ scroll เกิน 40px ให้ bar condensed และมี blur.
- **เหตุผล UX:** CTA หลักต้องอยู่ใกล้มือเสมอ เพื่อให้การเปิดบัญชีไม่ไกลเกินหนึ่ง click.
- **การตอบสนอง:** links เปลี่ยนเป็น hamburger; `เปิดบัญชี` ยังอยู่บน bar.

### 3. Hero — `TerminalHero`
- **โครง:** สองคอลัมน์. ซ้ายเป็น eyebrow · H1 สองบรรทัด · subhead · CTA คู่ · proof line. ขวาเป็น trading terminal mockup พร้อม soft blue bloom และต้องมี label ว่าเป็นภาพตัวอย่าง.
- **ข้อความ (founder override — Angle 1):**
  - Eyebrow: `โบรกเกอร์ Forex/CFD เพื่อคนไทย`
  - H1: **`Trade Smarter Not Harder`**
  - Subhead: `เทรดบน MT5 ด้วยข้อมูลที่ชัดเจนขึ้น: ต้นทุน, Rebate ตาม T&C, ความเสี่ยงที่ควรรู้ และทีมไทยที่คุยผ่าน LINE OA ได้`
  - Risk note: `การเทรดมีความเสี่ยง — เราอยากให้คุณรู้ก่อน ไม่ใช่รู้ทีหลัง`
  - Proof line: `เทรดบน MT5 · Rebate ตาม T&C · รายละเอียดบัญชี [verify]`
  - CTA หลัก: `เปิดบัญชี` · CTA รอง: `ทัก LINE OA ติดต่อ admin`
  - Device label: `ตัวอย่างแดชบอร์ด — ไม่ใช่ข้อมูลจริง`
- **เหตุผล UX:** ใช้ English headline สั้นแบบ campaign hook ที่ CEO/founder ชอบ แล้วให้ subhead ภาษาไทยขยาย value ที่ตรวจสอบได้: MT5, ต้นทุน, Rebate ตาม T&C, ความเสี่ยง และ LINE support.
- **การตอบสนอง:** stack เป็น copy ก่อนภาพ; H1 จาก `56→34px`; CTA เต็มความกว้าง.

### 4. RegulatoryStrip — `Logo Cloud`
- **โครง:** strip สี muted, มี label และ badge 4 ตัว: FSCA · CySEC · MSB · MetaTrader 5.
- **ข้อความ:** label `ดำเนินงานภายใต้การกำกับดูแล` · `FSCA · CySEC · MSB · MT5 [verify เลขที่]`
- **เหตุผล UX:** หลัง value claim ต้องรีบให้ proof เพื่อปิด objection เรื่องความน่าเชื่อถือก่อนที่ผู้ใช้จะสงสัย.
- **การตอบสนอง:** เดสก์ท็อป 4 คอลัมน์; มือถือ เป็น grid 2×2.

### 5. FeatureGrid — `3-col` (trust pillars)
- **โครง:** header + icon cards 3 ใบ.
- **ข้อความ:**
  - Header: `ทำไมต้อง beston`
  - Card 1 — `เห็นทุกต้นทุน`: `เปิด MT5 ดูเองได้ทุกบาท ไม่มีค่าที่ซ่อน`
  - Card 2 — `เตือนก่อนเสี่ยง`: `เราบอกความเสี่ยงก่อน ไม่ใช่ตอนสายเกินไป`
  - Card 3 — `ดูแลด้วยใจ`: `ทัก LINE OA ติดต่อ admin ทีมไทยตอบเอง`
- **เหตุผล UX:** 3 pillars ทำให้จุดต่างของแบรนด์ชัด: โปร่งใส, risk-first, และทีมไทย ไม่ใช่ hype แบบโบรกเกอร์ทั่วไป.
- **การตอบสนอง:** 3 คอลัมน์ → 1 คอลัมน์ พร้อม reveal ทีละใบแบบเบา ๆ.

### 6. MarketsTicker — `Gallery/marquee`
- **โครง:** chips แนวนอนแบบเลื่อนได้ (symbol · price · %) และต้องติด label ว่าเป็นภาพตัวอย่าง.
- **ข้อความ:** label `ตัวอย่าง — ไม่ใช่ราคาจริง` · chips `EURUSD · XAUUSD · US30 · USOIL · BTCUSD`
- **เหตุผล UX:** เพิ่มพลังแบบตลาดสดและสื่อว่ามีสินทรัพย์หลายประเภท โดยไม่อ้างราคา real-time ก่อน feed พร้อม.
- **การตอบสนอง:** chips เล็กลง; มือถือใช้แตะเพื่อหยุดแทน hover.

### 7. AccountComparison — `Pricing preview` (2 cards)
- **โครง:** account cards 2 ใบ (Standard · Demo Account), แต่ละใบมี purpose สั้น ๆ + CTA; มี link `ดูรายละเอียดบัญชี →` ไป `/accounts`.
- **ข้อความ:** H2 `เลือกบัญชีง่าย ๆ แค่ 2 แบบ` · sub `Standard สำหรับเทรดจริง ส่วน Demo Account สำหรับลองระบบและฝึกใช้ MT5 ด้วยเงินจำลอง` · Standard CTA `เปิดบัญชี` · Demo Account CTA `ทัก LINE OA ติดต่อ admin` · link `ดูรายละเอียดบัญชี →`
- **เหตุผล UX:** คนที่มี intent สูงจะเลือก path ได้ทันที โดยไม่สร้าง tier เพิ่มที่ยังไม่ยืนยัน.
- **การตอบสนอง:** 2 คอลัมน์ → stack เป็นแนวตั้ง cards.

### 8. StepProcess — `3-step` (open account)
- **โครง:** numbered cards 3 ใบ + CTA ท้าย flow.
- **ข้อความ:**
  - Header: `เปิดบัญชีเสร็จใน 3 ขั้น ไม่ถึง 5 นาที`
  - Step 1 `สมัคร`: `กรอกข้อมูลและยืนยันตัวตน (KYC)`
  - Step 2 `ทัก LINE OA`: `คุยกับ admin เรื่องเอกสาร แพลตฟอร์ม และขั้นตอนบัญชี`
  - Step 3 `เตรียม MT5`: `ดาวน์โหลด MT5 และศึกษาความเสี่ยงก่อนเริ่มใช้งาน`
  - CTA: `เปิดบัญชี`
- **เหตุผล UX:** ลดความรู้สึกว่ายุ่งยาก เพราะผู้ใช้เห็นขั้นตอนชัดก่อนเริ่ม.
- **การตอบสนอง:** เดสก์ท็อป เป็น row; มือถือ เป็น vertical timeline.

### 9. FeatureSplit — `ImageRight` (Rebate program)
- **โครง:** copy + bullets ทางซ้าย, visual ทางขวา.
- **ข้อความ:**
  - H2: `ได้หรือเสีย ก็ได้คืนทุก lot`
  - Body: `Rebate $5 ต่อ lot คิดจากการเทรด ไม่ใช่ผลกำไร — เห็นชัด ไม่ต้องเดา (ตาม T&C ไม่ใช่สัญญากำไร)`
  - Bullets: `Lot ค้างอย่างน้อย 1 นาที` · `BTCUSD/US30/USOIL คิด lot ÷ 10` · `ไม่ใช่สัญญากำไร — เป็นเงินคืนตาม T&C`
  - CTA: `ดูเงื่อนไข Rebate`
- **เหตุผล UX:** Rebate เป็น hook หลัก แต่ต้องวางคู่กับ T&C/risk copy เพื่อไม่ให้ดูเหมือนสัญญากำไร.
- **การตอบสนอง:** stack และวาง visual ใต้ copy.

### 10. Stats — `3-col` `[GATED — disabled]`
- **สถานะ:** ซ่อนไว้จนกว่าจะ verify ตัวเลขผู้ใช้, withdrawal, หรือ instruments ได้จริง ห้ามใส่เลข placeholder.
- **เหตุผล UX:** fake stats ทำลาย trust ซึ่งเป็นแกนหลักของแบรนด์.

### 11. Testimonial — `Carousel` `[GATED — disabled]`
- **สถานะ:** ซ่อนไว้จนกว่าจะมี quote จริงพร้อม consent.

### 12. ArticleGrid — `Teaser` (3–4 latest)
- **โครง:** header + article cards 3–4 ใบ (cover · category · title · date).
- **ข้อความ:** header `ความรู้ที่ใช้ได้จริง ก่อนเสียเงินจริง` · sample titles `เริ่มต้นใช้ MT5 ใน 10 นาที` · `จัดการความเสี่ยงก่อนวางออเดอร์แรก` · `Rebate ทำงานอย่างไร`
- **เหตุผล UX:** สร้าง trust แบบค่อยเป็นค่อยไป, ช่วย SEO, และให้ทางเลือกที่ตัดสินใจง่ายสำหรับคนที่ยังไม่พร้อมเปิดบัญชี.
- **การตอบสนอง:** 4 คอลัมน์ → 2 คอลัมน์ → 1 คอลัมน์.

### 13. FAQ — `Accordion` (top 5)
- **โครง:** accordion 5 แถว + link `ยังมีคำถาม?` ไป Support.
- **ข้อความ (validated):** `beston กำกับดูแลโดยใคร?` · `ฝากขั้นต่ำเท่าไร? [verify]` · `ใช้แพลตฟอร์มไหน?` (MT5) · `Rebate $5/lot คืออะไร?` · `ถอนเงินใช้เวลานานแค่ไหน? [verify]`
- **เหตุผล UX:** ตอบ objection หลักก่อนผู้ใช้ bounce และรองรับ FAQPage JSON-LD.
- **การตอบสนอง:** accordion เต็มความกว้าง, tap target อย่างน้อย 44px.

### 14. CTABanner — `LineFirst`
- **โครง:** H2 centered + subhead + LINE OA QR บน เดสก์ท็อป + CTA คู่.
- **ข้อความ:** H2 `พร้อมเทรดบนความจริงแล้วหรือยัง?` · subhead `เปิดบัญชี หรือทัก LINE OA ติดต่อ admin ก่อนก็ได้ — เราไม่เร่งคุณ` · primary `ทัก LINE OA ติดต่อ admin` (green) · secondary `เปิดบัญชี`
- **เหตุผล UX:** ปิดหน้าด้วย conversion แบบไม่กดดัน; LINE-first เข้ากับพฤติกรรมผู้ใช้ไทยที่อยากคุยก่อนตัดสินใจ.
- **การตอบสนอง:** QR เปลี่ยนเป็น แตะเพื่อเพิ่ม button; CTA stack.

### 15. Footer — `Default` `[compliance-bound]`
- **โครง:** link columns 4 ชุด · LINE/social · legal entity + address · full risk block · regulator line · copyright.
- **ข้อความ:** tagline `โบรกเกอร์ที่โชว์ต้นทุนจริง คืน Rebate ทุก lot ดูแลโดยทีมไทย` · entity `บริษัท เบสตัน อินเตอร์เนชั่นแนล กรุ๊ป จำกัด` · address `111 ประดิษฐ์มนูธรรม แขวงลาดพร้าว กรุงเทพฯ 10230` · `support@bestonfx.com` · full risk warning.
- **เหตุผล UX:** ทำหน้าที่เป็น secondary nav + legal disclosure + identity proof เพื่อปิด trust loop.
- **การตอบสนอง:** 4 คอลัมน์ → stack เป็นแนวตั้ง/accordion; risk block ต้องเป็นข้อความเต็ม.

### Floating: AIChatWidget
- bubble มุมขวาล่าง พร้อม label `ผู้ช่วยอัตโนมัติ — ไม่ใช่คำแนะนำการลงทุน`. บนมือถือเปิดเป็น fullscreen sheet.
