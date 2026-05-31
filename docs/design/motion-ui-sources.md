# Motion UI sources (BestonFX /v2)

Patterns in `src/components/motion/` are **adapted** for Next.js 14 + Tailwind 3 + light royal-blue brand — not full library installs.

| Inspiration | What we use | Notes |
|---------------|-------------|--------|
| [Aceternity UI](https://ui.aceternity.com) | `Spotlight`, `BackgroundBeams` | Copy-paste style; MIT-friendly community patterns |
| [Magic UI](https://magicui.design) | `Marquee`, `MovingBorder` | Same approach; no CLI dependency |
| [21st.dev](https://21st.dev) | Discovery only | Use MCP or site to pick blocks; paste into `src/components/motion/` |
| shadcn + [Cult UI](https://www.cult-ui.com) / SATIS / flowkit | Future | Add via `npx shadcn@latest add` registry URLs when a block is chosen |
| Tailwind Plus / Ruixen Pro / paid kits | Not bundled | Requires license; reference visually only |

## Stack constraints

- **React 18**, **Tailwind 3.4** — HeroUI Pro v3 / some TW4-only kits need a separate upgrade track.
- **GSAP** remains on hero scroll pin (`ImmersiveHero`); **Framer Motion** for micro-interactions and borders.
- Always run `npm run compliance:scan` after copy changes.

## Adding a new block

1. Pick component on 21st.dev / Magic UI / Aceternity.
2. Paste into `src/components/motion/<name>.tsx`.
3. Replace colors with `brand-*` / `ink-*` from `tailwind.config.ts`.
4. Wire in `/v2` only until POC approved.
