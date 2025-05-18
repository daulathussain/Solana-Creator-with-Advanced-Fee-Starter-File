/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  output: "export",
  images: {
    domains: ["arweave.net", "raw.githubusercontent.com"],
    unoptimized: true,
  },
};
