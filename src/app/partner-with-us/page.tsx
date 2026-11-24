"use client";

import React from "react";
import { motion } from "framer-motion";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHeroBanner } from "@/components/common/PageHeroBanner";
import { PartnerShowcase } from "@/components/common/PartnerShowcase";
import { ContactForm } from "@/components/common/ContactForm";
import { CheckCircle2 } from "lucide-react";

export default function PartnerWithUsPage() {
  return (
    <div className="bg-[#F4F4F6] text-black">
      {/* Curved Hero Banner matching Screenshot 3 */}
      <PageHeroBanner
        kicker="Institutional Alliances"
        title="Co-investing in Africa's youth ecosystem."
        description="Explore ways to collaborate with AfriYouth on youth empowerment, research, policy, and sustainable development."
      />

      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <Breadcrumbs items={[{ label: "Partner With Us" }]} />
      </div>

      {/* 4 Strategic Partnership Models - Framed card with rounded corners */}
      <div className="w-full px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2">
        <section className="w-full rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] bg-white border border-black/10 py-16 sm:py-24 overflow-hidden shadow-sm" aria-labelledby="collab-models-heading">
          <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mb-16 sm:mb-20 space-y-3"
          >
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#0301FF] font-mono">
              Collaboration Frameworks
            </span>
            <h2 id="collab-models-heading" className="font-serif font-normal text-3xl sm:text-5xl lg:text-6xl text-black tracking-tight">
              Potential ways to work together.
            </h2>
            <p className="text-base text-gray-600 pt-2 leading-relaxed">
              Define shared goals, responsibilities, and ways to assess progress together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {[
              {
                number: "01",
                title: "Co-Design Programs & Labs",
                summary: "Explore programs and innovation activities shaped around shared priorities and the needs of young people.",
                features: [
                  "Agree on shared objectives and intended participants",
                  "Develop roles and decision-making together",
                  "Set reporting and learning expectations at the outset",
                ],
              },
              {
                number: "02",
                title: "Research & Policy Collaboration",
                summary: "Discuss research, evidence, and policy work related to youth and sustainable development.",
                features: [
                  "Identify research questions and audiences",
                  "Agree on responsible data and publication practices",
                  "Plan how findings can inform relevant decision-makers",
                ],
              },
              {
                number: "03",
                title: "Human-Centered Design & Innovation",
                summary: "Explore ways to bring community experience into the design of services and solutions.",
                features: [
                  "Plan participatory design activities",
                  "Identify skills and capacity-building needs",
                  "Define resources and responsibilities for delivery",
                ],
              },
              {
                number: "04",
                title: "Entrepreneurship & Investment Readiness",
                summary: "Explore possible support for youth-led ventures through innovation, mentorship, and investment-readiness work.",
                features: [
                  "Discuss support needs for youth-led ideas and ventures",
                  "Agree on shared goals, roles, and measures of progress",
                  "Identify relevant networks and next steps",
                ],
              },
            ].map((model, idx) => {
              const isGradient = idx === 1;
              return (
                <motion.div
                  key={model.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="h-full w-full flex flex-col"
                >
                  <div
                    className={`rounded-2xl p-8 sm:p-12 flex flex-col justify-between w-full h-full group border transition-all duration-200 ${
                      isGradient
                        ? "bg-gradient-to-br from-[#0D0624] via-[#120B3B] to-[#0200A7] text-white border-white/20 shadow-xl"
                        : "minimal-card bg-[#F4F4F6] border-gray-300 text-black hover:border-[#0200A7]"
                    }`}
                  >
                    <div className="flex-1 flex flex-col">
                      <span
                        className={`text-xs font-semibold block mb-6 font-mono ${
                          isGradient ? "text-white/60" : "text-gray-400"
                        }`}
                      >
                        {model.number}
                      </span>
                      <h3
                        className={`text-2xl font-bold mb-4 tracking-tight group-hover:translate-x-1 transition-transform font-sans ${
                          isGradient ? "text-white" : "text-black"
                        }`}
                      >
                        {model.title}
                      </h3>
                      <p
                        className={`text-sm sm:text-base leading-relaxed mb-8 font-normal font-sans ${
                          isGradient ? "text-white/90" : "text-gray-600"
                        }`}
                      >
                        {model.summary}
                      </p>

                      <div
                        className={`space-y-3 pt-6 border-t mt-auto ${
                          isGradient ? "border-white/15" : "border-gray-300"
                        }`}
                      >
                        {model.features.map((feat, fIdx) => (
                          <div
                            key={fIdx}
                            className={`flex items-start gap-3 text-xs sm:text-sm font-sans ${
                              isGradient ? "text-white/85" : "text-gray-700"
                            }`}
                          >
                            <CheckCircle2
                              className={`w-4 h-4 shrink-0 mt-0.5 ${
                                isGradient ? "text-emerald-400" : "text-black"
                              }`}
                            />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>

      {/* Existing Partners */}
      <PartnerShowcase />

      {/* Start a Conversation Box - Framed card with rounded corners */}
      <div className="w-full px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2">
        <section className="w-full rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] bg-[#EBECEF] border border-black/10 py-16 sm:py-24 overflow-hidden" aria-labelledby="partner-dialogue-heading">
          <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-8">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-500 font-mono">
                Institutional Inquiries
              </span>
              <h2 id="partner-dialogue-heading" className="font-serif font-normal text-3xl sm:text-5xl lg:text-6xl text-black tracking-tight leading-tight">
                Initiate a strategic partnership.
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
                Connect with our Executive Directorate and Head of Strategic Partnerships to discuss collaboration avenues, co-funding opportunities, or institutional MOUs.
              </p>

              <div className="space-y-6 pt-6 border-t border-gray-300">
                <div>
                  <strong className="block text-sm font-bold text-black tracking-tight font-mono">
                    Governance & Due Diligence
                  </strong>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                    Discuss governance, accountability, and due-diligence expectations for a proposed collaboration.
                  </p>
                </div>
                <div>
                  <strong className="block text-sm font-bold text-black tracking-tight font-mono">
                    Sovereign Entities
                  </strong>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                    Share the institutions, communities, or regions relevant to your proposed work.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 minimal-card rounded-card p-8 sm:p-12 bg-white border border-gray-300">
              <h3 className="text-2xl font-bold text-black mb-2 tracking-tight">
                Partnership Expression of Interest
              </h3>
              <p className="text-xs text-gray-500 mb-8 font-normal">
                Share your organization and the collaboration you would like to explore.
              </p>

              <ContactForm
                initialSubject="Strategic Partnership Inquiry"
                initialAudience="partner"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  );
}
