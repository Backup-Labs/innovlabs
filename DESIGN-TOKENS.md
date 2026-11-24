# AfriYouth website design tokens

This document describes the current implementation. It is not an official brand manual. The competition brief names Poppins for headings and Gilroy for body text; neither font file is present in this repository. The implementation currently uses Satoshi and Instrument Serif. Replace them or obtain brand-owner approval before final submission.

## Color

| Token | Value | Use |
|---|---|---|
| Dark purple | `#0D0624` | Dark surfaces, footer, dark actions |
| Steel pink | `#C723DF` | Small brand accents |
| Duke blue | `#0200A7` | Hover and gradient accents |
| Blue | `#0301FF` | Links, focus and interaction accents |
| White | `#FFFFFF` | Cards and contrast text |
| Canvas | `#F4F4F6` | Page background |

Core values are defined in `src/app/globals.css` and extended in `tailwind.config.ts`. Prefer these values for new UI. Neutral gray surfaces support legibility.

## Typography and spacing

- Current body and interface font: Satoshi, loaded from `public/fonts/`.
- Current editorial display font: Instrument Serif, loaded from `public/fonts/`.
- Base spacing and responsive breakpoints use Tailwind utilities.
- Main content width uses the `max-w-container` token (`1280px`).
- Button hover styles are shared in `src/app/globals.css` through `.skeuo-btn-light`, `.skeuo-btn-dark`, and `.frost-glass-dark-btn`.

## Interaction and accessibility

- Respect `prefers-reduced-motion`; the global stylesheet reduces transition and animation duration.
- Use semantic links for navigation and buttons for actions.
- Keep visible keyboard focus. Shared CTA classes define a brand-colored focus ring.
- Check contrast, custom dropdown/date picker keyboard behavior, focus return, and reduced-motion rendering in a browser before release. Those checks have not been completed.

## Responsive and source design

Responsive Tailwind styles exist, but the requested widths have not been browser-tested. No Figma file is included in this repository, so implementation fidelity to a Figma source cannot be assessed.
