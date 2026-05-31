# Sitemap — beston

_Last updated: 2026-06-01. Source priority: `docs/research/bestonfx-framer-source-of-truth-2026-06-01.md` + this file + `docs/wireframes/pages/*.md`._

> Forex/CFD broker for Thai retail traders. Rebate-focused, MT5, LINE-first conversion.
> **Conversion spine:** every primary page funnels to **`เปิดบัญชี`** (open account) or **`ทัก LINE OA ติดต่อ admin`**.
> Routes mirror the Next.js app router in `src/app/(public)/` + the Framer × Fizens redesign handoff.

> **Important:** `docs/framer-poc-map.md` is Fizens inventory/legacy mapping. It must not override this sitemap or the page wireframes.

---

## Structure overview

```
beston
│
├── / .......................... Home — convert: brand + value prop → เปิดบัญชี / LINE
│
├── PRIMARY NAV (persuade → transact)
│   ├── /why-bestonfx .......... Why beston — trust story, regulation, "why us vs offshore brokers"
│   ├── /markets ............... Markets — what you can trade (FX, metals, indices, oil, crypto)
│   ├── /accounts .............. Accounts — Standard vs Demo Account → self-select → เปิดบัญชี / LINE
│   ├── /tools ................. Tools — platforms (MT5) + calculators (rebate, pip, margin)
│   └── /partners .............. Partners (IB) — referral/commission program for affiliates
│
├── SUPPORT & CONTENT
│   ├── /support ............... Support — LINE-first help, channels, contact, hours
│   └── /articles .............. Articles — education/blog (CMS), SEO + return visits
│       └── /articles/[slug] ... Article detail (CMS)
│
├── CONVERSION (external app — out of scope for wireframes, linked)
│   ├── traders.bestonfx.com/register ... เปิดบัญชี [⚠ not yet linked]
│   ├── traders.bestonfx.com/login ...... เข้าสู่ระบบ [⚠ not yet linked]
│   └── traders.bestonfx.com/demo ....... ทัก LINE OA ติดต่อ admin [⚠ verify URL]
│
└── UTILITY / FOOTER (inform, low-immersion)
    ├── /legal/risk-disclosure . Risk disclosure — full risk warning (compliance-mandatory)
    ├── /legal/terms ........... Terms of service [⚠ to be written]
    ├── /legal/privacy ......... Privacy / AML-KYC notice [⚠ to be written]
    ├── /regulatory-disclosures  License details + entity info [⚠ to be written]
    └── /404 ................... Not found
```

---

## Page index with purpose statements

### Home & primary navigation

| Route | Page | One-line purpose |
|---|---|---|
| `/` | **Home** | Land, build trust in <5s, route the visitor to the right account or to LINE. |
| `/why-bestonfx` | **Why beston** | Answer "why trust this broker?" with regulation, transparency, and Thai-first care. |
| `/markets` | **Markets** | Show the breadth of tradable instruments so visitors see their market is covered. |
| `/accounts` | **Accounts** | Let visitors choose between Standard and Demo Account → highest-intent path to เปิดบัญชี / LINE. |
| `/tools` | **Tools** | Prove the platform (MT5) + give interactive calculators that create commitment. |
| `/partners` | **Partners (IB)** | Recruit introducing brokers/affiliates with a clear commission model + estimator. |

### Support & content

| Route | Page | One-line purpose |
|---|---|---|
| `/support` | **Support** | Make help reachable in one click; LINE-first for Thai users. |
| `/articles` | **Articles** | Educate (MT5, risk, rebate) → SEO entry points + repeat visits + soft trust. |
| `/articles/[slug]` | **Article detail** | Long-form education page (CMS); ends with a soft conversion CTA. |

### Utility / footer (justified below)

| Route | Page | One-line purpose |
|---|---|---|
| `/legal/risk-disclosure` | **Risk disclosure** | Full mandatory risk warning — legal requirement, linked from every page. |
| `/legal/terms` | **Terms** | Contractual terms of service. `[to be written]` |
| `/legal/privacy` | **Privacy / AML-KYC** | Data + AML/KYC handling notice. `[to be written]` |
| `/regulatory-disclosures` | **Regulatory disclosures** | License numbers + regulated-entity details. `[to be written, verify]` |
| `/404` | **Not found** | Recover lost visitors with quick links back to primary pages. |

---

## Hierarchy rationale (why this structure, not more/less)

1. **Six primary nav items, not ten.** Forex brokers tend to sprawl (Centroid-style 100+ pages). beston deliberately keeps primary nav to the six decisions a trader actually makes: *why trust you · what can I trade · which account · what tools · partner program · get help*. Everything else is footer/utility. Fewer choices = higher conversion.

2. **`/accounts` is the conversion hub, not `/`.** Home persuades; Accounts is where self-selection happens. The whole site funnels here or to LINE. This is why AccountComparison appears on both Home (preview) and Accounts (full).

3. **`/why-bestonfx` exists as a standalone page** (not folded into Home) because trust is the #1 objection for an offshore broker serving Thailand. It needs room for regulation, transparency, and the "no fake stats" honesty angle — more than a Home section allows.

4. **`/tools` separated from `/markets`** — Markets answers *"is my instrument here?"* (breadth), Tools answers *"is the platform good + will it pay off?"* (depth + interactivity). Merging them buries the calculators that drive engagement.

5. **`/partners` (IB) is primary nav, not footer** — introducing brokers are a major acquisition channel for forex; the program deserves a real page with an earnings estimator, not a footer link.

6. **Education lives at `/articles`, no separate `/academy` route** — per validated content rules, the main site has articles, not a separate Academy menu (DX Academy is a sibling brand, linked, not nested). Keeps scope honest.

7. **Legal cluster under `/legal/*`** — risk disclosure, terms, privacy grouped under one namespace. Risk disclosure is the only one that's also surfaced site-wide (sticky bar + footer) because regulators require it above the fold.

8. **Conversion app is external** (`traders.bestonfx.com`) — register/login/demo are a separate trading-platform domain, so they're linked CTAs, not wireframed pages here. Flagged `[⚠ not yet linked]` so build doesn't ship dead buttons.

---

## Navigation model

- **Primary nav (Navbar):** Why beston · ตลาด · บัญชี · เครื่องมือ · พาร์ทเนอร์ · ช่วยเหลือ + persistent `เปิดบัญชี` pill + `เข้าสู่ระบบ`.
- **Utility (Footer):** company · products · help · legal · social/ทัก LINE OA ติดต่อ admin+ full risk block.
- **Persistent everywhere:** RiskDisclosureBar (top, sticky) + AIChatWidget (floating) + Footer.

---

## Files in this deliverable

```
docs/wireframes/
├── sitemap.md            ← this file
├── components.md         ← reusable section library (read first)
└── pages/
    ├── home.md
    ├── why-bestonfx.md
    ├── markets.md
    ├── accounts.md
    ├── tools.md
    ├── partners.md
    ├── support.md
    ├── articles.md
    └── legal-risk-disclosure.md
```
