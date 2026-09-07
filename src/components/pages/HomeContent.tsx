'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Button } from '@/components/common/Button';
import { SectionHeading } from '@/components/common/SectionHeading';
import { CTASection } from '@/components/common/CTASection';
import { PRODUCTS } from '@/data/products';
import { APPLICATIONS } from '@/data/applications';
import { ArrowRight, Bed, Bath, Wind, Tv, Sparkles, Compass, Check } from 'lucide-react';

const QuoteModal = dynamic(() => import('@/components/interactive/QuoteModal').then((mod) => mod.QuoteModal), {
  ssr: false,
});

export const HomeContent: React.FC = () => {
  const d1 = PRODUCTS.d1;
  const d2 = PRODUCTS.d2;
  const [activeFeature, setActiveFeature] = useState(0);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState<'NIVA D1' | 'NIVA D2'>('NIVA D1');

  const interiorFeatures = [
    { label: 'QUEEN-SIZE BED', icon: Bed, desc: 'Ergonomic hospitality suite sleeping environment designed for two with integrated headboard LED illumination.', tag: 'HOSPITALITY SUITE' },
    { label: 'PRIVATE BATHROOM', icon: Bath, desc: 'Full ensuite bathroom featuring a glass shower enclosure, premium Western toilet, vanity mirror, and instant hot water provision.', tag: 'PRIVATE ENSUITE' },
    { label: 'AIR CONDITIONING', icon: Wind, desc: 'Quiet inverter split climate control system engineered for all-weather outdoor temperatures.', tag: 'CLIMATE CONTROL' },
    { label: 'SMART TV & MEDIA', icon: Tv, desc: 'Wall-mounted entertainment center with concealed wiring, spatial audio capability, and luxury hospitality wall panelling.', tag: 'ENTERTAINMENT' },
    { label: 'AMBIENT LIGHTING', icon: Sparkles, desc: 'Warm architectural cove lighting and dimmable accent strips creating an inviting nocturnal atmosphere.', tag: 'ARCHITECTURAL LIGHT' },
    { label: 'BAKELITE INTERIORS', icon: Compass, desc: '12-14 mm wood-colour Bakelite sheet panelling with thermal acoustic insulation and safety locking arrangement.', tag: 'PREMIUM FINISH' },
  ];

  const openQuoteFor = (model: 'NIVA D1' | 'NIVA D2') => {
    setSelectedModel(model);
    setQuoteModalOpen(true);
  };

  const d1Img = d1.gallery && d1.gallery.length > 0 ? d1.gallery[0].src : '/images/products/d1-twin-river.jpg';
  const d2Img = d2.gallery && d2.gallery.length > 0 ? d2.gallery[0].src : '/images/products/d2-brand-sign.jpg';

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. HERO SECTION (LCP Priority) */}
      <section className="relative min-h-[90vh] sm:min-h-screen flex flex-col justify-between pt-24 sm:pt-28 pb-8 sm:pb-12 px-4 sm:px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/products/d2-hero-twilight.jpg"
            alt="NIVA D2 Luxury Dome Cabins Illuminated on Timber Deck at Twilight in Indian Mountain Resort"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
            className="object-cover object-center scale-105 transition-transform duration-[10000ms] hover:scale-100"
            priority
            fetchPriority="high"
            quality={75}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/65 to-charcoal/40" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(13,13,15,0.75)_100%)]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center mt-12 sm:mt-20 md:mt-24 my-auto">
          <div className="inline-flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6 bg-charcoal/70 backdrop-blur-md px-3.5 sm:px-4 py-1.5 border border-champagne/30 rounded-full shimmer-badge">
            <span className="h-[6px] w-[6px] rounded-full bg-champagne animate-pulse flex-shrink-0"></span>
            <span className="text-[9px] sm:text-[11px] font-sans uppercase tracking-[0.25em] sm:tracking-[0.35em] text-champagne font-medium">
              LUXURY DOME CABINS & RESORT PODS INDIA
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-ivory font-normal tracking-wide leading-[1.1] mb-4 sm:mb-6 drop-shadow-2xl">
            A NEW WAY TO STAY.
          </h1>

          <p className="text-stone-warm text-sm sm:text-base md:text-lg font-light max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed font-sans text-balance px-2">
            Elevated hospitality architecture and prefabricated luxury dome cabins designed in India for experiential resorts, eco retreats, and private sanctuaries.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-md mb-6 sm:mb-8">
            <Button href="/d1" variant="primary" size="lg" className="w-full sm:w-auto shadow-2xl">
              EXPLORE NIVA D1
            </Button>
            <Button href="/d2" variant="outline" size="lg" className="w-full sm:w-auto">
              EXPLORE NIVA D2
            </Button>
          </div>
        </div>

        {/* Floating Stats Strip */}
        <div className="relative z-10 max-w-6xl mx-auto w-full pt-4 sm:pt-6">
          <div className="glass-card p-3.5 sm:p-5 md:p-6 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-center divide-y sm:divide-y-0 sm:divide-x divide-champagne/15 border-champagne/30">
            <div className="p-2">
              <span className="font-serif text-lg sm:text-2xl md:text-3xl text-champagne block font-normal">14 FT NOMINAL</span>
              <span className="text-[8px] sm:text-[10px] md:text-[11px] tracking-[0.2em] sm:tracking-[0.25em] text-stone-warm uppercase font-sans mt-0.5 sm:mt-1 block">APPROX. 13.5 FT FOOTPRINT</span>
            </div>
            <div className="p-2">
              <span className="font-serif text-lg sm:text-2xl md:text-3xl text-ivory block font-normal">QUEEN SUITE</span>
              <span className="text-[8px] sm:text-[10px] md:text-[11px] tracking-[0.2em] sm:tracking-[0.25em] text-stone-warm uppercase font-sans mt-0.5 sm:mt-1 block">ATTACHED ENSUITE BATH</span>
            </div>
            <div className="p-2 pt-3 sm:pt-2">
              <span className="font-serif text-lg sm:text-2xl md:text-3xl text-gold-warm block font-normal">FROM ₹5,20,000</span>
              <span className="text-[8px] sm:text-[10px] md:text-[11px] tracking-[0.2em] sm:tracking-[0.25em] text-stone-warm uppercase font-sans mt-0.5 sm:mt-1 block">PUBLIC BASE PRICING</span>
            </div>
            <div className="p-2 pt-3 sm:pt-2">
              <span className="font-serif text-lg sm:text-2xl md:text-3xl text-ivory block font-normal">BAKELITE FINISH</span>
              <span className="text-[8px] sm:text-[10px] md:text-[11px] tracking-[0.2em] sm:tracking-[0.25em] text-stone-warm uppercase font-sans mt-0.5 sm:mt-1 block">IRON / STEEL FRAME</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECTION 2: BRAND PHILOSOPHY */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-10 bg-charcoal relative">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading
            eyebrow="BRAND PHILOSOPHY"
            title="THE SPACE BETWEEN ARCHITECTURE AND NATURE."
            description="NIVA creates distinctive modular accommodation spaces where structural elegance, hospitality comfort and landscape harmony converge across India."
            align="center"
          />
          <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 text-left">
            <div className="glass-card p-5 sm:p-6 border-champagne/20">
              <div className="text-champagne font-serif text-2xl mb-2 sm:mb-3">01</div>
              <h3 className="font-serif text-lg text-ivory mb-2">Elevated Presence</h3>
              <p className="text-stone-warm text-xs font-light leading-relaxed font-sans">Perched on 3 primary elevated supports (UHM pipe concept), minimizing ground footprint while delivering 360-degree panoramic nature views across hills and valleys.</p>
            </div>
            <div className="glass-card p-5 sm:p-6 border-champagne/20">
              <div className="text-champagne font-serif text-2xl mb-2 sm:mb-3">02</div>
              <h3 className="font-serif text-lg text-ivory mb-2">Resort-Grade Comfort</h3>
              <p className="text-stone-warm text-xs font-light leading-relaxed font-sans">Air-conditioned guest room with private Western ensuite bathroom, instant hot water, smart TV, and 12-14 mm wood-colour Bakelite interior panelling.</p>
            </div>
            <div className="glass-card p-5 sm:p-6 border-champagne/20">
              <div className="text-champagne font-serif text-2xl mb-2 sm:mb-3">03</div>
              <h3 className="font-serif text-lg text-ivory mb-2">Scalable Capital</h3>
              <p className="text-stone-warm text-xs font-light leading-relaxed font-sans">Transparent base pricing from ₹5,20,000 to ₹6,00,000 per unit allows rapid resort expansion without heavy, prolonged civil construction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DUAL PRODUCT SHOWCASE (Lazy Load Below Fold) */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-10 bg-charcoal-400/50 relative border-t border-b border-champagne/15">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="ACCOMMODATION MODELS"
            title="TWO ARCHITECTURAL EXPRESSIONS."
            description="Select the elevated model for dramatic topography or the grounded model for seamless garden integration."
            align="center"
            className="mb-10 sm:mb-16"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* D1 Card */}
            <div className="glass-card p-5 sm:p-8 flex flex-col justify-between glass-card-hover border-champagne/30 relative overflow-hidden group">
              <div className="absolute top-4 right-4 z-20 bg-champagne text-charcoal text-[9px] sm:text-[10px] font-sans font-medium uppercase tracking-widest px-2.5 sm:px-3 py-1">
                ELEVATED CABIN
              </div>
              <div>
                <div className="relative h-60 sm:h-72 md:h-80 w-full mb-6 sm:mb-8 overflow-hidden rounded-sm bg-charcoal-500">
                  <Image
                    src={d1Img}
                    alt="NIVA D1 luxury elevated dome cabin perched on 3 support pillars by river valley"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-baseline justify-between mb-3 sm:mb-4">
                  <h3 className="font-serif text-2xl sm:text-3xl text-ivory">{d1.name}</h3>
                  <span className="font-serif text-lg sm:text-xl text-champagne">{d1.price}</span>
                </div>
                <p className="text-stone-warm text-xs sm:text-sm font-light mb-6 leading-relaxed font-sans">
                  A premium elevated dome cabin designed for distinctive hospitality environments, retreats, resorts and glamping destinations.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-warm mb-6 sm:mb-8">
                  <li className="flex items-center gap-2"><Check size={14} className="text-champagne flex-shrink-0" /> 14 ft Nominal Dome Diameter</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-champagne flex-shrink-0" /> 3 UHM Pipe Elevated Supports</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-champagne flex-shrink-0" /> Approx. 7.5 ft Elevated Height</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-champagne flex-shrink-0" /> Folding Access Staircase</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-champagne flex-shrink-0" /> Attached Ensuite & Shower</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-champagne flex-shrink-0" /> Premium Bakelite Cladding</li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-4 border-t border-white/10">
                <Button href="/d1" variant="primary" size="md" className="w-full sm:w-1/2 text-center">
                  EXPLORE NIVA D1
                </Button>
                <Button variant="outline" size="md" className="w-full sm:w-1/2 text-center" onClick={() => openQuoteFor('NIVA D1')}>
                  REQUEST A QUOTE
                </Button>
              </div>
            </div>

            {/* D2 Card (Strictly NO 3 legs or staircase) */}
            <div className="glass-card p-5 sm:p-8 flex flex-col justify-between glass-card-hover border-champagne/30 relative overflow-hidden group">
              <div className="absolute top-4 right-4 z-20 bg-champagne text-charcoal text-[9px] sm:text-[10px] font-sans font-medium uppercase tracking-widest px-2.5 sm:px-3 py-1">
                GROUNDED CABIN
              </div>
              <div>
                <div className="relative h-60 sm:h-72 md:h-80 w-full mb-6 sm:mb-8 overflow-hidden rounded-sm bg-charcoal-500">
                  <Image
                    src={d2Img}
                    alt="NIVA D2 grounded luxury dome cabin with brand mark on resort lawn"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-baseline justify-between mb-3 sm:mb-4">
                  <h3 className="font-serif text-2xl sm:text-3xl text-ivory">{d2.name}</h3>
                  <span className="font-serif text-lg sm:text-xl text-champagne">{d2.price}</span>
                </div>
                <p className="text-stone-warm text-xs sm:text-sm font-light mb-6 leading-relaxed font-sans">
                  A premium NIVA dome cabin configuration designed for hospitality, resort and destination-stay applications.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-warm mb-6 sm:mb-8">
                  <li className="flex items-center gap-2"><Check size={14} className="text-champagne flex-shrink-0" /> 14 ft Nominal Dome Diameter</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-champagne flex-shrink-0" /> Grounded Plinth Integration</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-champagne flex-shrink-0" /> Step-in Terrace Entrance</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-champagne flex-shrink-0" /> Panoramic Glass Skylight</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-champagne flex-shrink-0" /> Attached Ensuite & Shower</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-champagne flex-shrink-0" /> Premium Bakelite Cladding</li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-4 border-t border-white/10">
                <Button href="/d2" variant="primary" size="md" className="w-full sm:w-1/2 text-center">
                  EXPLORE NIVA D2
                </Button>
                <Button variant="outline" size="md" className="w-full sm:w-1/2 text-center" onClick={() => openQuoteFor('NIVA D2')}>
                  REQUEST A QUOTE
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOSPITALITY ESSENTIALS (INTERIOR) */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-10 bg-charcoal relative">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="HOSPITALITY ESSENTIALS"
            title="EVERYTHING YOU NEED. NOTHING YOU DON'T."
            description="Carefully edited luxury. Every square inch has been calibrated around essential comfort, acoustic privacy, and seamless guest functionality."
            align="center"
            className="mb-10 sm:mb-16"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            <div className="lg:col-span-7 relative aspect-[4/3] sm:aspect-[16/10] border border-champagne/30 overflow-hidden shadow-2xl rounded-sm bg-charcoal-500">
              <Image
                src="/images/products/niva-interior-suite.jpg"
                alt="NIVA Geodesic Dome Luxury Interior Suite with Star Canopy and Mountain View in India"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-charcoal/80 backdrop-blur-md p-3 sm:p-4 border border-champagne/20">
                <span className="text-[9px] sm:text-[10px] tracking-[0.25em] text-champagne uppercase font-sans block mb-0.5">AUTHENTIC NIVA INTERIOR</span>
                <p className="text-xs sm:text-sm text-ivory font-serif">Queen bedroom suite with 12-14 mm wood-colour Bakelite panelling and direct nature outlook.</p>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-3 sm:space-y-4">
              {interiorFeatures.map((feat, idx) => {
                const Icon = feat.icon;
                const isActive = activeFeature === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setActiveFeature(idx)}
                    className={`p-4 sm:p-5 border transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'border-champagne bg-charcoal-300/90 shadow-[0_10px_30px_rgba(201,164,106,0.15)]'
                        : 'border-white/10 bg-charcoal-400/40 hover:border-champagne/40'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-3">
                        <Icon size={18} className={isActive ? 'text-champagne' : 'text-stone-warm'} />
                        <h4 className={`font-serif text-base sm:text-lg ${isActive ? 'text-champagne font-medium' : 'text-ivory'}`}>
                          {feat.label}
                        </h4>
                      </div>
                      <span className="text-[9px] tracking-widest text-stone-warm/70 uppercase font-sans hidden sm:inline-block">
                        {feat.tag}
                      </span>
                    </div>
                    <p className="text-xs text-stone-warm font-light leading-relaxed font-sans pl-7">
                      {feat.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 5. APPLICATIONS OVERVIEW */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-10 bg-charcoal-400/40 relative border-t border-champagne/15">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="LANDSCAPE DIVERSITY"
            title="ENGINEERED FOR INDIA'S MOST INSPIRING TERRAINS."
            description="From Himalayan alpine slopes in Uttarakhand and Himachal Pradesh to tea estate contours and private orchard retreats across India."
            align="center"
            className="mb-10 sm:mb-16"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {APPLICATIONS.slice(0, 4).map((app, idx) => (
              <Link
                key={idx}
                href="/applications"
                className="group border border-champagne/20 bg-charcoal-500 overflow-hidden flex flex-col justify-between transition-all duration-400 hover:border-champagne/50 hover:shadow-2xl"
              >
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-charcoal-400">
                  <Image
                    src={app.image}
                    alt={`${app.title} - ${app.subtitle}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-[9px] font-sans uppercase tracking-[0.25em] text-champagne block mb-1">
                      0{idx + 1} • {app.category}
                    </span>
                    <h3 className="font-serif text-lg text-ivory group-hover:text-champagne transition-colors">
                      {app.title}
                    </h3>
                  </div>
                </div>
                <div className="p-4 sm:p-5 flex-grow flex flex-col justify-between">
                  <p className="text-stone-warm text-xs font-light leading-relaxed font-sans mb-4">
                    {app.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs font-sans text-champagne pt-2 border-t border-white/10 group-hover:translate-x-1 transition-transform">
                    <span>EXPLORE APPLICATION</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. GLOBAL CTA */}
      <CTASection
        title="READY TO ELEVATE YOUR DESTINATION?"
        subtitle="Connect with NIVA hospitality architects to discuss site layout feasibility, delivery schedules, and commercial volume pricing across India."
        ctaText="REQUEST A QUOTE"
        bgVariant="charcoal"
      />

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        defaultModel={selectedModel}
      />
    </div>
  );
};
