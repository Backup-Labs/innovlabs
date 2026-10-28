"use client";

import React, { useState } from "react";
import Link from "next/link";
import { navigation } from "@/lib/content";
import { ArrowUpRight, Compass, Building2, Handshake, CheckCircle2, Terminal } from "lucide-react";

export const AudienceSelector: React.FC = () => {
  const [activeAudience, setActiveAudience] = useState<string>("youth");

  const audienceDetails = {
    youth: {
      code: "SECTOR_01 // YOUTH",
      title: "For Young Innovators & Applied Researchers",
      subtitle: "Accelerate your ideas from grassroots data to funded venture or regional policy.",
      icon: Compass,
      benefits: [
        "Fully-funded policy fellowships with African Union & municipal desk placements",
        "Equity-free catalytic grants ($15K–$25K) with rapid hardware/civic prototyping",
        "Mentorship from leading African econometricians, civic technologists, and designers",
        "Direct access to open datasets, legislative drafting sprints, and peer cohorts"
      ],
      primaryCta: { label: "Explore Open Opportunities", href: "/opportunities" },
      secondaryCta: { label: "View Flagship Programs", href: "/programs" }
    },
    organization: {
      code: "SECTOR_02 // INSTITUTIONS",
      title: "For Governments & Development Organizations",
      subtitle: "Commission youth-led evidence, human-centered public services, and policy youth-proofing.",
      icon: Building2,
      benefits: [
        "Applied field diagnostics covering 10,000+ youth across 15+ countries",
        "Youth-proofing audits for pending legislation, strategies, and regulatory sandboxes",
        "Rapid co-design sprints that solve municipal public service bottlenecks",
        "Third-party monitoring, evaluation, and empirical return-on-investment measurement"
      ],
      primaryCta: { label: "Explore Client Services", href: "/services" },
      secondaryCta: { label: "Request an Advisory Brief", href: "/contact?intent=service" }
    },
    partner: {
      code: "SECTOR_03 // CONSORTIA",
      title: "For Philanthropic Foundations & Research Consortia",
      subtitle: "Invest in high-survival, pan-African ecosystems that transform demographic agency into lasting prosperity.",
      icon: Handshake,
      benefits: [
        "Proven multi-stakeholder model bridging research, policy, design, and enterprise",
        "91% two-year venture and policy taskforce survival rate",
        "Established operational presence across East, West, and Southern Africa",
        "Full transparency, rigorous MEL frameworks, and sovereign data governance"
      ],
      primaryCta: { label: "Explore Partnership Models", href: "/partner-with-us" },
      secondaryCta: { label: "Schedule a Collaboration Call", href: "/contact?intent=partner" }
    }
  };

  const current = audienceDetails[activeAudience as keyof typeof audienceDetails];
  const IconComponent = current.icon;

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden" aria-labelledby="audience-selector-heading">
      {/* Background glow & subtle cyber grid */}
      <div className="absolute inset-0 cyber-grid-dense pointer-events-none opacity-40" />

      <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>SELECT ENGAGEMENT VECTOR</span>
          </div>
          <h2 id="audience-selector-heading" className="text-2xl sm:text-4xl font-extrabold text-white tracking-heading">
            Choose Your Pathway to Engage
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Direct, telemetry-backed operational pathways tailored for emerging African leaders, state ministries, and global institutional funders.
          </p>
        </div>

        {/* Futuristic Segmented Tab Bar */}
        <div className="flex flex-col sm:flex-row justify-center gap-2 max-w-3xl mx-auto mb-8 bg-ink-900/80 p-1.5 rounded-2xl border border-white/10 backdrop-blur-xl shadow-cyberCard" role="tablist">
          {navigation.audiencePortals.map((portal) => {
            const isActive = activeAudience === portal.id;
            return (
              <button
                key={portal.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${portal.id}`}
                id={`tab-${portal.id}`}
                onClick={() => setActiveAudience(portal.id)}
                className={`flex-1 py-3 px-4 rounded-xl text-sm font-semibold font-heading transition-all duration-200 flex items-center justify-center gap-2 ${
                  isActive
                    ? "bg-gradient-to-r from-primary-700 to-primary-600 text-white shadow-glowEmerald border border-emerald-400/40"
                    : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                <span>{portal.label}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tab Glass Panel */}
        <div
          id={`panel-${activeAudience}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeAudience}`}
          className="glass-panel rounded-card p-6 sm:p-10 border border-white/10 shadow-cyberCard animate-in fade-in-50 duration-200 relative overflow-hidden"
        >
          {/* Subtle accent corner line */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-mono font-bold tracking-widest text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                  {current.code}
                </span>
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300">
                  <IconComponent className="w-4 h-4 text-accent-500" />
                  <span>{current.title}</span>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                {current.subtitle}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {current.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-4">
                <Link
                  href={current.primaryCta.href}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold font-heading bg-accent-500 text-ink-950 hover:bg-accent-400 transition-colors shadow-glowGold"
                >
                  <span>{current.primaryCta.label}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href={current.secondaryCta.href}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold font-heading border border-white/15 text-slate-200 hover:bg-white/[0.06] transition-colors"
                >
                  <span>{current.secondaryCta.label}</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 bg-ink-950/70 rounded-xl p-6 border border-white/10 space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400">
                  // ACTION SEQUENCE (2 CLICKS)
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              </div>
              <ol className="space-y-3.5 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 font-mono font-bold flex items-center justify-center shrink-0 text-xs">
                    01
                  </span>
                  <div>
                    <strong className="text-white block font-heading">Verify Thematic Alignment</strong>
                    <span className="text-slate-400 text-xs">Review eligibility criteria, research toolkits, and focus areas.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 font-mono font-bold flex items-center justify-center shrink-0 text-xs">
                    02
                  </span>
                  <div>
                    <strong className="text-white block font-heading">Deploy Submission or Consultation</strong>
                    <span className="text-slate-400 text-xs">Filter active calls or submit an institutional request brief.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded bg-accent-500/20 border border-accent-500/40 text-accent-400 font-mono font-bold flex items-center justify-center shrink-0 text-xs">
                    03
                  </span>
                  <div>
                    <strong className="text-white block font-heading">Direct Regional Coordination Dispatch</strong>
                    <span className="text-slate-400 text-xs">Verified 2-business-day response SLA across 26 countries.</span>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
