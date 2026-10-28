import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { programs } from "@/lib/content";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Clock, Users, CheckCircle2, ArrowUpRight, Compass, BookOpen, Terminal } from "lucide-react";

export const metadata: Metadata = {
  title: "Programs, Eligibility & Participation Roadmap",
  description:
    "Explore AfriYouth Innovation Labs flagship programs: African Youth Policy & Futures Fellowship, CivicTech Incubator, Community HCD Action Studios, and Evidence-to-Policy Labs.",
};

export default function ProgramsPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Top Header & Breadcrumb */}
      <div className="border-b border-white/[0.08] relative overflow-hidden pt-8 pb-14">
        <div className="absolute inset-0 cyber-grid-dense pointer-events-none opacity-30" />
        <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Programs" }]} />
          <div className="max-w-3xl mt-4 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
              <Terminal className="w-3.5 h-3.5" />
              <span>// FLAGSHIP COHORTS</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-heading font-heading">
              Fellowships, Incubators & Action Studios
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Every AfriYouth program provides rigorous technical training, hands-on community fieldwork, financial stipends or equity-free grants, and direct institutional placement.
            </p>
          </div>
        </div>
      </div>

      {/* Programs List */}
      <section className="py-20 sm:py-28" aria-labelledby="programs-list-heading">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="sr-only">
            <h2 id="programs-list-heading">Detailed Program Breakdown</h2>
          </div>

          {programs.map((program) => (
            <article
              key={program.id}
              id={program.slug}
              className="glass-panel rounded-card border border-white/10 overflow-hidden shadow-cyberCard p-6 sm:p-10 scroll-mt-28 relative group"
            >
              {/* Subtle accent border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-accent-500" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Column */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 px-2.5 py-0.5 rounded">
                      {program.area}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-300 bg-white/[0.04] px-2.5 py-0.5 rounded-full border border-white/10">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>{program.status}</span>
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
                    {program.title}
                  </h3>
                  <p className="text-sm sm:text-base font-medium text-emerald-400">
                    {program.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {program.description}
                  </p>

                  {/* Highlights Grid */}
                  <div className="pt-2">
                    <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 mb-2">
                      // CURRICULUM HIGHLIGHTS
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {program.curriculumHighlights.map((hl, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                          <BookOpen className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Outcomes Statement */}
                  <div className="p-4 bg-ink-950/80 rounded-xl border border-white/10">
                    <strong className="text-[10px] font-mono font-bold uppercase tracking-widest text-accent-500 block mb-1">
                      // VERIFIED IMPACT OUTCOME
                    </strong>
                    <p className="text-xs sm:text-sm text-slate-200 font-medium">
                      {program.outcomes}
                    </p>
                  </div>
                </div>

                {/* Right Column: Eligibility & Roadmap */}
                <div className="lg:col-span-5 bg-ink-950/80 rounded-xl p-6 sm:p-8 border border-white/10 space-y-6 flex flex-col justify-between">
                  <div className="space-y-6">
                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 pb-4 border-b border-white/[0.08] text-xs font-mono">
                      <div>
                        <span className="text-slate-500 block">DURATION</span>
                        <strong className="text-white text-sm font-semibold">{program.duration}</strong>
                      </div>
                      <div>
                        <span className="text-slate-500 block">COHORT CAPACITY</span>
                        <strong className="text-white text-sm font-semibold">{program.cohortSize}</strong>
                      </div>
                    </div>

                    {/* Eligibility List */}
                    <div>
                      <h4 className="text-[11px] font-mono font-bold uppercase tracking-widest text-emerald-400 mb-3 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>ELIGIBILITY CRITERIA</span>
                      </h4>
                      <ul className="space-y-2">
                        {program.eligibility.map((el, eIdx) => (
                          <li key={eIdx} className="flex items-start gap-2 text-xs text-slate-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5" />
                            <span>{el}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* How to Participate */}
                    <div>
                      <h4 className="text-[11px] font-mono font-bold uppercase tracking-widest text-accent-500 mb-3 flex items-center gap-1.5">
                        <Compass className="w-4 h-4" />
                        <span>PARTICIPATION ROADMAP</span>
                      </h4>
                      <ol className="space-y-2.5 text-xs text-slate-300">
                        {program.howToParticipate.map((step) => (
                          <li key={step.step} className="flex items-start gap-2.5">
                            <span className="w-5 h-5 rounded bg-emerald-500/20 text-emerald-400 font-mono font-bold flex items-center justify-center shrink-0 text-[10px] border border-emerald-500/30">
                              {step.step}
                            </span>
                            <div>
                              <strong className="text-white block font-heading">{step.title}</strong>
                              <span className="text-slate-400 text-[11px] leading-tight block">{step.description}</span>
                            </div>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>

                  {/* Apply action */}
                  <div className="pt-4 border-t border-white/[0.08]">
                    <Link
                      href="/opportunities"
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-bold font-heading bg-accent-500 text-ink-950 hover:bg-accent-400 transition-colors shadow-glowGold"
                    >
                      <span>Apply in Opportunities Portal</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
