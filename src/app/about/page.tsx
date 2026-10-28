import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site, about } from "@/lib/content";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { IntegratedNexusVisual } from "@/components/common/IntegratedNexusVisual";
import { Target, Compass, Sparkles, Shield, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us & Integrated Approach",
  description:
    "Learn how AfriYouth Innovation Labs bridges research, policy shaping, human-centered design, entrepreneurship, and strategic foresight across Africa.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Top Banner & Breadcrumb */}
      <div className="bg-surface border-b border-line">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs items={[{ label: "About AfriYouth" }]} />
          <div className="max-w-3xl mt-4">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-700 bg-primary-50 px-3 py-1 rounded-full">
              Institutional Mandate
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-ink-900 tracking-heading mt-3">
              Building the Pan-African Nexus for Youth Evidence & Ventures
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
              AfriYouth connects research, policy, human-centered design, entrepreneurship, and foresight. We are not just a youth organization, incubator, think tank, or training provider—we operate the integrated nexus that turns youth agency into systemic prosperity.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <section className="py-16 sm:py-20 border-b border-line" aria-labelledby="mission-heading">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-surface rounded-card border border-line p-8 sm:p-10 shadow-subtle">
              <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-700 flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-primary-700 block mb-2">
                Our Purpose
              </span>
              <h2 id="mission-heading" className="text-2xl font-bold text-ink-900 mb-4 font-heading">
                The Mission
              </h2>
              <p className="text-slate-700 leading-relaxed text-base">
                {about.mission}
              </p>
            </div>

            <div className="bg-ink-900 text-white rounded-card border border-ink-800 p-8 sm:p-10 shadow-card">
              <div className="w-12 h-12 rounded-xl bg-ink-800 text-accent-500 flex items-center justify-center mb-6 border border-ink-700">
                <Compass className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-accent-500 block mb-2">
                Continental Horizon
              </span>
              <h2 className="text-2xl font-bold text-white mb-4 font-heading">
                The Vision
              </h2>
              <p className="text-slate-200 leading-relaxed text-base">
                {about.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integrated Model Visual Component */}
      <div id="integrated-model">
        <IntegratedNexusVisual />
      </div>

      {/* Brand Pillars */}
      <section className="py-16 sm:py-20 bg-surface border-y border-line" aria-labelledby="pillars-heading">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-700 bg-primary-50 px-3 py-1 rounded-full">
              Core Principles
            </span>
            <h2 id="pillars-heading" className="text-2xl sm:text-3xl font-extrabold text-ink-900 tracking-heading mt-3">
              The 6 Brand Pillars Guiding Our Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {site.brandPillars.map((pillar, i) => (
              <div key={i} className="bg-white p-6 rounded-card border border-line shadow-subtle card-lift">
                <div className="w-8 h-8 rounded-lg bg-accent-50 text-accent-600 font-bold flex items-center justify-center mb-4 text-sm font-heading">
                  0{i + 1}
                </div>
                <h3 className="text-lg font-bold text-ink-900 mb-2 font-heading">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Governance Placeholder */}
      <section id="team" className="py-16 sm:py-24" aria-labelledby="team-heading">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-700 bg-primary-50 px-3 py-1 rounded-full">
              Leadership & Oversight
            </span>
            <h2 id="team-heading" className="text-2xl sm:text-4xl font-extrabold text-ink-900 tracking-heading mt-3">
              Steered by Pan-African Experts
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              {about.team.intro}
            </p>
          </div>

          {/* Leadership Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {about.team.leadership.map((member, idx) => (
              <div key={idx} className="bg-white rounded-card border border-line overflow-hidden shadow-subtle p-6 flex flex-col items-center text-center">
                <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-line">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-base font-bold text-ink-900 font-heading">
                  {member.name}
                </h3>
                <span className="text-xs font-semibold text-primary-700 mb-3 block">
                  {member.role}
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>

          {/* Research Advisory Council */}
          <div className="bg-surface rounded-card border border-line p-8 max-w-4xl mx-auto">
            <h3 className="text-lg font-bold text-ink-900 mb-4 font-heading flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary-700" />
              <span>Research Advisory & Governance Council</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {about.team.advisoryCouncil.map((advisor, aIdx) => (
                <div key={aIdx} className="bg-white p-4 rounded-lg border border-line/80">
                  <strong className="text-sm font-bold text-ink-900 block font-heading">
                    {advisor.name}
                  </strong>
                  <span className="text-xs font-medium text-primary-700 block">
                    {advisor.role}
                  </span>
                  <span className="text-xs text-slate-500 mt-1 block">
                    {advisor.affiliation}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Handover & Contact Bridge */}
      <section className="py-12 bg-primary-700 text-white text-center">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-bold font-heading mb-3">
            Want to learn more about our methodologies and operational governance?
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-accent-500 text-ink-900 hover:bg-accent-600 transition-colors"
            >
              <span>Download Open Toolkits & Reports</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold border border-white/40 text-white hover:bg-white/10 transition-colors"
            >
              <span>Contact Executive Directorate</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
