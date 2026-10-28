import React from "react";
import Link from "next/link";
import Image from "next/image";
import { site, programs, opportunities, services, stories } from "@/lib/content";
import { AudienceSelector } from "@/components/common/AudienceSelector";
import { IntegratedNexusVisual } from "@/components/common/IntegratedNexusVisual";
import { ImpactMetrics } from "@/components/common/ImpactMetrics";
import { ProgramCard } from "@/components/common/ProgramCard";
import { OpportunityCard } from "@/components/common/OpportunityCard";
import { ServiceCard } from "@/components/common/ServiceCard";
import { StoryCard } from "@/components/common/StoryCard";
import { PartnerShowcase } from "@/components/common/PartnerShowcase";
import { ArrowUpRight } from "lucide-react";

export default function HomePage() {
  const featuredPrograms = programs.slice(0, 3);
  const openOpportunities = opportunities.filter((o) => o.status === "open").slice(0, 3);
  const featuredServices = services.slice(0, 3);
  const featuredStories = stories.slice(0, 2);

  return (
    <div className="flex flex-col">
      {/* 1. Minimalist Hero Section (Palladio Style) */}
      <section className="pt-24 pb-20 sm:pt-36 sm:pb-28">
        <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
          {/* Tagline */}
          <div className="mb-6 sm:mb-8">
            <span className="inline-block text-[11px] font-semibold uppercase tracking-widePill text-stone-500 border border-stone-300 px-3 py-1 rounded-pill bg-white/50">
              AfriYouth Innovation Labs &bull; Est. 2026
            </span>
          </div>

          {/* Outcome-led Headline in Clash Display */}
          <div className="max-w-4xl space-y-6 sm:space-y-8">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-stone-900 tracking-display leading-[1.08] font-heading">
              Evidence and ventures behind bold African decisions.
            </h1>

            <p className="text-lg sm:text-xl text-stone-600 leading-relaxed font-normal max-w-2xl">
              AfriYouth connects grassroots research, parliamentary policy drafting, human-centered design, and venture scale across 26 countries.
            </p>

            {/* 2 Minimalist Pill Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Link
                href="/opportunities"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-pill text-xs font-semibold bg-stone-900 text-white hover:bg-stone-800 transition-colors shadow-sm"
              >
                <span>Explore Opportunities</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/partner-with-us"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-pill text-xs font-semibold border border-stone-300 text-stone-900 hover:bg-stone-200/50 transition-colors"
              >
                <span>Partner With Us</span>
              </Link>
            </div>
          </div>

          {/* Large Architectural Visual Frame (Palladio Minimalist ratio) */}
          <div className="mt-16 sm:mt-24 relative w-full aspect-[21/9] rounded-card overflow-hidden bg-stone-200 border border-stone-300">
            <Image
              src="/images/stories/kigali-air.svg"
              alt="AfriYouth Innovation Labs Nexus Architecture"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 bg-stone-900/80 backdrop-blur-md text-white text-xs font-semibold px-4 py-2 rounded-pill">
              Kigali Innovation Hub &bull; Sensor Lab & Policy Desk
            </div>
          </div>

          {/* Minimalist 4-Column Metric Ticker with Hairlines */}
          <div className="mt-16 sm:mt-24 pt-12 border-t border-stone-300 grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <span className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-heading block tracking-tight">
                48,500+
              </span>
              <span className="text-xs text-stone-500 font-medium uppercase tracking-wider block mt-1">
                Leaders Engaged
              </span>
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-heading block tracking-tight">
                26 Nations
              </span>
              <span className="text-xs text-stone-500 font-medium uppercase tracking-wider block mt-1">
                Active Operations
              </span>
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-heading block tracking-tight">
                38 Policies
              </span>
              <span className="text-xs text-stone-500 font-medium uppercase tracking-wider block mt-1">
                Frameworks Influenced
              </span>
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-extrabold text-stone-900 font-heading block tracking-tight">
                $6.4M+
              </span>
              <span className="text-xs text-stone-500 font-medium uppercase tracking-wider block mt-1">
                Capital Mobilized
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Audience Selector */}
      <AudienceSelector />

      {/* 3. 'How our work connects' visual */}
      <IntegratedNexusVisual />

      {/* 4. Services Overview */}
      <section className="py-24 sm:py-36 bg-stone-150/40 hairline-b hairline-t" aria-labelledby="services-overview-heading">
        <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
            <div className="max-w-xl space-y-3">
              <span className="text-[11px] font-semibold uppercase tracking-widePill text-stone-500">
                Institutional Capabilities
              </span>
              <h2 id="services-overview-heading" className="text-3xl sm:text-5xl font-extrabold text-stone-900 tracking-display">
                Advisory for modern institutions.
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-900 hover:text-terracotta-500 transition-colors shrink-0"
            >
              <span>View All 6 Services</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Featured Programs */}
      <section className="py-24 sm:py-36" aria-labelledby="programs-overview-heading">
        <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
            <div className="max-w-xl space-y-3">
              <span className="text-[11px] font-semibold uppercase tracking-widePill text-stone-500">
                Flagship Cohorts
              </span>
              <h2 id="programs-overview-heading" className="text-3xl sm:text-5xl font-extrabold text-stone-900 tracking-display">
                Fellowships and venture labs.
              </h2>
            </div>
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-900 hover:text-terracotta-500 transition-colors shrink-0"
            >
              <span>Explore Programs</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPrograms.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Open Opportunities */}
      <section className="py-24 sm:py-36 bg-stone-150/40 hairline-b hairline-t" aria-labelledby="opportunities-overview-heading">
        <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
            <div className="max-w-xl space-y-3">
              <span className="text-[11px] font-semibold uppercase tracking-widePill text-stone-500">
                Live Calls & Grants
              </span>
              <h2 id="opportunities-overview-heading" className="text-3xl sm:text-5xl font-extrabold text-stone-900 tracking-display">
                Open for applications.
              </h2>
            </div>
            <Link
              href="/opportunities"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-900 hover:text-terracotta-500 transition-colors shrink-0"
            >
              <span>Filter Opportunities</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {openOpportunities.map((opportunity) => (
              <OpportunityCard key={opportunity.id} opportunity={opportunity} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. Impact Numbers */}
      <ImpactMetrics />

      {/* 8. Field Stories */}
      <section className="py-24 sm:py-36" aria-labelledby="stories-heading">
        <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-2xl mb-16 sm:mb-20 space-y-3">
            <span className="text-[11px] font-semibold uppercase tracking-widePill text-stone-500">
              Proof Points
            </span>
            <h2 id="stories-heading" className="text-3xl sm:text-5xl font-extrabold text-stone-900 tracking-display">
              Stories of systemic change.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {featuredStories.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>

          <div className="mt-16 text-right">
            <Link
              href="/impact#stories"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-900 hover:text-terracotta-500 transition-colors"
            >
              <span>Read All Case Studies</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. Partner Logos Showcase */}
      <PartnerShowcase />

      {/* 10. Minimalist Final Call to Action */}
      <section className="py-28 sm:py-40 bg-stone-900 text-stone-100">
        <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="text-[11px] font-semibold uppercase tracking-widePill text-stone-400">
              Get Started
            </span>
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-display font-heading text-stone-100">
              Turn youth agency into continental scale.
            </h2>
            <p className="text-stone-400 text-base sm:text-lg max-w-xl mx-auto font-normal">
              Whether you are applying for a fellowship or co-funding a national lab, AfriYouth is your execution partner.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <Link
                href="/opportunities"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-pill text-xs font-semibold bg-stone-100 text-stone-900 hover:bg-white transition-colors"
              >
                <span>Find an Open Opportunity</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-pill text-xs font-semibold border border-stone-700 text-stone-200 hover:bg-stone-800 transition-colors"
              >
                <span>Start a Dialogue</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
