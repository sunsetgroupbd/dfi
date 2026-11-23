import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans, Hind_Siliguri, Noto_Serif_Bengali } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/lib/language-context';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/layout/WhatsAppButton';
import { SkipLink } from '@/components/layout/SkipLink';
import { JsonLd } from '@/components/seo/JsonLd';

const playfair = Playfair_Display({
  weight: ['600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

const hindSiliguri = Hind_Siliguri({
  weight: ['400', '500', '600', '700'],
  subsets: ['bengali'],
  variable: '--font-hind-siliguri',
  display: 'swap',
});

const notoSerifBengali = Noto_Serif_Bengali({
  weight: ['500', '600', '700'],
  subsets: ['bengali'],
  variable: '--font-noto-serif-bengali',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://dfi.com.bd'),
  title: {
    default: 'Dhaka Fantasy Island (Eco Hotel & Resort) | Sunset Group',
    template: '%s | Dhaka Fantasy Island',
  },
  description:
    'Dhaka Fantasy Island is a premium eco-hotel & resort project by Sunset Group in planned Mohammadpur, Dhaka. Deeded Saf-Kabala land share ownership, Shariah supervisory oversight, and serene natural living.',
  keywords: [
    'Dhaka Fantasy Island',
    'DFI Eco Resort',
    'Sunset Group',
    'Sunset Kuakata Hotel and Resort',
    'Saf-Kabala Ownership',
    'Mohammadpur Eco Resort',
    'Halal Investment Bangladesh',
    'Eco Hotel Dhaka',
    'Basila Garden City',
  ],
  authors: [{ name: 'Sunset Kuakata Hotel & Resort Limited' }],
  creator: 'Sunset Group',
  publisher: 'Sunset Kuakata Hotel & Resort Limited',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://dfi.com.bd',
    languages: {
      'bn-BD': 'https://dfi.com.bd',
      'en-US': 'https://dfi.com.bd',
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'DFI Resort',
  },
  openGraph: {
    type: 'website',
    locale: 'bn_BD',
    alternateLocale: 'en_US',
    url: 'https://dfi.com.bd',
    siteName: 'Dhaka Fantasy Island',
    title: 'ঢাকা ফ্যান্টাসি আইল্যান্ড (ইকো হোটেল এন্ড রিসোর্ট) | সানসেট গ্রুপ',
    description:
      'শহরের প্রাণকেন্দ্রে কোলাহল মুক্ত প্রকৃতির শান্ত পরিবেশে ঢাকা ফ্যান্টাসি আইল্যান্ড। সাফ-কবলা মালিকানা ও শরীয়াহ সুপারভাইজরি কমিটি তত্ত্বাবধানে বিশ্বস্ত বিনিয়োগ।',
    images: [
      {
        url: 'https://dfi.com.bd/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Dhaka Fantasy Island - Eco Hotel & Resort by Sunset Group',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dhaka Fantasy Island (Eco Hotel & Resort) | Sunset Group',
    description:
      'A peaceful natural environment away from the noise, in the heart of Dhaka. Deeded Saf-Kabala land share ownership and halal hospitality investment.',
    images: ['https://dfi.com.bd/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="bn"
      suppressHydrationWarning
      className={`${playfair.variable} ${plusJakarta.variable} ${hindSiliguri.variable} ${notoSerifBengali.variable} h-full`}
    >
      <head>
        <JsonLd />
      </head>
      <body className="min-h-full flex flex-col bg-white text-[#111827] font-sans antialiased selection:bg-[#1E7C46] selection:text-white">
        <LanguageProvider initialLang="bn">
          <SkipLink />
          <Header />
          <main id="main-content" className="flex-1 pt-20">
            {children}
          </main>
          <WhatsAppButton />
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
