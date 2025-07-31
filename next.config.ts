import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'about.sourceacademy.org',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'devicon.dev',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.phaser.io',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'gitlab.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.softexia.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;
