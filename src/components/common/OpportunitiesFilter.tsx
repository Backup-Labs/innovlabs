"use client";

import React, { useState, useMemo } from "react";
import type { Opportunity } from "@/lib/types";
import { OpportunityCard } from "./OpportunityCard";
import { Search, Filter, RotateCcw, Sparkles } from "lucide-react";

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
      const matchesSearch =
        searchTerm === "" ||
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.eligibility.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus =
        statusFilter === "all" ||
        (statusFilter === "open" && item.status === "open") ||
        (statusFilter === "closed" && item.status === "closed");

      const matchesType = typeFilter === "all" || item.type === typeFilter;
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
      <div className="glass-panel rounded-card border border-white/10 p-5 sm:p-6 shadow-cyberCard space-y-4">
        {/* Search Input */}
        <div className="relative">
          <label htmlFor="opp-search" className="sr-only">
            Search opportunities
          </label>
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <Search className="w-4 h-4 text-emerald-400" />
          </div>
          <input
            id="opp-search"
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search telemetry (e.g., policy, grant, tech, agriculture, clean air)..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-white/10 text-sm text-white bg-ink-950/70 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent font-mono"
          />
        </div>

        {/* Filter Dropdowns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2 border-t border-white/[0.08]">
          {/* Status */}
          <div>
            <label htmlFor="filter-status" className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-1.5">
              // TELEMETRY_STATUS
            </label>
            <select
              id="filter-status"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg border border-white/10 text-xs sm:text-sm text-white bg-ink-950/80 focus:outline-none focus:ring-2 focus:ring-emerald-400 font-mono"
            >
              <option value="all">All Statuses</option>
              <option value="open">Live (Accepting Applications)</option>
              <option value="closed">In Session (Active Cohort)</option>
            </select>
          </div>

          {/* Type */}
          <div>
            <label htmlFor="filter-type" className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-1.5">
              // INITIATIVE_TYPE
            </label>
            <select
              id="filter-type"
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg border border-white/10 text-xs sm:text-sm text-white bg-ink-950/80 focus:outline-none focus:ring-2 focus:ring-emerald-400 font-mono"
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

          {/* Audience */}
          <div>
            <label htmlFor="filter-audience" className="block text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-1.5">
              // TARGET_AUDIENCE
            </label>
            <select
              id="filter-audience"
              value={audienceFilter}
              onChange={(e) => setAudienceFilter(e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg border border-white/10 text-xs sm:text-sm text-white bg-ink-950/80 focus:outline-none focus:ring-2 focus:ring-emerald-400 font-mono"
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

          {/* Reset */}
          <div className="flex items-end">
            <button
              type="button"
              onClick={handleReset}
              disabled={!isFiltered}
              className={`w-full py-2.5 px-3 rounded-lg text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-colors border ${
                isFiltered
                  ? "border-emerald-500/40 text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20"
                  : "border-white/5 text-slate-600 bg-transparent cursor-not-allowed"
              }`}
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>RESET_FILTERS</span>
            </button>
          </div>
        </div>
      </div>

      {/* Results Telemetry Bar */}
      <div className="flex items-center justify-between text-xs font-mono text-slate-400 px-1" aria-live="polite">
        <p>
          QUERY_RESULTS: <strong className="text-emerald-400">{filteredOpportunities.length}</strong> ACTIVE ENTRIES
          {isFiltered && <span className="text-accent-500"> [FILTER_ACTIVE]</span>}
        </p>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>REALTIME_SYNC</span>
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
        <div className="text-center py-16 glass-panel rounded-card border border-white/10 p-8 space-y-4">
          <Filter className="w-10 h-10 text-slate-500 mx-auto" />
          <h3 className="text-lg font-bold text-white font-heading">
            Zero Records Match Current Filter Configuration
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
            Reset parameters or broaden keywords to scan all pan-African calls, residencies, and grants.
          </p>
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-mono font-bold bg-accent-500 text-ink-950 hover:bg-accent-400 transition-colors shadow-glowGold"
          >
            RESTORE DEFAULT PARAMETERS
          </button>
        </div>
      )}
    </div>
  );
};
