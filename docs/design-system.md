# Design System: carsoreo.github.io

The single source of truth for how Carson Orejola's resume site looks and moves. It combines the layout and motion lessons from [ui-teardown.md](ui-teardown.md) (Tanium and Cisco) with Carson's own palette and fonts.

**Direction:** *modern, yet natural.* The structure is crisp and confident like Tanium and Cisco: bold headlines, pill buttons, dark proof panels and big stats. The colors are borrowed from nature instead of corporate red and blue: deep water blue, sea green, sage and soft lemon light.

---

## 1. Color

The four brand colors come from Sanzo Wada's *A Dictionary of Color Combinations*. Hex values are from the [mattdesl/dictionary-of-colour-combinations](https://github.com/mattdesl/dictionary-of-colour-combinations) dataset. Two neutrals are added so text stays readable.

| Token | Name | Hex | Role |
|-------|------|-----|------|
| `--blue` | Antwarp Blue | `#007190` | **Primary.** Buttons, links, eyebrows on light backgrounds. |
| `--green` | Benzol Green | `#00978D` | **Secondary.** Large accents, icons, hover states, gradient partner to blue. |
| `--sage` | Cobalt Green | `#96D1AA` | **Soft accent.** Tag chips, dark-mode accent, card glow. |
| `--lemon` | Pale Lemon Yellow | `#FFEFAE` | **Highlight.** Stat numbers on dark, text highlight, tiny sparks. Use sparingly. |
| `--ink` | Deep Lagoon *(neutral)* | `#0D2B33` | Headings, body text on light, and dark-section background. |
| `--paper` | Paper *(neutral)* | `#FBF8EF` | Page background in light mode. |

Supporting tints, derived from the above:

| Token | Hex | Use |
|-------|-----|-----|
| `--muted` | `#4A5F63` | Secondary text on paper. |
| `--line` | `#E3E6DE` | Hairlines and card borders in light mode. |
| `--ink-2` | `#12363F` | Raised card surface inside dark sections. |
| `--muted-dark` | `#9DB3B0` | Secondary text on ink. |

### Contrast rules (WCAG, measured)

| Pairing | Ratio | Allowed for |
|---------|-------|-------------|
| Ink on Paper | 14.0 | Everything. |
| Muted on Paper | 6.4 | Body and secondary text. |
| Antwarp Blue on Paper | 5.3 | Body text, links, buttons (Paper text on Blue is also 5.3). |
| Benzol Green on Paper | 3.4 | **Large text (24px+) and icons only.** Never body copy. |
| Sage on Ink | 8.5 | Any text in dark sections. |
| Lemon on Ink | 12.9 | Any text in dark sections. |
| Benzol Green on Ink | 4.1 | Large text and icons only. |
| Muted-dark on Ink | 6.7 | Secondary text in dark sections. |

### Light / dark

- **Light mode (default):** Paper page, Ink text, Antwarp Blue actions.
- **Dark mode** (`prefers-color-scheme: dark`): the page becomes Ink, text becomes `#E8F0EC`, Sage becomes the action color with Ink text on it, and Lemon is kept for highlights.
- **Dark sections in light mode:** the hero and the proof panel are always Ink, like Cisco's cinematic dark blocks and Tanium's navy proof card.

### Signature effects

- **Hero glow:** two blurred radial gradients on Ink, Benzol Green at the top left and Antwarp Blue at the bottom right, around 35% opacity. It's the "natural light through water" version of Cisco's glowing ribbons.
- **Card light:** `radial-gradient(120% 80% at 50% 0%, rgba(150,209,170,.10), transparent)` on dark cards, lit from the top like Cisco.
- **Gradient text (one place only):** the hero name can use `linear-gradient(90deg, #96D1AA, #FFEFAE)` on Ink.

---

## 2. Typography

| Use | Font | Weight | Size (desktop → mobile) | Line height | Tracking |
|-----|------|--------|-------------------------|-------------|----------|
| Hero name (H1) | **Space Grotesk** | 700 | 80px → 48px (`clamp(48px, 9vw, 80px)`) | 1.0 | −0.03em |
| Section title (H2) | Space Grotesk | 700 | 44px → 32px | 1.1 | −0.02em |
| Card / role title (H3) | Space Grotesk | 600 | 20px | 1.3 | −0.01em |
| Stat number | Space Grotesk | 700 | 56px → 40px | 1.0 | −0.03em |
| Eyebrow | Inter | 600 | 13px, UPPERCASE | 1.4 | +0.12em |
| Body | **Inter** | 400 | 17px | 1.65 | 0 |
| Lede / intro | Inter | 400 | 20px → 18px | 1.6 | 0 |
| Meta (dates, company) | Inter | 500 | 15px | 1.5 | 0 |
| Button | Inter | 600 | 15px | 1 | 0 |

- Load from Google Fonts: `Space Grotesk:wght@500;600;700` and `Inter:wght@400;500;600`.
- Headings follow Tanium's lead: heavy and tightly tracked. Body copy follows Cisco's: quiet and roomy.
- Body text is never pure black. Use Ink or Muted.

---

## 3. Layout

