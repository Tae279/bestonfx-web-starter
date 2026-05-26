# แผนยกเครื่อง BestonFX Public Website และระบบรายล้อม

## TL;DR

คำตัดสินด้านสถาปัตยกรรมคือเลือก **Option B: ใช้ Fizens เป็น design baseline ใน Framer แต่ export เฉพาะส่วน presentation ผ่าน Unframer เข้า **single Next.js 14 codebase** แล้ว build ทุก flow สำคัญแบบ native ใน Next.js** เพราะจะได้ control ดีกว่าชัดเจนในเรื่อง SEO, schema, routing, auth, analytics, LINE/LIFF, bot, CMS และ IB portal; ขณะที่ Framer แม้มี built-in SEO/CMS/hosting แต่ routing และ custom headers ที่ลึกขึ้นต้องพึ่ง add-on แยก และมีข้อจำกัดด้าน rewrites/hosting policy มากกว่า. citeturn22view0turn37view1turn39view0turn39view4turn41view0turn35search8turn35search16 Confidence: High.

**ความเสี่ยงใหญ่ที่สุด** ไม่ใช่เรื่อง UI แต่คือ **compliance + trust positioning**: หน้าเว็บปัจจุบันมีคำอ้างเชิงผู้นำตลาดและความปลอดภัยหลายจุด เช่น “อันดับ 1 ของไทย”, “ปลอดภัยมากที่สุดในไทย”, claim เรื่องข้อมูลข่าวระดับโลก/Reuters, ตัวเลขผู้ใช้และพาร์ทเนอร์, พร้อม testimonial เชิงผลลัพธ์ แต่จาก homepage text ที่ตรวจพบ **ไม่เจอ risk warning แบบ crawlable** เลย ซึ่งขัดกับมาตรฐานการสื่อสารแบบ conservative ที่ ก.ล.ต. ไทยเน้นเรื่องไม่บิดเบือน ไม่รับประกันผลตอบแทน ไม่เร่งรัด และต้องแสดงคำเตือนอย่างชัดเจน. citeturn44view0turn45view0turn45view1turn45view2turn14view2turn15view0turn15view1turn15view2turn13search5turn12search3 Confidence: High.

**30 วันแรกที่ควรทำ** คือทำ **architecture + compliance spike** ไม่ใช่เริ่มลงสี: ซื้อ template, สร้าง design token ของ BestonFX, export nav/hero/footer ของ Fizens เข้า Next repo, rewrite หน้า Home/Trust/Partner/Help Center ใหม่ทั้งหมดภายใต้ compliance checklist, และทดสอบ 3 เส้นทางให้จบจริงคือ **Open Account CTA → LINE add friend / LIFF → lead capture / handoff**. นี่จะลดความเสี่ยงได้เร็วกว่าการรีทัชหน้าสวยเฉย ๆ. ความเชื่อมั่น: High.

## Architecture Decision

### Scorecard

| Criteria | Option A: Framer-host marketing site + separate Next.js app | Option B: Unframer into single Next.js host | Winner |
|---|---|---|---|
| Dev velocity | **4/5** — เปิดหน้า marketing ได้ไว เพราะ Fizens เป็นเว็บ Framer ที่ live อยู่แล้ว และ Framer มี hosting/SEO/CMS มาในตัว. citeturn46view0turn37view1turn40view0 Confidence: High. | **3/5** — export ได้จริง แต่ Unframer ต้องอาศัย Framer publish เพื่อ sync การเปลี่ยนแปลง และมี friction เรื่อง React Strict Mode / package compatibility. citeturn41view0 Confidence: Medium. | A |
| CMS flexibility | **2/5** — Framer Pro มี relational CMS และ redirects แต่ limits และ advanced hosting/routing อยู่ภายใต้ plan/add-on; Basic จำกัด 2 collections, 1,000 items. citeturn37view1turn40view0turn39view0 Confidence: High. | **5/5** — Next + Supabase ออกแบบ schema, approval states, audit logs, RLS และ retrieval data model ได้อิสระกว่า. citeturn35search16turn35search3turn35search14 Confidence: High. | B |
| SEO control | **3/5** — Framer มี built-in SEO, redirects และ analytics add-on แต่ custom headers/rewrites อยู่หลัง add-on และมี max 6 rewrites; Google เองก็ชัดว่า AI-search optimization ยังยืนบน SEO พื้นฐาน ไม่ใช่ใช้ “hacks”. citeturn37view1turn39view4turn36view0turn36view1 Confidence: High. | **5/5** — single Next host ทำให้ควบคุม schema, metadata, routing, canonical, robots, structured data, subdomain/campaign factory ได้เต็มกว่า. citeturn35search8turn35search0turn35search4turn36view3turn36view4 Confidence: High. | B |
| Maintainability | **2/5** — ได้ “2 surfaces, 2 deploy flows, 2 sources of truth” สำหรับ content/analytics/QA. นี่คือ trade-off เชิงสถาปัตยกรรมที่ predictable ถ้า marketing อยู่ใน Framer แต่ bot/portal/CMS อยู่ใน Next. ความเชื่อมั่น: High. | **4/5** — codebase เดียวดูแลง่ายกว่า แต่ต้องยอมรับว่า exported Framer code ไม่ควรเป็นฐานของ logic-heavy modules ทั้งระบบ. citeturn41view0 Confidence: Medium. | B |
| LIFF / bot / IB portal bolt-on | **2/5** — ทำได้ แต่ cross-domain state, shared auth, event analytics และ bot reuse จะยุ่งขึ้น. ความเชื่อมั่น: High. | **5/5** — LIFF routes, web widget, portal auth, admin CMS, support bot และ partner paths อยู่ origin เดียวกันได้. citeturn31view1turn32search4turn35search8 Confidence: High. | B |
| Cost structure | **2/5** — มีค่า Framer plan + editors + Convert/Advanced Hosting add-ons ถ้าต้องการ analytics funnels หรือ custom headers/rewrites และยังต้องมี Vercel/Supabase สำหรับ portal/backend อยู่ดี. Framer Pro อยู่ที่ $30/mo annually, add-on Convert $50 ต่อ 500,000 events, Advanced Hosting $200; Vercel Pro $20/mo + usage. citeturn37view1turn39view3turn39view4turn38view1turn38view0 Confidence: High. | **4/5** — หลัก ๆ คือ Vercel + Supabase + Unframer subscription แบบ paid monthly (แต่ผมหา public price ที่ยืนยันได้จากหน้า homepage ไม่เจอ จึงไม่ใส่เลข); ลด platform overlap ไปได้มาก. citeturn23search4turn38view1turn23search3 Confidence: Medium. | B |

### Deal-breakers

**Option A deal-breakers**

สำหรับ BestonFX, Option A ติดกับข้อจำกัดเชิงธุรกิจมากกว่าข้อจำกัดเชิงดีไซน์: Framer Advanced Hosting ระบุชัดว่ามี **multiple sites + custom headers under one domain** แต่จำกัด **max 6 rewrites** และต้องซื้อ add-on แยก; ถ้าจะทำ campaign subdomains, LIFF callback paths, help center search, partner routes, regional sale pages, AI bot logging endpoints, schema testing pages, และ A/B experiment paths พร้อมกัน มันจะเริ่มบีบทีมตั้งแต่ต้นทาง. citeturn39view0turn39view4 Confidence: High.

