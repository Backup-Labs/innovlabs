"use client";

import React, { useState, useMemo } from "react";
import type { Opportunity } from "@/lib/types";
import { OpportunityCard } from "./OpportunityCard";
import { Search, RotateCcw } from "lucide-react";

interface OpportunitiesFilterProps {
  opportunities: Opportunity[];
}

export const OpportunitiesFilter: React.FC<OpportunitiesFilterProps> = ({ opportunities }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [typeFilter, setTypeFilter] = useState<string>("all");

  const types = useMemo(() => {
    const set = new Set(opportunities.map((o) => o.type));
    return ["all", ...Array.from(set)];
  }, [opportunities]);

  const filteredOpportunities = useMemo(() => {
    return opportunities.filter((item) => {
      const matchesSearch =
        searchTerm === "" ||
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus =
        statusFilter === "all" ||
        (statusFilter === "open" && item.status === "open") ||
        (statusFilter === "closed" && item.status === "closed");

      const matchesType = typeFilter === "all" || item.type === typeFilter;

      return matchesSearch && matchesStatus && matchesType;
    });
  }, [opportunities, searchTerm, statusFilter, typeFilter]);

  const handleReset = () => {
    setSearchTerm("");
    setStatusFilter("all");
    setTypeFilter("all");
  };

  const isFiltered = searchTerm !== "" || statusFilter !== "all" || typeFilter !== "all";

  return (
    <div className="space-y-12">
      {/* Minimal Filter Bar */}
      <div className="p-6 sm:p-8 rounded-card bg-[#F4F4F6] border border-gray-300 flex flex-col md:flex-row gap-6 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="w-4 h-4 text-gray-500 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search calls and keywords..."
            className="w-full pl-11 pr-4 py-2.5 rounded-full bg-white border border-gray-300 text-sm text-black placeholder-gray-500 focus:outline-none focus:border-black font-mono"
          />
        </div>

        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 rounded-full bg-white border border-gray-300 text-xs font-semibold text-black focus:outline-none font-mono"
          >
            <option value="all">All Calls</option>
            <option value="open">Open (Accepting Applications)</option>
            <option value="closed">Closed / Cohort Active</option>
          </select>

          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="px-4 py-2 rounded-full bg-white border border-gray-300 text-xs font-semibold text-black focus:outline-none font-mono capitalize"
          >
            {types.map((t) => (
              <option key={t} value={t}>
                {t === "all" ? "All Initiative Types" : t}
              </option>
            ))}
          </select>

          {isFiltered && (
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono text-gray-500 hover:text-black transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs font-mono text-gray-500">
        <span>
          Showing <strong className="text-black font-bold">{filteredOpportunities.length}</strong> Opportunities
        </span>
      </div>

      {/* Grid */}
      {filteredOpportunities.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredOpportunities.map((opportunity) => (
            <OpportunityCard key={opportunity.id} opportunity={opportunity} />
          ))}
        </div>
      ) : (
        <div className="minimal-card rounded-card p-12 text-center space-y-4 bg-white border border-gray-300">
          <h3 className="text-xl font-bold text-black font-heading">
            No matching calls found
          </h3>
          <p className="text-xs text-gray-600 max-w-sm mx-auto">
            Try adjusting your search query or reset the filter parameters to view all active cohorts.
          </p>
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold bg-black text-white hover:bg-neutral-800 transition-colors"
          >
            <span>Reset All Filters</span>
          </button>
        </div>
      )}
    </div>
  );
};
