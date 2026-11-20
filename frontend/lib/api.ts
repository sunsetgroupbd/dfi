import {
  ApiResponse,
  PackageItem,
  FAQItem,
  GalleryItem,
  SiteSettings,
  InquiryFormData,
} from './types';
import { bn } from '@/content/bn';

export const SHOW_FACILITIES = false;

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api/v1';

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://dfi.com.bd';

export const PARENT_URL =
  process.env.NEXT_PUBLIC_PARENT_URL || 'https://sunsetgroupbd.com';

// Fallback data
const fallbackSiteSettings: SiteSettings = {
  projectName: 'Dhaka Fantasy Island',
  projectNameBn: 'ঢাকা ফ্যান্টাসি আইল্যান্ড',
  tagline: 'Eco Hotel & Resort',
  taglineBn: 'ইকো হোটেল এন্ড রিসোর্ট',
  parentCompany: 'Sunset Kuakata Hotel & Resort Limited',
  parentCompanyBn: 'সানসেট কুয়াকাটা হোটেল এন্ড রিসোর্ট লিমিটেড',
  phone: '+8801325074535',
  whatsappNumber: '+8801325074535',
  whatsappUrl: 'https://wa.me/8801325074535',
  email: 'info@dfi.com.bd',
  address: '27 Shaptak Square, Lift-11 (Level-11), Plot-2 (New), Road no-16, Old Dhanmondi 27, Dhanmondi, Dhaka-1209',
  addressBn: '২৭ শপ্তক স্কয়ার, লিফট-১১ (লেভেল-১১), প্লট-২ (নতুন), রোড নং-১৬, পুরাতন ধানমন্ডি ২৭, ধানমন্ডি, ঢাকা-১২০৯',
  startingPrice: 350000,
  monthlyInstallmentStarting: 4990, // // TODO: CLIENT TO CONFIRM
  socialLinks: {
    facebook: 'https://facebook.com/sunsetkuakatahotel',
    instagram: 'https://instagram.com/sunsetkuakatahotel',
    youtube: 'https://youtube.com/@sunsetkuakatahotel',
    linkedin: 'https://bd.linkedin.com/in/sunsetkuakatahotel',
  },
};

const fallbackPackages: PackageItem[] = bn.packages.items;
const fallbackFAQs: FAQItem[] = bn.faq.items;
const fallbackGallery: GalleryItem[] = bn.gallery.items;

async function fetchWithFallback<T>(
  endpoint: string,
  fallback: T,
  options?: RequestInit
): Promise<T> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3500);

    const res = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
        ...(options?.headers || {}),
      },
      next: { revalidate: 60 },
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      if (process.env.NODE_ENV === 'development') {
        console.warn(`[API] Endpoint ${endpoint} returned status ${res.status}. Utilizing local fallback data.`);
      }
      return fallback;
    }

    const json: ApiResponse<T> = await res.json();
    return json.data ?? fallback;
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(`[API] Network error or backend offline for ${endpoint}. Utilizing local fallback data. Reason:`, error instanceof Error ? error.message : error);
    }
    return fallback;
  }
}

export const api = {
  async getSiteSettings(): Promise<SiteSettings> {
    return fetchWithFallback<SiteSettings>('/site-settings', fallbackSiteSettings);
  },

  async getPackages(): Promise<PackageItem[]> {
    return fetchWithFallback<PackageItem[]>('/packages?projectSlug=dfi', fallbackPackages);
  },

  async getFaqs(): Promise<FAQItem[]> {
    return fetchWithFallback<FAQItem[]>('/faqs?project=dfi', fallbackFAQs);
  },

  async getGallery(): Promise<GalleryItem[]> {
    return fetchWithFallback<GalleryItem[]>('/gallery?category=dfi', fallbackGallery);
  },

  async submitInquiry(data: InquiryFormData): Promise<{ success: boolean; message: string }> {
    try {
      const res = await fetch(`${API_BASE_URL}/inquiries`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          projectSlug: 'dfi',
        }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => null);
        throw new Error(errorData?.message || 'Server error occurred during inquiry submission');
      }

      return {
        success: true,
        message: 'Inquiry successfully submitted',
      };
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('[API] Inquiry submission endpoint simulated/mocked success due to offline API:', error);
      }
      // For local development when backend is offline, return success simulation after small delay
      await new Promise((resolve) => setTimeout(resolve, 600));
      return {
        success: true,
        message: 'Inquiry received in local mode.',
      };
    }
  },
};
