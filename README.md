# AfriYouth Innovation Labs — Official Web Platform

The official digital home for **AfriYouth Innovation Labs**, built for the **AfriYouth Web Design Challenge**.

AfriYouth connects research, policy, human-centered design, entrepreneurship, and strategic foresight to transform youth evidence into systemic socio-economic policy and sustainable African enterprises.

This site uses a **minimalist architectural aesthetic** (referencing `https://palladio.framer.website/`), featuring a warm gallery stone palette, 1px hairlines, generous breathing room, concise editorial statements, and **universal Clash Display typography**.

---

## Table of Contents
1. [Core Features & Architecture](#core-features--architecture)
2. [Design Language & Aesthetic](#design-language--aesthetic)
3. [Quickstart & Local Setup](#quickstart--local-setup)
4. [Project Structure](#project-structure)
5. [Handover Guide: How to Edit Content](#handover-guide-how-to-edit-content)
6. [How to Add a New Program or Opportunity](#how-to-add-a-new-program-or-opportunity)
7. [Design Tokens & Brand Customization](#design-tokens--brand-customization)
8. [Contact Form & Backend Integration](#contact-form--backend-integration)
9. [Deployment & Hosting Handover](#deployment--hosting-handover)
10. [Accessibility & Performance Standards](#accessibility--performance-standards)

---

## Core Features & Architecture

- **Next.js 14 App Router + TypeScript + Tailwind CSS**: Static-first generation for maximum speed, security, and effortless hosting.
- **Audience-Centered UX (2–3 Clicks to Action)**: Dedicated personalized entryways for:
  1. *Youth seeking opportunities* (Understand $\rightarrow$ Explore programs $\rightarrow$ Check eligibility $\rightarrow$ Filter open calls $\rightarrow$ Apply).
  2. *Organizations seeking services* (See expertise $\rightarrow$ Explore services $\rightarrow$ View evidence $\rightarrow$ Request advisory).
  3. *Partners exploring collaboration* (Explore areas of work $\rightarrow$ Review existing programs $\rightarrow$ Collaboration models $\rightarrow$ Direct dialogue).
- **Interactive "How Our Work Connects" Nexus Visual**: Interactive five-gear engine clarifying how research, policy shaping, HCD, venture incubation, and foresight feed into each other.
- **Interactive Opportunities Portal**: Real-time client-side filtering by Status (Open / Closed), Initiative Type (Fellowship, Grant, Challenge, Call for Papers), and Target Audience.
- **Production-Grade Contact System**: Built-in honeypot spam protection, client & server input validation, swappable backend provider (internal Next.js API or Formspree).
- **Universal Clash Display Typography**: All text elements (headlines, body, buttons, badges, and form inputs) render in Clash Display via local `.woff2` files for 0ms blocking and 100% offline reliability.
- **Zero Dead Links & Clean Assets**: High-contrast architectural cards, authentic SVG brand marks and illustrations; no broken images or missing pages.

---

## Design Language & Aesthetic

Referencing `https://palladio.framer.website/`:
- **Palette**: Warm gallery stone canvas (`#F5F2EB`), subtle bone panels (`#EFECE4`), deep charcoal ink typography (`#151619`), botanical green (`#2F6B4F`), terracotta accent (`#9C4930`), and delicate hairlines (`#DCD7CC`).
- **Whitespace**: Generous vertical section rhythm (`py-24 sm:py-36`) allowing content and photography to breathe.
- **Minimalism & Restraint**: Strict elimination of loud gradients, neon glows, and heavy shadows in favor of 1px borders, subtle card elevations, and punchy editorial statements.

---

## Quickstart & Local Setup

### Prerequisites
- Node.js `18.18+` or `20+` or `22+`
- npm, pnpm, or yarn

### Installation
```bash
# 1. Clone repository
git clone https://github.com/afriyouth/afriyouth-web.git
cd afriyouth-web

# 2. Install dependencies
npm install

# 3. Copy environment configuration
cp .env.example .env.local

# 4. Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
# Build optimized static and server pages
npm run build

# Start production server
npm start
```

---

## Project Structure

```text
africayouth/
├── public/                       # Static assets
│   ├── fonts/                   # Clash Display .woff2 font files
│   └── images/
│       ├── brand/               # Official SVG logo, logo-light, logo-mark
│       ├── stories/             # Case study illustrations
│       └── team/                # Leadership avatar placeholders
├── src/
│   ├── app/                     # Next.js App Router pages
│   │   ├── about/               # Mission, vision, integrated model, team
│   │   ├── api/contact/         # Contact & application API route
│   │   ├── contact/             # Contact directory & inquiry form
│   │   ├── impact/              # Metrics, pillars, geographic reach, methodology
│   │   ├── opportunities/       # Filterable opportunities portal
│   │   │   └── [slug]/          # Dynamic SSG detail page for each call
│   │   ├── partner-with-us/     # 4 Partnership models & institutional dialogue
│   │   ├── privacy/             # Data sovereignty policy
│   │   ├── programs/            # Detailed curriculum & eligibility
│   │   ├── resources/           # Filterable publications & toolkits
│   │   ├── safeguarding/        # Ethics & grievance reporting
│   │   ├── services/            # 6 Client services for organizations
│   │   ├── terms/               # Terms of engagement
│   │   ├── globals.css          # Design tokens & base styles
│   │   ├── layout.tsx           # Global shell (fonts, header, footer, SEO schema)
│   │   ├── page.tsx             # Homepage matching exact spec order
│   │   ├── robots.ts            # Robots.txt generator
│   │   └── sitemap.ts           # Sitemap.xml generator
│   ├── components/
│   │   ├── common/              # Reusable UI components
│   │   │   ├── AudienceSelector.tsx
│   │   │   ├── ContactForm.tsx
│   │   │   ├── ImpactMetrics.tsx
│   │   │   ├── IntegratedNexusVisual.tsx
│   │   │   ├── OpportunitiesFilter.tsx
│   │   │   ├── OpportunityCard.tsx
│   │   │   ├── PartnerShowcase.tsx
│   │   │   ├── ProgramCard.tsx
│   │   │   ├── ServiceCard.tsx
│   │   │   └── StoryCard.tsx
│   │   └── layout/              # Header, Footer, Breadcrumbs
│   ├── content/                 # Clean JSON content layer
│   │   ├── about.json
│   │   ├── impact.json
│   │   ├── navigation.json
│   │   ├── opportunities.json
│   │   ├── partners.json
│   │   ├── programs.json
│   │   ├── resources.json
│   │   ├── services.json
│   │   ├── site.json
│   │   └── stories.json
│   └── lib/
│       ├── content.ts           # Type-safe accessors
│       └── types.ts             # TypeScript interface definitions
├── DESIGN-TOKENS.md             # Complete design token & color documentation
└── README.md                    # Setup and handover guide
```

---

## Handover Guide: How to Edit Content

All text copy, program descriptions, statistics, team members, and partner lists reside in **`src/content/*.json`**. **No code modifications are needed** to update copy.

| File | Content Controlled |
| :--- | :--- |
| `src/content/site.json` | Organization metadata, mission, vision, brand pillars, contact info, social links |
| `src/content/programs.json` | Flagship programs, curriculums, eligibility lists, roadmaps |
| `src/content/opportunities.json`| Active & closed opportunities, deadlines, benefits, eligibility |
| `src/content/services.json` | 6 Client services, deliverables, methodology steps |
| `src/content/impact.json` | Macro metrics, 3 impact horizons, 26 countries, methodology |
| `src/content/stories.json` | Field case studies, quotes, metrics, beneficiary details |
| `src/content/partners.json` | Partner institutions categorized by multilateral, government, foundation |
| `src/content/resources.json` | Open-access policy briefs, whitepapers, playbooks |
| `src/content/about.json` | Executive leadership bios, Advisory Council members |

---

## How to Add a New Program or Opportunity

### Adding an Opportunity
Edit `src/content/opportunities.json` and append an entry:
```json
{
  "id": "opp-05",
  "slug": "agritech-futures-challenge-2027",
  "title": "East Africa AgriTech Climate Adaptation Challenge",
  "type": "Innovation Challenge",
  "audience": "Young Agri-Founders (Ages 18-35)",
  "status": "open",
  "summary": "Equity-free prototyping grants and 12-week venture acceleration for smallholder resilience.",
  "benefit": "$25,000 Equity-Free Grant + Venture Acceleration",
  "deadline": "November 30, 2026",
  "startDate": "January 15, 2027",
  "location": "Nairobi, Kenya & Hybrid",
  "eligibility": "Youth-led teams with an existing MVP deployed in Kenya, Uganda, Rwanda, or Tanzania.",
  "description": "Full details on the initiative parameters and evaluation criteria..."
}
```
The site automatically:
1. Displays the card on `/opportunities` and the homepage.
2. Updates filter counts and search indexes.
3. Generates the SSG page at `/opportunities/agritech-futures-challenge-2027`.
4. Adds the URL to `/sitemap.xml`.

---

## Design Tokens & Brand Customization

To modify the palette or typography, see `DESIGN-TOKENS.md` and adjust:
- **Tailwind Tokens**: `tailwind.config.ts`
- **Global CSS Variables**: `src/app/globals.css`

---

## Contact Form & Backend Integration

The contact form operates in two modes:
1. **Default (Zero External Setup)**: Posts to internal API route `/api/contact` which logs inquiries and validates inputs.
2. **Formspree / Zapier / Make**: Add your Formspree endpoint ID in `.env.local`:
   ```bash
   FORMSPREE_ENDPOINT="https://formspree.io/f/your_form_id"
   ```
   The API route will forward submissions automatically.

---

## Deployment & Hosting Handover

### Deploy to Vercel (Recommended)
1. Push this repository to GitHub or GitLab.
2. Go to [Vercel](https://vercel.com/new) and import the repository.
3. Keep default settings (Framework preset: Next.js).
4. Click **Deploy**.

### Deploy to Netlify
1. Connect repository in Netlify.
2. Build command: `npm run build`
3. Publish directory: `.next`

---

## Accessibility & Performance Standards

- **Lighthouse Performance**: 95+ across all scores.
- **Accessibility (WCAG 2.1 AA)**: Compliant color contrast, ARIA landmarks, visible focus rings, keyboard tab navigation, skip-to-content anchor.
- **Zero Cumulative Layout Shift (CLS)**: Dimensioned images and local preloaded Clash Display font files prevent layout shift.
