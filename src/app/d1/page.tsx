import type { Metadata } from 'next';
import { D1Content } from '@/components/pages/D1Content';
import { JsonLd } from '@/components/seo/JsonLd';
import { getProductSchema, getBreadcrumbSchema } from '@/data/seo';

export const metadata: Metadata = {
  title: 'NIVA D1 - Elevated Luxury Dome Cabin (14 Ft Nominal Class)',
  description: 'Explore NIVA D1: 14 ft nominal elevated luxury dome cabin perched on 3 primary elevated supports (UHM pipe concept) approx. 7.5 ft high with folding staircase, attached ensuite bathroom, and Bakelite architectural cladding.',
  alternates: {
    canonical: '/d1',
  },
  openGraph: {
    title: 'NIVA D1 - Elevated Luxury Dome Cabin (14 Ft Nominal Class)',
    description: '14 ft nominal elevated luxury dome cabin perched on 3 primary elevated supports (UHM pipe concept) approx. 7.5 ft high with folding staircase and attached ensuite bathroom.',
    url: 'https://nivadoms.com/d1',
    images: [{ url: 'https://nivadoms.com/images/products/d1-hero-resort-walkway.jpg', width: 1200, height: 630, alt: 'NIVA D1 Elevated Luxury Dome Cabin India' }],
  },
};

export default function D1Page() {
  const d1Product = getProductSchema('d1');
  const breadcrumb = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'NIVA D1', path: '/d1' }
  ]);

  return (
    <>
      <JsonLd data={[d1Product, breadcrumb]} />
      <D1Content />
    </>
  );
}
