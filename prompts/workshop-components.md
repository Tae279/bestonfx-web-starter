# BestonFX Framer Workshop Component Prompts

_Last updated: 2026-05-27 — T006 Workshop component handoff_

## Purpose

Use this file as the canonical Framer Workshop handoff for `BestonFX Framer POC v0.1`.

The current design direction is **Fizens-derived light + royal blue + Prompt**. Do not use the old dark navy / champagne gold direction unless the founder explicitly reverses it.

## Framer execution status

| Item | Status |
|---|---|
| Framer MCP / Workshop access in this worker | blocked-by-tool |
| Canvas edits completed by this worker | No |
| Output from this task | Precise Workshop prompts + component acceptance specs |
| Next operator | Human / Claude Code with Framer MCP or Workshop access |

## Non-negotiable compliance guardrails

Do not add or preserve:

- guaranteed profit language
- risk-free or low-risk trading language
- guaranteed IB income language
- guaranteed signal accuracy language
- fake testimonials, fake ratings, fake user counts, fake awards
- unverified regulatory, license, spread, leverage, fee, commission, payout, or execution-speed claims
- personalized trading advice

Use this placeholder for unconfirmed facts:

```text
รอยืนยันข้อมูลจากฝ่ายกำกับดูแลก่อนเผยแพร่
```

Default risk warning:

```text
Forex/CFD และ Leverage มีความเสี่ยงสูง อาจทำให้สูญเสียเงินลงทุน โปรดศึกษาข้อมูลและความเสี่ยงก่อนตัดสินใจ
```

## Shared Workshop style system

Apply to every component unless a component says otherwise:

- Theme: light fintech, white page background, ink-gray text, royal-blue accents
- Primary blue: `#0040C1`
- Hover / bright blue: `#2970FF`
- Soft blue surface: `#EFF4FF`
- Border: `#E5E7EB`
- Text heading: `#171717`
- Body text: `#4B5563`
- LINE green: `#06C755` only for LINE conversion actions
- Risk amber: `#B45309` only for compliance/risk strips
- Font: Prompt for Thai and Latin
- Radius: large rounded cards (`24px` to `32px`) and pill CTAs
- Shadow: soft neutral card shadow plus subtle blue glow on primary actions
- Layout: mobile-first, generous whitespace, calm premium broker feel
- Avoid: dark page background, champagne gold, glassmorphism-on-dark, playful pink, casino/gambling cues

## Component creation order

1. RiskDisclosureBar
2. PremiumTradingHero
3. TrustStackCards
4. LineSupportCTA
5. TradingToolsGrid
6. IBCommissionEstimatorMock
7. AIChatBotMock

---

## 1. RiskDisclosureBar

### Workshop prompt

```text
Create a sticky top risk disclosure bar for BestonFX, a Thai-market pre-launch Forex/CFD broker website.

Design system:
- Light fintech theme with white and soft amber surfaces
- Font: Prompt
- Amber risk accent: #B45309
- Border: #FCD34D or a soft amber border
- Body text: #4B5563
- Keep the bar compact but readable
- It must look premium, calm, and compliant — not alarming or casino-like

Content:
- Icon: warning/shield icon on the left
- Message:
  "Forex/CFD และ Leverage มีความเสี่ยงสูง อาจทำให้สูญเสียเงินลงทุน โปรดศึกษาข้อมูลและความเสี่ยงก่อนตัดสินใจ"
- Link text:
  "อ่านคำเตือนความเสี่ยง"
- Link URL placeholder:
  "/risk-disclosure"

Behavior:
- Sticky at top of page
- Desktop: icon + message + link in one horizontal row
- Mobile: icon and message remain readable; link wraps below or becomes inline pill
- Do not hide the risk warning behind a close button in the POC

Component properties:
- message: string
- linkText: string
- linkUrl: string
- showIcon: boolean
- sticky: boolean
```

### Acceptance spec

- Risk warning visible above first conversion path
- Mobile text remains readable at 320px width
- No close/dismiss state for POC
- No copy beyond the approved risk warning unless legal approves it

---

## 2. PremiumTradingHero

### Workshop prompt

