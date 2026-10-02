import type { Metadata } from 'next';
import { HomeContent } from '@/components/pages/HomeContent';
import { JsonLd } from '@/components/seo/JsonLd';
import { getProductSchema } from '@/data/seo';

export const metadata: Metadata = {
  title: 'NIVA Elevated Living',
  description: 'Manufacturer and supplier of luxury dome cabins, geodesic glamping pods, and modular resort accommodation units in India. Turnkey ensuite cabins for resorts, farm stays, and private estates.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'NIVA Elevated Living',
    description: 'Manufacturer and supplier of luxury dome cabins, geodesic glamping pods, and modular resort accommodation units in India.',
    url: 'https://nivadoms.com',
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

export default function HomePage() {
  const d1Product = getProductSchema('d1');
  const d2Product = getProductSchema('d2');

  return (
    <>
      <JsonLd data={[d1Product, d2Product]} />
      <HomeContent />
    </>
  );
}
