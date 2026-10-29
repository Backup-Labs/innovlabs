"use client";

import React from "react";
import { motion } from "framer-motion";
import { impact, stories } from "@/lib/content";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ImpactMetrics } from "@/components/common/ImpactMetrics";
import { StoryCard } from "@/components/common/StoryCard";
import { Globe } from "lucide-react";

export default function ImpactPage() {
  return (
    <div className="bg-[#F4F4F6] text-black">
      {/* Editorial Header */}
      <section className="hairline-b pt-12 pb-20 sm:pb-28">
        <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
          <Breadcrumbs items={[{ label: "Impact & Evidence" }]} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mt-8 space-y-6"
          >
            <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-500 font-mono">
              // Verified Longitudinal Telemetry
            </span>
            <h1 className="font-serif font-normal text-4xl sm:text-6xl lg:text-7xl text-black tracking-tight leading-tight">
              Evidence-based transformation.
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-normal">
              {impact.summary}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Macro Metrics Block */}
      <ImpactMetrics showTitle={false} />

      {/* 3 Thematic Impact Horizons */}
      <section className="py-24 sm:py-36 hairline-b bg-white" aria-labelledby="pillars-heading">
        <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mb-16 sm:mb-20 space-y-3"
          >
            <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-500 font-mono">
              // Transformation Domains
            </span>
            <h2 id="pillars-heading" className="font-serif font-normal text-3xl sm:text-5xl lg:text-6xl text-black tracking-tight">
              Three systemic horizons.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impact.pillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="minimal-card rounded-card p-8 sm:p-10 flex flex-col justify-between group hover:border-black transition-colors bg-white border border-gray-300"
              >
                <div>
                  <span className="text-xs font-semibold text-gray-400 block mb-6 font-mono">
                    0{i + 1}
                  </span>
                  <h3 className="text-2xl font-bold text-black mb-3 tracking-tight group-hover:translate-x-1 transition-transform">
                    {pillar.title}
                  </h3>
                  <div className="text-xs font-bold uppercase tracking-wider text-black mb-4 font-mono">
                    {pillar.metric}
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Geographic Reach Section */}
      <section className="py-24 sm:py-36 hairline-b bg-[#F4F4F6]" aria-labelledby="geo-heading">
        <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mb-16 sm:mb-20 space-y-3"
          >
            <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-500 font-mono">
              // Continental Presence
            </span>
            <h2 id="geo-heading" className="font-serif font-normal text-3xl sm:text-5xl lg:text-6xl text-black tracking-tight">
              Active footprint across 26 nations.
            </h2>
            <p className="text-base text-gray-600 pt-2 leading-relaxed">
              Regional hubs in Nairobi, Kigali, Accra, and Johannesburg, complemented by embedded university research nodes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {impact.geographicReach.map((region, idx) => (
              <motion.div
                key={region.region}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="minimal-card rounded-card p-6 flex flex-col justify-between bg-white border border-gray-300"
              >
                <div>
                  <div className="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-wider text-black font-mono">
                    <Globe className="w-4 h-4 text-black" />
                    <span>{region.region}</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-gray-600 font-mono">
                    {region.countries.map((c) => (
                      <li key={c} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-black" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="stories" className="py-24 sm:py-36 bg-white" aria-labelledby="case-studies-heading">
        <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mb-16 sm:mb-20 space-y-3"
          >
            <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-500 font-mono">
              // Field Case Studies
            </span>
            <h2 id="case-studies-heading" className="font-serif font-normal text-3xl sm:text-5xl lg:text-6xl text-black tracking-tight">
              Stories of systemic change.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {stories.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        </div>
      </section>

      {/* Rigorous Impact Methodology */}
      <section className="py-24 sm:py-36 bg-[#F4F4F6]" aria-labelledby="methodology-heading">
        <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto minimal-card rounded-card p-8 sm:p-12 space-y-6 bg-white border border-gray-300"
          >
            <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-500 block font-mono">
              // Methodology & Rigor
            </span>
            <h3 id="methodology-heading" className="font-serif font-normal text-2xl sm:text-3xl lg:text-4xl text-black tracking-tight">
              {impact.methodology.title}
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              {impact.methodology.description}
            </p>

            <div className="pt-4 border-t border-gray-200">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-500 block mb-3 font-mono">
                Evaluation Standards & Benchmarks
              </span>
              <div className="flex flex-wrap gap-2">
                {impact.methodology.frameworks.map((fw, fIdx) => (
                  <span
                    key={fIdx}
                    className="inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold bg-gray-100 text-black border border-gray-200"
                  >
                    {fw}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
