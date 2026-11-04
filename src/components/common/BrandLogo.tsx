'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface BrandLogoProps {
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
}) => {
  return (
    <Link
      href="/"
      className={"inline-flex items-center gap-2.5 sm:gap-3 group transition-opacity duration-300 hover:opacity-90 flex-shrink-0 " + className}
      aria-label="NIVA Elevated Living Home"
    >
      <div className="relative w-9 h-6 sm:w-11 sm:h-7 flex-shrink-0">
        <Image
          src="/brand/niva-emblem.png"
          alt="NIVA Emblem"
          fill
          sizes="50px"
          className="object-contain filter drop-shadow-[0_2px_8px_rgba(217,160,91,0.35)] transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col">
        <span className="font-serif text-lg sm:text-xl md:text-2xl font-normal tracking-[0.25em] sm:tracking-[0.28em] text-ivory leading-none group-hover:text-champagne transition-colors duration-300">
          NIVA
        </span>
        <span className="text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.28em] sm:tracking-[0.32em] text-champagne uppercase font-sans font-light mt-0.5 sm:mt-1">
          ELEVATED LIVING
        </span>
      </div>
    </Link>
  );
};
