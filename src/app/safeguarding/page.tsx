import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Safeguarding & Ethical Standards",
};

export default function SafeguardingPage() {
  return (
    <div className="bg-white">
      <div className="bg-surface border-b border-line">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs items={[{ label: "Safeguarding Policy" }]} />
          <h1 className="text-3xl font-extrabold text-ink-900 tracking-heading mt-4">
            Safeguarding, Inclusivity & Ethics Protocol
          </h1>
          <p className="text-sm text-slate-500 mt-1">Operational across all 26 national operational sites</p>
        </div>
      </div>

      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-3xl space-y-6 text-sm text-slate-700 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-ink-900 font-heading">1. Zero Tolerance for Harassment & Discrimination</h2>
          <p>
            AfriYouth enforces a zero-tolerance policy against all forms of gender-based violence, discrimination, exploitation, and abuse. All lab facilities, virtual cohorts, and field research missions are protected by strict safeguarding reporting channels.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-ink-900 font-heading">2. Community Fieldwork Consent</h2>
          <p>
            Field enumerators and research fellows must obtain informed, freely given consent from all community survey respondents and workshop participants before gathering interviews, photographs, or GPS traces.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-ink-900 font-heading">3. Anonymous Grievance Channel</h2>
          <p>
            Anyone can report ethical concerns directly to our independent ombudsperson via <a href="mailto:safeguarding@afriyouth.org" className="text-primary-700 underline font-semibold">safeguarding@afriyouth.org</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
