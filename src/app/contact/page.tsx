import React, { Suspense } from "react";
import type { Metadata } from "next";
import { site } from "@/lib/content";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ContactForm } from "@/components/common/ContactForm";
import { Mail, Phone, MapPin, Clock, ShieldCheck, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Regional Hubs",
  description:
    "Get in touch with AfriYouth Innovation Labs headquarters in Nairobi or regional offices in Kigali, Accra, and Johannesburg.",
};

export default function ContactPage({
  searchParams,
}: {
  searchParams?: { intent?: string; subject?: string };
}) {
  const initialAudience = searchParams?.intent === "service" ? "organization" : searchParams?.intent === "partner" ? "partner" : "youth";
  const initialSubject = searchParams?.subject || "";

  return (
    <div className="bg-white">
      {/* Top Header & Breadcrumb */}
      <div className="bg-surface border-b border-line">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs items={[{ label: "Contact Us" }]} />
          <div className="max-w-3xl mt-4">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-700 bg-primary-50 px-3 py-1 rounded-full">
              Get in Touch
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-ink-900 tracking-heading mt-3">
              Direct Contact & Regional Hub Directory
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
              Have a question about open opportunities, consulting services, research collaborations, or lab visits? Our regional coordination team is ready to assist.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contacts & Hub Locations */}
          <div className="lg:col-span-5 space-y-8">
            {/* Primary Contacts Card */}
            <div className="bg-surface rounded-card border border-line p-6 sm:p-8 space-y-5 shadow-subtle">
              <h2 className="text-xl font-bold text-ink-900 font-heading">
                Headquarters & Coordination
              </h2>

              <div className="space-y-4 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-ink-900 font-heading">Pan-African Secretariat</strong>
                    <span className="text-slate-600">{site.contact.headquarters}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-ink-900 font-heading">General & Program Inquiries</strong>
                    <a href={`mailto:${site.contact.email}`} className="text-primary-700 hover:underline">
                      {site.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-ink-900 font-heading">Telephone Support</strong>
                    <a href={`tel:${site.contact.phone.replace(/[^0-9+]/g, "")}`} className="text-primary-700 hover:underline">
                      {site.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-ink-900 font-heading">Working Hours</strong>
                    <span className="text-slate-600">{site.contact.officeHours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Regional Hubs Card */}
            <div className="bg-white rounded-card border border-line p-6 sm:p-8 space-y-4 shadow-subtle">
              <h3 className="text-lg font-bold text-ink-900 font-heading">
                Regional Hub Locations
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-3 bg-surface rounded-lg border border-line/80">
                  <strong className="text-ink-900 font-bold block">East Africa (HQ)</strong>
                  <span className="text-slate-500">Nairobi & Kigali Hubs</span>
                  <p className="text-[11px] text-slate-600 mt-1">Research & Futures Labs</p>
                </div>
                <div className="p-3 bg-surface rounded-lg border border-line/80">
                  <strong className="text-ink-900 font-bold block">West Africa Hub</strong>
                  <span className="text-slate-500">Accra & Lagos Nodes</span>
                  <p className="text-[11px] text-slate-600 mt-1">CivicTech Incubation</p>
                </div>
                <div className="p-3 bg-surface rounded-lg border border-line/80">
                  <strong className="text-ink-900 font-bold block">Southern Africa</strong>
                  <span className="text-slate-500">Johannesburg Node</span>
                  <p className="text-[11px] text-slate-600 mt-1">Policy & Governance</p>
                </div>
                <div className="p-3 bg-surface rounded-lg border border-line/80">
                  <strong className="text-ink-900 font-bold block">North & Central</strong>
                  <span className="text-slate-500">Cairo & Yaoundé Desks</span>
                  <p className="text-[11px] text-slate-600 mt-1">Academic Consortia</p>
                </div>
              </div>
            </div>

            {/* Service Level Commitment */}
            <div className="p-4 bg-primary-50 border border-primary-100 rounded-lg flex items-start gap-3 text-xs text-primary-900">
              <ShieldCheck className="w-5 h-5 text-primary-700 shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold block">Official Response Standard:</strong>
                <span>All institutional and program inquiries receive verified receipt within 24 hours and substantive staff dispatch within 2 business days.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-surface rounded-card border border-line p-6 sm:p-10 shadow-card">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-ink-900 font-heading">
                Send an Official Inquiry
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Please complete the form below. Your message will be securely routed to the corresponding department.
              </p>
            </div>

            <Suspense fallback={<div className="py-8 text-center text-sm text-slate-500">Loading inquiry form...</div>}>
              <ContactForm
                initialAudience={initialAudience}
                initialSubject={initialSubject}
              />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
