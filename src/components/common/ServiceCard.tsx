import React from "react";
import Link from "next/link";
import type { Service } from "@/lib/types";
import { ArrowUpRight } from "lucide-react";

interface ServiceCardProps {
  service: Service;
  featured?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  featured = false,
}) => {
  return (
    <div
      className={`rounded-2xl p-7 sm:p-9 flex flex-col justify-between w-full h-full group transition-all duration-200 border ${
        featured
          ? "bg-gradient-to-br from-[#0F2228] via-[#142B33] to-[#0A171C] text-white border-white/15 shadow-xl"
          : "skeuo-card bg-white text-black"
      }`}
    >
      <div className="flex-1 flex flex-col">
        <div
          className={`flex items-center justify-between gap-2 mb-6 text-xs font-semibold font-mono ${
            featured ? "text-white/70" : "text-gray-500"
          }`}
        >
          <span>{service.typicalDuration}</span>
        </div>

        <h3
          className={`text-2xl font-bold mb-3 tracking-tight group-hover:translate-x-1 transition-transform font-sans ${
            featured ? "text-white" : "text-black"
          }`}
        >
          {service.title}
        </h3>

        <p
          className={`text-[18px] leading-relaxed mb-8 font-sans ${
            featured ? "text-white/90" : "text-gray-600"
          }`}
        >
          {service.summary}
        </p>

        <div
          className={`space-y-2 mb-8 pt-6 border-t mt-auto ${
            featured ? "border-white/15" : "border-gray-200"
          }`}
        >
          <span
            className={`text-[10px] font-semibold uppercase tracking-widest block mb-3 font-mono ${
              featured ? "text-white/60" : "text-gray-400"
            }`}
          >
            Core Deliverables
          </span>
          {service.deliverables.slice(0, 3).map((item, idx) => (
            <div
              key={idx}
              className={`text-xs leading-relaxed flex items-start gap-2 font-sans ${
                featured ? "text-white/80" : "text-gray-700"
              }`}
            >
              <span
                className={`w-1 h-1 rounded-full shrink-0 mt-2 ${
                  featured ? "bg-white" : "bg-black"
                }`}
              />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`pt-6 border-t ${
          featured ? "border-white/15" : "border-gray-200"
        }`}
      >
        <Link
          href={`/contact?intent=service&subject=${encodeURIComponent(service.title)}`}
          className={`inline-flex items-center justify-between w-full text-xs font-bold uppercase tracking-wider group-hover:underline transition-all ${
            featured ? "text-white" : "text-black"
          }`}
        >
          <span>Request Service Advisory</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