```text
Create a premium hero section for BestonFX, a Thai-market pre-launch Forex/CFD broker website.

Design system:
- Light theme, white page background, soft blue radial glow
- Primary blue #0040C1, bright blue #2970FF, soft blue #EFF4FF
- Font: Prompt
- Large rounded white cards with thin #E5E7EB borders
- Primary CTA is royal-blue pill with soft blue glow
- Secondary CTA is white or soft-blue outlined pill
- Calm, trust-first, broker-sober — no gambling or hype styling

Layout:
- Desktop: two columns
  - Left: eyebrow, headline, subheadline, CTA row, small risk note
  - Right: abstract trading command-center mockup made from placeholder cards
- Mobile: single column
  - Risk disclosure remains above
  - Headline first
  - CTA buttons stacked full-width
  - Mockup cards collapse below hero copy

Thai copy:
Eyebrow:
"BESTONFX POC"

Headline:
"โครงสร้างการเทรดระดับมืออาชีพ สำหรับนักเทรดไทยที่ต้องการความโปร่งใสและการดูแลจริง"

Subheadline:
"รวมข้อมูลบัญชี เครื่องมือช่วยคำนวณความเสี่ยง เนื้อหาการเรียนรู้ และช่องทาง LINE support ไว้ในประสบการณ์เดียว โดยไม่แทนที่การตัดสินใจของผู้ลงทุน"

Primary CTA:
"ดูบัญชีทดลอง"

Secondary CTA:
"คุยกับทีมทาง LINE"

Small risk note:
"ไม่มีการรับประกันผลตอบแทน การเทรด Forex/CFD มีความเสี่ยงสูง"

Right mockup cards:
- "Risk-first onboarding" with status "POC"
- "LINE support" with status "รอยืนยันช่องทาง"
- "Account conditions" with value "รอยืนยันข้อมูลจากฝ่ายกำกับดูแลก่อนเผยแพร่"
- "Tools" with status "Demo only"

Component properties:
- eyebrow: string
- headline: string
- subheadline: string
- primaryCtaText: string
- primaryCtaUrl: string
- secondaryCtaText: string
- secondaryCtaUrl: string
- riskNote: string
- showMockup: boolean
```

### Acceptance spec

- LINE CTA visible above the fold on mobile
- No fake user count, fake country count, fake ratings, or fake execution metrics
- Hero mockup uses labels like `POC`, `Demo only`, or approved placeholders
- Does not claim regulation, account conditions, spreads, leverage, speed, or profitability

---

## 3. TrustStackCards

### Workshop prompt

```text
Create a trust stack card grid for BestonFX.

Design system:
- Light section background #FAFAFA or #F3F4F6
- White rounded cards with #E5E7EB border
- Royal-blue icon chips #EFF4FF / #0040C1
- Font: Prompt
- No dark glassmorphism, no gold, no fake stats

Section header:
Eyebrow: "TRUST STACK"
Title: "ออกแบบให้ข้อมูลสำคัญชัดก่อนเริ่มใช้งาน"
Description: "ทุกส่วนใน POC ต้องช่วยให้ผู้ใช้เข้าใจความเสี่ยง เงื่อนไข และช่องทางติดต่อ โดยไม่สร้างความคาดหวังเรื่องผลตอบแทน"

Cards:
1. Title: "ข้อมูลชัดก่อนเปิดบัญชี"
   Description: "แยกข้อมูลที่ยืนยันแล้วออกจากข้อมูลที่รอฝ่ายกำกับดูแลอนุมัติ"
2. Title: "Risk-first onboarding"
   Description: "แสดงคำเตือนความเสี่ยงก่อน CTA สำคัญ และหลีกเลี่ยงภาษาชวนเชื่อเกินจริง"
3. Title: "เครื่องมือช่วยคำนวณ"
   Description: "ใช้เป็นตัวช่วยวางแผนขนาดสถานะและความเสี่ยง ไม่ใช่คำแนะนำการลงทุน"
4. Title: "LINE Support สำหรับไทย"
   Description: "พาผู้ใช้ไปคุยกับทีมเรื่องบัญชี เอกสาร และขั้นตอนใช้งาน"
5. Title: "DX Ecosystem"
   Description: "เชื่อมการเรียนรู้ การดูแล และเครื่องมือในระบบ DX โดยไม่อ้างผลลัพธ์การเทรด"
6. Title: "IB Partner mock"
   Description: "อธิบายแนวคิดพาร์ทเนอร์ด้วยข้อมูลตัวอย่างเท่านั้น ไม่ใช่การรับประกันรายได้"

Responsive:
- Desktop: 3 columns
- Tablet: 2 columns
- Mobile: 1 column, comfortable spacing, cards not too tall

Component properties:
- eyebrow: string
- title: string
- description: string
- cards: array of { icon, title, description }
```

### Acceptance spec

- No regulatory badge unless verified
- No “trusted by”, “millions”, ratings, awards, or performance language
- Mobile cards are readable and stack in intended order

---

## 4. LineSupportCTA

### Workshop prompt

