# Hygge Haven UI

A small React UI exploration inspired by a CodePen challenge prompt.

This project mirrors a CodePen demo as a standalone mini-project, focusing on
layout, atmosphere, and interaction rather than production tooling.

## Tech Stack
- React 18 (CDN)
- JSX transpiled in-browser with Babel
- Tailwind CSS (CDN)
- Plain HTML / CSS / JavaScript

## Structure
- `index.html` — app entry, loads libraries and scripts
- `app.jsx` — React components and UI logic
- `data.js` — static product data
- `styles.css` — custom styles (fonts / overrides)

## Running Locally
This project must be served over HTTP due to in-browser JSX transpilation.

Recommended:
- VS Code **Live Server**
  - Right-click `index.html` → **Open with Live Server**

Alternatively:
```bash
python -m http.server