อีกจุดที่ผมมองว่าเป็น deal-breaker คือ **trust continuity**: หน้า marketing, support bot, LINE onboarding, partnership application, และ portal ควรให้ความรู้สึกว่าเป็นระบบเดียวกัน ไม่ใช่ “หน้าเว็บสวยคนละโลกกับ flow สมัครจริง”. สำหรับ pre-launch broker โดยเฉพาะตลาดไทย ความต่อเนื่องนี้สำคัญกว่าความเร็วเปิดหน้าแรก. ความเชื่อมั่น: High.

**Option B deal-breakers**

Option B จะพังทันทีถ้าทีมเผลอเอา Unframer ไปใช้เป็นฐานของทุกอย่าง รวมถึง forms, calculators, bot UI, dashboards, filters, หรือ portal modules เพราะ README ของ Unframer เองระบุ limitation ชัดมากเรื่อง Framer runtime, publish-to-sync, Strict Mode, และ dependency mismatches. ทางแก้ไม่ใช่เลิกใช้ แต่คือ **ใช้มันเฉพาะ shell และ presentational sections** เท่านั้น. citeturn41view0 Confidence: Medium.

### Recommendation

ผมแนะนำ **Option B แบบ disciplined hybrid**:

- ใช้ **Fizens ใน Framer เป็น visual sandbox / section library**
- export เฉพาะ **hero, trust-strip, feature cards, blog/list shells, footer layout**
- build ใหม่แบบ native ใน Next.js สำหรับ
  - navigation/header behavior
  - forms และ lead capture
  - calculators
  - help center search
  - bot widget
  - LIFF routes
  - admin/CMS
  - partner landing logic
  - IB portal
  - analytics instrumentation

เหตุผลคือ official Framer surface ที่ยืนยันได้ตอนนี้คือ **Server API (open beta)** สำหรับ server-side publish/update; ส่วน **Framer MCP plugin ใน Marketplace เป็น third-party และประกาศเองว่าไม่ใช่ official plugin**. ดังนั้น Framer ควรเป็น “design/control surface” ไม่ใช่ runtime หลักของ BestonFX. citeturn22view0turn22view2 Confidence: High.

### Reversibility

ข้อดีของ recommendation นี้คือ **ย้อนกลับได้**:

- ถ้า Next migration ช้ากว่าคาด คุณยัง deploy temporary brochure pages บน Framer ได้
- ถ้า Framer team workflow ยัง useful อยู่ คุณเก็บ Framer project ไว้เป็น design authoring source ต่อได้
- ถ้าภายหลังต้องการ microsite บางชุดบน Framer จริง ๆ ก็ยังใช้ official Server API หรือ plugin-based workflow แยกเป็น campaign-only surface ได้ โดยไม่บังคับให้ public core site ต้องกลับไป split-host อีกครั้ง. citeturn22view0turn22view2 Confidence: Medium.

## UX/UI Plan

หน้าเว็บ broker ระดับ premium สำหรับตลาดไทยต้องทำ 3 งานพร้อมกัน: **สร้างความไว้วางใจ**, **ลด friction ไปสู่ account-open/LINE**, และ **แยก content เชิงการศึกษาออกจาก content เชิงชักชวน** อย่างมีวินัย. คู่แข่งรายใหญ่ทำเรื่องนี้ค่อนข้างสม่ำเสมอ: Exness foreground demo/live CTAs และ utilities อย่าง economic calendar, calculator, currency converter, VPS; XM Thai foreground localized instrument breadth, help center, education, calendar และ calculators; FBS Thai foreground academy + calculator + economic calendar + help center; Pepperstone Thai foreground platforms/tools/market analysis และวาง CFD risk warning ชัดในไซต์; ขณะที่ portal ฝั่ง partner ของ XM/Pepperstone/IC เน้นรายได้, analytics, local campaigns และ reporting อย่างเป็นระบบ. citeturn26view0turn27search9turn26view1turn8search14turn26view4turn10search14turn26view2turn28search0turn28search1turn30search3turn30search14 Confidence: High.

จากที่ตรวจหน้า bestonfx.com ตอนนี้ โครงสร้างหลักมี nav ตลาด/บัญชี/แพลตฟอร์ม, hero, about, promotions, testimonials, 3-step registration flow, blog และ payment strip แต่มีปัญหาเชิง UX/compliance ชัดเจนหลายข้อ: ใช้ claim แบบ superlative ตั้งแต่ hero และ about, ขึ้น promotion เร็วกว่า trust proof, testimonial แรงเกินไป, และ flow “3 ขั้นตอน” ในหน้าที่ตรวจพบเรียง **สมัคร → ฝากเงิน → เปิดบัญชีเทรด** ซึ่งสื่อสารผิดลำดับโดยธรรมชาติของ onboarding; นอกจากนี้ ใน homepage text ที่ crawl ได้ ไม่พบคำว่า “ความเสี่ยง”, “คำเตือน” หรือ “risk” เลย. citeturn44view0turn45view0turn45view1turn45view2 Confidence: High สำหรับโครงสร้างหน้า, Medium สำหรับ “absence” เพราะอาจมี warning ในภาพหรือ element ที่ crawler ไม่จับ.

### Sitemap

| Page | Job to be done | Primary CTA | Notes |
|---|---|---|---|
| Home | ทำให้ “เชื่อ + เข้าใจ + เลือกทางต่อ” ภายใน 30–60 วินาที | Open Account / Add LINE / Become Partner | หน้าเดียวต้องแยก 3 audience: trader ใหม่, trader ที่เปรียบเทียบ broker, IB partner |
| Why BestonFX | ปัก trust stack ให้ครบ | View legal entity / Contact support | รวม entity, jurisdiction, team, process, risk, client protection claims ที่พิสูจน์ได้ |
| Markets | ช่วยเลือกสิ่งที่เทรดได้ | View instrument details / Open demo | ไม่ต้องขาย “ทุกอย่าง”; ขายความชัดเจนเรื่อง market coverage |
| Accounts | เปรียบเทียบบัญชี | Start application | ทำเป็น compare table ที่ audit ได้ |
| Platforms | อธิบาย MT4/MT5 + mobile + workflow | Download / Open account | ฝัง onboarding help และ support FAQ |
| Tools & Insights | ทำให้เว็บ “มี utility” | Use calculators / Join LINE alerts | benchmark มาจาก Exness/FBS/XM/HFM ที่ใช้ calculators/calendar/help center เป็น conversion-assist tools. citeturn27search5turn27search1turn26view4turn8search14turn26view5 Confidence: High. |
| DX Ecosystem | surface DX Academy / DX Trade / DX Exclusive | Explore each ecosystem | ต้องระวังไม่ให้ cross-sell กลายเป็น over-promise |
| Partner / IB | ดึง lead คุณภาพสูงฝั่งพาร์ทเนอร์ | Apply now / Talk to partner manager | แยก narrative ระหว่าง educator / signal room / community owner / agency |
| Help Center / FAQ | ลด burden support และเป็น RAG source | Ask AI / Contact human | ต้องเป็น knowledge source หลักของ bot |
| Blog / Market Insights | SEO + education + topical authority | Read / Subscribe / LINE | เน้น article types ที่ตอบ intent เป็นหน้า ๆ ไม่ใช่ข่าวสั้นจำนวนมาก |
| Contact / Legal | ปิดช่องโหว่ trust/compliance | Contact support | รวม T&C, Privacy, Risk Disclosure, Complaints, AML/KYC intro |
| Campaign landing factory | หน้า sale/subdomain แบบ repeatable | Specific campaign CTA | สร้างจาก schema เดียวกันเพื่อคุม copy/compliance |

