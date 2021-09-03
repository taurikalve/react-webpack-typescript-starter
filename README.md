# React Webpack TypeScript

React Webpack with TypeScript development platform. Similar to CRA, but more lightweight and customizable. Includes **react-refresh** for a better development experience.

---

## Notes

### Proxy

By default the server runs on **8888** and proxies `/api` to `http://localhost:8080/api`. See [Webpack devserver.proxy](https://webpack.js.org/configuration/dev-server/#devserverproxy)

### Style Import

Supports both **sass** and **css** imports. Also includes [normalize/sanitize.css](https://github.com/csstools/postcss-normalize)

### Static File Serving

Files in `public` folder will be served as `/static/` in browser.

### Absolute Imports

Supports absolute imports, e.g. `import Test from 'components/Test'`. Configure in `tsconfig.json`

### SVG import as React Components

Supports SVG import as React Components like `import MySvg from 'assets/mysvg.svg'` then use as `<MySvg />`. Props are typed via **main.d.ts**.

---

## Issues

- `browserlist.development` breaks **react-refresh** with current version of **webpack-dev-server**. Add later: `"development": [ "last 1 chrome version", "last 1 firefox version", "last 1 safari version" ]`
