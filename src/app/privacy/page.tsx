import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHeroBanner } from "@/components/common/PageHeroBanner";

export const metadata: Metadata = {
  title: "Data Sovereignty & Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <div className="bg-[#F4F4F6] text-black">
      <PageHeroBanner
        kicker="Institutional Governance"
        title="Data sovereignty & privacy policy."
        description="The privacy information for this website is being reviewed and requires organizational approval before publication."
      />

      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
      </div>

      <div className="w-full px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2">
        <section className="w-full rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] bg-white border border-black/10 py-16 sm:py-24 overflow-hidden shadow-sm">
          <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-3xl">
              <div className="skeuo-card rounded-2xl p-8 sm:p-10 space-y-3">
                <h2 className="text-xl font-bold text-black font-heading">Privacy information is pending approval</h2>
                <p className="text-sm text-gray-600 leading-relaxed">Do not submit sensitive or confidential information through this site. Contact AfriYouth to ask how inquiry data is handled. An approved privacy notice is needed before production use.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
