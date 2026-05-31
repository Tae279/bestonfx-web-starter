# Wireframe — Support `/support`

> **เป้าหมายของหน้า:** ทำให้ผู้ใช้ขอความช่วยเหลือได้ในหนึ่ง click. สำหรับผู้ใช้ไทยให้ LINE-first; คำถามง่ายให้ FAQ ช่วยตอบ ส่วนที่เหลือส่งต่อ LINE/email. โทนคือ reassurance ไม่ใช่ persuasion.
> **CTA หลัก:** `ทัก LINE OA ติดต่อ admin` · **CTA รอง:** `ส่งอีเมล`
> **ระดับเอฟเฟกต์:** ต่ำ — fade เท่านั้น. LINE/QR/form ต้องเข้าถึงได้ทันที และห้ามมี motion ที่กั้นการใช้งาน.
> **Component ที่ใช้:** Navbar · RiskDisclosureBar · Hero/CenteredHero · SupportChannels · FAQ · CTABanner · Footer · AIChatWidget

---

## ลำดับ section

### 1. RiskDisclosureBar — `Sticky`
### 2. Navbar — `Default`

### 3. Hero — `CenteredHero`
- **ข้อความ:**
  - Eyebrow: `ศูนย์ช่วยเหลือ`
  - H1: `มีคำถาม? ทีมไทยพร้อมตอบ`
  - Subhead: `ทักทาง ทัก LINE OA ติดต่อ admin หรืออีเมล ไม่ต้องรอนาน`
  - CTA หลัก: `ทัก LINE OA ติดต่อ admin` · CTA รอง: `ดู FAQ`
- **เหตุผล UX:** เริ่มด้วยความมั่นใจและช่องทางที่เร็วที่สุด ห้าม upsell บน help page.

### 4. SupportChannels — `Contact`
- **โครง:** channel cards + contact form แบบใส่หรือไม่ใส่ก็ได้ + office address.
- **ข้อความ:**
  - LINE OA card: `ทัก LINE OA ติดต่อ admin — ตอบเร็วที่สุด`
  - Email card: `support@bestonfx.com`
  - Hours: `เวลาทำการ [verify]`
  - Office: `บริษัท เบสตัน อินเตอร์เนชั่นแนล กรุ๊ป จำกัด · 111 ประดิษฐ์มนูธรรม แขวงลาดพร้าว กรุงเทพฯ 10230`
  - Form fields: ชื่อ · อีเมล · หัวข้อ · ข้อความ → `ส่งข้อความ`
- **เหตุผล UX:** วาง LINE card ก่อนเพราะตรงกับพฤติกรรม support ของผู้ใช้ไทย; ที่อยู่และชื่อบริษัทช่วยเสริมความน่าเชื่อถือ.
- **การตอบสนอง:** cards stack เป็นแนวตั้ง; QR เปลี่ยนเป็น แตะเพื่อเพิ่ม button; form เต็มความกว้าง.

### 5. FAQ — `Accordion` (full set, all 15)
- **โครง:** FAQ ครบชุด + search/filter แบบใส่หรือไม่ใส่ก็ได้.
- **ข้อความ:** ใช้รายการ validated ทั้งหมด เช่น regulation, deposit/withdrawal `[verify]`, instruments, spread (ให้เช็ค live บน MT5), leverage `[verify]`, demo, MT5 platform, commission/swap `[verify]`, KYC `[verify]`, Rebate $5/lot, articles, copy trading `[verify]`.
- **เหตุผล UX:** self-service deflection ช่วยให้ผู้ใช้ได้คำตอบเร็ว และลดภาระ support.
- **การตอบสนอง:** accordion เต็มความกว้าง, tap target อย่างน้อย 44px.

### 6. CTABanner — `LineFirst`
- H2 `ยังไม่เจอคำตอบ? ทักได้เลย` · subhead `ทักทีมไทยผ่าน ทัก LINE OA ติดต่อ admin ได้เลย` · primary `ทัก LINE OA ติดต่อ admin` (green) · secondary `ส่งอีเมล`

### 7. Footer — `Default` `[compliance-bound]`
### Floating: AIChatWidget
