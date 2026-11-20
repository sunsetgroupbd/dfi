import React from 'react';
import type { Metadata } from 'next';
import { WhyInvestContent } from './WhyInvestContent';

export const metadata: Metadata = {
  title: 'Why Invest | Dhaka Fantasy Island',
  description:
    '10 verified reasons to invest in Dhaka Fantasy Island: statutory security, halal income opportunity, portfolio diversification, and permanent deeded freehold title.',
};

export default function WhyInvestPage() {
  return <WhyInvestContent />;
}
