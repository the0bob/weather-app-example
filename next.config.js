/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'api.weather.gov',
            port: '',
            pathname: '/icons/**',
        },
    ],
  },
}

module.exports = nextConfig
