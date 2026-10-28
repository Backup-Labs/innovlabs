"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertCircle, Loader2, Send, Terminal } from "lucide-react";

interface ContactFormProps {
  initialSubject?: string;
  initialAudience?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  initialSubject = "",
  initialAudience = "youth",
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    audience: initialAudience,
    subject: initialSubject,
    message: "",
    botCheckWebsite: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please complete all required fields (Name, Email, Message).");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(data.error || "An error occurred while transmitting your message. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network transmission error. Please verify your connection or email collaborate@afriyouth.org directly.");
    }
  };

  if (status === "success") {
    return (
      <div
        role="status"
        className="bg-emerald-950/70 border border-emerald-500/40 rounded-card p-8 text-center space-y-4 animate-in fade-in-50 duration-200 shadow-glowEmerald"
      >
        <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 border border-emerald-400/30 rounded-2xl flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <span className="text-[11px] font-mono text-emerald-400 block tracking-widest">// DISPATCH CONFIRMED</span>
        <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
          Transmission Received by AfriYouth Innovation Labs
        </h3>
        <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
          Thank you, <strong>{formData.name}</strong>. Your inquiry has been routed to our regional coordination desk. You will receive an official response within 2 business days.
        </p>
        <div className="pt-2">
          <button
            onClick={() => {
              setStatus("idle");
              setFormData({
                name: "",
                email: "",
                organization: "",
                audience: "youth",
                subject: "",
                message: "",
                botCheckWebsite: "",
              });
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold font-heading bg-emerald-500 text-ink-950 hover:bg-emerald-400 transition-colors shadow-glowEmerald"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Honeypot field for bot protection */}
      <div className="hidden" aria-hidden="true" style={{ display: "none" }}>
        <label htmlFor="botCheckWebsite">Do not fill this field if you are human</label>
        <input
          type="text"
          id="botCheckWebsite"
          name="botCheckWebsite"
          value={formData.botCheckWebsite}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {status === "error" && (
        <div
          role="alert"
          className="bg-red-950/60 border border-red-500/40 text-red-200 p-4 rounded-lg flex items-start gap-3 text-sm"
        >
          <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
          <div>
            <strong className="block font-semibold font-heading text-white">Transmission Failed</strong>
            <span className="text-xs text-red-300">{errorMessage}</span>
          </div>
        </div>
      )}

      {/* Row 1: Name and Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-name" className="block text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 mb-1.5">
            // FULL_NAME <span className="text-accent-500">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Amina Umutoni"
            className="w-full px-4 py-3 rounded-lg border border-white/10 text-sm text-white bg-ink-950/80 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 font-mono"
          />
        </div>

        <div>
          <label htmlFor="contact-email" className="block text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 mb-1.5">
            // EMAIL_COORDINATES <span className="text-accent-500">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. amina@example.org"
            className="w-full px-4 py-3 rounded-lg border border-white/10 text-sm text-white bg-ink-950/80 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 font-mono"
          />
        </div>
      </div>

      {/* Row 2: Organization & Audience Persona */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-org" className="block text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 mb-1.5">
            // ORGANIZATION_AFFILIATION
          </label>
          <input
            id="contact-org"
            name="organization"
            type="text"
            value={formData.organization}
            onChange={handleChange}
            placeholder="e.g. Kigali Tech Hub / Independent"
            className="w-full px-4 py-3 rounded-lg border border-white/10 text-sm text-white bg-ink-950/80 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 font-mono"
          />
        </div>

        <div>
          <label htmlFor="contact-audience" className="block text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 mb-1.5">
            // ENGAGEMENT_VECTOR <span className="text-accent-500">*</span>
          </label>
          <select
            id="contact-audience"
            name="audience"
            value={formData.audience}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-white/10 text-sm text-white bg-ink-950/80 focus:outline-none focus:ring-2 focus:ring-emerald-400 font-mono"
          >
            <option value="youth">Youth Innovator / Researcher / Applicant</option>
            <option value="organization">Government / NGO / Service Client</option>
            <option value="partner">Funder / Philanthropic Partner / Funder</option>
            <option value="media">Media / Academic Researcher / General Inquiry</option>
          </select>
        </div>
      </div>

      {/* Row 3: Subject */}
      <div>
        <label htmlFor="contact-subject" className="block text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 mb-1.5">
          // SUBJECT_LINE
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          value={formData.subject}
          onChange={handleChange}
          placeholder="e.g. Inquiry regarding Applied Research Service or Fellowship"
          className="w-full px-4 py-3 rounded-lg border border-white/10 text-sm text-white bg-ink-950/80 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 font-mono"
        />
      </div>

      {/* Row 4: Message */}
      <div>
        <label htmlFor="contact-message" className="block text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 mb-1.5">
          // TRANSMISSION_PAYLOAD <span className="text-accent-500">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Please describe your background, proposed collaboration, or specific inquiry parameters..."
          className="w-full px-4 py-3 rounded-lg border border-white/10 text-sm text-white bg-ink-950/80 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 font-mono leading-relaxed"
        />
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-base font-bold font-heading bg-accent-500 text-ink-950 hover:bg-accent-400 disabled:opacity-60 transition-colors shadow-glowGold focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent-500"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Transmitting Packet...</span>
            </>
          ) : (
            <>
              <span>Send Official Dispatch</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
        <p className="text-xs font-mono text-slate-500 mt-2">
          Protected by honeypot anti-spam. End-to-end encrypted telemetry.
        </p>
      </div>
    </form>
  );
};
