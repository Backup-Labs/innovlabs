"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const AudienceSelector: React.FC = () => {
  const cards = [
    {
      audience: "Youth Innovators",
      tagline: "Fellowships, grants, and venture labs",
      description: "Direct access to catalytic seed capital, AU policy placement, and prototyping studios.",
      cta: "Explore Opportunities",
      href: "/opportunities",
      stepNumber: "01",
    },
    {
      audience: "Governments & Institutions",
      tagline: "Commissioned evidence and citizen co-design",
      description: "Representative field telemetry across 26 nations and policy youth-proofing audits.",
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
    <div className="w-full px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2">
      <section className="w-full rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] bg-[#EBECEF] border border-black/10 py-16 sm:py-24 overflow-hidden" aria-labelledby="pathways-heading">
        <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20"
          >
            <div className="max-w-xl space-y-3">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-500 font-mono">
                Pathways to Engage
              </span>
              <h2 id="pathways-heading" className="font-serif font-normal text-3xl sm:text-5xl lg:text-6xl text-black tracking-tight">
                Tailored access for every partner.
              </h2>
            </div>
            <p className="text-gray-600 text-[18px] max-w-sm leading-relaxed">
              Whether applying for a grant, commissioning research, or co-funding a national lab.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.map((c, idx) => (
              <motion.div
                key={c.stepNumber}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="skeuo-card rounded-2xl p-7 sm:p-9 flex flex-col justify-between group"
              >
                <div>
                  <span className="text-xs font-semibold text-gray-400 block mb-6 font-mono">
                    {c.stepNumber}
                  </span>
                  <h3 className="text-2xl font-bold text-black mb-2 tracking-tight group-hover:text-black transition-colors">
                    {c.audience}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4 font-mono">
                    {c.tagline}
                  </p>
                  <p className="text-[18px] text-gray-600 leading-relaxed mb-8">
                    {c.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <Link
                    href={c.href}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black group-hover:translate-x-1 transition-all"
                  >
                    <span>{c.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
