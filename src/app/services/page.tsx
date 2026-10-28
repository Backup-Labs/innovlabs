import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/content";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ServiceCard } from "@/components/common/ServiceCard";
import { PartnerShowcase } from "@/components/common/PartnerShowcase";
import { CheckCircle2, ArrowRight, ShieldCheck, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Client Services & Institutional Advisory",
  description:
    "Explore AfriYouth Innovation Labs services for governments, multilateral bodies, and foundations: applied youth research, policy youth-proofing, HCD sprints, venture acceleration, and strategic foresight.",
};

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Top Header & Breadcrumb */}
      <div className="bg-surface border-b border-line">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs items={[{ label: "Client Services" }]} />
          <div className="max-w-3xl mt-4">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-700 bg-primary-50 px-3 py-1 rounded-full">
              For Organizations & Governments
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-ink-900 tracking-heading mt-3">
              Institutional Advisory, Applied Research & Venture Labs
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
              We partner with ministries, multilateral development banks, and international philanthropies to commission empirical youth data, co-design citizen services, and operate high-survival startup incubators.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-16 sm:py-24" aria-labelledby="all-services-heading">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 id="all-services-heading" className="text-2xl sm:text-4xl font-extrabold text-ink-900 tracking-heading">
              Our 6 Core Service Offerings
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
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
      <section className="py-16 sm:py-20 bg-surface border-y border-line" aria-labelledby="engagement-heading">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-700 bg-primary-50 px-3 py-1 rounded-full">
              Commissioning Roadmap
            </span>
            <h2 id="engagement-heading" className="text-2xl sm:text-3xl font-extrabold text-ink-900 tracking-heading mt-3">
              How We Work with Clients
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
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
                desc: "Our grassroots teams, enumerators, and design facilitators execute in-country with real-time client dashboards.",
              },
              {
                step: "04",
                title: "Handover & Policy Adoption",
                desc: "We co-present findings to steering committees, parliamentary sponsors, or executive boards to ensure lasting impact.",
              },
            ].map((st) => (
              <div key={st.step} className="bg-white p-6 rounded-card border border-line shadow-subtle">
                <span className="text-2xl font-black text-accent-500 font-heading block mb-2">
                  {st.step}
                </span>
                <h3 className="text-base font-bold text-ink-900 mb-2 font-heading">
                  {st.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
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
      <section className="py-16 bg-ink-900 text-white text-center">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading">
              Ready to Commission Research or Co-Design a Lab?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Speak with our Directorate of Applied Research or Venture Incubation teams to structure your engagement.
            </p>
            <div className="pt-2">
              <Link
                href="/contact?intent=service"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold bg-accent-500 text-ink-900 hover:bg-accent-600 transition-colors shadow-sm"
              >
                <span>Request Client Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
