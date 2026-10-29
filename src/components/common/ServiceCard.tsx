import React from "react";
import Link from "next/link";
import type { Service } from "@/lib/types";
import { ArrowUpRight } from "lucide-react";

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="skeuo-card rounded-2xl p-7 sm:p-9 flex flex-col justify-between group">
      <div>
        <div className="flex items-center justify-between gap-2 mb-6 text-xs text-gray-500 font-semibold font-mono">
          <span>{service.typicalDuration}</span>
        </div>

        <h3 className="text-2xl font-bold text-black mb-3 tracking-tight group-hover:translate-x-1 transition-transform">
          {service.title}
        </h3>

        <p className="text-[18px] text-gray-600 leading-relaxed mb-8">
          {service.summary}
        </p>

        <div className="space-y-2 mb-8 pt-6 border-t border-gray-200">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 block mb-3 font-mono">
            Core Deliverables
          </span>
          {service.deliverables.slice(0, 3).map((item, idx) => (
            <div key={idx} className="text-xs text-gray-700 leading-relaxed flex items-start gap-2">
              <span className="w-1 h-1 rounded-full bg-black shrink-0 mt-2" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-6 border-t border-gray-200">
        <Link
          href={`/contact?intent=service&subject=${encodeURIComponent(service.title)}`}
          className="inline-flex items-center justify-between w-full text-xs font-bold uppercase tracking-wider text-black group-hover:underline transition-all"
        >
          <span>Request Service Advisory</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
