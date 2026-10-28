"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertCircle, Loader2, ArrowUpRight } from "lucide-react";

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
        className="bg-white border border-stone-300 rounded-card p-10 text-center space-y-4"
      >
        <div className="w-12 h-12 bg-botanical-100 text-botanical-700 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="text-2xl font-bold text-stone-900 font-heading">
          Inquiry Transmitted
        </h3>
        <p className="text-sm text-stone-600 max-w-sm mx-auto leading-relaxed">
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
                subject: "",
                message: "",
                botCheckWebsite: "",
              });
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-pill text-xs font-semibold bg-stone-900 text-white"
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
          className="p-4 rounded-xl bg-terracotta-50 border border-terracotta-200 text-terracotta-600 text-xs flex items-center gap-2"
        >
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Row 1: Name and Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
            Your Name <span className="text-terracotta-500">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Amina Umutoni"
            className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm text-stone-900 bg-white placeholder-stone-400 focus:outline-none focus:border-stone-900"
          />
        </div>

        <div>
          <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
            Email Address <span className="text-terracotta-500">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="amina@example.org"
            className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm text-stone-900 bg-white placeholder-stone-400 focus:outline-none focus:border-stone-900"
          />
        </div>
      </div>

      {/* Row 2: Organization & Audience Persona */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="contact-org" className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
            Organization / University
          </label>
          <input
            id="contact-org"
            name="organization"
            type="text"
            value={formData.organization}
            onChange={handleChange}
            placeholder="Kigali Innovation Hub"
            className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm text-stone-900 bg-white placeholder-stone-400 focus:outline-none focus:border-stone-900"
          />
        </div>

        <div>
          <label htmlFor="contact-audience" className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
            You Are Engaging As <span className="text-terracotta-500">*</span>
          </label>
          <select
            id="contact-audience"
            name="audience"
            value={formData.audience}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm text-stone-900 bg-white focus:outline-none focus:border-stone-900"
          >
            <option value="youth">Youth Innovator / Researcher</option>
            <option value="organization">Government / NGO Client</option>
            <option value="partner">Funder / Strategic Partner</option>
            <option value="media">Media / General Inquiry</option>
          </select>
        </div>
      </div>

      {/* Row 3: Subject */}
      <div>
        <label htmlFor="contact-subject" className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
          Subject / Inquiry Topic
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          value={formData.subject}
          onChange={handleChange}
          placeholder="e.g. Applied Research Service or Fellowship"
          className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm text-stone-900 bg-white placeholder-stone-400 focus:outline-none focus:border-stone-900"
        />
      </div>

      {/* Row 4: Message */}
      <div>
        <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
          Message <span className="text-terracotta-500">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Provide background, proposed collaboration, or specific question..."
          className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm text-stone-900 bg-white placeholder-stone-400 focus:outline-none focus:border-stone-900 leading-relaxed"
        />
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-pill text-xs font-semibold bg-stone-900 text-white hover:bg-stone-800 disabled:opacity-60 transition-colors"
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
