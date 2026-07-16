# Homes by Asra Inc. — Corporate Website

React + Vite + Tailwind CSS v4 + React Router. Built from the site map and content
in your plan: Home, About, Residential, Commercial, Sustainability, Team, Contact,
and a data-driven Projects section (Miramichi + Millet, each with their own page).

## Run it locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

## Project structure

```
src/
  components/   Navbar, Footer, Layout, Button, Section, Card, PageHero, BlueprintLines
  data/         locations.js, services.js, team.js, projects.js  <- edit content here
  pages/        Home, About, Residential, Commercial, Sustainability, Team, Contact
  pages/projects/  ProjectsIndex.jsx, ProjectDetail.jsx (dynamic, reads from data/projects.js)
```

**To edit copy or add content**, you mostly only need to touch files in `src/data/`.
Every page pulls from these files, so updating a project's facts or a team blurb in
one place updates it everywhere it's used.

## Adding a new project (e.g. a 3rd development)

Open `src/data/projects.js` and add a new object to the `projects` array with a unique
`slug`. A full project page is generated automatically at `/projects/your-slug` — no
new component needed.

## Adding real images

Right now project pages use placeholder gallery tiles (`GalleryPlaceholder` in
`ProjectDetail.jsx`) so the site works before real renderings are ready. To swap in
real photos:

1. Drop images into `src/assets/` (organize by project/location as in your plan).
2. Import them at the top of the page, e.g. `import hero from "../assets/miramichi/hero.jpg"`.
3. Replace the placeholder `<div>` with an `<img src={hero} className="..." />`.

## Contact form (EmailJS)

`src/pages/Contact.jsx` is wired for [EmailJS](https://www.emailjs.com) so the form
sends real email without a backend:

1. Create a free EmailJS account, add an Email Service and a Template.
2. In `Contact.jsx`, replace `YOUR_SERVICE_ID`, `YOUR_TEMPLATE_ID`, and `YOUR_PUBLIC_KEY`
   with the values from your EmailJS dashboard.
3. Your EmailJS template's variables should match the form field names: `name`, `email`,
   `phone`, `message`.

Until you add real keys, the form will simulate a successful send so you can test the UI.

## Design system

Tokens live in `src/index.css` under `@theme`. This is a blueprint / site-plan concept:
charcoal-navy + warm stone base, brass-gold accent (from your logo), IBM Plex Mono for
small labels (`coord-label` class, e.g. "AB · BC · NB"), Fraunces for display type,
Inter for body copy. The recurring line-art (`BlueprintLines.jsx`) is the signature
element — it echoes the master-plan drawings in your project briefs.

## SEO

Each page should get its own `<title>` and meta description. This starter includes a
site-wide one in `index.html`. For per-page SEO (recommended before launch), install
`react-helmet-async` and set title/description per route — or, if you deploy to Vercel/
Netlify with a static export approach, ask your dev to wire up per-route meta tags.

## Deployment

```bash
npm run build      # outputs to /dist
```

1. Push this project to a GitHub repository.
2. Import the repo in [Vercel](https://vercel.com) or [Netlify](https://netlify.com)
   (framework preset: Vite). Build command `npm run build`, output directory `dist`.
3. Connect your custom domain (e.g. homesbyasra.ca) in the host's dashboard — SSL is
   automatic on both platforms.
4. After launch: set up a Google Business Profile, Google Search Console (submit your
   sitemap), and Google Analytics.

## What's included vs. what's left to do

**Included:** full site architecture, routing, design system, all core pages, the
Projects system (Miramichi + Millet fully populated from your content), working
contact form UI, responsive layout, accessible focus states, reduced-motion support.

**Left for you / your dev:**
- Real photography/renderings (currently placeholder tiles)
- EmailJS keys
- Per-page SEO meta tags + Open Graph images
- Google Business Profile / Search Console / Analytics setup after deploy
- Any additional projects beyond Miramichi and Millet
