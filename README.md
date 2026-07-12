# SiteKit

A clean, lightweight website template built with vanilla HTML, CSS, and native Web Components — no frameworks, no build tools, no fuss.

## Features

- **Zero dependencies** — no npm, no bundler, no framework. Open `index.html` in a browser and it just works.
- **Component-based** — the UI is built from reusable Web Components. Swap, extend, or create your own.
- **Easy to customise** — one config file controls all text and links; one CSS file is yours to style freely.
- **Responsive** — mobile-first navigation with a smooth hamburger menu and flicker-free scroll.

## Project Structure

```
index.html              ← your pages live here
assets/
  css/
    style.css           ← YOUR custom styles go here
  js/
    config.js           ← change all text & links here
  img/                  ← drop your images here
engine/                 ← do not edit anything in here
  css/app.css
  js/app.js
  js/components/
```

> **Golden rule:** The only files you ever need to edit are `index.html`, `assets/js/config.js`, and `assets/css/style.css`. Everything inside `engine/` runs the template — leave it alone.

## Getting Started

Because the template uses ES modules, the page must be served over HTTP rather than opened as a local file.

```bash
npx serve .
```

Then open the URL shown in your terminal (usually `http://localhost:3000`).

## Customisation

### Site name & navbar brand

Open `assets/js/config.js` and update the `brand` value:

```js
navbar: {
  brand: 'My Awesome Site',
  ...
```

### Navigation links

Update the `links` array in `config.js`. Each item needs a `label` and an `href` that matches the `page-id` of an `<app-page>` element:

```js
links: [
  { label: 'Home',      href: '#home'      },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact',   href: '#contact'   },
],
```

### Dropdown menu

Edit the `dropdown` section in `config.js`, or set `dropdown: null` to remove it entirely:

```js
dropdown: {
  label: 'Products',
  items: [
    { label: 'App',    href: '#app'    },
    { divider: true },
    { label: 'Pricing', href: '#pricing' },
  ],
},
```

### Footer

```js
footer: {
  yearStart: 2024,
  domain:    'mysite.com', // set to '' to hide
},
```

### Adding a new page

1. Add a nav link in `config.js`:
   ```js
   { label: 'Portfolio', href: '#portfolio' }
   ```
2. Add an `<app-page>` element inside `<main class="main-container">` in `index.html`:
   ```html
   <app-page page-id="portfolio" title="My Portfolio">
     <p>Your content goes here.</p>
   </app-page>
   ```

The `page-id` must exactly match the `#id` used in the nav link `href` (without the `#`).

### Styling

Open `assets/css/style.css` and override CSS variables to quickly change the look:

```css
:root {
  --accent-color: #e63946;  /* links, buttons, active nav */
  --nav-bg:       #ffffff;  /* navbar background          */
}
```

All available variables are listed as comments at the top of `style.css`.

## Deployment

No build step needed — host it anywhere for free:

| Platform | How |
|---|---|
| **GitHub Pages** | Push to a repo, then enable Pages in the repo Settings. |
| **Netlify** | Drag and drop your project folder on [netlify.com](https://netlify.com). |
| **Vercel** | Connect your GitHub repo on [vercel.com](https://vercel.com). |

## License

MIT
