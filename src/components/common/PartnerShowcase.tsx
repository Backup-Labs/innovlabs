import React from "react";
import Link from "next/link";
import { partners } from "@/lib/content";
import { ArrowUpRight } from "lucide-react";

export const PartnerShowcase: React.FC = () => {
  return (
    <div className="w-full px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2">
      <section className="w-full rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] bg-white border border-black/10 py-16 sm:py-24 overflow-hidden shadow-sm" aria-labelledby="partners-heading">
        <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-2xl mb-16 sm:mb-20 space-y-3">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-500 font-mono">
            // Institutional Alliances
          </span>
          <h2 id="partners-heading" className="font-serif font-normal text-3xl sm:text-5xl lg:text-6xl text-black tracking-tight">
            Trusted by continental leadership.
          </h2>
        </div>

        <div className="space-y-12">
          {partners.map((group, idx) => (
            <div key={idx} className="space-y-6">
              <div className="flex items-baseline justify-between border-b border-gray-300 pb-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-black font-mono">
                  {group.category}
                </h3>
                <span className="text-xs text-gray-500 font-mono">
                  {group.partners.length} Institutions
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {group.partners.map((partner, pIdx) => (
                  <div
                    key={pIdx}
                    className="p-6 rounded-card bg-white border border-gray-300 flex flex-col justify-between hover:border-black transition-colors"
                  >
                    <span className="text-xs font-bold text-gray-400 block mb-4 font-mono">
                      {partner.logoText}
                    </span>
                    <div>
                      <strong className="text-sm font-bold text-black block leading-snug">
                        {partner.name}
                      </strong>
                      <span className="text-xs text-gray-500 mt-1 block">
                        {partner.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-right">
          <Link
            href="/partner-with-us"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black hover:underline transition-all"
          >
            <span>Partnership Frameworks</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  </div>
  );
};
