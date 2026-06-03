# Wireframe — Accounts `/accounts`

> **เป้าหมายของหน้า:** หน้านี้คือหน้าตัดสินใจหลัก ให้ผู้ใช้เปรียบเทียบบัญชี, เลือกทางที่เหมาะกับตัวเอง และไปเปิดบัญชีโดยไม่สับสน.
> **CTA หลัก:** `เปิดบัญชี` ในแต่ละ account column · **CTA รอง:** `ทัก LINE OA ติดต่อ admin`
> **ระดับเอฟเฟกต์:** กลาง — ใช้ card reveal + parallax พื้นหลังแบบเบาได้ แต่ comparison ต้อง scan ง่าย และห้าม pin ระหว่าง scroll.
> **Component ที่ใช้:** Navbar · RiskDisclosureBar · Hero/SplitHero · AccountComparison(full) · RegulatoryStrip · StepProcess · FeatureGrid · FAQ · CTABanner · Footer · AIChatWidget

---

## ลำดับ section

### 1. RiskDisclosureBar — `Sticky`
### 2. Navbar — `Default`

### 3. Hero — `SplitHero`
- **ข้อความ:**
  - Eyebrow: `ประเภทบัญชี`
  - H1: `เลือกบัญชีให้ตรงจังหวะการเทรด`
  - Subhead: `มีแค่ 2 ทางเลือก: Standard สำหรับเทรดจริง และ Demo Account สำหรับลองระบบด้วยเงินจำลอง`
  - CTA หลัก: `เปิดบัญชี` · CTA รอง: `ทัก LINE OA ติดต่อ admin`
- **เหตุผล UX:** วางหน้าบัญชีเป็น “การตัดสินใจ” ไม่ใช่การเร่งขาย เหมาะกับผู้ใช้ที่มี intent สูง.

### 4. AccountComparison — `Pricing full` ⭐ (core section)
- **โครง:** 2 คอลัมน์ (Standard · Demo Account), rows ต้อง align กัน, มี CTA ของแต่ละคอลัมน์. Standard ใช้ tag `บัญชีจริง`; Demo Account ใช้ tag `บัญชีทดลอง`.
- **ข้อความ (rows, ทุกช่องที่เป็นเงื่อนไขต้องมี `[verify]`):**
  - `เหมาะสำหรับ` — Standard: `เริ่มเทรดจริงบน MT5` · Demo Account: `ลองระบบ ฝึกวางออเดอร์ และทำความคุ้นเคยกับ MT5`
  - `เงินที่ใช้` — Standard: `เงินจริง` · Demo Account: `เงินจำลอง`
  - `Spread / Commission` — Standard: `[verify]` · Demo Account: `สภาพแวดล้อมทดลอง ไม่ใช่เงื่อนไขเงินจริง [verify]`
  - `Leverage สูงสุด` — Standard: `[verify]` · Demo Account: `[verify]`
  - `Rebate` — Standard: `$5/lot สำหรับรายการที่เข้าเงื่อนไข` · Demo Account: `ไม่เข้าเงื่อนไขรับ Rebate`
  - `แพลตฟอร์ม` — `MT5`
  - CTA: Standard `เปิดบัญชี` · Demo Account `ทัก LINE OA ติดต่อ admin`
- **เหตุผล UX:** มีแค่ 2 ทางเลือกเพื่อลด cognitive load: เทรดจริง vs ฝึกใช้ระบบด้วยเงินจำลอง. Demo Account ต้องเป็น learning/testing path ไม่ใช่ promise เรื่องผลลัพธ์.
- **การตอบสนอง:** ตาราง 2 คอลัมน์ → stack เป็นแนวตั้ง cards, หนึ่งบัญชีต่อ card พร้อม CTA ที่หาเจอง่าย.

### 5. RegulatoryStrip — `Logo Cloud`
- วางข้อมูลให้ตรวจสอบตรงจุดตัดสินใจ: FSCA · MSB · MT5 · เอกสารบริษัท `[verify registry/wording]`.

### 6. StepProcess — `3-step` (open account)
- `สมัคร + KYC` → `ทัก LINE OA ติดต่อ admin` → `เตรียม MT5 และอ่านความเสี่ยง`. CTA `เปิดบัญชี`.
- **เหตุผล UX:** หลังเลือกบัญชีแล้วต้องเห็นขั้นต่อไปที่ปลอดภัย โดยไม่ผลักไป deposit CTA.

### 7. FeatureGrid — `3-col` (account benefits)
- `เงื่อนไขบัญชีไม่ซับซ้อน` · `ซัพพอร์ตภาษาไทยผ่าน LINE OA` · `Rebate $5/lot สำหรับ Standard ที่เข้าเงื่อนไข`

### 8. FeatureSplit — `ImageRight` (Fee transparency)
- **ข้อความ:** H2 `ไม่มีค่าซ่อน ทุกบาทเห็นชัด`
- **เหตุผล UX:** ย้ำ campaign spine หลัง comparison table: ความโปร่งใสของ spread/commission ดีกว่าการอ้างว่า “ราคาดีที่สุด”.

### 9. FAQ — `Accordion` (account-focused)
- `Standard ต่างจาก Demo Account อย่างไร?` · `Demo Account ใช้เงินจริงไหม?` · `มีค่า Commission/Swap ไหม? [verify]` · `KYC ใช้เวลานานแค่ไหน? [verify]`

### 10. CTABanner — `AccountFirst`
- H2 `ยังไม่แน่ใจว่าจะเริ่มแบบไหน?` · primary `เปิดบัญชี` · secondary `ทัก LINE OA ติดต่อ admin`

### 11. Footer — `Default` `[compliance-bound]`
### Floating: AIChatWidget
