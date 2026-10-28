"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { resources } from "@/lib/content";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Search, Download, FileText, BookOpen, Clock, Tag, Filter } from "lucide-react";

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
    <div className="bg-white">
      {/* Top Header & Breadcrumb */}
      <div className="bg-surface border-b border-line">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs items={[{ label: "Resources & Insights" }]} />
          <div className="max-w-3xl mt-4">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-700 bg-primary-50 px-3 py-1 rounded-full">
              Open Knowledge Hub
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-ink-900 tracking-heading mt-3">
              Policy Briefs, HCD Toolkits & Research Papers
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
              We believe in open-access dissemination. Download our peer-reviewed publications, community design toolkits, and strategic foresight reports free of charge.
            </p>
          </div>
        </div>
      </div>

      {/* Filter and Content Grid */}
      <section className="py-12 sm:py-16">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Controls Bar */}
          <div className="bg-white rounded-card border border-line p-5 shadow-subtle flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <label htmlFor="res-search" className="sr-only">
                Search publications
              </label>
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Search className="w-4 h-4" />
              </div>
              <input
                id="res-search"
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search publications, topics, authors..."
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-line text-sm text-ink-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-700"
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
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors capitalize ${
                      isActive
                        ? "bg-primary-700 text-white shadow-sm"
                        : "bg-surface text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    {cat === "all" ? "All Publications" : cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results Summary */}
          <div className="text-xs text-slate-500">
            Showing <strong className="text-ink-900">{filteredResources.length}</strong> open resources
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredResources.map((resource) => (
              <div
                key={resource.id}
                className="bg-white rounded-card border border-line p-6 sm:p-7 flex flex-col justify-between shadow-subtle hover:shadow-card card-lift"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary-700 bg-primary-50 px-2.5 py-1 rounded">
                      {resource.category}
                    </span>
                    <span className="text-xs text-slate-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{resource.readTime}</span>
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-ink-900 mb-2 font-heading leading-snug">
                    {resource.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {resource.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {resource.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium text-slate-600 bg-surface px-2 py-0.5 rounded border border-line"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-line/60 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-slate-500 block">{resource.format}</span>
                    <span className="text-slate-400 text-[11px]">{resource.date}</span>
                  </div>
                  <a
                    href={resource.downloadUrl}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg font-semibold bg-surface border border-line text-ink-900 hover:bg-primary-50 hover:text-primary-700 transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      alert(`Initiating download for: "${resource.title}". This document will be delivered by the AfriYouth Open Data repository.`);
                    }}
                  >
                    <Download className="w-4 h-4 text-primary-700" />
                    <span>Download Open PDF</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