### Per-key-page wireframe notes

**Home**

เปิดด้วย **institutional-looking hero**: headline สั้น, subheadline ชัด, CTA 3 ทาง, และ trust bar ทันทีใต้ hero. Visual direction ควรไปทาง **dark navy + quiet gold**, ใช้ motion เฉพาะที่สื่อ “precision” ไม่ใช่ flashy trader hype. Fizens ให้โครง hero/feature/security/stat/testimonial/blog shell มาได้ แต่ copy และ visual rhythm ต้องเปลี่ยนเกือบหมด เพราะต้นฉบับพูดแบบ consumer finance app. citeturn46view0turn46view1turn46view2turn46view3 Confidence: High.

ลำดับ section ที่แนะนำ:
hero → legal/risk microbar → trust proof → market/account snapshot → platform/tools → DX ecosystem → why BestonFX → calculators/utility → partner teaser → FAQ → final CTA + full risk footer.  
อย่าวาง promotion card นำหน้า trust proof แบบหน้าเดิม. citeturn44view0 Confidence: High.

**Why BestonFX**

นี่ต้องเป็นหน้า “proof page” ไม่ใช่หน้าอวยตัวเอง: legal entity, jurisdiction, operational process, trading conditions methodology, funding/withdrawal process, support SLAs, office/contact channels, management bios ที่ตรวจสอบได้. ถ้าข้อมูลใดไม่มีเอกสารยืนยัน ให้ไม่ใส่. ความเชื่อมั่น: High.

**Markets**

ไม่ควรทำเป็นหน้า asset jam-packed แบบ SEO dump. ควรเริ่มจาก 4–6 market families พร้อม “who is this for / what moves it / what to know before trading / related tools”. Google ชัดว่าการมองหา AI-search visibility ควรยืนบน helpful people-first content ที่ unique และ crawlable ไม่ใช่แตกหน้าเป็นชิ้นเล็ก ๆ เพื่อ AI อย่างเดียว. citeturn36view0turn36view1turn36view2 Confidence: High.

**Tools & Insights**

ควรเป็น conversion layer สำคัญของเว็บ เพราะคู่แข่งไทย-localized หลายเจ้าชนะด้วย utility มากกว่าสโลแกน: calculator, calendar, academy, help center, app/tool explainers. สำหรับ BestonFX ผมแนะนำเริ่มจาก **pip/margin/position-size calculator, economic calendar wrapper, session planner, risk-reward calculator, account funding checklist, partner commission estimator** ก่อน. citeturn27search5turn27search1turn26view4turn8search14turn10search7turn10search9 Confidence: High.

**Partner / IB landing**

ต้องไม่เป็นหน้า affiliate cliché. ให้จัด narrative เป็น 3 เสา:  
community leader / educator / digital referrer.  
จากนั้นโชว์ model การทำงาน, tracking transparency, payout visibility, localized campaigns, support manager, และสิ่งที่ “คุณให้ลูกค้าได้” มากกว่า “คุณจะรวยแค่ไหน”. คู่แข่งอย่าง XM, Pepperstone และ IC markets partner pages เน้น commission model + reporting + portal/mobile analytics + localized content ชัดเจน. citeturn26view7turn28search0turn28search1turn30search3turn30search14 Confidence: High.

### Fizens-gap table

Fizens ที่ตรวจผ่าน live URL มี shell ที่ usable สำหรับ hero, feature grid, security section, statistics, pricing, testimonials, blog, integration page, FAQ/contact/about pages; แต่ narrative ทั้งหมดเป็น “finance SaaS / personal finance app” จึงต้องใช้เป็น **layout substrate** ไม่ใช่ copy substrate. citeturn46view0turn46view1turn46view2turn46view3turn46view4turn6view1turn6view2 Confidence: High.

| Section | Reuse / adapt / custom-build | Note |
|---|---|---|
| Global nav + hero frame | Adapt | ใช้โครงได้ แต่ต้อง rebuild nav behavior, CTA logic และ risk/legal microbar ใหม่. citeturn46view0 Confidence: High. |
| Feature cards / grid | Adapt | เปลี่ยนจาก personal-finance features เป็น “markets, platforms, execution, support, tools, DX ecosystem”. citeturn46view1 Confidence: High. |
| Security block | Adapt | เหมาะมากกับ trust narrative แต่ wording ต้อง conservative และพิสูจน์ได้. citeturn46view2 Confidence: High. |
| Statistics strip | Custom-build | ใช้ได้เฉพาะ metric ที่ audit ได้; ห้ามใส่ vanity numbers แบบไม่มีหลักฐาน. หน้าเดิมของ BestonFX มี user/partner claims ที่ควรถือว่า unverified จนกว่าจะมี evidence. citeturn46view2turn44view0 Confidence: High. |
| How-it-works / steps | Custom-build | ต้องเปลี่ยนเป็น account-open journey ที่ถูกลำดับ; หน้าเดิมมี sequence ที่ชวนสับสน. citeturn44view0 Confidence: High. |
| Pricing cards | Adapt lightly | ใช้เป็น account compare shell ได้ แต่ logic/details ควรทำ native. citeturn6view2 Confidence: High. |
| Testimonials carousel | Custom-build | ใน regulated finance ควรใช้เฉพาะ verified case studies / social proof ที่ตรวจได้ และต้องไม่สื่อรับประกันผลลัพธ์. หน้าเดิมี่ยงเกินไป. citeturn44view0turn14view2 Confidence: High. |
| Blog grid | Reuse | โครง list/detail นำมาใช้ได้ดีสำหรับ SEO content hub. citeturn44view0turn36view0 Confidence: High. |
| FAQ accordion | Reuse | ต้องกลายเป็น approved knowledge base source ของ bot และ help center. ความเชื่อมั่น: High. |
| Integrations page | Adapt | แปลงเป็น MT4/MT5/LINE/LIFF/payments/support stack แทน SaaS integrations. citeturn6view1 Confidence: High. |
| Footer / legal stack | Custom-build | ต้องเพิ่ม risk disclosure, legal entity, complaint path, jurisdiction, contact routes. หน้าเดิมยังเบาเกินไป. citeturn44view0turn26view2 Confidence: High. |

## Copywriting Spec

