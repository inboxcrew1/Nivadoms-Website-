import type { Metadata } from 'next';
import Image from 'next/image';
import { CTASection } from '@/components/common/CTASection';
import { Button } from '@/components/common/Button';
import { JsonLd } from '@/components/seo/JsonLd';
import { getBreadcrumbSchema } from '@/data/seo';

export const metadata: Metadata = {
  title: 'About NIVA — Elevated Living | Luxury Hospitality Architecture India',
  description: 'Learn about NIVA: Pioneering modular luxury dome cabins and low-impact hospitality architecture for resorts, eco retreats, and nature destinations across India.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About NIVA — Luxury Hospitality Architecture India',
    description: 'Pioneering modular luxury dome cabins and low-impact hospitality architecture across India.',
    url: 'https://nivadoms.com/about',
    images: [
      {
        url: 'https://nivadoms.com/images/products/d2-hero-twilight.jpg',
        width: 1200,
        height: 630,
        alt: 'NIVA Luxury Dome Cabins — Elevated Living India',
        type: 'image/jpeg',
      },
    ],
  },
};

export default function AboutPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' }
  ]);

  return (
    <div className="flex flex-col w-full overflow-hidden">
      <JsonLd data={breadcrumb} />

      {/* Hero */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center pt-24 sm:pt-28 pb-12 px-4 sm:px-6 md:px-10 bg-charcoal">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
            <span className="h-[1px] w-6 sm:w-8 bg-champagne/70"></span>
            <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.28em] sm:tracking-[0.35em] text-champagne font-medium">
              OUR STORY & VISION
            </span>
            <span className="h-[1px] w-6 sm:w-8 bg-champagne/70"></span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-ivory font-normal tracking-wide leading-tight mb-4 sm:mb-6">
            ELEVATED ARCHITECTURE. QUIET LUXURY.
          </h1>

          <p className="text-stone-warm text-xs sm:text-base md:text-lg font-light max-w-2xl mx-auto leading-relaxed font-sans px-2">
            NIVA was founded in India to redefine how luxury accommodation intersects with pristine natural terrain and sensitive ecological landscapes.
          </p>
        </div>
      </section>

      {/* Story & Philosophy */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-10 bg-charcoal-400/40 border-t border-champagne/15">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          <div className="lg:col-span-6 relative aspect-[4/3] border border-champagne/25 overflow-hidden bg-charcoal-500 rounded-sm">
            <Image
              src="/images/products/d1-twin-river.jpg"
              alt="NIVA Architecture in Indian Nature by River Valley"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.28em] text-champagne block">
              ORIGINS & INSPIRATION
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-ivory font-normal leading-tight">
              DESIGNED FOR THE DESTINATION.
            </h2>
            <p className="text-stone-warm text-xs sm:text-sm font-light leading-relaxed font-sans">
              Traditional hospitality construction often scars landscapes with heavy concrete foundations, prolonged noise, and environmental disruption. NIVA provides an architectural alternative: precision-engineered luxury dome cabins that integrate seamlessly with nature.
            </p>
            <p className="text-stone-warm text-xs sm:text-sm font-light leading-relaxed font-sans">
              Every NIVA unit is built with high-grade thermal envelope insulation, double-glazed architectural glass, integrated concealed MEP services, and ensuite Western bathrooms.
            </p>
            <div className="pt-2">
              <Button href="/why-niva" variant="outline" size="md">
                DISCOVER OUR VALUE PROPOSITION
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing & Engineering Pedigree */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 md:px-10 bg-charcoal border-t border-champagne/15">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 sm:mb-10">
            <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.3em] text-champagne block mb-2 font-medium">
              MANUFACTURING & ENGINEERING CREDENTIALS
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-ivory font-normal">
              ENGINEERED IN INDIA TO RIGOROUS STANDARDS
            </h3>
          </div>

          <div className="border border-champagne/20 bg-charcoal-400/40 p-6 sm:p-8 md:p-10 rounded-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div>
                <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-champagne block mb-1">
                  REGISTERED MANUFACTURING ENTITY
                </span>
                <h4 className="font-serif text-lg sm:text-xl text-ivory font-normal mb-3">
                  MAA BRIJESHWARI ENGINEERING
                </h4>
                <p className="text-stone-warm text-xs sm:text-sm font-light font-sans leading-relaxed mb-4">
                  0 Khuria Road, Azad Public School Ke Pas, Durga Enclave,<br />
                  Bulandshahar, Uttar Pradesh 203001, India
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-champagne/10 border border-champagne/30 text-[11px] text-champagne font-sans font-light">
                  <span>Quality Management: ISO 9001:2015</span>
                </div>
              </div>

              <div className="space-y-3 pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-champagne/15 md:pl-8">
                <div className="flex justify-between items-center text-xs font-sans pb-2 border-b border-white/5">
                  <span className="text-stone-warm font-light">Brand Entity</span>
                  <span className="text-ivory font-medium">NIVA DOMS</span>
                </div>
                <div className="flex justify-between items-center text-xs font-sans pb-2 border-b border-white/5">
                  <span className="text-stone-warm font-light">GSTIN</span>
                  <span className="text-ivory font-mono text-[11px]">09FOVPP5846F1ZT</span>
                </div>
                <div className="flex justify-between items-center text-xs font-sans pb-2 border-b border-white/5">
                  <span className="text-stone-warm font-light">UDYAM Registration</span>
                  <span className="text-ivory font-mono text-[11px]">UDYAM-UP-18-0013586</span>
                </div>
                <div className="flex justify-between items-center text-xs font-sans">
                  <span className="text-stone-warm font-light">Enterprise Category</span>
                  <span className="text-ivory">MICRO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="COLLABORATE WITH NIVA."
        subtitle="Let's discuss how NIVA elevated or grounded cabins can transform your hospitality destination across India."
        ctaText="REQUEST A CONSULTATION"
        bgVariant="charcoal"
      />
    </div>
  );
}
