import type { BotGuardrailResult } from './types';

const blockedIntentPatterns = [
  /ควรซื้อ/i,
  /ควรขาย/i,
  /เข้าไม้/i,
  /ออกไม้/i,
  /เปิดกี่ lot/i,
  /lot เท่าไร/i,
  /รับประกัน/i,
  /กำไรแน่นอน/i,
  /ไม่ขาดทุน/i,
  /signal แม่น/i,
  /สัญญาณแม่น/i
];

export function applyBotGuardrails(message: string): BotGuardrailResult {
  const matched = blockedIntentPatterns.find((pattern) => pattern.test(message));

  if (!matched) {
    return { allowed: true };
  }

  return {
    allowed: false,
    reason: `blocked_intent:${matched.source}`,
    safeResponse:
      'ขออภัยครับ ผมไม่สามารถให้คำแนะนำซื้อขายเฉพาะบุคคล เช่น จุดเข้า จุดออก หรือขนาด lot ได้ ข้อมูลบนระบบนี้เป็นข้อมูลทั่วไปเท่านั้น หากต้องการสอบถามเรื่องบัญชี เอกสาร หรือการใช้งานเครื่องมือ ผมช่วยอธิบายได้ หรือสามารถส่งต่อให้ทีมงานทาง LINE ได้ครับ'
  };
}
