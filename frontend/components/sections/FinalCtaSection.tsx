'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/lib/language-context';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { CardShapePattern } from '@/components/svg/CardShapePattern';
import { FadeIn } from '@/components/ui/MotionWrapper';
import { FaPhone, FaWhatsapp } from 'react-icons/fa6';

export const FinalCtaSection: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <section className="py-14 sm:py-20 bg-white">
      <Container>
        <FadeIn direction="up" duration={0.6}>
          <div className="relative overflow-hidden rounded-3xl bg-[#071F14] text-white p-8 sm:p-12 lg:p-16 shadow-xl border border-[#1E7C46]/40">
            {/* Background Resort Image with Overlay */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/dfi-aerial.webp"
                alt="Dhaka Fantasy Island - Aerial Masterplan View"
                fill
                sizes="100vw"
                className="object-cover object-center opacity-65"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#071F14]/85 via-[#071F14]/60 to-[#071F14]/35" />
            </div>

            {/* SVG Shape Pattern */}
            <CardShapePattern variant="crest" color="#22C55E" className="w-56 h-56 opacity-20" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Left Text */}
              <div className="space-y-3 text-center lg:text-left max-w-2xl">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-normal text-white leading-tight">
                  {lang === 'bn'
                    ? 'প্রকৃতির বুকে আপনার স্থায়ী সম্পদের গর্বিত অংশীদার হোন'
                    : 'Ready to Own a Piece of Paradise?'}
                </h2>
                <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed">
                  {lang === 'bn'
                    ? 'আজই যোগাযোগ করুন এবং আমাদের দায়িত্বশীল সিনিয়র প্রতিনিধি আপনার সাথে সরাসরি কথা বলবেন।'
                    : 'Enquire now and our representative will get in touch with you to guide your investment.'}
                </p>
              </div>

              {/* Right Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3.5 shrink-0">
                <Button
                  href="tel:+8801325074535"
                  variant="secondary"
                  size="lg"
                  className="bg-white/10 hover:bg-white/20 text-white border-white/25 rounded-2xl px-6 py-3.5 text-xs sm:text-sm font-mono shadow-sm backdrop-blur-md"
                >
                  <FaPhone className="w-3.5 h-3.5 mr-2 text-[#86EFAC]" />
                  <span>01325 074 535</span>
                </Button>

                <Button
                  href="https://wa.me/8801325074535"
                  external
                  variant="primary"
                  size="lg"
                  className="bg-[#1E7C46] hover:bg-[#176337] text-white border-[#22C55E]/40 rounded-2xl px-6 py-3.5 text-xs sm:text-sm shadow-lg font-semibold"
                >
                  <FaWhatsapp className="w-4 h-4 mr-2 text-[#86EFAC]" />
                  <span>Chat on WhatsApp</span>
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
};
