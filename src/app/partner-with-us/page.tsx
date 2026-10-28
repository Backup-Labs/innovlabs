import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PartnerShowcase } from "@/components/common/PartnerShowcase";
import { ContactForm } from "@/components/common/ContactForm";
import { Handshake, Building2, ShieldCheck, Rocket, Globe2, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Partner With Us & Collaborative Consortia",
  description:
    "Explore strategic partnership models with AfriYouth Innovation Labs: co-design regional cohorts, invest catalytic venture capital, and build sovereign research infrastructure.",
};

export default function PartnerWithUsPage() {
  return (
    <div className="bg-white">
      {/* Top Header & Breadcrumb */}
      <div className="bg-surface border-b border-line">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs items={[{ label: "Partner With Us" }]} />
          <div className="max-w-3xl mt-4">
            <span className="text-xs font-bold uppercase tracking-wider text-accent-600 bg-accent-50 px-3 py-1 rounded-full border border-accent-100">
              Institutional Alliances
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-ink-900 tracking-heading mt-3">
              Co-Invest in Africa&apos;s Integrated Youth Ecosystem
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
              We collaborate with multilateral bodies, philanthropic foundations, African sovereign ministries, and academic consortia to scale high-impact, evidence-based programs with a 91% survival rate.
            </p>
          </div>
        </div>
      </div>

      {/* 4 Strategic Partnership Models */}
      <section className="py-16 sm:py-24" aria-labelledby="collab-models-heading">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 id="collab-models-heading" className="text-2xl sm:text-4xl font-extrabold text-ink-900 tracking-heading">
              Four Collaboration Frameworks
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Every partnership is tailored to deliver verifiable social return on investment, policy adoption, and pan-African scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "1. Co-Designing Regional Cohorts & Labs",
                icon: Rocket,
                summary: "Fund and co-brand specialized fellowship cohorts or innovation challenges focused on your priority sectors (e.g., Climate Adaptation, AgriTech, AI Governance, Maternal Health).",
                features: [
                  "Customized curriculum aligned to your strategic development goals",
                  "Joint selection committee and branded fellowship naming rights",
                  "Full donor reporting with longitudinal MEL compliance",
                ],
              },
              {
                title: "2. Joint Policy Research Consortia",
                icon: Building2,
                summary: "Partner on continental youth diagnostics, representative grassroots surveys, and parliamentary white papers co-published with African universities.",
                features: [
                  "Access to our 26-country field enumerator network",
                  "Open data repositories adhering to FAIR and CARE principles",
                  "Direct presentation to African Union desks and parliamentary committees",
                ],
              },
              {
                title: "3. Sovereign Lab & Innovation Infrastructure",
                icon: Globe2,
                summary: "Equip physical prototyping facilities, digital sensor networks, and civic tech sandboxes in secondary African cities.",
                features: [
                  "Co-investment in permanent grassroots community infrastructure",
                  "Direct training of municipal civil servants in human-centered design",
                  "Multi-year operational sustainability models",
                ],
              },
              {
                title: "4. Catalytic Venture Co-Investment Syndicates",
                icon: Handshake,
                summary: "Deploy equity-free seed grants ($10K–$50K) paired with intensive 6-month venture acceleration to de-risk high-potential African startups.",
                features: [
                  "Pre-screened cohort of top 5% young African tech innovators",
                  "91% two-year business and policy taskforce survival rate",
                  "Curated investor demo days with top pan-African venture funds",
                ],
              },
            ].map((model, i) => {
              const IconComp = model.icon;
              return (
                <div key={i} className="bg-surface rounded-card border border-line p-8 flex flex-col justify-between shadow-subtle card-lift">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-white border border-line text-primary-700 flex items-center justify-center mb-6 shadow-sm">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-ink-900 mb-3 font-heading">
                      {model.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {model.summary}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-line/60">
                      {model.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-primary-700 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Existing Partners */}
      <PartnerShowcase />

      {/* Start a Conversation Box */}
      <section className="py-16 sm:py-24 bg-white" aria-labelledby="partner-dialogue-heading">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-primary-700 bg-primary-50 px-3 py-1 rounded-full">
                Direct Dialogue
              </span>
              <h2 id="partner-dialogue-heading" className="text-2xl sm:text-4xl font-extrabold text-ink-900 tracking-heading">
                Start a Strategic Partnership Conversation
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Connect with our Executive Directorate and Head of Strategic Partnerships to discuss collaboration avenues, co-funding opportunities, or institutional MOUs.
              </p>

              <div className="space-y-4 pt-4 border-t border-line text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-primary-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-ink-900 font-heading">Governance & Due Diligence</strong>
                    <span className="text-xs text-slate-500">Full compliance with international anti-corruption, ESG, and financial audit standards.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-primary-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-ink-900 font-heading">Regional Presence</strong>
                    <span className="text-xs text-slate-500">Offices and legal entities registered across Kenya, Rwanda, Ghana, and South Africa.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-surface rounded-card border border-line p-6 sm:p-10 shadow-card">
              <h3 className="text-xl font-bold text-ink-900 mb-2 font-heading">
                Partnership Expression of Interest
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Tell us about your organization and proposed collaboration scope.
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
