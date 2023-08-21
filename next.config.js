/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  env: {
    mongodb_username: "gatorfl2014",
    mongodb_password: "45HSadBS9JNdx4Py",
    mongodb_clustername: "cluster0",
  },
  experimental: {
    mdxRs: true,
  },
};

module.exports = nextConfig;

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
