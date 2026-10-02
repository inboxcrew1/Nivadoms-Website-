import type { Metadata } from 'next';
import Image from 'next/image';
import { CTASection } from '@/components/common/CTASection';
import { JOURNAL_ENTRIES } from '@/data/journal';
import { JsonLd } from '@/components/seo/JsonLd';
import { getBreadcrumbSchema } from '@/data/seo';

export const metadata: Metadata = {
  title: 'Visual Journal - Photographic Retrospective of NIVA Cabins',
  description: 'A curated photographic gallery of NIVA elevated and grounded luxury dome cabins integrated into mountain hills, river valleys, and resort landscapes across India.',
  alternates: {
    canonical: '/projects',
  },
  openGraph: {
    title: 'Visual Journal - NIVA Luxury Dome Cabins',
    description: 'Photographic retrospective of NIVA elevated and grounded cabins across Indian terrains.',
    url: 'https://nivadoms.com/projects',
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

export default function ProjectsPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Visual Journal', path: '/projects' }
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
              PHOTOGRAPHIC ESSAYS
            </span>
            <span className="h-[1px] w-6 sm:w-8 bg-champagne/70"></span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-ivory font-normal tracking-wide leading-tight mb-4 sm:mb-6">
            VISUAL JOURNAL.
          </h1>

          <p className="text-stone-warm text-xs sm:text-base md:text-lg font-light max-w-2xl mx-auto leading-relaxed font-sans px-2">
            A curated photographic retrospective of NIVA elevated and grounded cabins across diverse geographical settings in India.
          </p>
        </div>
      </section>

      {/* Gallery Journal */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-10 bg-charcoal-400/40 border-t border-champagne/15">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {JOURNAL_ENTRIES.map((entry, idx) => (
            <div
              key={idx}
              className="border border-champagne/20 bg-charcoal-500 overflow-hidden group flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-charcoal-400">
                <Image
                  src={entry.image}
                  alt={entry.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-80" />
              </div>
              <div className="p-5 sm:p-6 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[9px] sm:text-[10px] font-sans uppercase tracking-[0.22em] text-champagne mb-2">
                    <span>{entry.category}</span>
                    <span>{entry.date}</span>
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl text-ivory mb-2 group-hover:text-champagne transition-colors">
                    {entry.title}
                  </h3>
                  <p className="text-stone-warm text-xs font-light leading-relaxed font-sans">
                    {entry.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="BEGIN YOUR OWN CHAPTER."
        subtitle="Bring the NIVA architectural experience to your landscape."
        ctaText="REQUEST A QUOTE"
        bgVariant="charcoal"
      />
    </div>
  );
}
