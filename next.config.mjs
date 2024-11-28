/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['knex'],
  },
  sassOptions: {
    includePaths: ['./src/styles'],
  },
}

export default nextConfig
