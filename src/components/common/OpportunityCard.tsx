import React from "react";
import Link from "next/link";
import type { Opportunity } from "@/lib/types";
import { ArrowUpRight } from "lucide-react";

interface OpportunityCardProps {
  opportunity: Opportunity;
  featured?: boolean;
}

export const OpportunityCard: React.FC<OpportunityCardProps> = ({
  opportunity,
  featured = false,
}) => {
  const isOpen = opportunity.status === "open";

  return (
    <div
      className={`rounded-2xl p-7 sm:p-9 flex flex-col justify-between w-full h-full group transition-all duration-200 border ${
        featured
          ? "bg-gradient-to-br from-[#0D2427] via-[#123136] to-[#091B1D] text-white border-white/15 shadow-xl"
          : isOpen
          ? "skeuo-card bg-white text-black"
          : "skeuo-card bg-[#F4F4F6] opacity-85 text-black"
      }`}
    >
      <div className="flex-1 flex flex-col">
        <div className="flex items-center justify-between gap-2 mb-6 text-xs font-mono">
          <span
            className={`font-semibold uppercase tracking-wider ${
              featured ? "text-white/70" : "text-gray-500"
            }`}
          >
            {opportunity.type}
          </span>
          <span
            className={`inline-flex items-center gap-1.5 font-bold ${
              featured ? "text-white" : isOpen ? "text-black" : "text-gray-400"
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                featured ? "bg-white" : isOpen ? "bg-black" : "bg-gray-400"
              }`}
            />
            {isOpen ? "Accepting Applications" : "Cohort In Session"}
          </span>
        </div>

        <h3
          className={`text-xl sm:text-2xl font-bold mb-2 tracking-tight group-hover:translate-x-1 transition-transform font-sans ${
            featured ? "text-white" : "text-black"
          }`}
        >
          {opportunity.title}
        </h3>

        <p
          className={`text-xs font-semibold mb-4 font-mono ${
            featured ? "text-white/80" : "text-gray-700"
          }`}
        >
          {opportunity.benefit}
        </p>

        <p
          className={`text-[18px] leading-relaxed mb-6 font-sans ${
            featured ? "text-white/90" : "text-gray-600"
          }`}
        >
          {opportunity.summary}
        </p>

        <div
          className={`text-xs pt-4 border-t font-mono mt-auto ${
            featured
              ? "text-white/70 border-white/15"
              : "text-gray-500 border-gray-200"
          }`}
        >
          <span>
            Deadline:{" "}
            <strong className={featured ? "text-white" : "text-black"}>
              {opportunity.deadline}
            </strong>
          </span>
        </div>
      </div>

      <div
        className={`mt-6 pt-6 border-t ${
          featured ? "border-white/15" : "border-gray-200"
        }`}
      >
        <Link
          href={`/opportunities/${opportunity.slug}`}
          className={`inline-flex items-center justify-between w-full text-xs font-bold uppercase tracking-wider group-hover:underline transition-all ${
            featured ? "text-white" : "text-black"
          }`}
        >
          <span>{isOpen ? "Review Guidelines & Apply" : "View Cohort Profile"}</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
