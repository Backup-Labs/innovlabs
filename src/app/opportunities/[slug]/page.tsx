import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { opportunities, getOpportunityBySlug } from "@/lib/content";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHeroBanner } from "@/components/common/PageHeroBanner";
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
      {/* Curved Hero Banner matching Screenshot 3 */}
      <PageHeroBanner
        kicker={`${opportunity.type} • ${opportunity.audience}`}
        title={opportunity.title}
        description={opportunity.summary}
        badge={isOpen ? "Accepting Applications" : "Cohort In Session"}
      />

      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <Breadcrumbs
          items={[
            { label: "Opportunities", href: "/opportunities" },
            { label: opportunity.title },
          ]}
        />
      </div>

      {/* Main Content & Application Desk - Framed card with rounded corners */}
      <div className="w-full px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2">
        <section className="w-full rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] bg-white border border-black/10 py-16 sm:py-24 overflow-hidden shadow-sm">
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
              <div className="minimal-card rounded-card p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-3 gap-6 bg-[#F4F4F6] border border-gray-300 font-mono">
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
                  Selection Criteria
                </span>
                <h2 className="text-2xl font-bold text-black tracking-tight">
                  Eligibility & Candidate Profile
                </h2>
                <div className="minimal-card rounded-card p-6 sm:p-8 space-y-4 bg-[#F4F4F6] border border-gray-300">
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
              <div className="minimal-card rounded-card p-6 sm:p-8 lg:p-10 sticky top-28 space-y-6 bg-white border border-gray-300">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-500 block mb-2 font-mono">
                    Application Desk
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
  </div>
  );
}
