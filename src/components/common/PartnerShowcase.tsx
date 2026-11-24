import React from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

const collaborationAreas = [
  "Research and evidence generation",
  "Youth-centered policy and governance",
  "Innovation and entrepreneurship",
];

export const PartnerShowcase: React.FC = () => (
  <div className="w-full px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2">
    <section
      className="relative w-full rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] bg-white border border-black/10 py-14 sm:py-20 overflow-hidden shadow-sm"
      aria-labelledby="partners-heading"
    >
      <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-[#0301FF] font-mono">
              <Sparkles className="w-3.5 h-3.5 text-[#C723DF]" aria-hidden="true" />
              <span>Ways to Collaborate</span>
            </div>
            <h2 id="partners-heading" className="font-serif font-normal text-3xl sm:text-5xl lg:text-6xl text-black tracking-tight">
              Build work around shared goals.
            </h2>
            <p className="text-gray-600 font-sans text-base sm:text-lg pt-1">
              AfriYouth welcomes conversations about work that advances young people&apos;s ideas and sustainable development in Africa.
            </p>
          </div>

          <Link
            href="/partner-with-us"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black hover:underline transition-all font-mono self-start lg:self-auto py-2"
          >
            <span>Discuss a Partnership</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-10 sm:mt-14">
          {collaborationAreas.map((area, index) => (
            <div key={area} className="rounded-2xl bg-[#F4F4F6] border border-gray-200 p-6 sm:p-7">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 font-mono">0{index + 1}</span>
              <h3 className="text-lg sm:text-xl font-bold text-black tracking-tight mt-4">{area}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);
