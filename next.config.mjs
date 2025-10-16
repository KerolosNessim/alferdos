/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "school-template.subcodeco.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
