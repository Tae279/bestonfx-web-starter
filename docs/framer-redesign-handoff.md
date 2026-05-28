# BestonFX × Fizens — Framer Redesign Handoff

> **Deliverable type:** build-ready spec for Claude Code operating Framer via MCP. Not a from-scratch build, not Next.js — all work happens inside the purchased **Fizens** Framer template.
> **Brand decision (CONFIRMED 2026-05-29, Tae):** **Light + royal blue (Fizens-native)** — `#0040c1` + Prompt font + light surfaces + soft blue glow. Gold/dark-navy fully dropped. This overrides the prompt-of-the-day "dark navy + gold" wording and this worktree's stale `CONTEXT.md`/`tailwind.config.ts`.
> **Reference frame (founder-clarified):** from the facil.xyz reference, the founder likes **ONLY the scroll animation + scroll effects + the immersive/parallax style** — NOT its dark palette, device-mockup framing, floating orbs, status chip, or custom cursor. So the motion priority for BestonFX = **scroll-driven immersive parallax** (M2/M15/M16/M17 below = the spine). The device/orb/bloom/cursor effects (M12–M14) are **demoted to optional accents**, not requirements. BestonFX stays light + royal blue. Goal: **immersive "wow" on every page via scroll**, tiered by page type (see Immersive Fit per Page).
> **Sources/confidence:** every factual + tool + competitor claim is flagged `[src · conf:high/med/low]`. BestonFX product facts come from the repo; unknowns are Open Questions, never invented.

---

## TL;DR

1. **Thesis:** Don't fight the template. Re-skin Fizens' light + royal-blue clarity into a *broker-sober* trust machine — keep its layout DNA, swap the consumer-fintech copy for compliant Thai broker copy, strip every fake stat/testimonial/rating, and add a risk-first conversion spine (sticky risk bar → hero → trust → LINE).
2. **Highest-leverage move (Home/Hero):** replace Fizens' centered text hero with a **left-copy / right-device "Risk-first terminal" hero** using the *Hero device bloom-reveal* + *cursor-tracked depth* motion — that single section delivers the "wow + trust + convert" and sets the brand. Everything else is repetition of patterns defined once.
3. **Biggest risk:** **credibility via accuracy** — pre-launch, no approved spread/leverage/regulatory facts (repo), so every number stays a placeholder until `claim_registry` approval. **Thai SEC is NOT the gate** — XM/Exness/FBS/IC Markets all serve Thailand offshore without a Thai SEC licence `[fxempire/exem · conf:med]`; the bar to match is **international-regulator (FCA/CySEC/ASIC) risk-warning convention** + no-guarantee hygiene. Secondary risk: over-motion eroding trust/perf.
4. **First thing Claude Code does:** scaffold the two gap Skills (`forex-promo-compliance`, `bestonfx-framer-build-sop`) so compliance + brand tokens are enforced before any Framer edit. Then duplicate Fizens and run a read-only `getProjectXml` audit.

---

## Skills Plan

### (a) Skills loaded for this research
| Skill | Status this session | Used for |
|---|---|---|
| `framer-expert-builder` | Loaded (full read, `~/.claude/skills-archive/`) | Framer Motion patterns, override syntax, breakpoints (Desktop 1200 / Tablet 768 / Phone 390), CMS schema, perf budget `[conf:high]` |
| `content-creator` / `ui-ux-designer` | Located on disk (archive), applied principle-level | Copy structure, accessibility, wireframe logic |
| `higgsfield-expert` / `creative-design-director` / `cinematic-prompt-engineer` | **Not resolvable on disk** (plugin namespace only) → substituted **web-verified** Higgsfield specs | Asset capability + prompt specs |
| Repo compliance system (`src/lib/compliance/rules.ts`, `docs/compliance-copy-rules.md`) | Loaded (authoritative) | Banned phrasings, risk-warning placement |
| `ui-ux-pro-max` v2.5.0 | Loaded (CLI `--design-system` + `--domain ux`) | Immersive/parallax pattern, motion-UX guards (reduced-motion, ≤1–2 anim/view, no scroll-jack), per-page motion tiering. ⚠️ Its color rec (gold/purple/dark) + font (IBM Plex) **overridden** — BestonFX brand is locked light+royal-blue+Prompt |

> Honesty flag: the named asset/prompt Skills were not found in the filesystem this session. Asset specs below rely on web-verified Higgsfield/Spline/Unframer capability `[conf:high]`, not on those Skills' internal guidance.

### (b) Gap Skills to create via `skill-creator` (contents pre-populated from this research)
| Skill name | Purpose | Contents to seed |
|---|---|---|
| `forex-promo-compliance` | Forex/CFD promo gate — **international reg + Thai-market benchmark (Thai SEC is NOT a gate)** | `bannedPhrases` + safer-replacement table (repo), `mandatoryRiskWarning`, placement matrix, **international convention** (FCA/CySEC/ASIC high-risk + firm-specific loss-% once entity/figure exists), **Thai offshore-broker benchmark** (XM/Exness/FBS/IC norms), `claim_registry`-gated field list |
| `bestonfx-framer-build-sop` | Brand tokens + motion system + Framer MCP playbook | Light+blue token scale (below), Motion Language System (below), asset specs, the Framer MCP tool sequence, QA checklist |

> Do **not** stack `cinematic-prompt-engineer` + `ai-prompt-optimizer` — if extra prompt help is needed during asset gen, load **one** only.

