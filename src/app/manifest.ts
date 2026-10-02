import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'NIVA Elevated Living - Luxury Dome Cabins India',
    short_name: 'NIVA',
    description: 'Manufacturer of luxury dome cabins, glamping pods, and modular resort accommodation in India.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0D0D0F',
    theme_color: '#C9A46A',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/favicon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
