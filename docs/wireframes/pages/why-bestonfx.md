# Wireframe — Why beston `/why-bestonfx`

> **เป้าหมายของหน้า:** เปลี่ยนคนที่ยังลังเลให้เชื่อใจมากขึ้น โดยตอบ objection หลักของโบรกเกอร์ offshore สำหรับผู้ใช้ไทย: “ไว้ใจเงินเราได้ไหม?” ผ่าน regulation, transparency และการดูแลแบบไทย-first แล้วพาไป `เปิดบัญชี`.
> **CTA หลัก:** `เปิดบัญชี` · **CTA รอง:** `ดูข้อมูลใบอนุญาต` / `ทัก LINE OA ติดต่อ admin`
> **ระดับเอฟเฟกต์:** เต็ม — ใช้ story แบบเลื่อนแล้วเปลี่ยนตามจังหวะ และเพิ่ม depth บน trust pillars ได้; เมื่อผู้ใช้ตั้งค่า reduced motion ให้เหลือแค่ fade.
> **Component ที่ใช้:** Navbar · RiskDisclosureBar · Hero/SplitHero · FeatureSplit · FeatureGrid · RegulatoryStrip · Stats(gated) · Testimonial(gated) · ArticleGrid(related) · CTABanner · Footer · AIChatWidget

---

## ลำดับ section

### 1. RiskDisclosureBar — `Sticky`
- ใช้ข้อความ validated และ behavior เดียวกับทุกหน้า.

### 2. Navbar — `Default`

### 3. Hero — `SplitHero`
- **โครง:** copy ซ้าย / ภาพประกอบขวา; mood ต้องสงบ พรีเมียม และโปร่งใส ไม่ใช่ luxury แบบดำทอง.
- **ข้อความ:**
  - Eyebrow: `ทำไมต้อง beston`
  - H1: `เราโชว์ตัวเลขจริง ไม่ใช่ตัวเลขสวย`
  - Subhead: `ข้อมูลที่คุณตรวจสอบเองได้ สำคัญกว่าคำโฆษณา`
  - CTA หลัก: `เปิดบัญชี` · CTA รอง: `ดูข้อมูลใบอนุญาต`
- **เหตุผล UX:** ตั้ง honesty frame ทันที ทำให้แบรนด์ต่างจากคู่แข่งที่เน้น hype.
- **การตอบสนอง:** stack และให้ copy มาก่อนภาพ.

### 4. FeatureSplit — `ImageLeft` (Regulation)
- **ข้อความ:**
  - H2: `เอกสารบริษัทและข้อมูลให้ตรวจสอบ`
  - Body: `beston แสดงเอกสาร FSCA/MSB และข้อมูลบริษัทสำหรับตรวจสอบก่อนตัดสินใจ`
  - Bullets: `FSCA (South Africa) เลขที่ [verify]` · `MSB registration [verify]` · `ปฏิบัติตาม AML/KYC ตามกฎหมาย`
  - CTA: `ดูเอกสารบริษัท`
- **เหตุผล UX:** เริ่ม trust argument ด้วยข้อมูลที่ตรวจสอบต่อได้ โดยไม่ใช้ wording เกินหลักฐานที่ยืนยันแล้ว.
- **การตอบสนอง:** stack.

### 5. FeatureSplit — `ImageRight` (Trading conditions)
- **ข้อความ:**
  - H2: `เช็คเงื่อนไขบน MT5 ก่อนตัดสินใจ`
  - Body: `สเปรดและเงื่อนไขการเทรดลอยตัวตามตลาด ตรวจสอบบน MT5 ก่อนเปิดออเดอร์`
  - Bullets: `สเปรดลอยตัว ดูได้บน MT5` · `เงื่อนไข Rebate อธิบายแยกเป็นข้อ` · `ถอนเงินได้ทุกวัน [verify SLA]`
- **เหตุผล UX:** Active trader ต้องการข้อมูลที่ตรวจสอบเองได้ จึงควรพาไปดูเงื่อนไขจริงบนแพลตฟอร์มแทนการใช้คำโฆษณา.

### 6. FeatureGrid — `3-col` (Thai-first care)
- **ข้อความ:** header `ดูแลแบบเข้าใจคนไทย` · cards: `ซัพพอร์ตภาษาไทยผ่าน LINE` · `ฝาก/ถอนช่องทางไทย [verify]` · `เนื้อหาให้ความรู้ภาษาไทย`
- **การตอบสนอง:** 3 คอลัมน์ → 1 คอลัมน์.

### 7. RegulatoryStrip — `Logo Cloud`
- FSCA · MSB · MT5 · เอกสารบริษัท พร้อม registry wording และ numbers เป็น `[verify]`.

### 8. Stats — `3-col` `[GATED]`
- ปิดไว้จนกว่าจะมีตัวเลข verified; ถ้าต้องใช้ proof อาจเปลี่ยนเป็น founding year หรือ withdrawals processed เฉพาะเมื่อยืนยันแล้ว.

### 9. Testimonial — `Carousel` `[GATED]`
- ปิดไว้จนกว่าจะมี quote จริงพร้อม consent.

### 10. ArticleGrid — `Teaser` (trust/education related)
- Titles: `อ่านใบอนุญาตโบรกเกอร์อย่างไร` · `ความเสี่ยงของ Leverage` · `ตรวจสอบสเปรดบน MT5`

### 11. CTABanner — `AccountFirst`
- H2 `ตัดสินใจด้วยข้อมูล ไม่ใช่คำสัญญา` · primary `เปิดบัญชี` · secondary `สอบถามผ่าน LINE`

### 12. Footer — `Default` `[compliance-bound]`

### Floating: AIChatWidget
