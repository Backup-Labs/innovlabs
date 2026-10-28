import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { opportunities, getOpportunityBySlug } from "@/lib/content";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ContactForm } from "@/components/common/ContactForm";
import { Calendar, MapPin, Award, CheckCircle2, ArrowLeft, ArrowRight, ShieldCheck } from "lucide-react";

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
    <div className="bg-white">
      {/* Top Header & Breadcrumb */}
      <div className="bg-surface border-b border-line">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs
            items={[
              { label: "Opportunities", href: "/opportunities" },
              { label: opportunity.title },
            ]}
          />

          <div className="max-w-3xl mt-4 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-primary-700 bg-primary-50 px-3 py-1 rounded">
                {opportunity.type}
              </span>
              <span className="text-xs font-semibold text-slate-600 bg-white px-2.5 py-1 rounded border border-line">
                {opportunity.audience}
              </span>
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                  isOpen
                    ? "bg-emerald-100 text-emerald-800"
                    : "bg-slate-200 text-slate-700"
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    isOpen ? "bg-emerald-600 animate-pulse" : "bg-slate-400"
                  }`}
                />
                {isOpen ? "Accepting Applications" : "Cohort In Session"}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink-900 tracking-heading">
              {opportunity.title}
            </h1>

            {/* Benefit banner */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-50 border border-accent-100 text-ink-900 text-sm font-bold">
              <Award className="w-5 h-5 text-accent-600" />
              <span>{opportunity.benefit}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content & Application Form */}
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Guidelines & Details */}
          <div className="lg:col-span-7 space-y-8">
            {/* Summary */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-ink-900 font-heading">
                Initiative Overview
              </h2>
              <p className="text-slate-700 leading-relaxed text-base">
                {opportunity.description}
              </p>
            </div>

            {/* Metadata Card */}
            <div className="bg-surface rounded-card border border-line p-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  Application Deadline
                </span>
                <div className="flex items-center gap-1.5 text-sm font-semibold text-ink-900">
                  <Calendar className="w-4 h-4 text-primary-700" />
                  <span>{opportunity.deadline}</span>
                </div>
              </div>
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  Program Start Date
                </span>
                <span className="text-sm font-semibold text-ink-900 block">
                  {opportunity.startDate}
                </span>
              </div>
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  Location & Modality
                </span>
                <div className="flex items-center gap-1.5 text-sm font-semibold text-ink-900">
                  <MapPin className="w-4 h-4 text-primary-700" />
                  <span>{opportunity.location}</span>
                </div>
              </div>
            </div>

            {/* Eligibility Requirements */}
            <div className="space-y-4 pt-4 border-t border-line">
              <h2 className="text-xl font-bold text-ink-900 font-heading">
                Eligibility & Selection Criteria
              </h2>
              <div className="p-5 bg-white rounded-card border border-line space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-700 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {opportunity.eligibility}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-700 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Must possess legal citizenship or resident status in an African Union member state.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-700 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Commitment to adhere to AfriYouth research ethics, data sovereignty, and open-source dissemination principles.
                  </p>
                </div>
              </div>
            </div>

            {/* Back link */}
            <div className="pt-6">
              <Link
                href="/opportunities"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-ink-900 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to all opportunities</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Application / Registration Desk */}
          <div className="lg:col-span-5">
            <div className="bg-surface rounded-card border border-line p-6 sm:p-8 shadow-card sticky top-28 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary-700 block mb-1">
                  Application Portal
                </span>
                <h3 className="text-xl font-bold text-ink-900 font-heading">
                  {isOpen ? "Submit Application / Expression of Interest" : "Register for Next Cohort Notification"}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  {isOpen
                    ? "Fill out this form to submit your candidacy. Applications are reviewed on a rolling basis."
                    : "This cohort is currently in session. Leave your details to receive notification as soon as the next cycle opens."}
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
    </div>
  );
}
