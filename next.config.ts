import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lcys1wrcdzsbzani.public.blob.vercel-storage.com', 
      },
    ],
  },
};

export default nextConfig;
