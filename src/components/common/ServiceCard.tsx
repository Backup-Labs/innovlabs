import React from "react";
import Link from "next/link";
import type { Service } from "@/lib/types";
import { Icon } from "./Icon";
import { ArrowUpRight, CheckCircle2, Clock } from "lucide-react";

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="glass-panel rounded-card border border-white/10 p-6 sm:p-8 flex flex-col justify-between glass-card-interactive group relative overflow-hidden">
      <div>
        {/* Icon & Duration Header */}
        <div className="flex items-center justify-between gap-3 mb-5">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/30 group-hover:shadow-glowEmerald transition-shadow">
            <Icon name={service.icon} size={24} />
          </div>
          <span className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-300 bg-white/[0.04] px-2.5 py-1 rounded-full border border-white/10">
            <Clock className="w-3.5 h-3.5 text-emerald-400" />
            <span>{service.typicalDuration}</span>
          </span>
        </div>

        {/* Title & Summary */}
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-heading tracking-tight group-hover:text-emerald-300 transition-colors">
          {service.title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
          {service.summary}
        </p>

        {/* Core Deliverables */}
        <div className="space-y-2 mb-6">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 block mb-2">
            // KEY DELIVERABLES
          </span>
          {service.deliverables.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Client Types in Monospace Badges */}
        <div className="pt-4 border-t border-white/[0.08]">
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 block mb-2">
            // CLIENT DEPLOYMENTS
          </span>
          <div className="flex flex-wrap gap-1.5">
            {service.clientTypes.map((client, idx) => (
              <span
                key={idx}
                className="text-[11px] font-mono text-slate-400 bg-white/[0.03] px-2 py-0.5 rounded border border-white/10"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action CTA */}
      <div className="mt-8 pt-4 border-t border-white/[0.08]">
        <Link
          href={`/contact?intent=service&subject=${encodeURIComponent(service.title)}`}
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-bold font-heading bg-emerald-500 text-ink-950 hover:bg-emerald-400 transition-colors shadow-glowEmerald"
        >
          <span>Initiate Service Advisory</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
