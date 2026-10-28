# AfriYouth Innovation Labs — Minimalist Architectural Design System

This document specifies the **minimalist architectural design system**, **universal Clash Display typography**, and **warm gallery stone palette** for AfriYouth Innovation Labs, referencing the high-end consulting aesthetic of `https://palladio.framer.website/`.

---

## 1. Design Principles & Ethos

1. **Warm Stone Minimalism**: Grounded in natural gallery stone, ivory bone, and deep charcoal ink. Eliminates loud saturated gradients and heavy drop shadows in favor of 1px delicate hairlines and generous breathing room.
2. **Universal Clash Display Typography**: Every textual element—from 72px editorial display headlines down to 10px metadata pills and input fields—renders in **Clash Display** for a consistent, geometric, and sculptured identity.
3. **Restraint & White Space**: Generous vertical section rhythm (`py-24 sm:py-36`), 1200px max-width container, clean 1px hairline dividers, and high contrast.
4. **Outcome-Led & Concise**: Reduced prose with high visual emphasis on photography, quantitative proof-points, and clear 2-to-3 click user journeys.

---

## 2. Universal Typography: Clash Display

All text elements across the entire platform render using **Clash Display** via local `.woff2` font files in `public/fonts/` (Regular 400, Medium 500, Semibold 600, Bold 700).

```css
*, *::before, *::after, html, body, button, input, select, textarea, p, span, a, label, li {
  font-family: 'Clash Display', -apple-system, BlinkMacSystemFont, sans-serif !important;
}
```

### Typographic Hierarchy & Scale

| Step | Size | Line Height | Tracking | Weight | Usage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Editorial Display** | `56px`–`76px` | `1.05` | `-0.035em` | Bold 700 / 800 | Homepage hero statement, primary page headlines |
| **Section Title (H2)**| `36px`–`48px` | `1.15` | `-0.025em` | Bold 700 | Major section themes |
| **Card Header (H3)**  | `22px`–`28px` | `1.25` | `-0.015em` | Bold 700 | Program, service, and opportunity cards |
| **Telemetry Numerals**| `48px`–`64px` | `1.0` | `-0.03em` | Bold 700 | Quantitative impact counters (`48,500+`) |
| **Lead / Subhead**    | `18px`–`22px` | `1.6` | `-0.01em` | Regular 400 / Medium 500 | Section introductions, hero subheads |
| **Body Base**         | `15px`–`16px` | `1.65` | `normal` | Regular 400 | Article text, narrative paragraphs |
| **Metadata & Subtext**| `12px`–`14px` | `1.5` | `normal` | Medium 500 | Dates, cohort size, duration, authors |
| **Architectural Pill**| `10px`–`11px` | `1.2` | `+0.12em` | Semibold 600 | Uppercase kickers, category chips, tags |

---

## 3. Color Architecture: Warm Gallery Stone

Inspired by `palladio.framer.website`, the palette pairs warm architectural stone backgrounds with crisp white gallery cards, deep charcoal ink text, botanical green accents for sustainability and vitality, and terracotta for warm calls-to-action.

| Token | Variable | Hex Value | Role & Usage |
| :--- | :--- | :--- | :--- |
| **Stone 100 (Canvas)** | `--bg-stone` | `#F5F2EB` | Primary page background, warm bone/stone tint |
| **Stone 150 (Subtle)** | `--bg-stone-subtle` | `#EFECE4` | Alternating section background, subtle tint surfaces |
| **Stone 200 (Surface)**| `--stone-200` | `#E5E0D5` | Neutral badges, disabled states, subtle container fills |
| **Stone 300 (Hairline)**| `--border-hairline`| `#DCD7CC` | 1px clean architectural divider lines and card borders |
| **Charcoal Ink (Text)**| `--text-ink` | `#151619` | Primary headings, body copy, dark contrast blocks |
| **Charcoal Muted**    | `--text-muted` | `#5A5852` | Secondary body text, descriptions, footnotes |
| **Charcoal Light**    | `--text-light` | `#8C877D` | Uppercase category kickers, label headers |
| **Botanical Green**   | `--accent-botanical`| `#2F6B4F` | Live status indicators, success states, verified metrics |
| **Botanical Hover**   | `--botanical-600` | `#24543E` | Link hover states, primary interaction highlights |
| **Terracotta Accent** | `--accent-terracotta`| `#9C4930` | Warm editorial accents, grant values, secondary links |
| **Card White**        | `#FFFFFF` | `#FFFFFF` | Clean architectural gallery cards, form inputs |

---

## 4. Layout, Spacing & Container System

- **Max Container Width**: `1200px` (`max-w-container`), centered with fluid horizontal gutters (`px-6 sm:px-8 lg:px-12`).
- **Vertical Rhythm**: Generous whitespace inspired by Palladio (`py-24 sm:py-36` on major sections; `py-12 pb-20` on inner headers).
- **Hairlines**: Clean 1px bottom/top dividers (`.hairline-b`, `.hairline-t` using `#DCD7CC`) demarcating sections without heavy shadow breaks.
- **Card Radius**: `16px` (`rounded-card`) or `9999px` (`rounded-pill`) for pill badges and buttons.
- **Minimal Card Elevation**:
  ```css
  .minimal-card {
    background-color: #FFFFFF;
    border: 1px solid rgba(220, 215, 204, 0.8);
    box-shadow: 0 1px 3px 0 rgba(21, 22, 25, 0.04);
  }
  ```

---

## 5. Component Design Language

1. **Audience Selector**:
   - 3 equal-width architectural cards ("I am a young person", "I am an organization", "I am a partner").
   - Crisp step progression (1. Browse → 2. Apply) leading directly to conversion.
2. **Integrated Nexus Visual**:
   - Interactive editorial selector detailing the 5 engines of AfriYouth: Applied Research, Policy Shaping, Human-Centered Design, Venture Acceleration, and Strategic Foresight.
3. **Impact Telemetry**:
   - 4 large Clash Display counters with delicate vertical dividers and subtle baseline units.
4. **Opportunities Portal**:
   - Filterable pill bar with real-time text query and category selectors. Cards dynamically badge `Accepting Applications` in botanical green or `Cohort In Session` in neutral stone.
5. **Contact & Application Desk**:
   - Accessible form with input validation, hidden honeypot spam protection, and swappable Formspree / API route backend.
