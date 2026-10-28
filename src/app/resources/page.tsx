"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
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
    <div className="bg-[#F4F4F6] text-black">
      {/* Editorial Header */}
      <section className="hairline-b pt-12 pb-20 sm:pb-28">
        <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
          <Breadcrumbs items={[{ label: "Resources & Insights" }]} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mt-8 space-y-6"
          >
            <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-500 font-mono">
              // Open Evidence Repository
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-black tracking-display leading-tight">
              Policy briefs, toolkits & whitepapers.
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-normal">
              We operate on open-access dissemination. Download peer-reviewed publications, community design playbooks, and strategic foresight reports freely.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter and Content Grid */}
      <section className="py-24 sm:py-36 bg-white">
        <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
          {/* Controls Bar */}
          <div className="p-6 sm:p-8 rounded-card bg-[#F4F4F6] border border-gray-300 flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <label htmlFor="res-search" className="sr-only">
                Search publications
              </label>
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                <Search className="w-4 h-4" />
              </div>
              <input
                id="res-search"
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search publications, topics, tags..."
                className="w-full pl-11 pr-4 py-2.5 rounded-full bg-white border border-gray-300 text-sm text-black placeholder-gray-500 focus:outline-none focus:border-black font-mono"
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
                    className={`px-4 py-2 rounded-full text-xs font-semibold capitalize transition-colors font-mono ${
                      isActive
                        ? "bg-black text-white"
                        : "bg-white text-gray-600 border border-gray-300 hover:border-black"
                    }`}
                  >
                    {cat === "all" ? "All Publications" : cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results Summary */}
          <div className="text-xs font-semibold uppercase tracking-wider text-gray-500 font-mono">
            Showing {filteredResources.length} Publications
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredResources.map((resource, idx) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="minimal-card rounded-card p-8 sm:p-10 flex flex-col justify-between group bg-[#F4F4F6] border border-gray-300"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-6 font-mono">
                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                      {resource.category}
                    </span>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{resource.readTime}</span>
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 tracking-tight group-hover:translate-x-1 transition-transform">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6 font-normal">
                    {resource.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {resource.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] text-gray-600 bg-white border border-gray-200 px-2.5 py-1 rounded-full font-mono"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-300 flex items-center justify-between text-xs font-mono">
                  <div>
                    <span className="text-black font-semibold block">{resource.format}</span>
                    <span className="text-gray-400">{resource.date}</span>
                  </div>
                  <button
                    onClick={() => {
                      alert(`Initiating download for: "${resource.title}". This document will be delivered by the AfriYouth Open Data repository.`);
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-black text-white hover:bg-neutral-800 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
