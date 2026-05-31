# Wireframe — Partners (IB) `/partners`

> **เป้าหมายของหน้า:** อธิบายเส้นทาง partner โดยไม่สัญญารายได้ แล้วพาคนที่สนใจไปคุยกับ admin เพื่อตรวจเงื่อนไข.
> **CTA หลัก:** `ทัก LINE OA ติดต่อ admin` · **CTA รอง:** `ดูเงื่อนไขพาร์ทเนอร์ [verify]`
> **ระดับเอฟเฟกต์:** กลาง-สูง — ใช้ story แบบเลื่อนแล้วเปลี่ยนตามจังหวะ + reveal ได้; estimator ต้องตอบสนองทันทีและไม่ผูกกับ scroll.
> **Component ที่ใช้:** Navbar · RiskDisclosureBar · Hero/SplitHero · FeatureGrid · StepProcess · Calculator(IBCommissionEstimator) · FeatureSplit · FAQ · CTABanner · Footer · AIChatWidget

---

## ลำดับ section

### 1. RiskDisclosureBar — `Sticky`
### 2. Navbar — `Default`

### 3. Hero — `SplitHero`
- **ข้อความ:**
  - Eyebrow: `โปรแกรมพาร์ทเนอร์ / IB`
  - H1: `แนะนำเพื่อน รับคืนทุกการเทรด`
  - Subhead: `คอมมิชชันโปร่งใส จ่ายตรงเวลา ติดตามได้เรียลไทม์ — อัตราจริงรอยืนยัน`
  - CTA หลัก: `ทัก LINE OA ติดต่อ admin` · CTA รอง: `ดูเงื่อนไขพาร์ทเนอร์ [verify]`
- **เหตุผล UX:** ความสนใจของ partner ต้องถูก route ผ่าน admin review และห้ามสื่อว่า approval หรือรายได้เป็นเรื่องอัตโนมัติ.

### 4. FeatureGrid — `3-col` (why partner)
- `ค่าคอมมิชชั่นโปร่งใส [verify โครงสร้าง]` · `แดชบอร์ดติดตามผลแบบเรียลไทม์` · `ทีมซัพพอร์ตพาร์ทเนอร์ภาษาไทย`
- **การตอบสนอง:** 3 คอลัมน์ → 1 คอลัมน์.

### 5. StepProcess — `3-step` (become a partner)
- `ทัก LINE OA` → `ยืนยันเงื่อนไขพาร์ทเนอร์ [verify]` → `รับสื่อที่ผ่านการอนุมัติ`. CTA `ทัก LINE OA ติดต่อ admin`.

### 6. Calculator — `IBCommissionEstimator` ⭐
- **โครง:** input (จำนวนลูกค้าแนะนำ · ปริมาณเทรดเฉลี่ย/lot) → estimated commission → disclaimer → CTA.
- **ข้อความ:** disclaimer `ตัวเลขเป็นการประมาณการ ไม่ใช่การการันตีรายได้ ขึ้นกับกิจกรรมจริงของลูกค้า [verify อัตรา]` · CTA `ทัก LINE OA ติดต่อ admin`
- **เหตุผล UX:** Earnings estimate เป็น recruiter hook ที่แรงมาก แต่ต้องคุมด้วย no-guarantee language ชัดเจน.
- **การตอบสนอง:** เดสก์ท็อป วางคู่กัน; มือถือ stack เป็นแนวตั้ง และ result ต้องอ่านง่าย.

### 7. FeatureSplit — `ImageRight` (partner dashboard preview)
- **ข้อความ:** H2 `ติดตามผลทุกอย่างในแดชบอร์ดเดียว` · body `ดูจำนวนลูกค้า, ปริมาณเทรด และค่าคอมมิชชั่นแบบเรียลไทม์ [verify]` · label `ตัวอย่างแดชบอร์ด — ไม่ใช่ข้อมูลจริง` · CTA `ทัก LINE OA ติดต่อ admin`

### 8. FAQ — `Accordion` (partner-focused)
- `ค่าคอมมิชชั่นคิดอย่างไร? [verify]` · `จ่ายค่าคอมเมื่อไร? [verify]` · `ต้องมีลูกค้าขั้นต่ำไหม? [verify]` · `สมัครต้องใช้เอกสารอะไร? [verify]`

### 9. CTABanner — `LineFirst`
- H2 `สนใจพาร์ทเนอร์ ทัก admin ก่อนเริ่ม` · primary `ทัก LINE OA ติดต่อ admin` · secondary `ดูเงื่อนไขพาร์ทเนอร์ [verify]`

### 10. Footer — `Default` `[compliance-bound]`
### Floating: AIChatWidget

---

> **เส้นทางที่เกี่ยวข้อง (นอกขอบเขต wireframe นี้):** `/partners/dashboard` — แดชบอร์ดสำหรับพาร์ทเนอร์ที่ต้องเข้าสู่ระบบ. ใช้เอฟเฟกต์ต่ำและเน้นการใช้งานจริง; แยก wireframe เมื่อเริ่มสร้าง dashboard.
