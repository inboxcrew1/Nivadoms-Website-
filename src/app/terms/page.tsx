import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms & Conditions for NIVA Elevated Living — commercial estimates, engineering approvals, and intellectual property.',
  alternates: {
    canonical: '/terms',
  },
  openGraph: {
    title: 'Terms & Conditions — NIVA Elevated Living',
    description: 'Terms and commercial policies for NIVA Elevated Living.',
    url: 'https://nivadoms.com/terms',
    images: [
      {
        url: 'https://nivadoms.com/images/products/d2-hero-twilight.jpg',
        width: 1200,
        height: 630,
        alt: 'NIVA Terms & Conditions',
        type: 'image/jpeg',
      },
    ],
  },
};

export default function TermsConditionsPage() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto text-ivory font-sans">
      <h1 className="font-serif text-4xl md:text-5xl mb-8">Terms & Conditions</h1>
      <div className="space-y-6 text-stone-warm text-sm leading-relaxed font-light">
        <p>Last updated: 2026. Welcome to the official NIVA website.</p>
        <h2 className="font-serif text-xl text-ivory pt-4">1. Commercial Estimates & Pricing</h2>
        <p>All product prices displayed (₹6,00,000 for NIVA D1 and ₹5,20,000 for NIVA D2) represent base unit pricing. Site-specific civil foundations, freight transportation, local duties/taxes, and customized architectural finishes are calculated on a per-project quotation basis.</p>
        <h2 className="font-serif text-xl text-ivory pt-4">2. Engineering & Approvals</h2>
        <p>All technical specifications and installation guidelines are subject to approved project designs and site-specific geotechnical conditions.</p>
        <h2 className="font-serif text-xl text-ivory pt-4">3. Intellectual Property</h2>
        <p>The NIVA brand, emblem, wordmark, tagline &quot;ELEVATED LIVING&quot;, and architectural cabin designs are proprietary intellectual properties of NIVA.</p>
        <h2 className="font-serif text-xl text-ivory pt-4">4. Custom Fabrication & Non-Returnable Policy</h2>
        <p>Because NIVA luxury dome cabins (NIVA D1 and NIVA D2) are modular architectural structures custom fabricated to client project specifications and engineering approvals, all units are made-to-order. Returns, cancellations, or refunds are not permitted once manufacturing and procurement commence at the manufacturing facility.</p>
        <h2 className="font-serif text-xl text-ivory pt-4">5. Delivery, Handling & Freight Logistics</h2>
        <p>Off-site fabrication typically requires 3 to 5 weeks (21 to 35 days) depending on order volume. Following manufacturing completion, units are dispatched via specialized freight carrier from Bulandshahar, Uttar Pradesh, with transit times typically ranging between 3 to 10 days across India. Freight transportation charges vary based on distance, terrain contours, access road viability, and crane placement requirements, and are billed on a per-project quotation basis.</p>
      </div>
    </div>
  );
}
