export type BotGuardrailResult =
  | {
      allowed: true;
    }
  | {
      allowed: false;
      reason: string;
      safeResponse: string;
    };

export type RetrievedKnowledge = {
  answer: string;
  sources: Array<{ title: string; slug: string }>;
  escalate: boolean;
};
