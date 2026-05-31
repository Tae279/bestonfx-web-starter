# Wireframe — Articles `/articles` (+ `/articles/[slug]`)

> **เป้าหมายของหน้า:** ดึง traffic จาก search, ให้ความรู้คนที่ยังลังเล, สร้าง trust แบบค่อยเป็นค่อยไป แล้วพาไป action ที่ตัดสินใจง่าย เช่น `ทัก LINE OA ติดต่อ admin` หรือ `เปิดบัญชี`.
> **CTA หลัก (soft):** `ทัก LINE OA ติดต่อ admin` · **CTA รอง:** `เปิดบัญชี`
> **ระดับเอฟเฟกต์:** ต่ำ-กลาง — ใช้ hover lift + reveal ได้ แต่ความสบายในการอ่านสำคัญกว่า wow.
> **Component ที่ใช้:** Navbar · RiskDisclosureBar · Hero/CenteredHero · ArticleGrid(full) · CTABanner · Footer · AIChatWidget

---

## Index page `/articles`

### 1. RiskDisclosureBar — `Sticky`
### 2. Navbar — `Default`

### 3. Hero — `CenteredHero`
- **ข้อความ:**
  - Eyebrow: `บทความ & ความรู้`
  - H1: `เข้าใจก่อนเทรด เสี่ยงอย่างรู้ทัน`
  - Subhead: `คู่มือ MT5 · จัดการความเสี่ยง · ใช้ Rebate ให้คุ้ม`
- **เหตุผล UX:** วาง education framing พร้อม risk-awareness ตั้งแต่ต้น สอดคล้องทั้ง compliance และ brand honesty.

### 4. ArticleGrid — `Full` (paginated)
- **โครง:** category filter chips แบบใส่หรือไม่ใส่ก็ได้ · card grid ที่ responsive · pagination/load-more.
- **ข้อความ:** category chips `ทั้งหมด · MT5 · ความเสี่ยง · Rebate · เริ่มต้น`
- **การ์ดตัวอย่าง:**
  - `เริ่มต้นใช้ MT5 ใน 10 นาที` — MT5 · 5 นาทีอ่าน
  - `จัดการความเสี่ยงก่อนวางออเดอร์แรก` — ความเสี่ยง
  - `Rebate $5/lot ทำงานอย่างไร` — Rebate
  - `อ่านใบอนุญาตโบรกเกอร์อย่างไร` — เริ่มต้น
- **เหตุผล UX:** filter + metadata ที่ชัดทำให้ library scan ง่าย และแต่ละ article เป็น SEO entry point.
- **การตอบสนอง:** 4 คอลัมน์ → 2 คอลัมน์ → 1 คอลัมน์; filter chips เลื่อนแนวนอนบนมือถือ.

### 5. CTABanner — `AccountFirst`
- H2 `พร้อมลองจริงไหม?` · primary `ทัก LINE OA ติดต่อ admin` · secondary `เปิดบัญชี`

### 6. Footer — `Default` `[compliance-bound]`
### Floating: AIChatWidget

---

## Detail page `/articles/[slug]` (CMS template)

### 1. RiskDisclosureBar — `Sticky`
### 2. Navbar — `Default`

### 3. ArticleHero — `CenteredHero` variant
- **โครง:** category chip · H1 ของบทความ · author/date/read-time · cover image.
- **ข้อความ:** sample H1 `เริ่มต้นใช้ MT5 ใน 10 นาที` · meta `โดยทีม beston · [date] · 5 นาทีอ่าน`

### 4. ArticleBody — เนื้อหาบทความแบบยาว
- **โครง:** คอลัมน์อ่านง่ายหนึ่งคอลัมน์ กว้างประมาณ 680px, มี headings, images, callouts, code/steps ตามเนื้อหา.
- **เหตุผล UX:** ความกว้างบรรทัดต้องอ่านสบาย และควรมี risk callout แทรกเมื่อเนื้อหาสัมพันธ์กับความเสี่ยง.
- **การตอบสนอง:** เต็มความกว้างพร้อม margin ที่อ่านง่าย; images scale ตามจอ.

### 5. ArticleGrid — `Teaser` (related, 3)
- Header `บทความที่เกี่ยวข้อง` เพื่อให้ผู้อ่านอยู่ใน funnel ต่อ.

### 6. CTABanner — `AccountFirst`
- H2 `อยากลองใช้จริงไหม?` · primary `ทัก LINE OA ติดต่อ admin` · secondary `ทัก LINE OA ติดต่อ admin`

### 7. Footer — `Default` `[compliance-bound]`
### Floating: AIChatWidget
