"use client";

import React, { useState } from "react";
import Link from "next/link";
import { site } from "@/lib/content";
import { ArrowUpRight, CheckCircle } from "lucide-react";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }
    setError("");
    setSubscribed(true);
  };

  return (
    <footer className="bg-[#F4F4F6] px-2 sm:px-3 lg:px-4 pb-3 sm:pb-4 pt-2 sm:pt-4" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        AfriYouth Footer
      </h2>

      {/* Curved architectural footer container matching Screenshot 2 curvature and edge margin */}
      <div className="w-full rounded-[28px] sm:rounded-[36px] lg:rounded-[44px] overflow-hidden bg-[#1A252C] text-gray-300 p-8 sm:p-12 lg:p-16 border border-white/10 shadow-2xl">
        {/* Top Minimalist Newsletter Strip */}
        <div className="pb-12 sm:pb-16 mb-12 sm:mb-16 border-b border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end">
          <div className="lg:col-span-7 space-y-3">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-white/60 font-mono">
              The Evidence Dispatch
            </span>
            <h3 className="text-2xl sm:text-4xl font-serif font-normal text-white tracking-tight">
              Grassroots data. Policy insight. Straight to your inbox.
            </h3>
            <p className="text-white/80 text-[18px] max-w-lg leading-relaxed font-sans font-medium">
              Monthly synthesis of field research, open opportunity calls, and youth venture milestones across 26 countries.
            </p>
          </div>

          <div className="lg:col-span-5">
            {subscribed ? (
              <div
                role="status"
                className="bg-white/10 border border-white/20 p-4 rounded-xl flex items-center gap-3 text-white text-sm"
              >
                <CheckCircle className="w-5 h-5 text-white shrink-0" />
                <p className="font-medium">Subscription confirmed. Welcome to the network.</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex flex-col sm:flex-row gap-2">
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    aria-describedby={error ? "newsletter-error" : undefined}
                    className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:border-white font-medium backdrop-blur-md shadow-inner"
                  />
                  <button
                    type="submit"
                    className="skeuo-btn-light inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-full text-xs font-semibold text-black transition-all shrink-0 active:scale-95"
                  >
                    <span>Subscribe</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                {error && (
                  <p id="newsletter-error" className="text-red-400 text-xs font-mono" role="alert">
                    {error}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>

        {/* Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 sm:gap-12 pb-12 sm:pb-16 border-b border-white/10 text-sm">
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5" aria-label="AfriYouth Innovation Labs Home">
              <div className="w-7 h-7 rounded-[7px] bg-white text-[#1A252C] flex items-center justify-center shrink-0 shadow-sm">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                  <rect x="3.5" y="3.5" width="7" height="7" rx="1.5" fill="currentColor" />
                  <rect x="13.5" y="3.5" width="7" height="7" rx="1.5" fill="currentColor" />
                  <rect x="3.5" y="13.5" width="7" height="7" rx="1.5" fill="currentColor" />
                  <rect x="13.5" y="13.5" width="7" height="7" rx="1.5" fill="currentColor" />
                </svg>
              </div>
              <span className="text-2xl font-serif font-normal tracking-tight text-white leading-none pt-0.5">
                AfriYouth
              </span>
            </Link>
            <p className="text-xs text-white/70 leading-relaxed max-w-sm font-medium">
              Empowering Africa&apos;s youth to generate evidence, shape public policy, and build high-survival enterprises across the continent.
            </p>
            <div className="text-xs font-mono text-white/50">
              HQ: {site.contact.headquarters}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-mono">
              Initiatives
            </h4>
            <ul className="space-y-2.5 text-xs text-white/75 font-medium">
              <li><Link href="/programs" className="hover:text-white transition-colors">Flagship Cohorts</Link></li>
              <li><Link href="/opportunities" className="hover:text-white transition-colors">Open Applications</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Client Services</Link></li>
              <li><Link href="/impact" className="hover:text-white transition-colors">Verified Impact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-mono">
              Knowledge
            </h4>
            <ul className="space-y-2.5 text-xs text-white/75 font-medium">
              <li><Link href="/resources" className="hover:text-white transition-colors">Policy Briefs</Link></li>
              <li><Link href="/resources" className="hover:text-white transition-colors">Design Toolkits</Link></li>
              <li><Link href="/impact#stories" className="hover:text-white transition-colors">Field Case Studies</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Integrated Nexus</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-mono">
              Governance
            </h4>
            <ul className="space-y-2.5 text-xs text-white/75 font-medium">
              <li><Link href="/partner-with-us" className="hover:text-white transition-colors">Institutional Alliances</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Regional Nodes</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Data Sovereignty</Link></li>
              <li><Link href="/safeguarding" className="hover:text-white transition-colors">Safeguarding</Link></li>
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
