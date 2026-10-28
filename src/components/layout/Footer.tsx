"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { site, navigation } from "@/lib/content";
import { Mail, Phone, MapPin, CheckCircle, ArrowRight } from "lucide-react";

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
    <footer className="bg-ink-900 text-slate-300 pt-16 pb-12 border-t border-ink-800" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        AfriYouth Footer
      </h2>

      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Newsletter & Mission Band */}
        <div className="pb-12 mb-12 border-b border-ink-700/60 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <span className="inline-block text-xs font-semibold tracking-wider uppercase text-accent-500 mb-2">
              Pan-African Foresight & Policy Dispatch
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-heading mb-3">
              Subscribe to the African Youth Evidence Brief
            </h3>
            <p className="text-slate-300 text-sm max-w-xl">
              Monthly digests synthesizing grassroots field research, newly published policy briefs, open grant calls, and emerging futures signals across the continent.
            </p>
          </div>

          <div className="lg:col-span-5">
            {subscribed ? (
              <div
                role="status"
                className="bg-primary-800/80 border border-primary-600 p-4 rounded-card flex items-start gap-3 text-white text-sm"
              >
                <CheckCircle className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Subscription confirmed</p>
                  <p className="text-slate-300 text-xs mt-0.5">
                    You have joined over 14,000 policy leaders, researchers, and young founders across Africa.
                  </p>
                </div>
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
                    placeholder="Enter your professional email"
                    required
                    aria-describedby={error ? "newsletter-error" : undefined}
                    className="flex-1 px-4 py-3 rounded-lg bg-ink-800 border border-ink-700 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold bg-accent-500 text-ink-900 hover:bg-accent-600 transition-colors shrink-0"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                {error && (
                  <p id="newsletter-error" className="text-red-400 text-xs" role="alert">
                    {error}
                  </p>
                )}
                <p className="text-xs text-slate-400">
                  Zero spam. Curated monthly. Unsubscribe anytime.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Main Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-ink-700/60">
          {/* Organization Bio */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block" aria-label="AfriYouth Innovation Labs Home">
              <div className="relative w-48 h-10">
                <Image
                  src="/images/brand/logo-light.svg"
                  alt="AfriYouth Innovation Labs"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              {navigation.footer.organizationSummary}
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-accent-500 shrink-0 mt-0.5" />
                <span>{site.contact.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent-500 shrink-0" />
                <a href={`mailto:${site.contact.email}`} className="hover:text-white transition-colors">
                  {site.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent-500 shrink-0" />
                <a href={`tel:${site.contact.phone.replace(/[^0-9+]/g, "")}`} className="hover:text-white transition-colors">
                  {site.contact.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Nav links columns */}
          {navigation.footer.links.map((group) => (
            <div key={group.title} className="space-y-3">
              <h4 className="text-sm font-bold text-white tracking-wider uppercase font-heading">
                {group.title}
              </h4>
              <ul className="space-y-2.5">
                {group.items.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-300 hover:text-white transition-colors duration-150 inline-block py-0.5"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <p>{navigation.footer.copyright}</p>
            <div className="flex items-center gap-3">
              {navigation.footer.subLinks.map((item) => (
                <Link key={item.label} href={item.href} className="hover:text-slate-200 transition-colors">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {site.socials.map((soc) => (
              <a
                key={soc.platform}
                href={soc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-accent-500 transition-colors font-medium text-xs py-1"
                aria-label={`Visit AfriYouth on ${soc.platform}`}
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
