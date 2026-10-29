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
        {/* Top Dark Teal Telemetry Banner matching Screenshot */}
        <div className="relative w-full bg-[#062426] p-4 sm:p-6 overflow-hidden">
          {/* Subtle Ambient Teal Circles in Background */}
          <div className="absolute -left-10 -bottom-10 w-44 h-44 rounded-full bg-[#0C3236] blur-xl opacity-70 pointer-events-none" />
          <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full bg-[#092B2E] blur-xl opacity-60 pointer-events-none" />

          {/* Top-Left Location Pill */}
          <div className="relative z-10 mb-3">
            <span className="inline-block px-3.5 py-1 bg-white text-black text-xs font-semibold rounded-full shadow-sm font-sans">
              {story.location}
            </span>
          </div>

          {/* Inner Telemetry Card with Dark Border */}
          <div className="relative z-10 w-full rounded-2xl bg-[#0D2D30] border border-[#1A484C] p-4 sm:p-5 flex flex-col items-center justify-between shadow-inner min-h-[168px]">
            {/* Header Pill inside inner container */}
            <div className="px-3.5 py-1 rounded-full bg-[#082225] border border-[#184246] text-white text-[11px] sm:text-xs font-semibold tracking-wide shadow-sm font-sans mb-1">
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
                  {/* Dashed orange connection lines */}
                  <line
                    x1="40"
                    y1="68"
                    x2="105"
                    y2="32"
                    stroke="#F59E0B"
                    strokeWidth="2.5"
                    strokeDasharray="5 5"
                  />
                  <line
                    x1="105"
                    y1="32"
                    x2="165"
                    y2="54"
                    stroke="#F59E0B"
                    strokeWidth="2.5"
                    strokeDasharray="5 5"
                  />
                  <line
                    x1="165"
                    y1="54"
                    x2="230"
                    y2="20"
                    stroke="#F59E0B"
                    strokeWidth="2.5"
                    strokeDasharray="5 5"
                  />
                  <line
                    x1="230"
                    y1="20"
                    x2="270"
                    y2="46"
                    stroke="#F59E0B"
                    strokeWidth="2.5"
                    strokeDasharray="5 5"
                  />

                  {/* Colored circular nodes */}
                  <circle cx="40" cy="68" r="8" fill="#F59E0B" />
                  <circle cx="105" cy="32" r="9" fill="#38BDF8" />
                  <circle cx="165" cy="54" r="6.5" fill="#10B981" />
                  <circle cx="230" cy="20" r="13" fill="#F59E0B" />
                  <circle cx="270" cy="46" r="8" fill="#38BDF8" />
                </svg>
              ) : isAccra ? (
                /* Golden Loop Knot Graphic for Kantamanto CircuTex */
                <svg
                  viewBox="0 0 320 90"
                  className="w-full max-w-[280px] h-20 overflow-visible"
                  aria-label="CircuTex circular economy knot"
                >
                  {/* Branch tail left */}
                  <line
                    x1="70"
                    y1="62"
                    x2="88"
                    y2="46"
                    stroke="#F59E0B"
                    strokeWidth="5.5"
                    strokeLinecap="round"
                  />
                  <line
                    x1="88"
                    y1="46"
                    x2="98"
                    y2="64"
                    stroke="#F59E0B"
                    strokeWidth="5.5"
                    strokeLinecap="round"
                  />

                  {/* Left Circle / Loop */}
                  <path
                    d="M 88 46 C 88 20, 138 20, 138 50 C 138 80, 88 80, 110 50"
                    fill="none"
                    stroke="#F59E0B"
                    strokeWidth="5.5"
                    strokeLinecap="round"
                  />

                  {/* Right Circle Loop */}
                  <circle
                    cx="180"
                    cy="48"
                    r="23"
                    fill="none"
                    stroke="#F59E0B"
                    strokeWidth="5.5"
                  />

                  {/* Branch tick right */}
                  <line
                    x1="200"
                    y1="48"
                    x2="218"
                    y2="36"
                    stroke="#F59E0B"
                    strokeWidth="5.5"
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
                    stroke="#F59E0B"
                    strokeWidth="2.5"
                    strokeDasharray="4 4"
                  />
                  <path
                    d="M 40 55 Q 100 75, 160 45 T 280 45"
                    fill="none"
                    stroke="#38BDF8"
                    strokeWidth="2"
                    strokeDasharray="3 3"
                  />
                  <circle cx="50" cy="45" r="7" fill="#F59E0B" />
                  <circle cx="130" cy="30" r="8" fill="#38BDF8" />
                  <circle cx="190" cy="55" r="9" fill="#10B981" />
                  <circle cx="270" cy="45" r="11" fill="#F59E0B" />
                </svg>
              )}
            </div>

            {/* Sub-caption Telemetry Metric */}
            <p className="text-[11px] sm:text-xs text-[#9EECEF] font-mono tracking-tight text-center">
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
