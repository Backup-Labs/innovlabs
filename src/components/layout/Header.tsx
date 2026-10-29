"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "@/lib/content";
import { X } from "lucide-react";

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Programs", href: "/programs" },
    { label: "Opportunities", href: "/opportunities" },
    { label: "Cases", href: "/impact#stories" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      {/* Reduced size navigation bar matching screenshots (sleek h-14 sm:h-15) */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-[#F4F4F6]/95 backdrop-blur-md border-b border-gray-300/80 shadow-sm"
            : "bg-[#F4F4F6]"
        }`}
      >
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-15 flex items-center justify-between">
          {/* Logo on Left: Architectural Grid Symbol + AfriYouth Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-lg py-1"
            aria-label="AfriYouth Innovation Labs Home"
          >
            {/* Architectural Cross / Quadrant Icon matching photo */}
            <div className="w-6.5 h-6.5 sm:w-7 sm:h-7 rounded-lg bg-black text-white flex items-center justify-center transition-transform group-hover:scale-105 duration-200">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="7.5" height="7.5" rx="1.5" stroke="currentColor" strokeWidth="2" />
                <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5" stroke="currentColor" strokeWidth="2" />
                <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5" stroke="currentColor" strokeWidth="2" />
                <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <span className="text-base sm:text-lg font-bold tracking-tight text-black font-heading">
              AfriYouth
            </span>
          </Link>

          {/* Right Actions matching photo: [Book a call] pill + [ = / X ] circular menu toggle */}
          <div className="flex items-center gap-2">
            <Link
              href="/contact?intent=service"
              className="inline-flex items-center justify-center px-4 py-1.5 rounded-full text-xs font-semibold bg-[#1A252C] text-white hover:bg-black transition-all duration-200 active:scale-95 shadow-sm"
            >
              <span>Book a call</span>
            </Link>

            {/* Circular Hamburger / Close button matching screenshot */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-8.5 h-8.5 rounded-full bg-[#1A252C] text-white flex items-center justify-center hover:bg-black transition-all duration-200 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-black relative z-50 shadow-sm"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {menuOpen ? (
                <X className="w-4 h-4 text-white" />
              ) : (
                <div className="flex flex-col items-center justify-center gap-1">
                  <span className="w-3.5 h-[1.5px] bg-white rounded-full block" />
                  <span className="w-3.5 h-[1.5px] bg-white rounded-full block" />
                </div>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Floating Two-Card Dropdown Menu opening directly below buttons matching screenshot */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Click-outside backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/15 backdrop-blur-[1px]"
              aria-hidden="true"
            />

            {/* Anchored Two-Card Container: positioned right below the header buttons */}
            <div className="fixed top-14 sm:top-15 right-3 sm:right-6 lg:right-8 z-50 w-[240px] sm:w-[260px] flex flex-col gap-2 pointer-events-auto">
              {/* Card 1: Navigation Links in upright Instrument Serif matching screenshot */}
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.97 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-[24px] sm:rounded-[26px] bg-[#1A252C] p-5 sm:p-6 shadow-2xl border border-white/10 text-white"
              >
                <nav className="flex flex-col space-y-2 sm:space-y-2.5" aria-label="Main Navigation Menu">
                  {navLinks.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className={`font-serif font-normal text-xl sm:text-[23px] tracking-tight leading-tight transition-colors duration-150 block text-left ${
                          isActive
                            ? "text-white underline decoration-white/40 underline-offset-4"
                            : "text-white/80 hover:text-white hover:translate-x-1"
                        }`}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </nav>
              </motion.div>

              {/* Card 2: Contact Info & 4 Social Buttons matching screenshot */}
              <motion.div
                initial={{ opacity: 0, y: -6, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -6, scale: 0.97 }}
                transition={{ duration: 0.24, delay: 0.04, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-[24px] sm:rounded-[26px] bg-[#1A252C] p-5 sm:p-6 shadow-2xl border border-white/10 text-white"
              >
                <div className="space-y-1">
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="font-serif font-normal text-base sm:text-lg text-white/90 hover:text-white transition-colors block tracking-tight leading-snug break-all"
                  >
                    {site.contact.email}
                  </a>
                  <a
                    href={`tel:${site.contact.phone.replace(/[^0-9+]/g, "")}`}
                    className="font-serif font-normal text-base sm:text-lg text-white/90 hover:text-white transition-colors block tracking-tight leading-snug"
                  >
                    {site.contact.phone}
                  </a>
                </div>

                {/* 4 Square rounded social buttons matching photo */}
                <div className="mt-4 flex items-center gap-2">
                  {/* X / Twitter */}
                  <a
                    href="https://x.com/AfriYouthLabs"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X (formerly Twitter)"
                    className="w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-lg bg-white/[0.08] hover:bg-white/[0.18] border border-white/5 flex items-center justify-center text-white/80 hover:text-white transition-all duration-200 active:scale-95"
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://linkedin.com/company/afriyouth-innovation-labs"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-lg bg-white/[0.08] hover:bg-white/[0.18] border border-white/5 flex items-center justify-center text-white/80 hover:text-white transition-all duration-200 active:scale-95"
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                    </svg>
                  </a>

                  {/* YouTube */}
                  <a
                    href="https://youtube.com/@AfriYouthLabs"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-lg bg-white/[0.08] hover:bg-white/[0.18] border border-white/5 flex items-center justify-center text-white/80 hover:text-white transition-all duration-200 active:scale-95"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21.582 7.177a2.534 2.534 0 0 0-1.782-1.792C18.226 5 12 5 12 5s-6.226 0-7.8.385a2.534 2.534 0 0 0-1.782 1.792C2 8.761 2 12 2 12s0 3.239.418 4.823a2.534 2.534 0 0 0 1.782 1.792C5.774 19 12 19 12 19s6.226 0 7.8-.385a2.534 2.534 0 0 0 1.782-1.792C22 15.239 22 12 22 12s0-3.239-.418-4.823zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://instagram.com/afriyouthlabs"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-lg bg-white/[0.08] hover:bg-white/[0.18] border border-white/5 flex items-center justify-center text-white/80 hover:text-white transition-all duration-200 active:scale-95"
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
