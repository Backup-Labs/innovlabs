import React from "react";
import Link from "next/link";
import type { Opportunity } from "@/lib/types";
import { ArrowUpRight } from "lucide-react";

interface OpportunityCardProps {
  opportunity: Opportunity;
}

export const OpportunityCard: React.FC<OpportunityCardProps> = ({ opportunity }) => {
  const isOpen = opportunity.status === "open";

  return (
    <div
      className={`minimal-card rounded-card p-8 sm:p-10 flex flex-col justify-between group border border-gray-300 ${
        isOpen ? "bg-white" : "bg-[#F4F4F6] opacity-80"
      }`}
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-6 text-xs font-mono">
          <span className="font-semibold uppercase tracking-wider text-gray-500">
            {opportunity.type}
          </span>
          <span
            className={`inline-flex items-center gap-1.5 font-bold ${
              isOpen ? "text-black" : "text-gray-400"
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                isOpen ? "bg-black" : "bg-gray-400"
              }`}
            />
            {isOpen ? "Accepting Applications" : "Cohort In Session"}
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-black mb-2 tracking-tight group-hover:translate-x-1 transition-transform">
          {opportunity.title}
        </h3>

        <p className="text-xs font-semibold text-gray-700 mb-4 font-mono">
          {opportunity.benefit}
        </p>

        <p className="text-sm text-gray-600 leading-relaxed mb-6">
          {opportunity.summary}
        </p>

        <div className="text-xs text-gray-500 pt-4 border-t border-gray-200 font-mono">
          <span>Deadline: <strong className="text-black">{opportunity.deadline}</strong></span>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200">
        <Link
          href={`/opportunities/${opportunity.slug}`}
          className="inline-flex items-center justify-between w-full text-xs font-bold uppercase tracking-wider text-black group-hover:underline transition-all"
        >
          <span>{isOpen ? "Review Guidelines & Apply" : "View Cohort Profile"}</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
