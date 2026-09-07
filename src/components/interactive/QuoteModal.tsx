'use client';

import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { Button } from '../common/Button';
import Image from 'next/image';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultModel?: 'NIVA D1' | 'NIVA D2' | 'Both';
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  defaultModel = 'NIVA D1',
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    location: '',
    model: defaultModel,
    units: '1-2 Units',
    projectType: 'Luxury Resort',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState<string | null>(null);

  useEffect(() => {
    setFormData((prev) => ({ ...prev, model: defaultModel }));
  }, [defaultModel]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.phone.trim()) errs.phone = 'Phone number is required';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid email is required';
    if (!formData.location.trim()) errs.location = 'Project location is required';
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          location: formData.location,
          preferredModel: formData.model,
          units: formData.units,
          projectType: formData.projectType,
          notes: formData.notes,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit quote request. Please try again.');
      }
      setIsSubmitted(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'An unexpected error occurred. Please contact info@nivadoms.com directly.';
      setServerError(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-10 animate-fade-in overflow-y-auto">
      <div
        className="fixed inset-0 bg-charcoal/90 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />
      <div className="relative z-10 w-full max-w-2xl bg-charcoal-400 border border-champagne/40 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden max-h-[92vh] flex flex-col my-auto">
        <div className="h-[2px] bg-gradient-to-r from-transparent via-champagne to-transparent" />
        
        <div className="p-5 sm:p-7 md:p-8 border-b border-champagne/15 flex items-center justify-between bg-charcoal-500/90">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 flex-shrink-0">
              <Image src="/brand/niva-emblem.png" alt="NIVA Emblem" fill className="object-contain" />
            </div>
            <div>
              <span className="text-[9px] sm:text-[10px] font-sans uppercase tracking-[0.25em] sm:tracking-[0.3em] text-champagne block">
                NIVA ARCHITECTURAL QUOTATION
              </span>
              <h3 className="font-serif text-lg sm:text-xl md:text-2xl text-ivory">
                REQUEST A PROJECT QUOTE
              </h3>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-10 h-10 border border-white/15 flex items-center justify-center text-stone-warm hover:text-champagne hover:border-champagne transition-colors flex-shrink-0"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-5 sm:p-7 md:p-8 overflow-y-auto flex-grow">
          {isSubmitted ? (
            <div className="py-8 sm:py-12 text-center space-y-5 sm:space-y-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 border border-champagne bg-champagne/10 flex items-center justify-center text-champagne mx-auto">
                <CheckCircle2 size={32} />
              </div>
              <span className="text-[11px] sm:text-xs font-sans uppercase tracking-[0.3em] text-champagne block">
                COMMERCIAL INQUIRY REGISTERED
              </span>
              <h4 className="font-serif text-2xl sm:text-3xl text-ivory">THANK YOU</h4>
              <p className="text-stone-warm text-xs sm:text-sm font-light max-w-md mx-auto leading-relaxed font-sans">
                Your quote request for <strong className="text-ivory">{formData.model}</strong> has been logged. Our hospitality architecture consultants will contact you within 24 hours with site planning details.
              </p>
              <div className="pt-3">
                <Button variant="primary" size="md" onClick={onClose} fullWidth className="sm:w-auto">
                  CLOSE WINDOW
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="bg-charcoal-500/90 border border-champagne/25 p-3.5 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-stone-warm">
                <div className="flex items-center gap-2">
                  <Sparkles size={16} className="text-champagne flex-shrink-0" />
                  <span>Public Base Selling Price: <strong className="text-ivory font-serif text-sm ml-1">From ₹5,20,000 / Unit</strong></span>
                </div>
                <span className="text-[10px] text-champagne tracking-widest uppercase">Verified Standard</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label className="block text-[10px] font-sans uppercase tracking-[0.2em] text-champagne mb-1">
                    Select Cabin Model *
                  </label>
                  <select
                    value={formData.model}
                    onChange={(e) => setFormData({ ...formData, model: e.target.value as 'NIVA D1' | 'NIVA D2' | 'Both' })}
                    className="w-full bg-charcoal-500 border border-white/15 text-ivory text-xs px-3.5 py-3 focus:border-champagne focus:outline-none"
                  >
                    <option value="NIVA D1">NIVA D1 (Elevated Luxury Cabin - ₹6,00,000)</option>
                    <option value="NIVA D2">NIVA D2 (Grounded Luxury Cabin - ₹5,20,000)</option>
                    <option value="Both">Combination of D1 & D2</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-sans uppercase tracking-[0.2em] text-champagne mb-1">
                    Estimated Quantity
                  </label>
                  <select
                    value={formData.units}
                    onChange={(e) => setFormData({ ...formData, units: e.target.value })}
                    className="w-full bg-charcoal-500 border border-white/15 text-ivory text-xs px-3.5 py-3 focus:border-champagne focus:outline-none"
                  >
                    <option value="1 Unit">1 Unit (Private Estate / Pilot)</option>
                    <option value="2-4 Units">2 - 4 Units (Boutique Resort)</option>
                    <option value="5-10 Units">5 - 10 Units (Resort Expansion)</option>
                    <option value="10+ Units">10+ Units (Destination Master Plan)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label className="block text-[10px] font-sans uppercase tracking-[0.2em] text-champagne mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Ananya Roy"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className={`w-full bg-charcoal-500 border ${errors.fullName ? 'border-red-500' : 'border-white/15'} text-ivory text-xs px-3.5 py-3 focus:border-champagne focus:outline-none`}
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-sans uppercase tracking-[0.2em] text-champagne mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 95361 71380"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full bg-charcoal-500 border ${errors.phone ? 'border-red-500' : 'border-white/15'} text-ivory text-xs px-3.5 py-3 focus:border-champagne focus:outline-none`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label className="block text-[10px] font-sans uppercase tracking-[0.2em] text-champagne mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="ananya@resort.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full bg-charcoal-500 border ${errors.email ? 'border-red-500' : 'border-white/15'} text-ivory text-xs px-3.5 py-3 focus:border-champagne focus:outline-none`}
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-sans uppercase tracking-[0.2em] text-champagne mb-1">
                    Project Location *
                  </label>
                  <input
                    type="text"
                    placeholder="City, State (e.g. Manali, HP)"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className={`w-full bg-charcoal-500 border ${errors.location ? 'border-red-500' : 'border-white/15'} text-ivory text-xs px-3.5 py-3 focus:border-champagne focus:outline-none`}
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-sans uppercase tracking-[0.2em] text-champagne mb-1">
                  Specific Project Notes
                </label>
                <textarea
                  rows={2}
                  placeholder="Mention land topography, target timeline, or special amenities..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-charcoal-500 border border-white/15 text-ivory text-xs p-3 focus:border-champagne focus:outline-none"
                />
              </div>

              {serverError && (
                <div className="p-3.5 border border-red-500/40 bg-red-950/30 text-red-300 text-xs font-sans rounded-sm">
                  {serverError}
                </div>
              )}

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <div className="flex items-center gap-2 text-[10px] text-stone-warm">
                  <ShieldCheck size={14} className="text-champagne flex-shrink-0" />
                  <span>Strict Commercial Confidentiality</span>
                </div>
                <Button type="submit" variant="primary" size="md" disabled={isSubmitting} fullWidth className="sm:w-auto">
                  {isSubmitting ? 'GENERATING QUOTE...' : 'SUBMIT QUOTE REQUEST'}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
