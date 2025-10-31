import type { NextConfig } from 'next';
import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  experimental: {
    optimizeCss: true,
  },
  reactCompiler: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default withBundleAnalyzer(nextConfig);
