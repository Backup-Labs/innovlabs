import React from "react";
import Link from "next/link";
import type { Program } from "@/lib/types";
import { ArrowRight, Clock, Users, CheckCircle2 } from "lucide-react";

interface ProgramCardProps {
  program: Program;
}

export const ProgramCard: React.FC<ProgramCardProps> = ({ program }) => {
  return (
    <div className="bg-white rounded-card border border-line p-6 sm:p-8 flex flex-col justify-between shadow-subtle hover:shadow-card card-lift">
      <div>
        {/* Header badges */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-primary-700 bg-primary-50 px-2.5 py-1 rounded">
            {program.area}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 bg-surface px-2.5 py-1 rounded-full border border-line">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>{program.status}</span>
          </span>
        </div>

        {/* Title & Tagline */}
        <h3 className="text-xl font-bold text-ink-900 mb-2 font-heading">
          {program.title}
        </h3>
        <p className="text-sm font-medium text-primary-700 mb-3">
          {program.tagline}
        </p>
        <p className="text-sm text-slate-600 leading-relaxed mb-6">
          {program.description}
        </p>

        {/* Quick Details */}
        <div className="space-y-2 py-4 border-y border-line text-xs sm:text-sm text-slate-700">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-slate-400 shrink-0" />
            <span>{program.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-slate-400 shrink-0" />
            <span>{program.cohortSize}</span>
          </div>
        </div>

        {/* Eligibility Preview */}
        <div className="mt-4 space-y-1.5">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
            Key Eligibility
          </span>
          {program.eligibility.slice(0, 2).map((item, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
              <CheckCircle2 className="w-3.5 h-3.5 text-primary-700 shrink-0 mt-0.5" />
              <span className="line-clamp-2">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Footer */}
      <div className="mt-6 pt-4 border-t border-line/60 flex items-center justify-between">
        <Link
          href={`/programs#${program.slug}`}
          className="inline-flex items-center gap-2 text-sm font-bold text-primary-700 hover:text-primary-600 transition-colors"
        >
          <span>View Curriculum & Eligibility</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
