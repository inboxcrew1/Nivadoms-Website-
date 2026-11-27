'use client';

import React, { useState } from 'react';
import { Button } from '../common/Button';
import { CheckCircle2 } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    location: '',
    projectType: 'Resort',
    units: '1-3 Units',
    preferredModel: 'NIVA D1',
    message: '',
    honeypot: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.phone.trim()) {
      errs.phone = 'Phone Number is required';
    } else if (!/^[0-9+() -]{7,20}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid phone number';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.location.trim()) errs.location = 'Project Location is required';
    if (!formData.message.trim()) errs.message = 'Please provide details about your project';
    return errs;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
    if (serverError) setServerError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit inquiry. Please try again or email info@nivadoms.com.');
      }
      setIsSubmitted(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'An unexpected error occurred. Please contact info@nivadoms.com directly.';
      setServerError(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="border border-champagne/40 bg-charcoal-400 p-6 sm:p-10 md:p-12 text-center max-w-2xl mx-auto shadow-2xl relative animate-fade-in">
        <div className="w-14 h-14 sm:w-16 sm:h-16 border border-champagne bg-champagne/10 flex items-center justify-center text-champagne mx-auto mb-5 sm:mb-6">
          <CheckCircle2 size={30} />
        </div>
        <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.3em] text-champagne block mb-2">
          ENQUIRY RECEIVED
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-ivory font-normal mb-3 sm:mb-4">
          THANK YOU.
        </h3>
        <p className="text-stone-warm text-xs sm:text-sm md:text-base font-light leading-relaxed max-w-md mx-auto mb-6 sm:mb-8 font-sans">
          Your project enquiry has been received. The NIVA team will review your requirements and get back to you shortly.
        </p>
        <div className="mt-6">
          <Button variant="outline" size="sm" onClick={() => setIsSubmitted(false)} fullWidth className="sm:w-auto">
            SUBMIT ANOTHER ENQUIRY
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="border border-champagne/20 bg-charcoal-400/80 p-5 sm:p-8 md:p-12 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-5 sm:mb-6">
        <div>
          <label className="block text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.2em] text-champagne mb-1.5">Full Name *</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Vikramaditya Sharma"
            className={"w-full bg-charcoal-500 border " + (errors.fullName ? 'border-red-500' : 'border-white/15') + " text-ivory text-xs px-3.5 sm:px-4 py-3 sm:py-3.5 focus:border-champagne focus:outline-none transition-colors"}
          />
          {errors.fullName && <p className="text-red-400 text-[10px] mt-1">{errors.fullName}</p>}
        </div>
        <div>
          <label className="block text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.2em] text-champagne mb-1.5">Company / Resort Name</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="e.g. Highland Sanctuary Resorts"
            className="w-full bg-charcoal-500 border border-white/15 text-ivory text-xs px-3.5 sm:px-4 py-3 sm:py-3.5 focus:border-champagne focus:outline-none transition-colors"
          />
        </div>
        <div>
          <label className="block text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.2em] text-champagne mb-1.5">Phone Number *</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 85340 40174"
            className={"w-full bg-charcoal-500 border " + (errors.phone ? 'border-red-500' : 'border-white/15') + " text-ivory text-xs px-3.5 sm:px-4 py-3 sm:py-3.5 focus:border-champagne focus:outline-none transition-colors"}
          />
          {errors.phone && <p className="text-red-400 text-[10px] mt-1">{errors.phone}</p>}
        </div>
        <div>
          <label className="block text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.2em] text-champagne mb-1.5">Email Address *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="vikram@resort.com"
            className={"w-full bg-charcoal-500 border " + (errors.email ? 'border-red-500' : 'border-white/15') + " text-ivory text-xs px-3.5 sm:px-4 py-3 sm:py-3.5 focus:border-champagne focus:outline-none transition-colors"}
          />
          {errors.email && <p className="text-red-400 text-[10px] mt-1">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.2em] text-champagne mb-1.5">Project Location *</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="e.g. Coorg, Karnataka or Rishikesh, UK"
            className={"w-full bg-charcoal-500 border " + (errors.location ? 'border-red-500' : 'border-white/15') + " text-ivory text-xs px-3.5 sm:px-4 py-3 sm:py-3.5 focus:border-champagne focus:outline-none transition-colors"}
          />
          {errors.location && <p className="text-red-400 text-[10px] mt-1">{errors.location}</p>}
        </div>
        <div>
          <label className="block text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.2em] text-champagne mb-1.5">Project Type *</label>
          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="w-full bg-charcoal-500 border border-white/15 text-ivory text-xs px-3.5 sm:px-4 py-3 sm:py-3.5 focus:border-champagne focus:outline-none transition-colors cursor-pointer"
          >
            <option value="Resort">Luxury Resort</option>
            <option value="Farm Stay">Farm Stay / Agro-Tourism</option>
            <option value="Glamping Retreat">Glamping Retreat</option>
            <option value="Eco Sanctuary">Eco Nature Sanctuary</option>
            <option value="Private Estate">Private Estate / Farmhouse</option>
            <option value="Master Planned Development">Master Planned Development</option>
          </select>
        </div>
        <div>
          <label className="block text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.2em] text-champagne mb-1.5">Number of Units</label>
          <select
            name="units"
            value={formData.units}
            onChange={handleChange}
            className="w-full bg-charcoal-500 border border-white/15 text-ivory text-xs px-3.5 sm:px-4 py-3 sm:py-3.5 focus:border-champagne focus:outline-none transition-colors cursor-pointer"
          >
            <option value="1-2 Units">1 - 2 Units</option>
            <option value="3-5 Units">3 - 5 Units</option>
            <option value="6-10 Units">6 - 10 Units</option>
            <option value="10+ Units">10+ Units (Phased Rollout)</option>
          </select>
        </div>
        <div>
          <label className="block text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.2em] text-champagne mb-1.5">Preferred Model</label>
          <select
            name="preferredModel"
            value={formData.preferredModel}
            onChange={handleChange}
            className="w-full bg-charcoal-500 border border-white/15 text-ivory text-xs px-3.5 sm:px-4 py-3 sm:py-3.5 focus:border-champagne focus:outline-none transition-colors cursor-pointer"
          >
            <option value="NIVA D1">NIVA D1 (Elevated Luxury Cabin)</option>
            <option value="NIVA D2">NIVA D2 (Grounded Luxury Cabin)</option>
            <option value="Both / Mix">Combination of D1 & D2</option>
            <option value="Not Sure">Not Sure / Architectural Consultation</option>
          </select>
        </div>
      </div>
      <div className="mb-6 sm:mb-8">
        <label className="block text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.2em] text-champagne mb-1.5">Project Details & Site Requirements *</label>
        <textarea
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          placeholder="Please describe your land topography, timeline, vision, and any questions for the NIVA team."
          className={"w-full bg-charcoal-500 border " + (errors.message ? 'border-red-500' : 'border-white/15') + " text-ivory text-xs p-3.5 sm:p-4 focus:border-champagne focus:outline-none transition-colors"}
        />
        {errors.message && <p className="text-red-400 text-[10px] mt-1">{errors.message}</p>}
      </div>

      {/* Anti-spam honeypot (hidden from human users) */}
      <div className="hidden" aria-hidden="true">
        <input
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {serverError && (
        <div className="mb-6 p-4 border border-red-500/40 bg-red-950/30 text-red-300 text-xs font-sans rounded-sm">
          {serverError}
        </div>
      )}

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[10px] sm:text-[11px] text-stone-warm font-light font-sans text-center sm:text-left">All project information is treated with strict confidentiality.</p>
        <Button type="submit" variant="primary" size="lg" disabled={isSubmitting} fullWidth className="sm:w-auto">
          {isSubmitting ? 'PROCESSING...' : 'REQUEST A QUOTE'}
        </Button>
      </div>
    </form>
  );
};