ก่อนอื่นต้องวางกรอบให้ชัด: **เอกสาร ก.ล.ต. ที่ผมอ้างด้านล่างเป็นมาตรฐานทางการที่ใกล้ที่สุดที่ตรวจสอบได้สำหรับการโฆษณาของธุรกิจหลักทรัพย์/สัญญาซื้อขายล่วงหน้าในไทย**; แต่เพราะ BestonFX ดูเป็นบริบท retail forex/CFD ที่อาจมีนิติบุคคลต่างประเทศหรือโครงสร้างอื่นประกอบอยู่ คุณควรถือแผนนี้เป็น **conservative compliance design**, ไม่ใช่ legal opinion สุดท้าย. ก.ล.ต. ย้ำเรื่องไม่บิดเบือน ไม่เกินจริง ไม่เร่งรัด ไม่รับประกันผลตอบแทน และให้แสดงคำเตือนอย่างชัดเจน; พร้อมทั้งเตือนประชาชนให้ระวัง social/media solicitation ที่ให้ผลตอบแทนสูงผิดปกติหรือเร่งให้โอนเงินเร็ว. citeturn14view2turn15view0turn15view1turn15view2turn13search5turn12search3turn12search9 Confidence: High.

### Brand-voice rules

| Rule | What it means in practice |
|---|---|
| Premium, not flashy | น้ำเสียงเหมือน private banking / institutional desk มากกว่า Telegram hype room |
| Thai-first, English-second | ใช้ไทยเป็นหลัก และใส่ English term เฉพาะเมื่อจำเป็น เช่น “spread”, “leverage”, “margin” พร้อมคำอธิบายสั้นครั้งแรก |
| Claim only what you can prove | ทุกตัวเลขต้องมี source/date/condition; ทุก superlative ต้องมี evidence หรือไม่ใช้ |
| Explain risk before urgency | CTA ทุกจุดที่ใกล้ account-open ต้องมี micro risk context ประกบ |
| Operational clarity beats marketing fluff | เน้น “ทำอะไรได้ / อย่างไร / มีเงื่อนไขอะไร / ใครช่วยได้” มากกว่า adjective |
| Respect intelligent users | ไม่ over-explain แบบมือใหม่ทุกจุด แต่ต้องไม่คลุมเครือ |
| Separate education from solicitation | บทวิเคราะห์/academy ไม่ควรใช้เป็นพื้นที่ยิง hard-sell โดยตรง |

หน้าเดิมของ BestonFX ใช้ถ้อยคำอย่าง “อันดับ 1 ของไทย”, “ปลอดภัยมากที่สุดในไทย”, “ดีที่สุดในโลก”, และ testimonial ที่ทำให้ภาพรวมเข้าใกล้ promise-based persuasion มากเกินไป; นี่ควรถูก reset ทั้งระบบ. citeturn44view0 Confidence: High.

### Per-page messaging direction

**Home**  
แกนข้อความควรเป็น:  
“ประสบการณ์โบรกเกอร์ระดับพรีเมียมสำหรับเทรดเดอร์ไทย — ชัดเจนเรื่องผลิตภัณฑ์ ชัดเจนเรื่องความเสี่ยง และเชื่อมต่อการสนับสนุนผ่านเว็บไซต์กับ LINE ได้อย่างต่อเนื่อง”  
ไม่ควรเริ่มด้วย “อันดับ 1”, “ดีที่สุด”, หรือ “ปลอดภัยที่สุด” ถ้ายังไม่มี third-party substantiation. citeturn14view2turn44view0 Confidence: High.

**Why BestonFX**  
พูดเรื่อง **entity, process, standards, support model, DX ecosystem, and governance** ไม่ใช่ pedigree inflation. ถ้าจะพูดเรื่องทีมจากธนาคารลงทุนหรือ broker ชั้นนำ ต้องมีชื่อ/ประวัติ/ขอบเขตให้ตรวจได้; ไม่เช่นนั้นตัดออก. citeturn44view0 Confidence: High.

**Markets / Accounts / Platforms**  
ใช้โทน **technical-explainer**:  
เครื่องมือนี้คืออะไร, เหมาะกับใคร, ค่าธรรมเนียม/เงื่อนไขแบบไหน, มี risk อะไร, next step คืออะไร. คู่แข่งที่แข็งแรงมักทำ utilities และ help resources ควบคู่กับ product pages ไม่ปล่อย product page ให้เป็นแต่ sales page. citeturn27search5turn8search14turn26view4turn26view0 Confidence: High.

**DX Ecosystem**  
อย่าเขียนเหมือน “ecosystem = guaranteed edge”. ให้เขียนว่าเป็น **เส้นทางการเรียนรู้/ชุมชน/บริการเสริม** ที่ต่างกันตามระดับผู้ใช้:
- DX Academy = structured learning
- DX Trade = signal/room context
- DX Exclusive = VIP / wealth-tier benefits  
และทุกจุดที่พาดพิง performance ต้องผ่าน compliance review ก่อน publish. ความเชื่อมั่น: High.

**Partner / IB**  
น้ำเสียงควรเป็น B2B-ish:
“เติบโตกับระบบที่ติดตามได้ โปร่งใส และมีทีมช่วย optimize funnel ของคุณ”  
ไม่ใช่ “หารายได้ไม่จำกัด” นำหน้าแบบตรง ๆ แม้คู่แข่งบางเจ้าจะใช้. BestonFX ซึ่งยัง pre-launch ควรชนะด้วย transparency ไม่ใช่ loud payout language. citeturn26view7turn28search1 Confidence: High.

### SEC compliance checklist