```text
Create a LINE-first support CTA section for BestonFX.

Design system:
- Light section with white card and soft royal-blue glow
- LINE green #06C755 only on LINE button, QR placeholder, and chat accent
- Primary blue #0040C1 for secondary UI accents
- Font: Prompt
- Rounded 32px container

Content:
Eyebrow:
"LINE-FIRST SUPPORT"

Headline:
"มีคำถามเรื่องบัญชีหรือเอกสาร? คุยกับทีม BestonFX ทาง LINE"

Subheadline:
"เหมาะสำหรับสอบถามขั้นตอนเปิดบัญชี เอกสาร เงื่อนไขบัญชี และการใช้งานเครื่องมือ โดยทีมงานไม่ให้คำแนะนำซื้อขายเฉพาะบุคคล"

Primary button:
"เพิ่มเพื่อน LINE"

Secondary button:
"ดู Help Center"

Chat mockup messages:
User: "เปิดบัญชีต้องเตรียมอะไรบ้าง?"
Support: "ทีมงานช่วยอธิบายขั้นตอนและเอกสารได้ แต่ข้อมูลเงื่อนไขบัญชีบางส่วนรอยืนยันจากฝ่ายกำกับดูแลก่อนเผยแพร่"

Placeholders:
- QR box label: "LINE QR Placeholder"
- Support hours: "รอยืนยันเวลาทำการจากทีม Operations"

Responsive:
- Desktop: copy left, chat/QR mockup right
- Mobile: copy first, full-width buttons stacked, chat mockup below, QR placeholder compact

Component properties:
- headline: string
- subheadline: string
- lineButtonText: string
- lineUrl: string
- helpCenterText: string
- helpCenterUrl: string
- qrLabel: string
- supportHours: string
```

### Acceptance spec

- LINE CTA is visually distinct without overriding risk warning
- Mentions no personalized trading advice
- Uses placeholders for support hours / channel details
- Mobile buttons full-width and reachable above the fold if placed near hero

---

## 5. TradingToolsGrid

### Workshop prompt

```text
Create a trading tools grid for BestonFX.

Design system:
- Light section background #FAFAFA
- White rounded cards with #E5E7EB border
- Royal-blue icon chips and CTA links
- Status pills in soft blue or neutral gray
- Font: Prompt
- No performance promises or signal accuracy claims

Section header:
Eyebrow: "TRADING TOOLS"
Title: "เครื่องมือช่วยวางแผนก่อนตัดสินใจ"
Description: "เครื่องมือเหล่านี้เป็น mock/demo สำหรับช่วยอธิบายความเสี่ยงและต้นทุนเบื้องต้น ไม่ใช่คำแนะนำการลงทุน"

Tools:
1. Title: "Pip Calculator"
   Description: "ช่วยอธิบายมูลค่า pip ตามสินทรัพย์และขนาดสัญญา"
   Status: "Demo"
2. Title: "Margin Calculator"
   Description: "ช่วยประเมินเงินประกันที่ต้องใช้ โดยข้อมูลจริงรอยืนยัน"
   Status: "Demo"
3. Title: "Position Risk Calculator"
   Description: "ช่วยคิดสัดส่วนความเสี่ยงต่อพอร์ตตามค่าที่ผู้ใช้กรอก"
   Status: "Demo"
4. Title: "Economic Calendar"
   Description: "แสดงแนวคิดปฏิทินข่าวสำคัญสำหรับ POC"
   Status: "Coming soon"
5. Title: "Trading Cost Estimator"
   Description: "พื้นที่สำหรับอธิบายต้นทุนโดยใช้ placeholder จนกว่าเงื่อนไขได้รับอนุมัติ"
   Status: "Placeholder"
6. Title: "AI Help Center"
   Description: "ตอบคำถามทั่วไปเกี่ยวกับขั้นตอนใช้งาน ไม่ใช่คำแนะนำซื้อขาย"
   Status: "Mock"

Each card:
- icon
- title
- short Thai description
- status pill
- CTA: "ดูรายละเอียด"

Responsive:
- Desktop: 3 columns
- Tablet: 2 columns
- Mobile: 1 column, CTA remains visible

Component properties:
- eyebrow: string
- title: string
- description: string
- tools: array of { icon, title, description, status, ctaText, ctaUrl }
```

### Acceptance spec

- No tool implies improved profit, guaranteed accuracy, or signal performance
- Cost/spread/leverage data remains placeholder until confirmed
- Mobile grid stacks with readable status pills

---

## 6. IBCommissionEstimatorMock

### Workshop prompt

