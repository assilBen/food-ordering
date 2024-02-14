/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    
      domains: ['firebasestorage.googleapis.com'],
    
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'dawid-food-ordering.s3.amazonaws.com',
      },
    ]
  }
}

module.exports = nextConfig
