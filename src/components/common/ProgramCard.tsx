import React from "react";
import Link from "next/link";
import type { Program } from "@/lib/types";
import { ArrowUpRight, Clock, Users, CheckCircle2 } from "lucide-react";

interface ProgramCardProps {
  program: Program;
}

export const ProgramCard: React.FC<ProgramCardProps> = ({ program }) => {
  return (
    <div className="glass-panel rounded-card border border-white/10 p-6 sm:p-8 flex flex-col justify-between glass-card-interactive group relative overflow-hidden">
      {/* Subtle top accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-accent-500 opacity-60 group-hover:opacity-100 transition-opacity" />

      <div>
        {/* Header badges */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 px-2.5 py-0.5 rounded">
            {program.area}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-300 bg-white/[0.04] px-2.5 py-0.5 rounded-full border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>{program.status}</span>
          </span>
        </div>

        {/* Title & Tagline */}
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-heading tracking-tight group-hover:text-emerald-300 transition-colors">
          {program.title}
        </h3>
        <p className="text-xs sm:text-sm font-medium text-emerald-400 mb-3">
          {program.tagline}
        </p>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
          {program.description}
        </p>

        {/* Quick Details in Monospace */}
        <div className="space-y-2 py-4 border-y border-white/[0.08] text-xs font-mono text-slate-300">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{program.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-accent-500 shrink-0" />
            <span>{program.cohortSize}</span>
          </div>
        </div>

        {/* Eligibility Preview */}
        <div className="mt-4 space-y-1.5">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 block mb-1">
            // ELIGIBILITY PREVIEW
          </span>
          {program.eligibility.slice(0, 2).map((item, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <span className="line-clamp-2">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Footer */}
      <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between">
        <Link
          href={`/programs#${program.slug}`}
          className="inline-flex items-center gap-2 text-sm font-bold font-heading text-accent-400 hover:text-white transition-colors"
        >
          <span>Curriculum & Verification Matrix</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
