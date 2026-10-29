"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { site, about } from "@/lib/content";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHeroBanner } from "@/components/common/PageHeroBanner";
import { IntegratedNexusVisual } from "@/components/common/IntegratedNexusVisual";
import { ArrowUpRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-[#F4F4F6] text-black">
      {/* Curved Hero Banner matching Screenshot 3 */}
      <PageHeroBanner
        kicker="Institutional Charter"
        title="A continental nexus for youth evidence."
        description="AfriYouth connects research, policy, design, entrepreneurship, and foresight to convert youth agency into lasting systemic prosperity."
      />

      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <Breadcrumbs items={[{ label: "About AfriYouth" }]} />
      </div>

      {/* Mission & Vision: Architectural Cards */}
      <div className="w-full px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2">
        <section className="w-full rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] bg-white border border-black/10 py-16 sm:py-24 overflow-hidden shadow-sm" aria-labelledby="mission-heading">
          <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="minimal-card rounded-card p-8 sm:p-12 flex flex-col justify-between bg-white border border-gray-300"
              >
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-500 block mb-6 font-mono">
                    01 / Purpose & Mandate
                  </span>
                  <h2 id="mission-heading" className="font-serif font-normal text-2xl sm:text-4xl text-black mb-6 tracking-tight">
                    The Mission
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-[18px]">
                    {about.mission}
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="minimal-card rounded-card p-8 sm:p-12 flex flex-col justify-between bg-white border border-gray-300"
              >
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-500 block mb-6 font-mono">
                    02 / Continental Horizon
                  </span>
                  <h2 className="font-serif font-normal text-2xl sm:text-4xl text-black mb-6 tracking-tight">
                    The Vision
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-[18px]">
                    {about.vision}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      {/* Integrated Model Visual Component */}
      <div id="integrated-model">
        <IntegratedNexusVisual />
      </div>

      {/* 6 Brand Pillars */}
      <div className="w-full px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2">
        <section className="w-full rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] bg-[#EBECEF] border border-black/10 py-16 sm:py-24 overflow-hidden" aria-labelledby="pillars-heading">
          <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mb-16 sm:mb-20 space-y-3"
            >
              <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-500 font-mono">
                Foundational Principles
              </span>
              <h2 id="pillars-heading" className="font-serif font-normal text-3xl sm:text-5xl lg:text-6xl text-black tracking-tight">
                The six pillars guiding our ecosystem.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              {site.brandPillars.map((pillar, i) => {
                const isGradient = i === 1;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="h-full w-full flex flex-col"
                  >
                    <div
                      className={`rounded-2xl p-8 sm:p-10 flex flex-col justify-between w-full h-full group border transition-all duration-200 ${
                        isGradient
                          ? "bg-gradient-to-br from-[#0F2328] via-[#142B32] to-[#0A181C] text-white border-white/15 shadow-xl"
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
                          className={`text-xl sm:text-2xl font-bold mb-3 tracking-tight group-hover:translate-x-1 transition-transform font-sans ${
                            isGradient ? "text-white" : "text-black"
                          }`}
                        >
                          {pillar.title}
                        </h3>
                        <p
                          className={`text-[18px] leading-relaxed font-sans ${
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

      {/* Leadership & Advisory */}
      <div className="w-full px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2">
        <section id="team" className="w-full rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] bg-white border border-black/10 py-16 sm:py-24 overflow-hidden shadow-sm" aria-labelledby="team-heading">
          <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mb-16 sm:mb-20 space-y-3"
            >
              <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-500 font-mono">
                Leadership & Stewardship
              </span>
              <h2 id="team-heading" className="font-serif font-normal text-3xl sm:text-5xl lg:text-6xl text-black tracking-tight">
                Steered by pan-African practitioners.
              </h2>
              <p className="text-[18px] text-gray-600 pt-2 leading-relaxed">
                {about.team.intro}
              </p>
            </motion.div>

            {/* Leadership Team Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 items-stretch">
              {about.team.leadership.map((member, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="h-full w-full flex flex-col"
                >
                  <div className="skeuo-card rounded-2xl p-6 flex flex-col justify-between w-full h-full group bg-white">
                    <div className="flex-1 flex flex-col">
                      <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-5 bg-gray-200 shrink-0">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-102"
                        />
                      </div>
                      <h3 className="text-lg font-bold text-black tracking-tight font-sans">
                        {member.name}
                      </h3>
                      <span className="text-xs font-semibold text-gray-500 block mb-3 font-mono">
                        {member.role}
                      </span>
                      <p className="text-xs text-gray-600 leading-relaxed font-sans mt-auto">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Research Advisory Council */}
            <div className="skeuo-card rounded-2xl p-8 sm:p-12">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-gray-300 pb-6 mb-8 gap-2">
                <h3 className="text-xl sm:text-2xl font-bold text-black tracking-tight">
                  Research Advisory & Governance Council
                </h3>
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 font-mono">
                  Independent Oversight
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {about.team.advisoryCouncil.map((advisor, aIdx) => (
                  <div key={aIdx} className="space-y-1">
                    <strong className="text-base font-bold text-black block tracking-tight">
                      {advisor.name}
                    </strong>
                    <span className="text-xs font-semibold text-gray-500 block font-mono">
                      {advisor.role}
                    </span>
                    <span className="text-xs text-gray-500 block">
                      {advisor.affiliation}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Handover Bridge - Light card, no black background, framed */}
      <div className="w-full px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2">
        <section className="w-full rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] bg-white border border-black/10 py-20 sm:py-28 overflow-hidden shadow-sm text-black">
          <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto space-y-6"
            >
              <h2 className="font-serif font-normal text-2xl sm:text-4xl lg:text-5xl text-black tracking-tight">
                Explore our methodology and governance.
              </h2>
              <p className="text-gray-600 text-[18px] leading-relaxed">
                Access peer-reviewed frameworks, open data toolkits, or consult directly with the executive directorate.
              </p>
              <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/resources"
                  className="skeuo-btn-dark inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white active:scale-95 transition-all"
                >
                  <span>Open Toolkits & Briefs</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/contact"
                  className="skeuo-btn-light inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-black active:scale-95 transition-all"
                >
                  <span>Contact Directorate</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
