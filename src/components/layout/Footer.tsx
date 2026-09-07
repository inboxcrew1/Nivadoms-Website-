'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BRAND } from '@/data/brand';
import { Mail, Phone, MapPin, MessageCircle, ArrowRight, Leaf, Mountain, Trees, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subError, setSubError] = useState<string | null>(null);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubError(null);
    if (!email.trim() || !email.includes('@')) {
      setSubError('Please enter a valid email address.');
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to subscribe. Please try again.');
      }
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
      }, 2500);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Unable to subscribe. Please try again.';
      setSubError(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="relative w-full text-ivory overflow-hidden bg-[#0D0D0F] pt-20 sm:pt-28 lg:pt-32 pb-10 sm:pb-14 min-h-[820px] flex flex-col justify-between">
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          PANORAMIC ARCHITECTURAL BACKGROUND (HIGH QUALITY - UNCROPPED)
          HTML5 Picture element with native media queries:
          - Phone Mode (< 768px): High-resolution vertical portrait (1148x2560)
          - Desktop Mode (>= 768px): High-resolution wide panorama (2560x1105)
          Both span 100% width with natural aspect ratio anchored to the bottom.
          Zero "cover" cropping - all domes, mountains, and landscape details are 100% preserved.
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="absolute inset-x-0 bottom-0 z-0 pointer-events-none w-full overflow-hidden flex flex-col justify-end">
        <picture className="w-full block select-none">
          {/* Phone / Mobile (< 768px): Tall portrait composition (uncropped) */}
          <source
            media="(max-width: 767px)"
            type="image/webp"
            srcSet="/images/footer/niva-footer-mobile-hq.webp"
          />
          <source
            media="(max-width: 767px)"
            type="image/png"
            srcSet="/images/footer/niva-footer-mobile-hq.png"
          />

          {/* Desktop / Tablet (>= 768px): Wide panoramic composition (uncropped) */}
          <source
            media="(min-width: 768px)"
            type="image/webp"
            srcSet="/images/footer/niva-footer-desktop-hq.webp"
          />
          <source
            media="(min-width: 768px)"
            type="image/png"
            srcSet="/images/footer/niva-footer-desktop-hq.png"
          />

          {/* Fallback image: uncropped, natural aspect ratio, full width, high visibility */}
          <img
            src="/images/footer/niva-footer-desktop-hq.webp"
            alt="NIVA Architecture in Nature"
            className="w-full h-auto block object-contain object-bottom opacity-90 transition-opacity duration-500"
            loading="eager"
            decoding="async"
          />
        </picture>
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          PRECISION CONTRAST & VISIBILITY OVERLAYS
          1. Top transition: seamless blend from preceding section
          2. Full-height atmospheric scrim: allows the illuminated domes,
             river reflections, and night sky to be visibly appreciated,
             while guaranteeing 100% text readability across all devices.
          3. Bottom grounding: gentle anchor for copyright & legal links.
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* 1. Top smooth blend from charcoal background */}
      <div className="absolute inset-x-0 top-0 h-40 z-[1] bg-gradient-to-b from-[#0D0D0F] via-[#0D0D0F]/90 to-transparent pointer-events-none" aria-hidden="true" />

      {/* 2. Full-height calibrated contrast scrim: 
             Darker at top (80%) for crisp typography,
             luminous in middle (45%) so glowing domes & mountains shine through vividly,
             balanced at bottom (75%) for clean trust bar readability */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#0D0D0F]/80 via-[#0D0D0F]/45 to-[#0D0D0F]/75 pointer-events-none" aria-hidden="true" />

      {/* 3. Bottom anchor gradient */}
      <div className="absolute inset-x-0 bottom-0 h-28 z-[1] bg-gradient-to-t from-[#0D0D0F]/90 via-[#0D0D0F]/40 to-transparent pointer-events-none" aria-hidden="true" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 w-full flex-grow flex flex-col justify-between">
        {/* Top Multi-Column Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 lg:pb-18">
          {/* Left Brand Column */}
          <div className="sm:col-span-2 lg:col-span-4 flex flex-col items-start pr-0 lg:pr-8">
            <Link href="/" className="inline-flex items-center gap-3.5 group transition-opacity duration-300 hover:opacity-90" aria-label="NIVA Home">
              <div className="relative w-12 h-8 sm:w-14 sm:h-9 flex-shrink-0">
                <Image src="/brand/niva-emblem.png" alt="NIVA Emblem" fill sizes="60px" className="object-contain filter drop-shadow-[0_2px_12px_rgba(201,164,106,0.45)]" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl sm:text-3xl font-normal tracking-[0.28em] text-ivory leading-none drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">NIVA</span>
                <span className="text-[10px] tracking-[0.35em] text-champagne-light uppercase font-sans font-medium mt-1 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">ELEVATED LIVING</span>
              </div>
            </Link>
            <div className="w-20 h-[1px] bg-champagne/40 my-6" />
            <p className="text-stone-light text-xs sm:text-sm font-normal font-sans leading-relaxed max-w-sm mb-6 drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)]">
              Quiet luxury architectural accommodation engineered in India for destinations where nature is the experience.
            </p>
            <div className="pt-1">
              <span className="font-serif italic text-xl sm:text-2xl text-champagne-light tracking-wide font-normal block leading-tight select-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                &ldquo;Built for a Better Tomorrow&rdquo;
              </span>
            </div>
          </div>

          {/* Column 2: Accommodation */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-sans uppercase tracking-[0.25em] text-champagne-light mb-5 font-semibold drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">ACCOMMODATION</h4>
            <ul className="flex flex-col gap-3.5">
              {[
                { label: 'NIVA D1 (Elevated)', href: '/d1' },
                { label: 'NIVA D2 (Grounded)', href: '/d2' },
                { label: 'Design & Architecture', href: '/design' },
                { label: 'Visual Journal', href: '/projects' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} prefetch={true} className="group flex items-center text-xs text-stone-light hover:text-ivory font-normal transition-all duration-300 font-sans drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                    <span className="w-0 group-hover:w-2 h-[1px] bg-champagne mr-0 group-hover:mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    <span className="transform transition-transform duration-300 group-hover:translate-x-1 group-hover:text-champagne-light">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Applications */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-sans uppercase tracking-[0.25em] text-champagne-light mb-5 font-semibold drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">APPLICATIONS</h4>
            <ul className="flex flex-col gap-3.5">
              {[
                { label: 'Luxury Resorts', href: '/applications#resorts' },
                { label: 'Farm Stays & Orchards', href: '/applications#farm-stays' },
                { label: 'Glamping Retreats', href: '/applications#glamping-retreats' },
                { label: 'Eco Sanctuaries', href: '/applications#eco-retreats' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} prefetch={true} className="group flex items-center text-xs text-stone-light hover:text-ivory font-normal transition-all duration-300 font-sans drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                    <span className="w-0 group-hover:w-2 h-[1px] bg-champagne mr-0 group-hover:mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    <span className="transform transition-transform duration-300 group-hover:translate-x-1 group-hover:text-champagne-light">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-sans uppercase tracking-[0.25em] text-champagne-light mb-5 font-semibold drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">COMPANY</h4>
            <ul className="flex flex-col gap-3.5">
              {[
                { label: 'About NIVA', href: '/about', highlight: false },
                { label: 'Why NIVA', href: '/why-niva', highlight: false },
                { label: 'FAQ', href: '/faq', highlight: false },
                { label: 'Request a Quote', href: '/contact', highlight: true },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} prefetch={true} className={"group flex items-center text-xs transition-all duration-300 font-sans drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] " + (item.highlight ? "text-champagne-light font-semibold hover:text-gold-warm" : "text-stone-light hover:text-ivory font-normal")}>
                    <span className="w-0 group-hover:w-2 h-[1px] bg-champagne mr-0 group-hover:mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    <span className="transform transition-transform duration-300 group-hover:translate-x-1">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Get in Touch */}
          <div className="sm:col-span-2 lg:col-span-2 lg:pl-6 lg:border-l lg:border-champagne/20 flex flex-col justify-between">
            <div>
              <h4 className="text-[11px] font-sans uppercase tracking-[0.25em] text-champagne-light mb-5 font-semibold drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">GET IN TOUCH</h4>
              <div className="flex flex-col gap-3 font-sans text-xs">
                {/* Email row */}
                <div className="flex items-start gap-3 p-2.5 rounded-sm bg-[#0D0D0F]/70 backdrop-blur-sm border border-champagne/15 hover:border-champagne/40 transition-colors">
                  <div className="w-7 h-7 rounded-full border border-champagne/30 bg-champagne/10 flex items-center justify-center text-champagne flex-shrink-0 mt-0.5">
                    <Mail size={13} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-champagne-light/90 font-medium block">Email</span>
                    <a href={`mailto:${BRAND.contact.email}`} className="text-ivory hover:text-champagne-light transition-colors font-normal text-xs drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                      {BRAND.contact.email}
                    </a>
                  </div>
                </div>

                {/* Phone row */}
                <div className="flex items-start gap-3 p-2.5 rounded-sm bg-[#0D0D0F]/70 backdrop-blur-sm border border-champagne/15 hover:border-champagne/40 transition-colors">
                  <div className="w-7 h-7 rounded-full border border-champagne/30 bg-champagne/10 flex items-center justify-center text-champagne flex-shrink-0 mt-0.5">
                    <Phone size={13} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-champagne-light/90 font-medium block">Phone</span>
                    <a href={`tel:${BRAND.contact.phone.replace(/\s+/g, '')}`} className="text-ivory hover:text-champagne-light transition-colors font-normal text-xs drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                      {BRAND.contact.phone}
                    </a>
                  </div>
                </div>

                {/* WhatsApp row */}
                <div className="flex items-start gap-3 p-2.5 rounded-sm bg-[#0D0D0F]/70 backdrop-blur-sm border border-champagne/15 hover:border-champagne/40 transition-colors">
                  <div className="w-7 h-7 rounded-full border border-champagne/30 bg-champagne/10 flex items-center justify-center text-champagne flex-shrink-0 mt-0.5">
                    <MessageCircle size={13} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-champagne-light/90 font-medium block">WhatsApp</span>
                    <a href={BRAND.contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-champagne-light hover:text-gold-warm transition-colors font-medium text-xs drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                      {BRAND.contact.whatsapp}
                    </a>
                  </div>
                </div>

                {/* Manufacturing & Location row */}
                <div className="flex items-start gap-3 p-2.5 rounded-sm bg-[#0D0D0F]/70 backdrop-blur-sm border border-champagne/15">
                  <div className="w-7 h-7 rounded-full border border-champagne/30 bg-champagne/10 flex items-center justify-center text-champagne flex-shrink-0 mt-0.5">
                    <MapPin size={13} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-champagne-light/90 font-medium block">Manufacturing Entity</span>
                    <span className="text-ivory font-normal text-xs block drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">MAA BRIJESHWARI ENGINEERING</span>
                    <span className="text-stone-light/90 font-normal text-[11px] block">Bulandshahar, UP • ISO 9001:2015</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-5">
              <div className="flex items-center gap-2.5">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="NIVA on Instagram" className="w-9 h-9 rounded-full border border-champagne/30 bg-[#0D0D0F]/70 backdrop-blur-sm flex items-center justify-center text-stone-light hover:bg-champagne hover:text-charcoal hover:border-champagne transition-all duration-300 hover:scale-105 shadow-md">
                  <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="NIVA on LinkedIn" className="w-9 h-9 rounded-full border border-champagne/30 bg-[#0D0D0F]/70 backdrop-blur-sm flex items-center justify-center text-stone-light hover:bg-champagne hover:text-charcoal hover:border-champagne transition-all duration-300 hover:scale-105 shadow-md">
                  <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="NIVA on YouTube" className="w-9 h-9 rounded-full border border-champagne/30 bg-[#0D0D0F]/70 backdrop-blur-sm flex items-center justify-center text-stone-light hover:bg-champagne hover:text-charcoal hover:border-champagne transition-all duration-300 hover:scale-105 shadow-md">
                  <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stay Connected Section - Luxury Frosted Showcase Card */}
        <div className="my-8 sm:my-10 p-6 sm:p-8 rounded-sm bg-[#0D0D0F]/75 backdrop-blur-md border border-champagne/25 shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8">
            <div className="max-w-md">
              <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-champagne-light block mb-1.5 font-semibold drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)]">STAY CONNECTED</span>
              <p className="text-stone-light text-xs sm:text-sm font-normal font-sans leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                Get updates on new designs, destinations and stories from the world of elevated living.
              </p>
            </div>
            <div className="w-full lg:max-w-md">
              {subscribed ? (
                <div className="flex items-center gap-2.5 bg-champagne/15 border border-champagne/45 px-4 py-3 text-champagne-light text-xs font-sans rounded-sm shadow-md">
                  <Check size={16} />
                  <span className="font-medium">Thank you for subscribing to the NIVA journal.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                  <div className="flex flex-col sm:flex-row items-stretch gap-2.5">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      autoComplete="email"
                      className="flex-grow bg-[#0D0D0F]/90 backdrop-blur-sm border border-champagne/30 focus:border-champagne text-ivory text-xs px-4 py-3 placeholder:text-stone-light/50 focus:outline-none transition-colors rounded-sm"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group bg-champagne hover:bg-gold-warm disabled:opacity-60 text-charcoal font-sans font-semibold text-xs px-6 py-3 transition-all duration-300 flex items-center justify-center gap-2 flex-shrink-0 rounded-sm shadow-md"
                    >
                      <span>{isSubmitting ? 'SUBSCRIBING...' : 'SUBSCRIBE'}</span>
                      <ArrowRight size={14} className="transform transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                  {subError && (
                    <p className="text-[11px] text-red-400 font-sans mt-0.5">{subError}</p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Brand / Trust Bar */}
        <div className="pt-8 border-t border-champagne/20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 text-xs text-stone-light font-sans">
            <div className="text-center lg:text-left text-xs font-normal">
              <p className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.85)]">© {BRAND.foundedYear} NIVA. All Rights Reserved. NIVA DOMS.</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
              <div className="flex items-center gap-2 p-1.5 px-3 rounded-sm bg-[#0D0D0F]/60 backdrop-blur-sm border border-champagne/15 text-stone-light shadow-sm">
                <Leaf size={15} className="text-champagne-light flex-shrink-0 stroke-[1.5]" />
                <div className="text-[10px] uppercase tracking-wider font-normal leading-tight text-left">
                  <span className="block text-ivory font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">SUSTAINABLE</span>
                  <span className="block text-champagne-light font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">BY DESIGN</span>
                </div>
              </div>
              <div className="flex items-center gap-2 p-1.5 px-3 rounded-sm bg-[#0D0D0F]/60 backdrop-blur-sm border border-champagne/15 text-stone-light shadow-sm">
                <Mountain size={15} className="text-champagne-light flex-shrink-0 stroke-[1.5]" />
                <div className="text-[10px] uppercase tracking-wider font-normal leading-tight text-left">
                  <span className="block text-ivory font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">MADE</span>
                  <span className="block text-champagne-light font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">IN INDIA</span>
                </div>
              </div>
              <div className="flex items-center gap-2 p-1.5 px-3 rounded-sm bg-[#0D0D0F]/60 backdrop-blur-sm border border-champagne/15 text-stone-light shadow-sm">
                <Trees size={15} className="text-champagne-light flex-shrink-0 stroke-[1.5]" />
                <div className="text-[10px] uppercase tracking-wider font-normal leading-tight text-left">
                  <span className="block text-ivory font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">INSPIRED</span>
                  <span className="block text-champagne-light font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">BY NATURE</span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-5 text-xs">
              <div className="flex items-center gap-1.5">
                <span className="font-normal text-stone-light drop-shadow-[0_1px_2px_rgba(0,0,0,0.85)]">Designed &amp; Developed by</span>
                <a href="https://www.inboxcrew.in" target="_blank" rel="noopener noreferrer" className="text-champagne-light hover:text-gold-warm font-semibold tracking-wider underline underline-offset-4 decoration-champagne/60 hover:decoration-champagne transition-colors drop-shadow-[0_1px_2px_rgba(0,0,0,0.85)]">inboxcrew</a>
              </div>
              <span className="text-white/30 hidden sm:inline">•</span>
              <div className="flex items-center gap-4">
                <Link href="/privacy" prefetch={true} className="text-stone-light hover:text-champagne-light transition-colors font-normal drop-shadow-[0_1px_2px_rgba(0,0,0,0.85)]">Privacy Policy</Link>
                <Link href="/terms" prefetch={true} className="text-stone-light hover:text-champagne-light transition-colors font-normal drop-shadow-[0_1px_2px_rgba(0,0,0,0.85)]">Terms &amp; Conditions</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
