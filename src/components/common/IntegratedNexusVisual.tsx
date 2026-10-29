"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { about } from "@/lib/content";
import { ArrowUpRight } from "lucide-react";

export const IntegratedNexusVisual: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="w-full px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2">
      <section className="w-full rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] bg-white border border-black/10 py-16 sm:py-24 overflow-hidden shadow-sm" aria-labelledby="nexus-heading">
        <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16 sm:mb-24 space-y-4"
        >
          <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-500 font-mono">
            // The Integrated Model
          </span>
          <h2 id="nexus-heading" className="font-serif font-normal text-3xl sm:text-5xl lg:text-6xl text-black tracking-tight">
            Five engines. One closed loop.
          </h2>
          <p className="text-gray-600 text-[18px] leading-relaxed">
            Most youth initiatives operate in isolation. AfriYouth bridges grassroots evidence, policy drafting, design sprints, and venture capital into a continuous transformation cycle.
          </p>
        </motion.div>

        {/* Minimalist Editorial Accordion / List */}
        <div className="border-t border-gray-300">
          {about.integratedApproach.pillars.map((pillar, idx) => {
            const isSelected = activeStep === idx;
            return (
              <div
                key={pillar.id}
                className="border-b border-gray-300 transition-colors"
              >
                <button
                  onClick={() => setActiveStep(idx)}
                  className="w-full py-8 sm:py-10 flex flex-col md:flex-row md:items-center justify-between text-left group"
                  aria-expanded={isSelected}
                >
                  <div className="flex items-baseline gap-6 sm:gap-10">
                    <span className="text-sm font-semibold text-gray-400 font-mono">
                      0{idx + 1}
                    </span>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black tracking-tight group-hover:translate-x-1 transition-transform">
                      {pillar.title.replace(/^[0-9]+\.\s*/, "")}
                    </h3>
                  </div>

                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 mt-2 md:mt-0 font-mono">
                    {isSelected ? "[Active Phase]" : "+ Explore"}
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
                            <span className="text-[10px] font-semibold uppercase tracking-widest text-black block mb-1.5 font-mono">
                              Systemic Output
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

        <div className="mt-12 text-right">
          <Link
            href="/about#integrated-model"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black hover:underline transition-all"
          >
            <span>Read full methodology brief</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  </div>
  );
};
