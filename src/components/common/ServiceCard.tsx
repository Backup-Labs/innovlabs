import React from "react";
import Link from "next/link";
import type { Service } from "@/lib/types";
import { ArrowUpRight, Sparkles } from "lucide-react";

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
          ? "bg-gradient-to-br from-[#0D0624] via-[#101438] to-[#080214] text-white border-white/20 shadow-xl"
          : "skeuo-card bg-white text-black"
      }`}
    >
      <div className="flex-1 flex flex-col">
        <div className="flex items-center justify-between gap-2 mb-4 text-xs font-semibold font-mono">
          <span className={featured ? "text-white/70" : "text-gray-500"}>
            {service.typicalDuration}
          </span>
          {service.product && (
            <span
              className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide ${
                featured
                  ? "bg-white/15 text-white border border-white/25"
                  : "bg-blue-50 text-[#0301FF] border border-blue-200"
              }`}
            >
              {service.product}
            </span>
          )}
        </div>

        <h3
          className={`text-2xl font-bold mb-2 tracking-tight group-hover:translate-x-1 transition-transform font-sans ${
            featured ? "text-white" : "text-black"
          }`}
        >
          {service.title}
        </h3>

        {service.model && (
          <div
            className={`text-xs font-mono font-semibold mb-4 px-3 py-1.5 rounded-lg border ${
              featured
                ? "bg-white/10 text-[#C723DF] border-white/15"
                : "bg-gray-50 text-gray-800 border-gray-200"
            }`}
          >
            <span className="text-[10px] uppercase tracking-wider text-gray-400 block font-normal">
              Operating Model:
            </span>
            <span>{service.model}</span>
          </div>
        )}

        <p
          className={`text-[18px] leading-relaxed mb-6 font-sans ${
            featured ? "text-white/90" : "text-gray-600"
          }`}
        >
          {service.summary}
        </p>

        <div
          className={`space-y-2 mb-6 pt-5 border-t mt-auto ${
            featured ? "border-white/15" : "border-gray-200"
          }`}
        >
          <span
            className={`text-[10px] font-semibold uppercase tracking-widest block mb-2 font-mono ${
              featured ? "text-white/60" : "text-gray-400"
            }`}
          >
            Key Deliverables
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
                  featured ? "bg-[#C723DF]" : "bg-[#0301FF]"
                }`}
              />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`pt-5 border-t ${
          featured ? "border-white/15" : "border-gray-200"
        }`}
      >
        <Link
          href={`/contact?intent=service&subject=${encodeURIComponent(service.title)}`}
          className={`inline-flex items-center justify-between w-full text-xs font-bold uppercase tracking-wider group-hover:underline transition-all ${
            featured ? "text-white" : "text-black"
          }`}
        >
          <span>Commission Service Advisory</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
