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
      {/* 1. Hero Section: Tight edge margin, fit completely in viewport without scrolling */}
      <div className="w-full px-2 sm:px-3 lg:px-4 pb-1 sm:pb-2 pt-0.5">
        <section className="relative w-full rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] overflow-hidden bg-[#161D20] h-[calc(100vh-4.25rem)] sm:h-[calc(100dvh-4.25rem)] max-h-[calc(100dvh-4.25rem)] flex flex-col justify-between border border-black/10 shadow-2xl">
          {/* Atmospheric Fresco Mural Background Artwork */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-main.jpg"
              alt="Pan-African architectural landmark structure"
              fill
              priority
              className="object-cover object-center pointer-events-none"
            />
          </div>

          {/* Ambient Dark Gradient Overlay for Maximum Text Legibility */}
          <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/85 via-black/45 to-black/75 pointer-events-none" />

          {/* Hero Content Container: Mathematically proportioned to fit any screen height without scrolling */}
          <div className="relative z-10 max-w-container mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col justify-between py-3.5 sm:py-4 lg:py-5">
            {/* Top Kicker matching photo: ⊕ PAN-AFRICAN YOUTH INNOVATION NEXUS */}
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="pt-0.5"
            >
              <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase text-white/80 font-mono">
                <PlusCircle className="w-3 h-3 text-white" />
                <span>Pan-African Youth Innovation Nexus</span>
              </div>
            </motion.div>

            {/* Huge Editorial Headline in Instrument Serif (Upright, not italic) */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl my-auto py-1 sm:py-2"
            >
              <h1 className="font-serif font-normal text-4xl sm:text-6xl md:text-7xl lg:text-[clamp(3.1rem,5.6vw,5.2rem)] text-white tracking-tight leading-[1.01]">
                The quiet work <br className="hidden sm:inline" />
                behind bold decisions.
              </h1>
            </motion.div>

            {/* Bottom Area: Left Minimal Description & Buttons + Right High-Frost Glass Case Study Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-6 items-end pb-0.5">
              {/* Left: Concise minimalist statement and 2 skeuomorphic/frost pill buttons */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="lg:col-span-7 space-y-2.5"
              >
                <p className="text-[18px] text-white/95 leading-relaxed font-normal max-w-lg font-sans">
                  AfriYouth is an integrated innovation practice for leaders, researchers, and founders—rigorous evidence and solutions that hold.
                </p>

                <div className="flex flex-wrap items-center gap-2 pt-0.5">
                  {/* Skeuomorphic tactile white pill button matching photo: Book a call → */}
                  <Link
                    href="/contact?intent=service"
                    className="skeuo-btn-light inline-flex items-center justify-center gap-1.5 px-4.5 sm:px-5 py-2 rounded-full text-xs font-semibold text-black transition-all duration-200 active:scale-95 group font-sans"
                  >
                    <span>Book a call</span>
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </Link>

                  {/* High-frost glassmorphic pill button: Explore opportunities → */}
                  <Link
                    href="/opportunities"
                    className="frost-glass-dark inline-flex items-center justify-center gap-1.5 px-4.5 sm:px-5 py-2 rounded-full text-xs font-semibold text-white transition-all duration-200 active:scale-95 group font-sans border border-white/20 hover:border-white/40"
                  >
                    <span>Explore opportunities</span>
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>

              {/* Right: Floating High-Frost Glass Case Study Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-5 flex justify-start lg:justify-end"
              >
                <div className="frost-glass w-full max-w-[240px] sm:max-w-[260px] lg:max-w-[270px] rounded-xl sm:rounded-2xl p-2.5 sm:p-3 text-black transition-transform duration-300 hover:-translate-y-1">
                  {/* Architectural case study photograph thumbnail */}
                  <div className="relative w-full h-16 sm:h-18 lg:h-20 rounded-lg overflow-hidden bg-gray-200 mb-2 shadow-inner">
                    <Image
                      src="/images/case-study-hero.jpg"
                      alt="Pan-African clean energy and innovation telemetry case study"
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Dark pill badge: Case study */}
                  <div className="mb-1">
                    <span className="inline-block px-2 py-0.5 rounded-full text-[9px] font-semibold bg-[#1A252C] text-white font-mono shadow-sm">
                      Case study
                    </span>
                  </div>

                  {/* Concise description matching photo */}
                  <p className="text-[10.5px] sm:text-[11px] text-gray-900 leading-snug font-medium mb-1.5 font-sans">
                    Twelve years of venture telemetry. Sequenced by risk.
                  </p>

                  {/* Metric stat at bottom */}
                  <div className="pt-1 border-t border-black/10 flex items-baseline justify-between font-sans">
                    <div className="flex items-baseline gap-1">
                      <span className="text-lg sm:text-xl font-serif font-normal text-black tracking-tight leading-none">
                        48.5k
                      </span>
                      <span className="text-[9px] text-gray-600 font-medium">
                        Youth mobilized
                      </span>
                    </div>
                    <span className="text-[9px] font-mono font-bold text-black uppercase">
                      91% Survival
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      {/* 2. Minimalist 4-Column Metric Ticker - Framed card with rounded corners */}
      <div className="w-full px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2">
        <section className="w-full rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] bg-white border border-black/10 py-10 sm:py-14 shadow-sm overflow-hidden">
          <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-3xl sm:text-4xl font-extrabold text-black font-sans block tracking-tight">
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
              <span className="text-3xl sm:text-4xl font-serif font-normal text-black block tracking-tight">
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
              <span className="text-3xl sm:text-4xl font-serif font-normal text-black block tracking-tight">
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
              <span className="text-3xl sm:text-4xl font-serif font-normal text-black block tracking-tight">
                $6.4M+
              </span>
              <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider block mt-1 font-mono">
                Capital Mobilized
              </span>
            </motion.div>
          </div>
        </section>
      </div>

      {/* 3. Audience Selector */}
      <AudienceSelector />

      {/* 4. 'How our work connects' visual */}
      <IntegratedNexusVisual />

      {/* 5. Services Overview - Framed card with rounded corners */}
      <div className="w-full px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2">
        <section className="w-full rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] bg-[#EBECEF] border border-black/10 py-16 sm:py-24 overflow-hidden" aria-labelledby="services-overview-heading">
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
                  Institutional Capabilities
                </span>
                <h2 id="services-overview-heading" className="font-serif font-normal text-3xl sm:text-5xl lg:text-6xl text-black tracking-tight">
                  Advisory for modern institutions.
                </h2>
              </div>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black hover:underline transition-all shrink-0 font-sans"
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
      </div>

      {/* 6. Featured Programs - Framed card with rounded corners */}
      <div className="w-full px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2">
        <section className="w-full rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] bg-white border border-black/10 py-16 sm:py-24 overflow-hidden shadow-sm" aria-labelledby="programs-overview-heading">
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
                  Flagship Cohorts
                </span>
                <h2 id="programs-overview-heading" className="font-serif font-normal text-3xl sm:text-5xl lg:text-6xl text-black tracking-tight">
                  Fellowships and venture labs.
                </h2>
              </div>
              <Link
                href="/programs"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black hover:underline transition-all shrink-0 font-sans"
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
      </div>

      {/* 7. Open Opportunities - Framed card with rounded corners */}
      <div className="w-full px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2">
        <section className="w-full rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] bg-[#EBECEF] border border-black/10 py-16 sm:py-24 overflow-hidden" aria-labelledby="opportunities-overview-heading">
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
                  Live Calls & Grants
                </span>
                <h2 id="opportunities-overview-heading" className="font-serif font-normal text-3xl sm:text-5xl lg:text-6xl text-black tracking-tight">
                  Open for applications.
                </h2>
              </div>
              <Link
                href="/opportunities"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black hover:underline transition-all shrink-0 font-sans"
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
      </div>

      {/* 8. Impact Numbers */}
      <ImpactMetrics />

      {/* 9. Field Stories - Framed card with rounded corners */}
      <div className="w-full px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2">
        <section className="w-full rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] bg-white border border-black/10 py-16 sm:py-24 overflow-hidden shadow-sm" aria-labelledby="stories-heading">
          <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mb-16 sm:mb-20 space-y-3"
            >
              <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-500 font-mono">
                Proof Points
              </span>
              <h2 id="stories-heading" className="font-serif font-normal text-3xl sm:text-5xl lg:text-6xl text-black tracking-tight">
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
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black hover:underline transition-all font-sans"
              >
                <span>Read All Case Studies</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* 10. Partner Logos Showcase */}
      <PartnerShowcase />

      {/* 11. Minimalist Final Call to Action - Light background, never edge-to-edge */}
      <div className="w-full px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2">
        <section className="w-full rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] bg-white border border-black/10 py-20 sm:py-28 overflow-hidden shadow-sm text-black">
          <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl mx-auto space-y-6"
            >
              <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-500 font-mono">
                Get Started
              </span>
              <h2 className="font-serif font-normal text-4xl sm:text-6xl lg:text-7xl text-black tracking-tight">
                Turn youth agency into continental scale.
              </h2>
              <p className="text-gray-600 text-[18px] max-w-xl mx-auto font-normal leading-relaxed font-sans">
                Whether you are applying for a fellowship or co-funding a national lab, AfriYouth is your execution partner.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                <Link
                  href="/opportunities"
                  className="skeuo-btn-dark w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs font-semibold text-white active:scale-95 transition-all font-sans"
                >
                  <span>Find an Open Opportunity</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/contact"
                  className="skeuo-btn-light w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs font-semibold text-black active:scale-95 transition-all font-sans"
                >
                  <span>Start a Dialogue</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
