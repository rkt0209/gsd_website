# GSD Transport & Logistics — Website

A fast, responsive, animated portfolio site for a pan-India transport company,
built with **React + Vite + Tailwind CSS v4** and **Framer Motion** animations.

> All names, phone numbers, addresses and stats are placeholder/dummy data.
> Edit them in one place: **`src/data/site.js`**.

## Run it

```bash
npm install      # install dependencies (already done)
npm run dev      # start local dev server → http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```

## Where things live

| What | File |
|------|------|
| Company info, services, fleet, stats, regions, testimonials | `src/data/site.js` |
| Page sections | `src/components/` |
| Brand colours & fonts | `src/index.css` (`@theme` block) |
| SEO tags, title, structured data | `index.html` |
| robots.txt / sitemap.xml / favicon | `public/` |

## What's built in

- **Responsive** layouts for mobile, tablet and desktop (Tailwind breakpoints).
- **SEO**: semantic HTML, meta + Open Graph + Twitter tags, JSON-LD structured
  data, `robots.txt`, `sitemap.xml`, descriptive alt text and a canonical URL.
- **Accessibility**: skip-to-content link, keyboard focus rings, ARIA labels,
  and `prefers-reduced-motion` support.
- **Performance**: Vite build, vendor code-splitting, lazy-loaded images,
  prioritised hero image, and font `display=swap`.
- **Animations**: scroll reveals, animated counters, hover effects and a looping
  city marquee via Framer Motion + CSS.

## Things to update before going live

1. Replace dummy details in `src/data/site.js`.
2. Swap the placeholder Unsplash images (hero in `src/components/Hero.jsx`,
   fleet photos in `src/data/site.js`) with your own truck photos.
3. Change the domain in `index.html`, `robots.txt` and `sitemap.xml`.
4. Wire the contact form in `src/components/Contact.jsx` to an email service
   (e.g. Formspree, EmailJS) or your backend — it currently just shows a
   success message.
