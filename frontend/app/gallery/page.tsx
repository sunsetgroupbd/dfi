import React from 'react';
import type { Metadata } from 'next';
import { GalleryContent } from './GalleryContent';

export const metadata: Metadata = {
  title: 'Visual Gallery & Architecture | Dhaka Fantasy Island',
  description:
    'Architectural concepts, landscape impressions, and masterplan perspectives of Dhaka Fantasy Island Eco Hotel & Resort in Mohammadpur, Dhaka.',
};

export default function GalleryPage() {
  return <GalleryContent />;
}