### (c) Skill-per-build-step map (for Claude Code)
| Build step | Skill to load | Tool/MCP |
|---|---|---|
| 0. Scaffold gap skills | `skill-creator` | filesystem |
| 1. Duplicate + audit Fizens | `bestonfx-framer-build-sop` | Framer MCP `getProjectXml`, `getCMSCollections` |
| 2. Brand tokens | `bestonfx-framer-build-sop` | Framer MCP `manageColorStyle`, `manageTextStyle`, `searchFonts` |
| 3. Asset generation | `higgsfield-expert` (or web specs) + `creative-design-director` | Higgsfield CLI/MCP, Spline, `craftwork` MCP |
| 4. Page structure | `framer-expert-builder` | Framer MCP `createPage` |
| 5. Section edits | `framer-expert-builder` | Framer MCP `updateXmlForNode`, `getNodeXml` |
| 6. Custom components | `framer-expert-builder` | Framer MCP `createCodeFile` / Workshop |
| 7. Copy + compliance | `content-creator` + `forex-promo-compliance` | Framer MCP `updateXmlForNode` |
| 8. CMS | `framer-expert-builder` | Framer MCP `createCMSCollection`, `upsertCMSItem` |
| 9. QA + export | `bestonfx-framer-build-sop` | Framer MCP `getProjectWebsiteUrl`, `exportReactComponents`, `unframer` CLI |

---

## Fizens Template Inventory (page × section)
`[src: WebFetch fizens.framer.ai + framer.com/marketplace/templates/fizens · conf:high for home, med for subpage internals — only home was deep-crawled]`

### Homepage sections (top→bottom)
| # | Section | Layout | Components | Existing copy (sample) | Existing animation | CMS? |
|---|---|---|---|---|---|---|
| 1 | Hero | Single-col centered | H1, body, 1 CTA, stat line | "Start Managing Your Finance With Our Tool" / "0.0M+ … 140 countries" | Fade-in on load | No |
| 2 | Brand banner | Single line | logo strip / text | "Partnering with top tier brands…" | Marquee (likely) | No |
| 3 | Value prop | Centered block | H2, CTA | "all-in-one solution for managing your money" | Fade-rise | No |
| 4 | Key features | 3-col grid | icon cards | "Explore Our Standout Features" (Expense tracking, Savings, Analytics) | Stagger reveal | No |
| 5 | More features | Grid + label | feature chips | "…and more additional features" (Budgeting, Debt, Investment, Bill, Tax) | Fade-rise | No |
| 6 | CTA strip | Centered | button | "Get the template" | Hover | No |
| 7 | Benefits | 3-col | columns w/ bullets | "Experience The Future of Finance" | Stagger | No |
| 8 | Statistics | 3-col stat | counters | "0% … $0K+ … 0%" | **Count-up** | No |
| 9 | How it works | 3-step numbered | step cards | "How Fizens Can Help You" | Sequential reveal | No |
| 10 | Testimonials | Carousel | quote cards, rating | "Our Users Talk About Us" / "4.8/5 · 14K+ reviews" | Slide/auto-scroll | Maybe |
| 11 | Pricing | 3-col table + tabs | pricing cards, toggle | "$0 / $20 / $40", Monthly/Yearly tabs | Tab switch, hover | No |
| 12 | Blog | 4-col article grid | article cards | "Read the Articles Written By Professionals" | Hover lift | **Yes (Articles)** |
| 13 | FAQ | Accordion | accordion rows | "Frequently Asked Questions" (5 Qs) | Accordion expand | No |
| 14 | Final CTA | Centered | H2, button | "Your First Step To Financial Freedom Begins Here" | Fade-rise | No |
| 15 | Footer | Attribution row | link, logo | "Create a free website with Framer" | — | No |

### Page list (slugs)
| Fizens page | Slug | Notes |
|---|---|---|
| Home | `/` | 15 sections above |
| Features | `/features` | feature detail (med conf on internals) |
| Pricing | `/pricing` | plan table |
| About | `/about` | company story |
| Contact | `/contact` | form |
| Team member | `/team-member/[slug]` | CMS, e.g. `sarah-jane` |
| Jobs | `/jobs/[slug]` | CMS, e.g. `bussiness-analyst` |
| Articles/Blog | `/articles` + `/articles/[slug]` | **CMS-driven** |
| Integration | `/integration` | logo/integration grid |
| Download | `/download` | app-download |
| Changelog | `/changelog` | version list (CMS) |
| 404 | `/404` | error |

**CMS collections present:** `Articles` (Blog), likely `Team`, `Jobs`, `Changelog`. `[conf:med]`

---

## Repo Reconciliation
`[src: bestonfx-web-starter repo · conf:high]`

### What the repo actually contains
- **Routes (intent):** `/`, `/why-bestonfx`, `/accounts`, `/markets`, `/tools`, `/partners`, `/partners/dashboard`, `/support`, `/legal/risk-disclosure`, `/admin`.
- **Real Thai hero copy** (`PremiumTradingHero.tsx`, `prompts/workshop-components.md`) — usable verbatim, re-themed light+blue.
- **Compliance system** — `bannedPhrases`, `mandatoryRiskWarning`, safer-replacement table, placement matrix.
- **Workshop component briefs** (8) — RiskDisclosureBar, PremiumTradingHero, TrustStackCards, AccountComparisonPreview, TradingToolsGrid, LineSupportCTA, IBCommissionEstimatorMock, AIChatBotMock — **all written dark+gold → must be re-spec'd light+blue**.
- **framer-poc-map.md** — section order + Fizens-treatment table (reuse/adapt/remove). This handoff supersedes its colors but keeps its treatment logic.
- **DX ecosystem facts:** DX Academy (courses, "FTMO #1 coach" — `[claim needs source · Open Question]`), DX Trade (signal room), DX Exclusive (VIP tier).

