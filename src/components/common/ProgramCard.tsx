import React from "react";
import Link from "next/link";
import type { Program } from "@/lib/types";
import { ArrowUpRight } from "lucide-react";

interface ProgramCardProps {
  program: Program;
  featured?: boolean;
}

export const ProgramCard: React.FC<ProgramCardProps> = ({
  program,
  featured = false,
}) => {
  return (
    <div
      className={`rounded-2xl p-7 sm:p-9 flex flex-col justify-between h-full group transition-all duration-200 border ${
        featured
          ? "bg-gradient-to-br from-[#0F2328] via-[#142B32] to-[#0A181C] text-white border-white/15 shadow-xl"
          : "skeuo-card text-black bg-white"
      }`}
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-6">
          <span
            className={`text-xs font-semibold uppercase tracking-wider font-mono ${
              featured ? "text-white/70" : "text-gray-500"
            }`}
          >
            {program.area}
          </span>
          <span
            className={`inline-flex items-center gap-1.5 text-xs font-semibold font-mono ${
              featured ? "text-white" : "text-black"
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                featured ? "bg-white" : "bg-black"
              }`}
            />
            <span>{program.status}</span>
          </span>
        </div>

        <h3
          className={`text-2xl font-bold mb-2 tracking-tight group-hover:translate-x-1 transition-transform font-sans ${
            featured ? "text-white" : "text-black"
          }`}
        >
          {program.title}
        </h3>
        <p
          className={`text-xs font-semibold mb-4 font-mono ${
            featured ? "text-white/60" : "text-gray-500"
          }`}
        >
          {program.duration} • {program.cohortSize}
        </p>

        <p
          className={`text-[18px] leading-relaxed mb-8 font-sans ${
            featured ? "text-white/90" : "text-gray-600"
          }`}
        >
          {program.description}
        </p>
      </div>

      <div
        className={`pt-6 border-t flex items-center justify-between ${
          featured ? "border-white/15" : "border-gray-200"
        }`}
      >
        <Link
          href={`/programs#${program.slug}`}
          className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider group-hover:underline transition-all ${
            featured ? "text-white" : "text-black"
          }`}
        >
          <span>Curriculum & Roadmap</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
