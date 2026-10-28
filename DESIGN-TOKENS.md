# AfriYouth Innovation Labs — Design System & Tokens Specification

This document provides the exact token specifications and component rules implemented in the official AfriYouth Innovation Labs web platform. Use these values in Figma to ensure 100% fidelity between design and code.

---

## 1. Color Palette Tokens

The palette is engineered to communicate **institutional credibility, research rigor, and African optimism**. It strictly satisfies **WCAG 2.1 AA** contrast standards (minimum 4.5:1 for normal text, 3:1 for large headings/graphics).

### Core Brand Colors

| Token Name | CSS Variable | Hex Code | Purpose & Semantic Usage |
| :--- | :--- | :--- | :--- |
| **Ink 900** | `--ink-900` | `#0B2B2E` | Deep teal-ink: Headings, dark hero sections, footer, primary contrast. |
| **Ink 800** | `--ink-800` | `#133D41` | Secondary dark background: Elevated dark cards, inputs inside dark mode. |
| **Primary 700** | `--primary-700` | `#0F5C4D` | Institutional Brand Green: Primary action buttons, active states, key icons. |
| **Primary 600** | `--primary-600` | `#137A64` | Interactive hover/active state for primary buttons and links. |
| **Primary 50** | `--primary-50` | `#F0F9F7` | Soft green tint: Badges, active pill backgrounds, subtle highlights. |
| **Accent 500** | `--accent-500` | `#F2A900` | Warm Gold: High-impact metrics, focus rings, callout badges. |
| **Accent 600** | `--accent-600` | `#D99500` | Hover state for gold action buttons. |
| **Accent 50** | `--accent-50` | `#FFFBF0` | Soft gold container background for key benefit callouts. |
| **Sky 500** | `--sky-500` | `#2B8CBE` | Informational accent: Secondary category badges, data indicators. |
| **Slate 700** | `--slate-700` | `#334155` | Primary body copy text (high contrast, readable). |
| **Slate 500** | `--slate-500` | `#64748B` | Secondary metadata, dates, breadcrumb arrows. |
| **Border Line** | `--line` | `#E2E8F0` | Structural card borders, dividers, subtle table rules. |
| **Surface** | `--surface` | `#F6F8F7` | Neutral section alternates, filter containers, badge backgrounds. |
| **Pure White** | `--background` | `#FFFFFF` | Primary card faces, main canvas background. |

### Color Balance Rules (60-30-10 Rule)
- **60% Base / Surface**: `#FFFFFF` and `#F6F8F7` (Clean, open, readable space).
- **30% Structure / Copy**: `#0B2B2E` headings and `#334155` body text.
- **10% Brand Accents**: `#0F5C4D` (Brand Green) and `#F2A900` (Warm Gold).
- **Strict Rule**: Warm Gold (`#F2A900`) is **never** used for body copy on light backgrounds; it is reserved for metrics, icons, badges, and dark-background accents.

### Dark Mode Adaptations (`prefers-color-scheme: dark`)
- `--ink-900`: `#071D1F`
- `--background`: `#081B1D`
- `--card-bg`: `#0F2D30`
- `--surface`: `#0C2427`
- `--foreground`: `#CBD5E1`
- `--slate-700`: `#E2E8F0`
- `--line`: `#1D3A3E`

---

## 2. Typography Scale

AfriYouth uses two coordinated typeface families:

- **Headings & Display**: `"Manrope"` (Weights: 700 Bold, 800 ExtraBold). Letter-spacing: `-0.02em` (`-0.03em` on display hero).
- **Body & Interface**: `"Inter"` (Weights: 400 Regular, 500 Medium, 600 SemiBold). Base size: 16px, Line-height: `1.65`.

