import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for NIVA Elevated Living - commercial inquiries, hospitality project feasibility data, and confidential communications.',
  alternates: {
    canonical: '/privacy',
  },
  openGraph: {
    title: 'Privacy Policy - NIVA Elevated Living',
    description: 'Privacy Policy and client confidentiality standards for NIVA Elevated Living.',
    url: 'https://nivadoms.com/privacy',
    images: [
      {
        url: 'https://nivadoms.com/images/products/d2-hero-twilight.jpg',
        width: 1200,
        height: 630,
        alt: 'NIVA Privacy Policy',
        type: 'image/jpeg',
      },
    ],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto text-ivory font-sans">
      <h1 className="font-serif text-4xl md:text-5xl mb-8">Privacy Policy</h1>
      <div className="space-y-6 text-stone-warm text-sm leading-relaxed font-light">
        <p>Last updated: 2026. NIVA (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy.</p>
        <h2 className="font-serif text-xl text-ivory pt-4">1. Information We Collect</h2>
        <p>We collect information you provide directly through our project inquiry and quotation forms, including your name, email address, telephone number, organization name, and project specifications.</p>
        <h2 className="font-serif text-xl text-ivory pt-4">2. How We Use Information</h2>
        <p>Your information is used exclusively to prepare architectural proposals, project feasibility analyses, and quotation communications. We do not sell or lease your contact information to third parties.</p>
        <h2 className="font-serif text-xl text-ivory pt-4">3. Security</h2>
        <p>Commercial project details and client information are maintained with strict industry-standard security protocols.</p>
      </div>
    </div>
  );
}
