# AfriYouth Innovation Labs — Futuristic Design System & Tokens

This document details the **futuristic design system** and **Clash Display typography tokens** implemented for the AfriYouth Innovation Labs web platform.

---

## 1. Typography: Clash Display + Inter

AfriYouth uses **Clash Display** as its primary display/heading typeface for a bold, geometric, futuristic presence, complemented by **Inter** for technical readability and **Monospace** for live system telemetry.

### Typeface Families
- **Display & Headings**: `"Clash Display"` (Fontshare / Local woff2).
  - Weights: `700` (Bold), `600` (Semibold), `500` (Medium), `400` (Regular).
  - Letter-spacing: `-0.025em` to `-0.035em` for display scale.
  - Bundled locally in `/public/fonts/` for 0ms font blocking and 100% offline reliability.
- **Body & Data**: `"Inter"`, system-ui, -apple-system, sans-serif.
  - Base: `16px`, Line-height: `1.65`.
- **Telemetry & Metadata**: `ui-monospace, SFMono-Regular, Menlo, monospace`.
  - Uppercase, letter-spacing `+0.12em` to `+0.15em`.

### Typographic Scale

| Step | Size | Line Height | Tracking | Font Family | Usage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Display** | `64px`–`72px` | `1.08` | `-0.035em` | Clash Display 800/700 | Main Hero Headline |
| **H1** | `48px`–`56px` | `1.12` | `-0.025em` | Clash Display 700 | Page Titles |
| **H2** | `32px`–`40px` | `1.2` | `-0.025em` | Clash Display 700 | Section Headers |
| **H3** | `22px`–`26px` | `1.3` | `-0.015em` | Clash Display 600 | Card Headings |
| **Telemetry HUD** | `48px`–`60px` | `1.0` | `-0.03em` | Clash Display 800 | Metric Numerals (`48,500+`) |
| **Body Base** | `16px` | `1.65` | `normal` | Inter 400 | Paragraphs & Descriptions |
| **Body Small** | `14px` | `1.5` | `normal` | Inter 400/500 | Card Subtext |
| **Cyber Badge** | `10px`–`11px` | `1.2` | `+0.15em` | Monospace 700 | Tags, Status Chips, Node IDs |

---

## 2. Futuristic Color Palette & Glowing Tokens

The color architecture evokes an African sovereign tech vanguard: deep obsidian tech space, luminous emerald pulses, and warm solar gold highlights.

| Token | Variable | Hex / Value | Purpose |
| :--- | :--- | :--- | :--- |
| **Obsidian Deep** | `--ink-950` | `#040D0E` | Base cosmic background canvas |
| **Obsidian Void** | `--ink-900` | `#061517` | Section alternations, dropdown cards |
| **Tech Slate** | `--ink-850` | `#081E21` | Inner glass panel backgrounds |
| **Teal Deep** | `--ink-800` | `#0B2B2E` | Card surfaces |
| **Brand Green** | `--primary-700` | `#0F5C4D` | Primary brand heritage |
| **Neon Emerald** | `--primary-500` | `#10B981` | Interactive elements, status pulses, primary buttons |
| **Emerald Highlight**| `--primary-400`| `#34D399` | Hover states, glowing borders |
| **Warm Gold** | `--accent-500` | `#F2A900` | Key metrics, primary CTAs, high-priority highlights |
| **Electric Cyan** | `--sky-400` | `#38BDF8` | Auxiliary data indicators |
| **Glass Border** | `--line` | `rgba(255, 255, 255, 0.09)` | Micro glass borders |
| **Surface Glass**| `--surface-glass` | `rgba(8, 30, 33, 0.65)` | Frosted backdrop container |

---

## 3. Futuristic Visual Effects

- **Glassmorphic Panels (`.glass-panel`)**:
  ```css
  background: rgba(8, 30, 33, 0.55);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.4);
  ```
- **Cyber Grid (`.cyber-grid` & `.cyber-grid-dense`)**:
  - `48px` and `24px` subtle luminous grid overlays simulating a digital coordinate plane.
- **Glow Shadows**:
  - Emerald Glow: `0 0 35px -5px rgba(16, 185, 129, 0.3)`
  - Gold Glow: `0 0 35px -5px rgba(242, 169, 0, 0.3)`
  - Text Glow: `text-shadow: 0 0 25px rgba(242, 169, 0, 0.5)`
- **Pulsing Radar Status**:
  - Animated pulsing ping ring on live opportunities (`Accepting Applications // LIVE_CALL`).
- **Interactive Card Lift (`.glass-card-interactive`)**:
  - Smooth `-4px` vertical lift on hover with glowing border transitions.
