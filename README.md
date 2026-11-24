# AfriYouth Innovation Labs — Official Web Platform

Website project for **AfriYouth Innovation Labs**, prepared for the **AfriYouth Web Design Challenge**.

AfriYouth connects research, policy, human-centered design, entrepreneurship, and strategic foresight to transform youth evidence into systemic socio-economic policy and sustainable African enterprises.

The site uses the AfriYouth dark-purple, blue, and steel-pink colors with a light neutral canvas. The current implementation uses **Satoshi paired with Instrument Serif**; the supplied competition brief specifies Poppins and Gilroy, so typography still needs alignment or written brand approval.

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
- **Audience-Centered UX**: Dedicated entryways for:
  1. *Youth seeking opportunities* (Understand $\rightarrow$ Explore programs $\rightarrow$ Check eligibility $\rightarrow$ Filter calls $\rightarrow$ Contact the organization to confirm the application process).
  2. *Organizations seeking services* (See expertise $\rightarrow$ Explore services $\rightarrow$ View evidence $\rightarrow$ Request advisory).
  3. *Partners exploring collaboration* (Explore areas of work $\rightarrow$ Review existing programs $\rightarrow$ Collaboration models $\rightarrow$ Direct dialogue).
- **Hero Section**: Designed to fit the desktop viewport; browser validation is still required at the target screen sizes.
- **Interactive "How Our Work Connects" Nexus Visual**: Interactive five-gear engine clarifying how research, policy shaping, HCD, venture incubation, and foresight feed into each other.
- **Interactive Opportunities Portal**: Client-side filtering by status, initiative type, and audience. Dated records close automatically after the listed deadline. Opportunity data and status must be verified by the organization before publication.
- **Contact Form**: Includes client/server validation and a honeypot. Inquiry delivery requires `NEXT_PUBLIC_CONTACT_PROVIDER=formspree` and a valid `FORMSPREE_ENDPOINT`; without these settings, the API returns an error and directs visitors to email instead of claiming delivery.
- **Resources**: A download is shown only when a real URL is configured. Records with `#` URLs are shown as unavailable.
- **Typography Pairing (Instrument Serif + Satoshi)**: Upright Instrument Serif for display statements and Satoshi for body and UI, using local `.woff2` files. This differs from Poppins + Gilroy in the supplied competition brief and needs brand approval or replacement.
- **Content-Driven Pages**: Main page copy, opportunity records, services, and programs are stored in JSON. Factual claims, partner names, statistics, and contact details still require review by AfriYouth before release.

---

## Design Language & Aesthetic

- **Palette**: AfriYouth dark purple (`#0D0624`), steel pink (`#C723DF`), Duke blue (`#0200A7`), blue (`#0301FF`), white, and neutral surfaces.
- **Whitespace**: Generous vertical section spacing and responsive card grids.
- **Interaction**: Restrained transitions and card elevations; verify motion and contrast in a browser before handover.

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
| `src/content/programs.json` | Verified program records; currently empty pending approved details |
| `src/content/opportunities.json`| Verified calls; currently empty pending approved dates, criteria, and application links |
| `src/content/services.json` | The eight service areas named in the competition brief |
| `src/content/impact.json` | Impact areas and methodology; no unverified performance metrics |
| `src/content/stories.json` | Approved case studies; currently empty pending source material |
| `src/content/partners.json` | Approved partner records; currently empty pending confirmation and logo permission |
| `src/content/resources.json` | Approved downloadable resources; currently empty pending real publication files and URLs |
| `src/content/about.json` | Mission, vision, and organization model; leadership profiles await approval |

The empty content files are deliberate. Add opportunities, programs, results, partners, publications, and people only after AfriYouth approves the facts and any required permissions.

---

## How to Add a New Program or Opportunity

### Adding an Opportunity
Edit `src/content/opportunities.json` and append an entry. The values below are placeholders for structure only; replace them with confirmed information before publishing:
```json
{
  "id": "opp-05",
  "slug": "agritech-futures-challenge-2027",
  "title": "Replace with a verified opportunity title",
  "type": "Innovation Challenge",
  "audience": "Young Agri-Founders (Ages 18-35)",
  "status": "open",
  "summary": "Equity-free prototyping grants and 12-week venture acceleration for smallholder resilience.",
  "benefit": "Replace with an organization-confirmed benefit",
  "deadline": "Replace with an organization-confirmed deadline",
  "startDate": "Replace with an organization-confirmed start date",
  "location": "Replace with an organization-confirmed location",
  "eligibility": "Replace with organization-confirmed eligibility",
  "description": "Replace with organization-approved details"
}
```
After adding and verifying a record, the site:
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
1. **Unconfigured mode**: validates the request but does not store or deliver it; visitors receive an error with the contact email.
2. **Formspree**: Set both values in `.env.local`:
   ```bash
   NEXT_PUBLIC_CONTACT_PROVIDER=formspree
   FORMSPREE_ENDPOINT="https://formspree.io/f/your_form_id"
   ```
   The API route forwards submissions and reports success only when Formspree accepts the request. Test with the actual production endpoint before publishing.

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

- **Lighthouse and WCAG status**: Not measured. Run browser-based Lighthouse, keyboard, screen-reader, and contrast checks before claiming compliance.
- **Responsive status**: Breakpoint styles are present; the requested device widths have not been browser-verified.
- **Design handover**: No Figma source file is included in this repository.
