import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/rakanchat-apk",
        destination:
          "https://drive.google.com/file/d/1Uyqjt1MFQDjqYybLXBHNlftbllBalwB2/view?usp=sharing",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
