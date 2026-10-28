"use client";

import React, { useState } from "react";
import Link from "next/link";
import { navigation } from "@/lib/content";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export const AudienceSelector: React.FC = () => {
  const cards = [
    {
      audience: "Youth Innovators",
      tagline: "Fellowships, grants, and venture labs",
      description: "Direct access to seed capital, AU policy placement, and prototyping studios.",
      cta: "Explore Opportunities",
      href: "/opportunities",
      stepNumber: "01",
    },
    {
      audience: "Governments & Institutions",
      tagline: "Commissioned evidence and citizen co-design",
      description: "Representative field data across 15+ nations and policy youth-proofing audits.",
      cta: "Explore Client Services",
      href: "/services",
      stepNumber: "02",
    },
    {
      audience: "Foundations & Partners",
      tagline: "High-survival systemic scale",
      description: "Co-design regional cohorts with verified 91% venture survival and sovereign governance.",
      cta: "Collaborate With Us",
      href: "/partner-with-us",
      stepNumber: "03",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-stone-150/60 hairline-b hairline-t" aria-labelledby="pathways-heading">
      <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl space-y-3">
            <span className="text-[11px] font-semibold uppercase tracking-widePill text-stone-500">
              Pathways to Engage
            </span>
            <h2 id="pathways-heading" className="text-3xl sm:text-5xl font-extrabold text-stone-900 tracking-heading">
              Tailored access for every partner.
            </h2>
          </div>
          <p className="text-stone-600 text-sm max-w-sm">
            Whether applying for a grant, commissioning research, or co-funding a national lab.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((c) => (
            <div
              key={c.stepNumber}
              className="minimal-card rounded-card p-8 sm:p-10 flex flex-col justify-between group"
            >
              <div>
                <span className="text-xs font-semibold text-stone-400 block mb-6">
                  {c.stepNumber}
                </span>
                <h3 className="text-2xl font-bold text-stone-900 mb-2 tracking-tight">
                  {c.audience}
                </h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-botanical-600 mb-4">
                  {c.tagline}
                </p>
                <p className="text-sm text-stone-600 leading-relaxed mb-8">
                  {c.description}
                </p>
              </div>

              <div className="pt-6 border-t border-stone-200">
                <Link
                  href={c.href}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-900 group-hover:text-terracotta-500 transition-colors"
                >
                  <span>{c.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
