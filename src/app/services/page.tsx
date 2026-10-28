import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/content";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ServiceCard } from "@/components/common/ServiceCard";
import { PartnerShowcase } from "@/components/common/PartnerShowcase";
import { ArrowUpRight, Terminal, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Client Services & Institutional Advisory",
  description:
    "Explore AfriYouth Innovation Labs services for governments, multilateral bodies, and foundations: applied youth research, policy youth-proofing, HCD sprints, venture acceleration, and strategic foresight.",
};

export default function ServicesPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Top Header & Breadcrumb */}
      <div className="border-b border-white/[0.08] relative overflow-hidden pt-8 pb-14">
        <div className="absolute inset-0 cyber-grid-dense pointer-events-none opacity-30" />
        <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Client Services" }]} />
          <div className="max-w-3xl mt-4 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
              <Terminal className="w-3.5 h-3.5" />
              <span>// INSTITUTIONAL CAPABILITIES</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-heading font-heading">
              Advisory, Applied Research & Venture Labs
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              We partner with ministries, multilateral development banks, and international philanthropies to commission empirical youth data, co-design citizen services, and operate high-survival startup incubators.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-20 sm:py-28" aria-labelledby="all-services-heading">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 id="all-services-heading" className="text-3xl sm:text-5xl font-extrabold text-white tracking-heading">
              Our 6 Core Service Offerings
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3 font-normal">
              Every service includes dedicated project leadership, transparent milestone monitoring, and decolonized participatory ethics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* How Organizations Engage (4 Step Process) */}
      <section className="py-20 sm:py-28 border-t border-white/[0.08] relative overflow-hidden" aria-labelledby="engagement-heading">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-accent-500 bg-accent-500/10 border border-accent-500/20 px-3 py-1 rounded-full">
              // COMMISSIONING PROTOCOL
            </span>
            <h2 id="engagement-heading" className="text-3xl sm:text-4xl font-extrabold text-white tracking-heading mt-3">
              How We Work with Clients
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3 font-normal">
              From initial terms of reference to final policy handover, our engagement cycle is transparent and collaborative.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Diagnostic Scoping",
                desc: "We align on problem statements, geographical focus, demographic cohorts, and desired institutional outcomes.",
              },
              {
                step: "02",
                title: "Co-Design Proposal",
                desc: "AfriYouth submits a tailored methodology, field logistics plan, sample size calculations, and itemized budget.",
              },
              {
                step: "03",
                title: "Field Deployment & Sprints",
                desc: "Our grassroots teams, enumerators, and design facilitators execute in-country with real-time client telemetry dashboards.",
              },
              {
                step: "04",
                title: "Handover & Policy Adoption",
                desc: "We co-present findings to steering committees, parliamentary sponsors, or executive boards to ensure lasting impact.",
              },
            ].map((st) => (
              <div key={st.step} className="glass-panel p-6 sm:p-7 rounded-card border border-white/10 shadow-cyberCard glass-card-interactive">
                <span className="text-2xl font-black text-accent-500 font-heading block mb-2 font-mono">
                  {st.step}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 font-heading tracking-tight">
                  {st.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Showcase */}
      <PartnerShowcase />

      {/* CTA Box */}
      <section className="py-20 bg-gradient-to-r from-ink-900 via-primary-900/40 to-ink-950 text-white text-center border-t border-white/10">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto space-y-5">
            <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
              Ready to Commission Research or Co-Design a Lab?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base font-normal">
              Speak with our Directorate of Applied Research or Venture Incubation teams to structure your engagement parameters.
            </p>
            <div className="pt-2">
              <Link
                href="/contact?intent=service"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold font-heading bg-accent-500 text-ink-950 hover:bg-accent-400 transition-colors shadow-glowGold"
              >
                <span>Request Client Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
