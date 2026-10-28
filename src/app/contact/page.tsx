import React, { Suspense } from "react";
import type { Metadata } from "next";
import { site } from "@/lib/content";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ContactForm } from "@/components/common/ContactForm";
import { Mail, Phone, MapPin, Clock, ShieldCheck, Terminal } from "lucide-react";

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
  const initialAudience = searchParams?.intent === "service" ? "organization" : searchParams?.intent === "partner" ? "partner" : "youth";
  const initialSubject = searchParams?.subject || "";

  return (
    <div className="relative overflow-hidden">
      {/* Top Header & Breadcrumb */}
      <div className="border-b border-white/[0.08] relative overflow-hidden pt-8 pb-14">
        <div className="absolute inset-0 cyber-grid-dense pointer-events-none opacity-30" />
        <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Contact Us" }]} />
          <div className="max-w-3xl mt-4 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
              <Terminal className="w-3.5 h-3.5" />
              <span>// DIRECT DISPATCH DESK</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-heading font-heading">
              Direct Contact & Regional Nodes Directory
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Have a question about open opportunities, consulting services, research collaborations, or lab visits? Our regional coordination team is ready to assist.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contacts & Hub Locations */}
          <div className="lg:col-span-5 space-y-8">
            {/* Primary Contacts Card */}
            <div className="glass-panel rounded-card border border-white/10 p-6 sm:p-8 space-y-5 shadow-cyberCard">
              <h2 className="text-xl sm:text-2xl font-bold text-white font-heading tracking-tight">
                Pan-African Secretariat
              </h2>

              <div className="space-y-4 text-sm font-mono text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-heading font-normal">HEADQUARTERS LOCATION</strong>
                    <span className="text-slate-400 text-xs font-sans">{site.contact.headquarters}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-heading font-normal">GENERAL & PROGRAM DISPATCH</strong>
                    <a href={`mailto:${site.contact.email}`} className="text-emerald-400 hover:underline">
                      {site.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-heading font-normal">VOICE / TELEPHONE LINE</strong>
                    <a href={`tel:${site.contact.phone.replace(/[^0-9+]/g, "")}`} className="text-emerald-400 hover:underline">
                      {site.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-heading font-normal">COORDINATION HOURS</strong>
                    <span className="text-slate-400 text-xs">{site.contact.officeHours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Regional Hubs Card */}
            <div className="glass-panel rounded-card border border-white/10 p-6 sm:p-8 space-y-4 shadow-cyberCard">
              <h3 className="text-lg font-bold text-white font-heading tracking-tight">
                Regional Hub Locations
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-3.5 bg-ink-950/70 rounded-xl border border-white/5">
                  <strong className="text-emerald-400 font-bold block">// EAST AFRICA (HQ)</strong>
                  <span className="text-white">Nairobi & Kigali Hubs</span>
                  <p className="text-[11px] text-slate-400 mt-1">Research & Futures Labs</p>
                </div>
                <div className="p-3.5 bg-ink-950/70 rounded-xl border border-white/5">
                  <strong className="text-emerald-400 font-bold block">// WEST AFRICA HUB</strong>
                  <span className="text-white">Accra & Lagos Nodes</span>
                  <p className="text-[11px] text-slate-400 mt-1">CivicTech Incubation</p>
                </div>
                <div className="p-3.5 bg-ink-950/70 rounded-xl border border-white/5">
                  <strong className="text-accent-500 font-bold block">// SOUTHERN AFRICA</strong>
                  <span className="text-white">Johannesburg Node</span>
                  <p className="text-[11px] text-slate-400 mt-1">Policy & Governance</p>
                </div>
                <div className="p-3.5 bg-ink-950/70 rounded-xl border border-white/5">
                  <strong className="text-accent-500 font-bold block">// NORTH & CENTRAL</strong>
                  <span className="text-white">Cairo & Yaoundé Desks</span>
                  <p className="text-[11px] text-slate-400 mt-1">Academic Consortia</p>
                </div>
              </div>
            </div>

            {/* Service Level Commitment */}
            <div className="p-4 bg-emerald-950/40 border border-emerald-500/30 rounded-xl flex items-start gap-3 text-xs text-emerald-200">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold block font-mono">// RESPONSE STANDARD GUARANTEE:</strong>
                <span className="text-slate-300">All institutional and program inquiries receive verified receipt within 24 hours and substantive staff dispatch within 2 business days.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 glass-panel rounded-card border border-white/10 p-6 sm:p-10 shadow-cyberCard">
            <div className="mb-6">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-400 block mb-1">
                // SECURE DISPATCH CONSOLE
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading tracking-tight">
                Send an Official Inquiry
              </h2>
              <p className="text-xs text-slate-400 mt-1 font-normal">
                Please complete the form below. Your message will be securely routed to the corresponding department.
              </p>
            </div>

            <Suspense fallback={<div className="py-8 text-center text-sm font-mono text-slate-500">Loading inquiry console...</div>}>
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
