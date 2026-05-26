import { NextResponse } from 'next/server';
import { z } from 'zod';
import { applyBotGuardrails } from '@/lib/bot/guardrails';
import { mockRetrieveKnowledge } from '@/lib/bot/retriever';

export const runtime = 'nodejs';

const ChatRequestSchema = z.object({
  message: z.string().min(1).max(2000),
  channel: z.enum(['web', 'line']).default('web'),
  userId: z.string().optional()
});

export async function POST(request: Request) {
  const json = await request.json().catch(() => null);
  const parsed = ChatRequestSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }

  const guardrail = applyBotGuardrails(parsed.data.message);

  if (!guardrail.allowed) {
    return NextResponse.json({
      answer: guardrail.safeResponse,
      escalate: true,
      reason: guardrail.reason
    });
  }

  const knowledge = await mockRetrieveKnowledge(parsed.data.message);

  return NextResponse.json({
    answer: [
      knowledge.answer,
      '',
      'หมายเหตุ: AI Bot ให้ข้อมูลทั่วไปเท่านั้น ไม่ใช่คำแนะนำการลงทุนหรือคำสั่งซื้อขาย Forex/CFD และ Leverage มีความเสี่ยงสูง'
    ].join('\n'),
    sources: knowledge.sources,
    escalate: knowledge.escalate
  });
}
