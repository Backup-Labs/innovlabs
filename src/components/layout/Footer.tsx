"use client";

import React, { useState } from "react";
import Link from "next/link";
import { site, navigation } from "@/lib/content";
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
    <footer className="bg-black text-gray-400 pt-24 pb-16 border-t border-gray-800" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        AfriYouth Footer
      </h2>

      <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Minimalist Newsletter Strip */}
        <div className="pb-16 mb-16 border-b border-gray-800 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7 space-y-3">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-500 font-mono">
              // The Evidence Dispatch
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-heading font-heading">
              Grassroots data. Policy insight. Straight to your inbox.
            </h3>
            <p className="text-gray-400 text-sm max-w-lg leading-relaxed">
              Monthly synthesis of field research, open opportunity calls, and youth venture milestones across 26 countries.
            </p>
          </div>

          <div className="lg:col-span-5">
            {subscribed ? (
              <div
                role="status"
                className="bg-neutral-900 border border-gray-700 p-4 rounded-xl flex items-center gap-3 text-white text-sm"
              >
                <CheckCircle className="w-5 h-5 text-white shrink-0" />
                <p>Subscription confirmed. Welcome to the network.</p>
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
                    className="flex-1 px-4 py-3 rounded-full bg-neutral-900 border border-gray-700 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-white"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-full text-xs font-semibold bg-white text-black hover:bg-gray-100 transition-colors shrink-0"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-gray-800 text-sm">
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3" aria-label="AfriYouth Innovation Labs Home">
              <div className="w-7 h-7 rounded-md bg-white text-black flex items-center justify-center">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="7.5" height="7.5" rx="1.5" stroke="currentColor" strokeWidth="2" />
                  <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5" stroke="currentColor" strokeWidth="2" />
                  <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5" stroke="currentColor" strokeWidth="2" />
                  <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-heading">
                AfriYouth
              </span>
            </Link>
            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Empowering Africa&apos;s youth to generate evidence, shape public policy, and build high-survival enterprises across the continent.
            </p>
            <div className="text-xs font-mono text-gray-500">
              HQ: {site.contact.headquarters}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-mono">
              Initiatives
            </h4>
            <ul className="space-y-2.5 text-xs">
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
            <ul className="space-y-2.5 text-xs">
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
            <ul className="space-y-2.5 text-xs">
              <li><Link href="/partner-with-us" className="hover:text-white transition-colors">Institutional Alliances</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Regional Nodes</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Data Sovereignty</Link></li>
              <li><Link href="/safeguarding" className="hover:text-white transition-colors">Safeguarding</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4 font-mono">
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
