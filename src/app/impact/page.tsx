"use client";

import React from "react";
import { motion } from "framer-motion";
import { impact } from "@/lib/content";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHeroBanner } from "@/components/common/PageHeroBanner";
import { ImpactMetrics } from "@/components/common/ImpactMetrics";
import { Globe } from "lucide-react";

export default function ImpactPage() {
  return (
    <div className="bg-[#F4F4F6] text-black">
      {/* Curved Hero Banner matching Screenshot 3 */}
      <PageHeroBanner
        kicker="Impact Areas"
        title="Evidence, innovation, and youth agency."
        description={impact.summary}
      />

      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <Breadcrumbs items={[{ label: "Impact & Evidence" }]} />
      </div>

      {/* Macro Metrics Block */}
      <ImpactMetrics showTitle={false} />

      {/* 3 Thematic Impact Horizons */}
      <div className="w-full px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2">
        <section className="w-full rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] bg-white border border-black/10 py-16 sm:py-24 overflow-hidden shadow-sm" aria-labelledby="pillars-heading">
          <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mb-16 sm:mb-20 space-y-3"
            >
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#0301FF] font-mono">
                Transformation Domains
              </span>
              <h2 id="pillars-heading" className="font-serif font-normal text-3xl sm:text-5xl lg:text-6xl text-black tracking-tight">
                Three systemic horizons.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              {impact.pillars.map((pillar, i) => {
                const isGradient = i === 1;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    className="h-full w-full flex flex-col"
                  >
                    <div
                      className={`rounded-2xl p-8 sm:p-10 flex flex-col justify-between w-full h-full group border transition-all duration-200 ${
                        isGradient
                          ? "bg-gradient-to-br from-[#0D0624] via-[#120B3B] to-[#0200A7] text-white border-white/20 shadow-xl"
                          : "skeuo-card bg-white text-black"
                      }`}
                    >
                      <div className="flex-1 flex flex-col">
                        <span
                          className={`text-xs font-semibold block mb-6 font-mono ${
                            isGradient ? "text-white/60" : "text-gray-400"
                          }`}
                        >
                          0{i + 1}
                        </span>
                        <h3
                          className={`text-2xl font-bold mb-3 tracking-tight group-hover:translate-x-1 transition-transform font-sans ${
                            isGradient ? "text-white" : "text-black"
                          }`}
                        >
                          {pillar.title}
                        </h3>
                        <div
                          className={`text-xs font-bold uppercase tracking-wider mb-4 font-mono ${
                            isGradient ? "text-white/80" : "text-black"
                          }`}
                        >
                          {pillar.metric}
                        </div>
                        <p
                          className={`text-sm leading-relaxed font-sans ${
                            isGradient ? "text-white/90" : "text-gray-600"
                          }`}
                        >
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      {/* Geographic Reach Section */}
      <div className="w-full px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2">
        <section className="w-full rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] bg-[#EBECEF] border border-black/10 py-16 sm:py-24 overflow-hidden" aria-labelledby="geo-heading">
          <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mb-16 sm:mb-20 space-y-3"
            >
              <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-500 font-mono">
                Focus Areas
              </span>
              <h2 id="geo-heading" className="font-serif font-normal text-3xl sm:text-5xl lg:text-6xl text-black tracking-tight">
                Youth and sustainable development in Africa.
              </h2>
              <p className="text-[18px] text-gray-600 pt-2 leading-relaxed">
                AfriYouth's stated focus brings together youth empowerment, research, innovation, policy, and sustainable development.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch">
              {impact.geographicReach.map((region, idx) => {
                const isGradient = idx === 2;
                return (
                  <motion.div
                    key={region.region}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="h-full w-full flex flex-col"
                  >
                    <div
                      className={`rounded-2xl p-6 flex flex-col justify-between w-full h-full border transition-all duration-200 ${
                        isGradient
                          ? "bg-gradient-to-br from-[#0D0624] via-[#120B3B] to-[#0200A7] text-white border-white/20 shadow-xl"
                          : "skeuo-card bg-white text-black"
                      }`}
                    >
                      <div className="flex-1 flex flex-col">
                        <div
                          className={`flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-wider font-mono ${
                            isGradient ? "text-white" : "text-black"
                          }`}
                        >
                          <Globe className="w-4 h-4 shrink-0" />
                          <span>{region.region}</span>
                        </div>
                        <ul
                          className={`space-y-1.5 text-xs font-mono ${
                            isGradient ? "text-white/80" : "text-gray-600"
                          }`}
                        >
                          {region.focusAreas.map((area) => (
                            <li key={area} className="flex items-center gap-2">
                              <span
                                className={`w-1 h-1 rounded-full ${
                                  isGradient ? "bg-white" : "bg-black"
                                }`}
                              />
                              <span>{area}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      {/* Case Studies */}
      <div className="w-full px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2">
        <section id="stories" className="w-full rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] bg-white border border-black/10 py-16 sm:py-24 overflow-hidden shadow-sm" aria-labelledby="case-studies-heading">
          <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mb-16 sm:mb-20 space-y-3"
            >
              <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-500 font-mono">
                Evidence & Learning
              </span>
              <h2 id="case-studies-heading" className="font-serif font-normal text-3xl sm:text-5xl lg:text-6xl text-black tracking-tight">
                Source-verified results and case studies.
              </h2>
            </motion.div>

            <div className="rounded-2xl bg-[#F4F4F6] border border-gray-300 p-6 sm:p-8">
              <p className="text-base text-gray-700 leading-relaxed">No source-verified case studies were supplied with this project. Approved project evidence can be added here before publication.</p>
            </div>
          </div>
        </section>
      </div>

      {/* Rigorous Impact Methodology */}
      <div className="w-full px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2">
        <section className="w-full rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] bg-[#EBECEF] border border-black/10 py-16 sm:py-24 overflow-hidden" aria-labelledby="methodology-heading">
          <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto skeuo-card rounded-2xl p-8 sm:p-12 space-y-6"
            >
              <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-500 block font-mono">
                Methodology & Rigor
              </span>
              <h3 id="methodology-heading" className="font-serif font-normal text-2xl sm:text-3xl lg:text-4xl text-black tracking-tight">
                {impact.methodology.title}
              </h3>
              <p className="text-gray-600 text-[18px] leading-relaxed">
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
    </div>
  );
}
