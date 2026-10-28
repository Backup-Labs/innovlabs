import React from "react";
import Link from "next/link";
import { partners } from "@/lib/content";
import { ArrowRight, ShieldCheck, Globe2 } from "lucide-react";

export const PartnerShowcase: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-surface border-y border-line" aria-labelledby="partners-heading">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-primary-700 bg-primary-50 px-3 py-1 rounded-full">
            Pan-African Alliances
          </span>
          <h2 id="partners-heading" className="text-2xl sm:text-3xl font-extrabold text-ink-900 tracking-heading mt-3">
            Trusted by Continental & Global Institutions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            AfriYouth operates in active co-design partnerships with multilateral agencies, sovereign ministries, universities, and catalytic philanthropies.
          </p>
        </div>

        {/* Partner Tiers */}
        <div className="space-y-8">
          {partners.map((group, idx) => (
            <div key={idx} className="bg-white rounded-card border border-line p-6 sm:p-8 shadow-subtle">
              <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-line/60 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-ink-900 font-heading">
                    {group.category}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500">
                    {group.description}
                  </p>
                </div>
                <span className="text-xs font-semibold text-primary-700 bg-primary-50 px-2.5 py-1 rounded shrink-0 self-start sm:self-auto">
                  {group.partners.length} Strategic Partners
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {group.partners.map((partner, pIdx) => (
                  <div
                    key={pIdx}
                    className="p-4 rounded-xl bg-surface border border-line/80 flex flex-col items-center justify-center text-center hover:border-primary-600/40 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white border border-line flex items-center justify-center mb-2 font-bold text-primary-700 text-xs shadow-sm">
                      {partner.logoText.slice(0, 3).toUpperCase()}
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-ink-900 font-heading block">
                      {partner.name}
                    </span>
                    <span className="text-[11px] text-slate-500 mt-0.5">
                      {partner.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Collaboration CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/partner-with-us"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary-700 hover:text-primary-600 transition-colors"
          >
            <span>Explore our full partnership framework and governance</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
