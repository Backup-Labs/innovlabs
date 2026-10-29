"use client";

import React, { useState, useEffect } from "react";
import { CheckCircle2, AlertCircle, Loader2, ArrowUpRight } from "lucide-react";
import { CustomDropdown, DropdownOption } from "./CustomDropdown";
import { CustomDatePicker } from "./CustomDatePicker";

interface ContactFormProps {
  initialSubject?: string;
  initialAudience?: string;
}

const AUDIENCE_OPTIONS: DropdownOption[] = [
  { value: "youth", label: "Youth Innovator / Researcher", badge: "Grassroots" },
  { value: "organization", label: "Government / NGO Client", badge: "Institutional" },
  { value: "partner", label: "Funder / Strategic Partner", badge: "Capital" },
  { value: "media", label: "Media / General Inquiry", badge: "Press" },
];

export const ContactForm: React.FC<ContactFormProps> = ({
  initialSubject = "",
  initialAudience = "youth",
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    audience: initialAudience,
    preferredDate: "",
    subject: initialSubject,
    message: "",
    botCheckWebsite: "",
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const paramIntent = params.get("intent");
      const paramSubject = params.get("subject");

      if (paramIntent || paramSubject) {
        setFormData((prev) => ({
          ...prev,
          audience:
            paramIntent === "service"
              ? "organization"
              : paramIntent === "partner"
              ? "partner"
              : prev.audience,
          subject: paramSubject || prev.subject,
        }));
      }
    }
  }, []);

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
      setErrorMessage("Please complete Name, Email, and Message.");
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
        setErrorMessage(data.error || "An error occurred. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please email collaborate@afriyouth.org directly.");
    }
  };

  if (status === "success") {
    return (
      <div
        role="status"
        className="bg-white border border-gray-300 rounded-card p-10 text-center space-y-4"
      >
        <div className="w-12 h-12 bg-gray-100 text-black rounded-full flex items-center justify-center mx-auto border border-gray-300">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="text-2xl font-bold text-black font-heading">
          Inquiry Transmitted
        </h3>
        <p className="text-sm text-gray-600 max-w-sm mx-auto leading-relaxed">
          Thank you, <strong>{formData.name}</strong>. Our directorate will respond within 2 business days.
        </p>
        <div className="pt-4">
          <button
            onClick={() => {
              setStatus("idle");
              setFormData({
                name: "",
                email: "",
                organization: "",
                audience: "youth",
                preferredDate: "",
                subject: "",
                message: "",
                botCheckWebsite: "",
              });
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold bg-black text-white hover:bg-neutral-800 transition-colors"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Honeypot field */}
      <div className="hidden" aria-hidden="true" style={{ display: "none" }}>
        <label htmlFor="botCheckWebsite">Do not fill this field if human</label>
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
          className="p-4 rounded-xl bg-gray-100 border border-black text-black text-xs flex items-center gap-2 font-mono"
        >
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Row 1: Name and Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-black mb-2 font-mono">
            Your Name *
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Amina Umutoni"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm text-black bg-white placeholder-gray-400 focus:outline-none focus:border-black font-mono"
          />
        </div>

        <div>
          <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-black mb-2 font-mono">
            Email Address *
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="amina@example.org"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm text-black bg-white placeholder-gray-400 focus:outline-none focus:border-black font-mono"
          />
        </div>
      </div>

      {/* Row 2: Organization & Audience Persona */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="contact-org" className="block text-xs font-semibold uppercase tracking-wider text-black mb-2 font-mono">
            Organization / University
          </label>
          <input
            id="contact-org"
            name="organization"
            type="text"
            value={formData.organization}
            onChange={handleChange}
            placeholder="Kigali Innovation Hub"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm text-black bg-white placeholder-gray-400 focus:outline-none focus:border-black font-mono"
          />
        </div>

        <div>
          <CustomDropdown
            id="contact-audience"
            label="You Are Engaging As *"
            options={AUDIENCE_OPTIONS}
            value={formData.audience}
            onChange={(val) => setFormData((prev) => ({ ...prev, audience: val }))}
          />
        </div>
      </div>

      {/* Row 3: Subject & Preferred Consultation Date */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="contact-subject" className="block text-xs font-semibold uppercase tracking-wider text-black mb-2 font-mono">
            Subject / Inquiry Topic
          </label>
          <input
            id="contact-subject"
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            placeholder="e.g. Applied Research Service or Fellowship"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm text-black bg-white placeholder-gray-400 focus:outline-none focus:border-black font-mono shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
          />
        </div>

        <div>
          <CustomDatePicker
            id="contact-date"
            label="Preferred Consultation Date"
            value={formData.preferredDate}
            onChange={(dateStr) => setFormData((prev) => ({ ...prev, preferredDate: dateStr }))}
            placeholder="Select target consultation date"
          />
        </div>
      </div>

      {/* Row 4: Message */}
      <div>
        <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-black mb-2 font-mono">
          Message *
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Provide background, proposed collaboration, or specific question..."
          className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm text-black bg-white placeholder-gray-400 focus:outline-none focus:border-black leading-relaxed font-mono"
        />
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="skeuo-btn-dark inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs font-semibold text-white disabled:opacity-60 transition-all active:scale-95 shadow-md"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Transmitting...</span>
            </>
          ) : (
            <>
              <span>Send Inquiry</span>
              <ArrowUpRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
};
