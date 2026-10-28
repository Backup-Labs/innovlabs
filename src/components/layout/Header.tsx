"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { navigation } from "@/lib/content";
import { Menu, X, ArrowUpRight } from "lucide-react";

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
            ? "bg-stone-100/90 backdrop-blur-md border-b border-stone-300/80 shadow-sm"
            : "bg-transparent border-b border-stone-300/50"
        }`}
      >
        <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12 h-20 sm:h-24 flex items-center justify-between">
          {/* Minimalist Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 rounded-md py-1"
            aria-label="AfriYouth Innovation Labs Home"
          >
            <div className="relative w-44 sm:w-48 h-9">
              <Image
                src="/images/brand/logo.svg"
                alt="AfriYouth Innovation Labs"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Clean Editorial Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Main Navigation">
            {navigation.mainNav.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors duration-150 relative py-1 ${
                    isActive
                      ? "text-stone-900 font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-stone-900"
                      : "text-stone-600 hover:text-stone-900"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                  {item.badge && (
                    <span className="ml-1.5 px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-botanical-500 text-white">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Minimalist Action Pill */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href={navigation.primaryCta.href}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-pill text-xs font-semibold bg-stone-900 text-white hover:bg-stone-800 transition-all duration-200 shadow-sm"
            >
              <span>{navigation.primaryCta.label}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-full text-stone-900 hover:bg-stone-200/60 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-20 bottom-0 bg-stone-100 z-40 border-t border-stone-300 p-8 flex flex-col justify-between overflow-y-auto">
            <div className="flex flex-col gap-4">
              <span className="text-[11px] font-semibold uppercase tracking-widePill text-stone-500">
                Menu
              </span>
              {navigation.mainNav.map((item) => {
                const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center justify-between text-2xl font-bold py-2 ${
                      isActive ? "text-stone-900" : "text-stone-600 hover:text-stone-900"
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="px-2 py-0.5 rounded-full text-xs bg-botanical-500 text-white font-normal">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>

            <div className="pt-8 border-t border-stone-300 flex flex-col gap-3">
              <Link
                href={navigation.primaryCta.href}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-pill text-sm font-semibold bg-stone-900 text-white"
              >
                <span>{navigation.primaryCta.label}</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
