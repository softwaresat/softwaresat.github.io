# Satvik Portfolio

Personal portfolio site for Satvik Agarwal built with React, Vite, TypeScript, Tailwind CSS, and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

## Customize content

- Projects: `src/data/projects.ts`
- Experience: `src/data/experience.ts`
- Skills: `src/data/skills.ts`
- Main page composition: `src/App.tsx`

## Deploy

### GitHub Pages

1. Push this project to `https://github.com/softwaresat/softwaresat.github.io`.
2. In the repository settings, ensure GitHub Pages is set to use GitHub Actions.
3. The workflow in `.github/workflows/deploy-pages.yml` will build and publish the site automatically on pushes to `main`.

### Vercel

1. Push the repo to GitHub.
2. Import the project into Vercel.
3. Keep the default build command: `npm run build`
4. Keep the default output directory: `dist`

### Netlify

1. Push the repo to GitHub.
2. Create a new site from that repository in Netlify.
3. Set build command to `npm run build`
4. Set publish directory to `dist`
