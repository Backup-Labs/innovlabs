import React from "react";
import Link from "next/link";
import type { Program } from "@/lib/types";
import { ArrowUpRight } from "lucide-react";

interface ProgramCardProps {
  program: Program;
}

export const ProgramCard: React.FC<ProgramCardProps> = ({ program }) => {
  return (
    <div className="minimal-card rounded-card p-8 sm:p-10 flex flex-col justify-between group">
      <div>
        <div className="flex items-center justify-between gap-2 mb-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
            {program.area}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs text-botanical-600 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-botanical-500" />
            <span>{program.status}</span>
          </span>
        </div>

        <h3 className="text-2xl font-bold text-stone-900 mb-2 tracking-tight group-hover:text-botanical-600 transition-colors">
          {program.title}
        </h3>
        <p className="text-xs font-semibold text-stone-500 mb-4">
          {program.duration} • {program.cohortSize}
        </p>

        <p className="text-sm text-stone-600 leading-relaxed mb-8">
          {program.description}
        </p>
      </div>

      <div className="pt-6 border-t border-stone-200 flex items-center justify-between">
        <Link
          href={`/programs#${program.slug}`}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-900 group-hover:text-botanical-600 transition-colors"
        >
          <span>View Curriculum & Eligibility</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
