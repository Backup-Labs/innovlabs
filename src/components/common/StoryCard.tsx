"use client";

import React from "react";
import type { Story } from "@/lib/types";

interface StoryCardProps {
  story: Story;
}

export const StoryCard: React.FC<StoryCardProps> = ({ story }) => {
  // Derive telemetry data matching the visual screenshot
  const isKigali = story.id === "story-kigali-air";
  const isAccra = story.id === "story-accra-circular";
  const isNairobi = story.id === "story-nairobi-water";

  const telemetryTitle = isKigali
    ? "Kigali CleanAir IoT"
    : isAccra
    ? "Kantamanto CircuTex"
    : isNairobi
    ? "MajiData Infrastructure"
    : "Pan-African Youth Proofing";

  const telemetrySubtitle = isKigali
    ? "140 Hyperlocal Sensors • PM2.5 Live Telemetry"
    : isAccra
    ? "40 Tons Diverted • 65 Youth Circular Jobs"
    : isNairobi
    ? "112 Water Cartels Mapped • 14 Public Kiosks"
    : "5 Multilateral Programs • $14M Youth Fund";

  return (
    <div className="bg-white rounded-[24px] sm:rounded-[28px] overflow-hidden border border-black/10 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between w-full h-full group">
      <div className="flex-1 flex flex-col">
        {/* Top Dark Purple Telemetry Banner using official brand palette */}
        <div className="relative w-full bg-[#0D0624] p-4 sm:p-6 overflow-hidden">
          {/* Subtle Ambient Duke Blue & Steel Pink Glows in Background */}
          <div className="absolute -left-10 -bottom-10 w-44 h-44 rounded-full bg-[#0200A7] blur-2xl opacity-40 pointer-events-none" />
          <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full bg-[#C723DF] blur-2xl opacity-30 pointer-events-none" />
          {/* Concentric Geometric Circles matching Screenshot 1 */}
          <div className="absolute -left-16 -bottom-16 w-56 h-56 rounded-full border border-white/[0.08] pointer-events-none" />
          <div className="absolute -left-8 -bottom-8 w-40 h-40 rounded-full border border-white/[0.06] pointer-events-none" />
          <div className="absolute -right-16 -top-16 w-56 h-56 rounded-full border border-white/[0.08] pointer-events-none" />
          <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full border border-white/[0.06] pointer-events-none" />

          {/* Top-Left Location Pill */}
          <div className="relative z-10 mb-3">
            <span className="inline-block px-3.5 py-1 bg-white text-[#0D0624] text-xs font-semibold rounded-full shadow-sm font-sans">
              {story.location}
            </span>
          </div>

          {/* Inner Telemetry Card with Dark Border */}
          <div className="relative z-10 w-full rounded-2xl bg-[#140C33] border border-[#0200A7]/50 p-4 sm:p-5 flex flex-col items-center justify-between shadow-inner min-h-[168px]">
            {/* Header Pill inside inner container */}
            <div className="px-3.5 py-1 rounded-full bg-[#0D0624] border border-[#0200A7] text-white text-[11px] sm:text-xs font-semibold tracking-wide shadow-sm font-sans mb-1">
              {telemetryTitle}
            </div>

            {/* Visual Telemetry Graphic */}
            <div className="w-full flex items-center justify-center my-1">
              {isKigali ? (
                /* Connected Node Line Chart for Kigali Air Quality IoT */
                <svg
                  viewBox="0 0 320 90"
                  className="w-full max-w-[280px] h-20 overflow-visible"
                  aria-label="Kigali air telemetry graph"
                >
                  {/* Dashed Steel Pink connection lines */}
                  <line
                    x1="40"
                    y1="68"
                    x2="105"
                    y2="32"
                    stroke="#C723DF"
                    strokeWidth="2.5"
                    strokeDasharray="5 5"
                  />
                  <line
                    x1="105"
                    y1="32"
                    x2="165"
                    y2="54"
                    stroke="#C723DF"
                    strokeWidth="2.5"
                    strokeDasharray="5 5"
                  />
                  <line
                    x1="165"
                    y1="54"
                    x2="230"
                    y2="20"
                    stroke="#C723DF"
                    strokeWidth="2.5"
                    strokeDasharray="5 5"
                  />
                  <line
                    x1="230"
                    y1="20"
                    x2="270"
                    y2="46"
                    stroke="#C723DF"
                    strokeWidth="2.5"
                    strokeDasharray="5 5"
                  />

                  {/* Colored circular nodes using official brand colors */}
                  <circle cx="40" cy="68" r="8" fill="#C723DF" />
                  <circle cx="105" cy="32" r="9" fill="#0301FF" />
                  <circle cx="165" cy="54" r="6.5" fill="#FFFFFF" />
                  <circle cx="230" cy="20" r="13" fill="#C723DF" />
                  <circle cx="270" cy="46" r="8" fill="#0301FF" />
                </svg>
              ) : isAccra ? (
                /* Steel Pink / Electric Blue Loop Knot Graphic for Kantamanto CircuTex matching Screenshot 1 */
                <svg
                  viewBox="0 0 320 90"
                  className="w-full max-w-[280px] h-20 overflow-visible"
                  aria-label="CircuTex circular economy knot"
                >
                  <defs>
                    <linearGradient id="circuGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#C723DF" />
                      <stop offset="100%" stopColor="#0301FF" />
                    </linearGradient>
                  </defs>
                  {/* Left branch tail pointing down-left */}
                  <line
                    x1="108"
                    y1="66"
                    x2="124"
                    y2="50"
                    stroke="#C723DF"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                  {/* Left circle loop arch */}
                  <path
                    d="M 120 56 C 114 30, 150 26, 154 50 C 158 74, 126 74, 128 50 C 130 32, 160 30, 168 52"
                    fill="none"
                    stroke="url(#circuGrad)"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                  {/* Right circle loop */}
                  <circle
                    cx="192"
                    cy="49"
                    r="22"
                    fill="none"
                    stroke="#0301FF"
                    strokeWidth="5"
                  />
                  {/* Right branch tick pointing up-right */}
                  <line
                    x1="208"
                    y1="49"
                    x2="224"
                    y2="37"
                    stroke="#0301FF"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                /* Thematic Telemetry Flow Network for other stories */
                <svg
                  viewBox="0 0 320 90"
                  className="w-full max-w-[280px] h-20 overflow-visible"
                  aria-label="Decentralized telemetry network"
                >
                  <path
                    d="M 40 45 Q 100 15, 160 45 T 280 45"
                    fill="none"
                    stroke="#C723DF"
                    strokeWidth="2.5"
                    strokeDasharray="4 4"
                  />
                  <path
                    d="M 40 55 Q 100 75, 160 45 T 280 45"
                    fill="none"
                    stroke="#0301FF"
                    strokeWidth="2"
                    strokeDasharray="3 3"
                  />
                  <circle cx="50" cy="45" r="7" fill="#C723DF" />
                  <circle cx="130" cy="30" r="8" fill="#0301FF" />
                  <circle cx="190" cy="55" r="9" fill="#FFFFFF" />
                  <circle cx="270" cy="45" r="11" fill="#C723DF" />
                </svg>
              )}
            </div>

            {/* Sub-caption Telemetry Metric */}
            <p className="text-[11px] sm:text-xs text-[#FFFFFF] font-mono tracking-tight text-center">
              {telemetrySubtitle}
            </p>
          </div>
        </div>

        {/* Lower Story Description & Quote */}
        <div className="p-6 sm:p-8 space-y-3 flex-1 flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 block font-mono">
              {story.tag}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-black tracking-tight leading-snug font-sans mt-2">
              {story.title}
            </h3>
          </div>

          <blockquote className="my-4 text-[18px] text-gray-700 italic border-l-2 border-black/30 pl-4 leading-relaxed font-sans">
            &ldquo;{story.quote}&rdquo;
          </blockquote>
        </div>
      </div>

      {/* Card Footer: Author & Impact Metric */}
      <div className="mt-auto px-6 sm:p-8 pt-4 pb-6 border-t border-black/10 flex items-center justify-between text-xs font-sans bg-[#FBFBFC]">
        <div>
          <strong className="text-black block font-semibold text-sm">
            {story.author}
          </strong>
          <span className="text-gray-500 text-xs">{story.role}</span>
        </div>
        <span className="inline-block px-3 py-1 rounded-full bg-white border border-black/10 font-mono font-bold text-black text-xs shadow-xs">
          {story.metrics.split("•")[0]?.trim()}
        </span>
      </div>
    </div>
  );
};
