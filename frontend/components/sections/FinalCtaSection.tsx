'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/lib/language-context';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/ui/MotionWrapper';
import { FaPhone, FaWhatsapp } from 'react-icons/fa6';

export const FinalCtaSection: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <section className="py-14 sm:py-20 bg-white">
      <Container size="wide">
        <FadeIn direction="up" duration={0.6}>
          <div className="relative overflow-hidden rounded-3xl lg:rounded-[36px] bg-[#071F14] text-white p-7 sm:p-12 lg:p-16 shadow-xl border border-[#1E7C46]/40">
            {/* Background Resort Image with Overlay */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/realdfiview.webp"
                alt="Dhaka Fantasy Island - Aerial Resort View"
                fill
                sizes="100vw"
                className="object-cover object-center opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#071F14]/90 via-[#071F14]/75 to-[#071F14]/50" />
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
              {/* Heading & Subtext */}
              <div className="space-y-3 text-center md:text-left max-w-2xl">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                  {lang === 'bn'
                    ? 'প্রকৃতির বুকে আপনার স্থায়ী সম্পদের গর্বিত অংশীদার হোন'
                    : 'Ready to Own a Piece of Paradise?'}
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-[#CBD5E1] leading-relaxed">
                  {lang === 'bn'
                    ? 'আজই যোগাযোগ করুন এবং আমাদের দায়িত্বশীল সিনিয়র প্রতিনিধি আপনার সাথে সরাসরি কথা বলবেন।'
                    : 'Enquire now and our representative will get in touch with you to guide your investment.'}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3.5 shrink-0">
                <Button
                  href="https://wa.me/8801325074535"
                  external
                  variant="primary"
                  size="lg"
                  className="bg-[#1E7C46] hover:bg-[#166438] text-white border border-[#22C55E]/40 rounded-full px-6 py-3.5 text-xs sm:text-sm shadow-lg font-semibold flex items-center gap-2 cursor-pointer"
                >
                  <FaWhatsapp className="w-4 h-4 text-[#86EFAC]" />
                  <span>Chat on WhatsApp</span>
                </Button>

                <Button
                  href="tel:+8801325074535"
                  variant="secondary"
                  size="lg"
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/25 rounded-full px-6 py-3.5 text-xs sm:text-sm font-mono shadow-sm backdrop-blur-md flex items-center gap-2 cursor-pointer"
                >
                  <FaPhone className="w-3.5 h-3.5 text-[#86EFAC]" />
                  <span>01325 074 535</span>
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
};
