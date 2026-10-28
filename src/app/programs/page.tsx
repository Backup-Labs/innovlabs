import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { programs } from "@/lib/content";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Clock, Users, CheckCircle2, ArrowRight, Award, Compass, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Programs, Eligibility & Participation Roadmap",
  description:
    "Explore AfriYouth Innovation Labs flagship programs: African Youth Policy & Futures Fellowship, CivicTech Incubator, Community HCD Action Studios, and Evidence-to-Policy Labs.",
};

export default function ProgramsPage() {
  return (
    <div className="bg-white">
      {/* Top Header & Breadcrumb */}
      <div className="bg-surface border-b border-line">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs items={[{ label: "Programs" }]} />
          <div className="max-w-3xl mt-4">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-700 bg-primary-50 px-3 py-1 rounded-full">
              Flagship Cohorts
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-ink-900 tracking-heading mt-3">
              Pan-African Fellowships, Incubators & Design Studios
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
              Every AfriYouth program is structured to provide rigorous technical training, hands-on community fieldwork, financial stipends or equity-free grants, and direct institutional placement.
            </p>
          </div>
        </div>
      </div>

      {/* Programs List */}
      <section className="py-16 sm:py-24" aria-labelledby="programs-list-heading">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="sr-only">
            <h2 id="programs-list-heading">Detailed Program Breakdown</h2>
          </div>

          {programs.map((program, index) => (
            <article
              key={program.id}
              id={program.slug}
              className="bg-white rounded-card border border-line overflow-hidden shadow-subtle p-6 sm:p-10 scroll-mt-24"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Overview Column */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary-700 bg-primary-50 px-3 py-1 rounded">
                      {program.area}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span>{program.status}</span>
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-ink-900 font-heading">
                    {program.title}
                  </h3>
                  <p className="text-base font-semibold text-primary-700">
                    {program.tagline}
                  </p>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    {program.description}
                  </p>

                  {/* Highlights Grid */}
                  <div className="pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Curriculum Highlights
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {program.curriculumHighlights.map((hl, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                          <BookOpen className="w-4 h-4 text-primary-700 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Outcomes statement */}
                  <div className="p-4 bg-surface rounded-xl border border-line">
                    <strong className="text-xs font-bold uppercase tracking-wider text-primary-700 block mb-1">
                      Verified Cohort Outcome
                    </strong>
                    <p className="text-xs sm:text-sm text-ink-900 font-medium">
                      {program.outcomes}
                    </p>
                  </div>
                </div>

                {/* Right Eligibility & Participation Column */}
                <div className="lg:col-span-5 bg-surface rounded-xl p-6 sm:p-8 border border-line space-y-6 flex flex-col justify-between">
                  <div className="space-y-6">
                    {/* Program Stats */}
                    <div className="grid grid-cols-2 gap-4 pb-4 border-b border-line text-xs">
                      <div>
                        <span className="text-slate-500 block">Duration</span>
                        <strong className="text-ink-900 text-sm font-semibold">{program.duration}</strong>
                      </div>
                      <div>
                        <span className="text-slate-500 block">Cohort Size</span>
                        <strong className="text-ink-900 text-sm font-semibold">{program.cohortSize}</strong>
                      </div>
                    </div>

                    {/* Eligibility List */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-ink-900 mb-3 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-primary-700" />
                        <span>Eligibility Criteria</span>
                      </h4>
                      <ul className="space-y-2">
                        {program.eligibility.map((el, eIdx) => (
                          <li key={eIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary-700 shrink-0 mt-2" />
                            <span>{el}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* How to Participate Steps */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-ink-900 mb-3 flex items-center gap-1.5">
                        <Compass className="w-4 h-4 text-accent-500" />
                        <span>How to Participate</span>
                      </h4>
                      <ol className="space-y-2.5 text-xs text-slate-700">
                        {program.howToParticipate.map((step) => (
                          <li key={step.step} className="flex items-start gap-2.5">
                            <span className="w-5 h-5 rounded-full bg-primary-100 text-primary-700 font-bold flex items-center justify-center shrink-0 text-[10px]">
                              {step.step}
                            </span>
                            <div>
                              <strong className="text-ink-900 block font-medium">{step.title}</strong>
                              <span className="text-slate-500 text-[11px] leading-tight block">{step.description}</span>
                            </div>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>

                  {/* Apply action */}
                  <div className="pt-4 border-t border-line">
                    <Link
                      href="/opportunities"
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold bg-primary-700 text-white hover:bg-primary-600 transition-colors shadow-sm"
                    >
                      <span>Apply in Opportunities Portal</span>
                      <ArrowRight className="w-4 h-4" />
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
