'use client';

import React from 'react';
import { Button } from './Button';
import Image from 'next/image';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  bgVariant?: 'charcoal' | 'charcoal-400';
}

export const CTASection: React.FC<CTASectionProps> = ({
  title = 'YOUR NEXT DESTINATION STARTS HERE.',
  subtitle = 'Planning a resort, retreat, farmhouse or hospitality project? Talk to the NIVA team about your location, project and accommodation requirements.',
  ctaText = 'REQUEST A QUOTE',
  bgVariant = 'charcoal',
}) => {
  return (
    <section className={"relative py-20 sm:py-24 md:py-32 px-4 sm:px-6 md:px-10 overflow-hidden " + (bgVariant === 'charcoal-400' ? 'bg-charcoal-400' : 'bg-charcoal')}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(91,58,28,0.25)_0%,rgba(15,10,6,0.9)_70%)] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-champagne/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-champagne/30 to-transparent" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center justify-center mb-5 sm:mb-6">
          <div className="relative w-14 h-8 sm:w-18 sm:h-10 opacity-90">
            <Image src="/brand/niva-emblem.png" alt="NIVA Emblem" fill className="object-contain" />
          </div>
        </div>

        <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.28em] sm:tracking-[0.35em] text-champagne block mb-3 sm:mb-4">
          NIVA • ELEVATED LIVING
        </span>

        <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-ivory font-normal leading-tight tracking-wide mb-5 sm:mb-6">
          {title}
        </h2>

        <p className="text-stone-warm text-xs sm:text-sm md:text-base font-light max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed font-sans">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full max-w-md mx-auto">
          <Button href="/contact" variant="primary" size="lg" className="w-full sm:w-auto">
            {ctaText}
          </Button>
          <Button href="/why-niva" variant="outline" size="lg" className="w-full sm:w-auto">
            WHY NIVA
          </Button>
        </div>
      </div>
    </section>
  );
};
