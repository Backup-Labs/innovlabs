"use client";

import React from "react";
import Link from "next/link";
import { partners } from "@/lib/content";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { PartnerLogo } from "./PartnerLogos";

export const PartnerShowcase: React.FC = () => {
  const allPartners = partners.flatMap((g) =>
    g.partners.map((p) => ({ ...p, category: g.category }))
  );

  const row1 = allPartners.slice(0, 6);
  const row2 = allPartners.slice(6);

  // Repeat for smooth infinite marquee looping
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

        {/* Sliding Logos Tracks with Real Logos and Soft Edge Masks */}
        <div className="relative w-full space-y-8 overflow-hidden py-4">
          {/* Gradient Edge Masks: responsive width for mobile vs desktop */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-20 lg:w-36 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-20 lg:w-36 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

          {/* Row 1 - Sliding Left Slowly */}
          <div className="flex overflow-hidden select-none">
            <div className="animate-marquee flex items-center gap-12 sm:gap-16">
              {marqueeRow1.map((partner, idx) => (
                <div
                  key={`row1-${idx}`}
                  className="flex items-center justify-center opacity-70 hover:opacity-100 hover:scale-105 transition-all duration-300 cursor-pointer"
                  title={`${partner.name} - ${partner.type}`}
                >
                  <PartnerLogo id={partner.name} name={partner.name} />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Sliding Right Slowly */}
          <div className="flex overflow-hidden select-none">
            <div className="animate-marquee-reverse flex items-center gap-12 sm:gap-16">
              {marqueeRow2.map((partner, idx) => (
                <div
                  key={`row2-${idx}`}
                  className="flex items-center justify-center opacity-70 hover:opacity-100 hover:scale-105 transition-all duration-300 cursor-pointer"
                  title={`${partner.name} - ${partner.type}`}
                >
                  <PartnerLogo id={partner.name} name={partner.name} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
