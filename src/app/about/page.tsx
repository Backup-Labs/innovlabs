import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site, about } from "@/lib/content";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { IntegratedNexusVisual } from "@/components/common/IntegratedNexusVisual";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us & Integrated Nexus Architecture",
  description:
    "Learn how AfriYouth Innovation Labs bridges applied research, policy shaping, human-centered design, venture acceleration, and strategic foresight across Africa.",
};

export default function AboutPage() {
  return (
    <div className="bg-stone-100 text-stone-900">
      {/* Editorial Header */}
      <section className="hairline-b pt-12 pb-20 sm:pb-28">
        <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
          <Breadcrumbs items={[{ label: "About AfriYouth" }]} />
          <div className="max-w-3xl mt-8 space-y-6">
            <span className="text-[11px] font-semibold uppercase tracking-widePill text-stone-500">
              Institutional Charter
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-stone-900 tracking-display leading-tight">
              A continental nexus for youth evidence.
            </h1>
            <p className="text-lg sm:text-xl text-stone-600 leading-relaxed font-normal">
              AfriYouth connects research, policy, design, entrepreneurship, and foresight. We operate the integrated bridge that converts youth agency into lasting systemic prosperity.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision: Architectural Cards */}
      <section className="py-24 sm:py-36 hairline-b" aria-labelledby="mission-heading">
        <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="minimal-card rounded-card p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-widePill text-botanical-600 block mb-6">
                  01 / Purpose & Mandate
                </span>
                <h2 id="mission-heading" className="text-2xl sm:text-4xl font-extrabold text-stone-900 mb-6 tracking-tight">
                  The Mission
                </h2>
                <p className="text-stone-600 leading-relaxed text-base sm:text-lg">
                  {about.mission}
                </p>
              </div>
            </div>

            <div className="minimal-card rounded-card p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-widePill text-terracotta-600 block mb-6">
                  02 / Continental Horizon
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-stone-900 mb-6 tracking-tight">
                  The Vision
                </h2>
                <p className="text-stone-600 leading-relaxed text-base sm:text-lg">
                  {about.vision}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrated Model Visual Component */}
      <div id="integrated-model">
        <IntegratedNexusVisual />
      </div>

      {/* 6 Brand Pillars */}
      <section className="py-24 sm:py-36 hairline-b bg-stone-150/40" aria-labelledby="pillars-heading">
        <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-2xl mb-16 sm:mb-20 space-y-3">
            <span className="text-[11px] font-semibold uppercase tracking-widePill text-stone-500">
              Foundational Principles
            </span>
            <h2 id="pillars-heading" className="text-3xl sm:text-5xl font-extrabold text-stone-900 tracking-display">
              The six pillars guiding our ecosystem.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {site.brandPillars.map((pillar, i) => (
              <div
                key={i}
                className="minimal-card rounded-card p-8 sm:p-10 flex flex-col justify-between group hover:border-stone-400 transition-colors"
              >
                <div>
                  <span className="text-xs font-semibold text-stone-400 block mb-6 font-mono">
                    0{i + 1}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-3 tracking-tight group-hover:text-botanical-600 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Advisory */}
      <section id="team" className="py-24 sm:py-36 hairline-b" aria-labelledby="team-heading">
        <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-2xl mb-16 sm:mb-20 space-y-3">
            <span className="text-[11px] font-semibold uppercase tracking-widePill text-stone-500">
              Leadership & Stewardship
            </span>
            <h2 id="team-heading" className="text-3xl sm:text-5xl font-extrabold text-stone-900 tracking-display">
              Steered by pan-African practitioners.
            </h2>
            <p className="text-base text-stone-600 pt-2">
              {about.team.intro}
            </p>
          </div>

          {/* Leadership Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {about.team.leadership.map((member, idx) => (
              <div
                key={idx}
                className="minimal-card rounded-card p-6 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-5 bg-stone-200">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-102"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-stone-900 tracking-tight">
                    {member.name}
                  </h3>
                  <span className="text-xs font-semibold text-botanical-600 block mb-3">
                    {member.role}
                  </span>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Research Advisory Council */}
          <div className="minimal-card rounded-card p-8 sm:p-12">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-stone-200 pb-6 mb-8 gap-2">
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                Research Advisory & Governance Council
              </h3>
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                Independent Oversight
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {about.team.advisoryCouncil.map((advisor, aIdx) => (
                <div key={aIdx} className="space-y-1">
                  <strong className="text-base font-bold text-stone-900 block tracking-tight">
                    {advisor.name}
                  </strong>
                  <span className="text-xs font-semibold text-botanical-600 block">
                    {advisor.role}
                  </span>
                  <span className="text-xs text-stone-500 block">
                    {advisor.affiliation}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Handover Bridge */}
      <section className="py-24 sm:py-32 bg-stone-900 text-stone-100">
        <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-display">
              Explore our methodology and governance.
            </h2>
            <p className="text-stone-300 text-base leading-relaxed">
              Access peer-reviewed frameworks, open data toolkits, or consult directly with the executive directorate.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/resources"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-pill text-xs font-semibold uppercase tracking-wider bg-white text-stone-900 hover:bg-stone-200 transition-colors"
              >
                <span>Open Toolkits & Briefs</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-pill text-xs font-semibold uppercase tracking-wider border border-white/30 text-white hover:bg-white/10 transition-colors"
              >
                <span>Contact Directorate</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}