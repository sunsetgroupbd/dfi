import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dfi.com.bd';
  const currentDate = new Date().toISOString();

  const routes = [
    '',
    '/overview',
    '/packages',
    '/ownership',
    '/why-invest',
    '/location',
    '/gallery',
    '/contact',
    '/privacy-policy',
    '/terms',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route === '/packages' ? 0.9 : 0.8,
  }));
}
