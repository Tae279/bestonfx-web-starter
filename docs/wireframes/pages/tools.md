# Wireframe — Tools `/tools`

> **เป้าหมายของหน้า:** พิสูจน์ว่าแพลตฟอร์ม MT5 และเครื่องมือมีประโยชน์จริง แล้วใช้ calculator สร้างความตั้งใจแบบนุ่ม ๆ: ผู้ใช้ลองคำนวณแล้วเริ่มเห็นภาพ → `เปิดบัญชี`.
> **CTA หลัก:** `เปิดบัญชี` · **CTA รอง:** `ดาวน์โหลด MT5`
> **ระดับเอฟเฟกต์:** กลาง — ใช้ reveal + hover ได้; calculator ต้องตอบสนองทันที และห้ามผูก motion กับ scroll บน block ที่ผู้ใช้ต้องกด/กรอก.
> **Component ที่ใช้:** Navbar · RiskDisclosureBar · Hero/CenteredHero · FeatureGrid · Calculator(RebateEstimator) · Calculator(PipCalculator) · FeatureSplit · FAQ · CTABanner · Footer · AIChatWidget

---

## ลำดับ section

### 1. RiskDisclosureBar — `Sticky`
### 2. Navbar — `Default`

### 3. Hero — `CenteredHero`
- **ข้อความ:**
  - Eyebrow: `แพลตฟอร์ม & เครื่องมือ`
  - H1: `คำนวณก่อนเทรด ดีกว่าเสียใจทีหลัง`
  - Subhead: `MT5 + เครื่องคำนวณ Rebate, Pip, Margin — ตัวช่วยวางแผน ไม่ใช่คำแนะนำการลงทุน`
  - CTA หลัก: `เปิดบัญชี` · CTA รอง: `ดาวน์โหลด MT5`
- **เหตุผล UX:** Hero ควรกระชับ เพราะหน้านี้เป็นหน้ารวมเครื่องมือ ผู้ใช้ควรไปถึงเครื่องมือเร็ว.

### 4. FeatureGrid — `3-col` (MT5 platforms)
- **ข้อความ:** header `MetaTrader 5 ทุกอุปกรณ์`
  - `Desktop` — `Windows / macOS [verify]`
  - `Mobile` — `iOS / Android`
  - `Web` — `เทรดผ่านเบราว์เซอร์ [verify]`
- **เหตุผล UX:** แสดงว่า MT5 ใช้ได้ใน device ที่ผู้ใช้มี ลดข้อกังวลเรื่อง platform compatibility.
- **การตอบสนอง:** 3 คอลัมน์ → 1 คอลัมน์.

### 5. Calculator — `RebateEstimator` ⭐
- **โครง:** input (จำนวน lot/เดือน · สินทรัพย์) → live result (เงินคืนโดยประมาณ) → disclaimer → CTA.
- **ข้อความ:** heading `ลองดู Rebate ของคุณได้คืนเท่าไร` · result label `เงินคืนโดยประมาณ` · disclaimer `ประมาณการตาม T&C ไม่ใช่การการันตี · BTCUSD/US30/USOIL คิด lot ÷ 10` · CTA `เปิดบัญชีเพื่อรับ Rebate`
- **เหตุผล UX:** ตัวเลขส่วนบุคคลทำให้ผู้ใช้เข้าใจ value ของ Rebate ได้เร็ว แต่ต้องย้ำว่าเป็นประมาณการ ไม่ใช่ guarantee.
- **การตอบสนอง:** เดสก์ท็อป วางคู่กัน; มือถือ stack เป็นแนวตั้ง และ result panel ต้องเห็นง่าย.

### 6. Calculator — `PipCalculator`
- **โครง:** input (คู่เงิน · lot · ทิศทาง) → pip value / margin result → disclaimer.
- **ข้อความ:** disclaimer `ใช้เพื่อการศึกษา ไม่ใช่คำแนะนำการลงทุน`
- **เหตุผล UX:** เครื่องมือคำนวณเป็นสิ่งที่ serious trader คาดหวัง และช่วยให้เว็บดูมีความเป็น platform มากกว่า landing page ธรรมดา.

### 7. FeatureSplit — `ImageRight` (MT5 capabilities)
- **ข้อความ:** H2 `ทำไมต้อง MetaTrader 5` · bullets `กราฟและอินดิเคเตอร์ครบ` · `EA / Automated trading [verify]` · `จัดการความเสี่ยงในแอปเดียว`

### 8. FAQ — `Accordion` (tools/platform)
- `แพลตฟอร์มไหนรองรับบ้าง?` (MT5) · `ดาวน์โหลด MT5 อย่างไร?` · `รองรับ EA ไหม? [verify]`

### 9. CTABanner — `AccountFirst`
- H2 `อยากลองเครื่องมือก่อนเริ่มจริง?` · primary `เปิดบัญชี` · secondary `ทัก LINE OA ติดต่อ admin`

### 10. Footer — `Default` `[compliance-bound]`
### Floating: AIChatWidget
