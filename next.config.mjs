import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.resolve(__dirname, 'styles')],
  },
  output: 'export',
  assetPrefix:
    process.env.NODE_ENV === 'production' ? '/katayama-shinkyu-seikotsuin' : '',
  basePath:
    process.env.NODE_ENV === 'production' ? '/katayama-shinkyu-seikotsuin' : '',
  images: {
    unoptimized: true,
  },
  env: {
    BASE_PATH:
      process.env.NODE_ENV === 'production'
        ? '/katayama-shinkyu-seikotsuin'
        : '',
  },
};

export default nextConfig;
