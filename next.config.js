/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}
//DELETE
// module.exports = {
//   eslint: {
//     // Warning: This allows production builds to successfully complete even if
//     // your project has ESLint errors.
//     ignoreDuringBuilds: true,
//   },
// };
module.exports = {
  ...otherConfigs,
  images: {
    domains: ['https://media.timeout.com/images/105162351/image.jpg'], // hostname of the img url
  },
};

module.exports = nextConfig
