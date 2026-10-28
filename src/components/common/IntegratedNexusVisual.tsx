"use client";

import React, { useState } from "react";
import Link from "next/link";
import { about } from "@/lib/content";
import { Microscope, Landmark, Compass, Rocket, Eye, ArrowUpRight, Activity, Cpu } from "lucide-react";

export const IntegratedNexusVisual: React.FC = () => {
  const [selectedPillar, setSelectedPillar] = useState(0);

  const icons = [Microscope, Landmark, Compass, Rocket, Eye];
  const sysCodes = ["SYS.01 // DATA", "SYS.02 // POLICY", "SYS.03 // DESIGN", "SYS.04 // VENTURE", "SYS.05 // FORESIGHT"];

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden" aria-labelledby="nexus-heading">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary-700/15 blur-[120px] pointer-events-none" />

      <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 mb-3">
            <Activity className="w-3.5 h-3.5 animate-pulse" />
            <span>THE AFRIYOUTH CLOSED-LOOP ARCHITECTURE</span>
          </div>
          <h2 id="nexus-heading" className="text-3xl sm:text-5xl font-extrabold text-white tracking-heading">
            How Our Work Connects
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed font-normal">
            Single-track interventions stall: think tanks generate unread reports, incubators launch startups without policy backing, and youth forums converse without empirical data. AfriYouth binds all five engines into a self-reinforcing cybernetic nexus.
          </p>
        </div>

        {/* 5-Node Circuit Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4 mb-8">
          {about.integratedApproach.pillars.map((pillar, idx) => {
            const Icon = icons[idx];
            const isSelected = selectedPillar === idx;
            return (
              <button
                key={pillar.id}
                onClick={() => setSelectedPillar(idx)}
                className={`relative p-5 rounded-card border text-left transition-all duration-200 flex flex-col justify-between overflow-hidden group ${
                  isSelected
                    ? "bg-gradient-to-b from-ink-800 to-ink-900 border-emerald-400/60 shadow-glowEmerald ring-1 ring-emerald-400"
                    : "glass-panel hover:border-white/20 text-slate-400 hover:text-white"
                }`}
                aria-pressed={isSelected}
              >
                {/* Top micro-line indicator */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 transition-all duration-200 ${
                    isSelected ? "bg-gradient-to-r from-accent-500 to-emerald-400" : "bg-transparent group-hover:bg-white/10"
                  }`}
                />

                <div>
                  <div className="flex items-center justify-between w-full mb-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected
                          ? "bg-emerald-500/20 text-emerald-300 border border-emerald-400/40"
                          : "bg-white/[0.04] text-slate-400 border border-white/10 group-hover:text-emerald-400"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold ${
                        isSelected
                          ? "bg-accent-500 text-ink-950 font-bold"
                          : "bg-white/[0.05] text-slate-400"
                      }`}
                    >
                      0{idx + 1}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono block text-slate-400 mb-1 tracking-wider">
                    {sysCodes[idx]}
                  </span>
                  <h3 className={`font-bold text-sm sm:text-base font-heading ${isSelected ? "text-white" : "text-slate-200"}`}>
                    {pillar.title.replace(/^[0-9]+\.\s*/, "")}
                  </h3>
                </div>

                <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono">
                  <span className={isSelected ? "text-emerald-400" : "text-slate-400"}>
                    {isSelected ? "// ACTIVE_NODE" : "STANDBY"}
                  </span>
                  <span className="text-slate-400">&gt;&gt;</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Telemetry Display Pod */}
        <div className="glass-panel rounded-card border border-white/10 p-6 sm:p-10 shadow-cyberCard relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-accent-500 px-2.5 py-0.5 rounded bg-accent-500/10 border border-accent-500/30">
                  ENGINE STAGE 0{selectedPillar + 1} OF 05
                </span>
                <span className="text-xs font-mono text-slate-400">// INTEGRATED IMPACT CYCLE</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                {about.integratedApproach.pillars[selectedPillar].title}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {about.integratedApproach.pillars[selectedPillar].description}
              </p>

              {/* Input / Output Pods */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-ink-950/70 p-4 rounded-xl border border-white/10">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1.5 uppercase">
                    <span>FEED INGESTION (INPUT)</span>
                    <span className="text-emerald-400">&larr;</span>
                  </div>
                  <p className="text-sm font-semibold text-slate-200 font-heading">
                    {about.integratedApproach.pillars[selectedPillar].input}
                  </p>
                </div>

                <div className="bg-ink-950/70 p-4 rounded-xl border border-accent-500/20">
                  <div className="flex items-center justify-between text-[11px] font-mono text-accent-500 mb-1.5 uppercase">
                    <span>SYNTHESIS ARTIFACT (OUTPUT)</span>
                    <span className="text-accent-400">&rarr;</span>
                  </div>
                  <p className="text-sm font-semibold text-white font-heading">
                    {about.integratedApproach.pillars[selectedPillar].output}
                  </p>
                </div>
              </div>
            </div>

            {/* Closed Loop Insight */}
            <div className="lg:col-span-5 bg-gradient-to-br from-ink-900 to-ink-950 text-white rounded-xl p-6 sm:p-8 border border-white/10 space-y-4 shadow-subtle">
              <div className="flex items-center gap-2 text-xs font-mono text-accent-500">
                <Cpu className="w-4 h-4" />
                <span>// CLOSED-LOOP SYSTEM ADVANTAGE</span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Because every output automatically powers the next stage, solutions prototyped in AfriYouth labs don&apos;t evaporate into pilot limbo. They scale protected by legitimate legislative policy aircover and backed by sovereign venture capital.
              </p>
              <div className="pt-2">
                <Link
                  href="/about#integrated-model"
                  className="inline-flex items-center gap-2 text-sm font-bold font-heading text-accent-400 hover:text-white transition-colors"
                >
                  <span>Explore full methodological architecture</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
