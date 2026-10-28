import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { impact, stories } from "@/lib/content";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ImpactMetrics } from "@/components/common/ImpactMetrics";
import { StoryCard } from "@/components/common/StoryCard";
import { Globe, Award, ShieldCheck, ArrowRight, BarChart3, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Impact Metrics, Stories & Evaluation Methodology",
  description:
    "Explore AfriYouth Innovation Labs verified impact metrics across 26 African countries, policy adoptions, venture survival rates, and community case studies.",
};

export default function ImpactPage() {
  return (
    <div className="bg-white">
      {/* Top Header & Breadcrumb */}
      <div className="bg-surface border-b border-line">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs items={[{ label: "Impact & Evidence" }]} />
          <div className="max-w-3xl mt-4">
            <span className="text-xs font-bold uppercase tracking-wider text-accent-600 bg-accent-50 px-3 py-1 rounded-full border border-accent-100">
              Verified Evidence & Scale
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-ink-900 tracking-heading mt-3">
              Measuring What Matters: Continental Socio-Economic Impact
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
              {impact.summary}
            </p>
          </div>
        </div>
      </div>

      {/* Macro Metrics Block */}
      <ImpactMetrics showTitle={false} className="border-b border-ink-800" />

      {/* 3 Thematic Impact Pillars */}
      <section className="py-16 sm:py-24" aria-labelledby="pillars-heading">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-700 bg-primary-50 px-3 py-1 rounded-full">
              Pillars of Transformation
            </span>
            <h2 id="pillars-heading" className="text-2xl sm:text-4xl font-extrabold text-ink-900 tracking-heading mt-3">
              Three Tangible Impact Horizons
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              How our integrated model creates self-sustaining changes across policy, market, and civic domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impact.pillars.map((pillar, i) => (
              <div key={i} className="bg-white p-8 rounded-card border border-line shadow-subtle flex flex-col justify-between card-lift">
                <div>
                  <span className="text-xs font-bold text-accent-600 uppercase tracking-wider block mb-2 font-heading">
                    Pillar 0{i + 1}
                  </span>
                  <h3 className="text-xl font-bold text-ink-900 mb-2 font-heading">
                    {pillar.title}
                  </h3>
                  <div className="inline-block py-1 px-2.5 rounded bg-primary-50 text-primary-700 text-xs font-bold mb-4">
                    {pillar.metric}
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Geographic Reach Section */}
      <section className="py-16 sm:py-20 bg-surface border-y border-line" aria-labelledby="geo-heading">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-700 bg-primary-50 px-3 py-1 rounded-full">
              Continental Presence
            </span>
            <h2 id="geo-heading" className="text-2xl sm:text-3xl font-extrabold text-ink-900 tracking-heading mt-3">
              Active Operations Across 26 African Nations
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              AfriYouth maintains regional coordinating hubs in Nairobi, Kigali, Accra, and Johannesburg with embedded university research nodes and municipal partner desks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {impact.geographicReach.map((region) => (
              <div key={region.region} className="bg-white p-5 rounded-card border border-line shadow-subtle">
                <div className="flex items-center gap-2 mb-3 text-primary-700 font-bold text-sm">
                  <Globe className="w-4 h-4 text-accent-500" />
                  <span>{region.region}</span>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {region.countries.map((c) => (
                    <li key={c} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
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
      <section id="stories" className="py-16 sm:py-24" aria-labelledby="case-studies-heading">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-700 bg-primary-50 px-3 py-1 rounded-full">
              Field Case Studies
            </span>
            <h2 id="case-studies-heading" className="text-2xl sm:text-4xl font-extrabold text-ink-900 tracking-heading mt-3">
              Voices of Change & Partnership Testimonials
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
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
      <section className="py-16 bg-surface border-t border-line" aria-labelledby="methodology-heading">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-white p-8 sm:p-10 rounded-card border border-line shadow-subtle space-y-4">
            <div className="w-10 h-10 rounded-lg bg-primary-100 text-primary-700 flex items-center justify-center">
              <BarChart3 className="w-5 h-5" />
            </div>
            <h3 id="methodology-heading" className="text-xl sm:text-2xl font-bold text-ink-900 font-heading">
              {impact.methodology.title}
            </h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {impact.methodology.description}
            </p>

            <div className="pt-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                Aligned Measurement Standards & Frameworks
              </span>
              <div className="flex flex-wrap gap-2">
                {impact.methodology.frameworks.map((fw, fIdx) => (
                  <span
                    key={fIdx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-surface border border-line text-ink-900"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-primary-700" />
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
