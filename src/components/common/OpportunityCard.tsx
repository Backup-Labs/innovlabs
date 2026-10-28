import React from "react";
import Link from "next/link";
import type { Opportunity } from "@/lib/types";
import { ArrowRight, Calendar, MapPin, Award, CheckCircle } from "lucide-react";

interface OpportunityCardProps {
  opportunity: Opportunity;
}

export const OpportunityCard: React.FC<OpportunityCardProps> = ({ opportunity }) => {
  const isOpen = opportunity.status === "open";

  return (
    <div
      className={`bg-white rounded-card border transition-all duration-200 p-6 sm:p-7 flex flex-col justify-between shadow-subtle ${
        isOpen
          ? "border-line hover:border-primary-600 hover:shadow-card card-lift"
          : "border-line/60 bg-surface/40 opacity-80"
      }`}
    >
      <div>
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-700 bg-primary-50 px-2.5 py-1 rounded">
              {opportunity.type}
            </span>
            <span className="text-xs font-medium text-slate-500 bg-surface px-2.5 py-1 rounded border border-line">
              {opportunity.audience}
            </span>
          </div>

          <span
            className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold ${
              isOpen
                ? "bg-emerald-100 text-emerald-800"
                : "bg-slate-200 text-slate-700"
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                isOpen ? "bg-emerald-600 animate-pulse" : "bg-slate-400"
              }`}
            />
            {isOpen ? "Accepting Applications" : "Cohort In Progress"}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-ink-900 mb-2 font-heading">
          {opportunity.title}
        </h3>

        {/* Benefit Highlight */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-accent-50 border border-accent-100/80 text-ink-900 text-xs sm:text-sm font-semibold mb-4">
          <Award className="w-4 h-4 text-accent-600 shrink-0" />
          <span>{opportunity.benefit}</span>
        </div>

        <p className="text-sm text-slate-600 leading-relaxed mb-4">
          {opportunity.summary}
        </p>

        {/* Meta Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-500 pt-2 border-t border-line/60">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span>Deadline: <strong className="text-ink-900 font-medium">{opportunity.deadline}</strong></span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span>{opportunity.location}</span>
          </div>
        </div>

        {/* Eligibility Snippet */}
        <div className="mt-3 p-3 bg-surface rounded-lg text-xs text-slate-600">
          <strong className="text-ink-900 font-semibold block mb-0.5">Eligibility:</strong>
          <span>{opportunity.eligibility}</span>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-6 pt-4 border-t border-line/60">
        {isOpen ? (
          <Link
            href={`/opportunities/${opportunity.slug}`}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-primary-700 text-white hover:bg-primary-600 transition-colors shadow-sm"
          >
            <span>Review Guidelines & Apply</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        ) : (
          <Link
            href={`/opportunities/${opportunity.slug}`}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold border border-line text-slate-600 hover:bg-surface transition-colors"
          >
            <span>View Cohort Profile</span>
          </Link>
        )}
      </div>
    </div>
  );
};
