import React from "react";
import Link from "next/link";
import { partners } from "@/lib/content";
import { ArrowUpRight } from "lucide-react";

export const PartnerShowcase: React.FC = () => {
  return (
    <section className="py-24 sm:py-36 bg-stone-150/50 hairline-b hairline-t" aria-labelledby="partners-heading">
      <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-2xl mb-16 sm:mb-20 space-y-3">
          <span className="text-[11px] font-semibold uppercase tracking-widePill text-stone-500">
            Institutional Alliances
          </span>
          <h2 id="partners-heading" className="text-3xl sm:text-5xl font-extrabold text-stone-900 tracking-display">
            Trusted by continental leadership.
          </h2>
        </div>

        <div className="space-y-12">
          {partners.map((group, idx) => (
            <div key={idx} className="space-y-6">
              <div className="flex items-baseline justify-between border-b border-stone-300 pb-3">
                <h3 className="text-sm font-bold uppercase tracking-wider text-stone-900">
                  {group.category}
                </h3>
                <span className="text-xs text-stone-500">
                  {group.partners.length} Institutions
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {group.partners.map((partner, pIdx) => (
                  <div
                    key={pIdx}
                    className="p-6 rounded-card bg-white border border-stone-300/80 flex flex-col justify-between hover:border-stone-400 transition-colors"
                  >
                    <span className="text-xs font-bold text-stone-400 block mb-4">
                      {partner.logoText}
                    </span>
                    <div>
                      <strong className="text-sm font-bold text-stone-900 block leading-snug">
                        {partner.name}
                      </strong>
                      <span className="text-xs text-stone-500 mt-1 block">
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
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-900 hover:text-terracotta-500 transition-colors"
          >
            <span>Partnership Frameworks</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
