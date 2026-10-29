"use client";

import React from "react";
import { motion } from "framer-motion";
import { impact } from "@/lib/content";
import { AnimatedCounter } from "./AnimatedCounter";

interface ImpactMetricsProps {
  showTitle?: boolean;
  className?: string;
}

export const ImpactMetrics: React.FC<ImpactMetricsProps> = ({ showTitle = true, className = "" }) => {
  return (
    <div className="w-full px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2">
      <section className={`w-full rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] bg-white border border-black/10 py-16 sm:py-24 overflow-hidden shadow-sm ${className}`} aria-labelledby="impact-metrics-heading">
        <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
        {showTitle && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="max-w-xl mb-16 sm:mb-24 space-y-3"
          >
            <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-500 font-mono">
              Verified Telemetry
            </span>
            <h2 id="impact-metrics-heading" className="font-serif font-normal text-3xl sm:text-5xl lg:text-6xl text-black tracking-tight">
              Results across the continent.
            </h2>
          </motion.div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-12">
          {impact.metrics.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-3 border-l border-gray-300 pl-6 sm:pl-8 group"
            >
              <span className="text-4xl sm:text-6xl lg:text-7xl font-serif font-normal text-black tracking-tight block group-hover:translate-x-1 transition-transform">
                <AnimatedCounter value={item.value} />
              </span>
              <h3 className="text-base sm:text-lg font-bold text-black tracking-tight">
                {item.label}
              </h3>
              <p className="text-[18px] text-gray-600 leading-relaxed max-w-xs">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
  );
};
