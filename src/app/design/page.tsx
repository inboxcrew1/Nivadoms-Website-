import type { Metadata } from 'next';
import Image from 'next/image';
import { CTASection } from '@/components/common/CTASection';
import { JsonLd } from '@/components/seo/JsonLd';
import { getBreadcrumbSchema } from '@/data/seo';

export const metadata: Metadata = {
  title: 'Architecture & Craft - Geodesic Engineering & Faceted Dome Design',
  description: 'Explore NIVA’s architectural engineering: geodesic triangulated shells, structural tripod pillars, thermal barrier envelopes, and concealed hospitality MEP utilities.',
  alternates: {
    canonical: '/design',
  },
  openGraph: {
    title: 'Architecture & Craft - NIVA Geodesic Engineering',
    description: 'Geodesic triangulated shells, structural tripod pillars, and turnkey hospitality interiors in India.',
    url: 'https://nivadoms.com/design',
    images: [
      {
        url: 'https://nivadoms.com/images/products/d2-hero-twilight.jpg',
        width: 1200,
        height: 630,
        alt: 'NIVA Luxury Dome Cabins - Elevated Living India',
        type: 'image/jpeg',
      },
    ],
  },
};

export default function DesignPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Design & Craft', path: '/design' }
  ]);

  return (
    <div className="flex flex-col w-full overflow-hidden">
      <JsonLd data={breadcrumb} />

      {/* Hero */}
      <section className="relative min-h-[55vh] sm:min-h-[65vh] flex items-center justify-center pt-24 sm:pt-28 pb-12 px-4 sm:px-6 md:px-10 bg-charcoal">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
            <span className="h-[1px] w-6 sm:w-8 bg-champagne/70"></span>
            <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.28em] sm:tracking-[0.35em] text-champagne font-medium">
              ARCHITECTURE & CRAFT
            </span>
            <span className="h-[1px] w-6 sm:w-8 bg-champagne/70"></span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-ivory font-normal tracking-wide leading-tight mb-4 sm:mb-6">
            DESIGNED WITH PURPOSE.
          </h1>

          <p className="text-stone-warm text-xs sm:text-base md:text-lg font-light max-w-2xl mx-auto leading-relaxed font-sans px-2">
            The engineering philosophy behind NIVA geodesic faceted shells, structural tripod pillars, and turnkey hospitality envelopes.
          </p>
        </div>
      </section>

      {/* Detail Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-10 bg-charcoal-400/40 border-t border-champagne/15">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.28em] text-champagne block">
              GEOMETRIC INTEGRITY
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-ivory font-normal">
              TRIANGULATED GEODESIC STRENGTH.
            </h2>
            <p className="text-stone-warm text-xs sm:text-sm font-light leading-relaxed font-sans">
              The geodesic dome shell distributes structural loads equally across all interconnected facets. This provides high wind resistance, thermal efficiency, and an expansive feeling of internal volume.
            </p>
            <div className="border-t border-champagne/15 pt-4 space-y-3 text-xs text-stone-warm font-sans">
              <p><strong className="text-champagne font-medium">Overhead Skylight:</strong> 360-degree star-gazing glass dome.</p>
              <p><strong className="text-champagne font-medium">Thermal Shielding:</strong> Multi-layer insulation calibrated for Indian climates.</p>
              <p><strong className="text-champagne font-medium">Ensuite Integration:</strong> Complete private plumbing and electrical concealments.</p>
            </div>
          </div>

          <div className="lg:col-span-6 relative aspect-[4/3] border border-champagne/25 overflow-hidden bg-charcoal-500 rounded-sm">
            <Image
              src="/images/products/niva-interior-suite.jpg"
              alt="NIVA Architectural Interior Suite with geometric wood panelling and star skylight"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="EXPERIENCE NIVA ARCHITECTURE."
        subtitle="Speak with our design engineers regarding site planning and technical integrations across India."
        ctaText="REQUEST A CONSULTATION"
        bgVariant="charcoal"
      />
    </div>
  );
}
