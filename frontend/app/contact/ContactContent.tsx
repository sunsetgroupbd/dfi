'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { useLanguage } from '@/lib/language-context';
import { Container } from '@/components/ui/Container';
import { InquiryForm } from '@/components/sections/InquiryForm';
import { 
  FaPhone, 
  FaWhatsapp, 
  FaEnvelope, 
  FaLocationDot, 
  FaClock, 
  FaFacebookF, 
  FaInstagram, 
  FaYoutube, 
  FaLinkedinIn 
} from 'react-icons/fa6';

export const ContactContent: React.FC = () => {
  const searchParams = useSearchParams();
  const initialPkg = searchParams.get('pkg') || '';
  const { lang, t } = useLanguage();

  return (
    <div className="py-12 sm:py-20 bg-white">
      {/* Header Banner */}
      <Container className="mb-14">
        <span className="text-xs font-semibold uppercase tracking-normal text-[#1E7C46]">
          {t.nav.contact}
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] tracking-normal mt-2 max-w-3xl leading-tight">
          {t.contact.title}
        </h1>
        <p className="text-base sm:text-lg text-[#4B5563] mt-4 max-w-2xl leading-relaxed">
          {t.contact.subtitle}
        </p>
      </Container>

      {/* Main Grid: Contact Details Left (5 cols) & Inquiry Form Right (7 cols) */}
      <Container className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* Left Column: Direct Contacts */}
          <div className="lg:col-span-5 space-y-6">
            {/* Headquarters Card */}
            <div className="bg-[#0D2F1D] text-white p-6 sm:p-8 rounded-2xl border border-[#1A452E] space-y-4 shadow-sm">
              <span className="text-xs font-semibold uppercase tracking-normal text-[#86EFAC] flex items-center gap-2">
                <FaLocationDot className="w-4 h-4" />
                <span>{t.contact.officeTitle}</span>
              </span>

              <h3 className="text-xl font-bold text-white">
                27 Shaptak Square
              </h3>

              <div className="space-y-1 text-xs sm:text-sm text-[#E5E7EB] leading-relaxed">
                {t.contact.officeAddressLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>

              <div className="pt-4 border-t border-[#1A452E] space-y-3 text-xs">
                <div className="flex items-center gap-2.5">
                  <FaClock className="w-4 h-4 text-[#86EFAC] shrink-0" />
                  <span className="text-[#E5E7EB]">
                    {lang === 'bn' ? 'শনিবার - বৃহস্পতিবার: সকাল ১০:০০ - সন্ধ্যা ৭:০০ (রবিবার বন্ধ)' : 'Saturday - Thursday: 10:00 AM - 7:00 PM (Sunday Closed)'}
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Hotlines */}
            <div className="bg-white border border-[#E5E7EB] p-6 rounded-2xl space-y-4 shadow-xs">
              <span className="text-xs font-semibold uppercase tracking-normal text-[#111827] block">
                {lang === 'bn' ? 'সরাসরি যোগাযোগ মাধ্যম' : 'Direct Channels'}
              </span>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-center justify-between p-3.5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl hover:border-[#1E7C46]/40 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <FaPhone className="w-4 h-4 text-[#1E7C46]" />
                    <span className="font-semibold text-[#111827]">{t.contact.phoneLabel}</span>
                  </div>
                  <a href="tel:+8801325074535" className="font-mono font-bold text-[#1E7C46] hover:underline">
                    +880 1325 074 535
                  </a>
                </div>

                <div className="flex items-center justify-between p-3.5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl hover:border-[#1E7C46]/40 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <FaWhatsapp className="w-4 h-4 text-[#25D366]" />
                    <span className="font-semibold text-[#111827]">{t.contact.whatsappLabel}</span>
                  </div>
                  <a
                    href="https://wa.me/8801325074535"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono font-bold text-[#1E7C46] hover:underline"
                  >
                    +880 1325 074 535
                  </a>
                </div>

                <div className="flex items-center justify-between p-3.5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl hover:border-[#1E7C46]/40 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <FaEnvelope className="w-4 h-4 text-[#1E7C46]" />
                    <span className="font-semibold text-[#111827]">Official Email</span>
                  </div>
                  <a href="mailto:sunsetgroupbd@gmail.com" className="font-mono text-xs text-[#1E7C46] hover:underline">
                    sunsetgroupbd@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Networks Box */}
            <div className="bg-[#F9FAFB] border border-[#E5E7EB] p-6 rounded-2xl space-y-3">
              <span className="font-semibold text-[#111827] uppercase tracking-normal text-[11px] block">
                {lang === 'bn' ? 'সানসেট গ্রুপ অফিসিয়াল মিডিয়া' : 'Sunset Group Official Media'}
              </span>
              <div className="flex flex-wrap gap-2.5 pt-1">
                <a
                  href="https://www.facebook.com/share/1LnvD5hqVL/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-[#E5E7EB] rounded-xl text-xs font-medium text-[#111827] hover:bg-[#1E7C46] hover:text-white hover:border-[#1E7C46] transition-colors shadow-2xs"
                >
                  <FaFacebookF className="w-3.5 h-3.5" />
                  <span>Facebook</span>
                </a>
                <a
                  href="https://instagram.com/sunsetkuakatahotel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-[#E5E7EB] rounded-xl text-xs font-medium text-[#111827] hover:bg-[#1E7C46] hover:text-white hover:border-[#1E7C46] transition-colors shadow-2xs"
                >
                  <FaInstagram className="w-3.5 h-3.5" />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://youtube.com/@sunsetkuakatahotel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-[#E5E7EB] rounded-xl text-xs font-medium text-[#111827] hover:bg-[#1E7C46] hover:text-white hover:border-[#1E7C46] transition-colors shadow-2xs"
                >
                  <FaYoutube className="w-3.5 h-3.5" />
                  <span>YouTube</span>
                </a>
                <a
                  href="https://bd.linkedin.com/in/sunsetkuakatahotel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-[#E5E7EB] rounded-xl text-xs font-medium text-[#111827] hover:bg-[#1E7C46] hover:text-white hover:border-[#1E7C46] transition-colors shadow-2xs"
                >
                  <FaLinkedinIn className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://wa.me/8801325074535"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-[#E5E7EB] rounded-xl text-xs font-medium text-[#111827] hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-colors shadow-2xs"
                >
                  <FaWhatsapp className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="mb-4">
              <h2 className="text-xl font-bold text-[#111827]">
                {t.contact.formTitle}
              </h2>
              <p className="text-xs sm:text-sm text-[#4B5563] mt-1">
                {t.contact.formSubtitle}
              </p>
            </div>

            <InquiryForm initialPackageId={initialPkg} />
          </div>
        </div>
      </Container>
    </div>
  );
};
