import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site, about } from "@/lib/content";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { IntegratedNexusVisual } from "@/components/common/IntegratedNexusVisual";
import { Target, Compass, Shield, ArrowUpRight, Terminal } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us & Integrated Nexus Architecture",
  description:
    "Learn how AfriYouth Innovation Labs bridges applied research, policy shaping, human-centered design, venture acceleration, and strategic foresight across Africa.",
};

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Top Banner & Breadcrumb */}
      <div className="border-b border-white/[0.08] relative overflow-hidden pt-8 pb-14">
        <div className="absolute inset-0 cyber-grid-dense pointer-events-none opacity-30" />
        <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "About AfriYouth" }]} />
          <div className="max-w-3xl mt-4 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
              <Terminal className="w-3.5 h-3.5" />
              <span>// INSTITUTIONAL ARCHITECTURE</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-heading font-heading">
              Building the Pan-African Nexus for Youth Evidence & Scale
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              AfriYouth connects research, policy, human-centered design, entrepreneurship, and foresight. We are not just a youth organization, incubator, think tank, or training provider—we operate the integrated nexus that turns youth agency into systemic prosperity.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <section className="py-16 sm:py-24 border-b border-white/[0.08]" aria-labelledby="mission-heading">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-panel rounded-card p-8 sm:p-10 border border-white/10 shadow-cyberCard">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-6 border border-emerald-500/25">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-emerald-400 block mb-2">
                // OUR PURPOSE & CHARTER
              </span>
              <h2 id="mission-heading" className="text-2xl sm:text-3xl font-bold text-white mb-4 font-heading tracking-tight">
                The Mission
              </h2>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base font-normal">
                {about.mission}
              </p>
            </div>

            <div className="glass-panel rounded-card p-8 sm:p-10 border border-accent-500/20 shadow-cyberCard">
              <div className="w-12 h-12 rounded-xl bg-accent-500/10 text-accent-400 flex items-center justify-center mb-6 border border-accent-500/25">
                <Compass className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-accent-400 block mb-2">
                // CONTINENTAL HORIZON 2035
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-heading tracking-tight">
                The Vision
              </h2>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base font-normal">
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

      {/* 6 Brand Pillars */}
      <section className="py-16 sm:py-24 border-t border-white/[0.08]" aria-labelledby="pillars-heading">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
              // FOUNDATIONAL VALUES
            </span>
            <h2 id="pillars-heading" className="text-3xl sm:text-4xl font-extrabold text-white tracking-heading mt-3">
              The 6 Brand Pillars Guiding Our Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {site.brandPillars.map((pillar, i) => (
              <div key={i} className="glass-panel p-6 sm:p-7 rounded-card border border-white/10 shadow-cyberCard glass-card-interactive">
                <div className="w-8 h-8 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono font-bold flex items-center justify-center mb-4 text-xs">
                  0{i + 1}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 font-heading tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Governance */}
      <section id="team" className="py-20 sm:py-28 border-t border-white/[0.08]" aria-labelledby="team-heading">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-accent-500 bg-accent-500/10 border border-accent-500/20 px-3 py-1 rounded-full">
              // STEWARDSHIP & FACULTY
            </span>
            <h2 id="team-heading" className="text-3xl sm:text-5xl font-extrabold text-white tracking-heading mt-3">
              Steered by Pan-African Experts
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3 font-normal">
              {about.team.intro}
            </p>
          </div>

          {/* Leadership Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {about.team.leadership.map((member, idx) => (
              <div key={idx} className="glass-panel rounded-card border border-white/10 p-6 flex flex-col items-center text-center glass-card-interactive">
                <div className="relative w-28 h-28 rounded-full overflow-hidden mb-4 border-2 border-emerald-400/40 p-1 bg-ink-950">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-base font-bold text-white font-heading tracking-tight">
                  {member.name}
                </h3>
                <span className="text-xs font-mono text-emerald-400 mb-3 block">
                  {member.role}
                </span>
                <p className="text-xs text-slate-400 leading-relaxed font-normal">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>

          {/* Research Advisory Council */}
          <div className="glass-panel rounded-card border border-white/10 p-8 max-w-4xl mx-auto shadow-cyberCard">
            <h3 className="text-lg font-bold text-white mb-4 font-heading flex items-center gap-2">
              <Shield className="w-5 h-5 text-emerald-400" />
              <span>Research Advisory & Governance Council</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {about.team.advisoryCouncil.map((advisor, aIdx) => (
                <div key={aIdx} className="bg-ink-950/70 p-4 rounded-xl border border-white/5">
                  <strong className="text-sm font-bold text-white block font-heading tracking-tight">
                    {advisor.name}
                  </strong>
                  <span className="text-xs font-mono text-emerald-400 block">
                    {advisor.role}
                  </span>
                  <span className="text-xs text-slate-400 mt-1 block">
                    {advisor.affiliation}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Handover Bridge */}
      <section className="py-14 bg-gradient-to-r from-primary-800 to-ink-950 border-t border-white/10 text-center">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-white mb-4 tracking-tight">
            Want to learn more about our methodologies and operational governance?
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold font-heading bg-accent-500 text-ink-950 hover:bg-accent-400 transition-colors shadow-glowGold"
            >
              <span>Download Open Toolkits & Reports</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold font-heading border border-white/20 text-white hover:bg-white/[0.06] transition-colors"
            >
              <span>Contact Executive Directorate</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
