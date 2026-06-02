# BestonFX Website Recommendation — Fizens Redesign

_Updated: 2026-06-03_  
_Scope: Framer/Fizens POC, Home IA, nav/page structure, content direction, visual system._

> **Decision:** Redesign ต้องเป็นเว็บโบรกเกอร์ Forex/CFD ที่ดู premium, เข้าใจง่าย, และ Rebate-led ไม่ใช่เว็บรวม feature แบบ generic broker.

---

## TL;DR

Home ต้องให้ผู้ใช้จำได้ใน 5 วินาทีว่า **beston = Rebate $5/lot + MT5 + ตลาดที่เทรดได้ + ทีมไทยทาง LINE** โดยใช้ Fizens เป็น visual shell: light, rounded, blue-led, bento, motion-rich, และไม่ใส่ claims ที่ยังไม่มีหลักฐาน.

---

## 1. Snapshot Comparison — ตัดสินใจใหม่จากไฟล์เดิม

| เดิมใน recommendation | ปัญหา | Recommendation ใหม่ |
|---|---|---|
| Home มีหลาย feature, stats, promo, review, payment strip | ยาวและดูเหมือน template broker ทั่วไป | Home เป็น conversion story: Hero → Rebate proof → Why Bento → Markets → Calendar/Tools teaser → Account path → LINE CTA |
| Why เป็น card feature 3 ใบ | จำไม่ได้ว่า beston ต่างตรงไหน | Why เป็น bento หลาย tile โดยให้ `Rebate` เป็น hero tile |
| MT5, calendar, account path ถูกปนเป็น benefits | เป็น utility/path ไม่ใช่เหตุผลหลัก | แยกเป็น section หรือ page เฉพาะ: Tools, Calendar, Accounts |
| ใช้ตัวเลข/claim ที่ยังไม่ verify | เสี่ยง compliance และทำให้ trust พัง | ใช้เฉพาะข้อมูลที่ยืนยันแล้ว; ที่ยังไม่ยืนยันให้เป็น placeholder ภายในทีม |
| ใช้ review/social proof | ถ้ายังไม่มี consent จริงจะดูปลอม | ซ่อนไว้จนกว่าจะมี quote จริงพร้อม consent |
| CTA public เน้น payment flow | ทำให้เว็บดู aggressive เกินไป | CTA หลัก `เปิดบัญชี`; CTA รอง `ทัก LINE OA ติดต่อ admin` |
| Fizens palette มี purple/pink | ไม่เข้ากับ broker-sober direction | ใช้ white/soft-blue/royal blue `#0040c1`; LINE green เฉพาะ LINE CTA |
| Home ใส่ tools เต็ม | หน้าหนักและไม่ชัด | Home มี teaser; full tools อยู่ `/tools` |

---

## 2. Home Section-by-Section Comparison

ตารางนี้เทียบจาก recommendation เดิมแบบ section-by-section: อะไรควรเก็บ, อะไรควรย้าย, อะไรควรตัด, และควรเปลี่ยนเป็น section ใหม่แบบไหน.

