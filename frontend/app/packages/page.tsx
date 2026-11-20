import React from 'react';
import type { Metadata } from 'next';
import { PackagesContent } from './PackagesContent';

export const metadata: Metadata = {
  title: 'Investment Packages | Dhaka Fantasy Island',
  description:
    'Explore the 4 deeded investment packages of Dhaka Fantasy Island: Bronze, Silver, Gold, and Platinum. Deeded Saf-Kabala land shares, annual stay rights, and transparent pricing in BDT.',
};

export default function PackagesPage() {
  return <PackagesContent />;
}
