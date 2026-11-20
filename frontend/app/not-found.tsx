'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { IslandMark } from '@/components/svg/IslandMark';

export default function NotFound() {
  return (
    <div className="py-24 sm:py-32 min-h-[60vh] flex items-center justify-center text-center">
      <Container size="narrow">
        <div className="w-16 h-16 mx-auto mb-6 bg-[#F3F4F6] text-[#165B33] flex items-center justify-center rounded-full border border-[#E5E7EB]">
          <IslandMark className="w-10 h-10" />
        </div>
        <span className="text-xs font-mono font-bold text-[#D97706] tracking-widest uppercase">
          Error 404
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#111827] tracking-tight mt-2 mb-3">
          পৃষ্ঠাটি পাওয়া যায়নি / Page Not Found
        </h1>
        <p className="text-sm text-[#4B5563] max-w-md mx-auto mb-8 leading-relaxed">
          The requested page could not be located. You may return to the homepage or explore our investment packages.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button href="/" variant="primary">
            হোমে ফিরে যান / Back to Home
          </Button>
          <Button href="/packages" variant="secondary">
            প্যাকেজসমূহ / View Packages
          </Button>
        </div>
      </Container>
    </div>
  );
}
