import { readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, "..");
const wireframeDir = path.join(root, "docs", "wireframes");
const pagesDir = path.join(wireframeDir, "pages");
const outputPath = path.join(
  wireframeDir,
  "generated",
  "beston-fizens-wireframe-handoff.html",
);

const pageOrder = [
  "home.md",
  "why-bestonfx.md",
  "markets.md",
  "accounts.md",
  "tools.md",
  "partners.md",
  "support.md",
  "articles.md",
  "legal-risk-disclosure.md",
];

const pageSourceMap = {
  "home.md": { source: "/", live: "https://fizens.framer.ai/", treatment: "Adapt heavily", target: "/" },
  "why-bestonfx.md": { source: "/about", live: "https://fizens.framer.ai/about", treatment: "Adapt", target: "/why-bestonfx" },
  "markets.md": { source: "/features", live: "https://fizens.framer.ai/features", treatment: "Adapt", target: "/markets" },
  "accounts.md": { source: "/pricing", live: "https://fizens.framer.ai/pricing", treatment: "Replace", target: "/accounts" },
  "tools.md": {
    source: "/features + /integration + /download",
    live: "https://fizens.framer.ai/features",
    treatment: "Adapt",
    target: "/tools",
  },
  "partners.md": {
    source: "/pricing + /contact + custom",
    live: "https://fizens.framer.ai/pricing",
    treatment: "Custom-build",
    target: "/partners",
  },
  "support.md": { source: "/contact", live: "https://fizens.framer.ai/contact", treatment: "Adapt", target: "/support" },
  "articles.md": {
    source: "/articles + /articles/:slug",
    live: "https://fizens.framer.ai/articles",
    treatment: "Adapt",
    target: "/articles",
  },
  "legal-risk-disclosure.md": {
    source: "/term-and-conditions + /privacy-policy",
    live: "https://fizens.framer.ai/term-and-conditions",
    treatment: "Custom-build",
    target: "/legal/risk-disclosure",
  },
};

const reusableCopyPoints = {
  riskWarning:
    "Forex/CFD และ Leverage มีความเสี่ยงสูง อาจทำให้สูญเสียเงินลงทุน โปรดศึกษาข้อมูลและความเสี่ยงก่อนตัดสินใจ",
  campaignTagline: "เทรดบนความจริง",
  primaryCta: "เปิดบัญชี",
  secondaryCta: "ทัก LINE OA ติดต่อ admin",
  lineCta: "ทัก LINE OA ติดต่อ admin",
  verifyPlaceholder: "รอยืนยันข้อมูลจากฝ่ายกำกับดูแลก่อนเผยแพร่",
};

const pageRoadmap = [
  {
    file: "home.md",
    title: "Home",
    sourcePage: "Fizens Home",
    screenshot: "assets/fizens-live/page-home-top.png",
    midScreenshot: "assets/fizens-live/page-home-mid.png",
    use: "ใช้ rhythm ของ hero, feature flow, FAQ, CTA และ footer",
    replace: "เปลี่ยน finance-app promise เป็น Trade Smarter Not Harder: MT5, Rebate $5/lot, No Minimum, ทีมไทย, และ risk disclosure ที่แยกจาก benefit",
    framerSteps: [
      "Duplicate Fizens Home เป็นหน้า /",
      "Replace HeroSection, Features, Pricing preview, FAQ, CTA",
      "Hide stats/testimonials until verified",
    ],
    copyPoints: [
      ["Route", "/"],
      ["Tagline", "Trade Smarter Not Harder"],
      ["Hero H1", "Trade Smarter Not Harder"],
      ["Subhead", "เทรดบน MT5 พร้อม Rebate $5/lot, เริ่มได้แบบ No Minimum และมีทีมไทยคุยผ่าน LINE OA 24/7"],
      ["Primary CTA", reusableCopyPoints.primaryCta],
      ["Secondary CTA", reusableCopyPoints.secondaryCta],
      ["LINE CTA", reusableCopyPoints.lineCta],
    ],
  },
  {
    file: "why-bestonfx.md",
    title: "Why beston",
    sourcePage: "Fizens About",
    screenshot: "assets/fizens-live/page-about-top.png",
    midScreenshot: "assets/fizens-live/page-about-mid.png",
    use: "ใช้โครง story/about, mission, team/proof rhythm",
    replace: "เปลี่ยน mission/team/review เป็น trust story, regulator proof, no-minimum path และ Thai support",
    framerSteps: [
      "Duplicate /about แล้ว rename เป็น /why-bestonfx",
      "ใช้ hero + trust split + regulator strip",
      "ปิด team/testimonial ถ้าไม่มีข้อมูลจริง",
    ],
    copyPoints: [
      ["Route", "/why-bestonfx"],
      ["Page H1", "เริ่มง่าย ตรวจสอบได้ คุยกับทีมไทย"],
      ["Subhead", "ดู Rebate, เงื่อนไขบัญชี, เอกสารบริษัท และช่องทางติดต่อก่อนตัดสินใจ"],
      ["Risk note", reusableCopyPoints.riskWarning],
    ],
  },
  {
    file: "markets.md",
    title: "Markets",
    sourcePage: "Fizens Features",
    screenshot: "assets/fizens-live/page-features-top.png",
    midScreenshot: "assets/fizens-live/page-features-mid.png",
    use: "ใช้ feature-card grid และ section rhythm สำหรับ market categories",
    replace: "เปลี่ยน app features เป็น Forex, metals, indices, energy, crypto พร้อม label sample data",
    framerSteps: [
      "Duplicate /features เป็น /markets",
      "เปลี่ยน cards เป็น market categories",
      "ใส่ disclaimer ทุก ticker/price preview",
    ],
    copyPoints: [
      ["Route", "/markets"],
      ["Page H1", "ตลาดที่คุณอยากเทรด ครบในที่เดียว"],
      ["Subhead", "รองรับ FX, ทอง, ดัชนี, น้ำมัน และคริปโตบน MT5 พร้อมข้อมูลตัวอย่างที่แยกจากราคา real-time"],
      ["Data label", "ตัวอย่าง — ไม่ใช่ราคาจริง"],
    ],
  },
  {
    file: "accounts.md",
    title: "Accounts",
    sourcePage: "Fizens Pricing",
    screenshot: "assets/fizens-live/page-pricing-top.png",
    midScreenshot: "assets/fizens-live/page-pricing-mid.png",
    use: "ใช้ pricing card/table layout เป็น account comparison",
    replace: "เปลี่ยน SaaS plan $0/$20/$40 เป็น 2 account paths: Standard และ Demo Account",
    framerSteps: [
      "Duplicate /pricing เป็น /accounts",
      "Rename pricing cards เป็น AccountComparison แบบ 2 cards",
      "Standard = บัญชีเทรดจริง, Demo Account = บัญชีทดลองด้วยเงินจำลอง",
      "ทุก spread/commission/leverage ต้องมี [verify]",
    ],
    copyPoints: [
      ["Route", "/accounts"],
      ["Page H1", "เลือกบัญชีให้ตรงจังหวะการเทรด"],
      ["Subhead", "มีแค่ 2 ทางเลือก: Standard สำหรับเทรดจริง และ Demo Account สำหรับลองระบบด้วยเงินจำลอง"],
      ["CTA", "เปิดบัญชี"],
    ],
  },
  {
    file: "tools.md",
    title: "Tools",
    sourcePage: "Fizens Features + Integration + Download",
    screenshot: "assets/fizens-live/page-integration-top.png",
    midScreenshot: "assets/fizens-live/page-download-mid.png",
    use: "ใช้ integration/download surfaces สำหรับ MT5 และ calculators",
    replace: "เปลี่ยน app integrations เป็น MT5, rebate/pip/margin tools",
    framerSteps: [
      "สร้าง /tools จาก /features แล้วดึง blocks จาก /integration และ /download",
      "ใส่ MT5 platform block",
      "Calculator ต้องมี disclaimer ไม่ใช่คำแนะนำการลงทุน",
    ],
    copyPoints: [
      ["Route", "/tools"],
      ["Page H1", "คำนวณก่อนเทรด ดีกว่าเสียใจทีหลัง"],
      ["Subhead", "MT5 + เครื่องคำนวณ Rebate, Pip, Margin — ตัวช่วยวางแผน ไม่ใช่คำแนะนำการลงทุน"],
      ["Disclaimer", "ใช้เพื่อการศึกษา ไม่ใช่คำแนะนำการลงทุน"],
    ],
  },
  {
    file: "partners.md",
    title: "Partners",
    sourcePage: "Fizens Contact + Pricing",
    screenshot: "assets/fizens-live/page-contact-top.png",
    midScreenshot: "assets/fizens-live/page-pricing-mid.png",
    use: "ใช้ contact form + pricing card pattern สำหรับ IB onboarding",
    replace: "เปลี่ยน lead form เป็น partner application และ commission estimator แบบ verify-gated",
    framerSteps: [
      "สร้าง /partners เป็น custom page",
      "Reuse pricing cards เป็น commission tiers เฉพาะถ้ามีตัวเลข verified",
      "ใช้ contact form เป็น IB application form",
    ],
    copyPoints: [
      ["Route", "/partners"],
      ["Page H1", "แนะนำเพื่อน รับคืนทุกการเทรด"],
      ["Subhead", "คอมมิชชันโปร่งใส จ่ายตรงเวลา ติดตามได้เรียลไทม์ — อัตราจริงรอยืนยัน"],
      ["Income caveat", "ตัวเลขเป็นการประมาณการ ไม่ใช่การการันตีรายได้"],
    ],
  },
  {
    file: "support.md",
    title: "Support",
    sourcePage: "Fizens Contact",
    screenshot: "assets/fizens-live/page-contact-top.png",
    midScreenshot: "assets/fizens-live/page-contact-mid.png",
    use: "ใช้ contact page structure สำหรับ LINE-first support",
    replace: "เปลี่ยน generic contact เป็น LINE, email, hours, office address, FAQ",
    framerSteps: [
      "Duplicate /contact เป็น /support",
      "LINE OA card ต้องมาก่อน form",
      "AI helper ต้อง label ว่าไม่ใช่คำแนะนำการลงทุน",
    ],
    copyPoints: [
      ["Route", "/support"],
      ["Page H1", "มีคำถาม? ทีมไทยพร้อมตอบ"],
      ["Subhead", "ทักทาง ทัก LINE OA ติดต่อ admin หรืออีเมล ไม่ต้องรอนาน"],
      ["LINE CTA", reusableCopyPoints.lineCta],
    ],
  },
  {
    file: "articles.md",
    title: "Articles",
    sourcePage: "Fizens Articles + Article Detail",
    screenshot: "assets/fizens-live/page-articles-top.png",
    midScreenshot: "assets/fizens-live/page-article-detail-mid.png",
    use: "ใช้ blog index + article detail layout",
    replace: "เปลี่ยน investment blog tone เป็น education/risk/MT5/rebate content",
    framerSteps: [
      "Duplicate /articles เป็น /articles",
      "ทำ CMS fields: category, title, cover, read time",
      "Article detail ต้องจบด้วย soft CTA ไม่ใช่ hard sell",
    ],
    copyPoints: [
      ["Route", "/articles"],
      ["Page H1", "เข้าใจก่อนเทรด เสี่ยงอย่างรู้ทัน"],
      ["Subhead", "คู่มือ MT5 · จัดการความเสี่ยง · ใช้ Rebate ให้คุ้ม"],
      ["Category chips", "ทั้งหมด · MT5 · ความเสี่ยง · Rebate · เริ่มต้น"],
    ],
  },
  {
    file: "legal-risk-disclosure.md",
    title: "Risk Disclosure",
    sourcePage: "Fizens Terms + Privacy",
    screenshot: "assets/fizens-live/page-terms-top.png",
    midScreenshot: "assets/fizens-live/page-privacy-mid.png",
    use: "ใช้ legal document typography และ footer structure",
    replace: "ไม่ใช้ marketing CTA ใน legal page; เน้น readability และ legal defensibility",
    framerSteps: [
      "Duplicate terms/privacy style เป็น /legal/risk-disclosure",
      "ใช้ single readable column + table of contents",
      "ปิด AI widget และ conversion pressure บน legal pages",
    ],
    copyPoints: [
      ["Route", "/legal/risk-disclosure"],
      ["Page H1", "การเปิดเผยความเสี่ยง (Risk Disclosure)"],
      ["Risk copy", reusableCopyPoints.riskWarning],
    ],
  },
];

const scrollStoryboard = [
  {
    image: "assets/fizens-live/home-scroll-01.png",
    title: "Hero appears first",
    note: "Nav stays visually stable while hero copy + phone mockup carry the first fold.",
    framer: "Use sticky nav, hero image parallax y 0 to -54, text fade-rise on load.",
  },
  {
    image: "assets/fizens-live/home-scroll-02.png",
    title: "Feature grid reveal",
    note: "Cards enter in a clean grid rhythm; this is good for markets/tools cards.",
    framer: "Apply stagger fade-rise, 0.08s delay per card, no fake live-price blinking.",
  },
  {
    image: "assets/fizens-live/home-scroll-03.png",
    title: "Large visual section",
    note: "Fizens uses big image/card areas to break up dense content.",
    framer: "Use this rhythm for MT5 / trust / support visuals with prepared Beston assets.",
  },
  {
    image: "assets/fizens-live/home-scroll-04.png",
    title: "Benefit/story blocks",
    note: "Good slot for Rebate USP, visible risk reminder, and regulator proof.",
    framer: "Keep motion subtle: opacity 0 to 1, y 32 to 0, duration .65s.",
  },
  {
    image: "assets/fizens-live/home-scroll-05.png",
    title: "Process + pricing zone",
    note: "This is where account comparison and onboarding steps should sit.",
    framer: "Convert SaaS pricing cards into account cards; every numeric field needs [verify].",
  },
  {
    image: "assets/fizens-live/home-scroll-06.png",
    title: "FAQ / articles zone",
    note: "Good for objections, education preview, and support routing.",
    framer: "Reuse accordion and article cards; keep copy education-first.",
  },
  {
    image: "assets/fizens-live/home-scroll-07.png",
    title: "CTA + footer close",
    note: "Template footer is usable structurally but public copy must become broker-safe.",
    framer: "Replace get-template CTA with open-account / LINE CTA + full risk block.",
  },
];

