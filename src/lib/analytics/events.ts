import { z } from 'zod';

export const analyticsEventNames = [
  'page_view',
  'risk_warning_view',
  'cta_click',
  'line_add_click',
  'demo_start',
  'account_open_click',
  'calculator_used',
  'bot_intent',
  'bot_escalation',
  'partner_apply_start',
  'partner_apply_submit',
  'referral_visit',
  'campaign_conversion'
] as const;

export const AnalyticsEventSchema = z.object({
  name: z.enum(analyticsEventNames),
  page: z.string().optional(),
  source: z.string().optional(),
  campaign: z.string().optional(),
  partnerCode: z.string().optional(),
  metadata: z.record(z.unknown()).optional(),
  anonymousId: z.string().optional(),
  timestamp: z.string().datetime().optional()
});

export type AnalyticsEvent = z.infer<typeof AnalyticsEventSchema>;
