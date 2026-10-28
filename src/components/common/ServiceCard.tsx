import React from "react";
import Link from "next/link";
import type { Service } from "@/lib/types";
import { ArrowUpRight } from "lucide-react";

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="minimal-card rounded-card p-8 sm:p-10 flex flex-col justify-between group">
      <div>
        <div className="flex items-center justify-between gap-2 mb-6 text-xs text-stone-500 font-semibold">
          <span>{service.typicalDuration}</span>
        </div>

        <h3 className="text-2xl font-bold text-stone-900 mb-3 tracking-tight group-hover:text-botanical-600 transition-colors">
          {service.title}
        </h3>

        <p className="text-sm text-stone-600 leading-relaxed mb-8">
          {service.summary}
        </p>

        <div className="space-y-2 mb-8 pt-6 border-t border-stone-200">
          <span className="text-[10px] font-semibold uppercase tracking-widePill text-stone-400 block mb-3">
            Core Deliverables
          </span>
          {service.deliverables.slice(0, 3).map((item, idx) => (
            <div key={idx} className="text-xs text-stone-700 leading-relaxed flex items-start gap-2">
              <span className="w-1 h-1 rounded-full bg-botanical-500 shrink-0 mt-2" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-6 border-t border-stone-200">
        <Link
          href={`/contact?intent=service&subject=${encodeURIComponent(service.title)}`}
          className="inline-flex items-center justify-between w-full text-xs font-bold uppercase tracking-wider text-stone-900 group-hover:text-botanical-600 transition-colors"
        >
          <span>Request Service Advisory</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
