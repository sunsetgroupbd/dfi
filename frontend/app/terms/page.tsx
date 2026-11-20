import React from 'react';
import type { Metadata } from 'next';
import { TermsContent } from './TermsContent';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Dhaka Fantasy Island',
  description:
    'Terms of investment and service for Dhaka Fantasy Island (Eco Hotel & Resort), managed under Sunset Kuakata Hotel & Resort Limited.',
};

export default function TermsPage() {
  return <TermsContent />;
}
