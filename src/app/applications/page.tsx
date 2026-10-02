import type { Metadata } from 'next';
import Image from 'next/image';
import { CTASection } from '@/components/common/CTASection';
import { APPLICATIONS } from '@/data/applications';
import { JsonLd } from '@/components/seo/JsonLd';
import { getBreadcrumbSchema } from '@/data/seo';

export const metadata: Metadata = {
  title: 'Resort & Hospitality Applications - Dome Cabins for India’s Terrains',
  description: 'Modular dome cabins and glamping pods engineered for luxury resorts, agro-tourism farm stays, eco sanctuaries, and private retreats across Uttarakhand, Himachal Pradesh, Rajasthan, and nationwide.',
  alternates: {
    canonical: '/applications',
  },
  openGraph: {
    title: 'Hospitality Applications - Luxury Dome Cabins India',
    description: 'Turnkey accommodation units for resorts, farm stays, glamping sites, and mountain retreats.',
    url: 'https://nivadoms.com/applications',
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

export default function ApplicationsPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Applications', path: '/applications' }
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
              TERRAIN & USE CASES
            </span>
            <span className="h-[1px] w-6 sm:w-8 bg-champagne/70"></span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-ivory font-normal tracking-wide leading-tight mb-4 sm:mb-6">
            WHEREVER NATURE LEADS.
          </h1>

          <p className="text-stone-warm text-xs sm:text-base md:text-lg font-light max-w-2xl mx-auto leading-relaxed font-sans px-2">
            Explore how NIVA modular dome cabins adapt effortlessly to Himalayan mountain ridgelines, forest sanctuaries, tea plantations, and luxury experiential resorts across India.
          </p>
        </div>
      </section>

      {/* Applications Grid */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-10 bg-charcoal-400/40 border-t border-champagne/15">
        <div className="max-w-7xl mx-auto space-y-12 sm:space-y-20">
          {APPLICATIONS.map((app, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={idx}
                id={app.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center border-b border-white/10 pb-12 sm:pb-20 last:border-b-0"
              >
                <div className={`lg:col-span-6 ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                  <div className="relative aspect-[16/10] border border-champagne/25 overflow-hidden bg-charcoal-500 rounded-sm">
                    <Image
                      src={app.image}
                      alt={`${app.title} - ${app.subtitle}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className={`lg:col-span-6 space-y-4 sm:space-y-6 ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                  <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.28em] text-champagne block">
                    0{idx + 1} • {app.category}
                  </span>
                  <h2 className="font-serif text-2xl sm:text-4xl text-ivory font-normal">
                    {app.title}
                  </h2>
                  <p className="text-stone-warm text-xs sm:text-sm font-light leading-relaxed font-sans">
                    {app.description}
                  </p>
                  <div className="border-t border-champagne/15 pt-4 text-xs text-stone-warm font-sans space-y-2">
                    <p><strong className="text-champagne font-medium">Ideal Terrain:</strong> {app.idealFor}</p>
                    <p><strong className="text-champagne font-medium">Recommended Model:</strong> {app.recommendedModel}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="HAVE A SPECIFIC SITE IN MIND?"
        subtitle="Share your geographic coordinates and contour drawings with our planning team for a site placement assessment."
        ctaText="DISCUSS YOUR SITE"
        bgVariant="charcoal"
      />
    </div>
  );
}
