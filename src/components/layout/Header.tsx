"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { navigation, site } from "@/lib/content";
import { ArrowUpRight, X } from "lucide-react";

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
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
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      {/* Header Bar matching photo (slim, compact height for 100vh fit) */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-[#F4F4F6]/95 backdrop-blur-md border-b border-gray-300/80 shadow-sm"
            : "bg-[#F4F4F6] border-b border-gray-300/60"
        }`}
      >
        <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12 h-16 sm:h-18 flex items-center justify-between">
          {/* Logo on Left: Architectural Grid Symbol + AfriYouth Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-lg py-1"
            aria-label="AfriYouth Innovation Labs Home"
          >
            {/* Architectural Cross / Quadrant Icon matching photo */}
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-black text-white flex items-center justify-center transition-transform group-hover:scale-105 duration-200">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="7.5" height="7.5" rx="1.5" stroke="currentColor" strokeWidth="2" />
                <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5" stroke="currentColor" strokeWidth="2" />
                <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5" stroke="currentColor" strokeWidth="2" />
                <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <span className="text-lg sm:text-xl font-bold tracking-tight text-black font-heading">
              AfriYouth
            </span>
          </Link>

          {/* Right Actions matching photo: [Book a call] pill + [ = ] circular menu toggle */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <Link
              href="/contact?intent=service"
              className="inline-flex items-center justify-center px-4 sm:px-5 py-2 rounded-full text-xs font-semibold bg-black text-white hover:bg-neutral-800 transition-all duration-200 active:scale-95"
            >
              <span>Book a call</span>
            </Link>

            {/* Circular Hamburger Menu button with 2 horizontal white bars matching photo */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-9 h-9 rounded-full bg-black text-white flex flex-col items-center justify-center gap-1.5 hover:bg-neutral-800 transition-all duration-200 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              <span
                className={`w-3.5 h-0.5 bg-white rounded-full transition-transform duration-200 ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-3.5 h-0.5 bg-white rounded-full transition-transform duration-200 ${
                  menuOpen ? "-rotate-45 -translate-y-0" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Minimalist Architectural Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex justify-end"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="w-full max-w-xl h-full bg-[#F4F4F6] text-black shadow-2xl flex flex-col justify-between p-8 sm:p-12 overflow-y-auto"
            >
              {/* Top Drawer Controls */}
              <div className="flex items-center justify-between pb-8 border-b border-gray-300">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-md bg-black text-white flex items-center justify-center">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="3" width="7.5" height="7.5" rx="1.5" stroke="currentColor" strokeWidth="2" />
                      <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5" stroke="currentColor" strokeWidth="2" />
                      <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5" stroke="currentColor" strokeWidth="2" />
                      <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                  <span className="font-bold text-lg text-black font-heading">AfriYouth Navigation</span>
                </div>

                <button
                  onClick={() => setMenuOpen(false)}
                  className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center hover:bg-neutral-800 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Main Navigation Links */}
              <nav className="py-8 space-y-4">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-500 block mb-2 font-mono">
                  Directory
                </span>
                {navigation.mainNav.map((item, idx) => {
                  const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * idx, duration: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className={`group flex items-center justify-between text-2xl sm:text-3xl font-extrabold tracking-tight transition-all duration-150 py-1 ${
                          isActive ? "text-black pl-3 border-l-2 border-black" : "text-gray-700 hover:text-black hover:translate-x-2"
                        }`}
                      >
                        <span>{item.label}</span>
                        {item.badge ? (
                          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-black text-white">
                            {item.badge}
                          </span>
                        ) : (
                          <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Audience Shortcuts & Contact Info */}
              <div className="pt-8 border-t border-gray-300 space-y-6">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-500 block mb-3 font-mono">
                    Audience Pathways
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    <Link
                      href="/opportunities"
                      onClick={() => setMenuOpen(false)}
                      className="p-3 rounded-xl bg-white border border-gray-300/80 hover:border-black text-xs font-semibold text-center text-black transition-colors"
                    >
                      For Youth
                    </Link>
                    <Link
                      href="/services"
                      onClick={() => setMenuOpen(false)}
                      className="p-3 rounded-xl bg-white border border-gray-300/80 hover:border-black text-xs font-semibold text-center text-black transition-colors"
                    >
                      Organizations
                    </Link>
                    <Link
                      href="/partner-with-us"
                      onClick={() => setMenuOpen(false)}
                      className="p-3 rounded-xl bg-white border border-gray-300/80 hover:border-black text-xs font-semibold text-center text-black transition-colors"
                    >
                      Partners
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-gray-200 text-xs text-gray-600">
                  <div>
                    <span className="block font-semibold text-black">{site.contact.email}</span>
                    <span>{site.contact.phone}</span>
                  </div>
                  <Link
                    href="/contact"
                    onClick={() => setMenuOpen(false)}
                    className="inline-flex items-center gap-2 font-bold text-black hover:underline"
                  >
                    <span>Regional Nodes Directory</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
