## 構成

- TypeScript
- Webpack
- TSLint
- Prettier

Lintのテンプレートは `tslint-config-standard` を利用しています。

## インストール

```
$ npm install
```

jsファイルのエントリーポイントを増やす場合は `webpack.config.js` を編集してください。

## 開発モード

```
$ npm start
```

## ビルド

```
$ npm run build
```

## 構文チェック&自動整形

```
$ npm run lint
```

## jQueryを使う場合

インストール

```
$ npm install -D @types/jquery
```

使用方法

```js
import * as $ from 'jquery'
```
