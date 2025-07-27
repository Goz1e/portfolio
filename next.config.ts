import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("https://cdn.pixabay.com/**"),
      new URL("https://media4.giphy.com/**"),
      new URL("https://media1.giphy.com/**"),
    ],
  },
};

export default nextConfig;
