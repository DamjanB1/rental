import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack(config, { isServer }) {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false, // Resolve 'fs' issue when using some Node.js libraries
      };
    }
    return config;
  },
};

export default nextConfig;