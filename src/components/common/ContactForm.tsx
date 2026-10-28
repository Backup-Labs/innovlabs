"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";

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
    // Honeypot field (hidden from genuine users)
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

    // Client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please complete all required fields (Name, Email, Message).");
      return;
    }

    // Basic email check
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
        className="bg-emerald-50 border border-emerald-200 rounded-card p-8 text-center space-y-4 animate-in fade-in-50 duration-200"
      >
        <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-ink-900 font-heading">
          Message Received by AfriYouth Innovation Labs
        </h3>
        <p className="text-sm text-slate-700 max-w-md mx-auto leading-relaxed">
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
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-primary-700 text-white hover:bg-primary-600 transition-colors shadow-sm"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Honeypot field for bot protection - hidden visually and with aria-hidden */}
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
          className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-lg flex items-start gap-3 text-sm"
        >
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <div>
            <strong className="block font-semibold">Submission failed</strong>
            <span>{errorMessage}</span>
          </div>
        </div>
      )}

      {/* Row 1: Name and Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Amina Umutoni"
            className="w-full px-4 py-3 rounded-lg border border-line text-sm text-ink-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-700"
          />
        </div>

        <div>
          <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. amina@example.org"
            className="w-full px-4 py-3 rounded-lg border border-line text-sm text-ink-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-700"
          />
        </div>
      </div>

      {/* Row 2: Organization & Audience Persona */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-org" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Organization / University / Venture
          </label>
          <input
            id="contact-org"
            name="organization"
            type="text"
            value={formData.organization}
            onChange={handleChange}
            placeholder="e.g. Kigali Tech Hub / Independent"
            className="w-full px-4 py-3 rounded-lg border border-line text-sm text-ink-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-700"
          />
        </div>

        <div>
          <label htmlFor="contact-audience" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            I Am Engaging As <span className="text-red-500">*</span>
          </label>
          <select
            id="contact-audience"
            name="audience"
            value={formData.audience}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-line text-sm text-ink-900 bg-white focus:outline-none focus:ring-2 focus:ring-primary-700"
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
        <label htmlFor="contact-subject" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
          Subject / Inquiry Topic
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          value={formData.subject}
          onChange={handleChange}
          placeholder="e.g. Inquiry regarding Applied Research Service or Fellowship"
          className="w-full px-4 py-3 rounded-lg border border-line text-sm text-ink-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-700"
        />
      </div>

      {/* Row 4: Message */}
      <div>
        <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
          Message Details <span className="text-red-500">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Please describe your background, proposed collaboration, or specific question..."
          className="w-full px-4 py-3 rounded-lg border border-line text-sm text-ink-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-700 leading-relaxed"
        />
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-base font-semibold bg-primary-700 text-white hover:bg-primary-600 disabled:opacity-60 transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent-500"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Transmitting Inquiry...</span>
            </>
          ) : (
            <>
              <span>Send Official Inquiry</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
        <p className="text-xs text-slate-500 mt-2">
          Protected by honeypot anti-spam. Your contact information is never shared.
        </p>
      </div>
    </form>
  );
};
