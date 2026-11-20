import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { ContactContent } from './ContactContent';

export const metadata: Metadata = {
  title: 'Contact & Inquiries | Dhaka Fantasy Island',
  description:
    'Contact Sunset Group corporate headquarters for Dhaka Fantasy Island. Schedule site visits, discuss share packages, and submit investor inquiries.',
};

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-sm text-[#5A625D]">Loading contact information...</div>}>
      <ContactContent />
    </Suspense>
  );
}
