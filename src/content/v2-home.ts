/**
 * Approved, compliance-safe copy for the /v2 homepage experiment.
 * Source: prompts/workshop-components.md + docs/compliance-copy-rules.md.
 * Unconfirmed facts use the regulator placeholder, never invented values.
 */

export const PENDING = 'รอยืนยันข้อมูลจากฝ่ายกำกับดูแลก่อนเผยแพร่';

export const RISK_WARNING =
  'Forex/CFD และ Leverage มีความเสี่ยงสูง อาจทำให้สูญเสียเงินลงทุน โปรดศึกษาข้อมูลและความเสี่ยงก่อนตัดสินใจ';

export const LINE_URL = process.env.NEXT_PUBLIC_LINE_OA_URL ?? '/support';

export const v2Nav = [
  { href: '#trust', label: 'จุดเด่น' },
  { href: '#tools', label: 'เครื่องมือ' },
  { href: '#accounts', label: 'บัญชี' },
  { href: '#partners', label: 'พาร์ทเนอร์' },
  { href: '#faq', label: 'คำถามที่พบบ่อย' }
] as const;

export const hero = {
  eyebrow: 'โบรกเกอร์ Forex/CFD เพื่อคนไทย',
  headline: 'เห็นทุกต้นทุน คืนทุกการเทรด',
  subheadline:
    'ต้นทุนที่เห็นชัด · เงินคืนที่จับต้องได้ · ทีมไทยที่อยู่ข้างคุณเสมอ',
  primaryCta: 'เปิดบัญชีฟรี',
  secondaryCta: 'ทัก LINE ปรึกษาทีมไทย',
  riskNote: 'การเทรดมีความเสี่ยง — เราอยากให้คุณรู้ก่อน ไม่ใช่รู้ทีหลัง',
  mockCards: [
    { label: 'ต้นทุนโปร่งใส', value: 'ดูได้บน MT5' },
    { label: 'Rebate', value: '$5 / lot*' },
    { label: 'LINE support', value: 'ทีมไทย' },
    { label: 'Tools', value: 'Demo' }
  ]
} as const;

/** Compliance-safe feature chips for Magic UI–style marquee (no fake logos or stats) */
export const featureMarquee = [
  'เห็นทุกต้นทุน',
  'คืน Rebate ทุก lot',
  'ทีมไทยตอบเอง',
  'เตือนความเสี่ยงก่อน',
  'เทรดบน MT5',
  'ไม่มีค่าที่ซ่อน'
] as const;

export const trust = {
  eyebrow: 'ทำไมต้อง beston',
  title: 'โปร่งใส เป็นธรรม ดูแลแบบไทย',
  description:
    'ทุกส่วนบนเว็บออกแบบให้คุณเห็นต้นทุนและความเสี่ยงชัดก่อนตัดสินใจ โดยไม่สร้างความคาดหวังเรื่องผลตอบแทน',
  cards: [
    {
      title: 'เห็นทุกต้นทุน',
      description: 'เปิด MT5 ดูสเปรดและค่าธรรมเนียมเองได้ทุกบาท ไม่มีค่าที่ซ่อน'
    },
    {
      title: 'เตือนก่อนเสี่ยง',
      description: 'เราบอกความเสี่ยงก่อน CTA สำคัญ ไม่ใช่ตอนสายเกินไป'
    },
    {
      title: 'ดูแลด้วยใจ',
      description: 'ทักทาง LINE ทีมไทยช่วยเรื่องบัญชี เอกสาร และการใช้งาน'
    },
    {
      title: 'Rebate ทุก lot',
      description: 'เงินคืนตามปริมาณการเทรด ตาม T&C ไม่ใช่สัญญากำไร'
    },
    {
      title: 'เครื่องมือช่วยคิด',
      description: 'Pip/Margin/Rebate (Demo) ช่วยวางแผนความเสี่ยง ไม่ใช่คำแนะนำการลงทุน'
    },
    {
      title: 'ข้อมูลที่ยืนยันแล้ว',
      description: 'แยกข้อมูลที่ยืนยันแล้วออกจากข้อมูลที่ยังรอฝ่ายกำกับดูแลอนุมัติ'
    }
  ]
} as const;

