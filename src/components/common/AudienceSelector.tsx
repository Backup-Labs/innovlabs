"use client";

import React, { useState } from "react";
import Link from "next/link";
import { navigation } from "@/lib/content";
import { ArrowRight, Compass, Building2, Handshake, CheckCircle2 } from "lucide-react";

export const AudienceSelector: React.FC = () => {
  const [activeAudience, setActiveAudience] = useState<string>("youth");

  const audienceDetails = {
    youth: {
      title: "For Young Innovators & Researchers",
      subtitle: "Accelerate your ideas from grassroots data to funded venture or regional policy.",
      icon: Compass,
      benefits: [
        "Fully-funded fellowships with AU & government placements",
        "Equity-free venture grants ($15K–$25K) with intensive prototyping labs",
        "Mentorship from leading African economists, civic technologists, and designers",
        "Direct access to open datasets, policy drafting sprints, and peer cohorts"
      ],
      primaryCta: { label: "Explore Open Opportunities", href: "/opportunities" },
      secondaryCta: { label: "View Flagship Programs", href: "/programs" }
    },
    organization: {
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
    <section className="py-12 sm:py-16 bg-surface border-y border-line" aria-labelledby="audience-selector-heading">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-primary-700 bg-primary-50 px-3 py-1 rounded-full">
            Tailored Journeys
          </span>
          <h2 id="audience-selector-heading" className="text-2xl sm:text-3xl font-extrabold text-ink-900 tracking-heading mt-3">
            Choose Your Pathway to Engage
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Whether you are a young changemaker, a policymaking institution, or an international funder, AfriYouth provides a direct, high-impact path.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-2 max-w-3xl mx-auto mb-8 bg-white p-1.5 rounded-xl border border-line shadow-subtle" role="tablist">
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
                className={`flex-1 py-3 px-4 rounded-lg text-sm font-semibold transition-all duration-150 flex items-center justify-center gap-2 ${
                  isActive
                    ? "bg-primary-700 text-white shadow-sm"
                    : "text-slate-700 hover:text-ink-900 hover:bg-surface"
                }`}
              >
                <span>{portal.label}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tab Panel */}
        <div
          id={`panel-${activeAudience}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeAudience}`}
          className="bg-white rounded-card border border-line p-6 sm:p-10 shadow-card animate-in fade-in-50 duration-200"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-primary-700 font-semibold text-sm">
                <IconComponent className="w-5 h-5 text-accent-500" />
                <span>{current.title}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-ink-900 font-heading">
                {current.subtitle}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {current.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-primary-700 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-4">
                <Link
                  href={current.primaryCta.href}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-primary-700 text-white hover:bg-primary-600 transition-colors shadow-sm"
                >
                  <span>{current.primaryCta.label}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href={current.secondaryCta.href}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold border border-line text-ink-900 hover:bg-surface transition-colors"
                >
                  <span>{current.secondaryCta.label}</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 bg-surface rounded-xl p-6 border border-line/80 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Action Checklist (2 Clicks)
              </span>
              <ol className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary-100 text-primary-700 font-bold flex items-center justify-center shrink-0 text-xs">
                    1
                  </span>
                  <div>
                    <strong className="text-ink-900 block font-heading">Review Alignment</strong>
                    <span>Inspect eligibility criteria, thematic tracks, and methodology.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary-100 text-primary-700 font-bold flex items-center justify-center shrink-0 text-xs">
                    2
                  </span>
                  <div>
                    <strong className="text-ink-900 block font-heading">Select Specific Initiative</strong>
                    <span>Filter active open calls, advisory services, or consortia.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent-100 text-ink-900 font-bold flex items-center justify-center shrink-0 text-xs">
                    3
                  </span>
                  <div>
                    <strong className="text-ink-900 block font-heading">Submit or Initiate Dialogue</strong>
                    <span>Direct submission with guaranteed receipt and feedback loop.</span>
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
