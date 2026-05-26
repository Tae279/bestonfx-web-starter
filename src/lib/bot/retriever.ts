import type { RetrievedKnowledge } from './types';

export async function mockRetrieveKnowledge(message: string): Promise<RetrievedKnowledge> {
  const lower = message.toLowerCase();

  if (lower.includes('ib') || message.includes('พาร์ทเนอร์')) {
    return {
      answer:
        'การสมัคร IB ใน MVP จะเริ่มจากแบบฟอร์มสมัคร, การอนุมัติจากทีม, referral link, และ dashboard สำหรับดู lead/lot/commission snapshot โดยตัวเลข commission เป็นการประมาณเท่านั้นจนกว่าจะยืนยันจากระบบจริง',
      sources: [{ title: 'Partner Program POC', slug: '/partners' }],
      escalate: false
    };
  }

  if (message.includes('Leverage') || message.includes('leverage')) {
    return {
      answer:
        'Leverage คือการใช้เงินทุนค้ำเพื่อเปิดสถานะที่มีมูลค่าใหญ่กว่าเงินทุนจริง ซึ่งเพิ่มได้ทั้งโอกาสและความเสี่ยง การขาดทุนอาจเกิดขึ้นเร็วและสูงกว่าที่คาด จึงควรคำนวณ margin และ position risk ก่อนเทรด',
      sources: [{ title: 'Risk Disclosure', slug: '/legal/risk-disclosure' }],
      escalate: false
    };
  }

  return {
    answer:
      'ตอนนี้ระบบอยู่ในโหมด POC ผมสามารถอธิบายขั้นตอนเปิดบัญชี เอกสาร เครื่องมือ หรือส่งต่อให้ทีมงานทาง LINE ได้ ข้อมูลนี้เป็นข้อมูลทั่วไปและยังไม่ใช่เงื่อนไขบัญชีฉบับ final',
    sources: [{ title: 'Support', slug: '/support' }],
    escalate: false
  };
}
