import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Terms of Engagement",
};

export default function TermsPage() {
  return (
    <div className="bg-stone-100 text-stone-900">
      <section className="hairline-b pt-12 pb-20 sm:pb-28">
        <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
          <Breadcrumbs items={[{ label: "Terms of Engagement" }]} />
          <div className="max-w-3xl mt-8 space-y-4">
            <span className="text-[11px] font-semibold uppercase tracking-widePill text-stone-500">
              Institutional Governance
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-stone-900 tracking-display">
              Terms of engagement.
            </h1>
            <p className="text-xs text-stone-500">
              Last revised: October 2026
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12 py-24 sm:py-36">
        <div className="max-w-3xl space-y-8 text-sm text-stone-600 leading-relaxed">
          <div className="minimal-card rounded-card p-8 sm:p-10 space-y-3">
            <h2 className="text-xl font-bold text-stone-900">
              1. Program Integrity & Open Science
            </h2>
            <p>
              Participation in AfriYouth Innovation Labs fellowships, residencies, and grants requires dedication to honest research, peer review, and non-partisan evidence generation. All published findings must declare funding provenance.
            </p>
          </div>

          <div className="minimal-card rounded-card p-8 sm:p-10 space-y-3">
            <h2 className="text-xl font-bold text-stone-900">
              2. Intellectual Property & Venture Co-Ownership
            </h2>
            <p>
              Startups incubated within AfriYouth retain 100% of their equity and intellectual property. Seed grants provided by AfriYouth are catalytic and equity-free unless explicitly structured under a cooperative co-investment agreement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}