### Content → Fizens section mapping
| BestonFX content | Goes into Fizens section | Action |
|---|---|---|
| Risk Disclosure Bar (sticky) | *new — above Hero* | **NEEDS NEW** (Fizens has none) |
| Risk-first terminal hero | §1 Hero | Replace heavily |
| Trust stack (Clarity/Risk-first/Thai-first) | §4 Key features | Adapt |
| Account comparison (Standard/Pro/IB) | §11 Pricing | Replace → broker accounts, placeholder values |
| Markets preview | §4/§5 features | Adapt |
| Trading tools grid | §5 more features | Adapt |
| DX ecosystem strip | §7 Benefits | Adapt → Academy/Trade/Exclusive |
| LINE support CTA | §6/§14 CTA | Replace → LINE-first |
| IB partner CTA + estimator | §7 / new | Adapt + **NEEDS NEW** estimator |
| AI chatbot mock | floating — none in Fizens | **NEEDS NEW** |
| Stats (users/countries/%) | §8 Statistics | **REMOVE until verified** (no fake numbers) |
| Testimonials/rating | §10 | **REMOVE until verified** |
| FAQ (risk/account/LINE/IB) | §13 FAQ | Adapt |
| Markets insights / education | §12 Blog (Articles CMS) | Adapt → DX Academy content |
| Legal/risk footer | §15 Footer | **Custom rebuild** |

**"Needs new section/component" flags:** Sticky RiskDisclosureBar · LivePriceTicker (placeholder) · IBCommissionEstimatorMock · AIChatBotMock floating widget · LINE QR/CTA block.

---

## Motion Language System
`[Framer technique · conf:high; cursor-parallax + count-up need code overrides · conf:med on exact API]`

> Framer surfaces three motion layers: **Effects** (Appear-on-scroll / on-load), **Scroll Transforms** (scroll-linked translate/scale/opacity on a section), and **Variants + code Overrides** (Framer Motion). Native easing token used throughout: `easeOutExpo = cubic-bezier(0.16, 1, 0.3, 1)`.
>
> **Founder priority = scroll-driven immersive parallax (M2, M15, M16, M17).** This is the "wow" engine on every page. Mandatory guards `[ui-ux-pro-max · conf:high]`: (1) **≤1–2 key animated elements per viewport** — never animate everything (motion sickness + distraction); (2) **honor `prefers-reduced-motion`** → fall back to instant/fade; (3) **mobile fallback** = static or simple fade, cut parallax amplitude ≥50%; (4) **no scroll-jacking** — never hijack native scroll speed/direction (causes nausea); (5) **skip/reduce-motion affordance** for long immersive sequences. Immersive ≠ heavy everywhere; it's *purposeful depth on a calm base*.

| # | Effect name | Where | Framer path | Numeric params |
|---|---|---|---|---|
| M1 | **Hero device bloom-reveal** | Hero device mockup + bloom | Appear (on load) on device frame; blurred ellipse behind w/ scale transform | Device: `opacity 0→1`, `scale 0.92→1`, `y 40→0`; Bloom ellipse: `scale 0.6→1`, `opacity 0→0.5`, `blur 60px`; duration `0.9s`; ease `easeOutExpo`; delay `0.15s` |
| M2 | **Scroll-parallax layer stack** | Hero/feature backgrounds | Scroll Transform on section, `scrollProgress [0→1]` | Back bloom `translateY 0→-120px`; mid cards `0→-60px`; foreground device `0→-20px` (≈0.3/0.6/0.85 speed); `opacity` constant |
| M3 | **Cursor-tracked depth** | Hero layers | **Code Override** `useMotionValue`+`useSpring` on pointer move | Layer offset `±12px` (back), `±6px` (mid); spring `stiffness 150, damping 20`; disable on touch/`prefers-reduced-motion` |
| M4 | **Section fade-rise on scroll** | Every section enter | Appear effect "Fade + Move up" | `opacity 0→1`, `y 32→0`, duration `0.6s`, ease `easeOut`, viewport `once:true`, threshold `0.2` |
| M5 | **Stagger children reveal** | Card grids | Appear + container stagger | child `y 20→0`, `opacity 0→1`, `staggerChildren 0.08s`, `delayChildren 0.1s`, spring `stiffness 260, damping 24` |
| M6 | **Count-up (gated)** | Stats (only if verified) | **Code Override** `animate(0→value)` on inView | duration `1.2s`, ease `easeOut`, `once:true`. ⚠️ keep disabled until numbers approved |
| M7 | **Glow-pulse CTA** | Primary buttons | Variant hover/tap + box-shadow | rest shadow `0 15px 44px rgba(0,64,193,0.25)`; hover `scale 1.03` + shadow `0 18px 54px rgba(0,64,193,0.34)` `0.2s`; tap `scale 0.97` |
| M8 | **Live ticker marquee** | Price-ticker strip | Override infinite x-loop | `x 0→-50%`, duration `30s`, ease `linear`, `repeat:Infinity`; pause on hover |
| M9 | **Sticky nav condense** | Header | Scroll Transform / variant on scrollY | at `scrollY>40px`: padding `20px→12px`, bg `rgba(255,255,255,0.7)+blur(14px)`, shadow on; `0.25s ease` |
| M10 | **Accordion expand** | FAQ | Native variants | `height auto`, `0.3s ease`, chevron rotate `0→180°` |
| M11 | **Page transition** | All routes | Framer Page Transitions | fade `opacity 0→1` + `y 8→0`, `0.4s`, ease `easeOutExpo` |
| M12 | **Device-framed viewport** (reference) | Hero device | Frame as mask (radius `28px`) + absolute notch top-center + dark screen `#0a1020` + inner radial bloom `radial-gradient(120% 80% at 50% 0%, rgba(31,76,240,0.55), rgba(0,64,193,0) 60%)` | bloom breathing loop `opacity 0.85↔1`, `4s`, ease `easeInOut`, `repeat:Infinity`; entrance via M1 |
| M13 | **Floating status chip** (reference) | inside device viewport | absolute pill + spinner override | float `y 0↔-6px` `3s` easeInOut loop; spinner `rotate 0→360°` `1.4s linear`; **compliant copy only** (e.g. "ตัวอย่างแดชบอร์ด — ไม่ใช่ข้อมูลจริง"), never a real-payment claim |
| M14 | **Layered orb float + particles** (optional) | L+R floating orbs | Appear entrance + idle override | orbs `scale 0.6→1, opacity 0→1`, `staggerChildren 0.12s`; idle `y 0↔-10px` `5s` loop; particles twinkle `opacity 0.3↔1` `2–3s`. *Optional accent — not founder priority* |
| **M15** | **Pinned scroll-scrub section** ⭐ | signature immersive sections (Hero, Why, Markets) | Framer Scroll section: pin section, scrub children on `scrollProgress` | pin duration `100–150vh`; layered children translate/scale tied to `[0→1]`; e.g. headline `opacity 1→0` + device `scale 1→1.08` over scrub; ease `linear` (scrub) |
| **M16** | **Layered parallax depth (page-wide)** ⭐ | every immersive section | Scroll Transform multi-layer | per section: bg layer `translateY 0→-15%`, mid `0→-8%`, fg `0→-3%` of section height; opacity constant; ≤3 layers |
| **M17** | **Scroll-reveal scale + fade** ⭐ | content blocks on enter | Appear "Fade + Scale" | `opacity 0→1`, `scale 0.94→1`, `y 24→0`, duration `0.6s`, ease `easeOutExpo`, viewport `once:true`, threshold `0.25` |

