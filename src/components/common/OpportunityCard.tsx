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
      className={`minimal-card rounded-card p-8 sm:p-10 flex flex-col justify-between group ${
        isOpen ? "bg-white" : "bg-stone-150/40 opacity-80"
      }`}
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-6 text-xs">
          <span className="font-semibold uppercase tracking-wider text-stone-500">
            {opportunity.type}
          </span>
          <span
            className={`inline-flex items-center gap-1.5 font-medium ${
              isOpen ? "text-botanical-600" : "text-stone-500"
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                isOpen ? "bg-botanical-500" : "bg-stone-400"
              }`}
            />
            {isOpen ? "Accepting Applications" : "Cohort In Session"}
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2 tracking-tight group-hover:text-botanical-600 transition-colors">
          {opportunity.title}
        </h3>

        <p className="text-xs font-semibold text-terracotta-600 mb-4">
          {opportunity.benefit}
        </p>

        <p className="text-sm text-stone-600 leading-relaxed mb-6">
          {opportunity.summary}
        </p>

        <div className="text-xs text-stone-500 pt-4 border-t border-stone-200">
          <span>Deadline: <strong className="text-stone-900">{opportunity.deadline}</strong></span>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-stone-200">
        <Link
          href={`/opportunities/${opportunity.slug}`}
          className="inline-flex items-center justify-between w-full text-xs font-bold uppercase tracking-wider text-stone-900 group-hover:text-botanical-600 transition-colors"
        >
          <span>{isOpen ? "Review Guidelines & Apply" : "View Cohort Profile"}</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
