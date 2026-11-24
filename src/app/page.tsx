"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { programs, opportunities, services } from "@/lib/content";
import { isOpportunityOpen } from "@/lib/opportunities";
import { AudienceSelector } from "@/components/common/AudienceSelector";
import { IntegratedNexusVisual } from "@/components/common/IntegratedNexusVisual";
import { ImpactMetrics } from "@/components/common/ImpactMetrics";
import { ProgramCard } from "@/components/common/ProgramCard";
import { OpportunityCard } from "@/components/common/OpportunityCard";
import { ServiceCard } from "@/components/common/ServiceCard";
import { PartnerShowcase } from "@/components/common/PartnerShowcase";
import { ArrowUpRight, ArrowRight, PlusCircle } from "lucide-react";

export default function HomePage() {
  const featuredPrograms = programs.slice(0, 3);
  const openOpportunities = opportunities.filter(isOpportunityOpen).slice(0, 3);
  const featuredServices = services.slice(0, 3);

  return (
    <div className="flex flex-col bg-[#F4F4F6] text-black">
      {/* 1. Hero Section: Tight edge margin, fit completely in viewport without scrolling */}
      <div className="w-full px-2 sm:px-3 lg:px-4 pb-1 sm:pb-2 pt-0.5">
        <section className="relative w-full rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] overflow-hidden bg-[#0D0624] min-h-[560px] sm:min-h-[620px] lg:h-[calc(100dvh-4.25rem)] lg:max-h-[calc(100dvh-4.25rem)] flex flex-col justify-between border border-black/10 shadow-2xl">
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
          <div className="relative z-10 max-w-container mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col justify-between py-6 sm:py-8 lg:py-10">
            {/* Top Kicker with Official Brand Tagline */}
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="pt-1"
            >
              <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase text-white/90 font-mono">
                <PlusCircle className="w-3 h-3 text-[#C723DF]" />
                <span>Fueling Innovators for Sustainable Development</span>
              </div>
            </motion.div>

            {/* Bottom Row: Title on Left Bottom & Descriptive Text + Buttons on Right Bottom */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end pb-1 sm:pb-2 pt-10 sm:pt-16 mt-auto">
              {/* Left Bottom: Huge Editorial Headline */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-7"
              >
                <h1 className="font-serif font-normal text-[clamp(2.4rem,5.5vw,5rem)] text-white tracking-tight leading-[1.03]">
                  The quiet work <br className="hidden sm:inline" />
                  behind bold decisions.
                </h1>
              </motion.div>

              {/* Right Bottom: Descriptive Text & Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
                className="lg:col-span-5 space-y-4"
              >
                <p className="text-base sm:text-[18px] text-white/95 leading-relaxed font-normal font-sans">
                  AfriYouth broadens young people&apos;s critical thinking and advances their innovative ideas for sustainable development in Africa.
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  {/* Skeuomorphic tactile white pill button: Book a call */}
                  <Link
                    href="/contact?intent=service"
                    className="skeuo-btn-light inline-flex items-center justify-center gap-1.5 h-11 px-6 rounded-full text-xs font-semibold text-black transition-all duration-200 active:scale-95 group font-sans"
                  >
                    <span>Book a call</span>
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </Link>

                  {/* High-frost glassmorphic pill button: Explore opportunities */}
                  <Link
                    href="/opportunities"
                    className="frost-glass-dark frost-glass-dark-btn inline-flex items-center justify-center gap-1.5 h-11 px-6 rounded-full text-xs font-semibold text-white transition-all duration-200 active:scale-95 group font-sans border border-white/20 hover:border-white/40"
                  >
                    <span>Explore opportunities</span>
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      {/* Five areas of work */}
      <div className="w-full px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2">
        <section className="w-full rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] bg-white border border-black/10 py-10 sm:py-14 shadow-sm overflow-hidden">
          <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {["Research & Evidence", "Policy & Governance", "Human-Centered Design", "Entrepreneurship", "Strategic Foresight"].map((area, index) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="border-l border-gray-300 pl-4 sm:pl-5"
              >
                <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider block mb-2 font-mono">0{index + 1}</span>
                <span className="text-base sm:text-lg text-black font-semibold leading-snug block">{area}</span>
              </motion.div>
            ))}
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
                  <span>View All Services</span>
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
                  Programs & Learning
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              {featuredPrograms.map((program, idx) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="h-full w-full flex flex-col"
                >
                  <ProgramCard program={program} featured={idx === 1} />
                </motion.div>
              ))}
              {featuredPrograms.length === 0 && (
                <div className="md:col-span-3 rounded-2xl bg-[#F4F4F6] border border-gray-300 p-7 sm:p-9 text-center">
                  <p className="text-base text-gray-700">Program listings will be added when approved details are available.</p>
                </div>
              )}
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
                  Opportunities
                </span>
                <h2 id="opportunities-overview-heading" className="font-serif font-normal text-3xl sm:text-5xl lg:text-6xl text-black tracking-tight">
                  Explore opportunities.
                </h2>
              </div>
              <Link
                href="/opportunities"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black hover:underline transition-all shrink-0 font-sans"
              >
                <span>View Opportunities</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              {openOpportunities.map((opportunity, idx) => (
                <motion.div
                  key={opportunity.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="h-full w-full flex flex-col"
                >
                  <OpportunityCard opportunity={opportunity} featured={idx === 1} />
                </motion.div>
              ))}
              {openOpportunities.length === 0 && (
                <div className="md:col-span-3 rounded-2xl bg-white border border-gray-300 p-7 sm:p-9 text-center">
                  <p className="text-base text-gray-700">No verified opportunity listings are available at this time.</p>
                  <Link href="/contact" className="inline-flex items-center gap-2 mt-4 text-xs font-bold uppercase tracking-wider text-black hover:underline">
                    Ask AfriYouth for updates <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>

      {/* Verified case studies will be published when approved source material is available. */}
      <div className="w-full px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2">
        <section className="w-full rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] bg-white border border-black/10 py-12 sm:py-16 shadow-sm" aria-labelledby="home-evidence-heading">
          <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-3">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-500 font-mono">Evidence & Learning</span>
              <h2 id="home-evidence-heading" className="font-serif font-normal text-3xl sm:text-5xl text-black tracking-tight">Our impact, grounded in evidence.</h2>
              <p className="text-gray-600 text-base leading-relaxed">Source-verified results and case studies can be added here when approved material is available.</p>
            </div>
            <Link href="/impact" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black hover:underline shrink-0">
              <span>Explore our approach</span><ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>

      {/* 9. Impact Numbers */}
      <ImpactMetrics />

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
                Learn about AfriYouth&apos;s work and get in touch to discuss a question or potential collaboration.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                <Link
                  href="/opportunities"
                  className="skeuo-btn-dark w-full sm:w-auto inline-flex items-center justify-center gap-2 h-11 px-8 rounded-full text-xs font-semibold text-white active:scale-95 transition-all font-sans"
                >
                  <span>Explore Opportunities</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/contact"
                  className="skeuo-btn-light w-full sm:w-auto inline-flex items-center justify-center gap-2 h-11 px-8 rounded-full text-xs font-semibold text-black active:scale-95 transition-all font-sans"
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
