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
          ? "bg-gradient-to-br from-[#0D0624] via-[#101438] to-[#080214] text-white border-white/20 shadow-xl"
          : "skeuo-card bg-white text-black"
      }`}
    >
      <div className="flex-1 flex flex-col">
        <h3
          className={`text-2xl font-bold mb-2 tracking-tight group-hover:translate-x-1 transition-transform font-sans ${
            featured ? "text-white" : "text-black"
          }`}
        >
          {service.title}
        </h3>

        <p
          className={`text-[18px] leading-relaxed font-sans ${
            featured ? "text-white/90" : "text-gray-600"
          }`}
        >
          {service.summary}
        </p>

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
