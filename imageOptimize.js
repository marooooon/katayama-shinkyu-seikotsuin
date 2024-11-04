const path = require('path');
const fs = require('fs');
const sharp = require('sharp');

const inputDir =
  '/Users/daijiro/business-development/katayama-shinkyu-seikotsuin/public/images';
const outputDir =
  '/Users/daijiro/business-development/katayama-shinkyu-seikotsuin/public/optimized';

// 出力フォルダが存在しない場合は作成する
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

function optimizeImage(inputPath, outputPath) {
  return sharp(inputPath)
    .resize({ width: 800 }) // 必要に応じてサイズを指定
    .toFile(outputPath)
    .then(() => {
      console.log(`Optimized ${inputPath}`);
    })
    .catch((err) => {
      console.error(`Failed to optimize ${inputPath}: ${err.message}`);
    });
}

// 入力ディレクトリ内の画像を最適化
fs.readdir(inputDir, (err, files) => {
  if (err) {
    console.error(`Error reading directory: ${err.message}`);
    return;
  }

  files.forEach((file) => {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file); // 出力パスを別に設定

    // ファイルを圧縮
    optimizeImage(inputPath, outputPath);
  });
});
