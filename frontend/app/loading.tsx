import React from 'react';
import { Container } from '@/components/ui/Container';

export default function Loading() {
  return (
    <div className="py-24 sm:py-32 min-h-[50vh] flex items-center justify-center">
      <Container size="narrow" className="text-center space-y-4">
        <div className="inline-block w-8 h-8 border-2 border-[#0E3B24] border-t-transparent rounded-full animate-spin" />
        <p className="text-xs font-semibold uppercase tracking-widest text-[#0E3B24]">
          তথ্য প্রস্তুত করা হচ্ছে / Loading Dhaka Fantasy Island...
        </p>
      </Container>
    </div>
  );
}
