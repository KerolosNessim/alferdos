/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "school-management.prower.store",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
