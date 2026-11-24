'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/lib/language-context';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import { ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const overviewSlides = [
  {
    src: '/realdfiview.webp',
    alt: 'Dhaka Fantasy Island - Real Site & Resort Panoramic View',
  },
  {
    src: '/Hotel & restaurant View.jpg.webp',
    alt: 'Dhaka Fantasy Island - Eco Hotel & Restaurant Lakeside View',
  },
  {
    src: '/dfiheroimage.webp',
    alt: 'Dhaka Fantasy Island - Architectural Masterplan & Landscape',
  },
  {
    src: '/Coffee Corner& Rest Room.jpg.webp',
    alt: 'Dhaka Fantasy Island - Coffee Corner & Rest Pavilion',
  },
];

export const OverviewContent: React.FC = () => {
  const { lang, t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % overviewSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + overviewSlides.length) % overviewSlides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % overviewSlides.length);
  };

  return (
    <div className="py-12 sm:py-20">
      {/* Header Banner */}
      <Container className="mb-14">
        <span className="text-xs font-semibold uppercase tracking-normal text-[#2E7D32]">
          {t.nav.overview}
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0E3B24] tracking-normal mt-2 max-w-3xl leading-tight">
          {lang === 'bn'
            ? 'ঢাকা ফ্যান্টাসি আইল্যান্ড: নগরীর বুকে নিবিড় প্রকৃতির শান্ত আশ্রয়'
            : 'Dhaka Fantasy Island: A Nature-Inspired Eco-Resort Sanctuary'}
        </h1>
        <p className="text-base sm:text-lg text-[#5A625D] mt-4 max-w-2xl leading-relaxed">
          {lang === 'bn'
            ? 'সানসেট গ্রুপের কর্পোরেট তত্ত্বাবধানে ঢাকার পরিকল্পিত মোহাম্মদপুর এলাকায় একটি অনন্য পরিবেশবান্ধব আতিথেয়তা প্রকল্প।'
            : 'An eco-hospitality landmark under Sunset Group, seamlessly combining freehold Saf-Kabala ownership with tranquil natural surroundings.'}
        </p>
      </Container>

      {/* Visual Presentation Area - 3-Image Sliding Showcase */}
      <Container className="mb-16">
        <div className="relative aspect-[16/9] sm:aspect-[21/9] min-h-[300px] sm:min-h-[440px] w-full overflow-hidden rounded-2xl bg-[#0A2617] border border-[#E5E7EB] shadow-lg group">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={overviewSlides[currentSlide].src}
                alt={overviewSlides[currentSlide].alt}
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
              />
            </motion.div>
          </AnimatePresence>

          {/* Left Navigation Arrow */}
          <button
            onClick={handlePrev}
            aria-label="Previous image"
            className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all opacity-0 group-hover:opacity-100 hover:scale-105 cursor-pointer z-10"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Right Navigation Arrow */}
          <button
            onClick={handleNext}
            aria-label="Next image"
            className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all opacity-0 group-hover:opacity-100 hover:scale-105 cursor-pointer z-10"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Bottom Pagination Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10 bg-black/35 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15">
            {overviewSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  currentSlide === idx ? 'w-6 bg-[#86EFAC]' : 'w-2 bg-white/60 hover:bg-white'
                }`}
              />
            ))}
          </div>
        </div>
      </Container>

      {/* Editorial Story */}
      <Container className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-6 text-[#111827] text-sm sm:text-base leading-relaxed">
            <h2 className="text-2xl font-bold text-[#111827]">
              {lang === 'bn' ? 'প্রকল্পের মূল ভাবনা ও রূপরেখা' : 'Project Vision & Master Concept'}
            </h2>
            <p className="text-[#4B5563]">
              {lang === 'bn'
                ? 'দ্রুত বর্ধনশীল মেগাসিটি ঢাকায় প্রতিদিনের কর্মব্যস্ততা ও ট্রাফিকের ভিড়ে মানসিক প্রশান্তি খুঁজে পাওয়া আজ একটি বড় চ্যালেঞ্জ। ঢাকা ফ্যান্টাসি আইল্যান্ড পরিকল্পিত হয়েছে সেই প্রয়োজনীয়তাকে কেন্দ্র করে—যেখানে নাগরিক সুবিধার দূরত্বে বজায় রেখেই সম্পূর্ণ গ্রামীণ স্নিগ্ধতা ও নির্মল জলাশয়ের পরিবেশ তৈরি করা হচ্ছে।'
                : 'In a rapidly growing metropolis like Dhaka, finding authentic tranquility amidst daily congestion has become increasingly rare. Dhaka Fantasy Island is designed specifically to answer this need—situated within quick proximity to civic hubs while enveloped in serene nature and waterways.'}
            </p>
            <p className="text-[#4B5563]">
              {lang === 'bn'
                ? 'মোহাম্মদপুর সংলগ্ন বসিলা গার্ডেন সিটির ৪০ ফুট এভিনিউ রোডের পাশে পরিকল্পিত এই প্রকল্পে আধুনিক কাঠের টেক্সচার, পরিবেশবান্ধব কটেজ, উন্মুক্ত ডাইনিং ডেক এবং সুশোভিত ল্যান্ডস্কেপিং অন্তর্ভুক্ত রয়েছে।'
                : 'Located off the 40-foot Basila Garden City Avenue Road in planned Mohammadpur, the project integrates sustainable architectural textures, overwater pavilions, open dining decks, and preserved indigenous greenery.'}
            </p>

            <div className="p-6 bg-[#F9FAFB] border border-[#E5E7EB] rounded-[4px] space-y-3">
              <h3 className="text-base font-bold text-[#111827] flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#1E7C46]" />
                {lang === 'bn' ? 'সাফ-কবলা দলিলের আইনি নিশ্চয়তা' : 'Deeded Saf-Kabala Legal Title'}
              </h3>
              <p className="text-xs sm:text-sm text-[#5A625D]">
                {lang === 'bn'
                  ? 'প্রতিটি শেয়ারের অনুকূলে সরকারি রেজিস্ট্রি নিয়মানুযায়ী নির্দিষ্ট পরিমাপের সাফ-কবলা জমির হিস্যা ও কোম্পানির শেয়ার হস্তান্তর করা হয়। এটি শতভাগ স্থায়ী, হস্তান্তরযোগ্য ও উত্তরাধিকারসূত্রে বণ্টনযোগ্য।'
                  : 'Every share tier confers a proportionate registered freehold Saf-Kabala land deed alongside company equity. Title is 100% permanent, transferable, and legally bequeathable.'}
              </p>
            </div>
          </div>

          {/* Right Highlights Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#0D2F1D] text-white p-6 rounded-[4px] border border-[#1A452E] space-y-4">
              <span className="text-xs font-semibold uppercase tracking-normal text-[#86EFAC]">
                {lang === 'bn' ? 'প্রকল্পের সারসংক্ষেপ' : 'Key Specifications'}
              </span>

              <div className="space-y-3 text-xs text-[#E5E7EB]">
                <div className="border-b border-[#1A452E] pb-2">
                  <span className="text-[#9CA3AF] block">{lang === 'bn' ? 'প্রকল্পের ধরন' : 'Project Type'}</span>
                  <strong className="text-white text-sm">
                    {lang === 'bn' ? 'ইকো হোটেল এন্ড রিসোর্ট' : 'Eco Hotel & Resort'}
                  </strong>
                </div>
                <div className="border-b border-[#1A452E] pb-2">
                  <span className="text-[#9CA3AF] block">{lang === 'bn' ? 'মাতৃ প্রতিষ্ঠান' : 'Parent Company'}</span>
                  <strong className="text-white text-sm">
                    Sunset Kuakata Hotel &amp; Resort Ltd.
                  </strong>
                </div>
                <div className="border-b border-[#1A452E] pb-2">
                  <span className="text-[#9CA3AF] block">{lang === 'bn' ? 'আইনি ভিত্তি' : 'Legal Registration'}</span>
                  <strong className="text-white text-sm">
                    {t.common.companyActNotice}
                  </strong>
                </div>
                <div className="border-b border-[#1A452E] pb-2">
                  <span className="text-[#9CA3AF] block">{lang === 'bn' ? 'অবস্থান' : 'Location'}</span>
                  <strong className="text-white text-sm">
                    Basila Garden City Avenue, Mohammadpur
                  </strong>
                </div>
                <div>
                  <span className="text-[#9CA3AF] block">{lang === 'bn' ? 'প্যাকেজ সংখ্যা' : 'Packages'}</span>
                  <strong className="text-[#86EFAC] text-sm">
                    4 Investment Tiers (From Tk 3,50,000)
                  </strong>
                </div>
              </div>

              <div className="pt-2">
                <Button href="/packages" variant="primary" size="sm" className="w-full text-center">
                  {t.common.viewPackages}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
