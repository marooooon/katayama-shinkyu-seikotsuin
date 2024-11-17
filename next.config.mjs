import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.resolve(__dirname, 'styles')],
  },
  output: 'export', // 静的エクスポート用の設定
  assetPrefix:
    process.env.NODE_ENV === 'production'
      ? '/katayama-shinkyu-seikotsuin/'
      : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
