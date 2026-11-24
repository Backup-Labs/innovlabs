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
        kicker="Policy Information"
        title="Terms of engagement."
        description="Terms of engagement require organizational review and approval before they can be published as policy."
      />

      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <Breadcrumbs items={[{ label: "Terms of Engagement" }]} />
      </div>

      <div className="w-full px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2">
        <section className="w-full rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] bg-white border border-black/10 py-16 sm:py-24 overflow-hidden shadow-sm">
          <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl">
              <div className="skeuo-card rounded-2xl p-8 sm:p-10 space-y-3">
                <h2 className="text-xl font-bold text-black font-heading">Terms are pending approval</h2>
                <p className="text-sm text-gray-600 leading-relaxed">Please contact AfriYouth for current participation, research, and intellectual-property terms. This page will be updated when approved policy text is available.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
