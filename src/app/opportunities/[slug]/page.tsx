import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { opportunities, getOpportunityBySlug } from "@/lib/content";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ContactForm } from "@/components/common/ContactForm";
import { Calendar, MapPin, Award, CheckCircle2, ArrowLeft } from "lucide-react";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return opportunities.map((opp) => ({
    slug: opp.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const opportunity = getOpportunityBySlug(params.slug);
  if (!opportunity) {
    return { title: "Opportunity Not Found" };
  }
  return {
    title: `${opportunity.title} | AfriYouth Opportunities`,
    description: opportunity.summary,
  };
}

export default function OpportunityDetailPage({ params }: PageProps) {
  const opportunity = getOpportunityBySlug(params.slug);

  if (!opportunity) {
    notFound();
  }

  const isOpen = opportunity.status === "open";

  return (
    <div className="relative overflow-hidden">
      {/* Top Header & Breadcrumb */}
      <div className="border-b border-white/[0.08] relative overflow-hidden pt-8 pb-14">
        <div className="absolute inset-0 cyber-grid-dense pointer-events-none opacity-30" />
        <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Opportunities", href: "/opportunities" },
              { label: opportunity.title },
            ]}
          />

          <div className="max-w-3xl mt-4 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 px-2.5 py-0.5 rounded">
                {opportunity.type}
              </span>
              <span className="text-[11px] font-mono text-slate-300 bg-white/[0.04] border border-white/10 px-2 py-0.5 rounded">
                {opportunity.audience}
              </span>
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-mono font-bold ${
                  isOpen
                    ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                    : "bg-white/[0.05] text-slate-400 border border-white/10"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    isOpen ? "bg-emerald-400 animate-pulse" : "bg-slate-500"
                  }`}
                />
                {isOpen ? "ACCEPTING APPLICATIONS" : "COHORT IN SESSION"}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-heading font-heading">
              {opportunity.title}
            </h1>

            {/* Benefit banner */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-accent-500/10 border border-accent-500/30 text-accent-400 text-sm font-bold font-mono">
              <Award className="w-5 h-5 text-accent-500" />
              <span>{opportunity.benefit}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content & Application Desk */}
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Guidelines & Details */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-400 block">
                // INITIATIVE BRIEF
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                Operational Overview
              </h2>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base font-normal">
                {opportunity.description}
              </p>
            </div>

            {/* Metadata Card */}
            <div className="glass-panel rounded-card border border-white/10 p-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-1">
                  DEADLINE
                </span>
                <div className="flex items-center gap-1.5 text-sm font-semibold text-white font-mono">
                  <Calendar className="w-4 h-4 text-emerald-400" />
                  <span>{opportunity.deadline}</span>
                </div>
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-1">
                  START DATE
                </span>
                <span className="text-sm font-semibold text-white font-mono block">
                  {opportunity.startDate}
                </span>
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-1">
                  LOCATION / FORMAT
                </span>
                <div className="flex items-center gap-1.5 text-sm font-semibold text-white font-mono">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <span>{opportunity.location}</span>
                </div>
              </div>
            </div>

            {/* Eligibility Requirements */}
            <div className="space-y-4 pt-4 border-t border-white/[0.08]">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-accent-500 block">
                // SELECTION CRITERIA
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-heading">
                Eligibility & Candidate Profile
              </h2>
              <div className="glass-panel p-6 rounded-card border border-white/10 space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {opportunity.eligibility}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    Must possess legal citizenship or resident status in an African Union member state.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    Commitment to adhere to AfriYouth research ethics, data sovereignty, and open-source dissemination principles.
                  </p>
                </div>
              </div>
            </div>

            {/* Back link */}
            <div className="pt-6">
              <Link
                href="/opportunities"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold text-slate-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>&lt;&lt; BACK TO ALL OPPORTUNITIES</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Application Desk */}
          <div className="lg:col-span-5">
            <div className="glass-panel rounded-card border border-white/10 p-6 sm:p-8 shadow-cyberCard sticky top-28 space-y-6">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-400 block mb-1">
                  // CANDIDACY TRANSMISSION DESK
                </span>
                <h3 className="text-xl font-bold text-white font-heading">
                  {isOpen ? "Submit Candidacy Dossier" : "Register for Next Cycle"}
                </h3>
                <p className="text-xs text-slate-400 mt-1 font-normal">
                  {isOpen
                    ? "Fill out this form to submit your candidacy. Applications are reviewed on a rolling basis."
                    : "This cohort is currently in session. Register your coordinate to receive instant notification upon cycle opening."}
                </p>
              </div>

              <ContactForm
                initialSubject={`Application: ${opportunity.title}`}
                initialAudience="youth"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
