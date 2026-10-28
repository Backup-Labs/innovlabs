"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { site, navigation } from "@/lib/content";
import { Mail, Phone, MapPin, CheckCircle, ArrowUpRight, Terminal } from "lucide-react";

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
    <footer className="bg-ink-950 text-slate-400 pt-20 pb-12 border-t border-white/10 relative overflow-hidden" aria-labelledby="footer-heading">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary-700/10 blur-[150px] pointer-events-none" />

      <h2 id="footer-heading" className="sr-only">
        AfriYouth Footer
      </h2>

      <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Newsletter & Telemetry Band */}
        <div className="pb-14 mb-14 border-b border-white/[0.08] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-accent-500/10 border border-accent-500/20 text-[11px] font-mono text-accent-400 mb-3">
              <Terminal className="w-3.5 h-3.5" />
              <span>// PAN-AFRICAN EVIDENCE TELEMETRY</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-heading mb-3">
              Subscribe to the African Youth Evidence Brief
            </h3>
            <p className="text-slate-300 text-sm max-w-xl font-normal">
              Monthly digests synthesizing grassroots field research, newly published policy briefs, open grant calls, and emerging futures signals across the continent.
            </p>
          </div>

          <div className="lg:col-span-5">
            {subscribed ? (
              <div
                role="status"
                className="bg-emerald-950/70 border border-emerald-500/40 p-4 rounded-xl flex items-start gap-3 text-white text-sm shadow-glowEmerald"
              >
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold font-heading">Dispatch Subscribed</p>
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
                    placeholder="Enter official email coordinate"
                    required
                    aria-describedby={error ? "newsletter-error" : undefined}
                    className="flex-1 px-4 py-3 rounded-lg bg-ink-900 border border-white/10 text-white placeholder-slate-500 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-bold font-heading bg-accent-500 text-ink-950 hover:bg-accent-400 transition-colors shrink-0 shadow-glowGold"
                  >
                    <span>Connect</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
                {error && (
                  <p id="newsletter-error" className="text-red-400 text-xs font-mono" role="alert">
                    {error}
                  </p>
                )}
                <p className="text-xs font-mono text-slate-500">
                  Zero spam. Curated monthly. Cryptographically signed.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Main Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-white/[0.08]">
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
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-sm font-normal">
              {navigation.footer.organizationSummary}
            </p>
            <div className="pt-2 text-xs font-mono text-slate-400 space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{site.contact.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`mailto:${site.contact.email}`} className="hover:text-emerald-300 transition-colors">
                  {site.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${site.contact.phone.replace(/[^0-9+]/g, "")}`} className="hover:text-emerald-300 transition-colors">
                  {site.contact.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Nav links columns */}
          {navigation.footer.links.map((group) => (
            <div key={group.title} className="space-y-3">
              <h4 className="text-xs font-mono font-bold text-white tracking-widest uppercase">
                // {group.title}
              </h4>
              <ul className="space-y-2.5">
                {group.items.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs sm:text-sm text-slate-400 hover:text-white transition-colors duration-150 inline-block py-0.5 font-heading"
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
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <p>{navigation.footer.copyright}</p>
            <div className="flex items-center gap-3">
              {navigation.footer.subLinks.map((item) => (
                <Link key={item.label} href={item.href} className="hover:text-slate-300 transition-colors">
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
                className="text-slate-400 hover:text-emerald-400 transition-colors font-mono text-xs py-1"
                aria-label={`Visit AfriYouth on ${soc.platform}`}
              >
                [{soc.platform}]
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
