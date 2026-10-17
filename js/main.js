/* ==========================================================================
   ELECTRONICS STORE — main.js
   ➤➤➤ EDIT EVERYTHING IN THE CONFIG BLOCK BELOW — one place, that's it. ➤➤➤
   ========================================================================== */

/* ---------------------------------------------------------------------------
   1. STORE CONFIG  ← EDIT HERE
--------------------------------------------------------------------------- */
const STORE_NAME = "VoltEdge Electronics";          // ← your store name
const PHONE = "+91 98765 43210";                    // ← display phone (also used for tel: links)
const WHATSAPP_NUMBER = "919876543210";             // ← country code + number, no "+" or spaces
const GOOGLE_MAPS_LINK = "https://maps.app.goo.gl/XGZ5qQhMHQQWrDpS7"; // directions + Google reviews
const ADDRESS = "Shop 12, Main Market Road, Your City — 500001";      // ← street address
const HOURS = "Mon–Sun · 10:00 AM – 9:30 PM";                         // ← opening hours

// Default message when someone taps a general WhatsApp button
const WA_DEFAULT_MESSAGE = "Hi, I'm interested in your products";
// Message for the deals banner CTA
const WA_DEAL_MESSAGE = "Hi! I'd like to know more about the Monsoon Mega Sale offers";

/* ---------------------------------------------------------------------------
   2. PRODUCTS  ← EDIT HERE
   Each card = { name, spec, price, image }. Add / remove freely —
   the grid re-renders from this array on every page load.
--------------------------------------------------------------------------- */
const products = [
  {
    name: "Samsung Galaxy S24 Ultra",
    spec: "6.8″ QHD+ AMOLED · 200 MP camera · 12 GB RAM",
    price: "₹1,09,999",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "iPhone 15 Pro",
    spec: "A17 Pro chip · 48 MP camera · Titanium body",
    price: "₹1,29,900",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "MacBook Air M3",
    spec: "13.6″ Liquid Retina · 8 GB · 256 GB SSD",
    price: "₹1,14,900",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Sony Bravia 55″ 4K",
    spec: "Google TV · Dolby Vision · 120 Hz panel",
    price: "₹74,990",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Sony WH-1000XM5",
    spec: "Industry-leading ANC · 30 h battery",
    price: "₹29,990",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Apple Watch Series 9",
    spec: "45 mm · Always-On Retina · GPS",
    price: "₹45,900",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "JBL Flip 6",
    spec: "Portable speaker · IP67 · 12 h playtime",
    price: "₹9,999",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Samsung 8 kg Front-Load Washer",
    spec: "AI Ecobubble · 5★ energy rating",
    price: "₹38,490",
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=600&auto=format&fit=crop",
  },
];

/* ==========================================================================
   Everything below wires the config into the page — no edits needed.
   ========================================================================== */

/* ---------- Helpers ---------- */

// Builds a wa.me link with a URL-encoded prefilled message
function waLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/* ---------- Inject store identity everywhere ---------- */

document.title = `${STORE_NAME} — Mobiles, Laptops, TVs & More`;

document.querySelectorAll("[data-store-name]").forEach((el) => (el.textContent = STORE_NAME));
document.querySelectorAll("[data-store-address]").forEach((el) => (el.textContent = ADDRESS));
document.querySelectorAll("[data-store-hours]").forEach((el) => (el.textContent = HOURS));

document.querySelectorAll("[data-phone-link]").forEach((el) => {
  el.href = `tel:${PHONE.replace(/[^+\d]/g, "")}`; // strip spaces/dashes for the tel: URI
});
document.querySelectorAll("[data-phone-text]").forEach((el) => (el.textContent = PHONE));

document.querySelectorAll("[data-maps-link]").forEach((el) => (el.href = GOOGLE_MAPS_LINK));

document.querySelectorAll("[data-wa-link]").forEach((el) => (el.href = waLink(WA_DEFAULT_MESSAGE)));
document.querySelectorAll("[data-wa-link-deal]").forEach((el) => (el.href = waLink(WA_DEAL_MESSAGE)));

document.getElementById("year").textContent = new Date().getFullYear();

/* ---------- Render product cards ---------- */

const grid = document.getElementById("product-grid");

// Small inline WhatsApp glyph reused on every card
const WA_ICON_SVG =
  '<svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.074-.149-.668-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>';

function renderProducts() {
  grid.innerHTML = "";

  products.forEach((p) => {
    const card = document.createElement("article");
    card.className = "product-card reveal";

    // Text nodes are set via textContent (not innerHTML) so product
    // names/specs can safely contain any characters.
    const media = document.createElement("div");
    media.className = "product-media";
    const img = document.createElement("img");
    img.src = p.image;
    img.alt = p.name;
    img.loading = "lazy"; // below-the-fold: lazy-load every product photo
    img.width = 600;
    img.height = 450;
    media.appendChild(img);

    const body = document.createElement("div");
    body.className = "product-body";

    const name = document.createElement("h3");
    name.className = "product-name";
    name.textContent = p.name;

    const spec = document.createElement("p");
    spec.className = "product-spec";
    spec.textContent = p.spec;

    const foot = document.createElement("div");
    foot.className = "product-foot";

    const price = document.createElement("span");
    price.className = "product-price";
    price.textContent = p.price;

    const enquire = document.createElement("a");
    enquire.className = "btn-enquire";
    enquire.href = waLink(`Hi, I'm interested in the ${p.name}. Is it in stock?`);
    enquire.target = "_blank";
    enquire.rel = "noopener";
    enquire.setAttribute("aria-label", `Enquire about ${p.name} on WhatsApp`);
    enquire.innerHTML = `${WA_ICON_SVG}<span>Enquire</span>`;

    foot.append(price, enquire);
    body.append(name, spec, foot);
    card.append(media, body);
    grid.appendChild(card);
  });
}

renderProducts();

/* ---------- Mobile nav (hamburger) ---------- */

const navbar = document.getElementById("navbar");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
  const open = navbar.classList.toggle("nav-open");
  hamburger.setAttribute("aria-expanded", String(open));
  hamburger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
});

// Close the menu after tapping any nav link (mobile)
document.querySelectorAll(".primary-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("nav-open");
    hamburger.setAttribute("aria-expanded", "false");
  });
});

/* ---------- Navbar border/backdrop once the page is scrolled ---------- */

function onScroll() {
  navbar.classList.toggle("scrolled", window.scrollY > 8);
}
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

/* ---------- Scroll-reveal animations ---------- */

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (prefersReducedMotion || !("IntersectionObserver" in window)) {
  // No animation: show everything immediately
  document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in-view"));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target); // animate once, then leave it alone
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

/* ---------- WhatsApp tooltip ("Chat with us 👋") ---------- */

const waTooltip = document.getElementById("wa-tooltip");
const waTooltipClose = document.getElementById("wa-tooltip-close");
const TOOLTIP_KEY = "waTooltipDismissed"; // remember dismissal for this tab session

if (!sessionStorage.getItem(TOOLTIP_KEY)) {
  setTimeout(() => {
    waTooltip.hidden = false;
  }, 3000);
}

waTooltipClose.addEventListener("click", () => {
  waTooltip.hidden = true;
  sessionStorage.setItem(TOOLTIP_KEY, "1");
});
