# Electronics Store — Website

A premium, mobile-first, frontend-only website. No backend, no build tools, no frameworks — open `index.html` directly in any browser.

## Files

| File | Purpose |
|---|---|
| `index.html` | Page structure (all sections) |
| `css/style.css` | All styling — design tokens at the top |
| `js/main.js` | **Your config lives here** + product rendering, nav, animations |

## How to edit (one place)

Open `js/main.js`. Everything you'd want to change is in the config block at the very top:

```js
const STORE_NAME = "VoltEdge Electronics";   // your store name (updates logo, footer, page title)
const PHONE = "+91 98765 43210";             // shown in contact + used for all "Call Now" buttons
const WHATSAPP_NUMBER = "919876543210";      // country code + number, NO "+" or spaces
const GOOGLE_MAPS_LINK = "https://maps.app.goo.gl/..."; // used for Get Directions + Google reviews
const ADDRESS = "Shop 12, Main Market Road, ...";
const HOURS = "Mon–Sun · 10:00 AM – 9:30 PM";
```

### Products

Also in `js/main.js` — the `products` array. Each entry is one card:

```js
{
  name: "Sony WH-1000XM5",
  spec: "Industry-leading ANC · 30 h battery",
  price: "₹29,990",
  image: "https://images.unsplash.com/...", // any image URL works
},
```

Add, remove or reorder entries freely; the grid rebuilds on every page load. Each card's "Enquire" button automatically opens WhatsApp with the product name pre-filled.

### Colors & fonts

Design tokens are CSS variables at the top of `css/style.css` (`:root { --bg, --blue, --cyan, --amber, ... }`). Change them there and the whole site follows.

## Notes

- The Google Maps link is used for the **Get directions**, **Rate us on Google** and **Read all reviews** actions — no embedded map.
- The floating WhatsApp button's tooltip ("Chat with us 👋") appears after 3 seconds and stays dismissed for the rest of the tab session.
- All animations respect the user's reduced-motion preference.
