import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Data Sovereignty & Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <div className="bg-white">
      <div className="bg-surface border-b border-line">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
          <h1 className="text-3xl font-extrabold text-ink-900 tracking-heading mt-4">
            Data Sovereignty & Privacy Policy
          </h1>
          <p className="text-sm text-slate-500 mt-1">Last revised: October 2026</p>
        </div>
      </div>

      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-3xl space-y-6 text-sm text-slate-700 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-ink-900 font-heading">1. Commitment to African Data Sovereignty</h2>
          <p>
            AfriYouth Innovation Labs adheres to strict principles of data sovereignty and community data rights. Lived experience data gathered during youth research initiatives remains under co-ownership frameworks with the communities represented.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-ink-900 font-heading">2. Personal Information Collected</h2>
          <p>
            When applying for fellowships, challenges, or submitting contact inquiries, we collect basic contact information (name, email, institutional affiliation) and professional dossiers strictly to evaluate suitability and coordinate participation. We never monetize, sell, or rent personal identifiable information.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-ink-900 font-heading">3. Security and Storage</h2>
          <p>
            All submitted records are encrypted at rest and in transit. Access is restricted to designated program evaluators and directorate coordinators.
          </p>
        </section>
      </div>
    </div>
  );
}
