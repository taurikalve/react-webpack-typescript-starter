# React Webpack TypeScript

React Webpack with TypeScript development platform. Similar to CRA, but more lightweight and customizable. Includes **react-refresh**.

---

## Notes

### Proxy

By default the server runs on **8888** and proxies `/api` to `http://localhost:8080/api`. See [DevServer docs](https://webpack.js.org/configuration/dev-server/#devserverproxy).

### Style import

Supports both **sass** and **css** imports. Also includes <a href="https://github.com/csstools/postcss-normalize" target="_blank">normalize/sanitize css</a>

### Static file serving

Files in `public` folder will be served as `/static/` in browser.

---

## Issues

- `browserlist.development` breaks **react-refresh** with current version of **webpack-dev-server**. Add later: `"development": [ "last 1 chrome version", "last 1 firefox version", "last 1 safari version" ]`
