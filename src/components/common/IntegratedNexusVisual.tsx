"use client";

import React, { useState } from "react";
import Link from "next/link";
import { about } from "@/lib/content";
import { Microscope, Landmark, Compass, Rocket, Eye, ArrowRight, Check } from "lucide-react";

export const IntegratedNexusVisual: React.FC = () => {
  const [selectedPillar, setSelectedPillar] = useState(0);

  const icons = [Microscope, Landmark, Compass, Rocket, Eye];

  return (
    <section className="py-16 sm:py-24 bg-white" aria-labelledby="nexus-heading">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-primary-700 bg-primary-50 px-3 py-1 rounded-full">
            The Integrated Model
          </span>
          <h2 id="nexus-heading" className="text-2xl sm:text-4xl font-extrabold text-ink-900 tracking-heading mt-3">
            How Our Work Connects
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
            Most organizations operate in silos: think tanks publish unread papers, incubators launch ventures without policy backing, and youth forums meet without empirical rigor. AfriYouth connects all five stages into a self-reinforcing engine.
          </p>
        </div>

        {/* Five-Node Visual Flow */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
          {about.integratedApproach.pillars.map((pillar, idx) => {
            const Icon = icons[idx];
            const isSelected = selectedPillar === idx;
            return (
              <button
                key={pillar.id}
                onClick={() => setSelectedPillar(idx)}
                className={`p-4 rounded-card border text-left transition-all duration-200 flex flex-col justify-between ${
                  isSelected
                    ? "bg-ink-900 border-ink-900 text-white shadow-card ring-2 ring-accent-500 ring-offset-2"
                    : "bg-surface border-line hover:border-primary-600/40 text-slate-700 hover:bg-white"
                }`}
                aria-pressed={isSelected}
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      isSelected ? "bg-primary-700 text-accent-500" : "bg-white text-primary-700 border border-line"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span
                    className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                      isSelected ? "bg-accent-500 text-ink-900" : "bg-slate-200 text-slate-700"
                    }`}
                  >
                    0{idx + 1}
                  </span>
                </div>
                <h3 className={`font-bold text-sm font-heading ${isSelected ? "text-white" : "text-ink-900"}`}>
                  {pillar.title.replace(/^[0-9]+\.\s*/, "")}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Dynamic Detail Card */}
        <div className="bg-surface rounded-card border border-line p-6 sm:p-10 shadow-subtle">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-primary-700 font-bold text-xs uppercase tracking-wider">
                <span>Stage 0{selectedPillar + 1} of 05</span>
                <span>•</span>
                <span>Self-Reinforcing Impact Engine</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-ink-900 font-heading">
                {about.integratedApproach.pillars[selectedPillar].title}
              </h3>
              <p className="text-slate-700 text-base leading-relaxed">
                {about.integratedApproach.pillars[selectedPillar].description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-4 rounded-lg border border-line">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    What Enters (Input)
                  </span>
                  <p className="text-sm font-medium text-ink-900 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-700 shrink-0 mt-2" />
                    <span>{about.integratedApproach.pillars[selectedPillar].input}</span>
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-line">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    What Emerges (Output)
                  </span>
                  <p className="text-sm font-medium text-ink-900 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-500 shrink-0 mt-2" />
                    <span>{about.integratedApproach.pillars[selectedPillar].output}</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-ink-900 text-white rounded-xl p-6 sm:p-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-accent-500">
                Closed-Loop Advantage
              </span>
              <p className="text-slate-200 text-sm leading-relaxed">
                Because this stage feeds directly into the next, innovations created in AfriYouth labs don&apos;t stall at the pilot phase. They scale with legitimate regulatory aircover, investor capital, and ongoing community accountability.
              </p>
              <div className="pt-2">
                <Link
                  href="/about#integrated-model"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-accent-500 hover:text-white transition-colors"
                >
                  <span>Read full methodology paper</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
