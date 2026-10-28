import React from "react";
import Link from "next/link";
import { partners } from "@/lib/content";
import { ArrowUpRight, ShieldCheck, Globe2 } from "lucide-react";

export const PartnerShowcase: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden" aria-labelledby="partners-heading">
      <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 mb-3">
            <Globe2 className="w-3.5 h-3.5" />
            <span>CONTINENTAL & GLOBAL COALITIONS</span>
          </div>
          <h2 id="partners-heading" className="text-3xl sm:text-5xl font-extrabold text-white tracking-heading">
            Trusted by Continental & Global Institutions
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            AfriYouth operates in active co-design partnerships with multilateral agencies, sovereign ministries, universities, and catalytic philanthropies.
          </p>
        </div>

        {/* Partner Tiers */}
        <div className="space-y-8">
          {partners.map((group, idx) => (
            <div key={idx} className="glass-panel rounded-card border border-white/10 p-6 sm:p-8 shadow-cyberCard">
              <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.08] pb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white font-heading tracking-tight">
                    {group.category}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 font-normal">
                    {group.description}
                  </p>
                </div>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded shrink-0 self-start sm:self-auto">
                  {group.partners.length} ALLIANCE NODES
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {group.partners.map((partner, pIdx) => (
                  <div
                    key={pIdx}
                    className="p-4 rounded-xl bg-ink-950/70 border border-white/5 flex flex-col items-center justify-center text-center hover:border-emerald-500/40 hover:bg-white/[0.04] transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center mb-2 font-mono font-bold text-emerald-400 text-xs group-hover:scale-105 transition-transform shadow-sm">
                      {partner.logoText.slice(0, 3).toUpperCase()}
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-slate-200 font-heading block group-hover:text-white transition-colors">
                      {partner.name}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 mt-0.5">
                      {partner.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Collaboration CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/partner-with-us"
            className="inline-flex items-center gap-2 text-sm font-bold font-heading text-accent-400 hover:text-white transition-colors"
          >
            <span>Explore our full partnership framework and sovereign governance</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
