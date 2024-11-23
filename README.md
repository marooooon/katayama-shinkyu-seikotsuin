# 起動方法

`$ npm run dev`

# node-version

v20.3.1
`$ nvm use v20.3.1`

# サイト名

片山鍼灸接骨院（訪問鍼灸マッサージ）

# scss の本番と開発環境の仕分けについて

`/styles/_variable.scss` に本番と開発環境で`$env`の値を変更してください。

- 本番にデプロイするときは `$env: 'production';`
- ローカル環境で作業するときは `$env: 'development';`

# Github Pages

https://marooooon.github.io/katayama-shinkyu-seikotsuin/

# 参考サイト

https://iris-corp.net/guide
