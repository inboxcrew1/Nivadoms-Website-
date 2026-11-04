'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';

interface GalleryItem {
  src: string;
  caption: string;
  alt: string;
}

interface ProductGalleryProps {
  items: GalleryItem[];
  title?: string;
  className?: string;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({
  items,
  title = 'ARCHITECTURAL VISUAL TOUR',
  className = '',
}) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const nextImage = useCallback(() => {
    setActiveIdx((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const prevImage = useCallback(() => {
    setActiveIdx((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') setLightboxOpen(false);
    };
    if (lightboxOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [lightboxOpen, nextImage, prevImage]);

  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxOpen]);

  if (!items || items.length === 0) return null;

  const currentItem = items[activeIdx];

  return (
    <>
      <div className={"py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto " + className}>
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.28em] sm:tracking-[0.35em] text-champagne block mb-2 sm:mb-3">
            EXTERIOR & INTERIOR PERSPECTIVES
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-ivory font-normal tracking-wide">
            {title}
          </h2>
        </div>

        {/* Main Display Stage */}
        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9] w-full border border-champagne/25 overflow-hidden mb-4 sm:mb-6 bg-charcoal-500 rounded-sm shadow-2xl group">
          <Image
            src={currentItem.src}
            alt={currentItem.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 95vw, 1200px"
            className="object-cover object-center transition-opacity duration-300"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent pointer-events-none" />

          {/* Touch / Click Navigation Arrows */}
          <button
            type="button"
            onClick={prevImage}
            className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-charcoal/80 backdrop-blur-md border border-champagne/30 text-ivory flex items-center justify-center hover:bg-champagne hover:text-charcoal transition-all duration-300 z-20 focus:outline-none"
            aria-label="Previous image"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            type="button"
            onClick={nextImage}
            className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-charcoal/80 backdrop-blur-md border border-champagne/30 text-ivory flex items-center justify-center hover:bg-champagne hover:text-charcoal transition-all duration-300 z-20 focus:outline-none"
            aria-label="Next image"
          >
            <ChevronRight size={22} />
          </button>

          {/* Fullscreen Expand Button */}
          <button
            type="button"
            onClick={() => setLightboxOpen(true)}
            className="absolute top-3 sm:top-5 right-3 sm:right-5 px-3 py-1.5 rounded-sm bg-charcoal/85 backdrop-blur-md border border-champagne/30 text-ivory hover:text-champagne hover:border-champagne text-[11px] font-sans tracking-wider flex items-center gap-1.5 transition-all duration-300 z-20"
            aria-label="Open fullscreen image view"
          >
            <Maximize2 size={14} className="text-champagne" />
            <span className="hidden sm:inline">EXPAND VIEW</span>
          </button>

          {/* Active Counter & Caption */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 z-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <div className="bg-charcoal/90 backdrop-blur-md p-3.5 sm:p-5 border-l-2 border-champagne max-w-2xl">
                <span className="text-[9px] sm:text-[10px] font-sans uppercase tracking-[0.25em] text-champagne block mb-1">
                  PERSPECTIVE {activeIdx + 1} OF {items.length}
                </span>
                <p className="text-xs sm:text-sm font-serif text-ivory leading-relaxed">
                  {currentItem.caption}
                </p>
              </div>

              <div className="hidden sm:flex items-center gap-1.5 bg-charcoal/85 backdrop-blur-md px-3 py-1.5 border border-champagne/20 text-xs font-sans text-stone-warm self-end">
                <span className="text-champagne font-medium">{activeIdx + 1}</span>
                <span>/</span>
                <span>{items.length}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail Selector Strip (Lightweight lazy previews) */}
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-7 gap-2 sm:gap-3">
          {items.map((item, idx) => {
            const isActive = activeIdx === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveIdx(idx)}
                className={`relative aspect-[4/3] border overflow-hidden transition-all duration-300 rounded-sm ${
                  isActive
                    ? 'border-champagne ring-2 ring-champagne/60 scale-[0.98] opacity-100 shadow-[0_0_15px_rgba(217,160,91,0.4)]'
                    : 'border-white/15 opacity-60 hover:opacity-100 hover:border-champagne/40'
                }`}
                aria-label={`Select photo ${idx + 1}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 25vw, (max-width: 1024px) 16vw, 150px"
                  className="object-cover object-center"
                  loading="lazy"
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Interactive Lightbox Modal (Loaded On-Demand) */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[120] bg-charcoal/98 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-8 animate-fade-in">
          {/* Header Bar */}
          <div className="flex items-center justify-between z-20 pb-4 border-b border-champagne/20">
            <div className="flex items-center gap-3">
              <span className="text-xs font-sans uppercase tracking-[0.25em] text-champagne font-medium">
                NIVA ARCHITECTURAL RETROSPECTIVE
              </span>
              <span className="text-xs text-stone-warm">
                ({activeIdx + 1} of {items.length})
              </span>
            </div>

            <button
              type="button"
              onClick={() => setLightboxOpen(false)}
              className="w-10 h-10 border border-white/20 flex items-center justify-center text-ivory hover:text-champagne hover:border-champagne transition-colors rounded-sm"
              aria-label="Close fullscreen view"
            >
              <X size={20} />
            </button>
          </div>

          {/* Centered High-Resolution Image Canvas */}
          <div className="relative flex-grow flex items-center justify-center my-4 overflow-hidden">
            <div className="relative w-full h-full max-w-6xl max-h-[75vh]">
              <Image
                src={currentItem.src}
                alt={currentItem.alt}
                fill
                sizes="100vw"
                className="object-contain object-center"
                priority
              />
            </div>

            <button
              type="button"
              onClick={prevImage}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-charcoal/80 border border-champagne/40 text-ivory flex items-center justify-center hover:bg-champagne hover:text-charcoal transition-all z-20"
              aria-label="Previous photo"
            >
              <ChevronLeft size={26} />
            </button>

            <button
              type="button"
              onClick={nextImage}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-charcoal/80 border border-champagne/40 text-ivory flex items-center justify-center hover:bg-champagne hover:text-charcoal transition-all z-20"
              aria-label="Next photo"
            >
              <ChevronRight size={26} />
            </button>
          </div>

          {/* Footer Caption */}
          <div className="text-center max-w-3xl mx-auto pt-4 border-t border-white/10 z-20">
            <p className="text-sm sm:text-base font-serif text-ivory leading-relaxed">
              {currentItem.caption}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
