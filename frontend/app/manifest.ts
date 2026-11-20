import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Dhaka Fantasy Island (Eco Hotel & Resort)',
    short_name: 'DFI Resort',
    description:
      'Eco Hotel & Resort in planned Mohammadpur, Dhaka by Sunset Group. Deeded Saf-Kabala land share ownership and halal hospitality investment.',
    start_url: '/',
    display: 'standalone',
    background_color: '#071F14',
    theme_color: '#1E7C46',
    icons: [
      {
        src: '/favicon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
      },
      {
        src: '/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/web-app-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/web-app-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  };
}
