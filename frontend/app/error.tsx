'use client';

import React, { useEffect } from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { AlertTriangle } from 'lucide-react';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application Error:', error);
  }, [error]);

  return (
    <div className="py-24 sm:py-32 min-h-[60vh] flex items-center justify-center text-center">
      <Container size="narrow">
        <div className="w-16 h-16 mx-auto mb-6 bg-red-50 text-red-700 flex items-center justify-center rounded-full border border-red-200">
          <AlertTriangle className="w-8 h-8 text-red-600" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-[#0E3B24] tracking-normal mb-3">
          একটি অপ্রত্যাশিত সমস্যা দেখা দিয়েছে
        </h1>
        <p className="text-sm text-[#5A625D] max-w-md mx-auto mb-8 leading-relaxed">
          An unexpected error occurred while loading this section. Please try again or return to the main dashboard.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button onClick={() => reset()} variant="primary">
            পুনরায় চেষ্টা করুন / Try Again
          </Button>
          <Button href="/" variant="outline">
            মূল পাতা / Homepage
          </Button>
        </div>
      </Container>
    </div>
  );
}