| Banned or restricted phrasing | Required or safer pattern |
|---|---|
| “กำไรแน่นอน”, “รับประกันผลตอบแทน”, “ไม่มีความเสี่ยง”, “เทรดชนะชัวร์” | “ผลิตภัณฑ์ leveraged มีความเสี่ยงสูง ผู้ใช้ควรทำความเข้าใจเงื่อนไขและความเสี่ยงก่อนตัดสินใจ” — เพราะ ก.ล.ต. ห้ามการสื่อสารที่เป็นเท็จ เกินจริง บิดเบือน และห้ามมีลักษณะชี้นำ/รับประกันผลตอบแทน. citeturn15view1turn16view3 Confidence: High. |
| “อันดับ 1”, “ดีที่สุด”, “ปลอดภัยที่สุด”, “สเปรดต่ำที่สุด” ถ้าไม่มีเอกสารเปรียบเทียบ/เงื่อนไขอ้างอิง | ใช้ comparative ที่พิสูจน์ได้ เช่น “เงื่อนไขบัญชีของเรา…” พร้อม source/date/footnote หรือเลี่ยง entirely. ก.ล.ต. เน้นให้ข้อมูลครบ ถูกต้อง และไม่ทำให้สำคัญผิด. citeturn15view0turn15view1 Confidence: High. |
| urgency แบบ “สมัครตอนนี้ก่อนพลาดกำไร”, “รีบฝากก่อนหมดสิทธิ์ทำเงิน” | ใช้ urgency เฉพาะเชิง logistic เช่น วันสิ้นสุดแคมเปญ / คุณสมบัติ / terms link และต้องไม่เร่งให้ตัดสินใจโดยไม่คำนึงถึงข้อมูลพื้นฐาน. citeturn15view2 Confidence: High. |
| testimonial ที่สื่อผลลัพธ์การเทรดหรือความมั่นใจเกินจริง | ใช้ case study/quote เฉพาะที่ตรวจสอบได้ และหลีกเลี่ยงข้อความที่ตีความเป็นผลตอบแทนหรือความปลอดภัยเชิงรับประกัน. หน้าเดิมของ BestonFX ควรรื้อทั้งหมดก่อน reuse. citeturn44view0turn15view1 Confidence: High. |
| promo page ที่ไม่มี warning/eligibility/terms | promo page ทุกหน้าต้องมี risk note, start/end date, eligibility, conditions, exclusions, dispute policy และ link ไป terms. ก.ล.ต. กำหนดให้ warning ต้องมองเห็น/รับฟังได้ชัดเจนและให้ความสำคัญเทียบกับ main message. citeturn14view2turn15view2turn16view1turn16view2turn16view3 Confidence: High. |
| ใช้คำว่า “โบรกเกอร์ของไทย” ถ้านิติบุคคล/ใบอนุญาตไม่รองรับ | ใช้ wording ที่ปลอดภัยกว่า เช่น “บริการสำหรับเทรดเดอร์ไทย” หรือ “Thai-language support” จนกว่าจะมี legal sign-off. SEC alerts ชี้ว่าการทำให้คนเข้าใจผิดเรื่องสถานะใบอนุญาต/ผู้กำกับดูแลมี sensitivity สูง. citeturn44view0turn12search9turn13search5 Confidence: High. |

**ตำแหน่ง risk warning ที่แนะนำ**

- sticky microbar ใต้ hero ทุกหน้าที่มี CTA สมัคร
- footer global risk disclosure ทุกหน้า
- account, platform, partner, promotion, calculator pages ต้องมี page-level warning ซ้ำ
- bot responses ที่แตะ product suitability/returns/trading suggestions ต้องแนบ compliance suffix อัตโนมัติ  
Pepperstone TH เป็นตัวอย่างของผู้เล่นที่วาง CFD risk warning ชัดมากในไซต์. citeturn26view2 Confidence: High.

## Toolchain Pipeline

### Step-by-step build workflow

**Step A — Design baseline in Framer**

ซื้อ Fizens เพื่อใช้เป็น **layout accelerator** ไม่ใช่ final product copy. เริ่มจากเปลี่ยน design system: color tokens, typography, radius, shadows, icon style, navigation density, spacing scale ให้เข้ากับ “Bloomberg Terminal meets Swiss private bank”. Fizens มี home/about/pricing/blog/integration/contact shells อยู่แล้ว จึงช่วย short-cut โครงได้เยอะ. citeturn46view0turn6view1turn6view2 Confidence: High.

**Step B — Use Framer MCP only as a design-editing accelerator**

Framer Marketplace มี **MCP — Framer MCP** plugin ที่ช่วย bridge project ไปหา Claude/Cursor/Codex ผ่าน secure tunnel, ทำ XML updates, style changes, code file edits และ React export ได้ แต่ listing ระบุชัดว่า **“This is not an official Framer plugin.”** เพราะฉะนั้นใช้มันเพื่อเร่งงานแก้ section/copy/layout ใน design phase ได้ แต่ไม่ควรผูก production process ทั้งระบบเข้ากับ plugin นี้. citeturn22view2 Confidence: Medium.

**Step C — Prefer official Framer Server API for publish automation, if needed**

ถ้าต้องการ automation ฝั่ง Framer จริง ๆ ให้พึ่ง **official Framer Server API** มากกว่าในงาน production-oriented เพราะ Framer ระบุว่าใช้ update/publish projects จาก server ได้ และยัง open beta อยู่. นี่เหมาะกับงาน campaign-only หรือช่วงเปลี่ยนผ่าน ไม่ใช่แกน runtime หลักของ BestonFX. citeturn22view0 Confidence: High.

**Step D — Export stable sections with Unframer**

ใช้ React Export plugin + `npx unframer {projectId} --outDir ./src/framer` เพื่อดึง component shell เข้าสู่ repo. Unframer ระบุว่าใช้ได้กับ React frameworks หลายตัวรวมถึง Next.js, รองรับ breakpoints, forms, color styles, dark mode และสร้าง TypeScript types ตาม property controls ได้. แต่ข้อจำกัดก็ชัด: ควรปิด React Strict Mode, watch mode ผูกกับการ publish site, และบาง dependency อาจต้อง `--external` แล้วติดตั้งเอง. citeturn41view0 Confidence: Medium.

**Step E — Rebuild logic-heavy surfaces natively in Next.js**

ทุกส่วนที่เป็น product logic หรือ compliance logic ให้เขียนใหม่บน Next.js App Router:
- route handlers สำหรับ APIs/webhooks
- RHF + Zod forms
- shadcn/ui for admin and portal primitives
- native calculators
- FAQ search
- bot widget
- LIFF routes
- CMS tooling  
Next.js ระบุชัดว่า App Router ใช้ Server Components/Suspense/Server Functions และ Route Handlers อยู่ใน `app` directory เพื่อทำ custom request handling. citeturn35search8turn35search0turn35search4 Confidence: High.

**Step F — Data, security, and embeddings**

ฝั่ง backend ใช้ Supabase เป็น operational core:
- Postgres + RLS
- Auth
- Storage
- Edge Functions
- vector/embedding jobs  
Supabase docs ระบุ RLS เป็น baseline สำคัญสำหรับ frontend data security, Quickstart with Next.js เปิด RLS by default, และมี guide สำหรับ automatic embeddings ผ่าน Edge Functions/pgmq/pg_net/pg_cron. citeturn35search16turn35search12turn35search14 Confidence: High.

**Step G — Deploy, analytics, QA**

deploy บน Vercel เพื่อใช้ preview deployments, CDN/firewall และ Web Analytics; Vercel docs ระบุ Web Analytics เป็น first-party measurement และไม่ใช้ third-party cookies. citeturn38view1turn35search2turn35search17turn35search21 Confidence: High.

### Where each tool helps and where it adds friction

| Tool | Best use | Friction |
|---|---|---|
| Framer | section ideation, fast visual iteration, stakeholder review | เมื่อเริ่มมี logic/compliance/path complexity จะตันเร็วกว่า code |
| Framer MCP plugin | AI-assisted design/copy/layout edits in Framer | unofficial, medium confidence, ไม่ควรเป็น production backbone. citeturn22view2 Confidence: Medium. |
| Framer Server API | server-side publish/update automation for Framer surfaces | open beta, เหมาะกับ transition/campaign มากกว่า core runtime. citeturn22view0 Confidence: High. |
| Unframer CLI | export stable Framer components into React/Next repo | publish dependency, Strict Mode friction, package mismatches. citeturn41view0 Confidence: Medium. |
| Codex | native component build, schema codegen, tests, refactors, migration PRs | ต้องมี strong specs + acceptance criteria; ไม่ควรให้เขียน copy/compliance final เอง |
| n8n | ops automation, alerts, ingestion jobs, review workflows | ถ้าใช้แทน core backend logic จะสร้าง hidden complexity |
| Supabase | content store, RLS backend, embeddings, auth, admin data | ต้องออกแบบ schema/permissions ให้ดีตั้งแต่ต้น |
| Vercel | previews, deployment, analytics, edge delivery | usage costs ต้อง monitor เมื่อ bot/portal โต |

