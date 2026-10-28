# AfriYouth Innovation Labs — Monochromatic Architectural Design System

This document specifies the **monochromatic design system**, **universal Clash Display typography**, **animated micro-interactions**, and **white, black, and light gray color palette** for AfriYouth Innovation Labs, referencing the user-provided photo and aesthetic of `https://palladio.framer.website/`.

---

## 1. Design Principles & Ethos

1. **Monochromatic Restraint**: Grounded in pure black (`#0A0A0A` / `#000000`), pure white (`#FFFFFF`), and refined light gray (`#F4F4F6` canvas, `#E2E2E6` hairlines). Eliminates multi-color distractions in favor of high-contrast, editorial clarity.
2. **Universal Clash Display Typography**: Every textual element—from 88px editorial display headlines down to 10px metadata pills and input fields—renders in **Clash Display** for a consistent, geometric, and sculptured identity.
3. **Hero & Navigation Architecture (Photo-Matched)**:
   - **Navigation Bar**: Logo on the left (architectural cross emblem + wordmark), solid black pill button (`[Book a call]`) + black circular hamburger button with two horizontal white bars (`[ = ]`) on the right. Tapping the menu button opens an animated slide-in drawer.
   - **Hero Section**: Atmospheric fresco backdrop (`/images/hero-mural.svg`), `⊕ PAN-AFRICAN YOUTH INNOVATION NEXUS` kicker, massive white headline (`The quiet work behind bold decisions.`), 3-line description with white & translucent pill buttons, and a floating **Case Study card** docked on the bottom right.
4. **Framer Motion Choreography**: Smooth fade-ins, spring-based menu transitions, subtle card lifts, and scroll-triggered `whileInView` reveals.

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
| **Hero Display** | `56px`–`88px` | `1.04` | `-0.035em` | Bold 700 / 800 | Main hero statement matching photo |
| **Section Title (H2)**| `36px`–`48px` | `1.15` | `-0.025em` | Bold 700 | Major section themes |
| **Card Header (H3)**  | `22px`–`28px` | `1.25` | `-0.015em` | Bold 700 | Program, service, and opportunity cards |
| **Telemetry Numerals**| `48px`–`64px` | `1.0` | `-0.03em` | Bold 700 | Quantitative impact counters (`48.5k`) |
| **Lead / Subhead**    | `16px`–`20px` | `1.6` | `-0.01em` | Regular 400 / Medium 500 | Hero subhead, section intros |
| **Body Base**         | `15px`–`16px` | `1.65` | `normal` | Regular 400 | Article text, narrative paragraphs |
| **Metadata & Subtext**| `12px`–`14px` | `1.5` | `normal` | Medium 500 | Dates, cohort size, duration, authors |
| **Architectural Pill**| `10px`–`11px` | `1.2` | `+0.12em` | Semibold 600 | Uppercase kickers, `Case study` pills, tags |

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
  - Headline: `opacity: 0 -> 1`, `y: 25 -> 0`, `duration: 0.8s`, `delay: 0.15s`, `ease: [0.16, 1, 0.3, 1]`
  - Description & Buttons: `opacity: 0 -> 1`, `y: 20 -> 0`, `duration: 0.7s`, `delay: 0.3s`
  - Floating Case Study Card: `opacity: 0 -> 1`, `scale: 0.94 -> 1`, `y: 30 -> 0`, `duration: 0.8s`, `delay: 0.45s`
- **Navigation Overlay**:
  - Backdrop: `opacity: 0 -> 1`
  - Drawer Slide: `x: 100% -> 0%` via spring physics (`damping: 28`, `stiffness: 260`)
- **Scroll Reveals**:
  - `whileInView={{ opacity: 1, y: 0 }}` with `viewport={{ once: true, margin: "-40px" }}`
