"use client";

import React from "react";
import Link from "next/link";
import { partners } from "@/lib/content";
import { ArrowUpRight, Building2, Sparkles } from "lucide-react";

export const PartnerShowcase: React.FC = () => {
  // Flatten all partners into two distinct balanced tracks for visual rhythm
  const allPartners = partners.flatMap((g) =>
    g.partners.map((p) => ({ ...p, category: g.category }))
  );

  const row1 = allPartners.slice(0, 6);
  const row2 = allPartners.slice(6);

  // Duplicate arrays to ensure seamless infinite looping with CSS translateX(-50%)
  const marqueeRow1 = [...row1, ...row1, ...row1, ...row1];
  const marqueeRow2 = [...row2, ...row2, ...row2, ...row2];

  return (
    <div className="w-full px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2">
      <section
        className="relative w-full rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] bg-white border border-black/10 py-14 sm:py-20 overflow-hidden shadow-sm"
        aria-labelledby="partners-heading"
      >
        {/* Section Header */}
        <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12 mb-10 sm:mb-14">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl space-y-2">
              <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-gray-500 font-mono">
                <Sparkles className="w-3.5 h-3.5 text-black" />
                <span>Institutional Alliances & Ecosystem</span>
              </div>
              <h2
                id="partners-heading"
                className="font-serif font-normal text-3xl sm:text-5xl lg:text-6xl text-black tracking-tight"
              >
                Trusted by continental leadership.
              </h2>
              <p className="text-gray-600 font-sans text-base sm:text-lg pt-1">
                From sovereign ministries to multilateral innovation funds, collaborating across 26 African nations.
              </p>
            </div>

            <Link
              href="/partner-with-us"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black hover:underline transition-all font-mono self-start md:self-auto py-2"
            >
              <span>Partnership Frameworks</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Sliding Logos Tracks Container with Left & Right Gradient Masks */}
        <div className="relative w-full space-y-4 overflow-hidden py-2">
          {/* Gradient Edge Masks for soft fade */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

          {/* Row 1 - Sliding Left */}
          <div className="flex overflow-hidden select-none">
            <div className="animate-marquee flex items-center gap-4 sm:gap-6">
              {marqueeRow1.map((partner, idx) => (
                <div
                  key={`row1-${idx}`}
                  className="flex items-center gap-4 px-5 py-4 rounded-2xl bg-[#FAFAFA] border border-black/10 hover:border-black transition-all duration-200 min-w-[270px] sm:min-w-[310px] group shadow-[0_2px_8px_rgba(0,0,0,0.03)] cursor-pointer"
                >
                  <div className="w-11 h-11 rounded-xl bg-black text-white flex items-center justify-center font-mono font-bold text-xs tracking-wider shrink-0 shadow-inner group-hover:scale-105 transition-transform">
                    {partner.logoText.slice(0, 3).toUpperCase()}
                  </div>
                  <div className="overflow-hidden">
                    <strong className="text-sm font-bold text-black block truncate font-sans group-hover:text-blue-900 transition-colors">
                      {partner.name}
                    </strong>
                    <span className="text-xs text-gray-500 font-mono block truncate mt-0.5">
                      {partner.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Sliding Right (Reverse) */}
          <div className="flex overflow-hidden select-none">
            <div className="animate-marquee-reverse flex items-center gap-4 sm:gap-6">
              {marqueeRow2.map((partner, idx) => (
                <div
                  key={`row2-${idx}`}
                  className="flex items-center gap-4 px-5 py-4 rounded-2xl bg-[#FAFAFA] border border-black/10 hover:border-black transition-all duration-200 min-w-[270px] sm:min-w-[310px] group shadow-[0_2px_8px_rgba(0,0,0,0.03)] cursor-pointer"
                >
                  <div className="w-11 h-11 rounded-xl bg-gray-900 text-white flex items-center justify-center font-mono font-bold text-xs tracking-wider shrink-0 shadow-inner group-hover:scale-105 transition-transform">
                    {partner.logoText.slice(0, 3).toUpperCase()}
                  </div>
                  <div className="overflow-hidden">
                    <strong className="text-sm font-bold text-black block truncate font-sans group-hover:text-blue-900 transition-colors">
                      {partner.name}
                    </strong>
                    <span className="text-xs text-gray-500 font-mono block truncate mt-0.5">
                      {partner.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
