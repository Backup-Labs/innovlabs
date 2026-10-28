"use client";

import React, { useState, useMemo } from "react";
import type { Opportunity } from "@/lib/types";
import { OpportunityCard } from "./OpportunityCard";
import { Search, Filter, RotateCcw } from "lucide-react";

interface OpportunitiesFilterProps {
  opportunities: Opportunity[];
}

export const OpportunitiesFilter: React.FC<OpportunitiesFilterProps> = ({ opportunities }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [audienceFilter, setAudienceFilter] = useState<string>("all");

  const types = useMemo(() => {
    const set = new Set(opportunities.map((o) => o.type));
    return ["all", ...Array.from(set)];
  }, [opportunities]);

  const audiences = useMemo(() => {
    const set = new Set(opportunities.map((o) => o.audience));
    return ["all", ...Array.from(set)];
  }, [opportunities]);

  const filteredOpportunities = useMemo(() => {
    return opportunities.filter((item) => {
      // Search
      const matchesSearch =
        searchTerm === "" ||
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.eligibility.toLowerCase().includes(searchTerm.toLowerCase());

      // Status
      const matchesStatus =
        statusFilter === "all" ||
        (statusFilter === "open" && item.status === "open") ||
        (statusFilter === "closed" && item.status === "closed");

      // Type
      const matchesType = typeFilter === "all" || item.type === typeFilter;

      // Audience
      const matchesAudience = audienceFilter === "all" || item.audience === audienceFilter;

      return matchesSearch && matchesStatus && matchesType && matchesAudience;
    });
  }, [opportunities, searchTerm, statusFilter, typeFilter, audienceFilter]);

  const handleReset = () => {
    setSearchTerm("");
    setStatusFilter("all");
    setTypeFilter("all");
    setAudienceFilter("all");
  };

  const isFiltered = searchTerm !== "" || statusFilter !== "all" || typeFilter !== "all" || audienceFilter !== "all";

  return (
    <div className="space-y-8">
      {/* Filters Control Bar */}
      <div className="bg-white rounded-card border border-line p-5 shadow-subtle space-y-4">
        {/* Search Input */}
        <div className="relative">
          <label htmlFor="opp-search" className="sr-only">
            Search opportunities
          </label>
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            id="opp-search"
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by keywords (e.g., policy, grant, tech, agriculture, clean air)..."
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-line text-sm text-ink-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-700 focus:border-transparent"
          />
        </div>

        {/* Filter Dropdowns & Status Chips */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2 border-t border-line/60">
          {/* Status Filter */}
          <div>
            <label htmlFor="filter-status" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
              Status
            </label>
            <select
              id="filter-status"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-line text-xs sm:text-sm text-ink-900 bg-surface focus:outline-none focus:ring-2 focus:ring-primary-700"
            >
              <option value="all">All Opportunities</option>
              <option value="open">Open (Accepting Applications)</option>
              <option value="closed">Closed (In Progress / Past)</option>
            </select>
          </div>

          {/* Type Filter */}
          <div>
            <label htmlFor="filter-type" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
              Initiative Type
            </label>
            <select
              id="filter-type"
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-line text-xs sm:text-sm text-ink-900 bg-surface focus:outline-none focus:ring-2 focus:ring-primary-700"
            >
              <option value="all">All Types</option>
              {types
                .filter((t) => t !== "all")
                .map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
            </select>
          </div>

          {/* Audience Filter */}
          <div>
            <label htmlFor="filter-audience" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
              Target Audience
            </label>
            <select
              id="filter-audience"
              value={audienceFilter}
              onChange={(e) => setAudienceFilter(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-line text-xs sm:text-sm text-ink-900 bg-surface focus:outline-none focus:ring-2 focus:ring-primary-700"
            >
              <option value="all">All Audiences</option>
              {audiences
                .filter((a) => a !== "all")
                .map((a) => (
                  <option key={a} value={a}>
                    {a}
                  </option>
                ))}
            </select>
          </div>

          {/* Reset Action */}
          <div className="flex items-end">
            <button
              type="button"
              onClick={handleReset}
              disabled={!isFiltered}
              className={`w-full py-2 px-3 rounded-lg text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 transition-colors border ${
                isFiltered
                  ? "border-line text-ink-900 bg-surface hover:bg-slate-100"
                  : "border-transparent text-slate-400 bg-transparent cursor-not-allowed"
              }`}
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          </div>
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-sm text-slate-600 px-1" aria-live="polite">
        <p>
          Showing <strong className="text-ink-900">{filteredOpportunities.length}</strong> {filteredOpportunities.length === 1 ? "opportunity" : "opportunities"}
          {isFiltered && <span className="text-slate-400"> (filtered)</span>}
        </p>
        <div className="flex items-center gap-2 text-xs">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
          <span>Verified active deadlines</span>
        </div>
      </div>

      {/* Grid of Results */}
      {filteredOpportunities.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOpportunities.map((opportunity) => (
            <OpportunityCard key={opportunity.id} opportunity={opportunity} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-surface rounded-card border border-line p-8 space-y-4">
          <Filter className="w-10 h-10 text-slate-400 mx-auto" />
          <h3 className="text-lg font-bold text-ink-900 font-heading">
            No opportunities match your filter criteria
          </h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto">
            Try adjusting your search terms, changing the audience selection, or resetting filters to see all available fellowships and grants.
          </p>
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-primary-700 text-white hover:bg-primary-600 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};