export const tools = {
  eyebrow: 'TRADING TOOLS',
  title: 'คำนวณก่อนเทรด ดีกว่าเสียใจทีหลัง',
  description:
    'เครื่องมือเหล่านี้เป็น demo ช่วยให้เห็นต้นทุนและความเสี่ยงเบื้องต้น ไม่ใช่คำแนะนำการลงทุน',
  items: [
    { title: 'Pip Calculator', description: 'ช่วยอธิบายมูลค่า pip ตามสินทรัพย์และขนาดสัญญา', status: 'Demo' },
    { title: 'Margin Calculator', description: 'ช่วยประเมินเงินประกันที่ต้องใช้ โดยข้อมูลจริงรอยืนยัน', status: 'Demo' },
    { title: 'Position Risk Calculator', description: 'ช่วยคิดสัดส่วนความเสี่ยงต่อพอร์ตตามค่าที่ผู้ใช้กรอก', status: 'Demo' },
    { title: 'Economic Calendar', description: 'แสดงแนวคิดปฏิทินข่าวสำคัญสำหรับ POC', status: 'Coming soon' },
    { title: 'Trading Cost Estimator', description: 'พื้นที่สำหรับอธิบายต้นทุนโดยใช้ placeholder จนกว่าเงื่อนไขได้รับอนุมัติ', status: 'Placeholder' },
    { title: 'AI Help Center', description: 'ตอบคำถามทั่วไปเกี่ยวกับขั้นตอนใช้งาน ไม่ใช่คำแนะนำซื้อขาย', status: 'Mock' }
  ]
} as const;

export const accounts = {
  eyebrow: 'ACCOUNT PATHS',
  title: 'บัญชีที่ใช่ เริ่มที่คุณเลือก',
  description:
    'ทุกบัญชีได้สเปรดที่โปร่งใสและ Rebate ทุก lot ส่วนรายละเอียดสเปรด ค่าธรรมเนียม และเงื่อนไข อยู่ระหว่างยืนยันจากฝ่ายกำกับดูแล จึงแสดงเป็น placeholder เพื่อความถูกต้อง',
  tiers: [
    { name: 'Standard', tagline: 'สำหรับผู้เริ่มต้นวางโครงสร้างการเทรด', highlight: false },
    { name: 'Pro', tagline: 'สำหรับผู้ที่ต้องการเครื่องมือและการดูแลเพิ่มเติม', highlight: true },
    { name: 'DX Exclusive', tagline: 'แนวคิดบัญชีระดับสูงในระบบ DX', highlight: false }
  ],
  rows: ['สเปรดเริ่มต้น', 'ค่าคอมมิชชัน', 'Leverage', 'เงินฝากขั้นต่ำ', 'แพลตฟอร์ม', 'Rebate']
} as const;

export const ib = {
  eyebrow: 'IB PARTNER MOCK',
  title: 'จำลองวิธีคิดรายได้พาร์ทเนอร์แบบไม่ใช่ข้อมูลจริง',
  description:
    'Component นี้ใช้สื่อสาร logic ของ estimator เท่านั้น ตัวเลขจริงและเงื่อนไขโปรแกรมต้องรอการอนุมัติ',
  inputs: [
    { label: 'ปริมาณการเทรดที่แนะนำต่อเดือน', placeholder: 'กรอกตัวอย่างเท่านั้น' },
    { label: 'อัตรา commission ต่อ lot', placeholder: 'รอยืนยันเงื่อนไขโปรแกรม' },
    { label: 'จำนวนลูกค้า active', placeholder: 'ตัวอย่างสำหรับ POC' }
  ],
  outputLabel: 'Estimated commission',
  outputValue: PENDING,
  disclaimer:
    'ตัวเลขนี้เป็นตัวอย่างเพื่ออธิบายวิธีคำนวณเท่านั้น ไม่ใช่การรับประกันรายได้จริง Commission ขึ้นกับเงื่อนไขโปรแกรม ปริมาณการเทรดจริง และการอนุมัติจากบริษัท'
} as const;

