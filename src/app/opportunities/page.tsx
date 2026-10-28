import React from "react";
import type { Metadata } from "next";
import { opportunities } from "@/lib/content";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { OpportunitiesFilter } from "@/components/common/OpportunitiesFilter";
import { Terminal } from "lucide-react";

export const metadata: Metadata = {
  title: "Opportunities & Open Calls",
  description:
    "Filterable opportunities portal: fellowships, venture grants, innovation challenges, and calls for papers from AfriYouth Innovation Labs.",
};

export default function OpportunitiesPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Top Header & Breadcrumb */}
      <div className="border-b border-white/[0.08] relative overflow-hidden pt-8 pb-14">
        <div className="absolute inset-0 cyber-grid-dense pointer-events-none opacity-30" />
        <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Opportunities" }]} />
          <div className="max-w-3xl mt-4 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>// REAL-TIME OPPORTUNITIES PORTAL</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-heading font-heading">
              Fellowships, Grants & Challenges
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Filter by status, initiative type, or target audience. All open calls feature verified deadlines, living stipends or equity-free catalytic capital, and direct mentorship.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <section className="py-14 sm:py-20" aria-labelledby="opportunities-portal-heading">
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