const guidedFlows = [
  {
    id: "hero",
    order: "01",
    fizensSlot: "HeroSection",
    bestonSlot: "TerminalHero",
    title: "เปลี่ยน Hero เป็นแคมเปญ Trade Smarter Not Harder",
    decision: "แทน hero finance-app เดิมด้วย founder-approved English hook แล้วใช้ Thai subhead อธิบาย MT5, Rebate $5/lot, No Minimum และทีมไทย 24/7 โดยแยก risk disclosure เป็น legal line",
    shotOffset: "0px",
    shotImage: "assets/fizens-live/home-scroll-01.png",
    arrowTop: "24%",
    arrowLeft: "46%",
    arrowText: "จุดนี้คือ Hero เดิมของ Fizens ให้แทนทั้ง block",
    asset: "assets/beston/hero-command-center.png",
    assetLabel: "Hero trading command center",
    copyPoints: [
      ["Eyebrow", "โบรกเกอร์ Forex/CFD เพื่อคนไทย"],
      ["H1", "Trade Smarter Not Harder"],
      ["Subhead", "เทรดบน MT5 พร้อม Rebate $5/lot, เริ่มได้แบบ No Minimum และมีทีมไทยคุยผ่าน LINE OA 24/7"],
      ["Risk disclosure", reusableCopyPoints.riskWarning],
      ["Proof line", "เทรดบน MT5 · Rebate $5/lot · รายละเอียดบัญชี [verify]"],
      ["Primary CTA", reusableCopyPoints.primaryCta],
      ["Secondary CTA", reusableCopyPoints.secondaryCta],
      ["Device label", "ตัวอย่างแดชบอร์ด — ไม่ใช่ข้อมูลจริง"],
    ],
    settings: [
      "Frame: max width 1200px, min height 760px desktop, padding 96 top / 72 bottom",
      "Layout: 2 columns, left 52%, right 48%, gap 48",
      "Image: place hero-command-center.png in right column, Fit=Contain, radius 32, shadow soft",
      "Effect: Appear opacity 0 to 1, y 48 to 0, scale .96 to 1, duration .9s, ease cubic-bezier(.16,1,.3,1)",
      "Scroll Transform: image y 0 to -54 over first 45vh, title opacity 1 to .55",
      "Mobile: stack text first, CTAs full width, image below, disable cursor tilt",
    ],
  },
  {
    id: "trust",
    order: "02",
    fizensSlot: "AboutSection / BenefitSection",
    bestonSlot: "WhyBestonBento",
    title: "เปลี่ยน app story ให้เป็น Why beston bento",
    decision: "ใช้ bento rhythm จาก reference แต่คุมเป็น Beston light-blue: Cash Back เป็น tile ใหญ่สุด แล้วตามด้วย No Minimum, Thai Support 24/7, Flexible Leverage, Fast Execution และ License & Registration",
    shotOffset: "-510px",
    shotImage: "assets/fizens-live/home-scroll-04.png",
    arrowTop: "31%",
    arrowLeft: "37%",
    arrowText: "ใช้ rhythm/card เดิม แต่เนื้อหาเดิมเรื่อง money app ต้องเปลี่ยน",
    asset: "assets/beston/trust-compliance-stack.png",
    assetLabel: "Trust compliance stack",
    copyPoints: [
      ["Section title", "ทำไมต้อง beston"],
      ["Hero tile", "Cash Back"],
      ["Hero tile body", "รับ Rebate $5/lot จากปริมาณการเทรดที่เข้าเงื่อนไข และจ่ายเป็นรอบทุกวันจันทร์"],
      ["Tile", "No Minimum"],
      ["Tile body", "เริ่มจาก Demo หรือบัญชีจริงได้โดยไม่มีขั้นต่ำ เลือกทุนตามระดับความเสี่ยงที่รับได้"],
      ["Tile", "Thai Support 24/7"],
      ["Tile body", "คุยกับทีมไทยผ่าน LINE OA เรื่องบัญชี เอกสาร MT5 และ Rebate ได้ตลอดเวลา"],
      ["Tile", "Flexible Leverage"],
      ["Tile body", "ปรับเลเวอเรจได้สูงสุด 1:1000 สำหรับคนที่เข้าใจ margin และความเสี่ยงแล้ว [verify]"],
      ["Tile", "Fast Execution"],
      ["Tile body", "ส่งคำสั่งบน MT5 ได้รวดเร็ว ลดจังหวะพลาดช่วงตลาดเคลื่อนไหวแรง [verify benchmark]"],
      ["Tile", "License & Registration"],
      ["Tile body", "มีเอกสาร FSCA/MSB และข้อมูลบริษัทให้ตรวจสอบก่อนตัดสินใจ; wording และเลขทะเบียนต้อง verify ก่อน publish"],
    ],
    settings: [
      "Frame: replace AboutSection copy, keep white/light-blue surfaces",
      "Bento: 6-column desktop grid, 1 hero tile, 2 wide tiles, 3-4 mid tiles, radius 24-32, border #E5E7EB, icon chip #EFF4FF",
      "Visuals: rebate meter + cash-back receipt, small balance card, LINE chat + 24/7 clock, leverage slider, order ticket, document/registry cards",
      "Motion: opacity/transform only, stagger 80-120ms, duration 500-900ms, ease cubic-bezier(.16,1,.3,1), reduced-motion fallback",
      "Effect: Cinematic Fade-Rise, opacity 0 to 1, y 32 to 0, duration .65s, stagger .08s",
      "Mobile: single column cards, image below text",
    ],
  },
  {
    id: "markets-tools",
    order: "03",
    fizensSlot: "FeaturesSection / AdditionSection",
    bestonSlot: "MarketsPreview + TradingToolsGrid",
    title: "เปลี่ยน feature cards เป็นตลาดและเครื่องมือ",
    decision: "เอา finance-app feature เดิมออก แล้วใส่ markets, MT5, calculators แบบ demo/verify-gated",
    shotOffset: "-905px",
    shotImage: "assets/fizens-live/home-scroll-02.png",
    arrowTop: "38%",
    arrowLeft: "38%",
    arrowText: "ตำแหน่ง feature card เดิมเหมาะกับ market/tool cards",
    asset: "assets/beston/markets-universe.png",
    assetLabel: "Markets universe",
    copyPoints: [
      ["Section title", "ทุกตลาดที่คุณอยากเทรด ครบในที่เดียว"],
      ["Market label", "ตัวอย่าง — ไม่ใช่ราคาจริง"],
      ["Card FX", "Forex"],
      ["Card metals", "โลหะมีค่า"],
      ["Card tools", "เครื่องคำนวณ Rebate / Pip / Margin"],
      ["Disclaimer", "ใช้เพื่อการศึกษา ไม่ใช่คำแนะนำการลงทุน"],
    ],
    settings: [
      "Frame: reuse FeaturesSection grid spacing",
      "Replace icons with market/tool icons, no live price numbers unless feed approved",
      "Image: use markets-universe.png for visual panel or section background card",
      "Ticker: if used, label every chip as sample data",
      "Effect: cards fade-rise only; avoid fake-live blinking price movement",
    ],
  },
  {
    id: "remove-risky",
    order: "04",
    fizensSlot: "StaticsSection / Testimonials",
    bestonSlot: "Remove or gate",
    title: "ลบ block ที่เสี่ยงต่อ compliance",
    decision: "ตัวเลข wealth growth, fake stats, star rating, testimonial ต้องไม่อยู่ใน POC จนกว่าจะมีข้อมูลจริง",
    shotOffset: "-2650px",
    shotImage: "assets/fizens-live/home-scroll-05.png",
    arrowTop: "44%",
    arrowLeft: "42%",
    arrowText: "Block ตัวเลข/ดาว/รีวิว ไม่ควรใช้ในเว็บโบรกเกอร์ก่อน verify",
    asset: "",
    assetLabel: "",
    copyPoints: [
      ["Placeholder", "รอยืนยันข้อมูลจากฝ่ายกำกับดูแลก่อนเผยแพร่"],
      ["Do not use", "ไม่มีการรับประกันผลตอบแทน"],
      ["Internal note", "Stats/Testimonial gated until verified source and consent exist"],
    ],
    settings: [
      "Hide or delete StaticsSection from Home",
      "Hide or delete testimonial carousel and star-rating components",
      "Do not replace with invented numbers",
      "If stakeholder insists on proof block, use regulator/platform/support proof with [verify] labels",
    ],
  },
  {
    id: "accounts",
    order: "05",
    fizensSlot: "PricingSection",
    bestonSlot: "AccountComparison",
    title: "เปลี่ยน pricing เป็นบัญชี 2 ทางเลือก",
    decision: "ใช้ layout pricing cards ได้ แต่ต้องลดเหลือ Standard และ Demo Account เท่านั้น เพื่อไม่ให้ AI สร้าง tier ที่ไม่มีจริง",
    shotOffset: "-3420px",
    shotImage: "assets/fizens-live/page-pricing-top.png",
    arrowTop: "36%",
    arrowLeft: "51%",
    arrowText: "ใช้ card layout เดิมได้ แต่ต้องเหลือแค่ Standard และ Demo Account",
    asset: "",
    assetLabel: "",
    copyPoints: [
      ["Section title", "เลือกบัญชีง่าย ๆ แค่ 2 แบบ"],
      ["Subhead", "Standard สำหรับเทรดจริง ส่วน Demo Account สำหรับลองระบบและฝึกใช้ MT5 ด้วยเงินจำลอง"],
      ["Tier 1", "Standard"],
      ["Tier 2", "Demo Account"],
      ["Standard body", "เทรดจริงบน MT5 พร้อม Rebate $5/lot"],
      ["Demo body", "ลองระบบ ฝึกวางออเดอร์ และทำความคุ้นเคยกับ MT5 ด้วยเงินจำลอง"],
      ["Standard CTA", "เปิดบัญชี"],
      ["Demo CTA", "ทัก LINE OA ติดต่อ admin"],
    ],
    settings: [
      "Duplicate PricingSection then rename to AccountComparison",
      "Use 2 cards only: Standard and Demo Account",
      "Replace price fields with purpose, funds type, spread/commission, leverage, rebate eligibility, platform",
      "Do not create Pro, ECN, VIP, Raw Spread, or any unconfirmed tier",
      "Every spread/commission/leverage field must include [verify]",
      "Demo Account must say เงินจำลอง and ไม่มี Rebate",
      "Mobile: cards stack; CTA sticky within each card",
    ],
  },
  {
    id: "support-cta",
    order: "06",
    fizensSlot: "FaqSection / CTA / Footer",
    bestonSlot: "FAQ + LineSupportCTA + LegalFooter",
    title: "จบหน้าด้วย CTA ที่ไม่เร่งขาย",
    decision: "ใช้ FAQ/Footer structure ของ Fizens ได้ แต่ CTA ต้องเป็นเปิดบัญชีหรือทัก LINE OA ติดต่อ admin ไม่ใช่ get template",
    shotOffset: "-4220px",
    shotImage: "assets/fizens-live/home-scroll-07.png",
    arrowTop: "52%",
    arrowLeft: "58%",
    arrowText: "ท้ายหน้าต้องเปลี่ยน CTA และ footer ให้เป็น broker-safe",
    asset: "assets/beston/line-ai-support.png",
    assetLabel: "LINE OA and AI support visual",
    copyPoints: [
      ["FAQ title", "คำถามที่พบบ่อย"],
      ["CTA title", "พร้อมเทรดบนความจริงแล้วหรือยัง?"],
      ["CTA subhead", "เปิดบัญชี หรือทักทีมไทยก่อนก็ได้ — เราไม่เร่งคุณ"],
      ["LINE CTA", reusableCopyPoints.lineCta],
      ["Footer risk", reusableCopyPoints.riskWarning],
      ["AI label", "ผู้ช่วยอัตโนมัติ — ไม่ใช่คำแนะนำการลงทุน"],
    ],
    settings: [
      "FAQ: reuse Fizens accordion component",
      "CTA: replace Get Template / App Store block with LineSupportCTA",
      "Image: use line-ai-support.png inside Support or CTA section",
      "Footer: remove Made by Kota/template links from public POC",
      "AI widget: visual-only; no trading advice; do not cover legal links on mobile",
    ],
  },
];

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function inlineMarkdown(value) {
  let output = escapeHtml(value);
  output = output.replace(/`([^`]+)`/g, "<code>$1</code>");
  output = output.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  output = output.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  return output;
}

function stripLeadingBoldLabel(value) {
  return value.replace(/^\*\*[^*]+:\*\*\s*/, "");
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/`/g, "")
    .replace(/[^a-z0-9ก-๙]+/gi, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 70);
}