**ข้อสรุปสั้นมาก**:  
**Framer = design accelerator**  
**Unframer = bridge**  
**Next.js/Supabase/Vercel = production system**  
นี่คือโครงที่เหมาะกับ BestonFX มากที่สุด. ความเชื่อมั่น: High.

## AI Bot + LINE Plan

LINE ecosystem ของวันนี้เปิดช่องทำงานได้ดีมากสำหรับ BestonFX ถ้าออกแบบให้เว็บกับ LINE เป็น **surface เดียวกันคนละ entry point**: LIFF คือ web app บน LINE, สามารถดึง user context บางส่วนได้, เช็ค friendship status ได้, และปัจจุบันมี `liff.requestFriendship()` สำหรับ prompt add friend/unblock แบบ in-app; อีกทั้ง LINE แนะนำว่า LIFF/LINE MINI App กำลัง converge กัน และตั้งแต่ October 2025 LINE MINI Apps ใช้ผ่าน external browser ได้ทั้งหมด. นี่แปลว่าเราควรเขียน **browser-capable Next routes ตั้งแต่วันแรก** แล้วค่อยเปิดใน LINE/LIFF/mini app ได้ ไม่ควรเขียน flow ที่ใช้ได้เฉพาะ inside-LINE. citeturn31view0turn31view1turn31view3turn32search4turn33search7turn32search8 Confidence: High.

### Architecture

```text
Approved CMS / FAQ / Legal / DX content
            │
            ├──> Embedding pipeline (Supabase + Edge Functions)
            │
            └──> Bot knowledge index
                         │
Website widget ──────────┤
LINE Messaging API ──────┼──> Conversation Gateway (Next.js Route Handlers)
LIFF / LINE MINI routes ─┘                 │
                                           ├── Policy / compliance layer
                                           ├── Retrieval layer
                                           ├── Mem0 memory layer
                                           ├── Model router
                                           │      ├── default support model
                                           │      └── supervisor / escalation model
                                           ├── Human handoff queue
                                           └── Audit / analytics / QA log
```

### Model choice

สำหรับ production bot v1 ผมแนะนำ **two-tier model routing**:

- **Default support model:** ใช้ low-cost, fast, strong instruction-following/tool-calling model เช่น **GPT-4.1 mini** สำหรับ FAQ, onboarding guidance, doc checklist, policy retrieval, partner pre-qualification และ content navigation เพราะ OpenAI ระบุว่ารุ่นนี้อยู่ในตระกูลที่เด่นเรื่อง instruction following/tool calling และรองรับ context window ใหญ่. citeturn42search0turn42search1 Confidence: High.
- **Supervisor / escalation model:** ใช้ higher-tier model สำหรับ complaint summarization, ambiguous policy interpretation, transcript QA, and compliance review drafts. OpenAI docs ปัจจุบันยังบอกด้วยว่าถ้างานซับซ้อนมากให้พิจารณาเริ่มจาก GPT-5. citeturn42search1turn42search2 Confidence: High.

### Integration points

| Surface | What it should do |
|---|---|
| Website bot widget | ตอบ FAQ, นำทางหน้า, แนะนำเอกสารสมัคร, โยนไป LINE/human |
| LINE Official Account chat | ใช้ Messaging API รับ/ตอบข้อความ, quick replies, rich menus, broadcast ตาม policy |
| LIFF / LINE MINI app support route | เปิด help center, onboarding assistant, partner inquiry, account linking |
| Add-friend flows | ใช้ `liff.requestFriendship()` ใน route แบบ Full screen; ถ้าต้องเช็คก่อนใช้ `liff.getFriendship()` ซึ่งต้อง `profile` scope. citeturn31view0turn31view3 Confidence: High. |
| Account linking | ทำได้ทั้งผ่าน LIFF/LINE Login หรือ Messaging API link-token flow; เลือกตาม entry point ของ user journey. citeturn32search0turn33search4 Confidence: High. |
| Internal operator tooling | ใช้ LINE Bot MCP Server แบบระวัง เพื่อให้ทีมงานใช้ AI agent push message, ดู profile/quota/rich menu operations ได้ แต่ **ไม่ควรใช้เป็น primary runtime path** เพราะ LINE ระบุชัดว่า MCP server นี้ยังเป็น trial/preview และ support Messaging API ได้ไม่ครบ. citeturn19search3turn20search0turn20search2 Confidence: High. |

### Compliance guardrails

บอท **อนุญาต** ให้ตอบเรื่อง:
- วิธีเปิดบัญชี
- เอกสารที่ต้องใช้
- ความแตกต่างของบัญชี/แพลตฟอร์ม
- การใช้งาน calculators/tools
- เวลาตลาด/ปฏิทิน
- ข้อมูลเชิงการศึกษา
- เงื่อนไขแคมเปญที่ published และ approved แล้ว
- ขั้นตอนฝาก/ถอน/ติดต่อ support

บอท **ไม่อนุญาต** ให้ตอบเป็น:
- คำแนะนำลงทุนเฉพาะบุคคล
- มุมมอง “ควร buy/sell ตอนนี้ไหม”
- การคาดการณ์กำไร
- การยืนยันผลตอบแทน
- การเร่งให้ฝากเงินหรือสมัครเร็วเพื่อไม่พลาดโอกาสทางกำไร

กฎนี้สอดคล้องกับกรอบ SEC-style ที่ห้าม misleading communications, guaranteed returns และ pressure-based promo. citeturn15view0turn15view1turn15view2turn13search5 Confidence: High.

### Memory and escalation

Mem0 เหมาะใช้เป็น **preference/context memory** ไม่ใช่ policy source of truth:
- จำภาษา
- จำสถานะว่า user ขอเจ้าหน้าที่แล้วหรือยัง
- จำว่าคนนี้เป็น trader / partner prospect
- จำเงื่อนไขที่ user ถามซ้ำ  
แต่ห้ามใช้เพื่อ “จำคำแนะนำลงทุนส่วนตัว” หรือ “จำว่าลูกค้าชอบรับความเสี่ยงสูง” แล้วเอาไปตอบเหมือน suitability advice. Mem0 docs ระบุทั้ง managed platform และ open-source/self-host ได้. ตัว paper ของ Mem0 ยังรายงานว่า memory architecture แบบนี้ช่วยทั้งคุณภาพและ latency/token cost เทียบกับ full-context. citeturn34view0turn34view2 Confidence: High.

## Feature & Analytics Roadmap

