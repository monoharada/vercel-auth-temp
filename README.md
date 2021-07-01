# Varcel basic auth

## 依存パッケージ

- [safe-compare](https://www.npmjs.com/package/safe-compare)
- [static-auth](https://www.npmjs.com/package/static-auth)


## Getting started

```
yarn add safe-compare static-auth -D 

#or

npm i static-auth safe-compare -D 
```

## Usage

- Varcelへデプロイするアプリのルート直下にauth.js,vercel.jsonを設置する
- package.jsonのscriptを調整
```json
 "scripts": {
    "dev": "next dev",
  -  "build": "next build",
  +  "build": "next build && next export",
    "start": "next start",
  + "vercel-build":"yarn build"
  },

```
- https://vercel.com/[username]/[app_name]/settings/environment-variables 内で Add New で下記環境変数を設定する
  - USERNAME
  - PASSWORD

- Vercelへデプロイ🚀
