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
        description="AfriYouth Innovation Labs adheres to strict principles of data sovereignty, community co-ownership, and ethical data governance across all initiatives."
      />

      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
      </div>

      <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12 py-24 sm:py-36 bg-white">
        <div className="max-w-3xl space-y-8 text-sm text-gray-600 leading-relaxed">
          <div className="minimal-card rounded-card p-8 sm:p-10 space-y-3 bg-[#F4F4F6] border border-gray-300">
            <h2 className="text-xl font-bold text-black font-heading">
              1. African Data Sovereignty
            </h2>
            <p>
              AfriYouth Innovation Labs adheres to strict principles of data sovereignty and community data rights. Lived experience data gathered during youth research initiatives remains under co-ownership frameworks with the communities represented.
            </p>
          </div>

          <div className="minimal-card rounded-card p-8 sm:p-10 space-y-3 bg-[#F4F4F6] border border-gray-300">
            <h2 className="text-xl font-bold text-black font-heading">
              2. Personal Information Collected
            </h2>
            <p>
              When applying for fellowships, challenges, or submitting contact inquiries, we collect basic contact information (name, email, institutional affiliation) and professional dossiers strictly to evaluate suitability and coordinate participation. We never monetize, sell, or rent personal identifiable information.
            </p>
          </div>

          <div className="minimal-card rounded-card p-8 sm:p-10 space-y-3 bg-[#F4F4F6] border border-gray-300">
            <h2 className="text-xl font-bold text-black font-heading">
              3. Security and Storage
            </h2>
            <p>
              All submitted records are encrypted at rest and in transit. Access is restricted to designated program evaluators and directorate coordinators.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
