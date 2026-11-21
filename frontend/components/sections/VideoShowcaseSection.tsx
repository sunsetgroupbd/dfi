'use client';

import React, { useState, useRef } from 'react';
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
  tagBn: string;
  tagEn: string;
}

const videos: VideoItem[] = [
  {
    id: 'vid-1',
    youtubeId: 'RaqvrqdSCe4',
    url: 'https://youtu.be/RaqvrqdSCe4',
    titleBn: 'ঢাকা ফ্যান্টাসি আইল্যান্ড: ইকো রিসোর্ট রূপরেখা',
    titleEn: 'Dhaka Fantasy Island: Eco Resort Masterplan',
    tagBn: 'প্রকল্প রূপরেখা',
    tagEn: 'Master Concept',
  },
  {
    id: 'vid-3',
    youtubeId: '8Du9_iFm9Jg',
    url: 'https://youtu.be/8Du9_iFm9Jg',
    titleBn: 'সাফ-কবলা মালিকানা ও শরীয়াহ সুপারভাইজরি কাঠামো',
    titleEn: 'Deeded Saf-Kabala & Shariah Governance',
    tagBn: 'মালিকানা ও শরীয়াহ',
    tagEn: 'Legal & Shariah',
  },
  {
    id: 'vid-2',
    youtubeId: 'ZhdYu9ZJmLg',
    url: 'https://youtu.be/ZhdYu9ZJmLg',
    titleBn: 'মোহাম্মদপুর বসিলা সাইট ও সরেজমিন উন্নয়ন',
    titleEn: 'Mohammadpur Basila Site Walkthrough',
    tagBn: 'সাইট পরিদর্শন',
    tagEn: 'Site Inspection',
  },
];

export const VideoShowcaseSection: React.FC = () => {
  const { lang } = useLanguage();
  const [activeVideo, setActiveVideo] = useState<VideoItem>(videos[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const playerRef = useRef<HTMLDivElement>(null);

  const handleSelectVideo = (vid: VideoItem) => {
    setActiveVideo(vid);
    setIsPlaying(true);
    // Smoothly scroll the spotlight player into view on mobile
    if (playerRef.current) {
      playerRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  return (
    <section id="videos-section" className="py-12 sm:py-18 bg-[#F9FAFB] border-b border-[#E5E7EB]">
      <Container>
        {/* Section Header with concise high-impact copy */}
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-6 sm:mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#E5E7EB] text-[#1E7C46] text-xs font-semibold uppercase tracking-normal rounded-xl shadow-2xs mb-2">
                <FaYoutube className="w-3.5 h-3.5 text-[#FF0000]" />
                <span>{lang === 'bn' ? 'অফিসিয়াল ভিডিও' : 'OFFICIAL VIDEOS'}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] tracking-normal leading-tight">
                {lang === 'bn'
                  ? 'সরেজমিনে ঢাকা ফ্যান্টাসি আইল্যান্ড'
                  : 'Experience Dhaka Fantasy Island'}
              </h2>
            </div>

            <a
              href="https://www.youtube.com/@sunsetkuakatahotel"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white hover:bg-[#F3F4F6] border border-[#E5E7EB] text-xs font-semibold text-[#111827] rounded-xl transition-colors shadow-2xs shrink-0 self-start md:self-auto"
            >
              <FaYoutube className="w-4 h-4 text-[#FF0000]" />
              <span>{lang === 'bn' ? 'ইউটিউব চ্যানেল' : 'Official Channel'}</span>
              <ExternalLink className="w-3 h-3 text-[#6B7280]" />
            </a>
          </div>
        </FadeIn>

        {/* Interactive Feature: Main Spotlight Video Player */}
        <FadeIn direction="up" delay={0.1} className="mb-6 sm:mb-8">
          <div
            ref={playerRef}
            className="relative aspect-video w-full rounded-2xl overflow-hidden bg-[#071F14] border border-[#E5E7EB] shadow-lg scroll-mt-24"
          >
            <iframe
              key={`${activeVideo.youtubeId}-${isPlaying}`}
              src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeId}?autoplay=${isPlaying ? 1 : 0}&rel=0&modestbranding=1`}
              title={lang === 'bn' ? activeVideo.titleBn : activeVideo.titleEn}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              className="w-full h-full border-0"
            />
          </div>

          {/* Active video metadata bar - clean & concise */}
          <div className="mt-3 p-3.5 sm:p-4 bg-white rounded-xl border border-[#E5E7EB] flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 shadow-2xs">
            <div>
              <span className="inline-block px-2.5 py-0.5 bg-[#E8F5E9] text-[#1E7C46] text-[11px] font-bold uppercase rounded-md mb-1">
                {lang === 'bn' ? activeVideo.tagBn : activeVideo.tagEn}
              </span>
              <h3 className="text-sm sm:text-base font-bold text-[#111827] leading-tight">
                {lang === 'bn' ? activeVideo.titleBn : activeVideo.titleEn}
              </h3>
            </div>

            <a
              href={activeVideo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1E7C46] hover:underline shrink-0"
            >
              <span>{lang === 'bn' ? 'ইউটিউবে দেখুন' : 'Watch on YouTube'}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </FadeIn>

        {/* 3 Video Selection Cards (3 in a row on desktop & tablet, compact on mobile) */}
        <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {videos.map((vid, idx) => {
            const isSelected = vid.youtubeId === activeVideo.youtubeId;
            return (
              <StaggerItem key={vid.id}>
                <div
                  onClick={() => handleSelectVideo(vid)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleSelectVideo(vid);
                    }
                  }}
                  className={`p-3 sm:p-4 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col justify-between text-left group hover:-translate-y-1 ${
                    isSelected
                      ? 'bg-white border-[#1E7C46] ring-2 ring-[#1E7C46]/20 shadow-md'
                      : 'bg-white hover:bg-[#F3F4F6] border-[#E5E7EB] hover:border-[#1E7C46]/40 shadow-2xs'
                  }`}
                >
                  <div>
                    <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-black mb-2">
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
                        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#FF0000] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <FaPlay className="w-3 h-3 ml-0.5" />
                        </div>
                      </div>
                      <span className="absolute bottom-1.5 right-1.5 px-1.5 py-0.5 bg-black/80 text-white text-[10px] font-semibold rounded">
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
                      {isSelected && isPlaying
                        ? lang === 'bn' ? '● এখন চলছে' : '● Now Playing'
                        : isSelected
                        ? lang === 'bn' ? '● নির্বাচিত' : '● Selected'
                        : lang === 'bn' ? 'চালান' : 'Play Video'}
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
