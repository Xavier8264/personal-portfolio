# Jordan Prunty — Personal Portfolio

Personal portfolio website built with Vite + React, deployed to Cloudflare Pages at [jordanprunty.com](https://jordanprunty.com).

## Tech Stack

- **Vite + React** — frontend framework
- **Tailwind CSS** — utility styling
- **React Router v6** — client-side routing
- **@formspree/react** — contact form
- **Cloudflare Pages** — deployment via GitHub

## Project Structure

```text
src/
  data/           ← Edit content here — no component changes needed
    projects.js   ← Project metadata, sections, and bill of materials
    skills.js     ← Skill categories and tags
    social.js     ← Social links and contact info
    about.js      ← Bio text and resume data
  components/     ← Shared UI components (Navbar, Footer, ProjectCard, etc.)
  pages/          ← One file per route
public/
  images/         ← Drop real photos here to replace placeholders
  resume/         ← Replace jordan-prunty-resume.pdf with your real resume
```

## Local Development

```bash
npm install
npm run dev
```

## Adding a Project

1. Open `src/data/projects.js`
2. Copy an existing project object and paste it at the end of the array
3. Fill in all fields — title, tagline, tags, sections, BOM rows
4. Set `published: true` when ready
5. Drop a hero image into `public/images/projects/[your-slug]/hero.jpg`
6. Push to GitHub — Cloudflare Pages rebuilds automatically

## Replacing Placeholder Images

All images in `public/images/` are SVG placeholders. Replace them with real photos using the same filenames:

| Placeholder | What goes here |
| --- | --- |
| `public/images/profile/jordan-prunty.jpg` | Your profile photo |
| `public/images/projects/[slug]/hero.jpg` | Project hero image |
| `public/images/skills/ambient-1/2/3.jpg` | Decorative photos on Skills page |

## Deployment

The repo is connected to Cloudflare Pages. Every push to `main` triggers a new build.

- Build command: `npm run build`
- Output directory: `dist`
- The `public/_redirects` file handles SPA routing on Cloudflare Pages