**Performance budget:** animate only `transform` + `opacity`; `will-change` on active layers only; **≤1–2 key animated elements per viewport**; cap simultaneous scroll-linked layers at 3; mobile = static/fade + parallax amplitude −50%, M3/M14 off; **honor `prefers-reduced-motion`**; **no scroll-jacking**; initial JS < 200KB. `[framer-expert-builder + ui-ux-pro-max · conf:high]`

---

## Immersive / Parallax Fit per Page (tiered "wow")
`[ui-ux-pro-max · conf:high — immersive pattern = +40% engagement but requires skip + reduced-motion + mobile fallback; broker trust caps the ceiling]`

> "Wow on every page" = **YES, but tiered**. Heavy immersion on a legal/risk or support page *lowers* trust + usability. Immersion scales **down** as the page's job shifts from *persuade* → *inform/transact*.

| Page | Tier | Signature motion | Guardrail |
|---|---|---|---|
| Home | **Full** | M15 pinned scroll-scrub hero + M16 layered parallax + M17 reveals | skip after hero; mobile fallback |
| Why BestonFX | **Full** | M15 scrub story + M16 depth on pillars | reduced-motion → fade |
| Markets | **High** | M16 parallax instrument layers + M8 ticker + M17 | data stays readable |
| Partners (IB) | **Medium-High** | M15 scrub IB story + M17 | estimator instant, no scrub |
| Tools | **Medium** | M17 reveals + M7 hover, light M16 | calculators instant |
| Accounts | **Medium** | M17 card reveals + subtle M16 bg | comparison scannable — **no pin** |
| Support | **Low** | M4 fade only | LINE/QR/form instant + reachable |
| Legal / Risk | **Minimal** | M4 fade on load, none after | readability + trust > wow; **no parallax** |
| Partner dashboard | **Minimal** | M4 fade | functional; no immersive |
| 404 | **Low-fun** | one playful M1-lite | quick exit links |

## Brand Tokens (light + royal blue) — seed for `manageColorStyle` / `manageTextStyle`
`[src: memory brand-pivot-fizens-light-blue + Tae confirmation · conf:high]`

```
brand  50 #eef3ff · 100 #dbe5ff · 200 #b8caff · 300 #8aa6ff · 400 #5577ff · 500 #2b54f5 · 600 #0040c1(anchor) · 700 #0034a0 · 800 #002a80 · 900 #001e5e
ink    50 #f6f8fb · 100 #eceff5 · 200 #d6dbe6 · 300 #b2bccd · 400 #7d8aa3 · 500 #56657f · 600 #3d4b63 · 700 #2c3850 · 800 #1b2438 · 900 #0c1322
surface base #ffffff · subtle #f7f9fc · muted #eef2f8
line   #06C755 (conversion only) · amber bg #fff7ed / line #f59e0b / text #b45309 (risk/compliance only)
```
- **Shadows:** card `0 8px 30px rgba(13,28,63,0.08)`; brand glow `0 15px 44px rgba(0,64,193,0.25)`.
- **Type:** **Prompt** (Thai+Latin). H1 `56/64` desktop · `34/42` mobile, weight 700. Body `18/30` weight 400. Eyebrow `13px` uppercase, tracking `0.08em`, brand-600.
- **Radius:** card `24px` · pill `999px` · input `14px` · device frame `28px`. Container max `1180px`, section padding `120px` desktop / `64px` mobile, 8px grid.
- **Rule:** gold/dark-navy = forbidden. Amber = risk only, visually separated from brand blue. LINE green = conversion CTA only.

---

## Home Page Spec (section-by-section — Hero at max detail)

### H0 · Sticky Risk Disclosure Bar `[NEEDS NEW]`
- **Layout:** full-width sticky top bar, `40px` desktop / `auto` 2-line mobile, surface `ink-900` text on `amber bg #fff7ed`, left shield icon (amber).
- **Copy (verbatim, repo):** `Forex/CFD และ Leverage มีความเสี่ยงสูง อาจทำให้สูญเสียเงินลงทุน โปรดศึกษาข้อมูลและความเสี่ยงก่อนตัดสินใจ` · right link `อ่านคำเตือนความเสี่ยง → /legal/risk-disclosure`.
- **Component props:** `message, linkText, linkUrl, showIcon`.
- **Asset:** shield/alert icon (Craftwork or lucide `shield-alert`).
- **Animation:** none (must be instantly readable); stays above nav on scroll.

