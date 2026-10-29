import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Safeguarding & Ethical Standards",
};

export default function SafeguardingPage() {
  return (
    <div className="bg-[#F4F4F6] text-black">
      <section className="hairline-b pt-12 pb-20 sm:pb-28">
        <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
          <Breadcrumbs items={[{ label: "Safeguarding Policy" }]} />
          <div className="max-w-3xl mt-8 space-y-4">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-500 font-mono">
              // Institutional Governance
            </span>
            <h1 className="font-serif font-normal text-4xl sm:text-6xl text-black tracking-tight leading-tight">
              Safeguarding & ethics protocol.
            </h1>
            <p className="text-xs text-gray-500 font-mono">
              Operational across all 26 sovereign national sites
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12 py-24 sm:py-36 bg-white">
        <div className="max-w-3xl space-y-8 text-sm text-gray-600 leading-relaxed">
          <div className="minimal-card rounded-card p-8 sm:p-10 space-y-3 bg-[#F4F4F6] border border-gray-300">
            <h2 className="text-xl font-bold text-black font-heading">
              1. Zero Tolerance for Harassment & Discrimination
            </h2>
            <p>
              AfriYouth enforces a zero-tolerance policy against all forms of gender-based violence, discrimination, exploitation, and abuse. All lab facilities, virtual cohorts, and field research missions are protected by strict safeguarding reporting channels.
            </p>
          </div>

          <div className="minimal-card rounded-card p-8 sm:p-10 space-y-3 bg-[#F4F4F6] border border-gray-300">
            <h2 className="text-xl font-bold text-black font-heading">
              2. Community Fieldwork Consent
            </h2>
            <p>
              Field enumerators and research fellows must obtain informed, freely given consent from all community survey respondents and workshop participants before gathering interviews, photographs, or data traces.
            </p>
          </div>

          <div className="minimal-card rounded-card p-8 sm:p-10 space-y-3 bg-[#F4F4F6] border border-gray-300">
            <h2 className="text-xl font-bold text-black font-heading">
              3. Independent Ombudsperson
            </h2>
            <p>
              Anyone can report ethical concerns directly to our independent ombudsperson via{" "}
              <a href="mailto:safeguarding@afriyouth.org" className="text-black underline font-semibold font-mono">
                safeguarding@afriyouth.org
              </a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
