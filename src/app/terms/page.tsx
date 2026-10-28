import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Terms of Engagement",
};

export default function TermsPage() {
  return (
    <div className="bg-white">
      <div className="bg-surface border-b border-line">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs items={[{ label: "Terms of Engagement" }]} />
          <h1 className="text-3xl font-extrabold text-ink-900 tracking-heading mt-4">
            Terms of Engagement & Fellowship Guidelines
          </h1>
          <p className="text-sm text-slate-500 mt-1">Last revised: October 2026</p>
        </div>
      </div>

      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-3xl space-y-6 text-sm text-slate-700 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-ink-900 font-heading">1. Program Integrity and Open Science</h2>
          <p>
            Participation in AfriYouth Innovation Labs fellowships, residencies, and grants requires dedication to honest research, peer review, and non-partisan evidence generation. All published findings must declare funding provenance.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-ink-900 font-heading">2. Intellectual Property & Venture Co-Ownership</h2>
          <p>
            Startups incubated within AfriYouth retain 100% of their equity and intellectual property. Seed grants provided by AfriYouth are catalytic and equity-free unless explicitly structured under a cooperative co-investment agreement.
          </p>
        </section>
      </div>
    </div>
  );
}
