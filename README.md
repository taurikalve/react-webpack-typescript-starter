# React Webpack TypeScript

React Webpack with TypeScript development platform. Similar to CRA, but more lightweight and customizable. Includes **react-refresh** for a better development experience. Tested with Node 16+.

---

## Notes

### Commands

Currently set up for Bash. Use example: `npm run dev`.

- `dev` - Run development server
- `build` - Build production version in `/build` folder
- `build:analyze` - Builds production version and runs build analyzer on `http://localhost:8888`
- `dev-build` - Creates a development build in `/.dev` folder
- `serve` - Serve production version

### Proxy

By default the server runs on **8888** and proxies `/api` to `http://localhost:8080/api`. Default config includes WebSocket support. See [Webpack devserver.proxy](https://webpack.js.org/configuration/dev-server/#devserverproxy)

### Style Import

Supports both **sass** and **css** imports. Also includes [normalize/sanitize.css](https://github.com/csstools/postcss-normalize)

#### CSS and SCSS modules

Has full support for **css** and **scss** modules. Use by importing like `import style from './MyStyle.scss'` and then pass into jsx elements as `<div className={style.myClass} />`. To use nested class names in **scss** use `[class~='myClass'] { ... }` or `:global(.myClass){ ... }`.

### Static File Serving

Files in `public` folder will be served as `/static/` in browser.

### Absolute Imports

Supports absolute imports, e.g. `import Test from 'components/Test'`. Configure in `tsconfig.json`

### SVG import as React Components

Supports SVG import as React Components like `import MySvg from 'assets/mysvg.svg'` then use as `<MySvg />`. Props are typed via **main.d.ts**.
