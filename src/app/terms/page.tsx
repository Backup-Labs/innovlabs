import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Terms of Engagement",
};

export default function TermsPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="border-b border-white/[0.08] relative overflow-hidden pt-8 pb-14">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Terms of Engagement" }]} />
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-heading font-heading mt-4">
            Terms of Engagement & Fellowship Guidelines
          </h1>
          <p className="text-xs font-mono text-slate-400 mt-2">LAST REVISED: OCTOBER 2026 // OPEN SCIENCE CONSTITUTION</p>
        </div>
      </div>

      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-3xl space-y-8 text-sm text-slate-300 leading-relaxed">
        <section className="glass-panel p-6 sm:p-8 rounded-card border border-white/10 space-y-3">
          <h2 className="text-xl font-bold text-white font-heading">1. Program Integrity and Open Science</h2>
          <p className="font-normal">
            Participation in AfriYouth Innovation Labs fellowships, residencies, and grants requires dedication to honest research, peer review, and non-partisan evidence generation. All published findings must declare funding provenance.
          </p>
        </section>

        <section className="glass-panel p-6 sm:p-8 rounded-card border border-white/10 space-y-3">
          <h2 className="text-xl font-bold text-white font-heading">2. Intellectual Property & Venture Co-Ownership</h2>
          <p className="font-normal">
            Startups incubated within AfriYouth retain 100% of their equity and intellectual property. Seed grants provided by AfriYouth are catalytic and equity-free unless explicitly structured under a cooperative co-investment agreement.
          </p>
        </section>
      </div>
    </div>
  );
}
