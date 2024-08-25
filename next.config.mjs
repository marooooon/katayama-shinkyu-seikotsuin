/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  basePath: isProd ? '/katayama-shinkyu-seikotsuin' : '',
  assetPrefix: isProd ? '/katayama-shinkyu-seikotsuin/' : '',
};

export default nextConfig;
