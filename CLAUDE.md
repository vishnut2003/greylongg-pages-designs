# CLAUDE.md

## What this project is

Design mockups for **Greylongg** (https://greylongg.com/), an Indian e-commerce fashion brand that sells men's apparel online. The main products are **polo T-shirts and printed/graphic T-shirts** in organic cotton.

**This is NOT the production website.** It is a set of static HTML pages we show the client to get design approval. The live store runs on Shopify; once the client approves a design, it gets built into the Shopify theme somewhere else (the store connection lives in the sibling project `../greylongg-shopify-connection`).

What that means for the work here:
- Visual fidelity and polish come first. Nothing needs to be production-ready.
- There is no backend, database, auth, payment gateway, or real cart. Fake the interactions (add-to-cart, size/colour pickers, filters, forms) with small client-side JS, just enough for the design to feel alive in a demo.
- Placeholder data is fine: product names, prices in ₹, reviews, phone number (`+91 XXXXXXXXXX`), and so on.
- Don't add build tools, frameworks, package managers, Liquid/Shopify code, SEO plumbing, analytics, or tests unless asked.
- Every page must look right on desktop and on mobile. The client will probably review on a phone.
- Never touch the live store from this project. No Shopify API calls or theme pushes happen here.

## Structure

```
v1/                     # Design round 1 (new rounds → v2/, v3/ … copy forward, never edit an approved round)
  index.html            # Homepage; other pages sit beside it (product.html, collection.html, cart.html, …)
  assets/               # ALL CSS, JS, fonts and other code files go here, and only here
    css/
    js/
  images/
    user-uploads/       # Images from the client/user (logos, product photos). Don't modify or delete.
    claude-uploads/     # Images Claude creates or downloads (placeholders, icons, backgrounds)
```

- Plain HTML + CSS + vanilla JS. Pages open directly from the file system (`file://`) with no server, so use relative paths only and no ES module imports that need a server.
- CDN libraries (Google Fonts, icon sets, Swiper, etc.) are fine.
- Keep shared styles in one stylesheet under `assets/` (e.g. `assets/css/style.css`) so every page stays consistent. Put design tokens in `:root` CSS variables.
- Share the header and footer markup across pages (copy it; there are no includes). Nav links should point to the real mock pages so the client can click through.
- Inside `images/user-uploads/`, group images by page and section (e.g. `home/hero-section/slide-1.png`).

## Brand direction

**Nothing below is confirmed by the client yet.** Colours, type and layout rules follow our own proposal, `project-details/Greylongg-Website-Structure-and-Design-Plan.pdf` (section 7), chosen on 2026-09-30 over the live-site theme colours. The tokens live in `:root` in `v1/assets/css/style.css`. When the client confirms or changes colours, fonts or direction, update this section and mark the item as confirmed.

- **Mood:** a quiet, confident menswear label; warm neutrals, lots of white space, big photos, very little text on images.
- **Colors (from the design plan):**
  - Text / primary buttons / header: `#1F1F1F` (charcoal)
  - Page background: `#FAF9F6` (off-white)
  - Cards, product image backgrounds, section bands: `#F0EDE7` (stone)
  - Secondary text, borders, icons: `#8A8A85` (Greylongg grey)
  - Accent: `#4F6B4A` (moss): sustainability tags, fabric story, button hover
  - Discount % only, never large areas: `#B5442F` (brick)
  - Dividers, input borders: `#E3E0DA` (mist)
- **Type (chosen by us on 2026-09-30, replacing the design plan's serif + DM Sans; use only these two families):**
  - Headings: **Poppins** 500 (48/30 px for H1 and display, 32/24 px for H2, desktop/mobile)
  - Everything else (body, product titles, UI): **Inter**; labels, menu and buttons are 13 px, 600, uppercase, 0.08em tracking
  - Load both from Google Fonts
  - Use the logo image for the logo, not a font. The current logo files were copied from the live site into `images/claude-uploads/home/logo/`.
- **Layout rules (from the design plan):** max content width 1320 px; side padding 48 px desktop, 16 px mobile; sections 96 px apart desktop, 56 px mobile; square corners (2 px radius at most); 1 px dividers instead of boxes and shadows; 48 px buttons; Lucide icons at 1.5 px stroke; animation on hover only, no auto-play or marquees.
- **Catalogue (for realistic nav and placeholder products):**
  - Polos: classic polos, graphic polos
  - T-shirts: plain round neck, casual, street style, quote printed, and themed prints (anime, superhero, Disney, DC, NASA, zodiac, yoga, fitness, vintage city names, …)
  - Combos, bestsellers
  - Other brands sold on the store: Carlton London (incl. bags, jackets), Richard Paadler, Yorksteadd
  - Perfume
- **Key selling points to reuse:**
  - Sustainable men's polo T-shirts
  - 100% organic cotton
  - Stylish and comfortable
  - Sold online in India
- **Social handles:** Instagram `/greylongg`, Facebook `/Greylongg`.

## Working conventions

- Use the client's real assets from `images/user-uploads/` whenever one exists. Otherwise put a clearly named placeholder in `images/claude-uploads/`, and record the source and licence of anything downloaded in `images/claude-uploads/CREDITS.md`.
- Don't invent claims the client doesn't already make (certifications, "organic" on products that aren't, discounts, delivery promises). Use obvious placeholders instead.
- Licensed characters and brands (Disney, DC, NASA, etc.) appear in the catalogue. In mockups, use the client's own product photos for those; don't generate or download lookalike artwork.
- When a design round is sent to the client, treat that version folder as frozen. Make revisions in the next version folder.
