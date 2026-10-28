import React from "react";
import type { Metadata } from "next";
import { impact, stories } from "@/lib/content";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ImpactMetrics } from "@/components/common/ImpactMetrics";
import { StoryCard } from "@/components/common/StoryCard";
import { Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Impact Telemetry, Stories & Evaluation Methodology",
  description:
    "Explore AfriYouth Innovation Labs verified impact metrics across 26 African countries, policy adoptions, venture survival rates, and community case studies.",
};

export default function ImpactPage() {
  return (
    <div className="bg-stone-100 text-stone-900">
      {/* Editorial Header */}
      <section className="hairline-b pt-12 pb-20 sm:pb-28">
        <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
          <Breadcrumbs items={[{ label: "Impact & Evidence" }]} />
          <div className="max-w-3xl mt-8 space-y-6">
            <span className="text-[11px] font-semibold uppercase tracking-widePill text-stone-500">
              Verified Longitudinal Telemetry
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-stone-900 tracking-display leading-tight">
              Evidence-based transformation.
            </h1>
            <p className="text-lg sm:text-xl text-stone-600 leading-relaxed font-normal">
              {impact.summary}
            </p>
          </div>
        </div>
      </section>

      {/* Macro Metrics Block */}
      <ImpactMetrics showTitle={false} />

      {/* 3 Thematic Impact Horizons */}
      <section className="py-24 sm:py-36 hairline-b" aria-labelledby="pillars-heading">
        <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-2xl mb-16 sm:mb-20 space-y-3">
            <span className="text-[11px] font-semibold uppercase tracking-widePill text-stone-500">
              Transformation Domains
            </span>
            <h2 id="pillars-heading" className="text-3xl sm:text-5xl font-extrabold text-stone-900 tracking-display">
              Three systemic horizons.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impact.pillars.map((pillar, i) => (
              <div
                key={i}
                className="minimal-card rounded-card p-8 sm:p-10 flex flex-col justify-between group hover:border-stone-400 transition-colors"
              >
                <div>
                  <span className="text-xs font-semibold text-stone-400 block mb-6 font-mono">
                    0{i + 1}
                  </span>
                  <h3 className="text-2xl font-bold text-stone-900 mb-3 tracking-tight group-hover:text-botanical-600 transition-colors">
                    {pillar.title}
                  </h3>
                  <div className="text-xs font-bold uppercase tracking-wider text-botanical-600 mb-4">
                    {pillar.metric}
                  </div>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Geographic Reach Section */}
      <section className="py-24 sm:py-36 hairline-b bg-stone-150/40" aria-labelledby="geo-heading">
        <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-2xl mb-16 sm:mb-20 space-y-3">
            <span className="text-[11px] font-semibold uppercase tracking-widePill text-stone-500">
              Continental Presence
            </span>
            <h2 id="geo-heading" className="text-3xl sm:text-5xl font-extrabold text-stone-900 tracking-display">
              Active footprint across 26 nations.
            </h2>
            <p className="text-base text-stone-600 pt-2">
              Regional hubs in Nairobi, Kigali, Accra, and Johannesburg, complemented by embedded university research nodes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {impact.geographicReach.map((region) => (
              <div
                key={region.region}
                className="minimal-card rounded-card p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-wider text-stone-900">
                    <Globe className="w-4 h-4 text-botanical-600" />
                    <span>{region.region}</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-stone-600">
                    {region.countries.map((c) => (
                      <li key={c} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-stone-400" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="stories" className="py-24 sm:py-36 hairline-b" aria-labelledby="case-studies-heading">
        <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-2xl mb-16 sm:mb-20 space-y-3">
            <span className="text-[11px] font-semibold uppercase tracking-widePill text-stone-500">
              Field Case Studies
            </span>
            <h2 id="case-studies-heading" className="text-3xl sm:text-5xl font-extrabold text-stone-900 tracking-display">
              Stories of systemic change.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {stories.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        </div>
      </section>

      {/* Rigorous Impact Methodology */}
      <section className="py-24 sm:py-36 bg-stone-150/50" aria-labelledby="methodology-heading">
        <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto minimal-card rounded-card p-8 sm:p-12 space-y-6">
            <span className="text-[11px] font-semibold uppercase tracking-widePill text-stone-400 block">
              Methodology & Rigor
            </span>
            <h3 id="methodology-heading" className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
              {impact.methodology.title}
            </h3>
            <p className="text-stone-600 text-base leading-relaxed">
              {impact.methodology.description}
            </p>

            <div className="pt-4 border-t border-stone-200">
              <span className="text-[10px] font-semibold uppercase tracking-widePill text-stone-400 block mb-3">
                Evaluation Standards & Benchmarks
              </span>
              <div className="flex flex-wrap gap-2">
                {impact.methodology.frameworks.map((fw, fIdx) => (
                  <span
                    key={fIdx}
                    className="inline-block px-3 py-1 rounded-pill text-xs font-semibold bg-stone-200/70 text-stone-800"
                  >
                    {fw}
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