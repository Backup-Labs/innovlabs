"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { programs, opportunities, services, stories } from "@/lib/content";
import { AudienceSelector } from "@/components/common/AudienceSelector";
import { IntegratedNexusVisual } from "@/components/common/IntegratedNexusVisual";
import { ImpactMetrics } from "@/components/common/ImpactMetrics";
import { ProgramCard } from "@/components/common/ProgramCard";
import { OpportunityCard } from "@/components/common/OpportunityCard";
import { ServiceCard } from "@/components/common/ServiceCard";
import { StoryCard } from "@/components/common/StoryCard";
import { PartnerShowcase } from "@/components/common/PartnerShowcase";
import { ArrowUpRight, ArrowRight, PlusCircle } from "lucide-react";

export default function HomePage() {
  const featuredPrograms = programs.slice(0, 3);
  const openOpportunities = opportunities.filter((o) => o.status === "open").slice(0, 3);
  const featuredServices = services.slice(0, 3);
  const featuredStories = stories.slice(0, 2);

  return (
    <div className="flex flex-col bg-[#F4F4F6] text-black">
      {/* 1. Hero Section matching the photo exactly */}
      <section className="relative w-full overflow-hidden min-h-[90vh] lg:min-h-[92vh] flex flex-col justify-between py-12 sm:py-16 lg:py-20 bg-[#161D20]">
        {/* Atmospheric Fresco Mural Background Artwork */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-mural.svg"
            alt="Mural of hands reaching in solidarity"
            fill
            priority
            className="object-cover object-center pointer-events-none"
          />
        </div>

        {/* Ambient Dark Gradient Overlay for Maximum Text Legibility */}
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/85 via-black/40 to-black/70 pointer-events-none" />

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-container mx-auto px-6 sm:px-8 lg:px-12 w-full flex-1 flex flex-col justify-between">
          {/* Top Kicker matching photo: ⊕ COUNSEL TO +40 LEADERSHIP TEAMS */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-8 sm:mb-12"
          >
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest uppercase text-white/80 font-mono">
              <PlusCircle className="w-4 h-4 text-white" />
              <span>Pan-African Youth Innovation Nexus</span>
            </div>
          </motion.div>

          {/* Huge Editorial Headline matching photo */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl my-auto py-6 sm:py-10"
          >
            <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-[88px] font-extrabold text-white tracking-tight leading-[1.04] font-heading">
              The quiet work <br className="hidden sm:inline" />
              behind bold decisions.
            </h1>
          </motion.div>

          {/* Bottom Area: Left Description & Buttons + Right Floating Case Study Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pt-8 sm:pt-12">
            {/* Left: 3-line statement and 2 pill buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="lg:col-span-7 space-y-6"
            >
              <p className="text-base sm:text-lg text-white/85 leading-relaxed font-normal max-w-xl">
                AfriYouth is an integrated innovation practice for boards, founders, and policymakers—rigorous research, plain evidence, and solutions that still hold long after the engagement concludes.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                {/* White pill button matching photo: Book a call → */}
                <Link
                  href="/contact?intent=service"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold bg-white text-black hover:bg-neutral-100 transition-all duration-200 active:scale-95 shadow-lg group"
                >
                  <span>Book a call</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>

                {/* Translucent pill button matching photo: View pricing / Explore opportunities → */}
                <Link
                  href="/opportunities"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/25 transition-all duration-200 active:scale-95 group"
                >
                  <span>Explore opportunities</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>

            {/* Right: Floating Case Study Card matching photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 flex justify-start lg:justify-end"
            >
              <div className="w-full max-w-sm rounded-3xl bg-[#F4F4F6] p-5 shadow-2xl border border-white/40 text-black backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1">
                {/* Architectural engraving thumbnail */}
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-gray-200 mb-4 shadow-inner">
                  <Image
                    src="/images/case-study-hero.svg"
                    alt="Classical architectural watermill case study"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Dark pill badge: Case study */}
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold bg-black text-white font-mono">
                    Case study
                  </span>
                </div>

                {/* Description matching photo */}
                <p className="text-xs sm:text-sm text-gray-800 leading-snug font-normal mb-4">
                  Twelve years of youth enterprise data with no order of priority. We sequenced it by risk.
                </p>

                {/* Metric stat at bottom */}
                <div className="pt-3 border-t border-gray-300 flex items-baseline justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl sm:text-2xl font-extrabold text-black tracking-tight font-heading">
                      48.5k
                    </span>
                    <span className="text-[11px] text-gray-500 font-medium">
                      Youth mobilized
                    </span>
                  </div>
                  <span className="text-[11px] font-mono font-bold text-black uppercase">
                    91% Survival
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Minimalist 4-Column Metric Ticker with Hairlines */}
      <section className="bg-white py-12 sm:py-16 hairline-b">
        <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-3xl sm:text-4xl font-extrabold text-black font-heading block tracking-tight">
              48,500+
            </span>
            <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider block mt-1 font-mono">
              Leaders Engaged
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="text-3xl sm:text-4xl font-extrabold text-black font-heading block tracking-tight">
              26 Nations
            </span>
            <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider block mt-1 font-mono">
              Active Operations
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-3xl sm:text-4xl font-extrabold text-black font-heading block tracking-tight">
              38 Policies
            </span>
            <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider block mt-1 font-mono">
              Frameworks Influenced
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className="text-3xl sm:text-4xl font-extrabold text-black font-heading block tracking-tight">
              $6.4M+
            </span>
            <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider block mt-1 font-mono">
              Capital Mobilized
            </span>
          </motion.div>
        </div>
      </section>

      {/* 3. Audience Selector */}
      <AudienceSelector />

      {/* 4. 'How our work connects' visual */}
      <IntegratedNexusVisual />

      {/* 5. Services Overview */}
      <section className="py-24 sm:py-36 bg-[#F4F4F6] hairline-b hairline-t" aria-labelledby="services-overview-heading">
        <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20"
          >
            <div className="max-w-xl space-y-3">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-500 font-mono">
                // Institutional Capabilities
              </span>
              <h2 id="services-overview-heading" className="text-3xl sm:text-5xl font-extrabold text-black tracking-display">
                Advisory for modern institutions.
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black hover:underline transition-all shrink-0"
            >
              <span>View All 6 Services</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Featured Programs */}
      <section className="py-24 sm:py-36 bg-white" aria-labelledby="programs-overview-heading">
        <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20"
          >
            <div className="max-w-xl space-y-3">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-500 font-mono">
                // Flagship Cohorts
              </span>
              <h2 id="programs-overview-heading" className="text-3xl sm:text-5xl font-extrabold text-black tracking-display">
                Fellowships and venture labs.
              </h2>
            </div>
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black hover:underline transition-all shrink-0"
            >
              <span>Explore Programs</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPrograms.map((program, idx) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <ProgramCard program={program} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Open Opportunities */}
      <section className="py-24 sm:py-36 bg-[#F4F4F6] hairline-b hairline-t" aria-labelledby="opportunities-overview-heading">
        <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20"
          >
            <div className="max-w-xl space-y-3">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-500 font-mono">
                // Live Calls & Grants
              </span>
              <h2 id="opportunities-overview-heading" className="text-3xl sm:text-5xl font-extrabold text-black tracking-display">
                Open for applications.
              </h2>
            </div>
            <Link
              href="/opportunities"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black hover:underline transition-all shrink-0"
            >
              <span>Filter Opportunities</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {openOpportunities.map((opportunity, idx) => (
              <motion.div
                key={opportunity.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <OpportunityCard opportunity={opportunity} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Impact Numbers */}
      <ImpactMetrics />

      {/* 9. Field Stories */}
      <section className="py-24 sm:py-36 bg-white" aria-labelledby="stories-heading">
        <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mb-16 sm:mb-20 space-y-3"
          >
            <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-500 font-mono">
              // Proof Points
            </span>
            <h2 id="stories-heading" className="text-3xl sm:text-5xl font-extrabold text-black tracking-display">
              Stories of systemic change.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {featuredStories.map((story, idx) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                <StoryCard story={story} />
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-right">
            <Link
              href="/impact#stories"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black hover:underline transition-all"
            >
              <span>Read All Case Studies</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 10. Partner Logos Showcase */}
      <PartnerShowcase />

      {/* 11. Minimalist Final Call to Action */}
      <section className="py-28 sm:py-40 bg-black text-white">
        <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 font-mono">
              // Get Started
            </span>
            <h2 className="text-4xl sm:text-6xl font-extrabold tracking-display font-heading text-white">
              Turn youth agency into continental scale.
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto font-normal leading-relaxed">
              Whether you are applying for a fellowship or co-funding a national lab, AfriYouth is your execution partner.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <Link
                href="/opportunities"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs font-semibold bg-white text-black hover:bg-gray-100 transition-colors shadow-lg"
              >
                <span>Find an Open Opportunity</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs font-semibold border border-gray-700 text-white hover:bg-neutral-900 transition-colors"
              >
                <span>Start a Dialogue</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
