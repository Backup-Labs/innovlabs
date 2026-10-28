import React from "react";
import type { Metadata } from "next";
import { opportunities } from "@/lib/content";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { OpportunitiesFilter } from "@/components/common/OpportunitiesFilter";
import { Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Opportunities & Open Calls",
  description:
    "Filterable opportunities portal: fellowships, venture grants, innovation challenges, and calls for papers from AfriYouth Innovation Labs.",
};

export default function OpportunitiesPage() {
  return (
    <div className="bg-white">
      {/* Top Header & Breadcrumb */}
      <div className="bg-surface border-b border-line">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs items={[{ label: "Opportunities" }]} />
          <div className="max-w-3xl mt-4">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
              Live Calls & Grants
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-ink-900 tracking-heading mt-3">
              Explore Fellowships, Grants & Challenges
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
              Filter by status, initiative type, or target audience. All open calls feature verified deadlines, living stipends or equity-free catalytic capital, and direct mentorship.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <section className="py-12 sm:py-16" aria-labelledby="opportunities-portal-heading">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="opportunities-portal-heading" className="sr-only">
            Filter and Search Open Calls
          </h2>
          <OpportunitiesFilter opportunities={opportunities} />
        </div>
      </section>
    </div>
  );
}