function markdownToHtml(markdown) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const blocks = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) {
      i += 1;
      continue;
    }

    if (line.startsWith("```")) {
      const lang = line.slice(3).trim();
      const code = [];
      i += 1;
      while (i < lines.length && !lines[i].startsWith("```")) {
        code.push(lines[i]);
        i += 1;
      }
      i += 1;
      blocks.push(
        `<pre class="code-block"><span>${escapeHtml(lang || "text")}</span><code>${escapeHtml(code.join("\n"))}</code></pre>`,
      );
      continue;
    }

    if (/^\|.*\|$/.test(line.trim()) && i + 1 < lines.length && /^\|[\s:-]+\|/.test(lines[i + 1].trim())) {
      const tableLines = [];
      while (i < lines.length && /^\|.*\|$/.test(lines[i].trim())) {
        tableLines.push(lines[i].trim());
        i += 1;
      }
      const rows = tableLines.map((row) =>
        row
          .slice(1, -1)
          .split("|")
          .map((cell) => cell.trim()),
      );
      const head = rows[0] || [];
      const body = rows.slice(2);
      blocks.push(
        `<div class="table-wrap"><table><thead><tr>${head
          .map((cell) => `<th>${inlineMarkdown(cell)}</th>`)
          .join("")}</tr></thead><tbody>${body
          .map((row) => `<tr>${row.map((cell) => `<td>${inlineMarkdown(cell)}</td>`).join("")}</tr>`)
          .join("")}</tbody></table></div>`,
      );
      continue;
    }

    const heading = line.match(/^(#{1,4})\s+(.+)$/);
    if (heading) {
      const level = Math.min(heading[1].length + 1, 5);
      const text = heading[2].trim();
      blocks.push(`<h${level} id="${slugify(text)}">${inlineMarkdown(text)}</h${level}>`);
      i += 1;
      continue;
    }

    if (line.startsWith(">")) {
      const quote = [];
      while (i < lines.length && lines[i].startsWith(">")) {
        quote.push(lines[i].replace(/^>\s?/, ""));
        i += 1;
      }
      blocks.push(`<blockquote>${markdownToHtml(quote.join("\n"))}</blockquote>`);
      continue;
    }

    if (/^\s*[-*]\s+/.test(line)) {
      const items = [];
      while (i < lines.length && /^\s*[-*]\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\s*[-*]\s+/, ""));
        i += 1;
      }
      blocks.push(`<ul>${items.map((item) => `<li>${inlineMarkdown(item)}</li>`).join("")}</ul>`);
      continue;
    }

    if (/^\s*\d+\.\s+/.test(line)) {
      const items = [];
      while (i < lines.length && /^\s*\d+\.\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\s*\d+\.\s+/, ""));
        i += 1;
      }
      blocks.push(`<ol>${items.map((item) => `<li>${inlineMarkdown(item)}</li>`).join("")}</ol>`);
      continue;
    }

    const paragraph = [];
    while (
      i < lines.length &&
      lines[i].trim() &&
      !lines[i].startsWith("```") &&
      !/^(#{1,4})\s+/.test(lines[i]) &&
      !lines[i].startsWith(">") &&
      !/^\s*[-*]\s+/.test(lines[i]) &&
      !/^\s*\d+\.\s+/.test(lines[i]) &&
      !/^\|.*\|$/.test(lines[i].trim())
    ) {
      paragraph.push(lines[i]);
      i += 1;
    }
    blocks.push(`<p>${inlineMarkdown(paragraph.join(" "))}</p>`);
  }

  return blocks.join("\n");
}

function extractFrontMatter(markdown) {
  const firstHeading = markdown.match(/^#\s+(.+)$/m)?.[1]?.trim() || "Untitled";
  const route = firstHeading.match(/`([^`]+)`/)?.[1] || "";
  const title = firstHeading.replace(/^Wireframe\s+—\s+/i, "").replace(/\s+`[^`]+`/g, "").trim();
  const quoteLines = markdown
    .split("\n")
    .filter((line) => line.startsWith(">"))
    .map((line) => line.replace(/^>\s?/, "").trim());
  const conversionGoal =
    quoteLines.find((line) => line.startsWith("**เป้าหมายของหน้า:**")) ||
    quoteLines.find((line) => line.startsWith("**เป้าหมาย conversion:**")) ||
    quoteLines.find((line) => line.startsWith("**Conversion goal:**")) ||
    "";
  const primaryCta =
    quoteLines.find((line) => line.includes("**CTA หลัก:**")) ||
    quoteLines.find((line) => line.includes("**Primary CTA:**")) ||
    "";
  const immersion =
    quoteLines.find((line) => line.includes("**ระดับเอฟเฟกต์:**")) ||
    quoteLines.find((line) => line.includes("**ระดับ immersion:**")) ||
    quoteLines.find((line) => line.includes("**Immersion tier:**")) ||
    "";
  const components =
    quoteLines.find((line) => line.includes("**Component ที่ใช้:**")) ||
    quoteLines.find((line) => line.includes("**Components used:**")) ||
    "";

  return { firstHeading, title, route, conversionGoal, primaryCta, immersion, components };
}

