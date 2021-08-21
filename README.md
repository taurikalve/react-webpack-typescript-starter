# React Webpack TypeScript

React Webpack with TypeScript development platform. Similar to CRA, but more lightweight and customizable. Includes **react-refresh**.

---

## Notes

### Style import

Supports both **sass** and **css** imports. Also includes <a href="https://github.com/csstools/postcss-normalize" target="_blank">normalize/sanitize css</a>

### Static file serving

Files in `public` folder will be served as `/static/` in browser.

## Issues

- `browserlist.development` breaks **react-refresh** with current version of **webpack-dev-server**. Add later: `"development": [ "last 1 chrome version", "last 1 firefox version", "last 1 safari version" ]`
