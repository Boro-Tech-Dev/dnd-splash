/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  poweredByHeader: false,
  reactStrictMode: true,
  trailingSlash: true,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreDuringBuilds: false },
};

export default nextConfig;
