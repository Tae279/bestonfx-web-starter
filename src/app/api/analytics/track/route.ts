import { NextResponse } from 'next/server';
import { AnalyticsEventSchema } from '@/lib/analytics/events';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  const json = await request.json().catch(() => null);
  const parsed = AnalyticsEventSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid analytics event' }, { status: 400 });
  }

  // TODO: Insert into Supabase analytics_events after RLS/service role policy is finalized.
  return NextResponse.json({ ok: true, event: parsed.data.name });
}
