import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { impact, stories } from "@/lib/content";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ImpactMetrics } from "@/components/common/ImpactMetrics";
import { StoryCard } from "@/components/common/StoryCard";
import { Globe, BarChart3, CheckCircle, Terminal } from "lucide-react";

export const metadata: Metadata = {
  title: "Impact Telemetry, Stories & Evaluation Methodology",
  description:
    "Explore AfriYouth Innovation Labs verified impact metrics across 26 African countries, policy adoptions, venture survival rates, and community case studies.",
};

export default function ImpactPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Top Header & Breadcrumb */}
      <div className="border-b border-white/[0.08] relative overflow-hidden pt-8 pb-14">
        <div className="absolute inset-0 cyber-grid-dense pointer-events-none opacity-30" />
        <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Impact & Evidence" }]} />
          <div className="max-w-3xl mt-4 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-500/10 border border-accent-500/20 text-xs font-mono text-accent-400">
              <Terminal className="w-3.5 h-3.5" />
              <span>// VERIFIED LONGITUDINAL TELEMETRY</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-heading font-heading">
              Measuring What Matters: Continental Socio-Economic Impact
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {impact.summary}
            </p>
          </div>
        </div>
      </div>

      {/* Macro Metrics Block */}
      <ImpactMetrics showTitle={false} />

      {/* 3 Thematic Impact Pillars */}
      <section className="py-20 sm:py-28 border-t border-white/[0.08]" aria-labelledby="pillars-heading">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
              // TRANSFORMATION HORIZONS
            </span>
            <h2 id="pillars-heading" className="text-3xl sm:text-5xl font-extrabold text-white tracking-heading mt-3">
              Three Tangible Impact Horizons
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3 font-normal">
              How our integrated model creates self-sustaining changes across policy, market, and civic domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impact.pillars.map((pillar, i) => (
              <div key={i} className="glass-panel p-8 rounded-card border border-white/10 shadow-cyberCard flex flex-col justify-between glass-card-interactive">
                <div>
                  <span className="text-[10px] font-mono font-bold text-accent-400 uppercase tracking-widest block mb-2">
                    HORIZON 0{i + 1}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-heading tracking-tight">
                    {pillar.title}
                  </h3>
                  <div className="inline-block py-1 px-3 rounded bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono font-bold mb-4">
                    {pillar.metric}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Geographic Reach Section */}
      <section className="py-20 sm:py-28 border-t border-white/[0.08] relative overflow-hidden" aria-labelledby="geo-heading">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
              // CONTINENTAL DEPLOYMENT
            </span>
            <h2 id="geo-heading" className="text-3xl sm:text-5xl font-extrabold text-white tracking-heading mt-3">
              Active Operations Across 26 African Nations
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3 font-normal">
              AfriYouth maintains regional coordinating hubs in Nairobi, Kigali, Accra, and Johannesburg with embedded university research nodes and municipal partner desks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {impact.geographicReach.map((region) => (
              <div key={region.region} className="glass-panel p-5 rounded-card border border-white/10 shadow-cyberCard">
                <div className="flex items-center gap-2 mb-3 text-emerald-400 font-bold text-xs font-mono">
                  <Globe className="w-4 h-4 text-accent-500" />
                  <span>{region.region}</span>
                </div>
                <ul className="space-y-2 text-xs font-mono text-slate-300">
                  {region.countries.map((c) => (
                    <li key={c} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Stories / Case Studies */}
      <section id="stories" className="py-20 sm:py-28 border-t border-white/[0.08]" aria-labelledby="case-studies-heading">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
              // FIELD CASE STUDIES
            </span>
            <h2 id="case-studies-heading" className="text-3xl sm:text-5xl font-extrabold text-white tracking-heading mt-3">
              Voices of Change & Partnership Testimonials
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3 font-normal">
              Real-world accounts demonstrating how youth-generated evidence transforms municipal delivery and community livelihoods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stories.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        </div>
      </section>

      {/* Rigorous Impact Methodology */}
      <section className="py-20 border-t border-white/[0.08]" aria-labelledby="methodology-heading">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto glass-panel p-8 sm:p-10 rounded-card border border-white/10 shadow-cyberCard space-y-4">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
              <BarChart3 className="w-5 h-5" />
            </div>
            <h3 id="methodology-heading" className="text-xl sm:text-2xl font-bold text-white font-heading">
              {impact.methodology.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              {impact.methodology.description}
            </p>

            <div className="pt-3">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 block mb-2">
                // COMPLIANCE STANDARDS & EVALUATION BENCHMARKS
              </span>
              <div className="flex flex-wrap gap-2">
                {impact.methodology.frameworks.map((fw, fIdx) => (
                  <span
                    key={fIdx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-white/[0.04] border border-white/10 text-emerald-400"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-accent-500" />
                    <span>{fw}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
