"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { navigation } from "@/lib/content";
import { Menu, X, ArrowUpRight, Cpu } from "lucide-react";

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-ink-950/85 backdrop-blur-xl border-b border-white/10 shadow-cyberCard"
            : "bg-transparent border-b border-white/5"
        }`}
      >
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Futuristic Logo & Telemetry Indicator */}
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 rounded-md py-1 group"
              aria-label="AfriYouth Innovation Labs Home"
            >
              <div className="relative w-44 sm:w-52 h-10 transition-transform duration-200 group-hover:scale-[1.02]">
                <Image
                  src="/images/brand/logo-light.svg"
                  alt="AfriYouth Innovation Labs"
                  fill
                  priority
                  className="object-contain object-left"
                />
              </div>
            </Link>

            {/* Subtle Futuristic Node Status (Desktop only) */}
            <div className="hidden xl:flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>NEXUS: 26 NODES ACTIVE</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navigation.mainNav.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-150 relative font-heading tracking-tight ${
                    isActive
                      ? "text-emerald-400 font-semibold bg-emerald-500/10 border border-emerald-500/30 shadow-[0_0_15px_-3px_rgba(16,185,129,0.2)]"
                      : "text-slate-300 hover:text-white hover:bg-white/[0.05]"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                  {item.badge && (
                    <span className="ml-1.5 inline-flex items-center px-1.5 py-0.2 rounded text-[10px] font-mono font-bold bg-accent-500 text-ink-950 uppercase tracking-wider">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Futuristic Primary CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href={navigation.primaryCta.href}
              className="relative group inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold font-heading text-ink-950 bg-accent-500 hover:bg-accent-400 transition-all duration-200 shadow-glowGold hover:shadow-[0_0_25px_rgba(242,169,0,0.6)] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent-500"
            >
              <span>{navigation.primaryCta.label}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            className="lg:hidden p-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer (Cyber-styled) */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation"
            className="lg:hidden fixed inset-x-0 top-20 bottom-0 bg-ink-950/95 backdrop-blur-2xl z-40 border-t border-white/10 flex flex-col justify-between p-6 overflow-y-auto animate-in slide-in-from-top-2 duration-200"
          >
            <div className="flex flex-col gap-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500 px-3 py-1">
                // SYSTEM NAVIGATION
              </span>
              {navigation.mainNav.map((item) => {
                const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-lg text-base font-medium font-heading transition-colors ${
                      isActive
                        ? "text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 font-semibold"
                        : "text-slate-200 hover:bg-white/[0.05]"
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="px-2 py-0.5 rounded text-xs font-mono font-bold bg-accent-500 text-ink-950">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-3">
              <Link
                href={navigation.primaryCta.href}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg text-base font-bold font-heading bg-accent-500 text-ink-950 shadow-glowGold hover:bg-accent-400 transition-colors"
              >
                <span>{navigation.primaryCta.label}</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center px-5 py-3 rounded-lg text-sm font-semibold font-heading border border-white/15 text-slate-300 hover:bg-white/5 transition-colors"
              >
                Contact & Regional Nodes
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
