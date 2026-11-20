'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/lib/language-context';
import { Container } from '@/components/ui/Container';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/MotionWrapper';
import { FaYoutube, FaPlay } from 'react-icons/fa6';
import { ExternalLink } from 'lucide-react';

interface VideoItem {
  id: string;
  youtubeId: string;
  url: string;
  titleBn: string;
  titleEn: string;
  descBn: string;
  descEn: string;
  tagBn: string;
  tagEn: string;
}

const videos: VideoItem[] = [
  {
    id: 'vid-1',
    youtubeId: 'RaqvrqdSCe4',
    url: 'https://youtu.be/RaqvrqdSCe4',
    titleBn: 'ঢাকা ফ্যান্টাসি আইল্যান্ড: ইকো রিসোর্ট প্রকল্প রূপরেখা ও সম্ভাবনা',
    titleEn: 'Dhaka Fantasy Island: Eco Resort Masterplan & Future Potential',
    descBn: 'প্রকল্পের প্রাকৃতিক অবস্থান, মাস্টারপ্ল্যান ও আধুনিক ইকো-হোটেলের পূর্ণাঙ্গ ভিডিও উপস্থাপনা।',
    descEn: 'Comprehensive official overview of the eco-resort masterplan and investment vision.',
    tagBn: 'প্রকল্প পরিচিতি',
    tagEn: 'Master Concept',
  },
  {
    id: 'vid-2',
    youtubeId: 'ZhdYu9ZJmLg',
    url: 'https://youtu.be/ZhdYu9ZJmLg',
    titleBn: 'মোহাম্মদপুর বসিলা সাইট ও সরেজমিন উন্নয়ন পরিদর্শন',
    titleEn: 'Mohammadpur Basila Site & Ground Development Walkthrough',
    descBn: 'ধানমন্ডি সংলগ্ন বসিলা এভিনিউ রোডে প্রকল্পের বাস্তব সাইট পরিদর্শন ও সংযোগ সড়ক বিবরণী।',
    descEn: 'On-ground video footage of the Mohammadpur Basila site connectivity and landscape.',
    tagBn: 'সাইট পরিদর্শন',
    tagEn: 'Site Inspection',
  },
  {
    id: 'vid-3',
    youtubeId: '8Du9_iFm9Jg',
    url: 'https://youtu.be/8Du9_iFm9Jg',
    titleBn: 'সাফ-কবলা মালিকানা ও শরীয়াহ সুপারভাইজরি কমিটি কাঠামো',
    titleEn: 'Deeded Saf-Kabala Ownership & Shariah Supervisory Governance',
    descBn: 'স্থায়ী দলিলের আইনি সুরক্ষা, প্রাতিষ্ঠানিক জবাবদিহিতা ও হালাল আয়ের মডেল বিস্তারিত।',
    descEn: 'In-depth explanation of the permanent registered title and ethical halal return structure.',
    tagBn: 'আইনি সুরক্ষা',
    tagEn: 'Statutory Governance',
  },
];

