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
import { ArrowUpRight, Sparkles, CheckCircle2, Terminal, Activity, ShieldCheck } from "lucide-react";

export default function HomePage() {
  const featuredPrograms = programs.slice(0, 3);
  const openOpportunities = opportunities.filter((o) => o.status === "open").slice(0, 3);
  const featuredServices = services.slice(0, 3);
  const featuredStories = stories.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* 1. Futuristic Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-28 sm:pt-36 sm:pb-40 border-b border-white/[0.08]">
        {/* Futuristic Cyber Aura & Horizon Lighting */}
        <div className="absolute inset-0 cyber-grid pointer-events-none opacity-30" />
        <div className="absolute top-1/4 -left-48 w-96 h-96 rounded-full bg-primary-600/20 blur-[130px] pointer-events-none" />
        <div className="absolute -top-20 right-0 w-[550px] h-[550px] rounded-full bg-accent-500/15 blur-[150px] pointer-events-none" />

        <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            {/* Holographic pill badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-ink-900/90 border border-emerald-500/30 text-xs font-mono text-emerald-400 mb-8 shadow-glowEmerald backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>NEXUS PROTOCOL ACTIVE // 26 CONTINENTAL NODES</span>
            </div>

            {/* Outcome-led Headline in Clash Display */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-display leading-[1.08] mb-8 font-heading">
              Transforming Youth Evidence into <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-accent-400">Policy Power</span> & Scale
            </h1>

            {/* Subhead */}
            <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-normal mb-10 max-w-2xl">
              AfriYouth connects grassroots research, parliamentary policy drafting, human-centered design, and seed capital. We operate the integrated nexus powering Africa&apos;s socio-economic future.
            </p>

            {/* 2 Cyber CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/opportunities"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold font-heading bg-accent-500 text-ink-950 hover:bg-accent-400 transition-all duration-200 shadow-glowGold hover:shadow-[0_0_30px_rgba(242,169,0,0.6)] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent-500"
              >
                <span>Explore Open Opportunities</span>
                <ArrowUpRight className="w-5 h-5" />
              </Link>
              <Link
                href="/partner-with-us"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold font-heading border border-white/20 text-white hover:bg-white/[0.06] hover:border-white/40 transition-colors backdrop-blur-sm"
              >
                <span>Partner With Us</span>
              </Link>
            </div>

            {/* Futuristic Live Telemetry Strip */}
            <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>26 NATIONS EMBEDDED</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-accent-500" />
                <span>38 POLICIES ENACTED</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-sky-400" />
                <span>$6.4M+ CAPITAL MOBILIZED</span>
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
      <section className="py-20 sm:py-28 relative overflow-hidden" aria-labelledby="services-overview-heading">
        <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 mb-3">
                <Terminal className="w-3.5 h-3.5" />
                <span>INSTITUTIONAL CAPABILITIES</span>
              </div>
              <h2 id="services-overview-heading" className="text-3xl sm:text-5xl font-extrabold text-white tracking-heading">
                Turnkey Advisory for Governments & Donors
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-xl font-normal">
                From field surveys of 10,000+ citizens to legislative drafting and sovereign incubator management.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-bold font-heading text-accent-400 hover:text-white transition-colors shrink-0"
            >
              <span>View All 6 Client Services</span>
              <ArrowUpRight className="w-4 h-4" />
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
      <section className="py-20 sm:py-28 relative overflow-hidden border-t border-white/[0.08]" aria-labelledby="programs-overview-heading">
        <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-500/10 border border-accent-500/20 text-xs font-mono text-accent-400 mb-3">
                <Activity className="w-3.5 h-3.5" />
                <span>FLAGSHIP FELLOWSHIPS & LABS</span>
              </div>
              <h2 id="programs-overview-heading" className="text-3xl sm:text-5xl font-extrabold text-white tracking-heading">
                Rigorous Programs for High-Potential Youth
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-xl font-normal">
                Structured cohorts equipping young leaders with technical toolkits, AU placements, and catalytic seed grants.
              </p>
            </div>
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 text-sm font-bold font-heading text-accent-400 hover:text-white transition-colors shrink-0"
            >
              <span>Explore All Programs</span>
              <ArrowUpRight className="w-4 h-4" />
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
      <section className="py-20 sm:py-28 relative overflow-hidden border-t border-white/[0.08]" aria-labelledby="opportunities-overview-heading">
        <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>LIVE CALLS & ACTIVE GRANTS</span>
              </div>
              <h2 id="opportunities-overview-heading" className="text-3xl sm:text-5xl font-extrabold text-white tracking-heading">
                Active Calls Accepting Applications
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-xl font-normal">
                Fully funded stipends, innovation challenge grants, and peer-reviewed journal submissions.
              </p>
            </div>
            <Link
              href="/opportunities"
              className="inline-flex items-center gap-2 text-sm font-bold font-heading text-accent-400 hover:text-white transition-colors shrink-0"
            >
              <span>View Filterable Opportunities Portal</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {openOpportunities.map((opportunity) => (
              <OpportunityCard key={opportunity.id} opportunity={opportunity} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. Impact Numbers HUD */}
      <ImpactMetrics />

      {/* 8. Field Stories & Testimonials */}
      <section className="py-20 sm:py-28 relative overflow-hidden border-t border-white/[0.08]" aria-labelledby="stories-heading">
        <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>FIELD REALITIES & PROOF POINTS</span>
            </div>
            <h2 id="stories-heading" className="text-3xl sm:text-5xl font-extrabold text-white tracking-heading">
              Stories of Systemic Change
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3 font-normal">
              From IoT air monitoring in Rwanda to circular textile upcycling in Ghana, meet the pioneers shaping Africa&apos;s tomorrow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredStories.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/impact#stories"
              className="inline-flex items-center gap-2 text-sm font-bold font-heading text-accent-400 hover:text-white transition-colors"
            >
              <span>Read More Impact Case Studies & Testimonials</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. Partner Logos Showcase */}
      <PartnerShowcase />

      {/* 10. Futuristic Final Call to Action */}
      <section className="py-24 sm:py-36 relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-900/20 to-ink-950 pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-accent-500/15 blur-[140px] pointer-events-none" />

        <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
              // JOIN THE NEXUS TODAY
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-display font-heading">
              Ready to Turn Youth Agency into Continental Scale?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
              Whether you are applying for a fellowship, commissioning grassroots research, or co-funding a national lab, AfriYouth is your execution partner.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/opportunities"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold font-heading bg-accent-500 text-ink-950 hover:bg-accent-400 transition-colors shadow-glowGold"
              >
                <span>Find an Open Opportunity</span>
                <ArrowUpRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold font-heading border border-white/20 text-white hover:bg-white/[0.06] transition-colors"
              >
                <span>Initiate Institutional Dialogue</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
