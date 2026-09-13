import React from 'react';
import Link from 'next/link';

interface PriceBlockProps {
  productName: string;
  subtitle?: string;
  price?: string;
  disclaimer?: string;
  className?: string;
}

export const PriceBlock: React.FC<PriceBlockProps> = ({
  productName,
  subtitle = 'COMMERCIAL SPECIFICATIONS & PRICING',
  price = 'Price Upon Request',
  disclaimer = 'Custom commercial quotations provided based on project volume, site topography, civil foundation requirements, and destination logistics.',
  className = '',
}) => {
  return (
    <div className={"border border-champagne/25 bg-charcoal-400/85 backdrop-blur-md p-5 sm:p-7 md:p-8 relative " + className}>
      <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-champagne/50 to-transparent" />
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 sm:gap-6">
        <div>
          <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.25em] text-champagne block mb-1">
            {productName} • {subtitle}
          </span>
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-2xl sm:text-3xl lg:text-4xl text-ivory tracking-tight">
              {price}
            </span>
          </div>
        </div>
        <div className="max-w-md flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <p className="text-xs text-stone-warm/80 font-sans font-light leading-relaxed flex-grow">
            {disclaimer}
          </p>
          <Link
            href="/contact"
            className="flex-shrink-0 inline-flex items-center justify-center px-4 py-2.5 bg-champagne text-charcoal font-sans text-[11px] font-medium tracking-wider uppercase hover:bg-ivory transition-colors duration-200"
          >
            Request Quote
          </Link>
        </div>
      </div>
    </div>
  );
};
