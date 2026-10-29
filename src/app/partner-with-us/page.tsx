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
        description="Collaborating with multilateral bodies, philanthropic foundations, African sovereign ministries, and academic consortia to scale high-impact programs with a 91% survival rate."
      />

      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <Breadcrumbs items={[{ label: "Partner With Us" }]} />
      </div>

      {/* 4 Strategic Partnership Models */}
      <section className="py-24 sm:py-36 hairline-b bg-white" aria-labelledby="collab-models-heading">
        <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mb-16 sm:mb-20 space-y-3"
          >
            <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-500 font-mono">
              // Collaboration Frameworks
            </span>
            <h2 id="collab-models-heading" className="font-serif font-normal text-3xl sm:text-5xl lg:text-6xl text-black tracking-tight">
              Four models of engagement.
            </h2>
            <p className="text-base text-gray-600 pt-2 leading-relaxed">
              Every partnership is structured for verifiable social return on investment, policy adoption, and pan-African scale.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {[
              {
                number: "01",
                title: "Co-Designing Regional Cohorts & Labs",
                summary: "Fund and co-brand specialized fellowship cohorts or innovation challenges focused on your priority sectors (e.g., Climate Adaptation, AgriTech, AI Governance, Maternal Health).",
                features: [
                  "Customized curriculum aligned to your strategic development goals",
                  "Joint selection committee and branded fellowship naming rights",
                  "Full donor reporting with longitudinal MEL compliance",
                ],
              },
              {
                number: "02",
                title: "Joint Policy Research Consortia",
                summary: "Partner on continental youth diagnostics, representative grassroots surveys, and parliamentary white papers co-published with African universities.",
                features: [
                  "Access to our 26-country field enumerator network",
                  "Open data repositories adhering to FAIR and CARE principles",
                  "Direct presentation to African Union desks and parliamentary committees",
                ],
              },
              {
                number: "03",
                title: "Sovereign Lab & Innovation Infrastructure",
                summary: "Equip physical prototyping facilities, digital sensor networks, and civic tech sandboxes in secondary African cities.",
                features: [
                  "Co-investment in permanent grassroots community infrastructure",
                  "Direct training of municipal civil servants in human-centered design",
                  "Multi-year operational sustainability models",
                ],
              },
              {
                number: "04",
                title: "Catalytic Venture Co-Investment Syndicates",
                summary: "Deploy equity-free seed grants ($10K–$50K) paired with intensive 6-month venture acceleration to de-risk high-potential African startups.",
                features: [
                  "Pre-screened cohort of top 5% young African tech innovators",
                  "91% two-year business and policy taskforce survival rate",
                  "Curated investor demo days with top pan-African venture funds",
                ],
              },
            ].map((model, idx) => (
              <motion.div
                key={model.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="minimal-card rounded-card p-8 sm:p-12 flex flex-col justify-between group hover:border-black transition-colors bg-[#F4F4F6] border border-gray-300"
              >
                <div>
                  <span className="text-xs font-semibold text-gray-400 block mb-6 font-mono">
                    {model.number}
                  </span>
                  <h3 className="text-2xl font-bold text-black mb-4 tracking-tight group-hover:translate-x-1 transition-transform">
                    {model.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-8 font-normal">
                    {model.summary}
                  </p>

                  <div className="space-y-3 pt-6 border-t border-gray-300">
                    {model.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-black shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Existing Partners */}
      <PartnerShowcase />

      {/* Start a Conversation Box */}
      <section className="py-24 sm:py-36 bg-[#F4F4F6]" aria-labelledby="partner-dialogue-heading">
        <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-8">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-500 font-mono">
                // Institutional Inquiries
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
                    Full compliance with international anti-corruption, ESG, and financial audit standards.
                  </p>
                </div>
                <div>
                  <strong className="block text-sm font-bold text-black tracking-tight font-mono">
                    Sovereign Entities
                  </strong>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                    Offices and legal entities registered across Kenya, Rwanda, Ghana, and South Africa.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 minimal-card rounded-card p-8 sm:p-12 bg-white border border-gray-300">
              <h3 className="text-2xl font-bold text-black mb-2 tracking-tight">
                Partnership Expression of Interest
              </h3>
              <p className="text-xs text-gray-500 mb-8 font-normal">
                Submit your institutional mandate and proposed collaboration scope.
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
  );
}
