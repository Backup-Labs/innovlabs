import React from "react";
import { impact } from "@/lib/content";
import { Activity, ShieldCheck, Database } from "lucide-react";

interface ImpactMetricsProps {
  showTitle?: boolean;
  className?: string;
}

export const ImpactMetrics: React.FC<ImpactMetricsProps> = ({ showTitle = true, className = "" }) => {
  return (
    <section className={`py-20 sm:py-28 relative overflow-hidden ${className}`} aria-labelledby="impact-metrics-heading">
      {/* Background cyber grid */}
      <div className="absolute inset-0 cyber-grid pointer-events-none opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-emerald-500/10 blur-[130px] pointer-events-none" />

      <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {showTitle && (
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-500/10 border border-accent-500/20 text-xs font-mono text-accent-400 mb-3">
              <Database className="w-3.5 h-3.5" />
              <span>LIVE TELEMETRY & VERIFIED IMPACT</span>
            </div>
            <h2 id="impact-metrics-heading" className="text-3xl sm:text-5xl font-extrabold text-white tracking-heading">
              Impact at Pan-African Scale
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3">
              Longitudinal verification across 26 countries benchmarking economic resilience, policy enactment, and venture sustainability.
            </p>
          </div>
        )}

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {impact.metrics.map((item, index) => (
            <div
              key={index}
              className="glass-panel rounded-card p-6 sm:p-8 flex flex-col justify-between glass-card-interactive group relative overflow-hidden"
            >
              {/* Corner tech accent line */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-emerald-500/15 to-transparent pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-3 text-[10px] font-mono text-slate-400">
                  <span>METRIC // 0{index + 1}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 group-hover:animate-ping" />
                </div>

                <span className="text-3xl sm:text-5xl lg:text-6xl font-black text-accent-500 font-heading tracking-display block mb-2 text-glow-gold">
                  {item.value}
                </span>

                <h3 className="text-base sm:text-lg font-bold text-white mb-2 font-heading tracking-tight">
                  {item.label}
                </h3>
              </div>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-4 pt-4 border-t border-white/[0.08]">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
