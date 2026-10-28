import React from "react";
import { impact } from "@/lib/content";

interface ImpactMetricsProps {
  showTitle?: boolean;
  className?: string;
}

export const ImpactMetrics: React.FC<ImpactMetricsProps> = ({ showTitle = true, className = "" }) => {
  return (
    <section className={`py-16 sm:py-24 bg-ink-900 text-white ${className}`} aria-labelledby="impact-metrics-heading">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {showTitle && (
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-accent-500 bg-ink-800 px-3 py-1 rounded-full border border-ink-700">
              Verified Progress
            </span>
            <h2 id="impact-metrics-heading" className="text-2xl sm:text-4xl font-extrabold text-white tracking-heading mt-3">
              Impact at Pan-African Scale
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-3">
              We benchmark every program against longitudinal economic indicators, policy adoptions, and venture survival.
            </p>
          </div>
        )}

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {impact.metrics.map((item, index) => (
            <div
              key={index}
              className="bg-ink-800/80 border border-ink-700/80 rounded-card p-6 sm:p-8 flex flex-col justify-between card-lift"
            >
              <div>
                <span className="text-3xl sm:text-5xl font-black text-accent-500 font-heading tracking-tight block mb-2">
                  {item.value}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 font-heading">
                  {item.label}
                </h3>
              </div>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-2 pt-3 border-t border-ink-700/60">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
