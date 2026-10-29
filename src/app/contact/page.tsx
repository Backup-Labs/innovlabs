import React, { Suspense } from "react";
import type { Metadata } from "next";
import { site } from "@/lib/content";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHeroBanner } from "@/components/common/PageHeroBanner";
import { ContactForm } from "@/components/common/ContactForm";

export const metadata: Metadata = {
  title: "Contact & Regional Nodes Directory",
  description:
    "Get in touch with AfriYouth Innovation Labs headquarters in Nairobi or regional offices in Kigali, Accra, and Johannesburg.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#F4F4F6] text-black">
      {/* Curved Hero Banner matching Screenshot 3 */}
      <PageHeroBanner
        kicker="Direct Inquiries"
        title="Contact our pan-African team."
        description="Whether you are an aspiring fellow, an institution commissioning research, or a potential partner, our regional teams are ready to connect."
      />

      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <Breadcrumbs items={[{ label: "Contact Us" }]} />
      </div>

      {/* Main Content - Framed card with rounded corners */}
      <div className="w-full px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2">
        <section className="w-full rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] bg-white border border-black/10 py-16 sm:py-24 overflow-hidden shadow-sm">
          <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Direct Contacts & Hub Locations */}
            <div className="lg:col-span-5 space-y-12">
              {/* Primary Contacts Card */}
              <div className="minimal-card rounded-card p-8 sm:p-10 space-y-8 bg-[#F4F4F6] border border-gray-300">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-500 block font-mono">
                  Headquarters & Secretariat
                </span>

                <div className="space-y-6 text-sm">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 block mb-1 font-mono">
                      Headquarters
                    </span>
                    <p className="text-black font-semibold">
                      {site.contact.headquarters}
                    </p>
                  </div>

                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 block mb-1 font-mono">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${site.contact.email}`}
                      className="text-black font-bold hover:underline transition-colors font-mono"
                    >
                      {site.contact.email}
                    </a>
                  </div>

                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 block mb-1 font-mono">
                      Telephone
                    </span>
                    <a
                      href={`tel:${site.contact.phone.replace(/[^0-9+]/g, "")}`}
                      className="text-black font-bold hover:underline transition-colors font-mono"
                    >
                      {site.contact.phone}
                    </a>
                  </div>

                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 block mb-1 font-mono">
                      Office Hours
                    </span>
                    <p className="text-gray-600 text-xs font-mono">
                      {site.contact.officeHours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Regional Hubs Card */}
              <div className="minimal-card rounded-card p-8 sm:p-10 space-y-6 bg-[#F4F4F6] border border-gray-300">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-500 block font-mono">
                  Regional Operations
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs font-mono">
                  <div>
                    <strong className="text-black font-bold block">East Africa (HQ)</strong>
                    <span className="text-gray-600">Nairobi & Kigali Hubs</span>
                  </div>
                  <div>
                    <strong className="text-black font-bold block">West Africa</strong>
                    <span className="text-gray-600">Accra & Lagos Nodes</span>
                  </div>
                  <div>
                    <strong className="text-black font-bold block">Southern Africa</strong>
                    <span className="text-gray-600">Johannesburg Node</span>
                  </div>
                  <div>
                    <strong className="text-black font-bold block">North & Central</strong>
                    <span className="text-gray-600">Cairo & Yaoundé Desks</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7 minimal-card rounded-card p-8 sm:p-12 bg-white border border-gray-300">
              <div className="mb-8">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-500 block mb-2 font-mono">
                  Direct Dispatch
                </span>
                <h2 className="font-serif font-normal text-2xl sm:text-3xl text-black tracking-tight">
                  Send an official message
                </h2>
                <p className="text-xs text-gray-500 mt-2 font-normal">
                  All inquiries receive verified acknowledgment within 24 hours.
                </p>
              </div>

              <Suspense
                fallback={
                  <div className="py-12 text-center text-xs text-gray-400 font-mono">
                    Loading contact form...
                  </div>
                }
              >
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  );
}
