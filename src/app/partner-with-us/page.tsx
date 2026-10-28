import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PartnerShowcase } from "@/components/common/PartnerShowcase";
import { ContactForm } from "@/components/common/ContactForm";
import { Handshake, Building2, ShieldCheck, Rocket, Globe2, CheckCircle2, Terminal } from "lucide-react";

export const metadata: Metadata = {
  title: "Partner With Us & Collaborative Consortia",
  description:
    "Explore strategic partnership models with AfriYouth Innovation Labs: co-design regional cohorts, invest catalytic venture capital, and build sovereign research infrastructure.",
};

export default function PartnerWithUsPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Top Header & Breadcrumb */}
      <div className="border-b border-white/[0.08] relative overflow-hidden pt-8 pb-14">
        <div className="absolute inset-0 cyber-grid-dense pointer-events-none opacity-30" />
        <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Partner With Us" }]} />
          <div className="max-w-3xl mt-4 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-500/10 border border-accent-500/20 text-xs font-mono text-accent-400">
              <Terminal className="w-3.5 h-3.5" />
              <span>// INSTITUTIONAL CONSORTIA</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-heading font-heading">
              Co-Invest in Africa&apos;s Integrated Youth Ecosystem
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              We collaborate with multilateral bodies, philanthropic foundations, African sovereign ministries, and academic consortia to scale high-impact, evidence-based programs with a 91% survival rate.
            </p>
          </div>
        </div>
      </div>

      {/* 4 Strategic Partnership Models */}
      <section className="py-20 sm:py-28" aria-labelledby="collab-models-heading">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 id="collab-models-heading" className="text-3xl sm:text-5xl font-extrabold text-white tracking-heading">
              Four Collaboration Frameworks
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3 font-normal">
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
                <div key={i} className="glass-panel rounded-card border border-white/10 p-8 flex flex-col justify-between shadow-cyberCard glass-card-interactive">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-6 shadow-sm">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-heading tracking-tight">
                      {model.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                      {model.summary}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-white/[0.08]">
                      {model.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
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
      <section className="py-20 sm:py-28 border-t border-white/[0.08]" aria-labelledby="partner-dialogue-heading">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                // DIRECT INQUIRY PROTOCOL
              </span>
              <h2 id="partner-dialogue-heading" className="text-3xl sm:text-5xl font-extrabold text-white tracking-heading font-heading">
                Initiate a Strategic Partnership
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                Connect with our Executive Directorate and Head of Strategic Partnerships to discuss collaboration avenues, co-funding opportunities, or institutional MOUs.
              </p>

              <div className="space-y-4 pt-4 border-t border-white/[0.08] text-sm font-mono text-slate-300">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-heading">GOVERNANCE & DUE DILIGENCE</strong>
                    <span className="text-xs text-slate-400 font-sans">Full compliance with international anti-corruption, ESG, and financial audit standards.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-heading">SOVEREIGN LEGAL ENTITIES</strong>
                    <span className="text-xs text-slate-400 font-sans">Offices and legal entities registered across Kenya, Rwanda, Ghana, and South Africa.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 glass-panel rounded-card border border-white/10 p-6 sm:p-10 shadow-cyberCard">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-heading tracking-tight">
                Partnership Expression of Interest
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6 font-normal">
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
