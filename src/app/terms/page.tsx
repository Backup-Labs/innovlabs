import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHeroBanner } from "@/components/common/PageHeroBanner";

export const metadata: Metadata = {
  title: "Terms of Engagement",
};

export default function TermsPage() {
  return (
    <div className="bg-[#F4F4F6] text-black">
      <PageHeroBanner
        kicker="Institutional Governance"
        title="Terms of engagement."
        description="Framework governing institutional participation, research integrity, and intellectual rights across AfriYouth's 26-nation network."
      />

      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <Breadcrumbs items={[{ label: "Terms of Engagement" }]} />
      </div>

      <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12 py-24 sm:py-36 bg-white">
        <div className="max-w-3xl space-y-8 text-sm text-gray-600 leading-relaxed">
          <div className="minimal-card rounded-card p-8 sm:p-10 space-y-3 bg-[#F4F4F6] border border-gray-300">
            <h2 className="text-xl font-bold text-black font-heading">
              1. Program Integrity & Open Science
            </h2>
            <p>
              Participation in AfriYouth Innovation Labs fellowships, residencies, and grants requires dedication to honest research, peer review, and non-partisan evidence generation. All published findings must declare funding provenance.
            </p>
          </div>

          <div className="minimal-card rounded-card p-8 sm:p-10 space-y-3 bg-[#F4F4F6] border border-gray-300">
            <h2 className="text-xl font-bold text-black font-heading">
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
