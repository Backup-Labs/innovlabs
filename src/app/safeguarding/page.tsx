import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHeroBanner } from "@/components/common/PageHeroBanner";

export const metadata: Metadata = {
  title: "Safeguarding & Ethical Standards",
};

export default function SafeguardingPage() {
  return (
    <div className="bg-[#F4F4F6] text-black">
      <PageHeroBanner
        kicker="Institutional Governance"
        title="Safeguarding & ethics protocol."
        description="Comprehensive child protection, whistleblower channels, and ethical standards operational across all 26 sovereign national sites."
      />

      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <Breadcrumbs items={[{ label: "Safeguarding Policy" }]} />
      </div>

      <div className="w-full px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2">
        <section className="w-full rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] bg-white border border-black/10 py-16 sm:py-24 overflow-hidden shadow-sm">
          <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl space-y-8 text-sm text-gray-600 leading-relaxed">
              <div className="skeuo-card rounded-2xl p-8 sm:p-10 space-y-3">
                <h2 className="text-xl font-bold text-black font-heading">
                  1. Zero Tolerance for Harassment & Discrimination
                </h2>
                <p>
                  AfriYouth enforces a zero-tolerance policy against all forms of gender-based violence, discrimination, exploitation, and abuse. All lab facilities, virtual cohorts, and field research missions are protected by strict safeguarding reporting channels.
                </p>
              </div>

              <div className="skeuo-card rounded-2xl p-8 sm:p-10 space-y-3">
                <h2 className="text-xl font-bold text-black font-heading">
                  2. Community Fieldwork Consent
                </h2>
                <p>
                  Field enumerators and research fellows must obtain informed, freely given consent from all community survey respondents and workshop participants before gathering interviews, photographs, or data traces.
                </p>
              </div>

              <div className="skeuo-card rounded-2xl p-8 sm:p-10 space-y-3">
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
        </section>
      </div>
    </div>
  );
}
