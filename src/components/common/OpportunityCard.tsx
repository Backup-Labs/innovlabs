import React from "react";
import Link from "next/link";
import type { Opportunity } from "@/lib/types";
import { ArrowUpRight, Calendar, MapPin, Award } from "lucide-react";

interface OpportunityCardProps {
  opportunity: Opportunity;
}

export const OpportunityCard: React.FC<OpportunityCardProps> = ({ opportunity }) => {
  const isOpen = opportunity.status === "open";

  return (
    <div
      className={`glass-panel rounded-card border transition-all duration-200 p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden group ${
        isOpen
          ? "border-white/10 hover:border-emerald-500/50 hover:shadow-glowEmerald glass-card-interactive"
          : "border-white/5 opacity-70"
      }`}
    >
      {/* Top subtle glow banner */}
      <div
        className={`absolute top-0 left-0 right-0 h-1 ${
          isOpen ? "bg-gradient-to-r from-accent-500 to-emerald-400" : "bg-white/10"
        }`}
      />

      <div>
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 px-2.5 py-0.5 rounded">
              {opportunity.type}
            </span>
            <span className="text-[11px] font-mono text-slate-400 bg-white/[0.04] border border-white/10 px-2 py-0.5 rounded">
              {opportunity.audience}
            </span>
          </div>

          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-bold ${
              isOpen
                ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                : "bg-white/[0.05] text-slate-400 border border-white/10"
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                isOpen ? "bg-emerald-400 animate-pulse" : "bg-slate-500"
              }`}
            />
            {isOpen ? "LIVE CALL" : "IN SESSION"}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 font-heading tracking-tight group-hover:text-emerald-300 transition-colors">
          {opportunity.title}
        </h3>

        {/* Benefit Callout */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-accent-500/10 border border-accent-500/25 text-accent-400 text-xs sm:text-sm font-semibold mb-4">
          <Award className="w-4 h-4 text-accent-500 shrink-0" />
          <span>{opportunity.benefit}</span>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
          {opportunity.summary}
        </p>

        {/* Meta Info in Monospace */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-slate-400 pt-3 border-t border-white/[0.08]">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-slate-500 shrink-0" />
            <span>Deadline: <strong className="text-white font-normal">{opportunity.deadline}</strong></span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
            <span>{opportunity.location}</span>
          </div>
        </div>

        {/* Eligibility Snippet */}
        <div className="mt-3 p-3 bg-ink-950/60 rounded-lg text-xs text-slate-300 border border-white/5">
          <strong className="text-emerald-400 font-mono text-[11px] block mb-0.5">// ELIGIBILITY:</strong>
          <span>{opportunity.eligibility}</span>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-6 pt-4 border-t border-white/[0.08]">
        {isOpen ? (
          <Link
            href={`/opportunities/${opportunity.slug}`}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-bold font-heading bg-emerald-500 text-ink-950 hover:bg-emerald-400 transition-colors shadow-glowEmerald"
          >
            <span>Review Guidelines & Apply</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        ) : (
          <Link
            href={`/opportunities/${opportunity.slug}`}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-mono text-slate-400 border border-white/10 hover:bg-white/[0.05] transition-colors"
          >
            <span>VIEW COHORT DOSSIER &gt;&gt;</span>
          </Link>
        )}
      </div>
    </div>
  );
};