เพราะ BestonFX ยังเป็น pre-launch broker ในตลาดไทย สิ่งที่ “เพิ่มมูลค่า” จริงต้องไม่ใช่ feature ที่ดูใหญ่แต่ยังกิน dependency จาก CRM/trading portal มากเกินไป. จาก benchmark คู่แข่ง สิ่งที่ users คาดหวังจาก public site คือ **utilities, help resources, education, platform clarity, partner transparency** มากกว่า dashboard เชิงลึกตั้งแต่วันแรก. citeturn27search9turn26view4turn8search14turn28search1turn30search3 Confidence: High.

### Impact-vs-Effort ranked table

| Feature | Value to client/IB | Effort | Phase |
|---|---|---:|---|
| Risk & trade calculators suite | สูงมากต่อ trader; ช่วย conversion แบบ intent สูง | M | Phase 1 |
| Help Center + searchable FAQ + AI bot handoff | สูงมากต่อทั้ง trader และ support | M | Phase 1 |
| Trust / legal / funding explainer pages | สูงมากต่อ conversion และ compliance | M | Phase 1 |
| Partner landing + commission estimator | สูงมากต่อ IB acquisition | M | Phase 1 |
| DX ecosystem hub | สูงต่อ retention / differentiation | M | Phase 1 |
| LIFF onboarding assistant + add-friend flow | สูงมากสำหรับ Thai audience ที่ใช้ LINE อยู่แล้ว | M | Phase 2 |
| Campaign landing factory / subdomain generator | สูงต่อ growth ops | M | Phase 2 |
| Content-driven market tools hub | กลางถึงสูง ต่อ SEO + LTV | M | Phase 2 |
| IB portal MVP | สูงมากต่อ partner trust แต่ขึ้นกับ data ingestion | H | Phase 2 |
| AI analytics copilot | กลางถึงสูง ต่อ ops efficiency | M | Phase 2 |
| Multi-level partner tree / regional pages | สูงสำหรับ scale stage | H | Phase 3 |
| Trader journal / advanced performance dashboards | ต่ำใน pre-launch เพราะพึ่ง CRM/user portal มากเกินไป | H | Cut now |
| Social trading / copy modules | ยัง premature | H | Cut now |

### AI analytics approach

กลยุทธ์ analytics ควรเป็น **first-party funnel analytics + LLM-assisted interpretation** ไม่ใช่ “ติด AI แล้วหวังจะฉลาดเอง”. ใช้ Vercel Web Analytics เป็น baseline ด้าน traffic/page/referrer/device/location โดย Vercel ระบุว่า analytics แบบนี้ไม่พึ่ง third-party cookies; จากนั้นยิง custom events ลง Supabase เพื่อเก็บ funnel/business events ที่ Vercel ไม่มี. citeturn35search2turn35search17turn35search21 Confidence: High.

**Event taxonomy ที่ควรมีตั้งแต่วันแรก**
- `hero_cta_open_account`
- `hero_cta_add_line`
- `hero_cta_partner`
- `risk_warning_expand`
- `tool_use_*`
- `faq_search`
- `faq_resolved`
- `bot_started`
- `bot_escalated_human`
- `liff_open`
- `friendship_prompt_shown`
- `friendship_status_checked`
- `partner_apply_started`
- `partner_apply_submitted`
- `campaign_page_view`
- `campaign_form_submit`

**LLM analytics tasks ที่คุ้มจริง**
- cluster คำถามที่ bot ตอบไม่ได้
- หา page ที่มี traffic แต่ CTA ต่ำ
- หาหน้า FAQ/Article ที่ควรแตกเป็นหน้าเฉพาะ
- สรุป weekly insight ให้ทีม content / support / founder
- ตรวจ copy ว่ามีคำ risky หรือไม่
- map search intent → content gaps

ส่วนฝั่ง SEO/GEO ให้ยึด guideline ทางการของ Google:  
อย่าหมกมุ่นกับ llms.txt, chunking hacks, หรือ AI-only rewrites; ให้เน้น technical clarity, helpful people-first content, structured data ที่เหมาะสม, rich media, และ evidence-based content. Google ยังบอกชัดว่า AEO/GEO สำหรับ Google มองเป็น SEO อยู่ดี และ structured data ไม่ได้ required สำหรับ AI search แต่ยัง useful ต่อ rich results/understanding. citeturn36view0turn36view1turn36view2turn36view3turn36view4 Confidence: High.

### Backend Design

backend ที่แนะนำคือ **custom operational backend บน Supabase** โดยให้ Framer หลุดจากบทบาท production CMS ไปเลยใน core site. เหตุผลคือ Supabase ให้ schema flexibility, RLS, auth และ Edge Functions ครบกว่า สำหรับระบบที่ต้องเลี้ยง site + bot + partner flows พร้อมกัน. citeturn35search16turn35search3turn35search14 Confidence: High.

**Data model sketch**

```text
auth.users
profiles
line_accounts
consents
leads
lead_sources
campaigns
landing_pages
content_spaces
content_entries
content_revisions
content_locales
faq_items
faq_categories
knowledge_chunks
bot_sessions
bot_messages
bot_handoffs
support_tickets
dx_programs
dx_offers
partner_accounts
partner_links
partner_clicks
partner_referrals
partner_import_jobs
partner_commission_rules
partner_commission_ledger
partner_payouts
analytics_events
search_console_snapshots
weekly_ai_insights
audit_logs
approval_workflows
```

**Admin roles**

| Role | Can do | Cannot do |
|---|---|---|
| Super Admin | all configs, roles, publish, imports | — |
| Compliance Editor | approve/reject risky copy, disclaimers, promo terms | change payouts |
| Content Editor | draft/edit pages, FAQs, articles | publish risky claims without approval |
| Support Lead | review bot transcripts, FAQs, handoff queues | edit legal copy |
| Partner Manager | manage partner content, links, referrals, payouts view | alter core compliance policy |
| Analyst | dashboards, funnel insights, AI reports | publish site content |
| Legal / Auditor | review audit logs, policies, claims evidence | operational changes without approval |

**Integration map**

- **Site pages** อ่าน content approved state จาก Supabase
- **Bot** ดึงเฉพาะ published knowledge chunks
- **LIFF / LINE** ส่ง event และ linked identity เข้า Supabase
- **n8n** ใช้สำหรับ alerts, scheduled imports, Slack/LINE ops notifications
- **Search Console / analytics** feed เข้าตาราง snapshot เพื่อ AI summarization
- **partner commission data** เข้าผ่าน import/API bridge เท่านั้น ไม่ให้ public site ไปแตะ CRM ตรง ๆ

### IB Portal Plan

benchmark ฝั่ง partner ชัดมากว่าพาร์ทเนอร์ต้องการ **tracking transparency** มากกว่าหน้า landing ที่สวยเฉย ๆ: XM พูดเรื่อง unlimited commission / instant payouts / sub-partner, Pepperstone พูดเรื่อง daily payments / mobile portal / analytics / localized campaigns, IC พูดเรื่อง IB / multi-level / regional partner programs. BestonFX ควรหยิบ “ความโปร่งใสและ local enablement” มาทำเป็น MVP ก่อน. citeturn26view7turn28search0turn28search1turn30search3turn30search14 Confidence: High.

