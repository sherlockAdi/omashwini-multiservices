# Omashwini Multiservices

Responsive corporate presentation website built with Next.js App Router, React and TypeScript, starting from the official create-next-app template.

## Local development

```sh
npm ci
npm run dev
```

## Production

```sh
npm run build
npx serve out
```

The `out/` directory is the deployable static site. The NEXT_PUBLIC_BASE_PATH environment variable configures GitHub Pages project URLs. `.github/workflows/deploy.yml` builds and deploys pushes to `main`; configure repository Settings → Pages → Source → GitHub Actions.

## Content

Company facts are supplied by the client on 1 October 2026, not independently verified registry data. Values and introductory copy are editorial brand positioning. No unconfirmed service catalog, client claims, contact email or telephone number has been invented. The company profile download is a plain-text file. Contact uses the supplied registered address and a Google Maps search, not a verified office pin.

Update company copy and details in `src/components/CompanyWebsite.tsx`, visual styling in `src/app/globals.css`. Add a verified phone/email or actual service descriptions when available.

## Photography

Illustrative architecture, not the company's premises: MACAU PHOTOGRAPHY via Unsplash.
https://unsplash.com/photos/modern-glass-building-facade-with-reflections-under-cloudy-sky-5_5a5MeYke0
https://unsplash.com/license

Fonts: DM Sans and Manrope via Google Fonts, with system fallbacks. Icons: Lucide (ISC license).