| Old section | Verdict | New section | Why |
|---|---|---|---|
| Hero แบบ Fizens พร้อม terminal mockup | **Keep + rewrite** | Hero: `Trade Smarter Not Harder` + Rebate $5/lot + MT5 + LINE | โครง Fizens ใช้ได้ แต่ hero ต้องมี USP เดียวที่จำได้ ไม่ใช่ยัด trust badges หลายอัน |
| Trust badge ใต้ hero | **Rewrite** | Rebate proof strip + regulator/platform proof after verification | ใต้ hero ควรทำให้ `Rebate $5/lot` ชัดก่อน แล้วค่อยแสดง proof ที่ยืนยันแล้ว |
| Live ticker / market pulse | **Keep smaller** | Markets preview | ดีสำหรับ energy ของเว็บเทรด แต่ต้อง label ถ้าเป็น sample data |
| Why BestonFX แบบ 3 feature cards | **Rewrite completely** | Why beston Bento | 3 cards ธรรมดาดู generic; bento ทำให้ Rebate เป็น hero tile และมีหลายเหตุผลให้ scan |
| Platform showcase 2x3 | **Move** | `/tools` page + small Home teaser | MT5, calendar, calculators เป็น utility ไม่ใช่ core benefit บน Home |
| Deep feature alternating | **Split** | Rebate explainer / MT5 teaser / Tools page | Alternating sections ยาวเกิน Home; ใช้เฉพาะเรื่องที่ช่วย conversion |
| Stats counter | **Cut for now** | Disabled until real data is approved | ตัวเลขที่ไม่มี source ทำลาย trust เร็วมาก |
| How to start | **Keep** | Account preview + 3-step account path | ยังจำเป็น เพราะช่วยลด friction ของคนที่อยากเริ่ม |
| Active promotions | **Cut from Home** | Promotions only if founder approves a dedicated page/section | Promo-first ทำให้ positioning ดูลดราคาเกินไป และเบียด Rebate USP |
| Review/social proof block | **Cut for now** | Disabled until real quote + consent exists | ถ้ายังไม่ใช่รีวิวจริง ห้ามใช้เป็น trust layer |
| Payment methods | **Move / hide** | Footer/support detail only after ops confirms | บน Home จะดึงเว็บไปทาง transaction flow มากเกินไป |
| Economic Calendar / Market News | **Keep + upgrade** | Calendar teaser on Home, full calendar in `/tools#calendar` | เป็น reason ให้ trader กลับมาเว็บ และเข้ากับ real trading workflow |
| FAQ | **Keep** | Compact FAQ | ใช้ตอบ objection หลัก: platform, account, rebate, risk, support |
| Final CTA | **Keep + rewrite** | LINE-first CTA banner | ปิดด้วยทางคุยกับทีมไทยและเปิดบัญชี โดยไม่กดดันเกินไป |
| Footer | **Keep + tighten** | Legal footer + risk + company info + secondary nav | Footer ต้องเป็น legal/trust layer ไม่ใช่ link farm |

### Old flow vs new flow

| Flow | Section order |
|---|---|
| Old recommendation | Hero → Market pulse → 3 feature cards → Platform grid → Deep features → Stats → Steps → Promotions → Reviews → Payment methods → Calendar/news → FAQ → CTA → Footer |
| New recommendation | Risk bar → Nav → Hero → Rebate proof → Why Bento → Markets preview → Calendar teaser → Account preview → Tools teaser → Articles/FAQ → LINE CTA → Footer |

**Key change:** ของเดิมพยายามโชว์ว่ามีทุกอย่าง; ของใหม่พยายามทำให้ผู้ใช้จำได้ว่า beston เด่นเรื่องอะไร แล้วค่อย route ไปหน้าที่ถูกต้อง.

---

## 3. Final Home Structure

Home ไม่ควรเป็น encyclopedia ของทุกอย่างในโบรกเกอร์ แต่เป็น landing ที่พาผู้ใช้ตัดสินใจเร็วขึ้น.

| Order | Section | Job | Visual Direction |
|---|---|---|---|
| 1 | Risk bar | วาง risk context ก่อน persuasion | Amber slim bar, sticky |
| 2 | Navbar | พาไป 6 decision pages + CTA | Clean Fizens nav, condensed on scroll |
| 3 | Hero | สื่อ campaign hook + Rebate + MT5 + LINE | Terminal mockup, soft blue bloom, scroll reveal |
| 4 | Rebate proof strip | ทำให้ `$5/lot` เห็นทันทีหลัง hero | Formula strip / small metric cards |
| 5 | Why Bento | ทำให้เหตุผลจำง่ายและดู premium | Bento grid, animated visual per tile |
| 6 | Markets preview | บอกว่าเทรดอะไรได้บ้าง | Asset chips + market cards |
| 7 | Economic Calendar teaser | ให้เหตุผลให้คนกลับมาเช็คเว็บ | Calendar preview card + impact badges |
| 8 | Account preview | เลือกทางเริ่มต้นแบบไม่ซับซ้อน | Standard / Demo cards |
| 9 | Tools + MT5 teaser | รวม utility โดยไม่แย่ง spotlight | MT5 card + calculators teaser |
| 10 | Articles / FAQ | ตอบข้อสงสัยก่อน bounce | Education cards + compact FAQ |
| 11 | LINE CTA | ปิดด้วยช่องทางที่คนไทยคุยจริง | LINE card, QR/link after URL verified |
| 12 | Footer | Legal, risk, company info, secondary links | Clean footer, no link farm overload |

**Home rule:** ถ้า section นั้นไม่ช่วยให้ผู้ใช้เข้าใจ “ทำไมต้องเริ่มกับ beston ตอนนี้” ให้ย้ายไป page เฉพาะ.

---

## 4. Why beston Bento — New Direction

