import React from 'react';
import type { Metadata } from 'next';
import { OverviewContent } from './OverviewContent';

export const metadata: Metadata = {
  title: 'Project Overview | Dhaka Fantasy Island',
  description:
    'Comprehensive overview of Dhaka Fantasy Island (Eco Hotel & Resort) in Mohammadpur, Dhaka. Deeded Saf-Kabala land shares, Shariah governance, and nature-inspired masterplan.',
};

export default function OverviewPage() {
  return <OverviewContent />;
}
