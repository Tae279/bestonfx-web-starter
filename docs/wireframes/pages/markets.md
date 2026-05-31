# Wireframe — Markets `/markets`

> **เป้าหมายของหน้า:** ตอบคำถามแรกของ trader ว่า “มีตลาดที่ฉันอยากเทรดไหม?” โดยโชว์ breadth ของสินทรัพย์ (FX, metals, indices, oil, crypto) แล้วพาไป `เปิดบัญชี`.
> **CTA หลัก:** `เปิดบัญชี` · **CTA รอง:** `ดูสเปรดบน MT5`
> **ระดับเอฟเฟกต์:** สูง — ใช้ parallax instrument layers + ticker ได้ แต่ข้อมูลต้องอ่านง่ายและมี label ตัวอย่าง/verify.
> **Component ที่ใช้:** Navbar · RiskDisclosureBar · Hero/SplitHero · MarketsTicker · FeatureGrid · FeatureSplit · FAQ · CTABanner · Footer · AIChatWidget

---

## ลำดับ section

### 1. RiskDisclosureBar — `Sticky`
### 2. Navbar — `Default`

### 3. Hero — `SplitHero`
- **ข้อความ:**
  - Eyebrow: `ตลาดที่เทรดได้`
  - H1: `ตลาดที่คุณอยากเทรด ครบในที่เดียว`
  - Subhead: `เทรดทุกตลาดบนแพลตฟอร์มเดียว เห็นสเปรดก่อนกด`
  - CTA หลัก: `เปิดบัญชี` · CTA รอง: `ดูสเปรดสดบน MT5`
- **เหตุผล UX:** headline ต้องทำให้ trader เห็นตลาดของตัวเองตั้งแต่บรรทัดแรก.

### 4. MarketsTicker — `Gallery/marquee`
- Chips `EURUSD · GBPUSD · XAUUSD · US30 · NAS100 · USOIL · BTCUSD`, label `ตัวอย่าง — ไม่ใช่ราคาจริง [verify feed]`.
- **เหตุผล UX:** สร้างความรู้สึก live-market และทำให้สินทรัพย์จับต้องได้ แต่ยังไม่อ้างราคา live จนกว่า feed จะพร้อม.

### 5. FeatureGrid — `2-col` (asset classes)
- **ข้อความ:** header `ประเภทสินทรัพย์`
  - `Forex` — `คู่เงินหลักและรอง [verify จำนวนคู่]`
  - `โลหะมีค่า` — `ทองคำ เงิน (XAUUSD, XAGUSD)`
  - `ดัชนีหุ้นโลก` — `US30, NAS100, และอื่น ๆ`
  - `พลังงาน` — `น้ำมัน (USOIL)`
  - `คริปโต` — `BTCUSD และคู่ยอดนิยม`
- **เหตุผล UX:** การจัดเป็น asset class ทำให้ scan ง่าย และแต่ละ tile ช่วย reassure trader แต่ละกลุ่ม.
- **การตอบสนอง:** 2 คอลัมน์ → 1 คอลัมน์.

### 6. FeatureSplit — `ImageRight` (trading conditions)
- **ข้อความ:**
  - H2: `เห็นสเปรดจริง ก่อนเปิดออเดอร์`
  - Body: `สเปรดลอยตัวตามตลาด ตรวจสอบสดบน MT5 ก่อนเปิดออเดอร์`
  - Bullets: `สเปรด [verify]` · `Leverage 1:50–1:1000 [verify]` · `ดำเนินคำสั่งบน MetaTrader 5`
- **เหตุผล UX:** Active trader สนใจเงื่อนไขการเทรด แต่ต้องสื่อแบบซื่อสัตย์: ดู live spread ได้ ไม่ใส่ตัวเลข fixed ถ้ายังไม่ verify.

### 7. FAQ — `Accordion` (markets-focused)
- `มีสินทรัพย์อะไรบ้าง?` · `Spread เริ่มต้นเท่าไร?` (ให้เช็ค live บน MT5) · `รองรับ Leverage เท่าไร? [verify]` · `รองรับ Copy Trading ไหม? [verify]`

### 8. CTABanner — `AccountFirst`
- H2 `เริ่มเทรดตลาดที่คุณถนัด` · primary `เปิดบัญชี` · secondary `ทัก LINE OA ติดต่อ admin`

### 9. Footer — `Default` `[compliance-bound]`
### Floating: AIChatWidget
