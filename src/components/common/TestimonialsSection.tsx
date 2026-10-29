"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatar: string;
  partnerId: string;
}

const testimonialsData: TestimonialItem[] = [
  {
    id: "1",
    quote:
      "I was skeptical of youth consultancies—we'd been burned before by firms that delivered pretty slides and then disappeared. AfriYouth was different. They rolled up their sleeves, challenged our assumptions, and stayed until the reform actually stuck.",
    author: "Marcus Thompson",
    role: "Director of Urban Policy, Kigali",
    avatar: "/images/avatars/avatar-2.jpg",
    partnerId: "undp",
  },
  {
    id: "2",
    quote:
      "AfriYouth helped us see around corners. When everyone else was telling us to grow headcount, they helped us realize we had a regulatory sandbox problem. That field evidence alone saved us from making a costly continental mistake.",
    author: "David Kimani",
    role: "VP Strategy, CircuTex Hub",
    avatar: "/images/avatars/avatar-3.jpg",
    partnerId: "rockefeller",
  },
  {
    id: "3",
    quote:
      "What sets AfriYouth apart is their commitment to building our capabilities, not creating dependency. A year after our engagement ended, we're still using the frameworks they taught us. That's the mark of a true partner.",
    author: "Jennifer Holland",
    role: "Head of Venture Capital, EALA",
    avatar: "/images/avatars/avatar-1.jpg",
    partnerId: "mastercard",
  },
];

