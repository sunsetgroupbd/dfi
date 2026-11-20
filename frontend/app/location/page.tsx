import React from 'react';
import type { Metadata } from 'next';
import { LocationContent } from './LocationContent';

export const metadata: Metadata = {
  title: 'Location & Connectivity | Dhaka Fantasy Island',
  description:
    'Location guide for Dhaka Fantasy Island in Mohammadpur Basila Garden City Avenue. Minutes from Dhanmondi 27 Shaptak Square and Parliament House.',
};

export default function LocationPage() {
  return <LocationContent />;
}
