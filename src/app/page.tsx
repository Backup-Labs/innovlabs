import React from "react";
import Link from "next/link";
import { site, programs, opportunities, services, stories } from "@/lib/content";
import { AudienceSelector } from "@/components/common/AudienceSelector";
import { IntegratedNexusVisual } from "@/components/common/IntegratedNexusVisual";
import { ImpactMetrics } from "@/components/common/ImpactMetrics";
import { ProgramCard } from "@/components/common/ProgramCard";
import { OpportunityCard } from "@/components/common/OpportunityCard";
import { ServiceCard } from "@/components/common/ServiceCard";
import { StoryCard } from "@/components/common/StoryCard";
import { PartnerShowcase } from "@/components/common/PartnerShowcase";
import { ArrowRight, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";

export default function HomePage() {
  const featuredPrograms = programs.slice(0, 3);
  const openOpportunities = opportunities.filter((o) => o.status === "open").slice(0, 3);
  const featuredServices = services.slice(0, 3);
  const featuredStories = stories.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-ink-900 text-white pt-20 pb-24 sm:pt-28 sm:pb-32">
        {/* Subtle geometric background aura */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary-600 blur-3xl" />
          <div className="absolute bottom-0 -left-20 w-80 h-80 rounded-full bg-accent-500 blur-3xl" />
        </div>

        <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-800/80 border border-primary-600/70 text-xs font-semibold text-accent-500 mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Pan-African Youth Evidence & Venture Engine</span>
            </div>

            {/* Outcome-led Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-heading leading-tight mb-6">
              Transforming Youth Evidence into <span className="text-accent-500">Policy Power</span> & Sustainable Ventures
            </h1>

            {/* Subhead */}
            <p className="text-base sm:text-xl text-slate-200 leading-relaxed font-normal mb-8 max-w-2xl">
              AfriYouth connects grassroots research, parliamentary policy drafting, human-centered design, and seed capital. We are the integrated nexus driving Africa&apos;s socio-economic transformation.
            </p>

            {/* 2 CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/opportunities"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-base font-bold bg-accent-500 text-ink-900 hover:bg-accent-600 transition-colors shadow-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent-500"
              >
                <span>Explore Open Opportunities</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/partner-with-us"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-base font-semibold border border-line/40 text-white hover:bg-white/10 transition-colors"
              >
                <span>Partner With Us</span>
              </Link>
            </div>

            {/* Trust Points */}
            <div className="mt-10 pt-8 border-t border-ink-800/80 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent-500 shrink-0" />
                <span>26 African Countries Active</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent-500 shrink-0" />
                <span>38 Policy Frameworks Influenced</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent-500 shrink-0" />
                <span>$6.4M+ Catalytic Funding Unlocked</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Audience Selector */}
      <AudienceSelector />

      {/* 3. 'How our work connects' visual */}
      <IntegratedNexusVisual />

      {/* 4. Services Overview */}
      <section className="py-16 sm:py-24 bg-surface border-y border-line" aria-labelledby="services-overview-heading">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-primary-700 bg-primary-50 px-3 py-1 rounded-full">
                Institutional Capabilities
              </span>
              <h2 id="services-overview-heading" className="text-2xl sm:text-4xl font-extrabold text-ink-900 tracking-heading mt-3">
                Services for Governments, Donors & Startups
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl">
                From field surveys of 10,000+ citizens to legislative drafting and incubator operations, we provide turnkey advisory and co-design.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary-700 hover:text-primary-600 transition-colors shrink-0"
            >
              <span>View All 6 Client Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Featured Programs */}
      <section className="py-16 sm:py-24 bg-white" aria-labelledby="programs-overview-heading">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-primary-700 bg-primary-50 px-3 py-1 rounded-full">
                Flagship Fellowships & Labs
              </span>
              <h2 id="programs-overview-heading" className="text-2xl sm:text-4xl font-extrabold text-ink-900 tracking-heading mt-3">
                Rigorous Programs for High-Potential Youth
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl">
                Structured cohorts equipping young leaders with technical toolkits, AU placements, catalytic seed grants, and community design labs.
              </p>
            </div>
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary-700 hover:text-primary-600 transition-colors shrink-0"
            >
              <span>Explore All Programs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPrograms.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Open Opportunities */}
      <section className="py-16 sm:py-24 bg-surface border-y border-line" aria-labelledby="opportunities-overview-heading">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                Live Calls & Grants
              </span>
              <h2 id="opportunities-overview-heading" className="text-2xl sm:text-4xl font-extrabold text-ink-900 tracking-heading mt-3">
                Active Calls Accepting Applications
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl">
                Fully funded stipends, innovation challenge grants, and peer-reviewed journal submissions with active deadlines.
              </p>
            </div>
            <Link
              href="/opportunities"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary-700 hover:text-primary-600 transition-colors shrink-0"
            >
              <span>View Filterable Opportunities Portal</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {openOpportunities.map((opportunity) => (
              <OpportunityCard key={opportunity.id} opportunity={opportunity} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. Impact Numbers */}
      <ImpactMetrics />

      {/* 8. Stories / Testimonials */}
      <section className="py-16 sm:py-24 bg-white" aria-labelledby="stories-heading">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-700 bg-primary-50 px-3 py-1 rounded-full">
              Field Realities & Proof Points
            </span>
            <h2 id="stories-heading" className="text-2xl sm:text-4xl font-extrabold text-ink-900 tracking-heading mt-3">
              Stories of Systemic Change
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              From IoT air monitoring in Rwanda to circular textile factories in Ghana, meet the young leaders shaping Africa&apos;s tomorrow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredStories.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/impact#stories"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary-700 hover:text-primary-600 transition-colors"
            >
              <span>Read More Impact Case Studies & Testimonials</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. Partner Logos Showcase */}
      <PartnerShowcase />

      {/* 10. Final Call to Action */}
      <section className="py-20 sm:py-28 bg-ink-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-accent-500 blur-3xl" />
        </div>

        <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-accent-500 bg-ink-800 px-3 py-1 rounded-full border border-ink-700">
              Get Involved Today
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-heading">
              Ready to Turn Youth Agency into Continental Prosperity?
            </h2>
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
              Whether you are applying for a fellowship, commissioning grassroots research, or co-funding a national lab, AfriYouth is your execution partner.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/opportunities"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-base font-bold bg-accent-500 text-ink-900 hover:bg-accent-600 transition-colors shadow-sm"
              >
                <span>Find an Open Opportunity</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-base font-semibold border border-line/40 text-white hover:bg-white/10 transition-colors"
              >
                <span>Initiate an Institutional Dialogue</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
