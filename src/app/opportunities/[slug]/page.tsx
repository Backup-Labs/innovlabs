import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { opportunities, getOpportunityBySlug } from "@/lib/content";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ContactForm } from "@/components/common/ContactForm";
import { Calendar, MapPin, CheckCircle2, ArrowLeft } from "lucide-react";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return opportunities.map((opp) => ({
    slug: opp.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const opportunity = getOpportunityBySlug(params.slug);
  if (!opportunity) {
    return { title: "Opportunity Not Found" };
  }
  return {
    title: `${opportunity.title} | AfriYouth Opportunities`,
    description: opportunity.summary,
  };
}

export default function OpportunityDetailPage({ params }: PageProps) {
  const opportunity = getOpportunityBySlug(params.slug);

  if (!opportunity) {
    notFound();
  }

  const isOpen = opportunity.status === "open";

  return (
    <div className="bg-[#F4F4F6] text-black">
      {/* Editorial Header */}
      <section className="hairline-b pt-12 pb-20 sm:pb-28">
        <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
          <Breadcrumbs
            items={[
              { label: "Opportunities", href: "/opportunities" },
              { label: opportunity.title },
            ]}
          />

          <div className="max-w-3xl mt-8 space-y-6">
            <div className="flex flex-wrap items-center gap-3 font-mono">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                {opportunity.type}
              </span>
              <span className="text-xs text-gray-500">
                • {opportunity.audience}
              </span>
              <span
                className={`inline-flex items-center gap-1.5 text-xs font-semibold ${
                  isOpen ? "text-black" : "text-gray-400"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    isOpen ? "bg-black animate-pulse" : "bg-gray-400"
                  }`}
                />
                {isOpen ? "Accepting Applications" : "Cohort In Session"}
              </span>
            </div>

            <h1 className="font-serif font-normal text-4xl sm:text-6xl lg:text-7xl text-black tracking-tight leading-tight">
              {opportunity.title}
            </h1>

            <div className="text-base font-bold text-black font-mono">
              {opportunity.benefit}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Application Desk */}
      <section className="py-24 sm:py-36 bg-white">
        <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Guidelines & Details */}
            <div className="lg:col-span-7 space-y-12">
              <div className="space-y-4">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-500 block font-mono">
                  // Initiative Brief
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-black tracking-tight">
                  Overview & Expectations
                </h2>
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                  {opportunity.description}
                </p>
              </div>

              {/* Metadata Card */}
              <div className="minimal-card rounded-card p-8 grid grid-cols-1 sm:grid-cols-3 gap-6 bg-[#F4F4F6] border border-gray-300 font-mono">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 block mb-1">
                    Deadline
                  </span>
                  <div className="flex items-center gap-2 text-sm font-bold text-black">
                    <Calendar className="w-4 h-4 text-black" />
                    <span>{opportunity.deadline}</span>
                  </div>
                </div>
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 block mb-1">
                    Commencement
                  </span>
                  <span className="text-sm font-bold text-black block">
                    {opportunity.startDate}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 block mb-1">
                    Location / Format
                  </span>
                  <div className="flex items-center gap-2 text-sm font-bold text-black">
                    <MapPin className="w-4 h-4 text-black" />
                    <span>{opportunity.location}</span>
                  </div>
                </div>
              </div>

              {/* Eligibility Requirements */}
              <div className="space-y-6 pt-6 border-t border-gray-200">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-500 block font-mono">
                  // Selection Criteria
                </span>
                <h2 className="text-2xl font-bold text-black tracking-tight">
                  Eligibility & Candidate Profile
                </h2>
                <div className="minimal-card rounded-card p-8 space-y-4 bg-[#F4F4F6] border border-gray-300">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-black shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {opportunity.eligibility}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-black shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Must possess legal citizenship or resident status in an African Union member state.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-black shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Commitment to adhere to AfriYouth research ethics, data sovereignty, and open-source dissemination principles.
                    </p>
                  </div>
                </div>
              </div>

              {/* Back link */}
              <div className="pt-4">
                <Link
                  href="/opportunities"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-500 hover:text-black transition-colors font-mono"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Return to All Opportunities</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Application Desk */}
            <div className="lg:col-span-5">
              <div className="minimal-card rounded-card p-8 sm:p-10 sticky top-28 space-y-6 bg-white border border-gray-300">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-500 block mb-2 font-mono">
                    // Application Desk
                  </span>
                  <h3 className="text-2xl font-bold text-black tracking-tight">
                    {isOpen ? "Submit Candidacy Dossier" : "Register for Future Cycle"}
                  </h3>
                  <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                    {isOpen
                      ? "Applications are reviewed on a rolling basis. Complete the fields below to initiate your review."
                      : "This cohort is currently in session. Register your contact details to receive direct notification upon next cycle opening."}
                  </p>
                </div>

                <ContactForm
                  initialSubject={`Application: ${opportunity.title}`}
                  initialAudience="youth"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
