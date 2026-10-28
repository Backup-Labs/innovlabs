"use client";

import React, { useState, useMemo } from "react";
import { resources } from "@/lib/content";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Search, Download, Clock } from "lucide-react";

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
    <div className="bg-stone-100 text-stone-900">
      {/* Editorial Header */}
      <section className="hairline-b pt-12 pb-20 sm:pb-28">
        <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
          <Breadcrumbs items={[{ label: "Resources & Insights" }]} />
          <div className="max-w-3xl mt-8 space-y-6">
            <span className="text-[11px] font-semibold uppercase tracking-widePill text-stone-500">
              Open Evidence Repository
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-stone-900 tracking-display leading-tight">
              Policy briefs, toolkits & whitepapers.
            </h1>
            <p className="text-lg sm:text-xl text-stone-600 leading-relaxed font-normal">
              We operate on open-access dissemination. Download peer-reviewed publications, community design playbooks, and strategic foresight reports freely.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Content Grid */}
      <section className="py-24 sm:py-36">
        <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
          {/* Controls Bar */}
          <div className="p-6 sm:p-8 rounded-card bg-stone-150/70 border border-stone-300 flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <label htmlFor="res-search" className="sr-only">
                Search publications
              </label>
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-stone-400">
                <Search className="w-4 h-4" />
              </div>
              <input
                id="res-search"
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search publications, topics, tags..."
                className="w-full pl-11 pr-4 py-2.5 rounded-pill bg-white border border-stone-300 text-sm text-stone-900 placeholder-stone-500 focus:outline-none focus:border-stone-900"
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
                    className={`px-4 py-2 rounded-pill text-xs font-semibold capitalize transition-colors ${
                      isActive
                        ? "bg-stone-900 text-white"
                        : "bg-white text-stone-600 border border-stone-300 hover:border-stone-400"
                    }`}
                  >
                    {cat === "all" ? "All Publications" : cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results Summary */}
          <div className="text-xs font-semibold uppercase tracking-wider text-stone-500">
            Showing {filteredResources.length} Publications
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredResources.map((resource) => (
              <div
                key={resource.id}
                className="minimal-card rounded-card p-8 sm:p-10 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                      {resource.category}
                    </span>
                    <span className="text-xs text-stone-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{resource.readTime}</span>
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-3 tracking-tight group-hover:text-botanical-600 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed mb-6 font-normal">
                    {resource.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {resource.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] text-stone-500 bg-stone-150 px-2.5 py-1 rounded-pill"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-stone-200 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-stone-900 font-semibold block">{resource.format}</span>
                    <span className="text-stone-400">{resource.date}</span>
                  </div>
                  <button
                    onClick={() => {
                      alert(`Initiating download for: "${resource.title}". This document will be delivered by the AfriYouth Open Data repository.`);
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-pill text-xs font-semibold bg-stone-900 text-white hover:bg-stone-800 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF</span>
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