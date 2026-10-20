# UI Teardown: Tanium & Cisco

Inspiration for Carson Orejola's resume site. Captured 2026-10-19 from the live homepages at a 1440×900 desktop viewport. Colors, type sizes and animation timings were read from the computed styles. Section layouts are from screenshots and the page structure.

---

## 1. tanium.com

**Overall feel:** bright, corporate and confident. White pages with very heavy black headlines, one strong red for every action, and deep navy for "serious" moments such as proof, analyst recognition and the top bar.

### Layout & sections (top to bottom)

| # | Block | What it does |
|---|-------|--------------|
| 1 | **Announcement bar** | A thin deep-navy strip above the nav with a red dot, a one-line headline and a link. |
| 2 | **Sticky nav** | White. Logo left, mega-menu dropdowns center, a red pill "See a demo" CTA right. |
| 3 | **Hero (split)** | Left: a maroon uppercase eyebrow, a huge 4-line headline, one paragraph and one red CTA with a → arrow. Right: a product dashboard screenshot. A soft lavender-to-white gradient sits behind it. |
| 4 | **Logo trust bar** | Customer logos in an endless horizontal marquee. |
| 5 | **Feature split** | Eyebrow + H2, a screenshot on the left, and 2–3 feature rows on the right, each with a small red icon, a bold title and a short line. |
| 6 | **Centered statement** | A big 3-line centered H2 ("One platform…"), a subline and a CTA, then **tabs** (Endpoint Management / Exposure / Security Ops) that swap content below. |
| 7 | **Dark proof card** | A wide rounded navy card. Left: eyebrow, H2 "Named a Leader…", copy and a red button. Right: analyst logo tiles in colored blocks. |
| 8 | **Integrations / proof grid** | Short section headers with card grids. |
| 9 | **Closing CTA band** | A light grey rounded panel with a centered eyebrow and a huge headline ("The next zero day is already being written."). |

### Typography

- **One family: Inter** for everything.
- H1: 60px / 800 / line-height 1.0 / letter-spacing −1.2px (−0.02em).
- H2: 48px / 800 / −0.96px.
- H3: 20px / 800.
- Eyebrow: 14px / 500 / UPPERCASE / maroon.
- Body: 16px / 400 / 24px line-height, dark grey `#4A4949` (not pure black).
- **Takeaway:** extra-bold, tightly tracked headlines against calm grey body copy create the drama.

### Color (most-used computed values)

| Role | Hex |
|------|-----|
| Primary action red | `#E01A33` |
| Red hover / deep | `#C10000` |
| Eyebrow maroon | `#751323` |
| Navy (bars, dark cards) | `#101842` |
| Navy, deeper | `#0D1337` / `#0A0F2B` |
| Navy, lighter | `#262D53` |
| Headline ink | `#000000` |
| Body grey | `#4A4949` |
| Divider | `#DDDDDD` |
| Page | `#FFFFFF` |

### Shape

- Small radii (4–8px) on cards and images.
- Fully rounded pills on buttons.
- Max content width **1280px**. Text columns are capped around 560–690px.

### Motion

- **Logo marquee:** `trustbar-marquee 70s linear infinite`, a slow, constant drift.
- **Every hover** uses Tailwind's standard ease `cubic-bezier(0.4, 0, 0.2, 1)`:
  - color and background: 150–300ms
  - transforms (lift or scale): 150–300ms
  - menus open with `opacity + transform + max-height`, 300ms, ease-out `cubic-bezier(0, 0, 0.2, 1)`
- Motion is restrained. Interactions feel snappy, not floaty.

---

## 2. cisco.com

**Overall feel:** cinematic and dark. A near-black page with white medium-weight type, glowing abstract artwork and electric blue accents. Premium and "tech-forward."

### Layout & sections (top to bottom)

