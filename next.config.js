/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // ✅ Image optimization (Vercel-friendly)
  images: {
    unoptimized: true, // 🔥 safer for static assets / no config issues
  },

  // ✅ Fix for fs module issue (client-side)
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;