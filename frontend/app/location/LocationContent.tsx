'use client';

import React from 'react';
import { useLanguage } from '@/lib/language-context';
import { Container } from '@/components/ui/Container';
import { LocationSection } from '@/components/sections/LocationSection';
import { Button } from '@/components/ui/Button';
import { Phone, MessageCircle, Calendar } from 'lucide-react';

export const LocationContent: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <div className="py-12 sm:py-20 bg-white">
      {/* Header Banner */}
      <Container className="mb-14">
        <span className="text-xs font-semibold uppercase tracking-normal text-[#1E7C46]">
          {t.nav.location}
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] tracking-normal mt-2 max-w-3xl leading-tight">
          {t.location.title}
        </h1>
        <p className="text-base sm:text-lg text-[#4B5563] mt-4 max-w-2xl leading-relaxed">
          {t.location.subtitle}
        </p>
      </Container>

      {/* Main Location & Route Map Section */}
      <LocationSection />

      {/* Corporate Desk & Guided Tours Section */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E5E7EB]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="p-8 bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl shadow-sm space-y-4">
              <span className="text-xs font-semibold uppercase tracking-normal text-[#1E7C46]">
                {lang === 'bn' ? 'সরাসরি সাইট পরিদর্শন' : 'Guided Site Inspection'}
              </span>
              <h3 className="text-xl font-bold text-[#111827]">
                {lang === 'bn' ? 'সাইট ভিজিট অ্যাপয়েন্টমেন্ট নিন' : 'Book a Guided Site Tour'}
              </h3>
              <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                {lang === 'bn'
                  ? 'ধানমন্ডি ২৭ শপ্তক স্কয়ারের প্রধান কার্যালয় থেকে আমাদের সিনিয়র প্রতিনিধিদের সাথে সরাসরি মোহাম্মদপুর বসিলা সাইট পরিদর্শন করার সুযোগ রয়েছে। আজই শিডিউল বুক করুন।'
                  : 'Guided excursions depart on scheduled days directly from Sunset Group headquarters in Dhanmondi. Coordinate with an advisor to verify site progress firsthand.'}
              </p>
              <div className="pt-2">
                <Button href="/contact" variant="primary" size="md" className="rounded-xl">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{lang === 'bn' ? 'শিডিউল নির্ধারণ করুন' : 'Schedule Site Visit'}</span>
                </Button>
              </div>
            </div>

            <div className="p-8 bg-[#0D2F1D] text-white border border-[#1A452E] rounded-2xl shadow-md space-y-4">
              <span className="text-xs font-semibold uppercase tracking-normal text-[#86EFAC]">
                {lang === 'bn' ? 'প্রধান কার্যালয়' : 'Central Corporate Office'}
              </span>
              <h3 className="text-xl font-bold text-white">
                27 Shaptak Square, Dhanmondi
              </h3>
              <p className="text-xs sm:text-sm text-[#E5E7EB] leading-relaxed">
                27 Shaptak Square, Lift-11 (Level-11), Plot-2 (New), Road no-16, Old Dhanmondi 27, Dhanmondi, Dhaka-1209
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <Button href="tel:+8801325074535" variant="secondary" size="sm" className="bg-white/10 hover:bg-white/20 text-white border-white/25 rounded-xl">
                  <Phone className="w-3.5 h-3.5 mr-1.5" />
                  <span>+8801325074535</span>
                </Button>
                <Button
                  href="https://wa.me/8801325074535"
                  external
                  variant="primary"
                  size="sm"
                  className="rounded-xl"
                >
                  <MessageCircle className="w-3.5 h-3.5 mr-1.5 text-white" />
                  <span>WhatsApp</span>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
