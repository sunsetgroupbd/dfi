import React from 'react';
import type { Metadata } from 'next';
import { PrivacyContent } from './PrivacyContent';

export const metadata: Metadata = {
  title: 'Privacy Policy | Dhaka Fantasy Island',
  description:
    'Privacy Policy and client data protection practices for Dhaka Fantasy Island (Eco Hotel & Resort), a project of Sunset Group.',
};

export default function PrivacyPolicyPage() {
  return <PrivacyContent />;
}
