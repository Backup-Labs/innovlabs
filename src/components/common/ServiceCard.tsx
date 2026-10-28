import React from "react";
import Link from "next/link";
import type { Service } from "@/lib/types";
import { Icon } from "./Icon";
import { ArrowRight, CheckCircle2, Clock, Users } from "lucide-react";

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-white rounded-card border border-line p-6 sm:p-8 flex flex-col justify-between shadow-subtle hover:shadow-card card-lift">
      <div>
        {/* Icon & Duration Header */}
        <div className="flex items-center justify-between gap-3 mb-5">
          <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-700 flex items-center justify-center border border-primary-100">
            <Icon name={service.icon} size={24} />
          </div>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 bg-surface px-2.5 py-1 rounded-full border border-line">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>{service.typicalDuration}</span>
          </span>
        </div>

        {/* Title & Summary */}
        <h3 className="text-xl font-bold text-ink-900 mb-3 font-heading">
          {service.title}
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed mb-6">
          {service.summary}
        </p>

        {/* Key Deliverables */}
        <div className="space-y-2 mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
            Core Deliverables
          </span>
          {service.deliverables.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-primary-700 shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Client Types */}
        <div className="pt-4 border-t border-line/60">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
            Typical Clients
          </span>
          <div className="flex flex-wrap gap-1.5">
            {service.clientTypes.map((client, idx) => (
              <span
                key={idx}
                className="text-xs font-medium text-slate-600 bg-surface px-2 py-0.5 rounded border border-line"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action CTA */}
      <div className="mt-8 pt-4 border-t border-line/60">
        <Link
          href={`/contact?intent=service&subject=${encodeURIComponent(service.title)}`}
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-primary-700 text-white hover:bg-primary-600 transition-colors shadow-sm"
        >
          <span>Request Service Advisory</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