export const line = {
  eyebrow: 'LINE-FIRST SUPPORT',
  headline: 'มีคำถาม? ทีมไทยพร้อมตอบทาง LINE',
  subheadline:
    'ช่วยเรื่องขั้นตอนเปิดบัญชี เอกสาร เงื่อนไข และการใช้งานเครื่องมือ โดยไม่ให้คำแนะนำซื้อขายเฉพาะบุคคล',
  primaryButton: 'เพิ่มเพื่อน LINE',
  secondaryButton: 'ดู Help Center',
  chat: [
    { from: 'user' as const, text: 'เปิดบัญชีต้องเตรียมอะไรบ้าง?' },
    {
      from: 'support' as const,
      text: 'ทีมงานช่วยอธิบายขั้นตอนและเอกสารได้ แต่ข้อมูลเงื่อนไขบัญชีบางส่วนรอยืนยันจากฝ่ายกำกับดูแลก่อนเผยแพร่'
    }
  ],
  qrLabel: 'LINE QR Placeholder',
  supportHours: 'รอยืนยันเวลาทำการจากทีม Operations'
} as const;

export const faq = {
  eyebrow: 'FAQ',
  title: 'คำถามที่พบบ่อย',
  items: [
    {
      q: 'BestonFX เปิดให้บริการแล้วหรือยัง?',
      a: `ขณะนี้อยู่ในขั้นตอน POC เพื่อนำเสนอแนวคิด ข้อมูลด้านบริการและการกำกับดูแลบางส่วนยัง${PENDING}`
    },
    {
      q: 'การเทรด Forex/CFD มีความเสี่ยงอย่างไร?',
      a: RISK_WARNING
    },
    {
      q: 'เครื่องมือคำนวณบนเว็บใช้ตัดสินใจลงทุนได้เลยไหม?',
      a: 'เครื่องมือเป็น demo เพื่อช่วยอธิบายความเสี่ยงและต้นทุนเบื้องต้นเท่านั้น ไม่ใช่คำแนะนำการลงทุนเฉพาะบุคคล'
    },
    {
      q: 'สมัครเป็น IB partner ได้รายได้เท่าไร?',
      a: 'Commission ขึ้นกับเงื่อนไขโปรแกรมและปริมาณการเทรดจริง ตัวเลขบนหน้าเว็บเป็นตัวอย่างประกอบการอธิบายเท่านั้น'
    },
    {
      q: 'ติดต่อทีมงานได้ทางไหน?',
      a: 'ช่องทางหลักคือ LINE สำหรับสอบถามขั้นตอนเปิดบัญชี เอกสาร และการใช้งาน โดยไม่ให้คำแนะนำซื้อขายเฉพาะบุคคล'
    }
  ]
} as const;

export const bot = {
  launcherLabel: 'BestonFX AI Help',
  panelTitle: 'BestonFX AI Help',
  panelSubtitle: 'ตอบคำถามทั่วไป และส่งต่อทีม LINE เมื่อคำถามต้องใช้เจ้าหน้าที่',
  suggestedQuestions: [
    'เปิดบัญชีต้องใช้อะไรบ้าง?',
    'Leverage คืออะไร?',
    'สมัคร IB ต้องทำอย่างไร?',
    'คุยกับเจ้าหน้าที่ทาง LINE'
  ],
  sampleReply:
    'AI Bot ให้ข้อมูลทั่วไปเท่านั้น ไม่ใช่คำแนะนำการลงทุนหรือคำสั่งซื้อขาย หากคำถามเกี่ยวกับเงื่อนไขบัญชีหรือข้อมูลเฉพาะ โปรดคุยกับทีมงานทาง LINE',
  escalationText: 'ส่งต่อ LINE Support',
  complianceFooter: 'ข้อมูลจาก AI เป็นข้อมูลทั่วไป ไม่ใช่คำแนะนำการลงทุน'
} as const;
