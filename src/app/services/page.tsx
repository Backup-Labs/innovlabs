"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/lib/content";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ServiceCard } from "@/components/common/ServiceCard";
import { PartnerShowcase } from "@/components/common/PartnerShowcase";
import { ArrowUpRight } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="bg-[#F4F4F6] text-black">
      {/* Editorial Header */}
      <section className="hairline-b pt-12 pb-20 sm:pb-28">
        <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
          <Breadcrumbs items={[{ label: "Client Services" }]} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mt-8 space-y-6"
          >
            <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-500 font-mono">
              // Institutional Capabilities
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-black tracking-display leading-tight">
              Advisory, applied research & venture labs.
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-normal">
              We partner with ministries, multilateral banks, and philanthropic institutions to commission empirical youth evidence, co-design citizen services, and operate high-survival startup incubators.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 sm:py-36 hairline-b bg-white" aria-labelledby="all-services-heading">
        <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mb-16 sm:mb-20 space-y-3"
          >
            <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-500 font-mono">
              // Specialized Engagements
            </span>
            <h2 id="all-services-heading" className="text-3xl sm:text-5xl font-extrabold text-black tracking-display">
              Our six core offerings.
            </h2>
            <p className="text-base text-gray-600 pt-2 leading-relaxed">
              Every mandate includes dedicated project stewardship, verifiable milestones, and decolonized participatory ethics.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How Organizations Engage (4 Step Process) */}
      <section className="py-24 sm:py-36 hairline-b bg-[#F4F4F6]" aria-labelledby="engagement-heading">
        <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mb-16 sm:mb-20 space-y-3"
          >
            <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-500 font-mono">
              // Commissioning Protocol
            </span>
            <h2 id="engagement-heading" className="text-3xl sm:text-5xl font-extrabold text-black tracking-display">
              Four steps from brief to adoption.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Diagnostic Scoping",
                desc: "Align on problem statements, geographical focus, demographic cohorts, and desired institutional outcomes.",
              },
              {
                step: "02",
                title: "Co-Design Proposal",
                desc: "AfriYouth submits a tailored methodology, field logistics architecture, sample size, and clear deliverables.",
              },
              {
                step: "03",
                title: "Field Deployment",
                desc: "Grassroots teams, enumerators, and design facilitators execute in-country with real-time client telemetry.",
              },
              {
                step: "04",
                title: "Handover & Adoption",
                desc: "Co-present findings to steering committees, parliamentary sponsors, or boards for durable policy integration.",
              },
            ].map((st, idx) => (
              <motion.div
                key={st.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="minimal-card rounded-card p-8 sm:p-10 flex flex-col justify-between group hover:border-black transition-colors bg-white border border-gray-300"
              >
                <div>
                  <span className="text-2xl font-black text-black font-mono block mb-6">
                    {st.step}
                  </span>
                  <h3 className="text-xl font-bold text-black mb-3 tracking-tight group-hover:translate-x-1 transition-transform">
                    {st.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Showcase */}
      <PartnerShowcase />

      {/* CTA Box */}
      <section className="py-24 sm:py-32 bg-black text-white">
        <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto space-y-6"
          >
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-display">
              Ready to commission research or structure an innovation lab?
            </h2>
            <p className="text-gray-400 text-base leading-relaxed">
              Speak with our Directorate of Applied Research or Venture Incubation teams to define your engagement parameters.
            </p>
            <div className="pt-4">
              <Link
                href="/contact?intent=service"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white text-black hover:bg-gray-100 transition-colors shadow-lg"
              >
                <span>Request Client Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
