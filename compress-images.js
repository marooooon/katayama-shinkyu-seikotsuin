// compress-images.js
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// 圧縮設定
const compressionOptions = {
  quality: 80, // 圧縮品質（0〜100）。80は良いバランスを提供します
};

// 圧縮したい画像ディレクトリパス
const publicDir = path.join(__dirname, 'public/images');

// .jpgファイルを圧縮する関数
async function compressJpgFiles(dir) {
  try {
    // ディレクトリ内のすべてのファイルを取得
    const files = fs.readdirSync(dir);

    // .jpgファイルのみをフィルタリング
    const jpgFiles = files.filter(
      (file) => path.extname(file).toLowerCase() === '.jpg'
    );

    // .jpgファイルを処理
    for (const file of jpgFiles) {
      const filePath = path.join(dir, file);
      const tempPath = path.join(dir, `temp-${file}`);

      // 画像を圧縮して一時ファイルに保存
      await sharp(filePath).jpeg(compressionOptions).toFile(tempPath);

      // 一時ファイルで元のファイルを上書き
      fs.renameSync(tempPath, filePath);

      console.log(`Compressed and replaced: ${file}`);
    }
  } catch (error) {
    console.error('Error processing images:', error);
  }
}

// 圧縮処理を開始
compressJpgFiles(publicDir);
