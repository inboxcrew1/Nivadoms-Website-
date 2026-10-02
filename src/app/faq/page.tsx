import type { Metadata } from 'next';
import { FAQContent } from '@/components/pages/FAQContent';
import { JsonLd } from '@/components/seo/JsonLd';
import { FAQS } from '@/data/faqs';
import { getFaqSchema, getBreadcrumbSchema } from '@/data/seo';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions - Pricing, Specifications & Logistics',
  description: 'Get answers to questions about NIVA luxury dome cabins: bespoke project pricing, off-site delivery across India, foundation requirements, plumbing, electrical, and AC provisions.',
  alternates: {
    canonical: '/faq',
  },
  openGraph: {
    title: 'FAQ - NIVA Luxury Dome Cabins India',
    description: 'Frequently asked questions regarding NIVA pricing, delivery, and specifications.',
    url: 'https://nivadoms.com/faq',
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

export default function FAQPage() {
  const faqSchema = getFaqSchema(FAQS);
  const breadcrumb = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'FAQ', path: '/faq' }
  ]);

  return (
    <>
      <JsonLd data={[faqSchema, breadcrumb]} />
      <FAQContent />
    </>
  );
}
