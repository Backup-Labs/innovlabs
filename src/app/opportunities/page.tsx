"use client";

import React from "react";
import { motion } from "framer-motion";
import { opportunities } from "@/lib/content";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { OpportunitiesFilter } from "@/components/common/OpportunitiesFilter";

export default function OpportunitiesPage() {
  return (
    <div className="bg-[#F4F4F6] text-black">
      {/* Editorial Header */}
      <section className="hairline-b pt-12 pb-20 sm:pb-28">
        <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
          <Breadcrumbs items={[{ label: "Opportunities" }]} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mt-8 space-y-6"
          >
            <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-500 font-mono">
              // Open Calls & Cohorts
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-black tracking-display leading-tight">
              Fellowships, grants & challenges.
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-normal">
              Filter by status, initiative focus, or target audience. All open calls feature living stipends or equity-free catalytic capital, expert mentorship, and direct pan-African placement.
            </p>
          </motion.div>
        </div>
      </section>

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
