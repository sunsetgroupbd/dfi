export type Language = 'bn' | 'en';

export interface PackageItem {
  id: string;
  name: string;
  nameBn: string;
  price: number;
  priceFormatted: string;
  priceFormattedBn: string;
  bookingAmount: number;
  bookingFormatted: string;
  bookingFormattedBn: string;
  landArea: number; // sft
  buildArea: number; // sft
  totalArea: number; // sft
  accommodationDays: number;
  accommodationDaysNote?: string;
  restaurantDiscount: number; // %
  extraDaysDiscount: number; // %
  popular?: boolean;
  isPlatinum?: boolean;
}

export interface WhyInvestItem {
  id: number;
  title: string;
  titleBn: string;
  description: string;
  descriptionBn: string;
  tag: string;
  tagBn: string;
  highlight?: boolean;
  clientToVerify?: boolean; // For items 7 & 9
}

export interface OwnershipStep {
  step: number;
  title: string;
  titleBn: string;
  subtitle: string;
  subtitleBn: string;
  description: string;
  descriptionBn: string;
  badge: string;
  badgeBn: string;
}

export interface FAQItem {
  id: string;
  question: string;
  questionBn?: string;
  answer: string;
  answerBn?: string;
  category?: string;
}

export interface InquiryFormData {
  fullName: string;
  phone: string;
  email?: string;
  packageId?: string;
  message?: string;
  honeypot?: string;
}

export interface ApiResponse<T> {
  data: T;
  meta?: {
    total?: number;
    page?: number;
    limit?: number;
  };
}

export interface ApiError {
  statusCode: number;
  message: string | string[];
  errors?: Record<string, string[]>;
}

export interface SiteSettings {
  projectName: string;
  projectNameBn: string;
  tagline: string;
  taglineBn: string;
  parentCompany: string;
  parentCompanyBn: string;
  phone: string;
  whatsappNumber: string;
  whatsappUrl: string;
  email: string;
  address: string;
  addressBn: string;
  startingPrice: number;
  monthlyInstallmentStarting: number; // // TODO: CLIENT TO CONFIRM
  socialLinks: {
    facebook: string;
    instagram: string;
    youtube: string;
    linkedin: string;
  };
}

export interface GalleryItem {
  id: string;
  title: string;
  titleBn: string;
  category: 'resort' | 'nature' | 'masterplan' | 'interior';
  categoryLabel: string;
  categoryLabelBn: string;
  aspectRatio: 'landscape' | 'portrait' | 'square';
  placeholderColor: string;
  accentElement: 'island' | 'water' | 'landscape' | 'villa' | 'wellness' | 'lake';
  caption: string;
  captionBn: string;
  imageSrc?: string;
}
