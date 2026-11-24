"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { about } from "@/lib/content";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

export const IntegratedNexusVisual: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const connectedAreas = [
    { step: "01", name: "Research & Evidence", desc: "Generate evidence on youth priorities and socio-economic challenges." },
    { step: "02", name: "Policy & Governance", desc: "Use evidence to inform policy and public decision-making." },
    { step: "03", name: "Human-Centered Design", desc: "Develop ideas with the needs and experience of people in mind." },
    { step: "04", name: "Entrepreneurship", desc: "Advance young people's ideas through innovation and enterprise." },
    { step: "05", name: "Strategic Foresight", desc: "Consider emerging challenges and opportunities for the future." },
  ];

  return (
    <div className="w-full px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2">
      <section
        className="w-full rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] bg-white border border-black/10 py-16 sm:py-24 overflow-hidden shadow-sm"
        aria-labelledby="nexus-heading"
      >
        <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12 space-y-16 sm:space-y-20">
          {/* 1. Header with Philosophy Formula */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-gray-200">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0D0624] text-white text-[11px] font-mono font-semibold uppercase tracking-widest shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#C723DF]" />
                <span>The Core AfriYouth Philosophy</span>
              </div>
              <h2
                id="nexus-heading"
                className="font-serif font-normal text-3xl sm:text-5xl lg:text-6xl text-black tracking-tight"
              >
                Think. Research. Design. Build. Influence. Scale.
              </h2>
              <p className="text-gray-600 text-[18px] leading-relaxed">
                AfriYouth connects research, policy, human-centered design, entrepreneurship, and foresight to advance young people's ideas for sustainable development.
              </p>
            </div>

            {/* Core Philosophy Chain Pill */}
            <div className="p-5 rounded-2xl bg-[#FAFAFC] border border-gray-200 lg:max-w-xs w-full shadow-xs">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block font-mono mb-2">
                Unified Mandate
              </span>
              <p className="text-xs text-black font-semibold font-mono leading-relaxed">
                Empowering youth independence, self-reliance & evidence-driven governance by 2050.
              </p>
            </div>
          </div>

          {/* 2. The 4-Way Convergence Blueprint */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-[#0301FF] font-mono">
                  Why We Are Different
                </span>
                <h3 className="font-serif font-normal text-2xl sm:text-4xl text-black tracking-tight mt-1">
                  AfriYouth connects all four.
                </h3>
              </div>
              <span className="text-xs font-mono text-gray-500">
                Integrated African Innovation & Policy Lab
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
              <div className="p-6 rounded-2xl bg-[#F6F6F8] border border-gray-200 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-gray-400 block mb-2">01 / Traditional Hubs</span>
                  <strong className="text-base text-gray-700 block font-semibold mb-1">Most youth organizations</strong>
                  <p className="text-sm text-gray-500 font-sans">focus primarily on isolated training seminars and certificates.</p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-300/60 text-[11px] font-mono text-gray-400">
                  Limitation: No systemic scale
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#F6F6F8] border border-gray-200 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-gray-400 block mb-2">02 / Startup Incubators</span>
                  <strong className="text-base text-gray-700 block font-semibold mb-1">Most incubators</strong>
                  <p className="text-sm text-gray-500 font-sans">focus exclusively on venture capital without policy alignment.</p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-300/60 text-[11px] font-mono text-gray-400">
                  Limitation: High mortality rate
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#F6F6F8] border border-gray-200 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-gray-400 block mb-2">03 / Policy Think Tanks</span>
                  <strong className="text-base text-gray-700 block font-semibold mb-1">Most think tanks</strong>
                  <p className="text-sm text-gray-500 font-sans">focus on research papers that sit unread on government shelves.</p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-300/60 text-[11px] font-mono text-gray-400">
                  Limitation: No enterprise execution
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#0D0624] text-white border border-white/20 flex flex-col justify-between shadow-lg relative overflow-hidden">
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-[#C723DF] to-[#0301FF] text-[10px] font-mono text-white font-bold mb-2">
                    AfriYouth Nexus
                  </div>
                  <strong className="text-base text-white block font-bold mb-1">We connect all four</strong>
                  <p className="text-sm text-gray-200 font-sans">
                    Research + Policy + Human-Centered Design + Entrepreneurship + Strategic Foresight.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/20 text-[11px] font-mono text-[#C723DF] relative z-10 font-bold">
                  Durable, Closed-Loop Impact
                </div>
              </div>
            </div>
          </div>

          {/* 3. The 5 Strategic Divisions (Interactive Accordion) */}
          <div className="space-y-6 pt-4">
            <div className="max-w-2xl">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-500 font-mono">
                Institutional Architecture
              </span>
              <h3 className="font-serif font-normal text-3xl sm:text-4xl text-black tracking-tight mt-1">
                Five strategic divisions. One engine.
              </h3>
            </div>

            <div className="border-t border-gray-300">
              {about.integratedApproach.pillars.map((pillar, idx) => {
                const isSelected = activeStep === idx;
                return (
                  <div key={pillar.id} className="border-b border-gray-300 transition-colors">
                    <button
                      onClick={() => setActiveStep(idx)}
                      className="w-full py-7 sm:py-9 flex flex-col md:flex-row md:items-center justify-between text-left group"
                      aria-expanded={isSelected}
                    >
                      <div className="flex items-baseline gap-6 sm:gap-10">
                        <span className="text-sm font-semibold text-gray-400 font-mono">
                          0{idx + 1}
                        </span>
                        <h4 className="text-2xl sm:text-3xl font-bold text-black tracking-tight group-hover:translate-x-1 transition-transform font-sans">
                          {pillar.title.replace(/^[0-9]+\.\s*/, "")}
                        </h4>
                      </div>

                      <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 mt-2 md:mt-0 font-mono">
                        {isSelected ? "[Open Division]" : "+ Explore"}
                      </span>
                    </button>

                    <AnimatePresence>
                      {isSelected && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pb-10 pt-2 grid grid-cols-1 md:grid-cols-12 gap-8">
                            <div className="md:col-start-2 md:col-span-6 text-gray-700 text-[18px] leading-relaxed">
                              <p>{pillar.description}</p>
                            </div>

                            <div className="md:col-span-5 grid grid-cols-2 gap-4 text-xs">
                              <div className="p-5 rounded-xl bg-gray-100 border border-gray-200">
                                <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-500 block mb-1.5 font-mono">
                                  Input Feed
                                </span>
                                <p className="font-semibold text-black">{pillar.input}</p>
                              </div>
                              <div className="p-5 rounded-xl bg-gray-100 border border-gray-200">
                                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#0301FF] block mb-1.5 font-mono">
                                  Flagship Deliverable
                                </span>
                                <p className="font-semibold text-black">{pillar.output}</p>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Connected areas of work */}
          <div className="rounded-[28px] bg-[#0D0624] text-white p-6 sm:p-10 lg:p-12 border border-white/10 shadow-xl">
            <div className="max-w-2xl mb-8 space-y-2">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#C723DF] font-mono">
                Connected Areas of Work
              </span>
              <h3 className="font-serif font-normal text-2xl sm:text-4xl text-white tracking-tight">
                Five areas, one shared purpose.
              </h3>
              <p className="text-gray-300 text-sm sm:text-base">
                AfriYouth connects research, policy, design, entrepreneurship, and foresight to advance young people's ideas for sustainable development.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 lg:gap-4">
              {connectedAreas.map((st) => (
                <div
                  key={st.step}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 transition-all flex flex-col justify-between"
                >
                  <span className="text-[11px] font-mono text-[#C723DF] font-bold block mb-1">
                    {st.step}
                  </span>
                  <strong className="text-sm font-bold text-white block mb-1.5 font-sans">
                    {st.name}
                  </strong>
                  <p className="text-[11px] text-gray-300 leading-snug font-sans">
                    {st.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
                <CheckCircle2 className="w-4 h-4 text-[#C723DF]" />
                <span>Learn more about AfriYouth&apos;s service areas.</span>
              </div>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white text-black text-xs font-semibold hover:bg-gray-100 transition-all font-sans self-start sm:self-auto"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
