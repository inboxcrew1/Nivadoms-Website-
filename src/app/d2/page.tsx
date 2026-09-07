import type { Metadata } from 'next';
import { D2Content } from '@/components/pages/D2Content';
import { JsonLd } from '@/components/seo/JsonLd';
import { getProductSchema, getBreadcrumbSchema } from '@/data/seo';

export const metadata: Metadata = {
  title: 'NIVA D2 — Grounded Luxury Dome Cabin & Resort Pod (14 Ft Nominal Class) | ₹5,20,000',
  description: 'Explore NIVA D2: 14 ft nominal grounded luxury dome cabin engineered for seamless garden, tea estate, and plinth integration with panoramic star-gazing glass skylight, ensuite bathroom, and Bakelite architectural cladding at ₹5,20,000.',
  alternates: {
    canonical: '/d2',
  },
  openGraph: {
    title: 'NIVA D2 — Grounded Luxury Dome Cabin & Resort Pod (14 Ft Nominal Class)',
    description: '14 ft nominal grounded luxury dome cabin engineered for seamless landscape and plinth integration with panoramic star-gazing glass skylight and ensuite bathroom.',
    url: 'https://nivadoms.com/d2',
    images: [{ url: 'https://nivadoms.com/images/products/d2-hero-twilight.jpg', width: 1200, height: 630, alt: 'NIVA D2 Grounded Luxury Dome Cabin India' }],
  },
};

export default function D2Page() {
  const d2Product = getProductSchema('d2');
  const breadcrumb = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'NIVA D2', path: '/d2' }
  ]);

  return (
    <>
      <JsonLd data={[d2Product, breadcrumb]} />
      <D2Content />
    </>
  );
}
