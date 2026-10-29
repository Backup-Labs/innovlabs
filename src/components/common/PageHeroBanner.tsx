"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PlusCircle } from "lucide-react";

interface PageHeroBannerProps {
  kicker: string;
  title: string;
  description: string;
  badge?: string;
}

export const PageHeroBanner: React.FC<PageHeroBannerProps> = ({
  kicker,
  title,
  description,
  badge,
}) => {
  return (
    <div className="w-full px-2 sm:px-3 lg:px-4 pb-3 sm:pb-4 pt-1">
      {/* Curved landscape banner with tight edge margin & increased height matching Screenshot 3 */}
      <section className="relative w-full rounded-[28px] sm:rounded-[36px] lg:rounded-[44px] overflow-hidden bg-[#161D20] min-h-[300px] sm:min-h-[340px] lg:h-[380px] flex flex-col justify-between p-7 sm:p-10 lg:p-14 border border-black/15 shadow-2xl text-white">
        {/* Atmospheric Fresco Mural Artwork */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-mural.svg"
            alt=""
            fill
            priority
            className="object-cover object-center pointer-events-none"
          />
        </div>

        {/* Ambient Dark Gradient for Contrast */}
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/90 via-black/50 to-black/75 pointer-events-none" />

        {/* Top Kicker matching Screenshot 3 */}
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 flex items-center justify-between gap-4"
        >
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-white/80 font-mono">
            <PlusCircle className="w-3.5 h-3.5 text-white" />
            <span>{kicker}</span>
          </div>

          {badge && (
            <span className="frost-glass-dark inline-flex items-center px-3.5 py-1 rounded-full text-[10px] font-mono font-semibold text-white">
              {badge}
            </span>
          )}
        </motion.div>

        {/* Bottom Split Layout matching Screenshot 3 */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-end pt-6">
          {/* Left: Headline in Instrument Serif (upright) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <h1 className="font-serif font-normal text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.08]">
              {title}
            </h1>
          </motion.div>

          {/* Right: Concise description text in Satoshi Medium */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 flex justify-start lg:justify-end"
          >
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-sans font-medium max-w-md">
              {description}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