ไม่ต้องบังคับคำเดียวแล้ว. Tile title ควรเป็น phrase ที่ user อ่านแล้วเข้าใจ benefit ทันที: เงินคืน, เริ่มง่าย, คุยกับทีมไทย, เงื่อนไขเทรด, ความเร็ว, และ proof.

| Tile phrase | Thai description | Status | Visual | Motion |
|---|---|---|---|---|
| `Cash Back` | รับ Rebate $5/lot จากปริมาณการเทรดที่เข้าเงื่อนไข และจ่ายเป็นรอบทุกวันจันทร์ 12:00 | Validated | Rebate meter + cash-back receipt | Meter fill + receipt slide |
| `Start from $10` | เริ่มง่ายด้วยเงินขั้นต่ำ $10 เพื่อทดลองระบบจริงด้วยทุนเล็กก่อนขยับขนาด | Verify account condition | Small balance card + first-order ticket | Balance count-up + card lift |
| `Thai Support 24/7` | คุยกับทีมไทยผ่าน LINE OA เรื่องบัญชี เอกสาร MT5 และ Rebate ได้ตลอดเวลา | Verify support hours | LINE chat stack + 24/7 clock ring | Bubble rise + clock sweep |
| `Leverage 1:1000` | เลือกเลเวอเรจได้สูงสุด 1:1000 สำหรับคนที่เข้าใจ margin และความเสี่ยงแล้ว | Verify leverage/compliance wording | Leverage slider + margin ratio | Slider glide + ratio lock |
| `Fast Execution` | ส่งคำสั่งบน MT5 ได้รวดเร็ว ลดจังหวะพลาดช่วงตลาดเคลื่อนไหวแรง | Verify execution benchmark | Order ticket + speed trail | Ticket snap + trail fade |
| `Regulated License` | มีข้อมูลกำกับดูแลและเอกสารบริษัทให้ตรวจสอบก่อนตัดสินใจ | Verify exact license wording | Document stack + registry cards | Stamp reveal + card fan |

**Alternative note:** ถ้าข้อมูลทางการยังเป็น `No minimum deposit` ให้เปลี่ยน tile `Start from $10` เป็น `No Minimum` หรือ `Start Small` แทน เพื่อไม่ให้ copy ชนกับเงื่อนไขจริง.

### Bento layout

- `Cash Back` เป็น card ใหญ่สุด กินพื้นที่ 2 columns / 2 rows.
- `Start from $10` และ `Thai Support 24/7` เป็น strong secondary cards เพราะเข้าใจง่ายและ relate กับคนไทย.
- `Leverage 1:1000`, `Fast Execution`, `Regulated License` เป็น support cards ที่ต้องมี `[verify]` จนกว่าทีมยืนยัน.
- Mobile stack: `Cash Back` → `Start from $10` → `Thai Support 24/7` → `Leverage 1:1000` → `Fast Execution` → `Regulated License`.

### Bento motion rules

- ใช้ `opacity` + `transform` เป็นหลัก.
- Stagger 80-120ms ระหว่าง cards.
- Duration 500-900ms.
- Easing `cubic-bezier(.16,1,.3,1)`.
- ต้องมี reduced-motion fallback.
- Motion ต้องช่วยอ่าน ไม่ใช่ทำให้กด CTA ยาก.

---

## 5. Economic Calendar — ควรมีไหม

**ควรมี** เพราะคนเทรดต้องเช็คข่าวที่อาจทำให้ market movement แรงขึ้น และเป็นเหตุผลที่คนกลับมาเว็บได้บ่อย.

| Placement | Recommendation |
|---|---|
| Home | ทำเป็น teaser card: “ข่าวเศรษฐกิจวันนี้ / impact / เวลา / สินทรัพย์ที่อาจเกี่ยวข้อง” |
| `/tools#calendar` | ทำ full calendar experience |
| Data source | ใช้ TradingView widget สำหรับ public website |
| MCP | ใช้เพื่อ research/dev automation ได้ แต่ไม่ใช่ public website data source |
| UX | แสดง High/Medium impact, เวลา, currency, event name, และ link ไป full calendar |

**Visual:** Fizens-style calendar card ที่ไม่ดูเหมือน iframe ดิบ. ถ้าต้อง embed widget ให้ห่อด้วย section ที่ออกแบบเอง: header, filter chips, impact legend, และ explanation สั้นๆ.

---

## 6. Markets — ต้องบอกไหมว่าเทรดอะไรได้

**ต้องบอก** เพราะเป็นคำถามแรกๆ ของ trader: “มีทองไหม, มี US30 ไหม, มี crypto ไหม”.

