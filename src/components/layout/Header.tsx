"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { navigation } from "@/lib/content";
import { Menu, X, ArrowRight } from "lucide-react";

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
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
        className={`sticky top-0 z-50 w-full transition-all duration-200 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-subtle border-b border-line"
            : "bg-white border-b border-line/60"
        }`}
      >
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 rounded-md py-1"
            aria-label="AfriYouth Innovation Labs Home"
          >
            <div className="relative w-44 sm:w-52 h-10">
              <Image
                src="/images/brand/logo.svg"
                alt="AfriYouth Innovation Labs"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navigation.mainNav.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors duration-150 relative ${
                    isActive
                      ? "text-primary-700 font-semibold bg-primary-50"
                      : "text-slate-700 hover:text-ink-900 hover:bg-surface"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                  {item.badge && (
                    <span className="ml-1.5 inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-accent-500 text-ink-900">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Primary CTA button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href={navigation.primaryCta.href}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-primary-700 text-white hover:bg-primary-600 transition-colors duration-150 shadow-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent-500"
            >
              <span>{navigation.primaryCta.label}</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            className="lg:hidden p-2.5 rounded-lg text-slate-700 hover:text-ink-900 hover:bg-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation"
            className="lg:hidden fixed inset-x-0 top-20 bottom-0 bg-white z-40 border-t border-line flex flex-col justify-between p-6 overflow-y-auto animate-in slide-in-from-top-2 duration-200"
          >
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 px-3 py-1">
                Navigation
              </span>
              {navigation.mainNav.map((item) => {
                const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      isActive
                        ? "text-primary-700 bg-primary-50 font-semibold"
                        : "text-ink-900 hover:bg-surface"
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="px-2 py-0.5 rounded text-xs font-bold bg-accent-500 text-ink-900">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>

            <div className="mt-8 pt-6 border-t border-line flex flex-col gap-3">
              <Link
                href={navigation.primaryCta.href}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg text-base font-semibold bg-primary-700 text-white hover:bg-primary-600 transition-colors shadow-sm"
              >
                <span>{navigation.primaryCta.label}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center px-5 py-3 rounded-lg text-sm font-semibold border border-line text-ink-900 hover:bg-surface transition-colors"
              >
                Contact & Hub Directory
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
