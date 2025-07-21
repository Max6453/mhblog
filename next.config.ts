import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

const withPWA = require('next-pwa')({
  dest: 'public', // where the service worker and workbox stuff will go
  register: true,
  skipWaiting: true
});

module.exports = withPWA({
  // your Next.js config here
});

export default nextConfig;
