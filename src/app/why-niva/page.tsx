import type { Metadata } from 'next';
import { CTASection } from '@/components/common/CTASection';
import { JsonLd } from '@/components/seo/JsonLd';
import { getBreadcrumbSchema } from '@/data/seo';
import { TrendingUp, ShieldCheck, Zap, Sparkles, Clock, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Why NIVA — Commercial ROI & Rapid Modular Resort Deployment India',
  description: 'Discover the strategic advantages of NIVA: 12-18 month ROI, zero heavy civil foundations, off-site turnkey manufacturing, and standardized transparent pricing of ₹6,00,000.',
  alternates: {
    canonical: '/why-niva',
  },
  openGraph: {
    title: 'Why NIVA — Commercial ROI & Modular Resort Deployment',
    description: '12-18 month ROI, turnkey off-site fabrication, and luxury hospitality standards for Indian resort operators.',
    url: 'https://nivadoms.com/why-niva',
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

export default function WhyNivaPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Why NIVA', path: '/why-niva' }
  ]);

  const reasons = [
    {
      icon: TrendingUp,
      title: "Compelling ROI & Commercial Viability",
      desc: "Fixed public pricing from ₹5,20,000 (D2) to ₹6,00,000 (D1) per unit allows hospitality developers across India to achieve capital payback within 12-18 months based on premium ADR projections.",
    },
    {
      icon: Clock,
      title: "Rapid Turnkey Deployment",
      desc: "Manufactured off-site and assembled swiftly on location without prolonged, disruptive on-site construction timelines.",
    },
    {
      icon: ShieldCheck,
      title: "All-Weather Engineering",
      desc: "Robust architectural envelope with thermal barrier insulation, structural steel supports, and weather-sealed geometric glazing.",
    },
    {
      icon: Zap,
      title: "Zero Heavy Foundation Requirements",
      desc: "Engineered to minimize ground footprint, preserving natural flora, tree canopies, and topsoil integrity.",
    },
    {
      icon: Sparkles,
      title: "Boutique Hospitality Luxury",
      desc: "Full private ensuite bathroom with instant hot water, inverter split air conditioning, and integrated smart media.",
    },
    {
      icon: CheckCircle2,
      title: "Standardized Public Price Transparency",
      desc: "Clear public selling prices (NIVA D1: ₹6,00,000 | NIVA D2: ₹5,20,000) with zero hidden markups.",
    },
  ];

  return (
    <div className="flex flex-col w-full overflow-hidden">
      <JsonLd data={breadcrumb} />

      {/* Hero */}
      <section className="relative min-h-[55vh] sm:min-h-[65vh] flex items-center justify-center pt-24 sm:pt-28 pb-12 px-4 sm:px-6 md:px-10 bg-charcoal">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
            <span className="h-[1px] w-6 sm:w-8 bg-champagne/70"></span>
            <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.28em] sm:tracking-[0.35em] text-champagne font-medium">
              VALUE PROPOSITION & ROI
            </span>
            <span className="h-[1px] w-6 sm:w-8 bg-champagne/70"></span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-ivory font-normal tracking-wide leading-tight mb-4 sm:mb-6">
            THE STRATEGIC ADVANTAGE OF NIVA.
          </h1>

          <p className="text-stone-warm text-xs sm:text-base md:text-lg font-light max-w-2xl mx-auto leading-relaxed font-sans px-2">
            Why leading resort owners, glamping operators, and private estate developers across India choose NIVA for experiential accommodation.
          </p>
        </div>
      </section>

      {/* Grid of Reasons */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-10 bg-charcoal-400/40 border-t border-champagne/15">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {reasons.map((r, idx) => {
              const Icon = r.icon;
              return (
                <div
                  key={idx}
                  className="glass-card p-6 sm:p-8 border-champagne/20 flex flex-col justify-between group hover:border-champagne/50"
                >
                  <div>
                    <div className="w-12 h-12 border border-champagne/30 bg-champagne/5 flex items-center justify-center text-champagne mb-5 group-hover:border-champagne group-hover:bg-champagne/15 transition-colors">
                      <Icon size={22} />
                    </div>
                    <h3 className="font-serif text-xl text-ivory mb-3 group-hover:text-champagne transition-colors">
                      {r.title}
                    </h3>
                    <p className="text-stone-warm text-xs sm:text-sm font-light leading-relaxed font-sans">
                      {r.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="ACCELERATE YOUR RESORT TIMELINE."
        subtitle="Inquire today for detailed architectural specs, batch production schedules, and freight estimates across India."
        ctaText="REQUEST A QUOTE"
        bgVariant="charcoal"
      />
    </div>
  );
}
