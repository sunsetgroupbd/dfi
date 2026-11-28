'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';
import { Container } from '@/components/ui/Container';
import { FadeIn } from '@/components/ui/MotionWrapper';
import { FaYoutube } from 'react-icons/fa6';
import { 
  Waves, 
  UtensilsCrossed, 
  Trees, 
  Scale, 
  ArrowRight,
  ExternalLink,
  Play
} from 'lucide-react';

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

  const resortFeatures = [
    {
      icon: Waves,
      titleBn: 'স্বতন্ত্র ওভারওয়াটার কটেজ',
      titleEn: 'Overwater Eco-Cottages',
      descBn: 'জলাশয়ের স্নিগ্ধতায় ব্যক্তিগত বারান্দাসহ আধুনিক কটেজ',
      descEn: 'Serene water villas with private balcony views',
    },
    {
      icon: UtensilsCrossed,
      titleBn: 'লেকভিউ রেস্তোরাঁ ও ক্যাফে',
      titleEn: 'Lakeside Restaurant & Lounge',
      descBn: 'অর্গানিক খাবার ও মনোরম কফি কর্নারে আড্ডা',
      descEn: 'Farm-to-table cuisine & premium coffee lounge',
    },
    {
      icon: Trees,
      titleBn: 'সবুজ ওয়াকওয়ে ও বোটিং সুবিধা',
      titleEn: 'Nature Trails & Lake Boating',
      descBn: 'নিবিড় প্রকৃতির মাঝে হাঁটা ও প্রশান্তির লেকে নৌকাভ্রমণ',
      descEn: 'Lush tree-lined walking tracks & quiet lake boating',
    },
    {
      icon: Scale,
      titleBn: 'শরীয়াহ সম্মত হালাল মুনাফা',
      titleEn: 'Shariah Halal Income',
      descBn: 'স্বচ্ছ প্রাতিষ্ঠানিক হিসাব ও নৈতিক আয় বণ্টন',
      descEn: 'Transparent operations with certified ethical returns',
    },
  ];

  const handleSelectVideo = (vid: VideoItem) => {
    setActiveVideo(vid);
    setIsPlaying(true);
    if (playerRef.current) {
      playerRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  return (
    <section id="videos-section" className="py-14 sm:py-20 bg-[#F9FAFB] border-b border-[#E5E7EB]">
      <Container size="wide">
        {/* Section Header */}
        <FadeIn direction="up" className="mb-8 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1E7C46]">
            {lang === 'bn' ? 'রিসোর্টের অনন্য অভিজ্ঞতা' : 'RESORT EXPERIENCES'}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0D2F1D] tracking-tight mt-1">
            {lang === 'bn'
              ? 'সরেজমিনে ঢাকা ফ্যান্টাসি আইল্যান্ড'
              : 'Experience Dhaka Fantasy Island'}
          </h2>
        </FadeIn>

        {/* 2-Column Resort Experiences & Video Player (MRstudio Style) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Feature Highlights (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              {resortFeatures.map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-[#E5E7EB] hover:border-[#1E7C46]/40 transition-colors shadow-2xs group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#E8F5E9] border border-[#C8E6C9] flex items-center justify-center shrink-0 text-[#1E7C46] group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#111827] leading-tight">
                        {lang === 'bn' ? feat.titleBn : feat.titleEn}
                      </h3>
                      <p className="text-xs text-[#6B7280] mt-1 leading-snug">
                        {lang === 'bn' ? feat.descBn : feat.descEn}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Link to Full Masterplan / Gallery */}
            <div className="pt-1 flex flex-wrap items-center gap-3">
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1E7C46] hover:bg-[#166438] text-white text-xs sm:text-sm font-semibold shadow-xs transition-colors"
              >
                <span>{lang === 'bn' ? 'সকল অভিজ্ঞতা ও গ্যালারি' : 'Explore All Experiences'}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://www.youtube.com/@sunsetkuakatahotel"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white hover:bg-[#F3F4F6] border border-[#E5E7EB] text-xs sm:text-sm font-semibold text-[#111827] shadow-2xs transition-colors"
              >
                <FaYoutube className="w-4 h-4 text-[#FF0000]" />
                <span>{lang === 'bn' ? 'ইউটিউব চ্যানেল' : 'Official Channel'}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Video Player + Original YouTube Thumbnails */}
          <div className="lg:col-span-7 space-y-4">
            {/* Main Spotlight Video Frame */}
            <div
              ref={playerRef}
              className="relative aspect-video w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-[#071F14] border-2 border-white shadow-xl scroll-mt-24"
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

            {/* Active Video Info & Watch on YouTube */}
            <div className="p-3 sm:p-4 bg-white rounded-xl border border-[#E5E7EB] flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-2xs">
              <div>
                <span className="inline-block px-2.5 py-0.5 bg-[#E8F5E9] text-[#1E7C46] text-[10px] font-bold uppercase rounded-md mb-0.5">
                  {lang === 'bn' ? activeVideo.tagBn : activeVideo.tagEn}
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-[#111827] leading-tight">
                  {lang === 'bn' ? activeVideo.titleBn : activeVideo.titleEn}
                </h4>
              </div>
              <a
                href={activeVideo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1E7C46] hover:underline shrink-0"
              >
                <span>{lang === 'bn' ? 'ইউটিউবে দেখুন' : 'Watch on YouTube'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Row of Original YouTube Video Thumbnails */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3.5">
              {videos.map((vid) => {
                const isSelected = vid.youtubeId === activeVideo.youtubeId;
                return (
                  <button
                    key={vid.id}
                    onClick={() => handleSelectVideo(vid)}
                    className={`group relative aspect-[16/10] rounded-xl overflow-hidden border-2 text-left transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'border-[#1E7C46] ring-2 ring-[#1E7C46]/30 shadow-md scale-[1.02]'
                        : 'border-[#E5E7EB] hover:border-[#1E7C46]/50 opacity-80 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={`https://img.youtube.com/vi/${vid.youtubeId}/mqdefault.jpg`}
                      alt={vid.titleEn}
                      fill
                      unoptimized
                      sizes="30vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Play icon indicator */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/90 group-hover:bg-[#1E7C46] text-[#0D2F1D] group-hover:text-white flex items-center justify-center shadow-xs transition-colors">
                        <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                      </div>
                    </div>

                    <div className="absolute bottom-1.5 left-2 right-2 text-white">
                      <p className="text-[10px] font-bold truncate drop-shadow-xs">
                        {lang === 'bn' ? vid.tagBn : vid.tagEn}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
