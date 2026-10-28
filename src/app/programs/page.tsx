import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { programs } from "@/lib/content";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CheckCircle2, ArrowUpRight, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Programs, Eligibility & Participation Roadmap",
  description:
    "Explore AfriYouth Innovation Labs flagship programs: African Youth Policy & Futures Fellowship, CivicTech Incubator, Community HCD Action Studios, and Evidence-to-Policy Labs.",
};

export default function ProgramsPage() {
  return (
    <div className="bg-stone-100 text-stone-900">
      {/* Editorial Header */}
      <section className="hairline-b pt-12 pb-20 sm:pb-28">
        <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
          <Breadcrumbs items={[{ label: "Programs" }]} />
          <div className="max-w-3xl mt-8 space-y-6">
            <span className="text-[11px] font-semibold uppercase tracking-widePill text-stone-500">
              Flagship Cohorts
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-stone-900 tracking-display leading-tight">
              Fellowships, incubators & action studios.
            </h1>
            <p className="text-lg sm:text-xl text-stone-600 leading-relaxed font-normal">
              Every AfriYouth program provides rigorous technical training, hands-on community fieldwork, living stipends or equity-free catalytic capital, and direct institutional placement.
            </p>
          </div>
        </div>
      </section>

      {/* Programs List */}
      <section className="py-24 sm:py-36" aria-labelledby="programs-list-heading">
        <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
          <div className="sr-only">
            <h2 id="programs-list-heading">Detailed Program Breakdown</h2>
          </div>

          {programs.map((program) => (
            <article
              key={program.id}
              id={program.slug}
              className="minimal-card rounded-card p-8 sm:p-12 scroll-mt-28"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                {/* Left Column: Brief & Highlights */}
                <div className="lg:col-span-7 space-y-8">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                        {program.area}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs text-botanical-600 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-botanical-500" />
                        <span>{program.status}</span>
                      </span>
                    </div>

                    <h3 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight">
                      {program.title}
                    </h3>
                    <p className="text-base font-semibold text-botanical-600 mt-2">
                      {program.tagline}
                    </p>
                    <p className="text-stone-600 leading-relaxed text-sm sm:text-base mt-4">
                      {program.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="pt-6 border-t border-stone-200">
                    <span className="text-[11px] font-semibold uppercase tracking-widePill text-stone-400 block mb-4">
                      Curriculum Highlights
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {program.curriculumHighlights.map((hl, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-stone-700">
                          <BookOpen className="w-4 h-4 text-botanical-500 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Verified Impact */}
                  <div className="p-6 rounded-card bg-stone-150/60 border border-stone-300">
                    <span className="text-[10px] font-semibold uppercase tracking-widePill text-terracotta-600 block mb-2">
                      Verified Impact Metric
                    </span>
                    <p className="text-sm font-medium text-stone-900">
                      {program.outcomes}
                    </p>
                  </div>
                </div>

                {/* Right Column: Parameters, Eligibility & Apply */}
                <div className="lg:col-span-5 bg-stone-150/40 rounded-card p-8 border border-stone-300 space-y-8 flex flex-col justify-between">
                  <div className="space-y-8">
                    {/* Program Duration & Capacity */}
                    <div className="grid grid-cols-2 gap-4 pb-6 border-b border-stone-300">
                      <div>
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-stone-400 block">
                          Duration
                        </span>
                        <strong className="text-stone-900 text-sm font-semibold">
                          {program.duration}
                        </strong>
                      </div>
                      <div>
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-stone-400 block">
                          Capacity
                        </span>
                        <strong className="text-stone-900 text-sm font-semibold">
                          {program.cohortSize}
                        </strong>
                      </div>
                    </div>

                    {/* Eligibility */}
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-widePill text-stone-900 block mb-4">
                        Eligibility Criteria
                      </span>
                      <ul className="space-y-2.5">
                        {program.eligibility.map((el, eIdx) => (
                          <li key={eIdx} className="flex items-start gap-2.5 text-xs text-stone-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-botanical-500 shrink-0 mt-0.5" />
                            <span>{el}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Roadmap */}
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-widePill text-stone-900 block mb-4">
                        Selection Roadmap
                      </span>
                      <ol className="space-y-3">
                        {program.howToParticipate.map((step) => (
                          <li key={step.step} className="flex items-start gap-3 text-xs">
                            <span className="font-mono font-bold text-stone-400 shrink-0 mt-0.5">
                              {step.step}.
                            </span>
                            <div>
                              <strong className="text-stone-900 block">{step.title}</strong>
                              <span className="text-stone-500 text-[11px] leading-relaxed block">{step.description}</span>
                            </div>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-6 border-t border-stone-300">
                    <Link
                      href="/opportunities"
                      className="inline-flex items-center justify-between w-full px-6 py-3.5 rounded-pill text-xs font-semibold uppercase tracking-wider bg-stone-900 text-white hover:bg-stone-800 transition-colors"
                    >
                      <span>Check Open Cohorts</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
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
