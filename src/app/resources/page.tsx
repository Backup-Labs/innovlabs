"use client";

import React, { useState, useMemo } from "react";
import { resources } from "@/lib/content";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Search, Download, Clock, Terminal } from "lucide-react";

export default function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = useMemo(() => {
    const set = new Set(resources.map((r) => r.category));
    return ["all", ...Array.from(set)];
  }, []);

  const filteredResources = useMemo(() => {
    return resources.filter((item) => {
      const matchesSearch =
        searchTerm === "" ||
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesCat = selectedCategory === "all" || item.category === selectedCategory;

      return matchesSearch && matchesCat;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="relative overflow-hidden">
      {/* Top Header & Breadcrumb */}
      <div className="border-b border-white/[0.08] relative overflow-hidden pt-8 pb-14">
        <div className="absolute inset-0 cyber-grid-dense pointer-events-none opacity-30" />
        <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Resources & Insights" }]} />
          <div className="max-w-3xl mt-4 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
              <Terminal className="w-3.5 h-3.5" />
              <span>// OPEN EVIDENCE REPOSITORY</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-heading font-heading">
              Policy Briefs, Toolkits & Whitepapers
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              We operate on open-access dissemination. Download our peer-reviewed publications, community design playbooks, and strategic foresight reports free of charge.
            </p>
          </div>
        </div>
      </div>

      {/* Filter and Content Grid */}
      <section className="py-14 sm:py-20">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Controls Bar */}
          <div className="glass-panel rounded-card border border-white/10 p-5 shadow-cyberCard flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <label htmlFor="res-search" className="sr-only">
                Search publications
              </label>
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Search className="w-4 h-4 text-emerald-400" />
              </div>
              <input
                id="res-search"
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search publications, topics, authors..."
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-white/10 text-sm text-white bg-ink-950/80 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 font-mono"
              />
            </div>

            {/* Category Filter Chips */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-colors capitalize ${
                      isActive
                        ? "bg-accent-500 text-ink-950 shadow-glowGold"
                        : "bg-white/[0.04] text-slate-400 hover:text-white border border-white/10"
                    }`}
                  >
                    {cat === "all" ? "All Publications" : cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results Summary */}
          <div className="text-xs font-mono text-slate-400">
            SHOWING <strong className="text-emerald-400">{filteredResources.length}</strong> OPEN CITATION ARTIFACTS
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredResources.map((resource) => (
              <div
                key={resource.id}
                className="glass-panel rounded-card border border-white/10 p-6 sm:p-7 flex flex-col justify-between shadow-cyberCard glass-card-interactive"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 px-2.5 py-0.5 rounded">
                      {resource.category}
                    </span>
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{resource.readTime}</span>
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 font-heading leading-snug tracking-tight">
                    {resource.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 font-normal">
                    {resource.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {resource.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono text-slate-400 bg-white/[0.03] px-2 py-0.5 rounded border border-white/10"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono">
                  <div>
                    <span className="text-slate-300 block">{resource.format}</span>
                    <span className="text-slate-500 text-[11px]">{resource.date}</span>
                  </div>
                  <button
                    onClick={() => {
                      alert(`Initiating download for: "${resource.title}". This document will be delivered by the AfriYouth Open Data repository.`);
                    }}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg font-mono font-bold bg-emerald-500 text-ink-950 hover:bg-emerald-400 transition-colors shadow-glowEmerald"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Open PDF</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
