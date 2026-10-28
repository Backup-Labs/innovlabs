import React from "react";
import { impact } from "@/lib/content";

interface ImpactMetricsProps {
  showTitle?: boolean;
  className?: string;
}

export const ImpactMetrics: React.FC<ImpactMetricsProps> = ({ showTitle = true, className = "" }) => {
  return (
    <section className={`py-24 sm:py-36 bg-stone-150/50 hairline-b hairline-t ${className}`} aria-labelledby="impact-metrics-heading">
      <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
        {showTitle && (
          <div className="max-w-xl mb-16 sm:mb-24 space-y-3">
            <span className="text-[11px] font-semibold uppercase tracking-widePill text-stone-500">
              Verified Scale
            </span>
            <h2 id="impact-metrics-heading" className="text-3xl sm:text-5xl font-extrabold text-stone-900 tracking-display">
              Results across the continent.
            </h2>
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-12">
          {impact.metrics.map((item, index) => (
            <div key={index} className="space-y-3 border-l border-stone-300 pl-6 sm:pl-8">
              <span className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-stone-900 tracking-display block font-heading">
                {item.value}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight">
                {item.label}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-xs">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