```text
Create a non-production IB commission estimator mock for BestonFX partner/IB page.

Design system:
- Light premium dashboard card
- White surface, #E5E7EB border, rounded 32px
- Royal-blue primary controls
- Amber compliance note visible near output
- Font: Prompt
- No guaranteed income, no real commission rates, no fake earning examples

Section header:
Eyebrow: "IB PARTNER MOCK"
Title: "จำลองวิธีคิดรายได้พาร์ทเนอร์แบบไม่ใช่ข้อมูลจริง"
Description: "Component นี้ใช้สื่อสาร logic ของ estimator เท่านั้น ตัวเลขจริงและเงื่อนไขโปรแกรมต้องรอการอนุมัติ"

Inputs:
- "ปริมาณการเทรดที่แนะนำต่อเดือน" with placeholder "กรอกตัวอย่างเท่านั้น"
- "อัตรา commission ต่อ lot" with placeholder "รอยืนยันเงื่อนไขโปรแกรม"
- "จำนวนลูกค้า active" with placeholder "ตัวอย่างสำหรับ POC"

Output panel:
- Label: "Estimated commission"
- Value: "รอยืนยันข้อมูลจากฝ่ายกำกับดูแลก่อนเผยแพร่"
- State badge: "Mock only"

Required disclaimer:
"ตัวเลขนี้เป็นตัวอย่างเพื่ออธิบายวิธีคำนวณเท่านั้น ไม่ใช่การรับประกันรายได้จริง Commission ขึ้นกับเงื่อนไขโปรแกรม ปริมาณการเทรดจริง และการอนุมัติจากบริษัท"

Behavior:
- Use disabled or visual-only controls in Framer POC
- Do not calculate real values unless verified inputs are supplied later

Responsive:
- Desktop: inputs left, output/disclaimer right
- Mobile: inputs stack first, output below, disclaimer always visible

Component properties:
- title: string
- description: string
- inputs: array of { label, placeholder }
- outputLabel: string
- outputValue: string
- disclaimer: string
- mockOnly: boolean
```

### Acceptance spec

- Explicitly says mock/non-production
- Contains no real commission number
- Contains no guaranteed or implied income claim
- Mobile output does not appear above the disclaimer

---

## 7. AIChatBotMock

### Workshop prompt

```text
Create a floating AI customer-service bot mock component for BestonFX.

Design system:
- Floating royal-blue button with soft glow
- White chat panel with #E5E7EB border
- Rounded 24px panel, Prompt font
- LINE green only for escalation button
- Keep it professional and concise, not playful

Behavior:
- Floating button bottom right on desktop
- On mobile, button remains accessible but does not cover primary CTA or risk disclosure
- Opens a chat panel mock
- Chat panel can be static visual-only for POC

Panel content:
Header:
"BestonFX AI Help"

Subheader:
"ตอบคำถามทั่วไป และส่งต่อทีม LINE เมื่อคำถามต้องใช้เจ้าหน้าที่"

Suggested questions:
1. "เปิดบัญชีต้องใช้อะไรบ้าง?"
2. "Leverage คืออะไร?"
3. "สมัคร IB ต้องทำอย่างไร?"
4. "คุยกับเจ้าหน้าที่ทาง LINE"

Bot sample reply:
"AI Bot ให้ข้อมูลทั่วไปเท่านั้น ไม่ใช่คำแนะนำการลงทุนหรือคำสั่งซื้อขาย หากคำถามเกี่ยวกับเงื่อนไขบัญชีหรือข้อมูลเฉพาะ โปรดคุยกับทีมงานทาง LINE"

Escalation button:
"ส่งต่อ LINE Support"

Compliance footer:
"ข้อมูลจาก AI เป็นข้อมูลทั่วไป ไม่ใช่คำแนะนำการลงทุน"

Component properties:
- launcherLabel: string
- panelTitle: string
- panelSubtitle: string
- suggestedQuestions: array of string
- sampleReply: string
- escalationText: string
- lineUrl: string
- complianceFooter: string
```

### Acceptance spec

- No trade recommendation or personalized advice
- Mobile launcher does not cover the risk bar, footer legal links, or bottom CTA
- Clear LINE escalation path
- Clearly marked as mock/static POC

---

## Final Framer operator checklist

Before presenting the Framer POC:

- [ ] All 7 components are created or visually represented
- [ ] RiskDisclosureBar appears before high-intent CTAs
- [ ] Mobile views checked at 320px, 375px, 390px, and 430px widths
- [ ] No dark-navy/gold legacy style remains in these components
- [ ] Prompt font applied or clearly marked as follow-up
- [ ] No fake stats, fake testimonials, or performance claims
- [ ] No regulatory/license claim unless legal provided exact wording
- [ ] IB estimator contains no real rate or earning output
- [ ] AI bot has investment-advice disclaimer
- [ ] LINE links / QR / hours use placeholders until confirmed

## Return format for Framer operator

```text
Framer status:
- MCP connected: yes/no
- Workshop available: yes/no
- Components created: [list]
- Components only spec'd: [list]
- Pages touched: [list]
- Mobile checks: [widths]
- Compliance scan notes: [issues / none]
- Remaining blockers: [D001-D007 or tool blockers]
```
