import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center flex-wrap gap-2 text-xs font-mono text-slate-400">
        <li className="flex items-center">
          <Link
            href="/"
            className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
            aria-label="Home"
          >
            <Home className="w-3.5 h-3.5 text-emerald-400" />
            <span>NEXUS</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-2">
              <ChevronRight className="w-3 h-3 text-slate-600 shrink-0" aria-hidden="true" />
              {isLast || !item.href ? (
                <span className="font-semibold text-white truncate max-w-[220px] sm:max-w-none uppercase tracking-wider" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-emerald-400 transition-colors truncate max-w-[150px] sm:max-w-none uppercase tracking-wider"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