export const VideoShowcaseSection: React.FC = () => {
  const { lang } = useLanguage();
  const [activeVideo, setActiveVideo] = useState<VideoItem>(videos[0]);

  return (
    <section id="videos-section" className="py-14 sm:py-20 bg-[#F9FAFB] border-b border-[#E5E7EB]">
      <Container>
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#E5E7EB] text-[#1E7C46] text-xs font-semibold uppercase tracking-normal rounded-xl shadow-2xs mb-2">
                <FaYoutube className="w-3.5 h-3.5 text-[#FF0000]" />
                <span>{lang === 'bn' ? 'অফিসিয়াল ভিডিও ও তথ্যচিত্র' : 'OFFICIAL PROJECT VIDEOS'}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111827] tracking-normal leading-tight">
                {lang === 'bn'
                  ? 'সরেজমিনে ঢাকা ফ্যান্টাসি আইল্যান্ড'
                  : 'Experience Dhaka Fantasy Island'}
              </h2>
              <p className="text-xs sm:text-sm text-[#4B5563] mt-2 leading-relaxed">
                {lang === 'bn'
                  ? 'প্রকল্পের মহাপরিকল্পনা, সাইটের বাস্তব চিত্র ও সাফ-কবলা মালিকানা কাঠামোর প্রামাণ্য ভিডিওসমূহ সরাসরি দেখুন।'
                  : 'Watch official documentaries, site inspections, and legal ownership walk-throughs.'}
              </p>
            </div>

            <a
              href="https://www.youtube.com/@sunsetkuakatahotel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-[#F3F4F6] border border-[#E5E7EB] text-xs font-semibold text-[#111827] rounded-xl transition-colors shadow-2xs shrink-0 self-start md:self-auto"
            >
              <FaYoutube className="w-4 h-4 text-[#FF0000]" />
              <span>{lang === 'bn' ? 'ইউটিউব চ্যানেল' : 'Official Channel'}</span>
              <ExternalLink className="w-3 h-3 text-[#6B7280]" />
            </a>
          </div>
        </FadeIn>

        {/* Interactive Feature: Main Spotlight Video Player */}
        <FadeIn direction="up" delay={0.1} className="mb-8">
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-[#071F14] border border-[#E5E7EB] shadow-lg">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeId}?rel=0&modestbranding=1`}
              title={lang === 'bn' ? activeVideo.titleBn : activeVideo.titleEn}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              className="w-full h-full border-0"
            />
          </div>

          {/* Active video metadata bar */}
          <div className="mt-3.5 p-4 bg-white rounded-xl border border-[#E5E7EB] flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs">
            <div>
              <span className="inline-block px-2.5 py-0.5 bg-[#E8F5E9] text-[#1E7C46] text-[11px] font-bold uppercase rounded-md mb-1">
                {lang === 'bn' ? activeVideo.tagBn : activeVideo.tagEn}
              </span>
              <h3 className="text-sm sm:text-base font-bold text-[#111827] leading-tight">
                {lang === 'bn' ? activeVideo.titleBn : activeVideo.titleEn}
              </h3>
              <p className="text-xs text-[#6B7280] mt-0.5">
                {lang === 'bn' ? activeVideo.descBn : activeVideo.descEn}
              </p>
            </div>

            <a
              href={activeVideo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1E7C46] hover:underline shrink-0"
            >
              <span>{lang === 'bn' ? 'ইউটিউবে সরাসরি দেখুন' : 'Open in YouTube'}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </FadeIn>

        {/* 3 Video Selection Cards (3 in a row on desktop & tablet, scroll or 3 in a row on mobile) */}
        <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
          {videos.map((vid, idx) => {
            const isSelected = vid.youtubeId === activeVideo.youtubeId;
            return (
              <StaggerItem key={vid.id}>
                <div
                  onClick={() => setActiveVideo(vid)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveVideo(vid);
                    }
                  }}
                  className={`p-3.5 sm:p-4 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col justify-between text-left group hover:-translate-y-1 ${
                    isSelected
                      ? 'bg-white border-[#1E7C46] ring-2 ring-[#1E7C46]/20 shadow-md'
                      : 'bg-white hover:bg-[#F3F4F6] border-[#E5E7EB] hover:border-[#1E7C46]/40 shadow-2xs'
                  }`}
                >
                  <div>
                    <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-black mb-2.5">
                      {/* YouTube High-Res Thumbnail */}
                      <Image
                        src={`https://img.youtube.com/vi/${vid.youtubeId}/mqdefault.jpg`}
                        alt={lang === 'bn' ? vid.titleBn : vid.titleEn}
                        fill
                        unoptimized
                        sizes="(max-width: 640px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/25 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                        <div className="w-9 h-9 rounded-full bg-[#FF0000] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <FaPlay className="w-3.5 h-3.5 ml-0.5" />
                        </div>
                      </div>
                      <span className="absolute bottom-1.5 right-1.5 px-1.5 py-0.5 bg-black/80 text-white font-mono text-[10px] rounded">
                        Video {idx + 1}
                      </span>
                    </div>

                    <span className="inline-block px-2 py-0.5 bg-[#F3F4F6] text-[#4B5563] text-[10px] font-bold uppercase rounded mb-1">
                      {lang === 'bn' ? vid.tagBn : vid.tagEn}
                    </span>

                    <h4 className="text-xs sm:text-[13px] font-bold text-[#111827] line-clamp-2 leading-snug">
                      {lang === 'bn' ? vid.titleBn : vid.titleEn}
                    </h4>
                  </div>

                  <div className="mt-2.5 pt-2 border-t border-[#F3F4F6] flex items-center justify-between text-[11px]">
                    <span className={isSelected ? 'text-[#1E7C46] font-bold' : 'text-[#6B7280]'}>
                      {isSelected
                        ? lang === 'bn' ? '● এখন চলছে' : '● Now Playing'
                        : lang === 'bn' ? 'ক্লিক করে চালান' : 'Click to Play'}
                    </span>
                    <FaYoutube className="w-3.5 h-3.5 text-[#FF0000]" />
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
};
