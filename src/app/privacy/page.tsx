import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Data Sovereignty & Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="border-b border-white/[0.08] relative overflow-hidden pt-8 pb-14">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-heading font-heading mt-4">
            Data Sovereignty & Privacy Policy
          </h1>
          <p className="text-xs font-mono text-slate-400 mt-2">LAST REVISED: OCTOBER 2026 // SECURE PROTOCOL</p>
        </div>
      </div>

      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-3xl space-y-8 text-sm text-slate-300 leading-relaxed">
        <section className="glass-panel p-6 sm:p-8 rounded-card border border-white/10 space-y-3">
          <h2 className="text-xl font-bold text-white font-heading">1. Commitment to African Data Sovereignty</h2>
          <p className="font-normal">
            AfriYouth Innovation Labs adheres to strict principles of data sovereignty and community data rights. Lived experience data gathered during youth research initiatives remains under co-ownership frameworks with the communities represented.
          </p>
        </section>

        <section className="glass-panel p-6 sm:p-8 rounded-card border border-white/10 space-y-3">
          <h2 className="text-xl font-bold text-white font-heading">2. Personal Information Collected</h2>
          <p className="font-normal">
            When applying for fellowships, challenges, or submitting contact inquiries, we collect basic contact information (name, email, institutional affiliation) and professional dossiers strictly to evaluate suitability and coordinate participation. We never monetize, sell, or rent personal identifiable information.
          </p>
        </section>

        <section className="glass-panel p-6 sm:p-8 rounded-card border border-white/10 space-y-3">
          <h2 className="text-xl font-bold text-white font-heading">3. Security and Storage</h2>
          <p className="font-normal">
            All submitted records are encrypted at rest and in transit. Access is restricted to designated program evaluators and directorate coordinators.
          </p>
        </section>
      </div>
    </div>
  );
}
