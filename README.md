# Hedgehog CSS and SCSS

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Sensible webpack 5 boilerplate using Babel, PostCSS and Sass with a hot dev server and an optimized production build. Used for developing Hedgehog.

## Using the CSS via CDN
For development, use https://gitcdn.link or https://raw.githack.com; `https://raw.githack.com/ConnectNowUK/hedgehog-css/master/dist/styles/main.css`.

## Install Hedgehog via NPM

Run `npm i -D @connectnow/hedgehog`. Note the `-D` flag, importing as a dev-dependency. You can import it as such to have your project compile, minify, and purge unused Hedgehog CSS. Alternatively, you can use the fully compiled CSS.

In your project somewhere (typically in `main.js` or similar) you can call the source sass files or the css files, with `import "@connectnow/hedgehog/src/styles/index.scss";` or `import "@connectnow/hedgehog/dist/styles/main.css";` respectively.

## Installation for local dev of Hedgehog

Clone this repo and npm install.

```bash
npm i
```

## Usage

### Development server

```bash
npm watch
```

You can view the development server at `localhost:8080`.

### Production build

```bash
npm run build
```

> Note: Install [http-server](https://www.npmjs.com/package/http-server) globally to deploy a simple server.

```bash
npm i -g http-server
```

You can view the deploy by creating a server in `dist`.

```bash
cd dist && http-server
```

## Original  License

This project is open source and available under the [MIT License](LICENSE).
