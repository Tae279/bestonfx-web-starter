# Spline Pro — เริ่มใช้กับ BestonFX (Next.js)

> สำหรับคนที่สมัคร Pro แล้วแต่ยังไม่เคย export — ทำตามลำดับนี้ครั้งเดียว แล้วส่ง URL ให้ dev ใส่ใน `.env.local`

## Spline ใช้ทำอะไรในโปรเจกต์นี้

| ใช้ | ไม่ใช้ |
|-----|--------|
| Hero ขวา — mockup 3D trading terminal / glass device (wow factor) | ทุก section ทั้งเว็บ |
| อาจมี mini orbit ใน Markets (optional) | ข้อความ compliance, ตัวเลข spread, license |

**Scroll animation / parallax** ทำใน **Next.js (GSAP หรือ CSS)** — ไม่ต้องทำใน Spline  
Spline = วัตถุ 3D ที่หมุน/ลอยได้ ไม่ใช่ทั้งหน้า scroll

## ขั้นตอนใน Spline (ครั้งแรก ~30–60 นาที)

### 1. เปิด template ที่ใกล้เคียง

1. ไป [spline.design](https://spline.design) → **Dashboard**
2. **+ New File** → แท็บ **Community** หรือ **Templates**
3. ค้นหา: `glass`, `device`, `phone mockup`, `dashboard`, `fintech`
4. Duplicate template แล้วเปลี่ยนชื่อเป็น `bestonfx-hero-shell`

> เป้าหมาย: กล่อง glass / tablet ลอย มีแสงน้ำเงิน — **ไม่** ต้อง model ซับซ้อน

### 2. ปรับให้เข้า BestonFX (light + royal blue)

| ใน Spline | ค่าแนะนำ |
|-----------|----------|
| พื้นหลัง scene | โปร่งใส หรือ `#ffffff` / `#f5faff` |
| แสงหลัก | น้ำเงินอ่อน `#2970ff` ไม่ใช่ neon เข้ม |
| วัตถุหลัก | matte glass, มุมโค้ง 24–32px |
| หลีกเลี่ยง | ทอง, พื้นดำ crypto, ตัวเลขกำไร, โลโก้ broker จริง |

### 3. Animation เบาๆ (ใน Spline)

- เลือก object หลัก → **Events** หรือ timeline
- เพิ่ม **Idle**: ลอยช้า Y ±8px, loop
- ไม่ต้อง scroll-linked ใน Spline — scroll ทำฝั่งเว็บ

### 4. Export ให้ Next.js

1. ปุ่ม **Export** (มุมขวาบน)
2. **Code** → เลือก **React** หรือ **Next.js**
3. Copy URL แบบนี้:

```text
https://prod.spline.design/xxxxxxxx/scene.splinecode
```

4. วางใน `.env.local`:

```bash
NEXT_PUBLIC_SPLINE_HERO_SCENE=https://prod.spline.design/xxxxxxxx/scene.splinecode
```

5. รัน `npm run dev` → เปิดหน้า `/v2` (เมื่อมี) → กด **แตะเพื่อโหลด 3D** ใน hero

### 5. ถ้า CORS / โหลดไม่ขึ้น

- ใน Export panel → **Download** ไฟล์ `.splinecode`
- วางที่ `public/spline/bestonfx-hero.splinecode`
- ตั้ง env เป็น path ในโปรเจกต์ (หรือให้ dev self-host)

## โค้ดใน repo

- Component: `src/components/v2/SplineHero.tsx`
- อ่าน env: `NEXT_PUBLIC_SPLINE_HERO_SCENE`
- มือถือ: กดโหลดก่อน (ไม่ autoplay 3D หนัก)
- `prefers-reduced-motion`: แสดง fallback แทน 3D

## ยังไม่อยากเรียน Spline ตอนนี้?

ได้ — ใช้ **scroll parallax + รูป still (Higgsfield)** ใน hero ก่อน  
ค่อย swap เป็น Spline ทีหลังแค่ใส่ URL ไม่ต้องรื้อ layout

## Framer ยังจำเป็นไหม?

| งาน | Framer | Next.js + Spline |
|-----|--------|------------------|
| Stakeholder ดู layout/copy เร็ว | ดี | preview deploy |
| Scroll wow + 3D + production | จำกัด | **ดีกว่า** |
| ทีม dev ดูแลยาว | export/manual | **source of truth** |

สรุป: ถ้า Cursor build Next.js ได้ตาม plan → **Framer = optional POC** ไม่บังคับสำหรับ wow แบบในคลิป
