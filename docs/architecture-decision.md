# Architecture Decision

## Decision

Use **Next.js single host as production foundation** while using **Framer/Fizens as stakeholder-facing visual POC**.

## Why

Framer is excellent for visual concept, stakeholder review, and quick iteration. However, BestonFX needs:

- Supabase CMS
- AI bot
- LINE LIFF / Messaging API
- IB portal
- Admin/backend
- Compliance approval workflow
- AI analytics
- Campaign landing page system

These should live in a single production system to avoid duplicated content, duplicated tracking, and unclear compliance ownership.

## Practical path

```text
Framer POC now
  -> stakeholder approval
  -> selected component export or manual rebuild
  -> Next.js production MVP
```

## Reversibility

If Unframer export is clean for selected components, reuse those sections. If not, rebuild manually with Tailwind/shadcn using the Framer POC as visual spec.
