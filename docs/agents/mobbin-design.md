# Mobbin Design Research Workflow

Use this workflow when the user asks for `mobbin-design`, Mobbin research, mood boards, premium UI references, design critique, or design strategy using Mobbin MCP.

## Role

Act as a design researcher and product design strategist. Use Mobbin MCP as the primary reference library. Use Figma MCP when it is available to assemble, annotate, and organize findings directly in Figma.

Mobbin MCP requires a paid Mobbin plan. If Mobbin access is unavailable, stop and report the blocker instead of inventing references.

## Required Parameters

Always derive these from the user's request before searching:

- App type: fintech, broker, CRM, marketplace, education, health, SaaS, etc.
- Platform: iOS, Android, web app, landing page, desktop web, or responsive web.
- Screen type: signup, onboarding, welcome, landing hero, pricing, dashboard, settings, checkout, support, etc.
- Audience and intent: first-time user, returning customer, trader, partner, admin, sales lead, etc.

Never hardcode a category such as fitness app. If a parameter is missing and the answer is not obvious from repo context, ask one concise clarification question.

## Workflow 1: Build A Mood Board

Use when the user describes an app, feature, product area, or screen and asks for references, inspiration, a mood board, or design direction.

1. Search Mobbin for the specified app type, platform, and screen type.
2. Use Mobbin category and platform filters first, then broaden by interaction pattern if the category is too narrow.
3. Pull about 10 strong examples from different apps.
4. Prefer examples with clear hierarchy, modern interaction patterns, premium visual quality, and strong fit to the user's product intent.
5. Include 1-2 adjacent examples outside the exact category when the same screen pattern is unusually strong.
6. If Figma MCP is available, create or update a Figma file with neatly grouped sections:
   - Project brief
   - Selected references
   - Pattern notes
   - Recommended direction
7. If Figma MCP is not available, present the references inline with app name, platform, screen type, why it matters, and how to apply it.

## Workflow 2: Analyze Like A Designer

Use after gathering Mobbin references or when the user asks what works best.

1. Compare the examples by layout, visual hierarchy, information density, interaction model, trust signals, motion, accessibility, and conversion intent.
2. Explain what works best and why, using product-design language rather than generic taste.
3. Identify what does not work or would not fit the user's context.
4. Proactively suggest 1-2 high-quality apps outside the user's category that solve the same screen problem well.
5. For compliance-sensitive products such as financial services, flag copy or visual patterns that could imply guaranteed outcomes, risk-free usage, fake proof, or unverified legal claims.
6. If Figma MCP is available, write the analysis directly into the Figma file as organized text blocks beside the references.
7. End with a recommended design direction and 3-5 concrete implementation notes.

## Workflow 3: Critique My Design

Use when the user provides their own design as an image export, screenshot, file, or Figma frame.

1. If Figma MCP is not available, ask the user to export the Figma design as an image before critique.
2. Inspect the user's design first and identify the major sections.
3. Search Mobbin for premium examples matching each section's purpose, platform, and screen type.
4. Compare the user's design against the strongest Mobbin references section by section.
5. Give detailed, honest critique focused on:
   - Visual hierarchy
   - Layout and spacing
   - Information architecture
   - Conversion clarity
   - Trust and credibility
   - Interaction affordances
   - Mobile responsiveness
   - Accessibility
   - Brand fit
6. Distinguish subjective taste from high-confidence pattern issues.
7. Recommend specific improvements and better reference examples per section.
8. If Figma MCP is available, annotate the critique directly in Figma and organize notes beside the user's design.

## Output Rules

- Keep research parameterized by the user's app type, platform, and screen type.
- Do not fabricate Mobbin app names, screenshots, URLs, or findings.
- Prefer concise, actionable design strategy over long inspiration lists.
- For BestonFX or financial products, apply repo compliance rules before recommending copy, trust markers, performance claims, testimonials, or regulatory language.
- If a requested workflow needs Figma MCP but it is unavailable, provide a structured inline alternative.
- If the user wants a durable report, create a self-contained HTML artifact unless they ask for markdown.

## Example Invocations

```text
Use mobbin-design for a BestonFX mobile onboarding flow: fintech broker, iOS, signup plus KYC intro.
```

```text
Run mobbin-design critique on this exported Figma screen: responsive web landing page hero for a forex broker.
```

```text
Build a Mobbin mood board for a SaaS analytics dashboard: web app, first-time admin user, data overview screen.
```
