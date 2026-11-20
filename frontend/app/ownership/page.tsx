import React from 'react';
import type { Metadata } from 'next';
import { OwnershipContent } from './OwnershipContent';

export const metadata: Metadata = {
  title: 'Ownership Process & Governance | Dhaka Fantasy Island',
  description:
    'Detailed 3-step legal ownership process for Dhaka Fantasy Island. From money receipt to Deed of Agreement and registered Saf-Kabala deed handover.',
};

export default function OwnershipPage() {
  return <OwnershipContent />;
}
