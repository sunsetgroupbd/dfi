'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { 
  FileText, 
  Scale, 
  ShieldCheck, 
  Palmtree, 
  ArrowRight 
} from 'lucide-react';

const heroImages = [
  {
    src: '/dfiheroimage.webp',
    alt: 'Dhaka Fantasy Island - Architectural Masterplan View',
  },
  {
    src: '/realdfiview.webp',
    alt: 'Dhaka Fantasy Island - Real Site & Resort Panoramic View',
  },
];

export const HeroSection: React.FC = () => {
  const { lang, t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide between the 2 hero images without indicators
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const quickPillars = [
    {
      icon: FileText,
      titleBn: 'সাফ-কবলা দলিল',
      titleEn: 'Saf-Kabala Title',
      descBn: 'রেজিস্ট্রেশনকৃত স্থায়ী মালিকানা',
      descEn: 'Registered freehold deed',
    },
    {
      icon: Scale,
      titleBn: 'শরীয়াহ সম্মত',
      titleEn: 'Shariah Compliant',
      descBn: 'সুপারভাইজরি তদারকি ও হালাল আয়',
      descEn: 'Supervised halal returns',
    },
    {
      icon: ShieldCheck,
      titleBn: 'কোম্পানি আইন ১৯৯৪',
      titleEn: 'Company Act 1994',
      descBn: 'যৌথ মূলধন কোম্পানি সুরক্ষা',
      descEn: 'Corporate statutory backing',
    },
    {
      icon: Palmtree,
      titleBn: 'ফ্রি অবকাশ যাপন',
      titleEn: 'Annual Luxury Stay',
      descBn: 'বাৎসরিক ৩ থেকে ১৪ দিন থাকা',
      descEn: '3 to 14 days annual stay',
    },
  ];

  return (
    <section className="relative pt-4 sm:pt-6 pb-12 sm:pb-16 bg-[#F8FAF8] overflow-hidden">
      <Container size="wide">
        {/* Full-Image Hero Canvas (Text on One Side - Reference Style) */}
        <div className="relative rounded-3xl lg:rounded-[36px] overflow-hidden shadow-xl min-h-[480px] sm:min-h-[540px] lg:min-h-[580px] flex items-center">
          {/* 1. Cross-Fading Background Images (First: dfiheroimage, Second: realdfiview) */}
          <div className="absolute inset-0 z-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={heroImages[currentSlide].src}
                  alt={heroImages[currentSlide].alt}
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover object-center lg:object-[center_35%]"
                />
              </motion.div>
            </AnimatePresence>

            {/* Directional gradient: Deep shade on left for text clarity, crystal clear view on right */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/30 lg:bg-gradient-to-r lg:from-black/85 lg:via-black/50 lg:to-transparent z-[1]" />
          </div>

          {/* 2. Content overlay on one side (Left Side) */}
          <div className="relative z-10 p-6 sm:p-10 lg:p-16 max-w-2xl lg:max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-5 sm:space-y-6"
            >
              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold text-white tracking-tight leading-[1.2]">
                {lang === 'bn' ? (
                  <>
                    নগরীর বুকে নিবিড় প্রকৃতির{' '}
                    <span className="text-[#4ADE80] block sm:inline">এক শান্ত আশ্রয়</span>
                  </>
                ) : (
                  <>
                    Discover Your{' '}
                    <span className="text-[#4ADE80]">Perfect Sanctuary</span>
                  </>
                )}
              </h1>

              {/* Sub-text narrative */}
              <p className="text-sm sm:text-base md:text-lg text-[#E5E7EB] leading-relaxed max-w-xl font-normal drop-shadow-sm">
                {lang === 'bn'
                  ? 'রাজধানীর মোহাম্মদপুর সংলগ্ন বসিলা পরিকল্পিত এলাকায় নিবিড় প্রকৃতি ও আধুনিক আতিথেয়তার সমন্বয়ে সানসেট গ্রুপের পরিচালনায় স্থায়ী সাফ-কবলা মালিকানায় অংশীদারিত্বের এক অনন্য সুযোগ।'
                  : 'A serene waterside sanctuary in planned Mohammadpur offering permanent deeded Saf-Kabala land share ownership and halal hospitality investment under Sunset Group.'}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <Button
                  href="#packages-section"
                  variant="primary"
                  size="lg"
                  className="bg-[#1E7C46] hover:bg-[#166438] active:scale-[0.98] transition-all text-white border border-[#22C55E]/40 shadow-lg shadow-black/30 rounded-full px-7 py-3.5 text-xs sm:text-sm font-semibold flex items-center gap-2 cursor-pointer"
                >
                  <span>{t.hero.ctaPrimary}</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button
                  href="/contact"
                  variant="secondary"
                  size="lg"
                  className="bg-white/15 hover:bg-white/25 active:scale-[0.98] transition-all text-white border border-white/30 backdrop-blur-md rounded-full px-7 py-3.5 text-xs sm:text-sm font-semibold shadow-xs cursor-pointer"
                >
                  {t.hero.ctaSecondary}
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Quick-Amenities Bar (MRstudio Style) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 sm:mt-8 bg-white rounded-2xl sm:rounded-3xl border border-[#E5E7EB] shadow-md p-4 sm:p-6"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#E5E7EB]">
            {quickPillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`flex items-start gap-3 sm:gap-3.5 ${
                    idx > 0 ? 'pt-3 sm:pt-0 sm:pl-4 lg:pl-6' : ''
                  }`}
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#E8F5E9] border border-[#C8E6C9] flex items-center justify-center shrink-0 text-[#1E7C46]">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#111827] leading-tight">
                      {lang === 'bn' ? item.titleBn : item.titleEn}
                    </h4>
                    <p className="text-[10px] sm:text-xs text-[#6B7280] mt-0.5 leading-tight">
                      {lang === 'bn' ? item.descBn : item.descEn}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