**Architecture**
- `/partner` = public landing/page builder
- `/ib` = protected portal inside same Next app
- Supabase Auth = email OTP เป็น primary MVP
- Optional LINE linking = สำหรับ notifications และ queue reduction
- referral links = first-party tracking routes (`/r/:code`)
- commission data = อ่านจาก imported snapshot/API mirror ไม่แตะ CRM runtime

**MVP vs later**

| MVP | Later |
|---|---|
| login + profile | LINE-first auth |
| referral links + QR | multi-level trees |
| clicks / leads / approved referrals | cohort and channel attribution |
| commission ledger from CSV/API imports | near-real-time sync |
| payout history view | invoice/tax docs automation |
| asset locker: logos / approved copy / banners | creative generator |
| apply / KYC checklist / manager contact | regional co-branded mini-sites |

**Critical dependency**  
เพราะ task นี้ **exclude CRM/trading portal**, การคำนวณ commission จริงต้องมี **read-only ingest boundary** จากระบบเดิม ถ้ายังไม่มี API พร้อม ให้ทำ **CSV import + validation + audit trail** เป็น MVP แทน. ถ้าไม่กำหนด boundary นี้ก่อน ทีมจะเถียงกันไม่จบว่า portal “เสร็จ” หรือยัง ทั้งที่ source-of-truth ยังไม่ชัด. ความเชื่อมั่น: High.

### Phased Roadmap

| Phase | What ships | Dependencies |
|---|---|---|
| Phase 0 | compliance workshop, claim inventory, entity disclosure map, Fizens adaptation, design tokens, Next/Supabase/Vercel skeleton, content model, analytics event spec | founder/legal approvals |
| Phase 1 | new Home, Why BestonFX, Markets, Accounts, Platforms, Help Center, Blog shell, DX ecosystem hub, Partner landing, legal/risk pages, calculator v1, website bot v1, base SEO/schema | approved copy + exported shell components |
| Phase 2 | LIFF routes, LINE add-friend/account-link flows, bot reuse on LINE, custom admin CMS, campaign landing factory, AI analytics weekly reports, IB portal MVP, import pipeline | LINE console setup + data mapping from back office |
| Phase 3 | partner scale features, subdomain sale-page system, advanced content experimentation, transcript QA loops, multi-level partner views, localization expansion, selective Framer campaign automation if useful | stable ops + clean source-of-truth |

**30-day deliverable ที่ realistic**
- Week 1: claim audit + sitemap + wireframe notes + design token reset
- Week 2: Next repo + Supabase schema + Unframer export spike
- Week 3: Home/Trust/Partner/Help Center build
- Week 4: calculator + bot v1 + analytics events + QA + staging review  
ความเชื่อมั่น: High.

### Risks & Compliance Flags

| Rank | Risk | Why it matters | Mitigation |
|---|---:|---|---|
| High | Misleading positioning / Thai-license ambiguity | หน้าเดิมใช้ “โบรกเกอร์ของไทย”, “อันดับ 1”, “ปลอดภัยมากที่สุด”, user/partner counts และ testimonials แรงมาก; SEC-style guidance และ scam warnings ทำให้ภาษาลักษณะนี้เสี่ยงสูงถ้าไม่มี proof/permission. citeturn44view0turn14view2turn15view1turn13search5turn12search9 Confidence: High. | freeze all superlatives until evidence pack + legal sign-off |
| High | No visible risk architecture | homepage text ที่ตรวจไม่พบ warning; ใน regulated finance นี่เสีย trust หนักกว่าไม่มี animation สวย. citeturn45view0turn45view1turn45view2turn15view2turn26view2 Confidence: High/Medium. | global risk system: top microbar + page-level + footer |
| High | Split source of truth for partner commissions | ถ้าไม่มี ingest boundary จาก CRM/back office, IB portal จะกลายเป็น mock dashboard | define CSV/API mirror MVP before UI build |
| Medium | Unframer technical debt | export flow ต้องพึ่ง publish, strict mode caveats, package mismatches. citeturn41view0 Confidence: Medium. | export only static shells; native-build all logic |
| Medium | LINE Bot MCP immaturity | LINE ระบุ trial/preview และ support Messaging API ยังไม่ครบ. citeturn19search3turn20search0 Confidence: High. | use Messaging API/LIFF as production path; MCP only for internal ops tooling |
| Medium | AI-generated thin content hurts SEO/GEO | Google ระบุว่า mass AI content without added value may violate spam policy; llms.txt/chunking hacks ไม่ใช่คำตอบ. citeturn36view0turn36view2 Confidence: High. | editorial workflow + expert review + original evidence |
| Medium | Bot hallucination = compliance incident | web+LINE bot reuse ขยาย blast radius | hard intent taxonomy, retrieval-only answers, human escalation, transcript QA |
| Medium | Pre-launch trust deficit | คู่แข่งมี help center/tools/partner transparency/risk warnings ครบกว่า | launch Trust + Help + Tools before fancy campaigns |
| Low | Over-building features too early | public site ยังไม่ควรกลายเป็น pseudo trading portal | cut trade journal / advanced dashboards / social modules now |

### Open Questions

1. **Legal entity / jurisdiction** ไหนคือสิ่งที่จะเปิดเผยบน public site ได้จริง และ under what wording?
2. สามารถใช้คำว่า **“โบรกเกอร์ของไทย”** ได้ตามกฎหมายและ entity structure จริงหรือไม่?
3. มี **trust artifacts** อะไรที่ตรวจสอบได้บ้างแล้ว: incorporation, licenses, bank/payment partners, office, management bios, audit/reporting, execution methodology?
4. claim ปัจจุบันใดบ้างที่ **พิสูจน์ได้จริง**: Reuters relationship, registered users, partner count, support SLA, market data arrangements?
5. ฝั่ง CRM/back office มี **API / export / CSV schema** สำหรับ IB ledger หรือไม่?
6. ต้องการให้ **LINE เป็น primary identity** หรือใช้ email OTP เป็นหลักแล้วค่อย link LINE?
7. DX Academy / DX Trade / DX Exclusive เนื้อหาไหนเป็น **public**, **lead-gated**, และ **member-only**?
8. internal owner ของ **compliance sign-off** คือใคร และ SLA การ approve copy/terms/FAQ/bot knowledge คือกี่ชั่วโมงหรือกี่วัน?
9. launch goal ของ 90 วันแรกคือ **brand trust**, **account-open leads**, หรือ **IB acquisition** — อะไรคือ metric อันดับหนึ่ง?
10. ต้องการใช้ Framer ต่อในระยะยาวสำหรับ **campaign microsites** หรือให้เหลือเป็น design-only tool?

**Recommended next action:** อนุมัติ **Option B** แล้วเริ่ม **5-day architecture + compliance spike** ทันที: ซื้อ Fizens, reset design tokens, export nav/hero/footer เข้า Next repo, rewrite หน้า Home/Trust/Partner/Help Center ใหม่ภายใต้ checklist ด้าน compliance, และทดสอบ end-to-end เพียง 3 flow ให้ผ่านจริงก่อน—**Open Account**, **Add LINE / LIFF**, และ **Partner Lead Capture**.