export const TestimonialsSection: React.FC = () => {
  const [activeCard, setActiveCard] = useState<string>("2");

  const toggleCard = (id: string) => {
    setActiveCard((prev) => (prev === id ? "" : id));
  };

  // Render authentic real-world SVG logos on testimonial cards
  const renderRealWorldLogo = (partnerId: string, isLightBg: boolean) => {
    switch (partnerId) {
      case "undp":
        return (
          <div className="flex items-center gap-2 select-none shrink-0" title="UNDP Africa">
            {/* Real World UNDP Mark */}
            <svg width="24" height="28" viewBox="0 0 60 70" fill="none" className="shrink-0">
              <rect x="0" y="0" width="26" height="70" fill="#006EB5" rx="3" />
              <rect x="34" y="16" width="26" height="54" fill="#E62238" rx="3" />
              <text x="5" y="44" fill="white" fontFamily="sans-serif" fontSize="18" fontWeight="bold">UN</text>
              <text x="38" y="52" fill="white" fontFamily="sans-serif" fontSize="18" fontWeight="bold">DP</text>
            </svg>
            <div className="flex flex-col">
              <span className={`font-extrabold text-[12px] tracking-tight leading-none ${isLightBg ? "text-[#006EB5]" : "text-white"}`}>
                UNDP
              </span>
              <span className={`text-[9px] font-mono tracking-tight mt-0.5 ${isLightBg ? "text-gray-500" : "text-white/70"}`}>
                Africa
              </span>
            </div>
          </div>
        );

      case "rockefeller":
        return (
          <div className="flex items-center gap-2 select-none shrink-0" title="Rockefeller Foundation">
            {/* Real World Rockefeller Foundation Geometric Emblem */}
            <svg width="24" height="24" viewBox="0 0 100 100" fill="none" className="shrink-0">
              <rect width="100" height="100" rx="16" fill="#002F6C" />
              <path d="M28 25 H55 C66 25 74 33 74 42 C74 52 66 58 55 58 H42 V75 H28 Z" fill="#00A3E0" />
              <path d="M52 58 L72 75 H56 L40 60 Z" fill="#FFFFFF" />
            </svg>
            <div className="flex flex-col">
              <span className={`font-bold text-[11px] leading-tight ${isLightBg ? "text-black" : "text-white"}`}>
                Rockefeller
              </span>
              <span className={`text-[9px] font-mono tracking-tight ${isLightBg ? "text-gray-500" : "text-white/70"}`}>
                Foundation
              </span>
            </div>
          </div>
        );

      case "mastercard":
        return (
          <div className="flex items-center gap-2 select-none shrink-0" title="Mastercard Foundation">
            {/* Real World Mastercard Overlapping Circles */}
            <svg width="34" height="22" viewBox="0 0 68 44" fill="none" className="shrink-0">
              <circle cx="22" cy="22" r="20" fill="#EB001B" />
              <circle cx="46" cy="22" r="20" fill="#F79E1B" fillOpacity="0.9" />
            </svg>
            <div className="flex flex-col">
              <span className={`font-bold text-[11px] leading-tight ${isLightBg ? "text-black" : "text-white"}`}>
                Mastercard
              </span>
              <span className={`text-[9px] font-mono tracking-tight ${isLightBg ? "text-gray-500" : "text-white/70"}`}>
                Foundation
              </span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2">
      <section
        className="w-full rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] bg-white border border-black/10 py-12 sm:py-16 lg:py-20 overflow-hidden shadow-sm"
        aria-labelledby="testimonials-heading"
      >
        <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
          {/* 1. Large Photographic Hero Banner matching Screenshot 1 */}
          <div className="relative w-full rounded-[24px] sm:rounded-[32px] overflow-hidden min-h-[460px] sm:min-h-[520px] lg:min-h-[580px] flex flex-col justify-between p-6 sm:p-10 lg:p-14 border border-black/10 shadow-xl mb-6 sm:mb-8">
            {/* Real Professional Image Background */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/testimonials-hero.jpg"
                alt="Executive partner testimonial"
                fill
                priority
                className="object-cover object-center pointer-events-none"
              />
              {/* Cinematic ambient darkening */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/35 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Top Area: Clean Title "Testimonials" */}
            <div className="relative z-10">
              <h2
                id="testimonials-heading"
                className="font-serif font-normal text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-none mb-6"
              >
                Testimonials
              </h2>

              {/* Floating High-Frost Glassmorphism Card matching Screenshot 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                style={{
                  background: "rgba(255, 255, 255, 0.22)",
                  backdropFilter: "blur(36px) saturate(190%)",
                  WebkitBackdropFilter: "blur(36px) saturate(190%)",
                  border: "1px solid rgba(255, 255, 255, 0.45)",
                  borderTop: "1px solid rgba(255, 255, 255, 0.75)",
                  boxShadow: "0 24px 48px -12px rgba(0, 0, 0, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.8)",
                }}
                className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 max-w-lg text-white"
              >
                <blockquote className="font-sans font-bold text-base sm:text-lg leading-snug mb-3 text-white drop-shadow-sm">
                  &ldquo;AfriYouth didn&apos;t just give us research—they helped us become a more strategic pan-African institution.&rdquo;
                </blockquote>
                <p className="text-white/90 text-xs sm:text-sm leading-relaxed mb-5 font-normal">
                  They identified three fundamental policy bottlenecks that we&apos;d been blind to for years. Two years later, our municipal youth directive is enacted across 14 districts.
                </p>

                <div className="flex items-center gap-3 pt-3.5 border-t border-white/25">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/60 shrink-0 shadow-sm">
                    <Image
                      src="/images/team/chidinma.jpg"
                      alt="Sarah Bouchard"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <strong className="block text-xs font-bold text-white font-sans">
                      Sarah Bouchard
                    </strong>
                    <span className="text-[11px] text-white/80 font-mono">
                      Director, Policy Innovations
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Bottom-Right Rating Widget matching Screenshot 1: 4.9 /5 + Green Dots */}
            <div className="relative z-10 flex justify-end mt-6">
              <div className="text-right">
                <div className="flex items-baseline justify-end gap-1.5 text-white">
                  <span className="text-5xl sm:text-7xl font-sans font-bold tracking-tight leading-none">
                    4.9
                  </span>
                  <span className="text-xl sm:text-2xl font-serif text-white/70">
                    /5
                  </span>
                </div>
                {/* 5 Green indicator dots */}
                <div className="flex items-center justify-end gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="w-2.5 h-2.5 rounded-sm bg-[#10B981] inline-block shadow-sm"
                    />
                  ))}
                </div>
                <span className="text-[11px] sm:text-xs text-white/80 font-mono tracking-tight block mt-1">
                  Based on 320 verified reviews.
                </span>
              </div>
            </div>
          </div>

          {/* 2. Bottom Row: 3 Equal-Sized Cards with Real-World Logos & High Frost */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {testimonialsData.map((t, idx) => {
              // Middle card (idx === 1) is highlighted with high frost glassmorphism & brand gradient
              const isHighlighted = idx === 1;

              return (
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="h-full w-full flex flex-col"
                >
                  <div
                    style={
                      isHighlighted
                        ? {
                            background: "linear-gradient(135deg, rgba(14, 45, 49, 0.92) 0%, rgba(10, 32, 35, 0.94) 100%)",
                            backdropFilter: "blur(32px) saturate(180%)",
                            WebkitBackdropFilter: "blur(32px) saturate(180%)",
                            border: "1px solid rgba(140, 227, 232, 0.35)",
                            boxShadow: "0 18px 40px -8px rgba(7, 27, 30, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.25)",
                          }
                        : {}
                    }
                    className={`w-full flex-1 rounded-2xl p-7 flex flex-col justify-between transition-all duration-200 border ${
                      isHighlighted
                        ? "text-white"
                        : "bg-[#FAF9F5] border-black/10 text-black shadow-sm hover:border-black"
                    }`}
                  >
                    {/* Top Content Area */}
                    <div className="flex-1 flex flex-col justify-between">
                      {/* Top Row: 5 Green Dots on Left & Plus/Minus on Right */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="flex items-center gap-1.5">
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className="w-2 h-2 rounded-full bg-[#10B981] inline-block"
                            />
                          ))}
                        </div>

                        <button
                          type="button"
                          onClick={() => toggleCard(t.id)}
                          className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                            isHighlighted
                              ? "text-white/80 hover:text-white"
                              : "text-gray-500 hover:text-black"
                          }`}
                          aria-label={activeCard === t.id ? "Collapse quote" : "Expand quote"}
                        >
                          {activeCard === t.id ? (
                            <Minus className="w-3.5 h-3.5" />
                          ) : (
                            <Plus className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>

                      {/* Quote Text in 18px font */}
                      <p
                        className={`text-[18px] leading-relaxed mb-6 font-sans ${
                          isHighlighted ? "text-white/95" : "text-gray-800"
                        }`}
                      >
                        &ldquo;{t.quote}&rdquo;
                      </p>
                    </div>

                    {/* Bottom Row: Avatar, Author, Title, and REAL-WORLD LOGO */}
                    <div
                      className={`pt-5 border-t flex items-center justify-between gap-3 mt-auto ${
                        isHighlighted ? "border-white/15" : "border-black/10"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="relative w-9 h-9 rounded-full overflow-hidden border border-black/10 shrink-0 shadow-xs">
                          <Image
                            src={t.avatar}
                            alt={t.author}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <strong
                            className={`block text-xs font-bold font-sans ${
                              isHighlighted ? "text-white" : "text-black"
                            }`}
                          >
                            {t.author}
                          </strong>
                          <span
                            className={`text-[11px] block font-sans ${
                              isHighlighted ? "text-white/70" : "text-gray-500"
                            }`}
                          >
                            {t.role}
                          </span>
                        </div>
                      </div>

                      {/* Real-World SVG Institutional Logo */}
                      <div className="shrink-0">
                        {renderRealWorldLogo(t.partnerId, !isHighlighted)}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
