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
      <div className="p-6 sm:p-8 rounded-card bg-stone-150/70 border border-stone-300 flex flex-col md:flex-row gap-6 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="w-4 h-4 text-stone-500 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search calls and keywords..."
            className="w-full pl-11 pr-4 py-2.5 rounded-pill bg-white border border-stone-300 text-sm text-stone-900 placeholder-stone-500 focus:outline-none focus:border-stone-900"
          />
        </div>

        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 rounded-pill bg-white border border-stone-300 text-xs font-semibold text-stone-900 focus:outline-none"
          >
            <option value="all">All Calls</option>
            <option value="open">Open (Accepting Applications)</option>
            <option value="closed">Closed / In Session</option>
          </select>

          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="px-4 py-2 rounded-pill bg-white border border-stone-300 text-xs font-semibold text-stone-900 focus:outline-none"
          >
            <option value="all">All Formats</option>
            {types
              .filter((t) => t !== "all")
              .map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
          </select>

          {isFiltered && (
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-pill text-xs font-semibold text-stone-600 hover:text-stone-900"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>

      <div className="text-xs text-stone-500">
        Showing <strong>{filteredOpportunities.length}</strong> active initiatives
      </div>

      {filteredOpportunities.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredOpportunities.map((opportunity) => (
            <OpportunityCard key={opportunity.id} opportunity={opportunity} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center text-stone-500 text-sm">
          No initiatives found matching current filters.
        </div>
      )}
    </div>
  );
};
