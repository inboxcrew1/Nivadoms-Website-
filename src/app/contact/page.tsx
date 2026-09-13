import type { Metadata } from 'next';
import { ContactContent } from '@/components/pages/ContactContent';
import { JsonLd } from '@/components/seo/JsonLd';
import { getBreadcrumbSchema } from '@/data/seo';

export const metadata: Metadata = {
  title: 'Request a Quote & Project Consultation',
  description: 'Contact NIVA to request a commercial quote for luxury dome cabins (NIVA D1 & NIVA D2). Discuss resort feasibility, delivery timelines, and volume rollouts across India.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Request a Quote — NIVA Luxury Dome Cabins India',
    description: 'Request a project quote and discuss resort feasibility with NIVA architectural advisors.',
    url: 'https://nivadoms.com/contact',
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

export default function ContactPage() {
  const breadcrumb = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Contact & Quote', path: '/contact' }
  ]);

  return (
    <>
      <JsonLd data={breadcrumb} />
      <ContactContent />
    </>
  );
}
