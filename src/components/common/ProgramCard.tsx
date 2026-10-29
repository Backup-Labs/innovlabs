import React from "react";
import Link from "next/link";
import type { Program } from "@/lib/types";
import { ArrowUpRight } from "lucide-react";

interface ProgramCardProps {
  program: Program;
}

export const ProgramCard: React.FC<ProgramCardProps> = ({ program }) => {
  return (
    <div className="skeuo-card rounded-2xl p-7 sm:p-9 flex flex-col justify-between group">
      <div>
        <div className="flex items-center justify-between gap-2 mb-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 font-mono">
            {program.area}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs text-black font-semibold font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
            <span>{program.status}</span>
          </span>
        </div>

        <h3 className="text-2xl font-bold text-black mb-2 tracking-tight group-hover:translate-x-1 transition-transform">
          {program.title}
        </h3>
        <p className="text-xs font-semibold text-gray-500 mb-4 font-mono">
          {program.duration} • {program.cohortSize}
        </p>

        <p className="text-[18px] text-gray-600 leading-relaxed mb-8">
          {program.description}
        </p>
      </div>

      <div className="pt-6 border-t border-gray-200 flex items-center justify-between">
        <Link
          href={`/programs#${program.slug}`}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black group-hover:underline transition-all"
        >
          <span>Curriculum & Roadmap</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
