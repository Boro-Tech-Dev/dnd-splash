/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  poweredByHeader: false,
  reactStrictMode: true,
  trailingSlash: true,
  // Git Flex / DCDeploy: no eslint in prod install; avoid blocked fonts.googleapis.com at build
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreDuringBuilds: true },
};

export default nextConfig;
