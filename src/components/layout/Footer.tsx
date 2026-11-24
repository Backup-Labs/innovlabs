"use client";

import React from "react";
import Link from "next/link";
import { site } from "@/lib/content";
import { AfriYouthLogo } from "@/components/common/AfriYouthLogo";
import { ArrowUpRight } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F4F4F6] px-2 sm:px-3 lg:px-4 pb-3 sm:pb-4 pt-2 sm:pt-4" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        AfriYouth Footer
      </h2>

      {/* Curved architectural footer container with official Dark Purple #0D0624 */}
      <div className="w-full rounded-[28px] sm:rounded-[36px] lg:rounded-[44px] overflow-hidden bg-[#0D0624] text-gray-300 p-6 sm:p-10 lg:p-16 border border-white/10 shadow-2xl">
        {/* Top Minimalist Newsletter Strip */}
        <div className="pb-10 sm:pb-16 mb-10 sm:mb-16 border-b border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end">
          <div className="lg:col-span-7 space-y-3">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-white/60 font-mono">
              The Evidence Dispatch
            </span>
            <h3 className="text-2xl sm:text-4xl font-serif font-normal text-white tracking-tight">
              Grassroots data. Policy insight. Straight to your inbox.
            </h3>
            <p className="text-white/80 text-base sm:text-[18px] max-w-lg leading-relaxed font-sans font-medium">
              Ask to receive updates on research, opportunities, and youth-led innovation.
            </p>
          </div>

          <div className="lg:col-span-5">
            <a
              href={`mailto:${site.contact.email}?subject=${encodeURIComponent("Request to receive AfriYouth updates")}`}
              className="skeuo-btn-light inline-flex items-center justify-center gap-1.5 h-11 px-6 rounded-full text-xs font-semibold text-black transition-all shrink-0 active:scale-95"
            >
              <span>Request updates by email</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Navigation Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 pb-12 sm:pb-16 border-b border-white/10 text-sm">
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block group" aria-label="AfriYouth Innovation Labs Home">
              <AfriYouthLogo variant="white" size="md" showText={true} showTagline={true} />
            </Link>
            <p className="text-[18px] text-gray-300 leading-relaxed max-w-sm font-sans font-normal pt-2">
              Empowering Africa&apos;s youth to generate evidence, shape public policy, and build high-survival enterprises across the continent.
            </p>
            <div className="text-[16px] font-sans text-gray-400 font-medium">
              HQ: {site.contact.headquarters}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-mono">
              5 Strategic Divisions
            </h4>
            <ul className="space-y-2.5 text-xs text-white/75 font-medium">
              <li><Link href="/services#research-evidence-lab" className="hover:text-white transition-colors">Research & Evidence</Link></li>
              <li><Link href="/services#policy-governance-lab" className="hover:text-white transition-colors">Policy & Governance</Link></li>
              <li><Link href="/services#youth-innovation-venture-lab" className="hover:text-white transition-colors">Innovation & Entrepreneurship</Link></li>
              <li><Link href="/services#strategic-foresight-futures-lab" className="hover:text-white transition-colors">Strategic Foresight & Futures</Link></li>
              <li><Link href="/services#career-professional-development-academy" className="hover:text-white transition-colors">Leadership & Capacity</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-mono">
              Programs & Resources
            </h4>
            <ul className="space-y-2.5 text-xs text-white/75 font-medium">
              <li><Link href="/programs" className="hover:text-white transition-colors">Program information</Link></li>
              <li><Link href="/opportunities" className="hover:text-white transition-colors">Opportunity listings</Link></li>
              <li><Link href="/resources" className="hover:text-white transition-colors">Research & resources</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-mono">
              Governance & Capital
            </h4>
            <ul className="space-y-2.5 text-xs text-white/75 font-medium">
              <li><Link href="/partner-with-us" className="hover:text-white transition-colors">Institutional Alliances</Link></li>
              <li><Link href="/services#funding-investment-readiness" className="hover:text-white transition-colors">Resource Mobilization</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Data Sovereignty</Link></li>
              <li><Link href="/safeguarding" className="hover:text-white transition-colors">Safeguarding</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Regional Nodes</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4 font-mono">
          <p>&copy; {new Date().getFullYear()} AfriYouth Innovation Labs. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/safeguarding" className="hover:text-white transition-colors">Safeguarding</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