### H1 · Hero — "Risk-first terminal" `[TOP PRIORITY]`
- **Layout:** 2-col `1.05fr / 0.95fr` desktop, stacked mobile (copy → device). Light surface `#ffffff` with subtle radial brand bloom behind device. Container `1180px`, top padding `96px`.
- **Left column copy (verbatim, repo — compliant):**
  - Eyebrow pill: `ShieldCheck` + `Premium Thai Forex/CFD broker concept` (brand-600 on brand-50 pill).
  - H1: `โครงสร้างการเทรดระดับมืออาชีพ สำหรับนักเทรดไทยที่ต้องการความโปร่งใสและการดูแลจริง`
  - Sub: `BestonFX รวมข้อมูลบัญชี เครื่องมือคำนวณความเสี่ยง การเรียนรู้ และ LINE support เพื่อช่วยให้คุณตัดสินใจอย่างมีวินัย`
  - Risk note (amber, `13px`): `ไม่มีการรับประกันผลตอบแทน การเทรด Forex/CFD และ Leverage มีความเสี่ยงสูง อาจทำให้สูญเสียเงินลงทุน`
- **CTA hierarchy (founder-confirmed):**
  1. **Primary** (brand-600, glow M7): `เปิดบัญชี` → `/accounts`
  2. **Secondary** (LINE green, outline): `ทัก LINE OA / ติดต่อ admin` → `NEXT_PUBLIC_LINE_OA_URL`
  3. **Tertiary** (text link): `ดูบัญชีและเงื่อนไข` → `/accounts`
  > Conversion ladder: open-account (primary) + LINE-OA/admin contact (secondary, lowest friction for Thai users). Same CTA pair repeats site-wide. Deposit CTA stays out until deposit terms approved.
