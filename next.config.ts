import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIF pesa ~40 % menos que WebP en la foto del hero (un semitono que
    // comprime mal). 448 = 224 px × 2, el tamaño de la foto en escritorio
    // retina; sin él, el navegador salta de 384 a 640.
    formats: ["image/avif", "image/webp"],
    imageSizes: [32, 48, 64, 96, 128, 256, 384, 448],
  },
  async redirects() {
    return [
      // La versión inglesa vivía en /?lang=en; ahora es /en.
      {
        source: "/",
        has: [{ type: "query", key: "lang", value: "en" }],
        destination: "/en",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