- **Content width:** 1120px max, with 24px side gutters (16px under 400px). Text columns are capped at about 640px.
- **Spacing scale (px):** 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128.
- **Section padding:** 96px top and bottom on desktop, 64px on mobile.
- **Radii:** buttons and chips use a full pill (999px). Cards are 16px, and the large proof panel is 24px.
- **Borders:** 1px `--line` on light. On dark, `rgba(255,255,255,.08)`, as on Cisco.
- **Shadows:** almost none. Cards lift on hover with `0 18px 40px -24px rgba(13,43,51,.45)`.

---

## 4. Page structure

| # | Section | Background | Borrowed from | Content |
|---|---------|------------|---------------|---------|
| 1 | **Nav** | Paper, 85% opacity, blurred, sticky | Tanium | Wordmark on the left. Links: Experience · Projects · Certifications · Contact. A small "Get in touch" pill on the right. |
| 2 | **Hero** | **Ink + glow** | Cisco hero, Tanium headline | Eyebrow "TECHNICAL SUPPORT ENGINEER · DURHAM, NC", then the name, a lede, a solid pill and an outline pill. |
| 3 | **Stats strip** | Ink, continuing the hero | Cisco "global scale" | **93%+** CSAT · **5** certifications · **2+ yrs** at Tanium · **3** roles in tech. Stat numbers in Lemon. |
| 4 | **Experience** | Paper | Tanium feature rows | Each role has a date column, title, company and bullets. A small Benzol Green dot marks a timeline line. |
| 5 | **Project** | Paper | Tanium split block | One wide card for the SAS app, with tech chips in Sage. |
| 6 | **Certifications** | **Ink proof panel**, 24px radius, card light | Tanium "Named a Leader" card | Eyebrow "VERIFIED", the H2, then a 2×2 grid of cert tiles. |
| 7 | **Worked with** | Paper | Tanium logo marquee | A slow marquee of names in muted Space Grotesk: Tanium · Cisco · NC State. |
| 8 | **Education & skills** | Paper | (none) | Degree, plus a skill chip cloud. |
| 9 | **Contact / closing CTA** | Paper-tinted panel (`#F3F0E4`), 24px radius | Tanium closing band | A big centered H2 "Let's build something reliable.", then email and LinkedIn pills. |
| 10 | **Footer** | Paper | (none) | © year · Built by Carson. |

Skipped on purpose: mega-menus, tabs, carousels and cookie banners. They're too heavy for a one-page resume.

---

## 5. Components

**Buttons**
- *Primary:* Antwarp Blue background, Paper text, pill, padding 14px 24px. Hover darkens to `#005E78`, lifts 2px and adds a blue glow shadow.
- *Outline:* transparent with a 1px `--line` border (white/12% on dark). Hover changes the border to Benzol Green.
- *On dark:* primary becomes Sage with Ink text.
- An optional trailing → arrow slides 3px right on hover, as on Tanium.

**Eyebrow:** Inter 13px/600, uppercase, +0.12em tracking. Antwarp Blue on light, Sage on dark. Every H2 gets one.

**Chips:** pill with Sage at 25% opacity behind, Ink text, 13px/500. On dark: Sage at 15% with Sage text.

**Cards:** 16px radius, 1px border, Paper or white surface. Hover lifts 4px, the border turns Benzol Green and the shadow appears.

**Stat:** a Space Grotesk 700 number above an Inter 14px muted label.

---

## 6. Motion

All motion respects `prefers-reduced-motion: reduce`. With it on, there are no animations and in-page links jump instantly.

| Token | Value | Source |
|-------|-------|--------|
| `--ease-out` | `cubic-bezier(.22, 1, .36, 1)` | Reveals and glides (soft landing). |
| `--ease-std` | `cubic-bezier(.4, 0, .2, 1)` | Hovers (Tanium and Cisco standard). |
| Hover duration | 200–300ms | Tanium. |
| Reveal duration | 700–800ms | Cisco `fadeInUp .8s`. |

| Interaction | Spec |
|-------------|------|
| **Page load** | Nav, then each hero line rises 24px and fades in, staggered 100ms. |
| **Scroll reveal** | Elements rise 28px and fade in over 800ms with `--ease-out`. Siblings in a grid stagger 80ms. They trigger when 10% inside the viewport. |
| **Scale reveal** | Cert tiles and the project card also scale from 0.97 to 1, as on Cisco. |
| **Hero glow** | The two glow blobs drift slowly, 20s alternate, translating ±20px. Barely noticeable. |
| **Marquee** | "Worked with" strip, 40s linear infinite. It pauses on hover. |
| **Stat count-up** | Numbers count from 0 when revealed, over 1.2s with `--ease-out`. |
| **Hover** | Buttons lift 2px, cards lift 4px, arrows slide 3px. All 250ms with `--ease-std`. |
| **Nav underline** | Grows from the left in 350ms. The current section's link stays underlined (scroll-spy). |
| **In-page links** | Glide with an ease-in-out cubic over 600–1400ms depending on distance, offset 72px for the sticky nav. Scrolling by the user cancels the glide. |

---

## 7. Do / Don't

- **Do** keep one primary action per section.
- **Do** put an eyebrow above every H2.
- **Do** use Benzol Green and Lemon as accents only.
- **Don't** set body text in Benzol Green or Lemon on Paper. It fails contrast.
- **Don't** use pure black or pure white. Use Ink and Paper.
- **Don't** add more than one gradient-text element.
- **Don't** let anything move longer than 1.4s, except the ambient glow and marquee.
