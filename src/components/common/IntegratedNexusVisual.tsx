"use client";

import React, { useState } from "react";
import Link from "next/link";
import { about } from "@/lib/content";
import { ArrowUpRight } from "lucide-react";

export const IntegratedNexusVisual: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 sm:py-36" aria-labelledby="nexus-heading">
      <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 sm:mb-24 space-y-4">
          <span className="text-[11px] font-semibold uppercase tracking-widePill text-stone-500">
            The Integrated Model
          </span>
          <h2 id="nexus-heading" className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-display">
            Five engines. One closed loop.
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Most youth initiatives operate in isolation. AfriYouth bridges grassroots evidence, policy drafting, design sprints, and venture capital into a continuous transformation cycle.
          </p>
        </div>

        {/* Minimalist Editorial Accordion / List */}
        <div className="border-t border-stone-300">
          {about.integratedApproach.pillars.map((pillar, idx) => {
            const isSelected = activeStep === idx;
            return (
              <div
                key={pillar.id}
                className="border-b border-stone-300 transition-colors"
              >
                <button
                  onClick={() => setActiveStep(idx)}
                  className="w-full py-8 sm:py-10 flex flex-col md:flex-row md:items-center justify-between text-left group"
                  aria-expanded={isSelected}
                >
                  <div className="flex items-baseline gap-6 sm:gap-10">
                    <span className="text-sm font-semibold text-stone-400">
                      0{idx + 1}
                    </span>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight group-hover:text-botanical-600 transition-colors">
                      {pillar.title.replace(/^[0-9]+\.\s*/, "")}
                    </h3>
                  </div>

                  <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 mt-2 md:mt-0">
                    {isSelected ? "Active View" : "Explore Phase"}
                  </span>
                </button>

                {isSelected && (
                  <div className="pb-10 pt-2 grid grid-cols-1 md:grid-cols-12 gap-8 animate-in fade-in duration-200">
                    <div className="md:col-start-2 md:col-span-6 text-stone-700 text-base leading-relaxed">
                      <p>{pillar.description}</p>
                    </div>

                    <div className="md:col-span-5 grid grid-cols-2 gap-4 text-xs">
                      <div className="p-5 rounded-xl bg-stone-150 border border-stone-200">
                        <span className="text-[10px] font-semibold uppercase tracking-widePill text-stone-500 block mb-1.5">
                          Input
                        </span>
                        <p className="font-semibold text-stone-900">{pillar.input}</p>
                      </div>
                      <div className="p-5 rounded-xl bg-stone-150 border border-stone-200">
                        <span className="text-[10px] font-semibold uppercase tracking-widePill text-botanical-600 block mb-1.5">
                          Output
                        </span>
                        <p className="font-semibold text-stone-900">{pillar.output}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-right">
          <Link
            href="/about#integrated-model"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-900 hover:text-terracotta-500 transition-colors"
          >
            <span>Read full methodology brief</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
