# MultAI website

The site served at https://multai.si, built with React, TypeScript and Vite.

```bash
npm install
npm run dev      # local dev server
npm run build    # production build in dist/
```

- `src/App.tsx` — page layout and navigation
- `src/components/` — hero, sections, logo and icons
- `src/styles.css` — styles, using the MultAI desktop app's colors
- `public/` — app screenshot, favicon and the not-found page, copied into the build as-is

Hosting: the contents of `dist/` go to the root of the `multai.si` S3 bucket (static website hosting, Mumbai), served through Cloudflare's free plan for DNS, HTTPS and caching. The bucket only accepts requests from Cloudflare's IP ranges. The build is flat (no `assets/` folder) so it uploads to the bucket root as-is.