- **Right column — device-framed terminal (reference treatment):** a **dark "terminal viewport"** (`#0a1020`, `28px` radius, notch top-center per M12) set on the light page — this is the contained-contrast trick that gives facil's bloom drama without a dark hero. Inside: header "Risk-first dashboard", **Risk meter** (2/3 fill, brand-600), **LINE support** card (green), 3 symbol rows `XAUUSD / EURUSD / US30` all = `รอยืนยัน` + risk note, plus a floating **status chip** (M13, compliant copy `ตัวอย่างแดชบอร์ด — ไม่ใช่ข้อมูลจริง`). Flanking: **2 floating royal-blue glass orbs** (L+R) + light particles (M14). All numbers are placeholders.
- **Assets:** A1 dark terminal composite (royal-blue inner bloom), A2 brand bloom ellipse, A8 glass orbs (Spline/Higgsfield), A10 particle sprite. See Asset Plan.
- **Animation:** **M1** device bloom-reveal on load → **M12** device-framed bloom breathing → **M14** orb float-in + particles → **M3** cursor-tracked depth on orbs+device → **M2** parallax on scroll → **M13** status-chip float/spinner. CTAs use **M7**. **Custom cursor:** optional + sober — a small brand-600 dot (NOT facil's hand cursor; gimmicky for a broker); skip if it reads playful. `[native conf:high; M3/M13/M14 overrides conf:med]`
- **Why it converts:** clarity + a "real product" device + restrained motion = institutional trust without casino energy; CTA ladder routes to lowest-friction (LINE) + qualified (demo).

### H2 · Trust Stack (replaces Fizens Key Features)
- **Layout:** 3-col card grid (1-col mobile), white cards, brand-50 icon chips, `24px` radius, card shadow.
- **Copy (repo `trustCards`):** ① `เงื่อนไขต้องชัดก่อน conversion` ② `Risk warning ไม่ใช่ footer-only` ③ `LINE คือ conversion surface หลัก` — each with its description.
- **Assets:** 3 line icons (clarity / shield / LINE-chat) — Craftwork.
- **Animation:** **M4** section + **M5** stagger.

### H3 · Account Path Selector (replaces Pricing)
- **Layout:** 3-col comparison (Standard / Pro / Partner-IB), mobile = stacked cards. Brand-600 divider lines (not gold).
- **Copy:** rows = Suitable for / Spread condition / Commission / Platform / Support / Risk note. **All values = `รอยืนยันเงื่อนไขบัญชี` / `ข้อมูลจะแสดงหลังจากได้รับอนุมัติ`.** Compliance note: `เงื่อนไขบัญชีอาจเปลี่ยนแปลงได้ และไม่ใช่การรับประกันผลลัพธ์การเทรด`.
- **Animation:** **M4** + hover lift `y -4px, 0.2s`.

### H4 · Markets Preview + Live Ticker `[ticker NEEDS NEW]`
- **Layout:** horizontal ticker strip (placeholder symbols, `รอยืนยัน`) + 4-tile market categories (Forex / Metals / Indices / Crypto-CFD).
- **Animation:** ticker **M8** marquee; tiles **M5** stagger. Ticker labeled "ตัวอย่าง — ราคาไม่ใช่ real-time" until data approved.

### H5 · Trading Tools Grid
- **Copy (repo):** Pip / Margin / Position Risk Calculator, Economic Calendar, Trading Cost Estimator, AI Help Center — each `icon + title + Thai desc + status pill (Coming soon/Demo) + CTA ดูเครื่องมือ`.
- **Animation:** **M4** + **M5**; status pills static.

### H6 · DX Ecosystem Strip (replaces Benefits)
- **Layout:** 3-col — **DX Academy** (courses/education) · **DX Trade** (signal room — *educational ideas, not advice*) · **DX Exclusive** (VIP tier). Brand-tinted cards.
- **Compliance:** signal room copy = `ไอเดียการศึกษา/มุมมองตลาด ไม่ใช่คำแนะนำเฉพาะบุคคล`. "FTMO #1 coach" claim **gated** `[Open Question — needs source]`.
- **Animation:** **M4** + **M5**.

### H7 · LINE Support CTA
- **Copy (repo):** H `มีคำถามเรื่องบัญชีหรือเอกสาร? คุยกับทีม BestonFX ทาง LINE` · sub re: account/docs/tools · buttons `เพิ่มเพื่อน LINE` + `ดู Help Center` · note `ทีมงานไม่ให้คำแนะนำซื้อขายเฉพาะบุคคล`.
- **Assets:** LINE chat mockup + QR placeholder (green accents).
- **Animation:** **M4**; LINE button **M7** (green glow variant).

### H8 · IB Partner CTA + Estimator `[estimator NEEDS NEW]`
- **Copy:** partner value + estimator (inputs: monthly lots / commission-per-lot / active clients → estimated commission). **Disclaimer (verbatim):** `ตัวเลขนี้เป็นตัวอย่างเพื่ออธิบายวิธีคำนวณเท่านั้น ไม่ใช่การรับประกันรายได้จริง Commission ขึ้นกับเงื่อนไขโปรแกรม ปริมาณการเทรดจริง และการอนุมัติจากบริษัท`.
- **Animation:** **M4**; estimator output count-up **disabled** (M6 gated).

### H9 · FAQ
- **Copy:** adapt to risk / account opening / LINE / IB / tools (5–7 Qs). Include a risk Q.
- **Animation:** **M10** accordion.

### H10 · Final CTA + Footer (custom)
- **Copy:** trust-first close (no "financial freedom" fantasy → replace Fizens line with `เริ่มจากการเข้าใจความเสี่ยงและเงื่อนไขให้ชัดก่อนตัดสินใจ`).
- **Footer:** legal nav, full `mandatoryRiskWarning`, company placeholder `รอยืนยันข้อมูลจากฝ่ายกำกับดูแลก่อนเผยแพร่`, LINE, sitemap.
- **REMOVE:** Fizens stats (§8), testimonials (§10), "14K reviews" rating, "140 countries", Framer attribution.

---

## All Other Pages Spec

### `/why-bestonfx` (from Fizens About/Team)
Sections: Hero (positioning, compliant) → Trust pillars (transparency / risk education / Thai support / process) → DX ecosystem deep → Team (CMS, optional, real people only) → risk-first onboarding "how it works" → LINE CTA → footer. Motion: M4/M5 throughout, M1-lite hero. Remove fake awards.

### `/accounts` (from Fizens Pricing)
Sections: Hero → Account comparison (placeholder values, same as H3 but full) → fees/commission table (`รอยืนยัน`) → risk note block (amber) → "how to open" steps → LINE/demo CTA. **No spread/leverage/commission numbers** until approved.

### `/markets` (from Fizens Features)
Sections: Hero → instrument categories (Forex/Metals/Indices/Crypto-CFD) → live ticker (placeholder) → "trading conditions" placeholder → risk note → CTA. Each instrument: education, not price promises.

### `/tools` (from Fizens Features detail)
Sections: Hero → tools grid (calculators) → per-tool preview cards (Demo/Coming soon) → AI Help Center teaser → CTA. Calculator outputs show risk note before/after result.

### `/partners` (IB landing)
Sections: Hero (partner value) → IB program steps → commission estimator (disclaimer) → partner trust/tracking → FAQ (IB) → apply CTA (LINE/form). All income framing = examples, never guarantees.

### `/partners/dashboard` (placeholder)
Single auth-gated placeholder page; "POC — no live commission data" banner; mock tiles only. Tag `visual-only`.

### `/support` (from Fizens Contact)
Sections: Hero → LINE-first block (QR + add friend) → Help Center categories → contact form (no advice intake) → FAQ → footer. Note: no personalized trading advice.

### `/legal/risk-disclosure`
Long-form compliant doc page: full risk disclosure, CFD/leverage explanation, product warnings, "not suitable for everyone", company placeholder. Sticky risk bar + footer. Plain layout, high readability. **Legal review required before publish.**

### `/admin` + `/404`
Admin = placeholder behind auth (tag `rebuild-in-next`). 404 = rebrand Fizens 404 light+blue, link home + LINE.

---

## Asset Generation Plan
`[Higgsfield: web-verified Soul 4K + 30+ models + video ≤15s · conf:high. All assets LIGHT + royal-blue ambient, NO gold/dark-navy.]`

| ID | Asset | Type | Tool | Prompt / spec | Dimensions/format | Placement |
|---|---|---|---|---|---|---|
| A1 | Hero terminal device | 2D | Higgsfield Soul (img) | "Premium light-mode fintech trading dashboard on a floating tablet, royal-blue (#0040c1) accents, soft blue ambient glow, white glass cards, risk-meter + price rows, clean Thai-friendly UI, institutional, NOT casino, studio product lighting, 4K" | 1600×1200 PNG transparent | Hero right (H1) |
| A2 | Brand bloom ellipse | 2D | Higgsfield / CSS | soft radial `#0040c1` glow, transparent, heavy blur | 1200×1200 PNG | behind hero device (M1) |
| A3 | Trust icons ×3 | 2D | `craftwork` MCP / lucide | clarity, shield-check, line-chat — brand-600 stroke | SVG 48px | H2 |
| A4 | Tool icons ×6 | 2D | lucide / Craftwork | calculator/calendar/risk/cost/help | SVG | H5 |
| A5 | DX ecosystem visuals ×3 | 2D | Higgsfield Soul | light abstract cards for Academy/Trade/Exclusive, royal-blue, premium | 1000×750 | H6 |
| A6 | LINE chat mockup | 2D | Figma/Higgsfield | light LINE chat UI, green accents, Thai sample (compliant) | 800×1000 | H7 |
| A7 | Hero ambient loop (optional) | Video | Higgsfield (Kling/Veo ≤15s) | slow light particle/grid drift, royal-blue, looping, subtle | 1920×1080 MP4/WebM ≤6s loop | Hero bg (perf-gated) |
| A8 | Floating glass orbs ×2 (**recommended** — reference) | 3D or 2D | Spline (embed URL) or Higgsfield Soul | minimal royal-blue glass orbs, slow rotate, subtle inner glow, transparent bg | Spline URL / 800×800 PNG | Hero L+R (M14) |
| A10 | Light particle sprite | 2D | Higgsfield / CSS | tiny soft blue sparkles, transparent, loopable | 600×600 PNG / sprite | around orbs (M14) |
| A9 | OG/social image | 2D | Higgsfield | BestonFX light brand, logo + tagline | 1200×630 | meta |

> Optional A7/A8 only if perf budget holds (≤200KB initial, video lazy + paused on reduced-motion). `[framer-expert-builder · conf:high]`

---

## Component Sourcing Plan

### Build via Workshop / `createCodeFile` (re-spec'd light+blue)
| Component | Brief (light+blue) |
|---|---|
| **RiskDisclosureBar** | sticky amber bar, props `message/linkText/linkUrl/showIcon`, 1-line desktop / 2-line mobile |
| **PremiumTradingHero** | 2-col, light surface, brand bloom, device mock, CTA ladder, amber risk note, props `headline/subheadline/primaryCta/secondaryCta/riskNote` |
| **TrustStackCards** | 3-col white cards, brand-50 chips, props array `{icon,title,desc}` |
| **AccountComparisonPreview** | comparison w/ placeholder values, compliance note, brand-600 dividers |
| **TradingToolsGrid** | tool cards + status pills, CTA |
| **LineSupportCTA** | LINE mock + QR placeholder, green accents, compliance note |
| **IBCommissionEstimatorMock** | inputs→estimate, mandatory disclaimer, count-up disabled |
| **AIChatBotMock** | floating button + panel, suggested Qs, in-chat disclaimer |
| **LivePriceTicker** | marquee strip, placeholder symbols, "not real-time" label |
| **CursorParallax (override)** | M3 pointer-depth override, touch/reduced-motion guard |

### Source via `craftwork` MCP / framer.university (search terms)
- framer.university: "scroll parallax section", "sticky condensing navbar", "marquee logo ticker", "FAQ accordion", "count-up stat" `[framer.university/resources · conf:med]`
- `craftwork` MCP: light fintech icon set, royal-blue illustration spots, device mockup frames.
- **Unframer CLI** (only at export): `npx unframer {projectId} --outDir ./src/framer` → typed React for sections tagged `reuse-in-next`. `[github.com/remorses/unframer · conf:high]`
- **Spline**: embed orb via Insert → Utility → Embed (paste viewer URL) or SplineEmbed component. `[docs.spline.design · conf:high]`

---

## Copywriting Review (per-page keep/rewrite/add + SEC pass)

| Page | Keep | Rewrite | Add |
|---|---|---|---|
| Home | repo hero H1/sub/risk note, trust cards, tool list | every Fizens consumer line ("financial freedom", "millions of users") | sticky risk bar, ticker "not real-time" label |
| Why | positioning | About fluff | DX ecosystem + process |
| Accounts | comparison rows | Fizens "$0/$20/$40" pricing | placeholder + compliance note |
| Markets | instrument names | "see your wealth grow" | risk note per category |
| Tools | calculator names | — | output risk notes |
| Partners | IB steps | income claims | estimator disclaimer |
| Support | LINE copy | contact fluff | no-advice note |
| Legal | — | — | full disclosure (legal review) |

**Promo-compliance pass (founder stance: international reg + Thai-market benchmark, NOT Thai SEC) — banned + required:**
- Banned (block on `compliance:scan`): `กำไรแน่นอน, ไม่ขาดทุน, ไร้ความเสี่ยง, risk-free, guaranteed profit, win rate 100%, แม่น 100%, รายได้แน่นอน, รวยเร็ว, เปลี่ยนชีวิต, อันดับ 1, ดีที่สุด`. (Kept regardless of jurisdiction — universal + international-required, not Thai-SEC-specific.)
- Replace per `docs/compliance-copy-rules.md` safer-replacement table.
- **Required risk-warning placement:** sticky bar (every page) · hero note (Home/Accounts/Markets/Partners/DX) · calculator outputs · bot answers · footer (every page).
- **Benchmark (Thai market):** offshore brokers serving Thailand (XM/Exness/FBS/IC Markets) show standardized high-risk warnings + no Thai-SEC claim → mirror that; "no Thai SEC licence" is the norm, not a flag. `[fxempire/exem · conf:med]`
- **International convention (the bar):** FCA/CySEC/ASIC require a prominent high-risk warning; a firm-specific **"XX% of retail investor accounts lose money"** (68–89% range) applies **only** once a regulated entity + figure exist `[fca/financemagnates · conf:med]`. Until then use the generic `mandatoryRiskWarning`.
- Gate {regulatory status, license, spread, commission, leverage, account terms, payout, community size, awards, FTMO ranking, performance} behind `claim_registry` — for **accuracy**, not Thai-SEC fear.

---

## Claude Code Build Sequence (deterministic)

| Step | Skill to load | MCP/tool | Action | Depends on |
|---|---|---|---|---|
| 0 | `skill-creator` | filesystem | Scaffold `forex-promo-compliance` + `bestonfx-framer-build-sop` (seed from this doc) | — |
| 1 | `bestonfx-framer-build-sop` | Framer (manual) | Duplicate Fizens → `BestonFX Framer POC v0.2 (light+blue)`; keep original backup | 0 |
| 2 | `bestonfx-framer-build-sop` | Framer MCP `getProjectXml`, `getCMSCollections` | **Read-only audit**: pages, components, section order, risky copy. Output proposed edit map. **Do not edit.** | 1 |
| 3 | `bestonfx-framer-build-sop` | Framer MCP `manageColorStyle`, `manageTextStyle`, `searchFonts` | Create brand/ink/surface/line/amber styles + Prompt type styles. No layout flatten. | 2 |
| 4 | `higgsfield-expert`/web + `creative-design-director` | Higgsfield CLI/MCP, Spline, `craftwork` | Generate A1–A9; upload to Framer assets | 3 |
| 5 | `framer-expert-builder` | Framer MCP `createPage` | Create BestonFX routes from Fizens templates | 2 |
| 6 | `framer-expert-builder` | Framer MCP `createCodeFile` | Build new components (RiskBar, Ticker, Estimator, ChatBot, CursorParallax) | 3,4 |
| 7 | `framer-expert-builder` | Framer MCP `updateXmlForNode`, `getNodeXml` | Section edits **one at a time**, Home first (H0→H10) | 5,6 |
| 8 | `framer-expert-builder` | Framer editor / overrides | Wire motion M1–M11 (Effects/Scroll Transforms native; M3/M6/M8 overrides) | 7 |
| 9 | `content-creator` + `forex-promo-compliance` | Framer MCP `updateXmlForNode` | Apply compliant Thai copy; show copy-map (nodeId\|old\|new\|note) before applying | 7 |
| 10 | `framer-expert-builder` | Framer MCP `createCMSCollection`, `upsertCMSItem` | Articles/Markets-insights CMS | 5 |
| 11 | `forex-promo-compliance` | repo `npm run compliance:scan` + manual | Compliance + QA pass | 9 |
| 12 | `bestonfx-framer-build-sop` | Framer MCP `exportReactComponents` / `unframer` | Export sections tagged `reuse-in-next` → Next.js (after stakeholder approval) | 11 |

---

## QA & Conversion Checklist
- **Trust signals:** sticky risk bar live on every page · footer disclosure · "concept/POC" honesty · no fake stats/reviews/awards.
- **Breakpoints:** Desktop 1200 / Tablet 768 / Phone 390 — hero stacks copy→device; ticker readable; CTAs thumb-reachable; risk bar wraps 2-line mobile.
- **Animation perf:** transform+opacity only; ≤3 scroll layers; M3 off on touch; `prefers-reduced-motion` honored; initial JS < 200KB; video lazy.
- **Accurate-info:** every number = placeholder until `claim_registry`; ticker "not real-time"; no regulatory/license text.
- **Conversion paths wired:** primary `เปิดบัญชีทดลอง→/accounts`; LINE→`NEXT_PUBLIC_LINE_OA_URL`; IB→/partners; bot→LINE escalation. Every CTA has a destination.
- **Compliance sign-off:** `compliance:scan` passes · risk warnings placed · banned phrases zero · legal page reviewed.

---

## Risks & Compliance Flags (ranked)
1. **🔴 Accuracy / unverified claims** — pre-launch, no approved spread/leverage/regulatory/community facts (repo). **Mitigation:** `claim_registry` gating, `รอยืนยัน` placeholders, `compliance:scan` in CI, no-guarantee hygiene. *(Thai SEC is **not** the gate — offshore is the market norm `[fxempire · conf:med]`; match international-reg convention instead.)*
2. **🟠 International-reg risk-warning alignment** — an FCA/CySEC/ASIC entity must use prescribed wording + show firm-specific "XX% of retail accounts lose money" (68–89%) `[fca/financemagnates · conf:med]`. **Mitigation:** design the risk-warning slot now; fill the % only when a regulated entity + figure exist.
3. **🟠 Brand drift** — Fizens is playful consumer fintech; risk of casino tone. **Mitigation:** broker-sober tokens, remove stats/testimonials, restrained motion.
4. **🟠 "FTMO #1 coach" / DX claims** — unverified superlatives (banned: `อันดับ 1`). **Mitigation:** Open Question; needs source/award body/date.
5. **🟠 Over-motion / scroll-jacking** — "wow every page" risks motion sickness, jank, and *less* trust (broker = sober). **Mitigation:** ≤1–2 anim/view, tiered immersion (see Immersive Fit per Page), no scroll-jack, reduced-motion + mobile fallback `[ui-ux-pro-max · conf:high]`.
6. **🟡 Reference clip absent** — motion derived from named effects only. **Mitigation:** validate vs real clip before sign-off.
7. **🟡 Framer MCP scope** — multiple MCP implementations; exact tool behavior varies `[conf:med]`. **Mitigation:** read-only audit first (step 2), edit one section at a time.

---

## Open Questions (founder-only)
1. **CTA — RESOLVED:** primary `เปิดบัญชี` + secondary `ทัก LINE OA / ติดต่อ admin`. Remaining: add a deposit CTA once deposit terms are approved?
2. **DX claims** — is "FTMO #1 coach" sourced/approved? Any verifiable award/community number for use?
3. **Reference motion** — a still frame was provided + analyzed (M12–M14 added). If a **moving clip** exists, share it to validate exact loop/parallax *timings* (current timings are inferred from one frame).
4. **LINE OA URL** — production `NEXT_PUBLIC_LINE_OA_URL`?
5. **Regulatory entity** — any licensed entity/jurisdiction approved for footer, or stay full-placeholder?
6. **Account tiers** — confirm Standard/Pro/IB naming + which conditions (if any) are approved to show.
7. **Loss-% disclosure** — will a regulated entity (FCA/CySEC/ASIC) require showing "XX% of retail accounts lose money"? If yes, supply the figure; if no, generic high-risk warning only.

---

### ▶ Recommended first action for Claude Code
**Run Build Sequence Step 0 + 1 only:** load `skill-creator`, scaffold the two gap Skills (`forex-promo-compliance`, `bestonfx-framer-build-sop`) seeded from this doc, then duplicate Fizens into `BestonFX Framer POC v0.2 (light+blue)` and stop for a read-only `getProjectXml` audit before any edit.
