"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { programs } from "@/lib/content";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CheckCircle2, ArrowUpRight, BookOpen } from "lucide-react";

export default function ProgramsPage() {
  return (
    <div className="bg-[#F4F4F6] text-black">
      {/* Editorial Header */}
      <section className="hairline-b pt-12 pb-20 sm:pb-28">
        <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
          <Breadcrumbs items={[{ label: "Programs" }]} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mt-8 space-y-6"
          >
            <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-500 font-mono">
              // Flagship Cohorts
            </span>
            <h1 className="font-serif font-normal text-4xl sm:text-6xl lg:text-7xl text-black tracking-tight leading-tight">
              Fellowships, incubators & action studios.
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-normal">
              Every AfriYouth program provides rigorous technical training, hands-on community fieldwork, living stipends or equity-free catalytic capital, and direct institutional placement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs List */}
      <section className="py-24 sm:py-36 bg-white" aria-labelledby="programs-list-heading">
        <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
          <div className="sr-only">
            <h2 id="programs-list-heading">Detailed Program Breakdown</h2>
          </div>

          {programs.map((program, idx) => (
            <motion.article
              key={program.id}
              id={program.slug}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="minimal-card rounded-card p-8 sm:p-12 scroll-mt-28 bg-[#F4F4F6] border border-gray-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                {/* Left Column: Brief & Highlights */}
                <div className="lg:col-span-7 space-y-8">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-4 font-mono">
                      <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                        {program.area}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs text-black font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                        <span>{program.status}</span>
                      </span>
                    </div>

                    <h3 className="font-serif font-normal text-3xl sm:text-4xl text-black tracking-tight leading-tight">
                      {program.title}
                    </h3>
                    <p className="text-base font-semibold text-black mt-2 font-mono">
                      {program.tagline}
                    </p>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base mt-4">
                      {program.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="pt-6 border-t border-gray-300">
                    <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-500 block mb-4 font-mono">
                      Curriculum Highlights
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {program.curriculumHighlights.map((hl, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                          <BookOpen className="w-4 h-4 text-black shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Verified Impact */}
                  <div className="p-6 rounded-card bg-white border border-gray-300">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-500 block mb-2 font-mono">
                      Verified Impact Metric
                    </span>
                    <p className="text-sm font-bold text-black font-mono">
                      {program.outcomes}
                    </p>
                  </div>
                </div>

                {/* Right Column: Parameters, Eligibility & Apply */}
                <div className="lg:col-span-5 bg-white rounded-card p-8 border border-gray-300 space-y-8 flex flex-col justify-between">
                  <div className="space-y-8">
                    {/* Program Duration & Capacity */}
                    <div className="grid grid-cols-2 gap-4 pb-6 border-b border-gray-200 font-mono">
                      <div>
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 block">
                          Duration
                        </span>
                        <strong className="text-black text-sm font-semibold">
                          {program.duration}
                        </strong>
                      </div>
                      <div>
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 block">
                          Capacity
                        </span>
                        <strong className="text-black text-sm font-semibold">
                          {program.cohortSize}
                        </strong>
                      </div>
                    </div>

                    {/* Eligibility */}
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-widest text-black block mb-4 font-mono">
                        Eligibility Criteria
                      </span>
                      <ul className="space-y-2.5">
                        {program.eligibility.map((el, eIdx) => (
                          <li key={eIdx} className="flex items-start gap-2.5 text-xs text-gray-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-black shrink-0 mt-0.5" />
                            <span>{el}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Roadmap */}
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-widest text-black block mb-4 font-mono">
                        Selection Roadmap
                      </span>
                      <ol className="space-y-3">
                        {program.howToParticipate.map((step) => (
                          <li key={step.step} className="flex items-start gap-3 text-xs">
                            <span className="font-mono font-bold text-gray-400 shrink-0 mt-0.5">
                              {step.step}.
                            </span>
                            <div>
                              <strong className="text-black block">{step.title}</strong>
                              <span className="text-gray-500 text-[11px] leading-relaxed block">{step.description}</span>
                            </div>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-6 border-t border-gray-200">
                    <Link
                      href="/opportunities"
                      className="inline-flex items-center justify-between w-full px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-black text-white hover:bg-neutral-800 transition-colors shadow-sm"
                    >
                      <span>Check Open Cohorts</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