| Scale Step | Font Size | Line Height | Tracking | Recommended Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Display 64** | `64px` (`4rem`) | `1.1` | `-0.03em` | Desktop Hero headline |
| **H1 48** | `48px` (`3rem`) | `1.15` | `-0.02em` | Page main titles, macro metrics |
| **H2 32** | `32px` (`2rem`) | `1.25` | `-0.02em` | Section headers |
| **H3 24** | `24px` (`1.5rem`) | `1.3` | `-0.01em` | Card titles, modal titles |
| **Body Large 18** | `18px` (`1.125rem`)| `1.65` | `normal` | Hero subheads, introductory lead paragraphs |
| **Body Base 16** | `16px` (`1rem`) | `1.65` | `normal` | Standard paragraph text, form inputs |
| **Caption / UI 14**| `14px` (`0.875rem`)| `1.5` | `normal` | Buttons, navigation links, metadata |
| **Micro 12** | `12px` (`0.75rem`) | `1.4` | `+0.05em` | Badges, uppercase section tags, status dots |

---

## 3. Spatial System & Layout Grids

- **Base Unit**: `8px` spatial grid (`8px`, `16px`, `24px`, `32px`, `48px`, `64px`, `96px`).
- **Container Max Width**: `1200px` (`max-w-container`).
- **Columns**: 12-column responsive desktop grid (`gap-6` or `gap-8`).
- **Section Padding**:
  - Desktop: `96px` (`py-24`)
  - Mobile: `64px` (`py-16`)
- **Card Border Radius**: `12px` (`rounded-card`).
- **Button Border Radius**: `8px` (`rounded-lg`).
- **Badge Border Radius**: `4px` / `9999px` (Pills).

---

## 4. Shadows & Elevation

- **Subtle**: `0 1px 3px 0 rgba(11, 43, 46, 0.05), 0 1px 2px 0 rgba(11, 43, 46, 0.03)`
- **Card Elevation**: `0 4px 6px -1px rgba(11, 43, 46, 0.06), 0 2px 4px -1px rgba(11, 43, 46, 0.04)`
- **Card Hover (`card-lift`)**: `0 10px 15px -3px rgba(11, 43, 46, 0.08), 0 4px 6px -2px rgba(11, 43, 46, 0.04)` with `translateY(-3px)`

---

## 5. Component Specifications

### 1. Primary Buttons
- **Fill**: `#0F5C4D` (Brand Green)
- **Text**: `#FFFFFF` (Manrope 600 / Inter 600, 14px)
- **Hover**: `#137A64`
- **Padding**: `10px 20px` (or `14px 28px` on Hero)
- **Focus Ring**: `2px solid #F2A900` with `2px` offset.

### 2. Secondary / Accent Buttons
- **Fill**: `#F2A900` (Warm Gold)
- **Text**: `#0B2B2E` (Ink 900, 800 Bold)
- **Hover**: `#D99500`

### 3. Outlined Buttons
- **Fill**: Transparent
- **Border**: `1px solid #E2E8F0` (or `rgba(255,255,255,0.4)` on dark)
- **Text**: `#0B2B2E` (or `#FFFFFF` on dark)
- **Hover**: Background `#F6F8F7` (or `rgba(255,255,255,0.1)`)

### 4. Status Indicators
- **Open / Active**: Pill background `#D1FAE5`, text `#065F46`, animated pulsating green dot `#059669`.
- **Closed / In Progress**: Pill background `#E2E8F0`, text `#334155`, neutral dot `#94A3B8`.

### 5. Interactive Cards
- All cards share `rounded-card` (12px), `border border-line`, `p-6` or `p-8`.
- Hovering smoothly transitions `translateY(-3px)` and shadow elevation over `200ms ease-out`.

---

## 6. Motion & Accessibility Tokens

- **Duration**: `150ms` to `250ms` ease-out (`cubic-bezier(0.16, 1, 0.3, 1)`).
- **Reduced Motion**: All animations and transitions fall back to instantaneous `0.01ms` when `prefers-reduced-motion: reduce` is detected.
- **Focus Ring**: Guaranteed `2px solid #F2A900` with `3px` offset on all interactive elements.
