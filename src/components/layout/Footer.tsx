"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
    <footer className="bg-stone-900 text-stone-400 pt-24 pb-16 border-t border-stone-800" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        AfriYouth Footer
      </h2>

      <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Minimalist Newsletter Strip */}
        <div className="pb-16 mb-16 border-b border-stone-800 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7 space-y-3">
            <span className="text-[11px] font-semibold uppercase tracking-widePill text-stone-500">
              The Evidence Dispatch
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-stone-100 tracking-heading">
              Grassroots data. Policy insight. Straight to your inbox.
            </h3>
            <p className="text-stone-400 text-sm max-w-lg">
              Monthly synthesis of field research, open opportunity calls, and youth venture milestones across 26 countries.
            </p>
          </div>

          <div className="lg:col-span-5">
            {subscribed ? (
              <div
                role="status"
                className="bg-stone-800 border border-stone-700 p-4 rounded-xl flex items-center gap-3 text-stone-200 text-sm"
              >
                <CheckCircle className="w-5 h-5 text-botanical-400 shrink-0" />
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
                    className="flex-1 px-4 py-3 rounded-pill bg-stone-850 border border-stone-700 text-stone-100 placeholder-stone-500 text-sm focus:outline-none focus:border-stone-400"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-pill text-xs font-semibold bg-stone-100 text-stone-900 hover:bg-white transition-colors shrink-0"
                  >
                    <span>Subscribe</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                {error && (
                  <p id="newsletter-error" className="text-terracotta-400 text-xs" role="alert">
                    {error}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>

        {/* Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-stone-800 text-sm">
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block" aria-label="AfriYouth Innovation Labs Home">
              <div className="relative w-44 h-8">
                <Image
                  src="/images/brand/logo-light.svg"
                  alt="AfriYouth Innovation Labs"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              {navigation.footer.organizationSummary}
            </p>
            <p className="text-xs text-stone-500">
              {site.contact.location}
            </p>
          </div>

          {navigation.footer.links.map((group) => (
            <div key={group.title} className="space-y-3">
              <h4 className="text-xs font-semibold text-stone-200 uppercase tracking-widePill">
                {group.title}
              </h4>
              <ul className="space-y-2 text-xs">
                {group.items.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-stone-400 hover:text-stone-100 transition-colors inline-block py-0.5"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>{navigation.footer.copyright}</p>

          <div className="flex items-center gap-6">
            {site.socials.map((soc) => (
              <a
                key={soc.platform}
                href={soc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-400 hover:text-stone-200 transition-colors"
                aria-label={soc.platform}
              >
                {soc.platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
