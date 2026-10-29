# AfriYouth Innovation Labs — Monochromatic Architectural Design System

This document specifies the **monochromatic design system**, **Satoshi + Instrument Serif (non-italic) typography pairing**, **animated micro-interactions**, and **white, black, and light gray color palette** for AfriYouth Innovation Labs, referencing the user-provided photo and aesthetic of `https://palladio.framer.website/`.

---

## 1. Design Principles & Ethos

1. **Monochromatic Restraint**: Grounded in pure black (`#0A0A0A` / `#000000`), pure white (`#FFFFFF`), and refined light gray (`#F4F4F6` canvas, `#E2E2E6` hairlines). Eliminates multi-color distractions in favor of high-contrast, editorial clarity.
2. **Typography Pairing (Instrument Serif + Satoshi)**:
   - **Instrument Serif (Regular 400, strictly upright / non-italic)**: Used for high-impact editorial headlines, large display statements, and signature quantitative numerals.
   - **Satoshi (Regular 400, Medium 500, Bold 700, Black 900)**: Modern geometric grotesque used for body copy, UI elements, navigation, buttons, metadata pills, and card structure.
3. **Hero & Navigation Architecture (Photo-Matched & Zero-Scroll Fit)**:
   - **Navigation Bar**: Logo on the left (architectural cross emblem + wordmark), solid black pill button (`[Book a call]`) + black circular hamburger button with two horizontal white bars (`[ = ]`) on the right. Tapping the menu button opens an animated slide-in drawer.
   - **Hero Section**: Strictly fits within 100% of the desktop viewport height (`h-[calc(100vh-4rem)]` / `h-[calc(100dvh-4.5rem)]`) with zero vertical scrolling needed. Atmospheric fresco backdrop (`/images/hero-mural.svg`), `⊕ PAN-AFRICAN YOUTH INNOVATION NEXUS` kicker, massive upright Instrument Serif headline (`The quiet work behind bold decisions.`), 3-line description with white & translucent pill buttons, and a docked floating **Case Study card** on the bottom right.
4. **Framer Motion Choreography**: Smooth fade-ins, spring-based menu transitions, subtle card lifts, and scroll-triggered `whileInView` reveals.

---

## 2. Typography: Instrument Serif + Satoshi Pairing

All font files are hosted locally as zero-blocking `.woff2` files in `public/fonts/`.

```css
/* Display & Editorial Headlines */
.font-serif, .font-display, .editorial-serif {
  font-family: 'Instrument Serif', Georgia, serif !important;
  font-style: normal !important;
  font-feature-settings: "liga" 1, "calt" 1;
}

/* UI, Navigation, Cards & Body */
body, .font-sans {
  font-family: 'Satoshi', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
```

### Typographic Hierarchy & Scale

| Step | Size | Line Height | Tracking | Font Family | Weight / Style | Usage |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Display** | `clamp(2.4rem, 4.4vw, 4.2rem)` | `1.05` | `-0.02em` | Instrument Serif | Regular 400 (Not Italic) | Main hero statement |
| **Section Title (H1/H2)**| `36px`–`64px` | `1.1` | `-0.02em` | Instrument Serif | Regular 400 (Not Italic) | Major section & page headlines |
| **Telemetry Numerals**| `48px`–`72px` | `1.0` | `-0.02em` | Instrument Serif | Regular 400 (Not Italic) | Quantitative impact counters (`48.5k`, `26 Nations`) |
| **Card Header (H3)**  | `20px`–`24px` | `1.25` | `-0.015em`| Satoshi | Bold 700 | Program, service, and opportunity cards |
| **Lead / Subhead**    | `16px`–`18px` | `1.6` | `normal` | Satoshi | Regular 400 / Medium 500 | Hero subhead, section intros |
| **Body Base**         | `14px`–`15px` | `1.65` | `normal` | Satoshi | Regular 400 | Article text, narrative paragraphs |
| **Metadata & Subtext**| `11px`–`12px` | `1.5` | `normal` | Satoshi / Mono | Medium 500 / Semibold 600 | Dates, cohort size, duration, authors |
| **Architectural Pill**| `10px`–`11px` | `1.2` | `+0.12em`| Satoshi / Mono | Semibold 600 | Uppercase kickers, `Case study` pills, tags |

---

## 3. Monochromatic Color Architecture

| Token | Hex Value | Role & Usage |
| :--- | :--- | :--- |
| **White** | `#FFFFFF` | Gallery card backgrounds, high-contrast hero text, primary CTA pill |
| **Black** | `#0A0A0A` | Primary text, navigation button, footer canvas, badges |
| **Pure Black** | `#000000` | Focus outlines, deepest contrast accents |
| **Light Gray 100** | `#F4F4F6` | Primary page canvas, case study card background |
| **Light Gray 200** | `#EAEAEF` | Secondary container fills, subtle card backgrounds |
| **Hairline Gray** | `#E2E2E6` | 1px delicate architectural divider lines |
| **Muted Gray** | `#636366` | Secondary body text, descriptions, metadata |
| **Light Gray Text** | `#8E8E93` | Uppercase category kickers, label headers |

---

## 4. Animation & Interaction Tokens

- **Hero Entrance**:
  - Kicker: `opacity: 0 -> 1`, `y: -10 -> 0`, `duration: 0.6s`
  - Headline: `opacity: 0 -> 1`, `y: 20 -> 0`, `duration: 0.7s`, `delay: 0.1s`, `ease: [0.16, 1, 0.3, 1]`
  - Description & Buttons: `opacity: 0 -> 1`, `y: 15 -> 0`, `duration: 0.6s`, `delay: 0.2s`
  - Floating Case Study Card: `opacity: 0 -> 1`, `scale: 0.95 -> 1`, `y: 15 -> 0`, `duration: 0.7s`, `delay: 0.3s`
- **Navigation Overlay**:
  - Backdrop: `opacity: 0 -> 1`
  - Drawer Slide: `x: 100% -> 0%` via spring physics (`damping: 28`, `stiffness: 260`)
- **Scroll Reveals**:
  - `whileInView={{ opacity: 1, y: 0 }}` with `viewport={{ once: true, margin: "-40px" }}`
