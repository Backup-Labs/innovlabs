import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Safeguarding & Ethical Standards",
};

export default function SafeguardingPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="border-b border-white/[0.08] relative overflow-hidden pt-8 pb-14">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Safeguarding Policy" }]} />
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-heading font-heading mt-4">
            Safeguarding, Inclusivity & Ethics Protocol
          </h1>
          <p className="text-xs font-mono text-emerald-400 mt-2">OPERATIONAL ACROSS ALL 26 SOVEREIGN NATIONAL SITES</p>
        </div>
      </div>

      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-3xl space-y-8 text-sm text-slate-300 leading-relaxed">
        <section className="glass-panel p-6 sm:p-8 rounded-card border border-white/10 space-y-3">
          <h2 className="text-xl font-bold text-white font-heading">1. Zero Tolerance for Harassment & Discrimination</h2>
          <p className="font-normal">
            AfriYouth enforces a zero-tolerance policy against all forms of gender-based violence, discrimination, exploitation, and abuse. All lab facilities, virtual cohorts, and field research missions are protected by strict safeguarding reporting channels.
          </p>
        </section>

        <section className="glass-panel p-6 sm:p-8 rounded-card border border-white/10 space-y-3">
          <h2 className="text-xl font-bold text-white font-heading">2. Community Fieldwork Consent</h2>
          <p className="font-normal">
            Field enumerators and research fellows must obtain informed, freely given consent from all community survey respondents and workshop participants before gathering interviews, photographs, or GPS traces.
          </p>
        </section>

        <section className="glass-panel p-6 sm:p-8 rounded-card border border-white/10 space-y-3">
          <h2 className="text-xl font-bold text-white font-heading">3. Anonymous Grievance Channel</h2>
          <p className="font-normal">
            Anyone can report ethical concerns directly to our independent ombudsperson via <a href="mailto:safeguarding@afriyouth.org" className="text-emerald-400 underline font-semibold font-mono">safeguarding@afriyouth.org</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
