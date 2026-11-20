import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { KeyFactsSection } from '@/components/sections/KeyFactsSection';
import { WhyInvestSection } from '@/components/sections/WhyInvestSection';
import { PackagesSection } from '@/components/sections/PackagesSection';
import { OwnershipSection } from '@/components/sections/OwnershipSection';
import { LocationSection } from '@/components/sections/LocationSection';
import { ParentGroupSection } from '@/components/sections/ParentGroupSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { FinalCtaSection } from '@/components/sections/FinalCtaSection';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero with Attached Statutory Fact Strip */}
      <HeroSection />

      {/* 2. Key Facts: DFI At A Glance (4 Metric Columns) */}
      <KeyFactsSection />

      {/* 3. Why Invest in DFI (10 Advantage Grid) */}
      <WhyInvestSection />

      {/* 4. Our Packages (Bronze, Silver, Gold, Platinum) */}
      <PackagesSection />

      {/* 5. Ownership Process (Simple, Secure, Shariah Compliant) */}
      <OwnershipSection />

      {/* 6. Prime Location (Mohammadpur / Basila Corridor & Route Map) */}
      <LocationSection />

      {/* 7. Parent Company - Sunset Group Endorsement */}
      <ParentGroupSection />

      {/* 8. Frequently Asked Questions */}
      <FAQSection />

      {/* 9. Final Call to Action Banner */}
      <FinalCtaSection />
    </>
  );
}
