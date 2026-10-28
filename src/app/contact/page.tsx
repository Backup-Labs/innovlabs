import React, { Suspense } from "react";
import type { Metadata } from "next";
import { site } from "@/lib/content";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ContactForm } from "@/components/common/ContactForm";

export const metadata: Metadata = {
  title: "Contact & Regional Nodes Directory",
  description:
    "Get in touch with AfriYouth Innovation Labs headquarters in Nairobi or regional offices in Kigali, Accra, and Johannesburg.",
};

export default function ContactPage({
  searchParams,
}: {
  searchParams?: { intent?: string; subject?: string };
}) {
  const initialAudience =
    searchParams?.intent === "service"
      ? "organization"
      : searchParams?.intent === "partner"
      ? "partner"
      : "youth";
  const initialSubject = searchParams?.subject || "";

  return (
    <div className="bg-stone-100 text-stone-900">
      {/* Editorial Header */}
      <section className="hairline-b pt-12 pb-20 sm:pb-28">
        <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
          <Breadcrumbs items={[{ label: "Contact Us" }]} />
          <div className="max-w-3xl mt-8 space-y-6">
            <span className="text-[11px] font-semibold uppercase tracking-widePill text-stone-500">
              Direct Inquiries
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-stone-900 tracking-display leading-tight">
              Contact our pan-African team.
            </h1>
            <p className="text-lg sm:text-xl text-stone-600 leading-relaxed font-normal">
              Whether you are an aspiring fellow, an institution commissioning research, or a potential partner, our regional teams are ready to connect.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 sm:py-36">
        <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Direct Contacts & Hub Locations */}
            <div className="lg:col-span-5 space-y-12">
              {/* Primary Contacts Card */}
              <div className="minimal-card rounded-card p-8 sm:p-10 space-y-8">
                <span className="text-[11px] font-semibold uppercase tracking-widePill text-stone-400 block">
                  Headquarters & Secretariat
                </span>

                <div className="space-y-6 text-sm">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 block mb-1">
                      Headquarters
                    </span>
                    <p className="text-stone-900 font-medium">
                      {site.contact.headquarters}
                    </p>
                  </div>

                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 block mb-1">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${site.contact.email}`}
                      className="text-stone-900 font-bold hover:text-botanical-600 transition-colors"
                    >
                      {site.contact.email}
                    </a>
                  </div>

                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 block mb-1">
                      Telephone
                    </span>
                    <a
                      href={`tel:${site.contact.phone.replace(/[^0-9+]/g, "")}`}
                      className="text-stone-900 font-bold hover:text-botanical-600 transition-colors"
                    >
                      {site.contact.phone}
                    </a>
                  </div>

                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-stone-400 block mb-1">
                      Office Hours
                    </span>
                    <p className="text-stone-600 text-xs">
                      {site.contact.officeHours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Regional Hubs Card */}
              <div className="minimal-card rounded-card p-8 sm:p-10 space-y-6">
                <span className="text-[11px] font-semibold uppercase tracking-widePill text-stone-400 block">
                  Regional Operations
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs">
                  <div>
                    <strong className="text-stone-900 font-bold block">East Africa (HQ)</strong>
                    <span className="text-stone-600">Nairobi & Kigali Hubs</span>
                  </div>
                  <div>
                    <strong className="text-stone-900 font-bold block">West Africa</strong>
                    <span className="text-stone-600">Accra & Lagos Nodes</span>
                  </div>
                  <div>
                    <strong className="text-stone-900 font-bold block">Southern Africa</strong>
                    <span className="text-stone-600">Johannesburg Node</span>
                  </div>
                  <div>
                    <strong className="text-stone-900 font-bold block">North & Central</strong>
                    <span className="text-stone-600">Cairo & Yaoundé Desks</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7 minimal-card rounded-card p-8 sm:p-12">
              <div className="mb-8">
                <span className="text-[11px] font-semibold uppercase tracking-widePill text-stone-400 block mb-2">
                  Direct Dispatch
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
                  Send an official message
                </h2>
                <p className="text-xs text-stone-500 mt-2 font-normal">
                  All inquiries receive verified acknowledgment within 24 hours.
                </p>
              </div>

              <Suspense
                fallback={
                  <div className="py-12 text-center text-xs text-stone-400">
                    Loading contact form...
                  </div>
                }
              >
                <ContactForm
                  initialAudience={initialAudience}
                  initialSubject={initialSubject}
                />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}