| Asset class | Home treatment | Page treatment |
|---|---|---|
| Forex | Chip + top examples | Full category with major/minor examples |
| Metals | Highlight `XAUUSD` if verified | Gold/silver group |
| Energy | `USOIL` / oil card if verified | Energy products + risk note |
| Indices | `US30`, `NAS100`, `SPX500` if verified | Index CFD group |
| Crypto | BTC/ETH examples if verified | Crypto CFD group + volatility note |
| US stock CFDs | Show only if product team confirms | Separate category after verification |

**Rule:** ถ้าราคาหรือ symbol เป็น mockup ให้ label ว่าเป็นภาพตัวอย่าง ไม่ใช่ข้อมูลจริง.

---

## 7. Website IA / Navbar

Primary nav ควรมีแค่ 6 กลุ่ม เพื่อไม่ให้เว็บดูรก.

| Nav label | Route | Purpose |
|---|---|---|
| ทำไมต้อง beston | `/why-bestonfx` | Differentiation, Rebate, proof, support |
| ตลาด | `/markets` | Asset classes and trading universe |
| บัญชี | `/accounts` | Standard / Demo / account steps |
| MT5 & เครื่องมือ | `/tools` | MT5, calendar, calculators, utilities |
| พาร์ทเนอร์ | `/partners` | IB/partner program without income promises |
| ช่วยเหลือ | `/support` | LINE, email, FAQ, office/contact |

Persistent actions:

- `เปิดบัญชี` เป็น primary pill.
- `เข้าสู่ระบบ` เป็น secondary text/link.
- LINE shortcut ใช้ใน support/CTA areas ไม่จำเป็นต้องยัดใน nav ทุก viewport.

Secondary pages:

- `/articles`
- `/articles/[slug]`
- `/legal/risk-disclosure`
- `/legal/terms`
- `/legal/privacy`
- `/regulatory-disclosures`
- `/404`

---

## 8. Page-by-Page Comparison

| Old page idea | New route/nav | Verdict | Why |
|---|---|---|
| `/about` | `/why-bestonfx` | **Rename/reframe** | คนไม่ได้อยากอ่าน company story ก่อน; เขาอยากรู้ว่าทำไมควรเลือก beston |
| `/accounts` | `/accounts` | **Keep** | เป็น decision page สำคัญ แต่เริ่มจาก Standard/Demo ก่อน ไม่สร้าง tier เกินข้อมูลจริง |
| `/platforms` | `/tools` | **Merge** | Platform + calendar + calculators อยู่กลุ่มเดียวในใจผู้ใช้ |
| `/markets` | `/markets` | **Keep** | ต้องตอบว่าเทรด asset อะไรได้ |
| `/promotions` | Optional / not in primary nav | **Deprioritize** | ไม่ให้ positioning กลายเป็นโปรโมชันนำ |
| `/economic-calendar` | `/tools#calendar` | **Merge** | Calendar เป็น trading utility; ทำ full section ได้โดยไม่เพิ่ม nav item |
| `/blog` | `/articles` | **Rename** | ใช้เป็น education/content hub ที่ฟังดูจริงจังกว่า blog ทั่วไป |
| `/contact` | `/support` | **Merge** | คนต้องการความช่วยเหลือ ไม่ใช่แค่ contact form |
| `/help` or `/faq` | `/support` + FAQ blocks | **Merge** | FAQ ควรกระจายอยู่ใน page ที่เกี่ยวข้องและรวมที่ support |
| `/login` / `/register` | External portal links | **Keep external** | Framer POC ไม่ควรสร้าง auth flow ปลอม |

### Final page recommendations

| Page | Must-have sections | Do not include |
|---|---|---|
| Home | Hero, Rebate proof, Why Bento, Markets preview, Calendar teaser, Account preview, Tools teaser, FAQ, LINE CTA | Full tools grid, partner estimator, fake stats |
| Why beston | Rebate story, entity proof after verification, platform proof, support story, no-fake-claims policy, FAQ | Unverified ranking, fake awards |
| Markets | Asset class cards, examples, risk note per group, trading condition placeholders | Random price feed without labels |
| Accounts | Standard/Demo comparison, account steps, required documents, rebate eligibility, FAQ | Too many tiers before ops confirms |
| Tools | MT5, Economic Calendar, calculators, platform guides | Making tools sound like trading advice |
| Partners | IB model, eligibility, payout detail placeholders, lead form/LINE CTA | Guaranteed income framing |
| Support | LINE-first channel cards, email, office, FAQ, escalation flow | Generic contact form only |
| Articles | MT5, risk, rebate, beginner, platform guides | Signal-style trade calls |