| # | Block | What it does |
|---|-------|--------------|
| 1 | **Utility bar + nav** | A white top nav with small links. An outlined pill CTA sits right. |
| 2 | **Promo strip** | A one-line H2 (14px/600) announcement with a link. |
| 3 | **Full-bleed hero** | A black background with large glowing abstract light ribbons. Left: H1 "The critical infrastructure for the AI era" (60px/500), a solid pill CTA and an outlined pill CTA. |
| 4 | **Trust statement** | An H2 at 32px ("Trusted by 99% of leading enterprises…") above a logo row. |
| 5 | **"Market-defining technologies"** | An H2 at 48px, then a large feature panel (H3 32px "Cisco Cloud Control"). |
| 6 | **Outcomes list** | An H2 at 48px, then 3 stacked items (H3 20px) that expand like an accordion: AI-ready data centers, Future-proofed workplaces, Digital resilience. |
| 7 | **Global stats** | An H2 "Global scale. Unified technology." with large numbers. |
| 8 | **Case-study carousel** | An H2 at 48px, then big image cards (Nestlé, McLaren F1, Tripadvisor), each with an H2 at 32px and a link. |
| 9 | **News grid** | "The latest from Cisco": 4 cards in a row, H3 20px/400. |
| 10 | **Closing CTA** | "Take your next steps": H2 48px with action tiles. |

### Typography

- **Inter**, with Cisco Sans as a fallback.
- H1: 60px / **500** / line-height ~1.13.
- H2: 48px / 500 for sections, and 32px / 500 for sub-features.
- H3: 20px / 400–500.
- Body: 14–16px / 400.
- **Takeaway:** medium weight at large sizes looks *calm and premium*. That's the opposite of Tanium's 800 weight. White text on black does the drama instead.

### Color

| Role | Hex |
|------|-----|
| Page background (dark sections) | `#000000` |
| Ink (light sections) | `#07182D` |
| Primary blue (links, buttons) | `#0A60FF` |
| Cisco cyan (brand accent) | `#00BCEB` |
| Secondary text | `#536070` |
| Light surfaces | `#F0F0F0` / `#F2F5F7` |
| Pale blue tint | `#CDDCF2` |
| Hairlines | `#E1E6EB` |

- **Signature effect:** a subtle radial glow on dark cards, `radial-gradient(… at 50% 0%, rgba(255,255,255,.06), rgba(255,255,255,.02))`. It lights the card from the top.

### Shape

- Pill buttons (`border-radius: 100px`).
- Cards 8–20px. Big media up to 48px.
- Thin 1px translucent white borders on dark cards (`rgba(255,255,255,.1)`).

### Motion

- **Scroll reveal:** `fadeInUp 0.8s ease-out` and `cds-fadeInUp 0.6s ease`. Sections rise and fade in as they enter.
- **Scale reveal:** `cds-fadeInScale 0.6s`. Cards grow slightly as they fade in.
- **Carousels and indicators:** `transform 0.5s ease-in-out`, plus sliding underline indicators (`inset-inline 0.5s ease-out`).
- **Focus and hover rings:** `border-color, box-shadow 0.333s cubic-bezier(0.4,0,0.2,1)`.
- **Accordion:** `height, opacity, padding 0.25s linear`.

---

## 3. What to borrow for the resume site

| Idea | Source | Use on Carson's site |
|------|--------|----------------------|
| Eyebrow above every H2 | Tanium | Small uppercase accent label, e.g. "EXPERIENCE · 4 YEARS IN TECH". |
| Extra-bold, tight headline | Tanium | Hero name. |
| Dark, glowing hero | Cisco | A dark hero section with a soft radial glow behind the name. |
| Navy proof card | Tanium | Certifications shown inside one dark rounded card. |
| Logo marquee | Tanium | A slow strip of "worked with" names: Tanium · Cisco · SAS · NC State. |
| Big stat numbers | Cisco | Stats row: **93%+** CSAT · **5** certifications · **4** roles/projects. |
| Pill buttons, solid + outline | Both | Primary "Get in touch" plus outline "LinkedIn". |
| Fade-up reveal at 0.6–0.8s | Cisco | Already in place. Keep the timings in this range. |
| Snappy hovers at 150–300ms, `cubic-bezier(.4,0,.2,1)` | Tanium | Buttons and cards. |
| Translucent 1px borders on dark cards | Cisco | Cards in dark mode. |

**What to skip:** mega-menus, cookie banners, carousels and tabs. They're too heavy for a one-page resume.
