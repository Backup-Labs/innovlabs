# AfriYouth Innovation Labs — Official Web Platform

The official digital home for **AfriYouth Innovation Labs**, built for the **AfriYouth Web Design Challenge**.

AfriYouth connects research, policy, human-centered design, entrepreneurship, and strategic foresight to transform youth evidence into systemic socio-economic policy and sustainable African enterprises.

---

## Table of Contents
1. [Core Features & Architecture](#core-features--architecture)
2. [Quickstart & Local Setup](#quickstart--local-setup)
3. [Project Structure](#project-structure)
4. [Handover Guide: How to Edit Content](#handover-guide-how-to-edit-content)
5. [How to Add a New Program or Opportunity](#how-to-add-a-new-program-or-opportunity)
6. [How to Update Design Tokens & Brand Colors](#how-to-update-design-tokens--brand-colors)
7. [Contact Form & Backend Integration](#contact-form--backend-integration)
8. [Deployment & Hosting Handover](#deployment--hosting-handover)
9. [Accessibility & Performance Standards](#accessibility--performance-standards)

---

## Core Features & Architecture

- **Next.js 14 App Router + TypeScript + Tailwind CSS**: Zero heavy or niche runtime dependencies.
- **Audience-Centered UX (2–3 Clicks to Action)**: Dedicated personalized entryways for:
  1. *Youth seeking opportunities* (Understand $\rightarrow$ Explore programs $\rightarrow$ Check eligibility $\rightarrow$ Filter open calls $\rightarrow$ Apply).
  2. *Organizations seeking services* (See expertise $\rightarrow$ Explore services $\rightarrow$ View evidence $\rightarrow$ Request advisory).
  3. *Partners exploring collaboration* (Explore areas of work $\rightarrow$ Review existing programs $\rightarrow$ Collaboration models $\rightarrow$ Direct dialogue).
- **Interactive "How Our Work Connects" Nexus Visual**: Interactive five-gear engine clarifying how research, policy shaping, HCD, venture incubation, and foresight feed into each other.
- **Interactive Opportunities Portal**: Real-time client-side filtering by Status (Open / Closed), Initiative Type (Fellowship, Grant, Challenge, Call for Papers), and Target Audience.
- **Production-Grade Contact System**: Built-in honeypot spam protection, client & server input validation, swappable backend provider (internal Next.js API or Formspree).
- **Strict Design System**: WCAG AA contrast compliance, Manrope headings, Inter body typography, 8px grid, responsive 360px–1440px+, dark mode support via `prefers-color-scheme`.
- **Zero Dead Links & Clean Placeholders**: Authentic, lightweight SVG brand marks and illustrations; no broken images or missing pages.

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
│   └── images/
│       ├── brand/               # Official SVG logo, logo-light, logo-mark
│       ├── stories/             # Vector case study illustrations
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
│   │   ├── common/              # Reusable UI widgets
│   │   │   ├── AudienceSelector.tsx
│   │   │   ├── ContactForm.tsx
│   │   │   ├── Icon.tsx
│   │   │   ├── ImpactMetrics.tsx
│   │   │   ├── IntegratedNexusVisual.tsx
│   │   │   ├── OpportunitiesFilter.tsx
│   │   │   ├── OpportunityCard.tsx
│   │   │   ├── PartnerShowcase.tsx
│   │   │   ├── ProgramCard.tsx
│   │   │   ├── ServiceCard.tsx
│   │   │   └── StoryCard.tsx
│   │   └── layout/
│   │       ├── Breadcrumbs.tsx
│   │       ├── Footer.tsx
│   │       └── Header.tsx
│   ├── content/                 # CONTENT LAYER (handover critical)
│   │   ├── about.json           # About copy, team, advisory council
│   │   ├── impact.json          # Metrics, pillars, countries, methodology
│   │   ├── navigation.json      # Main nav, audience portals, footer links
│   │   ├── opportunities.json   # Fellowships, grants, challenges
│   │   ├── partners.json        # Partner institutions & categories
│   │   ├── programs.json        # Flagship programs, eligibility, steps
│   │   ├── resources.json       # Policy briefs, toolkits, papers
│   │   ├── services.json        # Client advisory services & deliverables
│   │   ├── site.json            # Organization metadata, contacts, socials
│   │   └── stories.json         # Case studies & testimonials
│   └── lib/
│       ├── content.ts           # Type-safe content accessors
│       └── types.ts             # TypeScript interfaces for all schemas
├── DESIGN-TOKENS.md             # Complete design token specs for Figma
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── vercel.json                  # One-click Vercel config
└── netlify.toml                 # One-click Netlify config
```

---

## Handover Guide: How to Edit Content

**No code changes are needed to update copy.** All site text, statistics, team bios, and links live in `/src/content/`.

1. **Organization Details & Contacts**: Edit `src/content/site.json` (email, phone, address, social links).
2. **Navigation & Footer**: Edit `src/content/navigation.json`.
3. **Impact Numbers**: Edit `src/content/impact.json` (update the `metrics` array; the cards update across Home and Impact automatically).
4. **Stories & Quotes**: Edit `src/content/stories.json`.
5. **Team Bios**: Edit `src/content/about.json` under `team.leadership`.

---

## How to Add a New Program or Opportunity

### Adding an Opportunity
Open `src/content/opportunities.json` and append a new object adhering to this schema:

```json
{
  "id": "opp-07",
  "title": "2027 Green Mini-Grid Innovation Challenge",
  "slug": "green-mini-grid-challenge-2027",
  "type": "Challenge",
  "audience": "CleanTech Innovators",
  "status": "open",
  "deadline": "March 31, 2027",
  "startDate": "May 1, 2027",
  "location": "Regional Hub (Kigali)",
  "benefit": "$20,000 Implementation Prize + Testing Lab Access",
  "summary": "12-week challenge for young engineers deploying decentralized renewable energy mini-grids.",
  "description": "Selected teams receive hardware testing sandboxes, grid compliance mentorship, and community deployment sites.",
  "eligibility": "Founders under 35 with functional clean power prototype.",
  "featured": true
}
```

Once saved, the opportunity appears on the **Homepage**, in the **Filterable Portal** (`/opportunities`), in the **Sitemap**, and generates a dedicated static page at `/opportunities/green-mini-grid-challenge-2027`.

---

## How to Update Design Tokens & Brand Colors

The design tokens are centralized in:
1. `src/app/globals.css` (CSS Custom Properties).
2. `tailwind.config.ts` (Tailwind token extensions).

To change a brand color (for example, `--primary-700`):
- Update `--primary-700: #0F5C4D;` in `src/app/globals.css`.
- The change immediately propagates across buttons, badges, links, and accents.
- For complete token values and Figma synchronization, consult [`DESIGN-TOKENS.md`](./DESIGN-TOKENS.md).

---

## Contact Form & Backend Integration

The contact form in `src/components/common/ContactForm.tsx` and API route in `src/app/api/contact/route.ts` are ready for production:

1. **Honeypot Spam Protection**: Contains an invisible `botCheckWebsite` field that silently neutralizes automated spam bots.
2. **Local Logging Mode**: Logs submissions to the server console with full timestamps.
3. **Formspree / External CRM Integration**:
   - In `.env.local`, set:
     ```env
     NEXT_PUBLIC_CONTACT_PROVIDER=formspree
     FORMSPREE_ENDPOINT=https://formspree.io/f/your_formspree_id
     ```
   - Inquiries are then dispatched directly to Formspree or your CRM webhook without any code changes.

---

## Deployment & Hosting Handover

### Option 1: Deploy to Vercel (Recommended)
1. Push this repository to GitHub/GitLab.
2. In Vercel, click **"Add New Project"** and import the repository.
3. Vercel automatically detects Next.js using `vercel.json`.
4. Add environment variables from `.env.example` in the Vercel project settings.
5. Click **"Deploy"**. Future pushes to `main` deploy automatically.

### Option 2: Deploy to Netlify
1. Import repository in Netlify.
2. Build command: `npm run build`.
3. Publish directory: `.next`.
4. Netlify will use `netlify.toml` automatically.

### Handing Over to AfriYouth
1. Transfer the GitHub repository to the official `afriyouth` organization account.
2. Add AfriYouth team members as Owners on the Vercel/Netlify team.
3. Point the custom domain `afriyouth.org` to the Vercel/Netlify DNS records.

---

## Accessibility & Performance Standards

- **Semantic HTML**: Landmarks (`<header>`, `<main>`, `<footer>`, `<nav>`, `<article>`, `<section>`).
- **WCAG 2.1 AA Compliant**: All text combinations satisfy high-contrast ratios.
- **Visible Focus States**: Dedicated `2px solid #F2A900` gold focus ring on all interactive elements.
- **Skip Link**: Accessible `<a href="#main-content" class="skip-to-content">` for keyboard users.
- **Reduced Motion**: Honored via `@media (prefers-reduced-motion: reduce)`.
- **Search Engine Optimization**: Full dynamic JSON-LD schema, open graph tags, XML sitemap, and robots.txt.

