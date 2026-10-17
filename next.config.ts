import type { NextConfig } from "next";

const repo = process.env.GITHUB_PAGES === "1" ? "/mediacoach-intro" : "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: repo,
  assetPrefix: repo || undefined,
  trailingSlash: true,
};

export default nextConfig;
