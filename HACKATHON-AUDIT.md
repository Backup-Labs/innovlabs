# AfriYouth Innovation Labs Hackathon Audit

Audit date: 24 November 2026  
Scope: repository inspection, route/content/component review, deployment configuration review, and a public-domain check. No code changes had been made when these findings were recorded. A browser automation or Lighthouse tool and Figma files were not available in the workspace.

## Executive assessment

The project has a substantial Next.js App Router site, reusable components, locally stored assets, content separated into JSON, and dedicated pages for the main audiences. Its current biggest competition risk is trust: several visible features claim to accept inquiries, subscriptions, downloads, applications, partnerships, metrics, or partner relationships that the code does not actually deliver or the repository does not substantiate. The design has a recognizable dark-purple/blue visual system, but diverges from the provided official typography and the palette is applied inconsistently. Responsive behavior is authored with breakpoints, but it has not been verified at the requested widths in a browser.

The project currently scores **48/100** using the prompt's proposed internal weights. This score reflects repository evidence only; it is not a claim about an unpublished live build.

## Phase 1: project discovery

- **Stack:** Next.js 14 App Router, React 18, TypeScript strict mode, Tailwind CSS, Framer Motion, lucide-react. No test, lint, or browser-test dependency is declared. `npm run lint` points to `next lint`, which is not a supported Next.js 14 lint command in this setup and has no ESLint configuration in the repo.
- **Routes:** `/`, `/about`, `/services`, `/programs`, `/opportunities`, `/opportunities/[slug]`, `/impact`, `/resources`, `/partner-with-us`, `/contact`, `/privacy`, `/terms`, and `/safeguarding`; Next.js supplies the default not-found route. Shared header, footer, breadcrumb, and reusable content cards are present.
- **Content and assets:** ten JSON content files; local images, logos, SVG illustrations, and Satoshi/Instrument Serif/Clash Display font files. Several assets and font families are unused or duplicated. Source files and README show mojibake in multiple strings, including `YaoundÃ©`, `â†’`, and `â€“`.
- **Deployment configuration:** Vercel and Netlify configuration exist. There is no evidence in the repo of a successful deployment, assigned preview URL, production smoke test, or owner handover. Netlify config uses `.next` as publish output with the Next plugin; verify that the selected adapter/deployment flow supports this configuration.
- **Design source:** no `.fig` or other Figma project file is present. Figma compliance and implementation fidelity cannot be verified.
- **Documentation:** a README and design-token document exist, but both describe behavior and a design language that do not fully match the implementation. For example, the README promises zero dead links, real-time opportunity filters including audience, and a production-grade contact system; the current code contradicts those claims.
- **Domain check:** the metadata defaults to `https://afriyouth.org`. The public site at that domain currently presents an organization called “AFRIYOUTH” with a different mission, contact details, and navigation from this Innovation Labs project. Confirm ownership and the correct competition deployment URL before pointing this project at that domain. [Public afriyouth.org site](https://afriyouth.org/)

## Requirement audit

| Area | Status | Evidence and gap |
|---|---|---|
| Organizational understanding | Partial | Positioning and service/program narratives are prominent. The stored mission and vision do not match the official wording supplied in the brief. Several claims and offerings have no source in the repository. |
| Information architecture | Partial | Main routes and a menu exist. The compact floating menu hides all navigation until opened; the desktop and mobile experience have not been visually exercised. Footer exposes many links but includes duplicate or unsupported product pathways. |
| Youth opportunity journey | Fails in key steps | Programs have eligibility and participation steps. Every opportunity is marked open, including a dated opportunity close to expiry; no application URL/system exists. The detail page calls an inquiry form an application and adds generic eligibility rules not present in each record. The filter does not filter by audience despite the page copy and README saying it does. |
| Organization services journey | Partial | Eight service records include descriptions, deliverables, client types, and contact CTAs. Evidence links resolve to local stories/resources whose truth and source are unverified; inquiry form success is not reliably delivered. |
| Partner journey | Partial / high trust risk | Partnership page has models and a form. Partner names and logos are represented in code, but no evidence or authorization is provided. Claims include legal registrations, donor reporting, government access, and performance rates without supporting material. |
| Functional requirements | Partial | Routes, navigation, search/filter, date/dropdown controls, and a contact form exist. Contact default only logs and returns success; newsletter only changes local state; resource download action is an alert; resource URLs are `#`; opportunity form is not an application system. |
| Responsive implementation | Unverified | Responsive Tailwind breakpoints are present. No browser or device testing was available, so none of the nine requested viewport widths can be marked as passed. Several narrow layouts need manual testing, particularly footer form, menu, long cards, custom popovers, and opportunity detail sticky sidebar. |
| Brand identity | Partial / fails exact supplied system | The dark purple, steel pink, and blues appear in source. Typography is Satoshi + Instrument Serif, whereas the prompt says Poppins + Gilroy. Mission/vision copy differs from the prompt. Extra neutral colors are reasonable, but occasional emerald/gray/red accents and the largely monochrome presentation need a brand rationale. |
| Accessibility | Partial / unverified | Skip link, labels, status/alert roles, some ARIA, keyboard Escape handling, and focus styles exist. Custom dropdown is a button/listbox with incomplete listbox keyboard behavior (no arrow navigation/active-descendant); menu focus is not trapped/restored; some interactive controls lack labels; custom date picker needs keyboard/screen-reader review. Contrast and motion behavior were not tested. |
| Development/maintainability | Partial | Strict TypeScript, content types, reusable cards, route metadata, sitemap, and robots route help. No tests/lint configuration; casts bypass JSON type checking; content model mixes active facts and examples; multiple large client components and hand-maintained docs increase drift. |
| Deployment/performance | Unverified | Platform files exist, but no build/deployment or URL for this repository was supplied. Large images are 144–528 KB, static images are generally routed through Next Image, but there are no measured Core Web Vitals or Lighthouse results. The domain currently appears to serve a different organization. |
| Content accuracy | Fails pending verification | Unsupported statistics (including 91%, 26 countries, funding and employment results), specific institutional partners, named testimonials, policy outcomes, grants/stipends, and active opportunities appear as factual claims. The supplied brief explicitly prohibits fabricating these. |
| Figma and handover | Partial / fails | Source code, assets, README, and design-token document exist. Figma design file and a verified deployment URL are absent. README includes fictional sample opportunity details and overstates functionality. Handover is not safe until content, forms, downloads, domain, and deployment are corrected/documented. |

## Audience scenario walkthroughs

### Young person seeking an opportunity

1. They can understand the broad mission and open `/programs` or `/opportunities`.
2. Program cards and details include eligibility, curriculum, duration, and participation steps.
3. The opportunities list has search, status, and type controls; the audience filter promised in copy is absent.
4. All six records are statically marked `open`. Deadlines are strings and status is not derived from the current date, so expired calls can remain open.
5. An opportunity detail page shows eligibility, but also injects two criteria for every call that are not in its record.
6. “Submit Candidacy Dossier” displays a generic contact form. There is no application upload, application-specific validation, or application endpoint. In local mode even the contact message is not delivered.

**Outcome:** discoverability is good; application truth, status accuracy, and actual submission are not. Never advertise a call as active until its owner confirms details, dates, and an application route.

### Organization seeking services

1. Services and deliverables are discoverable from the menu and homepage.
2. Eight service areas are described, with example client types and consultation CTAs.
3. A few related resources/stories can act as evidence, but the resources have no actual download files, and stories/metrics lack citations or provenance.
4. The contact form validates basic fields and has a honeypot. However, its default endpoint only writes to server logs and responds success; a visitor can believe a request was delivered when it was not.

**Outcome:** clear service structure, weak verifiable proof, and an unreliable inquiry handoff.

### Potential partner

1. The partner page explains four collaboration models and includes a contact form.
2. It makes strong claims about AU/ministry placements, co-investment, legal registrations, compliance, and survival rates without linked evidence.
3. Logo/text treatment names institutions and funders without proof of relationship or permission in this repo.
4. Form delivery shares the same default logging-only defect.

**Outcome:** the journey is easy to find but can undermine institutional credibility until claims are verified and inquiries are actually delivered.

## Critical and high-priority findings

### Critical

1. **False inquiry success:** `/api/contact` logs a record and returns `{success:true}` in the default configuration. No durable storage, email, or notification exists. Frontend then tells people their inquiry is transmitted and promises a response. This risks losing real youth, client, and partner requests.
2. **Fabricated/unsupported factual claims:** content includes high-specificity impact metrics, grants, fellowships, partner names, testimonials, policy changes, and operational footprints with no sources in the repository. This directly conflicts with the brief's no-fabrication rule and poses major reputational risk.
3. **Fake application flow:** opportunity page collects a general message and presents it as a candidacy dossier. Its criteria are partly hard-coded and generic. No real application mechanism or source URL is supplied.

### High

4. **False subscription confirmation:** footer accepts any string containing `@`, persists nothing, and reports a confirmed subscription.
5. **Fake resource downloads:** every `downloadUrl` is `#`; the button displays an alert rather than downloading a file.
6. **No Figma or verified deployment deliverables:** the project has platform configs only; no Figma file, deployment URL for this build, live smoke-test evidence, or handover owner supplied.
7. **Brand/source mismatch:** official mission, vision, and typefaces in the prompt differ from app content and loaded typefaces.
8. **No responsive/accessibility evidence:** code-level intent exists, but no actual viewport, keyboard, contrast, screen reader, or Lighthouse pass was recorded.

### Medium

9. Opportunity audience filtering is absent; open/closed values are not date-aware and displayed states can become stale.
10. Custom dropdown keyboard interaction is incomplete; custom date picker and menu focus management need an accessibility pass.
11. Metadata, social preview/canonical host, and sitemap defaults assume `afriyouth.org` without confirming that the domain belongs to this Innovation Labs project.
12. README and design tokens describe outdated or nonexistent interactions and include made-up example opportunity facts.
13. Encoding mojibake appears in repository text and can render visibly in live pages.
14. Duplicate logo/font/image assets and unused font files add handover ambiguity; image loading/performance claims are unmeasured.

### Low

15. Decorative card and scroll animations are repeated heavily; test reduced-motion behavior and perceived performance. Visual refinements should follow verification of content and journeys.
16. Some link text is generic, newsletter language claims a monthly publication, and footer links point to content whose existence is not established.

## Differentiation opportunities

1. Make the cross-disciplinary model tangible with a concise, accessible “research → design → policy → enterprise → learning” pathway connected to real, verified examples.
2. Build a trustworthy opportunity desk: owner-confirmed status, close date, eligibility, stipend/funding terms, application link, and last-verified date for each call.
3. Add a service-to-proof structure linking every capability to a published deliverable or clearly labeled anonymized sample; remove proof claims that cannot be evidenced.
4. Give each audience a real next step with reliable delivery and clear response expectations; show a confirmation reference only after durable submission.
5. Use verified African places, contributors, and project imagery with captions and context, then document image rights and source credits.
6. Submit the Figma source, component styles, responsive frames, content model, deployment details, and editor instructions as one handover package.

## Proposed scorecard

| Evaluation area | Weight | Score | Rationale |
|---|---:|---:|---|
| Understanding of AfriYouth and mission | 10 | 6 | Core concept and audiences are explained, but official mission/vision differ and unsupported facts blur the real organization. |
| Information architecture/navigation | 10 | 7 | Main routes and menu/footer pathways are clear; important links/content are unverified and menu interaction is not browser-tested. |
| UX and audience scenarios | 15 | 6 | Strong entry points and program detail; application, inquiry, and subscription endpoints do not fulfill their promises. |
| Visual design and brand consistency | 15 | 9 | Coherent editorial cards and brand colors; typography differs from supplied guidelines and implementation consistency is incomplete. |
| Responsive design/accessibility | 10 | 5 | Responsive classes and several accessibility basics exist; no device/AT validation and custom widgets have known keyboard gaps. |
| Functionality/completeness | 15 | 5 | Routes and filters exist, but downloads, subscriptions, local inquiries, and applications are not completed behaviors. |
| Technical quality/maintainability | 10 | 6 | Modern stack and reuse; no automated test/lint setup, docs drift, and weakly validated content assumptions. |
| Deployment/performance | 5 | 1 | Hosting configs exist, but this build's deployment is unverified and domain identity is unresolved; no performance measurements. |
| Content accuracy | 5 | 1 | Many concrete claims lack source evidence and the official copy diverges from the supplied brief. |
| Figma/handover readiness | 5 | 2 | Code/assets/docs exist; Figma and verified deployment/handover details are missing. |
| **Total** | **100** | **48** | **Significant weaknesses remain; submission is not ready until trust and functionality defects are resolved.** |

## Submission checklist at audit time

- [x] Functional website source exists (some flows are incomplete or misleading).
- [ ] Figma design files.
- [ ] Responsive implementation verified at 360, 375, 390, 430, 768, 1024, 1280, 1440, and 1920 px.
- [x] Navigation source exists; browser/mobile behavior unverified.
- [x] Homepage.
- [x] About section.
- [x] Services section.
- [x] Programs section.
- [ ] Contact mechanism verified end-to-end.
- [ ] Brand consistency with official copy and fonts.
- [ ] Working deployment URL for this project.
- [x] Project source code.
- [x] Project assets.
- [x] Documentation exists; correction needed.
- [ ] Handover readiness.

## Judge's verdict

The project could stand out through its clear ambition to connect research, policy, design, entrepreneurship, and foresight, and through its substantial route and component coverage. I would reject or heavily discount it in a final round if the unsupported statistics/partners/opportunities remain, if the contact form silently loses inquiries, or if the displayed download/application actions do not work. The most important next step is evidence and trust: confirm official facts, domain, and opportunity records; then make every visible action truthful and testable. No result in this repository supports a claim that the site is deployed or competition-ready yet.

## Phase 2: implementation and re-review

The implementation pass corrected the supplied mission and vision, removed unverified people, partners, opportunities, metrics, stories, and resource entries from the live content, and replaced empty datasets with explicit pending-content states. The opportunity listing now derives expiry from deadlines and offers an audience filter. Resource links only act as downloads when a real URL is configured. The newsletter no longer claims a subscription succeeded when it has no delivery service. The contact API returns a configuration error instead of silently claiming delivery when no provider is configured, and the opportunity detail page no longer presents a general inquiry as an application. Privacy, terms, and safeguarding pages now disclose that approved policy text is pending. README and design-token documentation were corrected to reflect the implementation and known gaps.

**Verification completed:** `npx.cmd tsc --noEmit` passed and `npm.cmd run build` passed. An isolated production-server smoke check returned HTTP 200 for the main routes, 404 for an unknown route, and 503 for a contact submission without a configured delivery provider. The isolated server and build output were removed after the check. No automated test suite, browser viewport run, keyboard/screen-reader audit, Lighthouse run, or real contact-provider delivery was performed.

### Updated scorecard

| Evaluation area | Weight | Updated score | Rationale |
|---|---:|---:|---|
| Understanding of AfriYouth and mission | 10 | 8 | Mission and vision now match the supplied brief; broader organizational claims still need owner verification. |
| Information architecture/navigation | 10 | 7 | Main audience routes remain clear; navigation and mobile behavior were not browser-tested. |
| UX and audience scenarios | 15 | 9 | Calls, resources, and applications no longer imply actions the site cannot complete; useful verified content is now sparse. |
| Visual design and brand consistency | 15 | 9 | The existing visual system remains coherent, but the required Poppins/Gilroy fonts are not supplied or implemented. |
| Responsive design/accessibility | 10 | 5 | Responsive classes and accessibility basics exist; requested viewport and assistive-technology checks remain unverified. |
| Functionality/completeness | 15 | 8 | Dead/false success actions were removed or made honest; contact delivery still needs configuration and real opportunities/resources are absent. |
| Technical quality/maintainability | 10 | 7 | Type check and production build pass; automated tests and lint setup remain absent. |
| Deployment/performance | 5 | 1 | No verified deployment or measured performance; project/domain identity remains unresolved. |
| Content accuracy | 5 | 4 | Unsupported high-specificity claims were removed from live pages; remaining organizational details need approval. |
| Figma/handover readiness | 5 | 3 | README and design tokens now document actual behavior; Figma and confirmed deployment details are still missing. |
| **Total** | **100** | **61** | **Trust and build quality improved; missing verified content, delivery configuration, visual validation, and deployment prevent a competition-ready verdict.** |

### Remaining owner inputs and release checks

- Confirm the correct public domain and whether `afriyouth.org` belongs to this Innovation Labs project. The public site checked during the audit appears to represent a different AfriYouth organization.
- Supply approved people, programs, active calls, partners, resources, impact evidence, contact details, and policy text with sources and permissions. The site intentionally shows pending states until this material is available.
- Configure and exercise the contact delivery provider before accepting public inquiries.
- Supply the Poppins/Gilroy font files or confirm an alternative, and provide the Figma source if one exists.
- Validate the nine requested viewport widths, keyboard/focus behavior, contrast, reduced motion, and real deployment before submission.

The existing development server on port 3000 may need a restart: a production build shared its `.next` directory and the previously running development server returned a missing-chunk error afterward. Restart that existing server to regenerate its development artifacts before previewing locally.