function extractSections(markdown) {
  const matches = [...markdown.matchAll(/^###\s+(.+?)\n([\s\S]*?)(?=^###\s+|^##\s+|(?![\s\S]))/gm)];
  return matches.map((match, index) => {
    const title = match[1].trim();
    const body = match[2].trim();
    const raw = `### ${title}\n${body}`.trim();
    const component = title.replace(/^\d+\.\s*/, "").split("—")[0].trim();
    return {
      id: `${index + 1}`.padStart(2, "0"),
      title,
      component,
      body,
      raw,
      copyTokens: extractCopyTokens(raw),
    };
  });
}

function extractDocSection(markdown, heading) {
  const pattern = new RegExp(
    `^## ${heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\n([\\s\\S]*?)(?=^##\\s+|(?![\\s\\S]))`,
    "m",
  );
  return markdown.match(pattern)?.[1]?.trim() || "";
}

function extractCopyTokens(markdown) {
  const seen = new Set();
  const tokens = [];
  for (const match of markdown.matchAll(/`([^`\n]{2,140})`/g)) {
    const value = match[1].trim();
    if (
      seen.has(value) ||
      value.startsWith("/") ||
      value.includes("docs/") ||
      value.includes("http") ||
      value.includes("component") ||
      value.includes("src/")
    ) {
      continue;
    }
    seen.add(value);
    tokens.push(value);
  }
  return tokens.slice(0, 24);
}

function mapComponentToFizens(component, route) {
  const name = component.toLowerCase();
  if (name.includes("riskdisclosure")) return ["Workshop / Global top", "เพิ่มก่อน Fizens nav และต้องเห็นบนหน้าที่มี claim"];
  if (name.includes("navbar")) return ["Main Navbar", "ใช้โครง navbar ของ Fizens ได้ แต่เปลี่ยน label และ CTA ให้เป็นของ beston"];
  if (name.includes("hero") || name.includes("articlehero")) return ["HeroSection", "เปลี่ยน copy และ visual เป็น broker-safe content ของ beston"];
  if (name.includes("regulatory")) return ["AboutSection / trust strip", "ปรับเป็น proof strip และล็อกเลขใบอนุญาตไว้เป็น verify-gated"];
  if (name.includes("featuregrid")) return ["FeaturesSection", "ปรับ cards เป็น content ของ beston และเอา promise แบบ finance-app ออก"];
  if (name.includes("featuresplit")) return ["AboutSection / BenefitSection", "ปรับเป็น narrative/visual support ของ broker-safe story"];
  if (name.includes("marketsticker")) return ["FeaturesSection", "ปรับเป็น market preview และติด label ว่าเป็นตัวอย่างข้อมูล"];
  if (name.includes("accountcomparison")) return ["PricingSection", "แทน pricing/free-trial ด้วย account comparison"];
  if (name.includes("stepprocess")) return ["HowItWorkSection", "ใช้ stepper logic สำหรับ account/KYC/partner flow"];
  if (name.includes("calculator")) return ["AdditionSection / Workshop", "สร้าง estimator แบบ visual/utility พร้อม disclaimer"];
  if (name.includes("supportchannels")) return ["/contact page structure", "ปรับเป็น contact cards แบบ LINE-first"];
  if (name.includes("articlegrid")) return ["BlogSection", "ใช้ blog/card CMS pattern ต่อได้"];
  if (name.includes("faq")) return ["FaqSection", "ใช้ accordion เดิมและเพิ่ม FAQ ที่ compliance-safe"];
  if (name.includes("ctabanner")) return ["Workshop CTA / Fizens CTA", "เปลี่ยนเป็น CTA เปิดบัญชีหรือทัก LINE"];
  if (name.includes("footer")) return ["Footer", "custom legal footer พร้อม full risk block"];
  if (name.includes("aichat")) return ["Workshop floating layer", "ใช้เป็น visual-only และห้ามให้คำแนะนำการลงทุน"];
  if (name.includes("legalbody")) return ["Custom legal page", "ไม่มี marketing pressure และต้องอ่านเหมือนเอกสารจริง"];
  if (route.includes("legal")) return ["Custom legal page", "motion น้อยและต้องผ่าน legal review"];
  return ["Fizens section slot TBD", "เลือก layout ที่ใกล้ที่สุด และคุม copy ให้ verify-gated"];
}

function treatmentTag(component) {
  const lower = component.toLowerCase();
  if (lower.includes("stat") || lower.includes("testimonial")) return "remove-gated";
  if (lower.includes("calculator") || lower.includes("aichat")) return "visual-only";
  if (lower.includes("risk") || lower.includes("legal") || lower.includes("regulatory") || lower.includes("footer")) {
    return "needs-legal-review";
  }
  if (lower.includes("hero") || lower.includes("accountcomparison") || lower.includes("ctabanner")) return "replace";
  return "adapt";
}

function statusLabel(tag) {
  const labels = {
    adapt: "ปรับใช้",
    replace: "แทนที่",
    "visual-only": "ภาพ/ตัวอย่างเท่านั้น",
    "needs-legal-review": "ต้อง legal review",
    "remove-gated": "ปิดไว้ / gated",
  };
  return labels[tag] || tag;
}

function treatmentDisplayLabel(value) {
  const labels = {
    "Adapt heavily": "ปรับหนัก",
    Adapt: "ปรับใช้",
    Replace: "แทนที่",
    "Custom-build": "สร้างใหม่เฉพาะหน้า",
  };
  return labels[value] || value;
}

function copyButton(label, key, variant = "") {
  return `<button class="copy-btn ${variant}" type="button" data-copy-key="${escapeHtml(key)}">${escapeHtml(label)}</button>`;
}

function copyChip(label, key) {
  return `<button class="copy-chip" type="button" data-copy-key="${escapeHtml(key)}"><span>${escapeHtml(label)}</span></button>`;
}

function renderMcpExecutionRules(copyStore) {
  const prompt = [
    "ใช้ handoff นี้เป็น source of truth สำหรับ Framer MCP.",
    "ทำ Framer POC จาก Fizens template เท่านั้น ยังไม่ต้องแตะ Next.js production.",
    "CTA public ใช้เฉพาะ `เปิดบัญชี` และ `ทัก LINE OA ติดต่อ admin`.",
    "บัญชีมีแค่ `Standard` และ `Demo Account`; ห้ามสร้าง Pro, ECN, VIP, Raw Spread หรือ tier อื่น.",
    "ห้ามใช้ public deposit CTA, `Demo ฟรี` เป็น CTA กว้าง ๆ, fake stats, fake testimonials, star ratings, หรือข้อความรับประกันผลลัพธ์.",
    "ทุกตัวเลขที่ยังไม่ยืนยันให้ใส่ `[verify]` หรือ `รอยืนยันข้อมูลจากฝ่ายกำกับดูแลก่อนเผยแพร่`.",
    "ทำตามลำดับ: MCP rules -> Every page -> Scroll map -> Motion/Spline -> Guided build -> Wireframes.",
    "ถ้าต้องใช้ Spline ให้ใช้ asset ที่เป็น abstract fintech/trading เท่านั้น และทำ fallback เป็นภาพนิ่งสำหรับ mobile/reduced motion.",
  ].join("\n");
  copyStore["mcp:execution-prompt"] = prompt;

  return `
    <section class="handoff-card" id="mcp-execution-rules">
      <div class="card-head">
        <div>
          <div class="eyebrow">AI / Framer MCP rules</div>
          <h2>ใช้ handoff นี้สั่ง AI ไปทำใน Framer ได้ แต่ต้องล็อกกติกานี้ก่อน</h2>
          <p>ส่วนนี้คือ prompt guardrail สำหรับ agent ที่จะไปแก้ Fizens ผ่าน Framer MCP: ให้เดินตาม wireframe, ไม่แต่ง claims ใหม่, และไม่พา CTA หลุดกลับไปเป็นฝากเงินหรือ demo.</p>
        </div>
        ${copyButton("Copy MCP prompt", "mcp:execution-prompt", "ghost")}
      </div>
      <div class="markdown-body" style="padding: 28px;">
        ${markdownToHtml(`
### Execution order
1. อ่าน section นี้ก่อน แล้วค่อยทำ \`Every page\`
2. ทำทีละหน้าใน \`pageRoadmap\` ไม่ข้ามไป invent layout ใหม่
3. ใช้ \`Scroll map\` และ \`Motion/Spline\` เพื่อเพิ่ม wow layer หลัง copy/layout ถูกแล้ว
4. ก่อน publish ต้องตรวจ mobile, reduced motion, และ compliance copy

### Locked copy
| Slot | ใช้ข้อความนี้ |
|---|---|
| Primary CTA | \`${reusableCopyPoints.primaryCta}\` |
| Secondary CTA | \`${reusableCopyPoints.secondaryCta}\` |
| Risk warning | \`${reusableCopyPoints.riskWarning}\` |
| Verify placeholder | \`${reusableCopyPoints.verifyPlaceholder}\` |

### ห้ามทำ
- ห้ามใช้ CTA ฝากเงินเป็น public CTA
- ห้ามสร้าง account tier อื่นนอกจาก \`Standard\` และ \`Demo Account\`
- ห้ามใช้ \`ทดลองใช้ฟรี\`, \`Demo ฟรี\` เป็น CTA กว้าง ๆ, fake user count, fake review, fake star rating
- ห้าม claim กำไร, รายได้ IB, speed, license number, spread, leverage ถ้ายังไม่มีข้อมูลจริง
- ห้ามคัดลอก visual identity/content จาก reference clip; เอาเฉพาะจังหวะ motion
`)}
      </div>
    </section>`;
}

function renderMotionSplineHandoff(copyStore) {
  const splinePrompt = [
    "สร้าง Spline scene สำหรับ BestonFX hero/scroll:",
    "abstract futuristic trading command center, blue-white premium fintech, floating transparent device glass, soft volumetric light, small currency/market glyphs, no brand logos, no profit claim, no fake numbers, optimized for web, camera moves subtly on scroll.",
  ].join("\n");
  copyStore["motion:spline-prompt"] = splinePrompt;

  return `
    <section class="handoff-card" id="motion-spline-handoff">
      <div class="card-head">
        <div>
          <div class="eyebrow">Motion / Spline</div>
          <h2>ต้องทำ effect ไหน ต้อง gen รูปไหม หรือดึง Spline community ยังไง</h2>
          <p>คำตอบสั้น: ไม่ต้อง gen รูปทุกอัน. ใช้ Fizens layout เป็นฐาน, ใช้ Spline Pro เฉพาะ hero/section ที่ต้องมี depth, และ gen ภาพเฉพาะ fallback หรือ visual ที่ยังไม่มี asset จริง.</p>
        </div>
        ${copyButton("Copy Spline prompt", "motion:spline-prompt", "ghost")}
      </div>
      <div class="markdown-body" style="padding: 28px;">
        ${markdownToHtml(`
### Asset decision
| Effect | ต้องใช้รูป/3D ไหม | วิธีทำใน Framer |
|---|---|---|
| Hero cinematic depth | ใช้ Spline หรือ PNG fallback | ใส่ Spline embed/React component เป็น background layer, hero copy อยู่ด้านหน้า, scroll transform y/scale เบาๆ |
| Phone / dashboard mockup | ใช้ asset existing ก่อน ถ้าไม่พอค่อย gen รูป | ใช้ \`assets/beston/hero-command-center.png\`; ห้ามใส่เงินจริง/สถิติจริงถ้ายังไม่ verify |
| Scroll card reveal | ไม่ต้อง gen | ใช้ Framer Appear + Scroll Transform: opacity, y, scale, stagger |
| Floating coin / market glyph | Spline community ได้ถ้า license ok | เลือก generic abstract finance object, duplicate เข้า account, recolor เป็น blue/white |
| Section transition glow | ไม่ต้อง gen | ใช้ gradient/blur layer ใน Framer แบบบางมาก, อย่าให้กลายเป็น template SaaS ทั่วไป |
| Mobile / reduced motion fallback | ต้องมีภาพนิ่ง | Export Spline still หรือใช้ PNG hero asset แล้วปิด heavy 3D |

### Spline Pro workflow
1. ค้น Community ด้วยคำว่า \`futuristic dashboard\`, \`abstract fintech\`, \`glass device\`, \`trading interface\`
2. ใช้เฉพาะ scene ที่เป็น generic object/background ไม่ใช่ UI ของแบรนด์อื่น
3. Duplicate เข้า Spline account, เปลี่ยนสีเป็น BestonFX blue/white, ลบ logo/text/fake numbers
4. ทำ camera state: desktop wide, tablet, mobile crop
5. Export เป็น Spline public/embed URL และ export still PNG เป็น fallback
6. ใน Framer ใส่ Spline เฉพาะ hero หรือ 1-2 section สำคัญ อย่าใส่ทุก block

### Motion recipes
| Recipe | ค่าแนะนำ |
|---|---|
| Hero appear | opacity 0→1, y 48→0, scale .96→1, duration .9s, ease \`cubic-bezier(.16,1,.3,1)\` |
| Hero scroll | visual y 0→-54, scale 1→1.04, copy opacity 1→.65 ในช่วง 0-45vh |
| Trust cards | y 28→0, opacity 0→1, stagger .08s |
| Sticky proof bar | pin 1 viewport, blur background, risk text visible |
| Reduced motion | turn off parallax, keep simple fade only |

### Image generation rule
- Gen รูปเมื่อไม่มี asset ที่อธิบายสิ่งนั้นได้ เช่น hero command center fallback, abstract market universe, LINE support visual
- ไม่ต้อง gen สำหรับ card reveal, CTA, navbar, FAQ, account table
- Prompt ภาพต้องไม่มีกำไร, fake graph performance, fake user count, fake license number
`)}
      </div>
    </section>`;
}

function renderEveryPageRoadmap(copyStore) {
  return `
    <section class="page-roadmap" id="page-roadmap">
      <div class="card-head">
        <div>
          <div class="eyebrow">Start here</div>
          <h2>ทำทุกหน้าแบบนี้ ไม่ใช่แค่ Home</h2>
          <p>ดูทีละแถว: หน้า BestonFX ที่ต้องทำ → หน้า Fizens live ที่ใช้เป็นต้นแบบ → จุดที่ต้องแก้ใน Framer → ปุ่ม copy เฉพาะข้อความ/route ที่จะ paste</p>
        </div>
      </div>
      <div class="roadmap-list">
        ${pageRoadmap
          .map((item, index) => {
            const map = pageSourceMap[item.file] || {};
            const settingsKey = `roadmap:${item.file}:settings`;
            const liveKey = `roadmap:${item.file}:live`;
            copyStore[settingsKey] = item.framerSteps.join("\n");
            copyStore[liveKey] = map.live || "";
            return `
          <article class="roadmap-card" id="roadmap-${escapeHtml(item.file.replace(/\.md$/, ""))}">
            <div class="roadmap-media">
              <figure>
                <img src="${escapeHtml(item.screenshot)}" alt="${escapeHtml(item.sourcePage)} top screenshot" loading="lazy">
                <figcaption>Top · ${escapeHtml(item.sourcePage)}</figcaption>
              </figure>
              <figure>
                <img src="${escapeHtml(item.midScreenshot)}" alt="${escapeHtml(item.sourcePage)} scroll screenshot" loading="lazy">
                <figcaption>Scroll · mid page</figcaption>
              </figure>
            </div>
            <div class="roadmap-body">
              <div class="guide-kicker">Page ${String(index + 1).padStart(2, "0")} · ${escapeHtml(map.source || item.sourcePage)} → ${escapeHtml(map.target || "")}</div>
              <h3>${escapeHtml(item.title)}</h3>
              <div class="roadmap-source">
                <span>Fizens live:</span>
                <a href="${escapeHtml(map.live || "#")}" target="_blank" rel="noreferrer">${escapeHtml(map.live || "No live URL")}</a>
                ${copyChip("Copy URL", liveKey)}
              </div>
              <div class="do-replace-grid">
                <div><strong>ใช้จาก Fizens</strong><span>${escapeHtml(item.use)}</span></div>
                <div><strong>ต้องเปลี่ยนเป็น BestonFX</strong><span>${escapeHtml(item.replace)}</span></div>
              </div>
              <div class="framer-settings compact-settings">
                <div class="copy-row">
                  <span>ทำใน Framer ตามลำดับนี้</span>
                  ${copyButton("Copy steps", settingsKey, "ghost")}
                </div>
                <ol>${item.framerSteps.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}</ol>
              </div>
              <div class="copy-points roadmap-copy">
                <div class="copy-points-head">Copy ไป paste ทีละช่อง</div>
                ${item.copyPoints
                  .map(([label, value], pointIndex) => {
                    const key = `roadmap:${item.file}:copy:${pointIndex}`;
                    copyStore[key] = value;
                    return `<div class="copy-point"><span>${escapeHtml(label)}</span><code>${escapeHtml(value)}</code>${copyChip("Copy", key)}</div>`;
                  })
                  .join("")}
              </div>
            </div>
          </article>`;
          })
          .join("")}
      </div>
    </section>`;
}

function renderScrollStoryboard(copyStore) {
  return `
    <section class="scroll-storyboard" id="scroll-storyboard">
      <div class="card-head">
        <div>
          <div class="eyebrow">Scroll walkthrough</div>
          <h2>ลอง scroll จาก Fizens live แล้ว ต้องเอาจังหวะนี้ไปใช้</h2>
          <p>ชุดนี้จับจาก <code>https://fizens.framer.ai/</code> จริงระหว่างเลื่อนหน้า Home 7 จุด เพื่อดู rhythm ของ section, sticky nav, reveal, CTA/footer</p>
        </div>
      </div>
      <div class="scroll-frame-grid">
        ${scrollStoryboard
          .map((frame, index) => {
            const key = `scroll:${index}:framer`;
            copyStore[key] = frame.framer;
            return `
          <article class="scroll-frame">
            <img src="${escapeHtml(frame.image)}" alt="${escapeHtml(frame.title)}" loading="lazy">
            <div>
              <div class="guide-kicker">Scroll ${String(index + 1).padStart(2, "0")}</div>
              <h4>${escapeHtml(frame.title)}</h4>
              <p>${escapeHtml(frame.note)}</p>
              <div class="scroll-setting"><code>${escapeHtml(frame.framer)}</code>${copyChip("Copy setting", key)}</div>
            </div>
          </article>`;
          })
          .join("")}
      </div>
    </section>`;
}

function renderGuidedBuild(copyStore) {
  return `
    <section class="guide-intro" id="quick-guide">
      <div>
        <div class="eyebrow">อ่านแบบนี้ จะไม่งง</div>
        <h2>ถ้าจะเริ่มจาก Home ให้ทำ 6 ช่วงนี้</h2>
      </div>
      <div class="simple-steps">
        <div><strong>1</strong><span>เลือกหน้าในตารางด้านบนก่อน</span></div>
        <div><strong>2</strong><span>ดู screenshot Fizens จริงทางซ้าย</span></div>
        <div><strong>3</strong><span>กด copy เฉพาะ text/setting จุดนั้นไป paste ใน Framer</span></div>
        <div><strong>4</strong><span>ใช้ asset ที่เตรียมไว้ หรือสร้าง component ใน Workshop ตาม setting</span></div>
      </div>
    </section>

    <section class="guided-build" id="guided-build">
      <div class="card-head">
        <div>
          <div class="eyebrow">Visual Framer handoff</div>
          <h2>ทำตามลูกศรนี้ใน Framer</h2>
          <p>ทุก card ด้านล่างใช้ screenshot จริงจาก <code>fizens-home-full.png</code> แล้วชี้ว่าต้องเปลี่ยน block ไหนเป็นอะไร</p>
        </div>
      </div>
      <div class="guided-list">
        ${guidedFlows
          .map((flow) => {
            const settingKey = `guide:${flow.id}:settings`;
            copyStore[settingKey] = flow.settings.join("\n");
            return `
          <article class="guide-card" id="guide-${escapeHtml(flow.id)}">
            <div class="guide-shot" style="--shot-y:${escapeHtml(flow.shotOffset)}; --shot-image:url('${escapeHtml(flow.shotImage)}'); --arrow-top:${escapeHtml(flow.arrowTop)}; --arrow-left:${escapeHtml(flow.arrowLeft)};">
              <div class="fizens-screenshot"></div>
              <div class="arrow-label">${escapeHtml(flow.arrowText)}</div>
            </div>
            <div class="guide-body">
              <div class="guide-kicker">Step ${escapeHtml(flow.order)} · ${escapeHtml(flow.fizensSlot)} → ${escapeHtml(flow.bestonSlot)}</div>
              <h3>${escapeHtml(flow.title)}</h3>
              <p>${escapeHtml(flow.decision)}</p>
              <div class="copy-points">
                <div class="copy-points-head">Copy เฉพาะจุดที่จะ paste</div>
                ${flow.copyPoints
                  .map(([label, value], pointIndex) => {
                    const key = `guide:${flow.id}:copy:${pointIndex}`;
                    copyStore[key] = value;
                    return `<div class="copy-point"><span>${escapeHtml(label)}</span><code>${escapeHtml(value)}</code>${copyChip("Copy", key)}</div>`;
                  })
                  .join("")}
              </div>
              <div class="framer-settings">
                <div class="copy-row">
                  <span>Framer settings</span>
                  ${copyButton("Copy settings", settingKey, "ghost")}
                </div>
                <ol>${flow.settings.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ol>
              </div>
              ${
                flow.asset
                  ? `<div class="asset-preview">
                      <img src="${escapeHtml(flow.asset)}" alt="${escapeHtml(flow.assetLabel)}">
                      <div><strong>${escapeHtml(flow.assetLabel)}</strong><span>${escapeHtml(flow.asset)}</span></div>
                    </div>`
                  : `<div class="asset-preview no-asset"><strong>ไม่ต้องใช้ bitmap asset</strong><span>สร้างเป็น Framer cards/component จะคุม text และ responsive ดีกว่า</span></div>`
              }
            </div>
          </article>`;
          })
          .join("")}
      </div>
    </section>`;
}

function renderSectionCard(section, page, copyKey) {
  const [slot, instruction] = mapComponentToFizens(section.component, page.meta.route);
  const tag = treatmentTag(section.component);
  return `
    <article class="section-card" id="${escapeHtml(`${page.slug}-${slugify(section.title)}`)}">
      <div class="section-topline">
        <span class="section-no">${escapeHtml(section.id)}</span>
        <span class="tag tag-${escapeHtml(tag)}">${escapeHtml(statusLabel(tag))}</span>
        <span class="slot">${escapeHtml(slot)}</span>
      </div>
      <div class="section-grid">
        <div>
          <h4>${inlineMarkdown(section.title)}</h4>
          <p class="muted">${escapeHtml(instruction)}</p>
          <div class="mini-spec">
            <div><span>หน้าเป้าหมาย</span><strong>${escapeHtml(page.meta.route || page.slug)}</strong></div>
            <div><span>ไฟล์ต้นทาง</span><strong>${escapeHtml(page.file)}</strong></div>
            <div><span>วิธีใช้ Fizens</span><strong>${escapeHtml(statusLabel(tag))}</strong></div>
          </div>
        </div>
        <div class="section-copy">
          <div class="copy-row">
            <span>ข้อความที่ copy ไปใช้ใน section นี้</span>
          </div>
          <div class="token-copy-grid">
            ${
              section.copyTokens.length
                ? section.copyTokens
                    .map((token, tokenIndex) => {
                      const tokenKey = `${copyKey}:token:${tokenIndex}`;
                      return `<div class="token-item"><code>${escapeHtml(token)}</code>${copyChip("คัดลอก", tokenKey)}</div>`;
                    })
                    .join("")
                : `<p class="muted empty-copy">ไม่มี copy text แบบแยกจุดใน section นี้ ดูคำอธิบายด้านล่างแทน</p>`
            }
          </div>
          <div class="markdown-body compact">${markdownToHtml(section.body || "ยังไม่มีข้อความใน section นี้")}</div>
        </div>
      </div>
    </article>`;
}

function renderPagePanel(page, index) {
  const fizens = pageSourceMap[path.basename(page.file)] || { source: "TBD", treatment: "Adapt", target: page.meta.route };
  const ctaSummary = stripLeadingBoldLabel(page.meta.primaryCta || "ดูในไฟล์ต้นทาง");
  const immersionSummary = stripLeadingBoldLabel(page.meta.immersion || "ดูในไฟล์ต้นทาง");
  return `
    <section class="page-panel" id="page-${escapeHtml(page.slug)}" data-page="${escapeHtml(page.slug)}">
      <div class="page-head">
        <div>
          <div class="eyebrow">หน้า ${String(index + 1).padStart(2, "0")} · Fizens ${escapeHtml(fizens.source)} → Beston ${escapeHtml(fizens.target)}</div>
          <h3>${escapeHtml(page.meta.title)}</h3>
          <p>${inlineMarkdown(page.meta.conversionGoal || "เป้าหมายของหน้าอยู่ในไฟล์ Markdown ต้นทางแล้ว")}</p>
        </div>
        <div class="page-actions">
          <span class="pill">${escapeHtml(treatmentDisplayLabel(fizens.treatment))}</span>
        </div>
      </div>

      <div class="page-meta-grid">
        <div><span>เส้นทางหน้า</span><strong>${escapeHtml(page.meta.route || "-")}</strong></div>
        <div><span>Fizens ต้นทาง</span><strong>${escapeHtml(fizens.source)}</strong></div>
        <div><span>CTA</span><strong>${inlineMarkdown(ctaSummary)}</strong></div>
        <div><span>ระดับเอฟเฟกต์</span><strong>${inlineMarkdown(immersionSummary)}</strong></div>
      </div>

      <div class="fizens-path">
        <strong>วิธีวาง section จาก Fizens</strong>
        <span>ใช้แนวทาง ${escapeHtml(treatmentDisplayLabel(fizens.treatment))} จากหน้า template ${escapeHtml(fizens.source)} เพื่อทำหน้า ${escapeHtml(fizens.target)}. ให้ใช้การ์ดแต่ละใบด้านล่างเป็นเช็กลิสต์เวลาแก้ใน Framer.</span>
      </div>

      <div class="section-list">
        ${page.sections
          .map((section) => {
            const key = `section:${page.slug}:${section.id}`;
            return renderSectionCard(section, page, key);
          })
          .join("\n")}
      </div>
    </section>`;
}

function renderSitemapBoard(sitemapMd, copyStore) {
  const routes = [
    ["/", "Home", "Adapt Fizens /"],
    ["/why-bestonfx", "Why beston", "Adapt /about"],
    ["/markets", "Markets", "Adapt /features"],
    ["/accounts", "Accounts", "Replace /pricing"],
    ["/tools", "Tools", "Adapt features/integration"],
    ["/partners", "Partners", "Workshop/custom"],
    ["/support", "Support", "Adapt /contact"],
    ["/articles", "Articles", "Adapt blog"],
  ];

  return `
    <section class="handoff-card sitemap-panel" id="sitemap">
      <div class="card-head">
        <div>
          <div class="eyebrow">Information architecture</div>
          <h2>Sitemap</h2>
          <p>โครง route สำหรับสร้างหน้าใน Framer/Fizens ไม่ใช่ copy ทั้งหน้า ถ้าจะ paste ให้ใช้ copy chip ราย route ด้านล่าง</p>
        </div>
      </div>
      <div class="sitemap-board" aria-label="Sitemap visual">
        <div class="site-root">beston</div>
        <div class="route-grid">
          ${routes
            .map(([route, label, note], index) => {
              const routeKey = `sitemap:route:${index}`;
              const labelKey = `sitemap:label:${index}`;
              copyStore[routeKey] = route;
              copyStore[labelKey] = label;
              return `
            <div class="route-node">
              <strong>${escapeHtml(label)}</strong>
              <code>${escapeHtml(route)}</code>
              <span>${escapeHtml(note)}</span>
              <div class="route-copy">
                ${copyChip("Copy route", routeKey)}
                ${copyChip("Copy label", labelKey)}
              </div>
            </div>`;
            })
            .join("")}
        </div>
        <div class="utility-row">
          <div><strong>External conversion</strong><span>Register / Login / Demo on traders.bestonfx.com</span></div>
          <div><strong>Legal utility</strong><span>Risk disclosure / Terms / Privacy / Regulatory disclosures / 404</span></div>
        </div>
      </div>
      <details class="source-details">
        <summary>Read full sitemap markdown</summary>
        <div class="markdown-body">${markdownToHtml(sitemapMd)}</div>
      </details>
    </section>`;
}

function renderFizensMap(framerMapMd, copyKey, copyStore) {
  const pageMap = extractDocSection(framerMapMd, "Fizens web pages -> BestonFX mapping");
  const homeOrder = extractDocSection(framerMapMd, "Fizens HOME section order (actual from T003)");
  const proposed = extractDocSection(framerMapMd, "Proposed BestonFX HOME section map");
  const reuse = extractDocSection(framerMapMd, "Components to reuse / adapt / replace");
  const placementRows = [
    ["00", "Workshop", "Add", "RiskDisclosureBar", "เพิ่มก่อน nav ทุกหน้า เพราะ Fizens ไม่มี block เตือนความเสี่ยง"],
    ["01", "HeroSection", "Replace", "TerminalHero", "เปลี่ยน hero finance SaaS เป็น broker hero: MT5, Rebate $5/lot, No Minimum, ทีมไทย 24/7"],
    ["02", "AboutSection", "Replace / adapt", "TrustStackCards", "ใช้ rhythm เดิม แต่เล่า trust story แทน app story"],
    ["03", "FeaturesSection", "Adapt", "MarketsPreview", "เปลี่ยน feature cards เป็นตลาดที่เทรดได้ พร้อม label sample/verify"],
    ["04", "AdditionSection", "Adapt", "TradingToolsGrid", "ใช้พื้นที่ visual/tool block สำหรับ MT5, Rebate, Pip, Margin tools"],
    ["05", "BenefitSection", "Adapt", "Trust / DXEcosystemStrip", "ใช้เป็น story/proof block ได้ แต่ห้าม performance framing"],
    ["06", "StaticsSection", "Remove", "ปิดไว้ก่อน", "ลบหรือ hide จนกว่าจะมีตัวเลข verified ห้าม fake stats"],
    ["07", "HowItWorkSection", "Adapt", "StepProcess", "เปลี่ยนเป็น flow สมัคร, ทัก LINE OA, เตรียม MT5"],
    ["08", "PricingSection", "Replace", "AccountPathSelector", "เปลี่ยน pricing เป็น Standard + Demo Account เท่านั้น"],
    ["09", "BlogSection", "Adapt", "ArticlesPreview", "ใช้เป็น education/risk/MT5/rebate content preview"],
    ["10", "FaqSection", "Adapt", "FAQ", "ใช้ accordion เดิม เพิ่มคำถาม risk, account, LINE, IB"],
    ["11", "Footer", "Custom", "LegalFooter", "เปลี่ยนเป็น footer broker-safe พร้อม risk disclosure และ legal links"],
  ];
  const mapSummaryKey = `${copyKey}:placement-summary`;
  copyStore[mapSummaryKey] = placementRows
    .map(([order, source, action, target, note]) => `${order}. ${source} -> ${action} -> ${target}: ${note}`)
    .join("\n");
  return `
    <section class="handoff-card" id="fizens-map">
      <div class="card-head">
        <div>
          <div class="eyebrow">Fizens structure</div>
          <h2>Template placement map</h2>
          <p>อ่านแบบนี้: แถวบนคือ section เดิมใน Fizens Home; ตารางด้านล่างบอกว่าใน Framer ต้อง reuse, adapt, replace, remove หรือ custom build เป็น block อะไรของ BestonFX.</p>
        </div>
        ${copyButton("Copy placement summary", mapSummaryKey, "ghost")}
      </div>
      <div class="fizens-lane">
        ${["HeroSection", "AboutSection", "FeaturesSection", "AdditionSection", "BenefitSection", "StaticsSection", "HowItWorkSection", "PricingSection", "BlogSection", "FaqSection", "Footer"]
          .map((slot, index) => {
            const kind = slot === "StaticsSection" ? "remove-gated" : slot === "PricingSection" ? "replace" : "adapt";
            return `<div class="lane-item tag-${kind}"><span>${String(index + 1).padStart(2, "0")}</span><strong>${slot}</strong></div>`;
          })
          .join("")}
      </div>
      <div class="placement-guide">
        <div class="placement-note">
          <strong>ไม่ใช่ sitemap และไม่ใช่ copy ที่ต้อง paste</strong>
          <span>ส่วนนี้ใช้ตัดสินใจว่าเปิด Fizens template แล้วต้องจับ block ไหนไปทำอะไร ถ้าจะทำจริงให้เริ่มจากตาราง Every page ด้านบน แล้วกลับมาดู map นี้ตอนเลือก section.</span>
        </div>
        <div class="table-wrap placement-table">
          <table>
            <thead>
              <tr>
                <th>Order</th>
                <th>Fizens block</th>
                <th>Action</th>
                <th>BestonFX block</th>
                <th>ทำยังไงใน Framer</th>
              </tr>
            </thead>
            <tbody>
              ${placementRows
                .map(([order, source, action, target, note]) => {
                  const tag =
                    action === "Remove"
                      ? "remove-gated"
                      : action === "Replace" || action === "Custom" || action === "Add"
                        ? "replace"
                        : "adapt";
                  return `<tr>
                    <td><code>${escapeHtml(order)}</code></td>
                    <td><strong>${escapeHtml(source)}</strong></td>
                    <td><span class="tag tag-${escapeHtml(tag)}">${escapeHtml(action)}</span></td>
                    <td>${escapeHtml(target)}</td>
                    <td>${escapeHtml(note)}</td>
                  </tr>`;
                })
                .join("")}
            </tbody>
          </table>
        </div>
      </div>
      <div class="two-col-doc">
        <details class="source-details compact-source" open>
          <summary>Fizens pages → BestonFX pages</summary>
          <div class="markdown-body">${markdownToHtml(pageMap)}</div>
        </details>
        <details class="source-details compact-source">
          <summary>ดู source map เต็มจาก docs/framer-poc-map.md</summary>
          <div class="markdown-body">${markdownToHtml(`${homeOrder}\n\n${proposed}\n\n${reuse}`)}</div>
        </details>
      </div>
    </section>`;
}

function renderComponentsLibrary(componentsMd, copyStore) {
  const components = [...componentsMd.matchAll(/^##\s+\d+\.\s+(.+)$/gm)].map((match) =>
    match[1].replace(/`?\s*\[[^\]]+\]`?/g, "").trim(),
  );

  return `
    <section class="handoff-card" id="components">
      <div class="card-head">
        <div>
          <div class="eyebrow">Component source of truth</div>
          <h2>Component library</h2>
          <p>Reusable sections from <code>docs/wireframes/components.md</code>. ใช้ copy chip เฉพาะชื่อ component ที่ต้องสร้าง/rename ใน Framer</p>
        </div>
      </div>
      <div class="component-copy-grid">
        ${components
          .map((component, index) => {
            const key = `component:name:${index}`;
            copyStore[key] = component;
            return `<div class="token-item"><code>${escapeHtml(component)}</code>${copyChip("Copy name", key)}</div>`;
          })
          .join("")}
      </div>
      <details class="source-details" open>
        <summary>Open component library</summary>
        <div class="markdown-body">${markdownToHtml(componentsMd)}</div>
      </details>
    </section>`;
}

function renderRawSources(files) {
  return `
    <section class="handoff-card" id="sources">
      <div class="card-head">
        <div>
          <div class="eyebrow">Raw markdown</div>
          <h2>Source files</h2>
          <p>ส่วนนี้ไว้ตรวจ source เท่านั้น ปุ่ม copy หลักอยู่ในแต่ละ field/section ด้านบน</p>
        </div>
      </div>
      <div class="source-list">
        ${files
          .map(
            (file) => `
          <details class="source-details">
            <summary>${escapeHtml(file.name)}</summary>
            <div class="markdown-body compact">${markdownToHtml(file.content)}</div>
          </details>`,
          )
          .join("")}
      </div>
    </section>`;
}

function buildHtml({ sitemapMd, componentsMd, framerMapMd, pages, rawFiles, copyStore }) {
  const today = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Bangkok",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
  const mcpExecutionHtml = renderMcpExecutionRules(copyStore);
  const pageRoadmapHtml = renderEveryPageRoadmap(copyStore);
  const scrollStoryboardHtml = renderScrollStoryboard(copyStore);
  const motionSplineHtml = renderMotionSplineHandoff(copyStore);
  const guidedBuildHtml = renderGuidedBuild(copyStore);
  const sitemapHtml = renderSitemapBoard(sitemapMd, copyStore);
  const componentsHtml = renderComponentsLibrary(componentsMd, copyStore);
  const copyJson = JSON.stringify(copyStore).replace(/<\//g, "<\\/");
  return `<!doctype html>
<html lang="th">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>BestonFX Fizens Wireframe Handoff</title>
  <style>
    :root {
      color-scheme: light;
      --blue: #0040c1;
      --blue-2: #2970ff;
      --blue-soft: #edf4ff;
      --line: #06c755;
      --ink: #0c1322;
      --muted: #64748b;
      --paper: #ffffff;
      --soft: #f7faff;
      --border: #dbe6f7;
      --amber: #fff7ed;
      --amber-ink: #9a5b00;
      --green-soft: #ecfdf3;
      --green-ink: #157347;
      --red-soft: #fff1f2;
      --red-ink: #be123c;
      --shadow: 0 28px 90px rgba(15, 35, 80, 0.12);
      --shadow-soft: 0 18px 60px rgba(15, 35, 80, 0.08);
      --focus: 0 0 0 4px rgba(41, 112, 255, 0.22);
      --font: Prompt, "Noto Sans Thai", "IBM Plex Sans Thai", "Helvetica Neue", Arial, sans-serif;
      --mono: "SFMono-Regular", "JetBrains Mono", ui-monospace, Menlo, monospace;
    }

    * { box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    :target { scroll-margin-top: 96px; }
    body {
      margin: 0;
      font-family: var(--font);
      color: var(--ink);
      background:
        linear-gradient(rgba(148, 163, 184, 0.12) 1px, transparent 1px),
        linear-gradient(90deg, rgba(148, 163, 184, 0.12) 1px, transparent 1px),
        radial-gradient(circle at 16% 0%, rgba(0, 64, 193, 0.14), transparent 28%),
        #f6f9ff;
      background-size: 64px 64px, 64px 64px, auto, auto;
      font-size: 16px;
      line-height: 1.65;
      overflow-x: clip;
    }

    button, input, summary { font: inherit; }
    button, a, summary {
      -webkit-tap-highlight-color: rgba(41, 112, 255, 0.16);
      touch-action: manipulation;
    }
    a { color: var(--blue); text-decoration: none; }
    a:hover { text-decoration: underline; text-underline-offset: 3px; }
    a:focus-visible,
    button:focus-visible,
    summary:focus-visible {
      outline: 3px solid rgba(41, 112, 255, 0.72);
      outline-offset: 3px;
      box-shadow: var(--focus);
    }
    img { max-width: 100%; }
    code {
      font-family: var(--mono);
      font-size: 0.92em;
      color: var(--blue);
      background: var(--blue-soft);
      padding: 0.1rem 0.35rem;
      border-radius: 7px;
      overflow-wrap: anywhere;
    }

    .shell {
      width: min(1500px, calc(100vw - clamp(20px, 4vw, 56px)));
      margin: 0 auto;
    }

    .hero {
      min-height: 58vh;
      display: grid;
      grid-template-columns: 1.15fr 0.85fr;
      gap: 48px;
      align-items: center;
      padding: 72px 0 46px;
    }

    .brand {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 34px;
      font-size: 32px;
      font-weight: 800;
      letter-spacing: 0;
    }

    .mark {
      display: grid;
      place-items: center;
      width: 48px;
      height: 48px;
      border-radius: 15px;
      background: linear-gradient(145deg, #0065ff, #0034a6);
      color: #fff;
      box-shadow: 0 16px 40px rgba(0, 64, 193, 0.28);
    }

    .eyebrow {
      color: var(--blue);
      font-family: var(--mono);
      font-size: 12px;
      font-weight: 800;
      letter-spacing: 0;
      text-transform: uppercase;
    }

    h1 {
      max-width: 880px;
      margin: 14px 0 18px;
      font-size: clamp(44px, 7vw, 96px);
      line-height: 0.92;
      letter-spacing: 0;
    }

    h2 {
      margin: 0;
      font-size: clamp(30px, 4vw, 56px);
      line-height: 1;
      letter-spacing: 0;
    }

    h3 {
      margin: 0;
      font-size: clamp(24px, 3vw, 40px);
      line-height: 1.05;
      letter-spacing: 0;
    }

    h4 {
      margin: 0 0 10px;
      font-size: 22px;
      line-height: 1.2;
      letter-spacing: 0;
    }

    .lead {
      max-width: 760px;
      color: #42526b;
      font-size: 18px;
    }

    .hero-actions, .page-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      align-items: center;
      margin-top: 26px;
    }

    .copy-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 44px;
      border: 1px solid var(--blue);
      border-radius: 999px;
      padding: 0 18px;
      background: var(--blue);
      color: #fff;
      cursor: pointer;
      font-size: 12px;
      font-weight: 800;
      line-height: 1.2;
      max-width: 100%;
      text-align: center;
      text-decoration: none;
      transition: transform .24s cubic-bezier(.16,1,.3,1), box-shadow .24s cubic-bezier(.16,1,.3,1), background .24s;
      box-shadow: 0 12px 28px rgba(0, 64, 193, 0.2);
    }

    .copy-btn:hover {
      transform: translateY(-1px);
      box-shadow: 0 18px 36px rgba(0, 64, 193, 0.25);
      text-decoration: none;
    }
    .copy-btn:active { transform: translateY(1px) scale(.98); }
    .copy-btn.ghost {
      background: #fff;
      color: var(--blue);
      box-shadow: none;
    }
    .copy-btn.tiny {
      min-height: 36px;
      padding: 0 12px;
      font-size: 11px;
    }

    .hero-card {
      border: 1px solid rgba(219, 230, 247, 0.9);
      border-radius: 24px;
      background: rgba(255,255,255,0.78);
      backdrop-filter: blur(18px);
      padding: 28px;
      box-shadow: var(--shadow);
    }

    .metric-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 14px;
      margin-top: 20px;
    }

    .metric {
      min-height: 112px;
      border: 1px solid var(--border);
      border-radius: 18px;
      background: #fff;
      padding: 18px;
    }

    .metric strong {
      display: block;
      font-size: 28px;
      line-height: 1;
      letter-spacing: 0;
    }

    .metric span {
      display: block;
      margin-top: 10px;
      color: var(--muted);
      font-size: 13px;
    }

    .sticky-nav {
      position: sticky;
      top: 0;
      z-index: 5;
      border-block: 1px solid rgba(219, 230, 247, 0.88);
      background: rgba(255, 255, 255, 0.88);
      backdrop-filter: blur(18px);
    }

    .nav-inner {
      display: flex;
      gap: 8px;
      overflow-x: auto;
      overscroll-behavior-inline: contain;
      padding: 12px 0;
      scrollbar-width: thin;
      -webkit-overflow-scrolling: touch;
    }

    .nav-inner a {
      flex: 0 0 auto;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 44px;
      border: 1px solid var(--border);
      border-radius: 999px;
      padding: 0 15px;
      background: #fff;
      color: #233250;
      font-size: 12px;
      font-weight: 800;
      white-space: nowrap;
      transition: background .2s ease, border-color .2s ease, color .2s ease;
    }

    .nav-inner a:hover {
      border-color: #a9c2ff;
      background: var(--blue-soft);
      color: var(--blue);
      text-decoration: none;
    }

    .section-space {
      padding: 48px 0;
    }

    .page-roadmap,
    .scroll-storyboard {
      border: 1px solid var(--border);
      border-radius: 24px;
      background: rgba(255, 255, 255, 0.92);
      box-shadow: var(--shadow-soft);
      overflow: hidden;
      margin-bottom: 28px;
    }

    .roadmap-list {
      display: grid;
      gap: 16px;
      padding: 22px;
    }

    .roadmap-card {
      display: grid;
      grid-template-columns: minmax(360px, 0.9fr) minmax(0, 1.1fr);
      gap: 18px;
      align-items: start;
      border: 1px solid var(--border);
      border-radius: 20px;
      background: #fff;
      padding: 16px;
    }

    .roadmap-media {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      min-width: 0;
    }

    .roadmap-media figure {
      margin: 0;
      min-width: 0;
    }

    .roadmap-media img,
    .scroll-frame img {
      width: 100%;
      display: block;
      aspect-ratio: 4 / 3;
      object-fit: cover;
      object-position: top center;
      border: 1px solid var(--border);
      border-radius: 16px;
      background: #f3f7ff;
    }

    .roadmap-media figcaption {
      margin-top: 7px;
      color: var(--muted);
      font-family: var(--mono);
      font-size: 11px;
    }

    .roadmap-body {
      min-width: 0;
    }

    .roadmap-source {
      display: grid;
      grid-template-columns: auto minmax(0, 1fr) auto;
      gap: 9px;
      align-items: center;
      margin-top: 12px;
      border: 1px solid var(--border);
      border-radius: 14px;
      background: #fbfdff;
      padding: 10px 12px;
      font-size: 12px;
    }

    .roadmap-source span {
      color: var(--muted);
      font-family: var(--mono);
      font-weight: 900;
    }

    .roadmap-source a {
      min-width: 0;
      overflow-wrap: anywhere;
      font-family: var(--mono);
      font-size: 12px;
      font-weight: 800;
    }

    .do-replace-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      margin-top: 14px;
    }

    .do-replace-grid div {
      border: 1px solid var(--border);
      border-radius: 14px;
      background: #fbfdff;
      padding: 12px;
    }

    .do-replace-grid strong,
    .do-replace-grid span {
      display: block;
    }

    .do-replace-grid strong {
      color: #14233f;
      font-size: 13px;
    }

    .do-replace-grid span {
      margin-top: 4px;
      color: var(--muted);
      font-size: 13px;
      line-height: 1.5;
    }

    .compact-settings ol {
      padding-bottom: 14px;
    }

    .roadmap-copy {
      margin-top: 14px;
    }

    .scroll-frame-grid {
      display: grid;
      grid-template-columns: repeat(7, minmax(320px, 1fr));
      gap: 14px;
      padding: 22px 22px 26px;
      overflow-x: auto;
      scroll-snap-type: x proximity;
      overscroll-behavior-inline: contain;
      scrollbar-width: thin;
      -webkit-overflow-scrolling: touch;
    }

    .scroll-frame {
      scroll-snap-align: start;
      display: grid;
      gap: 12px;
      border: 1px solid var(--border);
      border-radius: 18px;
      background: #fff;
      padding: 12px;
      min-width: 0;
    }

    .scroll-frame h4 {
      margin-bottom: 6px;
    }

    .scroll-frame p {
      margin: 0 0 10px;
      color: var(--muted);
      font-size: 13px;
    }

    .scroll-setting {
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto;
      gap: 8px;
      align-items: center;
    }

    .scroll-setting code {
      display: block;
      color: #14233f;
      background: #fbfdff;
      border: 1px solid var(--border);
      overflow-wrap: anywhere;
    }

    .guide-intro {
      display: grid;
      grid-template-columns: 0.72fr 1.28fr;
      gap: 22px;
      margin-bottom: 28px;
      border: 1px solid var(--border);
      border-radius: 24px;
      background: rgba(255, 255, 255, 0.92);
      box-shadow: 0 18px 60px rgba(15, 35, 80, 0.08);
      padding: 28px;
    }

    .simple-steps {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 10px;
    }

    .simple-steps div {
      display: grid;
      grid-template-columns: 34px 1fr;
      gap: 10px;
      align-items: start;
      border: 1px solid var(--border);
      border-radius: 16px;
      background: #fbfdff;
      padding: 12px;
      min-width: 0;
    }

    .simple-steps strong {
      display: grid;
      place-items: center;
      width: 34px;
      height: 34px;
      border-radius: 999px;
      background: var(--blue);
      color: #fff;
      font-family: var(--mono);
      font-size: 13px;
    }

    .simple-steps span {
      color: #233250;
      font-size: 13px;
      line-height: 1.45;
    }

    .guided-build {
      margin-bottom: 34px;
    }

    .guided-list {
      display: grid;
      gap: 20px;
      margin-top: 18px;
    }

    .guide-card {
      display: grid;
      grid-template-columns: minmax(320px, 0.88fr) minmax(0, 1.12fr);
      border: 1px solid var(--border);
      border-radius: 24px;
      background: #fff;
      box-shadow: 0 18px 60px rgba(15, 35, 80, 0.08);
      overflow: hidden;
    }

    .guide-shot {
      position: relative;
      min-height: 560px;
      overflow: hidden;
      background:
        linear-gradient(rgba(148, 163, 184, 0.16) 1px, transparent 1px),
        linear-gradient(90deg, rgba(148, 163, 184, 0.16) 1px, transparent 1px),
        #eaf1ff;
      background-size: 38px 38px;
    }

    .fizens-screenshot {
      position: absolute;
      inset: 18px;
      border: 1px solid rgba(169, 194, 255, 0.75);
      border-radius: 18px;
      background-image: var(--shot-image);
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center top;
      box-shadow: 0 24px 70px rgba(15, 35, 80, 0.2);
    }

    .arrow-label {
      position: absolute;
      top: var(--arrow-top);
      left: var(--arrow-left);
      max-width: 230px;
      transform: translate(-8px, -50%);
      border-radius: 14px;
      background: var(--blue);
      color: #fff;
      padding: 10px 12px;
      font-size: 12px;
      font-weight: 800;
      line-height: 1.35;
      overflow-wrap: anywhere;
      box-shadow: 0 16px 36px rgba(0, 64, 193, 0.28);
    }

    .arrow-label::before {
      content: "";
      position: absolute;
      right: 100%;
      top: 50%;
      width: 84px;
      height: 2px;
      transform: translateY(-50%);
      background: var(--blue);
      box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.65);
    }

    .arrow-label::after {
      content: "";
      position: absolute;
      right: calc(100% + 78px);
      top: 50%;
      width: 10px;
      height: 10px;
      transform: translateY(-50%) rotate(45deg);
      border-left: 2px solid var(--blue);
      border-bottom: 2px solid var(--blue);
      background: transparent;
    }

    .guide-body {
      padding: 24px;
    }

    .guide-kicker {
      color: var(--blue);
      font-family: var(--mono);
      font-size: 12px;
      font-weight: 900;
      margin-bottom: 8px;
    }

    .guide-body p {
      margin: 10px 0 0;
      color: var(--muted);
    }

    .copy-points {
      margin-top: 18px;
      border: 1px solid var(--border);
      border-radius: 16px;
      background: #fff;
      overflow: hidden;
    }

    .copy-points-head {
      border-bottom: 1px solid var(--border);
      background: #f3f7ff;
      padding: 11px 14px;
      color: #233250;
      font-family: var(--mono);
      font-size: 12px;
      font-weight: 900;
    }

    .copy-point {
      display: grid;
      grid-template-columns: 148px minmax(0, 1fr) auto;
      gap: 10px;
      align-items: center;
      border-bottom: 1px solid var(--border);
      padding: 12px 14px;
    }

    .copy-point:last-child {
      border-bottom: 0;
    }

    .copy-point > span {
      color: #233250;
      font-size: 13px;
      font-weight: 800;
    }

    .copy-point code,
    .token-item code {
      display: block;
      min-width: 0;
      overflow-wrap: anywhere;
      border: 1px solid var(--border);
      background: #fff;
      color: #14233f;
      line-height: 1.5;
      max-width: 100%;
    }

    .copy-chip {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 36px;
      border: 1px solid #a9c2ff;
      border-radius: 999px;
      background: var(--blue-soft);
      color: var(--blue);
      cursor: pointer;
      padding: 0 12px;
      font-size: 11px;
      font-weight: 900;
      line-height: 1.2;
      text-align: center;
      transition: transform .2s cubic-bezier(.16,1,.3,1), background .2s;
    }

    .copy-chip:hover {
      background: #fff;
      transform: translateY(-1px);
    }

    .copy-chip:active {
      transform: translateY(1px) scale(.98);
    }

    .framer-settings {
      margin-top: 16px;
      border: 1px solid var(--border);
      border-radius: 16px;
      background: #fbfdff;
      overflow: hidden;
    }

    .framer-settings ol {
      margin: 0;
      padding: 14px 18px 18px 36px;
      color: #233250;
      font-size: 13px;
    }

    .framer-settings li {
      margin: 6px 0;
    }

    .asset-preview {
      display: grid;
      grid-template-columns: 96px minmax(0, 1fr);
      gap: 12px;
      align-items: center;
      margin-top: 16px;
      border: 1px solid var(--border);
      border-radius: 16px;
      background: #fff;
      padding: 12px;
    }

    .asset-preview img {
      width: 96px;
      aspect-ratio: 4 / 3;
      border-radius: 12px;
      object-fit: cover;
      border: 1px solid var(--border);
    }

    .asset-preview strong,
    .asset-preview span {
      display: block;
      min-width: 0;
    }

    .asset-preview span {
      margin-top: 2px;
      color: var(--muted);
      font-family: var(--mono);
      font-size: 11px;
      overflow-wrap: anywhere;
    }

    .asset-preview.no-asset {
      grid-template-columns: 1fr;
      background: var(--amber);
      color: var(--amber-ink);
    }

    .token-copy-grid,
    .component-copy-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 8px;
      padding: 12px;
      border-bottom: 1px solid var(--border);
    }

    .component-copy-grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      padding: 18px 22px;
      background: #fbfdff;
    }

    .token-item {
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto;
      gap: 8px;
      align-items: center;
      min-width: 0;
    }

    .empty-copy {
      padding: 12px;
      border-bottom: 1px solid var(--border);
    }

    .route-copy {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 12px;
    }

    .handoff-card, .page-panel {
      border: 1px solid var(--border);
      border-radius: 24px;
      background: rgba(255, 255, 255, 0.92);
      box-shadow: var(--shadow-soft);
      overflow: hidden;
      margin-bottom: 28px;
    }

    .card-head, .page-head {
      display: flex;
      justify-content: space-between;
      gap: 24px;
      padding: 28px;
      border-bottom: 1px solid var(--border);
      background: linear-gradient(90deg, #fff, #f5f9ff);
    }

    .card-head p, .page-head p {
      max-width: 840px;
      margin: 10px 0 0;
      color: var(--muted);
    }

    .pill, .tag {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 28px;
      border-radius: 999px;
      padding: 0 10px;
      font-family: var(--mono);
      font-size: 11px;
      font-weight: 800;
      line-height: 1.2;
      white-space: nowrap;
    }

    .pill {
      border: 1px solid var(--border);
      background: #fff;
      color: var(--blue);
    }

    .tag-adapt { background: var(--blue-soft); color: var(--blue); }
    .tag-replace { background: #eef2ff; color: #3730a3; }
    .tag-visual-only { background: #f0fdf4; color: #15803d; }
    .tag-needs-legal-review { background: var(--amber); color: var(--amber-ink); }
    .tag-remove-gated { background: var(--red-soft); color: var(--red-ink); }

    .fizens-lane {
      display: grid;
      grid-template-columns: repeat(11, 144px);
      gap: 10px;
      padding: 24px 28px 10px;
      overflow-x: auto;
      overscroll-behavior-inline: contain;
      scrollbar-width: thin;
      -webkit-overflow-scrolling: touch;
    }

    .lane-item {
      min-height: 96px;
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 14px;
      background: #fff;
    }

    .lane-item span {
      display: block;
      margin-bottom: 10px;
      font-family: var(--mono);
      color: var(--muted);
      font-size: 11px;
    }

    .lane-item strong {
      display: block;
      font-size: 12px;
      line-height: 1.2;
      white-space: nowrap;
    }

    .placement-guide {
      display: grid;
      gap: 16px;
      padding: 18px 28px 4px;
    }

    .placement-note {
      display: grid;
      grid-template-columns: 260px minmax(0, 1fr);
      gap: 18px;
      align-items: start;
      border: 1px solid #bfd0ff;
      border-radius: 18px;
      background: linear-gradient(135deg, #f5f9ff, #fff);
      padding: 18px;
      color: #233250;
    }

    .placement-note strong,
    .placement-note span {
      display: block;
      min-width: 0;
    }

    .placement-note strong {
      color: var(--blue);
      font-size: 16px;
      line-height: 1.3;
    }

    .placement-note span {
      color: var(--muted);
      line-height: 1.55;
    }

    .placement-table table {
      min-width: 980px;
    }

    .placement-table td:nth-child(5) {
      color: #42526b;
    }

    .compact-source {
      border: 1px solid var(--border);
      border-radius: 16px;
      background: #fff;
      overflow: hidden;
    }

    .two-col-doc {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
      gap: 18px;
      padding: 18px 28px 28px;
    }

    .sitemap-board {
      padding: 28px;
      background:
        linear-gradient(rgba(148, 163, 184, 0.12) 1px, transparent 1px),
        linear-gradient(90deg, rgba(148, 163, 184, 0.12) 1px, transparent 1px),
        #fff;
      background-size: 46px 46px;
    }

    .site-root {
      width: min(320px, 100%);
      margin: 0 auto 28px;
      border-radius: 18px;
      background: linear-gradient(145deg, #0065ff, #0034a6);
      color: #fff;
      padding: 24px;
      text-align: center;
      font-size: 30px;
      font-weight: 900;
      letter-spacing: 0;
      box-shadow: 0 22px 52px rgba(0, 64, 193, 0.22);
    }

    .route-grid {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 14px;
    }

    .route-node {
      min-height: 132px;
      border: 1px solid #a9c2ff;
      border-radius: 14px;
      background: rgba(255, 255, 255, 0.92);
      padding: 18px;
      box-shadow: 0 14px 32px rgba(0, 64, 193, 0.08);
    }

    .route-node strong { display: block; font-size: 18px; }
    .route-node code { display: inline-block; margin: 7px 0; }
    .route-node span { display: block; color: var(--muted); font-size: 12px; }

    .utility-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 14px;
      margin-top: 18px;
    }

    .utility-row div {
      border: 1px dashed #a9c2ff;
      border-radius: 14px;
      background: rgba(237, 244, 255, 0.62);
      padding: 18px;
    }

    .utility-row strong, .utility-row span { display: block; }
    .utility-row span { margin-top: 4px; color: var(--muted); }

    .page-meta-grid {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 1px;
      background: var(--border);
      border-bottom: 1px solid var(--border);
    }

    .page-meta-grid div {
      background: #fbfdff;
      padding: 18px 22px;
      min-width: 0;
    }

    .page-meta-grid span, .mini-spec span {
      display: block;
      color: var(--muted);
      font-family: var(--mono);
      font-size: 11px;
      margin-bottom: 6px;
    }

    .page-meta-grid strong, .mini-spec strong {
      display: block;
      color: #14233f;
      font-size: 13px;
      line-height: 1.4;
    }

    .fizens-path {
      display: grid;
      grid-template-columns: 220px 1fr;
      gap: 18px;
      margin: 24px 28px 0;
      border: 1px solid #bfd0ff;
      border-radius: 18px;
      background: var(--blue-soft);
      padding: 18px;
      color: #233250;
    }

    .fizens-path strong {
      color: var(--blue);
      font-size: 18px;
      letter-spacing: 0;
    }

    .section-list {
      display: grid;
      gap: 16px;
      padding: 24px 28px 28px;
    }

    .section-card {
      border: 1px solid var(--border);
      border-radius: 18px;
      background: #fff;
      overflow: hidden;
    }

    .section-topline {
      display: flex;
      align-items: center;
      gap: 10px;
      border-bottom: 1px solid var(--border);
      padding: 12px 16px;
      background: #fbfdff;
    }

    .section-no {
      display: grid;
      place-items: center;
      width: 30px;
      height: 30px;
      border-radius: 999px;
      background: var(--blue);
      color: #fff;
      font-family: var(--mono);
      font-size: 12px;
      font-weight: 900;
    }

    .slot {
      margin-left: auto;
      color: var(--muted);
      font-family: var(--mono);
      font-size: 12px;
    }

    .section-grid {
      display: grid;
      grid-template-columns: 0.9fr 1.1fr;
      gap: 20px;
      padding: 20px;
    }

    .muted {
      color: var(--muted);
      margin: 0;
    }

    .mini-spec {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 10px;
      margin-top: 18px;
    }

    .mini-spec div {
      border: 1px solid var(--border);
      border-radius: 13px;
      padding: 12px;
      background: #fbfdff;
      min-width: 0;
    }

    .section-copy {
      border: 1px solid var(--border);
      border-radius: 15px;
      background: #fbfdff;
      overflow: hidden;
    }

    .copy-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      border-bottom: 1px solid var(--border);
      padding: 12px;
      color: var(--muted);
      font-family: var(--mono);
      font-size: 12px;
      font-weight: 800;
    }

    .markdown-body {
      padding: 22px;
      color: #1a2740;
      overflow-wrap: break-word;
    }

    .markdown-body.compact {
      max-height: 420px;
      overflow: auto;
      padding: 16px;
    }

    .markdown-body h2, .markdown-body h3, .markdown-body h4, .markdown-body h5 {
      margin: 1.2em 0 .45em;
      letter-spacing: 0;
      line-height: 1.16;
    }

    .markdown-body h2:first-child, .markdown-body h3:first-child, .markdown-body h4:first-child {
      margin-top: 0;
    }

    .markdown-body p, .markdown-body ul, .markdown-body ol, .markdown-body blockquote, .markdown-body pre, .markdown-body .table-wrap {
      margin: 0 0 1rem;
    }

    .markdown-body ul, .markdown-body ol { padding-left: 1.3rem; }
    .markdown-body li { margin: .28rem 0; }
    .markdown-body blockquote {
      border-left: 4px solid var(--blue);
      border-radius: 0 14px 14px 0;
      background: var(--blue-soft);
      padding: 14px 16px;
    }

    .table-wrap {
      overflow-x: auto;
      border: 1px solid var(--border);
      border-radius: 14px;
      background: #fff;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      min-width: 680px;
      font-size: 13px;
    }

    th, td {
      border-bottom: 1px solid var(--border);
      padding: 11px 12px;
      text-align: left;
      vertical-align: top;
      overflow-wrap: anywhere;
      line-height: 1.55;
    }

    th {
      background: #f3f7ff;
      color: #233250;
      font-family: var(--mono);
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0;
    }

    tr:last-child td { border-bottom: 0; }

    .code-block {
      overflow: hidden;
      border: 1px solid var(--border);
      border-radius: 14px;
      background: #0c1322;
      color: #f8fbff;
    }

    .code-block span {
      display: block;
      border-bottom: 1px solid rgba(255,255,255,.1);
      padding: 8px 12px;
      color: #98b5ff;
      font-family: var(--mono);
      font-size: 11px;
    }

    .code-block code {
      display: block;
      overflow-x: auto;
      background: transparent;
      color: inherit;
      padding: 14px;
      border-radius: 0;
      white-space: pre;
    }

    .source-details {
      border-top: 1px solid var(--border);
      background: #fff;
    }

    .source-details summary {
      cursor: pointer;
      display: flex;
      align-items: center;
      min-height: 52px;
      padding: 16px 22px;
      font-weight: 800;
      color: #17233d;
      list-style-position: inside;
    }

    .source-list .source-details {
      border: 1px solid var(--border);
      border-radius: 16px;
      margin: 14px 22px;
      overflow: hidden;
    }

    .toast {
      position: fixed;
      right: 20px;
      bottom: 20px;
      z-index: 20;
      transform: translateY(20px);
      opacity: 0;
      pointer-events: none;
      border: 1px solid #b8dfcb;
      border-radius: 16px;
      background: #f0fdf4;
      color: #166534;
      padding: 12px 16px;
      box-shadow: 0 20px 50px rgba(15, 35, 80, 0.14);
      font-weight: 800;
      transition: opacity .2s, transform .2s;
    }

    .toast.show {
      opacity: 1;
      transform: translateY(0);
    }

    @media (prefers-reduced-motion: reduce) {
      html { scroll-behavior: auto; }
      *, *::before, *::after {
        animation-duration: .001ms !important;
        animation-iteration-count: 1 !important;
        scroll-behavior: auto !important;
        transition-duration: .001ms !important;
      }
      .copy-btn:hover,
      .copy-chip:hover {
        transform: none;
      }
    }

    .footer-note {
      padding: 48px 0 72px;
      color: var(--muted);
      text-align: center;
      font-size: 13px;
    }

    @media (max-width: 1100px) {
      .hero, .two-col-doc, .section-grid, .fizens-path, .guide-intro, .guide-card, .roadmap-card {
        grid-template-columns: 1fr;
      }
      .route-grid, .page-meta-grid, .simple-steps, .component-copy-grid, .do-replace-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
      .guide-shot { min-height: 480px; }
    }

    @media (max-width: 720px) {
      .shell { width: min(100% - 20px, 1500px); }
      .hero { padding-top: 38px; gap: 26px; }
      .brand { margin-bottom: 22px; }
      h1 {
        font-size: clamp(38px, 11vw, 54px);
        line-height: 1.04;
      }
      h2 {
        font-size: clamp(28px, 8vw, 42px);
        line-height: 1.08;
      }
      h3 {
        font-size: clamp(23px, 7vw, 34px);
        line-height: 1.12;
      }
      .hero-actions .copy-btn,
      .page-actions .copy-btn {
        width: 100%;
      }
      .card-head, .page-head {
        flex-direction: column;
        padding: 22px;
      }
      .metric-grid, .route-grid, .utility-row, .page-meta-grid, .mini-spec, .simple-steps, .token-copy-grid, .component-copy-grid, .roadmap-media, .do-replace-grid {
        grid-template-columns: 1fr;
      }
      .roadmap-list,
      .scroll-frame-grid {
        padding: 14px;
      }
      .placement-guide,
      .two-col-doc {
        padding-inline: 14px;
      }
      .placement-note {
        grid-template-columns: 1fr;
      }
      .roadmap-card {
        padding: 12px;
      }
      .roadmap-source,
      .scroll-setting {
        grid-template-columns: 1fr;
        align-items: stretch;
      }
      .scroll-frame-grid {
        grid-template-columns: repeat(7, minmax(280px, 1fr));
      }
      .guide-intro { padding: 18px; }
      .guide-shot { min-height: 430px; }
      .fizens-screenshot {
        inset: 12px;
        background-size: 440px auto;
      }
      .arrow-label {
        max-width: 178px;
        font-size: 11px;
      }
      .arrow-label::before { width: 52px; }
      .arrow-label::after { right: calc(100% + 46px); }
      .guide-body { padding: 18px; }
      .copy-point {
        grid-template-columns: 1fr;
        align-items: stretch;
      }
      .copy-chip {
        min-height: 44px;
        width: 100%;
      }
      .asset-preview {
        grid-template-columns: 72px minmax(0, 1fr);
      }
      .asset-preview img { width: 72px; }
      .section-list, .sitemap-board, .two-col-doc {
        padding: 16px;
      }
      .slot {
        width: 100%;
        margin-left: 0;
      }
      .section-topline {
        flex-wrap: wrap;
      }
    }

    @media print {
      html { scroll-behavior: auto; }
      body {
        background: #fff;
        color: #111827;
        font-size: 12px;
        overflow: visible;
      }
      .shell { width: 100%; }
      .sticky-nav,
      .copy-btn,
      .copy-chip,
      .toast {
        display: none !important;
      }
      .hero {
        min-height: auto;
        grid-template-columns: 1fr;
        padding: 24px 0;
      }
      .handoff-card,
      .page-panel,
      .page-roadmap,
      .scroll-storyboard,
      .guide-card,
      .guide-intro,
      .roadmap-card {
        break-inside: avoid;
        box-shadow: none;
        background: #fff;
      }
      .markdown-body.compact {
        max-height: none;
        overflow: visible;
      }
      .table-wrap,
      .scroll-frame-grid,
      .fizens-lane {
        overflow: visible;
      }
    }
  </style>
</head>
<body>
  <header class="shell hero">
    <div>
      <div class="brand"><span class="mark">b</span><span>beston</span></div>
      <div class="eyebrow">Framer / Fizens / Wireframe Handoff</div>
      <h1>ทำทุกหน้าใน Framer แบบไม่หลง</h1>
      <p class="lead">เริ่มจากตารางทุกหน้าก่อน: เห็นว่า BestonFX แต่ละหน้าใช้ Fizens live หน้าไหน, ต้องแก้ block อะไร, ดูภาพตอน scroll, แล้วกด copy เฉพาะช่องที่จะ paste.</p>
      <div class="hero-actions">
        ${copyButton("Copy risk warning", "copy:risk-warning")}
        ${copyButton("Copy CTA เปิดบัญชี", "copy:primary-cta", "ghost")}
        ${copyButton("Copy LINE CTA", "copy:line-cta", "ghost")}
        <a class="copy-btn ghost" href="#page-roadmap">เริ่มดูทุกหน้า</a>
        <a class="copy-btn ghost" href="#scroll-storyboard">ดู scroll</a>
      </div>
    </div>
    <aside class="hero-card">
      <div class="eyebrow">Generated ${escapeHtml(today)}</div>
      <h2>Paste-ready</h2>
      <p class="muted">Artifact นี้ generate จาก markdown ใน repo, ใช้ screenshot Fizens จริง และมี asset ภาพสำหรับ POC เตรียมไว้ในโฟลเดอร์เดียวกัน.</p>
      <div class="metric-grid">
        <div class="metric"><strong>${pages.length}</strong><span>wireframe pages</span></div>
        <div class="metric"><strong>${pages.reduce((sum, page) => sum + page.sections.length, 0)}</strong><span>page sections mapped</span></div>
        <div class="metric"><strong>${pageRoadmap.length}</strong><span>page-by-page Fizens maps</span></div>
        <div class="metric"><strong>Field</strong><span>copy buttons, not whole page</span></div>
      </div>
    </aside>
  </header>

  <nav class="sticky-nav">
    <div class="shell nav-inner">
      <a href="#mcp-execution-rules">MCP rules</a>
      <a href="#page-roadmap">Every page</a>
      <a href="#scroll-storyboard">Scroll map</a>
      <a href="#motion-spline-handoff">Motion/Spline</a>
      <a href="#guided-build">Guided build</a>
      <a href="#fizens-map">Fizens map</a>
      <a href="#sitemap">Sitemap</a>
      <a href="#pages">Wireframes</a>
      ${pages.map((page) => `<a href="#page-${escapeHtml(page.slug)}">${escapeHtml(page.meta.title)}</a>`).join("")}
      <a href="#components">Components</a>
      <a href="#sources">Sources</a>
    </div>
  </nav>

  <main class="shell section-space">
    ${mcpExecutionHtml}
    ${pageRoadmapHtml}
    ${scrollStoryboardHtml}
    ${motionSplineHtml}
    ${guidedBuildHtml}
    ${renderFizensMap(framerMapMd, "fizens-map", copyStore)}
    ${sitemapHtml}

    <section id="pages" class="section-space" style="padding-bottom: 0;">
      <div class="eyebrow">Wireframe รายหน้า</div>
      <h2 style="margin: 10px 0 26px;">ทุกหน้าจากไฟล์ Markdown ต้นทาง</h2>
      ${pages.map(renderPagePanel).join("\n")}
    </section>

    ${componentsHtml}
    ${renderRawSources(rawFiles)}
  </main>

  <footer class="shell footer-note">
    BestonFX Fizens Wireframe Handoff. Source: <code>docs/wireframes/*.md</code> and <code>docs/framer-poc-map.md</code>. Compliance scan is still required before publishing copy.
  </footer>

  <div class="toast" role="status" aria-live="polite">Copied</div>
  <script>
    window.copyStore = ${copyJson};
    const toast = document.querySelector(".toast");
    let toastTimer;
    function showToast(label) {
      toast.textContent = label || "Copied";
      toast.classList.add("show");
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => toast.classList.remove("show"), 1500);
    }
    async function copyText(key) {
      const text = window.copyStore[key];
      if (!text) return showToast("Nothing to copy");
      try {
        await navigator.clipboard.writeText(text);
        showToast("Copied to clipboard");
      } catch (error) {
        const area = document.createElement("textarea");
        area.value = text;
        area.setAttribute("readonly", "");
        area.style.position = "fixed";
        area.style.left = "-9999px";
        document.body.appendChild(area);
        area.select();
        document.execCommand("copy");
        area.remove();
        showToast("Copied");
      }
    }
    document.addEventListener("click", (event) => {
      const button = event.target.closest("[data-copy-key]");
      if (!button) return;
      event.preventDefault();
      event.stopPropagation();
      copyText(button.dataset.copyKey);
    });
  </script>
</body>
</html>`;
}

async function main() {
  const [sitemapMd, componentsMd, framerMapMd, copyDeckMd] = await Promise.all([
    readFile(path.join(wireframeDir, "sitemap.md"), "utf8"),
    readFile(path.join(wireframeDir, "components.md"), "utf8"),
    readFile(path.join(root, "docs", "framer-poc-map.md"), "utf8"),
    readFile(path.join(wireframeDir, "copy-deck-punchy.md"), "utf8"),
  ]);

  const availablePages = new Set(await readdir(pagesDir));
  const orderedPages = pageOrder.filter((file) => availablePages.has(file));
  const pages = await Promise.all(
    orderedPages.map(async (file) => {
      const content = await readFile(path.join(pagesDir, file), "utf8");
      return {
        file: `docs/wireframes/pages/${file}`,
        slug: file.replace(/\.md$/, ""),
        content,
        meta: extractFrontMatter(content),
        sections: extractSections(content),
      };
    }),
  );

  const copyStore = {
    "copy:risk-warning": reusableCopyPoints.riskWarning,
    "copy:primary-cta": reusableCopyPoints.primaryCta,
    "copy:line-cta": reusableCopyPoints.lineCta,
    "copy:verify-placeholder": reusableCopyPoints.verifyPlaceholder,
  };

  for (const page of pages) {
    for (const section of page.sections) {
      section.copyTokens.forEach((token, tokenIndex) => {
        copyStore[`section:${page.slug}:${section.id}:token:${tokenIndex}`] = token;
      });
    }
  }

  const rawFiles = [
    { name: "docs/wireframes/sitemap.md", key: "sitemap", content: sitemapMd },
    { name: "docs/wireframes/components.md", key: "components", content: componentsMd },
    { name: "docs/wireframes/copy-deck-punchy.md", key: "copy-deck-punchy", content: copyDeckMd },
    { name: "docs/framer-poc-map.md", key: "fizens-map", content: framerMapMd },
    ...pages.map((page) => ({
      name: page.file,
      key: `page:${page.slug}`,
      content: page.content,
    })),
  ];

  const html = buildHtml({ sitemapMd, componentsMd, framerMapMd, pages, rawFiles, copyStore });
  await writeFile(outputPath, html, "utf8");
  console.log(`Wrote ${path.relative(root, outputPath)}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
