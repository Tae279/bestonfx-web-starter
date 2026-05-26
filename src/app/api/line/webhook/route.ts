import { NextResponse } from 'next/server';
import { verifyLineSignature } from '@/lib/line/verify';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  const body = await request.text();
  const signature = request.headers.get('x-line-signature') ?? '';
  const channelSecret = process.env.LINE_CHANNEL_SECRET;

  if (channelSecret && !verifyLineSignature({ body, signature, channelSecret })) {
    return NextResponse.json({ error: 'Invalid LINE signature' }, { status: 401 });
  }

  // MVP skeleton only.
  // Production flow:
  // 1. Parse LINE events
  // 2. Route text to /api/bot/chat orchestration layer
  // 3. Reply with LINE Messaging API
  // 4. Escalate sensitive topics to human support
  // 5. Persist consented conversation metadata only

  return NextResponse.json({ ok: true });
}
