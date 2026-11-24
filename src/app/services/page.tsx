"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/lib/content";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHeroBanner } from "@/components/common/PageHeroBanner";
import { ServiceCard } from "@/components/common/ServiceCard";
import { PartnerShowcase } from "@/components/common/PartnerShowcase";
import { ArrowUpRight } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="bg-[#F4F4F6] text-black">
      {/* Curved Hero Banner matching Screenshot 3 */}
      <PageHeroBanner
        kicker="Institutional Capabilities"
        title="Advisory, applied research & venture labs."
        description="AfriYouth connects research, policy, human-centered design, entrepreneurship, impact learning, and foresight to advance youth ideas for sustainable development."
      />

      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <Breadcrumbs items={[{ label: "Client Services" }]} />
      </div>

      {/* Services Grid */}
      <div className="w-full px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2">
        <section className="w-full rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] bg-white border border-black/10 py-16 sm:py-24 overflow-hidden shadow-sm" aria-labelledby="all-services-heading">
          <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mb-16 sm:mb-20 space-y-3"
            >
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#0301FF] font-mono">
                Areas of Work
              </span>
              <h2 id="all-services-heading" className="font-serif font-normal text-3xl sm:text-5xl lg:text-6xl text-black tracking-tight">
                Explore AfriYouth&apos;s services.
              </h2>
              <p className="text-[18px] text-gray-600 pt-2 leading-relaxed">
                The service areas below reflect AfriYouth&apos;s stated work. Contact the team to confirm scope, deliverables, and availability.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              {services.map((service, idx) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="h-full w-full flex flex-col"
                  id={service.slug}
                >
                  <ServiceCard service={service} featured={idx === 1} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* How Organizations Engage (4 Step Process) */}
      <div className="w-full px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2">
        <section className="w-full rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] bg-[#EBECEF] border border-black/10 py-16 sm:py-24 overflow-hidden" aria-labelledby="engagement-heading">
          <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mb-16 sm:mb-20 space-y-3"
            >
              <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-500 font-mono">
                Getting Started
              </span>
              <h2 id="engagement-heading" className="font-serif font-normal text-3xl sm:text-5xl lg:text-6xl text-black tracking-tight">
                Start a conversation about your needs.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Share your needs",
                  desc: "Describe the question, audience, and intended outcome you have in mind.",
                },
                {
                  step: "02",
                  title: "Define a scope",
                  desc: "Discuss relevant service areas, possible activities, and constraints.",
                },
                {
                  step: "03",
                  title: "Agree on a plan",
                  desc: "Confirm responsibilities, timing, resources, and next steps together.",
                },
                {
                  step: "04",
                  title: "Review progress",
                  desc: "Agree how progress, learning, and outcomes will be reviewed.",
                },
              ].map((st, idx) => (
                <motion.div
                  key={st.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="h-full w-full flex flex-col"
                >
                  <div
                    className={`rounded-2xl p-8 sm:p-10 flex flex-col justify-between w-full h-full group border transition-all duration-200 ${
                      idx === 1
                        ? "bg-gradient-to-br from-[#0D0624] via-[#120B3B] to-[#0200A7] text-white border-white/20 shadow-xl"
                        : "skeuo-card bg-white text-black"
                    }`}
                  >
                    <div className="flex-1 flex flex-col">
                      <span
                        className={`text-3xl font-serif font-normal block mb-6 ${
                          idx === 1 ? "text-white/80" : "text-black"
                        }`}
                      >
                        {st.step}
                      </span>
                      <h3
                        className={`text-xl font-bold mb-3 tracking-tight group-hover:translate-x-1 transition-transform font-sans ${
                          idx === 1 ? "text-white" : "text-black"
                        }`}
                      >
                        {st.title}
                      </h3>
                      <p
                        className={`text-sm leading-relaxed font-sans mt-auto ${
                          idx === 1 ? "text-white/90" : "text-gray-600"
                        }`}
                      >
                        {st.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Partner Showcase */}
      <PartnerShowcase />

      {/* CTA Box - Light card, no black background, framed */}
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
                Explore a service or start a conversation.
              </h2>
              <p className="text-gray-600 text-[18px] leading-relaxed">
                Contact AfriYouth to discuss a service or potential collaboration.
              </p>
              <div className="pt-4">
                <Link
                  href="/contact?intent=service"
                  className="skeuo-btn-dark inline-flex items-center justify-center gap-2 h-11 px-8 rounded-full text-xs font-semibold uppercase tracking-wider text-white active:scale-95 transition-all shadow-md"
                >
                  <span>Request Client Consultation</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
