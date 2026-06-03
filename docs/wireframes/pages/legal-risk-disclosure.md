# Wireframe — Risk Disclosure `/legal/risk-disclosure`

> **เป้าหมายของหน้า:** ไม่มี. หน้านี้มีไว้เพื่อให้ข้อมูลและทำให้ถูกต้องตาม compliance. เป้าหมายคือความชัดเจน, ครบถ้วน, และ defensible ทางกฎหมาย. ความอ่านง่ายและ trust สำคัญกว่า wow. **ห้ามมี conversion pressure.**
> **CTA หลัก:** ไม่มี ใช้แค่ลิงก์อำนวยความสะดวก · **CTA รอง:** `กลับหน้าหลัก` / `ติดต่อ LINE`
> **ระดับเอฟเฟกต์:** น้อยที่สุด — fade ตอนโหลดได้เท่านั้น หลังจากนั้นไม่ใช้ parallax และไม่ใช้ motion ที่ผูกกับการ scroll.
> **Component ที่ใช้:** Navbar · RiskDisclosureBar(inline) · Hero/CenteredHero(compact) · LegalBody · Footer
> **หมายเหตุ:** ปิด AIChatWidget บน legal pages เพื่อเลี่ยง upsell/assist บนเอกสาร compliance.

---

## ลำดับ section

### 1. RiskDisclosureBar — `Sticky` (same as all pages)

### 2. Navbar — `Default`

### 3. Hero — `CenteredHero` (compact, no visual)
- **ข้อความ:**
  - Eyebrow: `เอกสารทางกฎหมาย`
  - H1: `การเปิดเผยความเสี่ยง (Risk Disclosure)`
  - Subhead: `โปรดอ่านอย่างละเอียดก่อนตัดสินใจเทรด`
- **เหตุผล UX:** header ต้องนิ่งและเหมือนเอกสารจริง เพื่อสื่อความจริงจัง ไม่ใช่ marketing tone.

### 4. LegalBody — เนื้อหากฎหมายแบบยาว
- **โครง:** คอลัมน์อ่านง่ายหนึ่งคอลัมน์, หัวข้อเรียงเลข, table of contents พร้อม anchor links ที่ด้านบน.
- **ข้อความบังคับ (validated risk warning, full):**
  `Forex/CFD และ Leverage มีความเสี่ยงสูง อาจทำให้สูญเสียเงินลงทุน โปรดศึกษาข้อมูลและความเสี่ยงก่อนตัดสินใจ`
- **โครงหัวข้อ:**
  1. `ลักษณะความเสี่ยงของ Forex/CFD`
  2. `ความเสี่ยงจาก Leverage` — high leverage ขยายได้ทั้งกำไรและขาดทุน
  3. `ความเสี่ยงด้านสภาพคล่องและความผันผวน`
  4. `ไม่มีการรับประกันผลกำไร` — ต้องมี no-guarantee statement ชัดเจน
  5. `ความเหมาะสมของนักลงทุน` — ไม่เหมาะกับทุกคน
  6. `การกำกับดูแลและเขตอำนาจ` — FSCA/MSB `[verify registry numbers and wording]`
  7. `ข้อมูลติดต่อและการร้องเรียน` — `support@bestonfx.com`
- **เหตุผล UX:** numbered + anchored + complete ทำให้เอกสารป้องกันความเสี่ยงทางกฎหมายได้ดีขึ้นและให้ข้อมูลจริงกับผู้ใช้.
- **การตอบสนอง:** readable column เต็มความกว้าง; TOC ยุบเป็น sticky dropdown บนมือถือ.

### 5. Footer — `Default` `[compliance-bound]`
- มี full risk block + entity + license line เพื่อย้ำข้อมูลแม้อยู่ใน legal page.

---

> **Legal routes พี่น้อง** (ใช้ minimal template เดียวกัน, `[to be written]`): `/legal/terms`, `/legal/privacy`, `/regulatory-disclosures`. แต่ละหน้า reuse Hero/CenteredHero(compact) + LegalBody + Footer และปิด AIChatWidget.
