"use client";

import React from "react";
import { motion } from "framer-motion";
import { opportunities } from "@/lib/content";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHeroBanner } from "@/components/common/PageHeroBanner";
import { OpportunitiesFilter } from "@/components/common/OpportunitiesFilter";

export default function OpportunitiesPage() {
  return (
    <div className="bg-[#F4F4F6] text-black">
      {/* Curved Hero Banner matching Screenshot 3 */}
      <PageHeroBanner
        kicker="Open Calls & Cohorts"
        title="Fellowships, grants & challenges."
        description="Filter by status, initiative focus, or target audience. All open calls feature living stipends or equity-free catalytic capital, expert mentorship, and direct pan-African placement."
      />

      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <Breadcrumbs items={[{ label: "Opportunities" }]} />
      </div>

      {/* Main Content Area */}
      <section className="py-24 sm:py-36 bg-white" aria-labelledby="opportunities-portal-heading">
        <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
          <h2 id="opportunities-portal-heading" className="sr-only">
            Filter and Search Open Calls
          </h2>
          <OpportunitiesFilter opportunities={opportunities} />
        </div>
      </section>
    </div>
  );
}
