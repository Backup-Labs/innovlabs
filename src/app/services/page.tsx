import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/content";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ServiceCard } from "@/components/common/ServiceCard";
import { PartnerShowcase } from "@/components/common/PartnerShowcase";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Client Services & Institutional Advisory",
  description:
    "Explore AfriYouth Innovation Labs services for governments, multilateral bodies, and foundations: applied youth research, policy youth-proofing, HCD sprints, venture acceleration, and strategic foresight.",
};

export default function ServicesPage() {
  return (
    <div className="bg-stone-100 text-stone-900">
      {/* Editorial Header */}
      <section className="hairline-b pt-12 pb-20 sm:pb-28">
        <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
          <Breadcrumbs items={[{ label: "Client Services" }]} />
          <div className="max-w-3xl mt-8 space-y-6">
            <span className="text-[11px] font-semibold uppercase tracking-widePill text-stone-500">
              Institutional Capabilities
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-stone-900 tracking-display leading-tight">
              Advisory, applied research & venture labs.
            </h1>
            <p className="text-lg sm:text-xl text-stone-600 leading-relaxed font-normal">
              We partner with ministries, multilateral banks, and philanthropic institutions to commission empirical youth evidence, co-design citizen services, and operate high-survival startup incubators.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 sm:py-36 hairline-b" aria-labelledby="all-services-heading">
        <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-2xl mb-16 sm:mb-20 space-y-3">
            <span className="text-[11px] font-semibold uppercase tracking-widePill text-stone-500">
              Specialized Engagements
            </span>
            <h2 id="all-services-heading" className="text-3xl sm:text-5xl font-extrabold text-stone-900 tracking-display">
              Our six core offerings.
            </h2>
            <p className="text-base text-stone-600 pt-2">
              Every mandate includes dedicated project stewardship, verifiable milestones, and decolonized participatory ethics.
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
      <section className="py-24 sm:py-36 hairline-b bg-stone-150/40" aria-labelledby="engagement-heading">
        <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-2xl mb-16 sm:mb-20 space-y-3">
            <span className="text-[11px] font-semibold uppercase tracking-widePill text-stone-500">
              Commissioning Protocol
            </span>
            <h2 id="engagement-heading" className="text-3xl sm:text-5xl font-extrabold text-stone-900 tracking-display">
              Four steps from brief to adoption.
            </h2>
          </div>

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
            ].map((st) => (
              <div
                key={st.step}
                className="minimal-card rounded-card p-8 sm:p-10 flex flex-col justify-between group hover:border-stone-400 transition-colors"
              >
                <div>
                  <span className="text-2xl font-black text-stone-900 font-mono block mb-6">
                    {st.step}
                  </span>
                  <h3 className="text-xl font-bold text-stone-900 mb-3 tracking-tight group-hover:text-botanical-600 transition-colors">
                    {st.title}
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Showcase */}
      <PartnerShowcase />

      {/* CTA Box */}
      <section className="py-24 sm:py-32 bg-stone-900 text-stone-100">
        <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-display">
              Ready to commission research or structure an innovation lab?
            </h2>
            <p className="text-stone-300 text-base leading-relaxed">
              Speak with our Directorate of Applied Research or Venture Incubation teams to define your engagement parameters.
            </p>
            <div className="pt-4">
              <Link
                href="/contact?intent=service"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-pill text-xs font-semibold uppercase tracking-wider bg-white text-stone-900 hover:bg-stone-200 transition-colors"
              >
                <span>Request Client Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}