---

## 9. Copy System

| Layer | Direction | Example |
|---|---|---|
| Hero | English hook + Thai explanation | `Trade Smarter Not Harder` + Thai subhead |
| Rebate | Explain mechanism, not profit | `Rebate คิดจากปริมาณการเทรด ไม่ใช่การรับประกันกำไร` |
| CTA | Two clear paths | `เปิดบัญชี` + `ทัก LINE OA ติดต่อ admin` |
| Calendar | Practical, not hype | `เช็คข่าวเศรษฐกิจที่อาจทำให้ตลาดผันผวน` |
| Markets | Concrete asset groups | `ทอง คู่เงิน น้ำมัน ดัชนี และ Crypto` |
| FAQ | Answer objections | platform, account, rebate, risk, support |

### Copy guardrails

- ห้ามใช้ guaranteed profit / risk-free / guaranteed IB income.
- ห้ามใช้ fake user count, fake rating, fake review, fake award.
- ห้ามใส่ spread, execution speed, withdrawal timing, license number ถ้ายังไม่มี source ยืนยัน.
- ห้ามใช้ legal shorthand ที่ทำให้ผู้ใช้ทั่วไปงง; ใช้คำไทยตรงๆ เช่น `รายละเอียด Rebate`, `ข้อกำหนดสำคัญ`, `อ่านรายละเอียดก่อนเริ่ม`.
- Public CTA ไม่ควรทำให้รู้สึกว่าเว็บเร่งให้เติมเงินทันที.

---

## 10. Visual Strategy — Fizens x Broker

| Visual | Use | Notes |
|---|---|---|
| Terminal mockup | Hero | MT5-inspired, labelled as sample if not live |
| Rebate meter | Hero strip + Bento | Make `$5/lot` instantly memorable |
| Bento cards | Why beston | Asymmetric, premium, visual per reason |
| Asset chips | Markets preview | Forex, Gold, Oil, Indices, Crypto |
| Calendar card | Home + Tools | Impact badges, time, currency, event |
| LINE chat card | CTA + Support | Clear Thai support path |
| Education covers | Articles | Thai editorial, not hype-chart thumbnails |

### Visual rules

- Light page, white/soft-blue surfaces, royal blue anchor.
- No purple/pink consumer-finance accent.
- No black/gold luxury broker trope.
- No dark dashboard overload on Home.
- Use real product-like UI mockups, not random abstract finance art.
- Every market/terminal visual with sample data needs a visible sample label.

---

## 11. Motion Strategy

| Pattern | Where | Purpose |
|---|---|---|
| Hero depth reveal | Hero terminal | Make first viewport feel premium |
| Bento cascade | Why beston | Help users scan multiple reasons |
| Meter fill | Rebate visuals | Make `$5/lot` feel concrete |
| Ticker pause | Markets preview | Let user inspect symbols |
| Calendar highlight | Calendar teaser | Draw attention to high-impact events |
| Nav condense | All pages | Keep CTA accessible without clutter |
| CTA micro-state | Buttons/forms | Make interactions feel finished |

**Rule:** animation must never hide risk copy, legal links, or primary CTA.

---

## 12. What To Cut

Cut these from the Home POC unless real proof and founder approval exist:

- Generic stats counters.
- Testimonial/review blocks.
- Payment-method strip.
- Promotion-first blocks.
- Partner/IB conversion block.
- Full calculator/tool grid.
- Unverified license wording.
- Unverified spread/speed/SLA claims.
- Too many account tiers.
- Generic “3 features” cards that could belong to any broker.

---

## 13. Recommended Next Work

1. Update `docs/wireframes/pages/home.md` to match this final Home order if any drift remains.
2. Update generated handoff HTML after Home copy is locked.
3. Design Why Bento in Fizens style before building the rest of Home.
4. Add TradingView calendar widget as a styled embed prototype on `/tools`.
5. Prepare a visual asset list: terminal mockup, rebate meter, asset chips, calendar card, LINE support card.
6. Run compliance scan after every copy update.

---

## Final Positioning

BestonFX Home should not say “we have everything.”  
It should make one sharp promise of value:

> **Trade Smarter Not Harder**  
> เข้าใจ Rebate $5/lot, เช็คตลาดที่เกี่ยวข้อง, ใช้ MT5, และถามทีมไทยได้ก่อนเริ่ม.
