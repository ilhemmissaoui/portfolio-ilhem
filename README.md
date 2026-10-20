# Ilhem Missaoui — Portfolio

Personal portfolio of **Ilhem Missaoui**, full-stack developer (Sousse, Tunisia), built with Next.js, TypeScript and Tailwind CSS.

Live site: [portfolio-phi-indol-46.vercel.app](https://portfolio-phi-indol-46.vercel.app/)

## Sections

- **Home** — introduction, featured projects, experience, skills, education
- **Projects** — professional and personal projects, filterable by type
- **Experience** — timeline of roles at Almindhar, Nehos Group and Pixelium
- **Skills** — frontend, mobile, backend, databases, DevOps and integrations
- **Education** — engineering degree, applied bachelor's degree and certifications
- **Contact** — contact form plus direct contact details
- **Resume** — redirects to the resume link set in the environment

## Tech stack

Next.js (App Router) · React · TypeScript · Tailwind CSS · Radix UI / shadcn · Framer Motion

## Getting started

```bash
npm install
cp .env.copy .env.local   # then fill in the values
npm run dev
```

The app runs at [http://localhost:3000](http://localhost:3000).

## Environment variables

| Variable | Purpose |
| --- | --- |
| `GOOGLE_FORM_LINK` and `GOOGLE_FORM_FIELD_ID_*` | Contact form submission (see `app/api/contact/route.ts`) |
| `NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID` | Google Analytics (optional — analytics is skipped when unset) |
| `NEXT_PUBLIC_GOOGLE_VERIFICATION` | Google Search Console verification (optional) |

## Editing the content

All site content lives in [`config/`](config/):

- `site.ts` — name, description, URL, contact details, SEO keywords
- `experience.ts` — roles, dates, achievements
- `projects.ts` — project entries and their detail pages
- `skills.ts` — skill cards and ratings
- `education.ts` — degrees and certifications
- `socials.ts` — footer links
- `routes.ts` / `pages.ts` — navigation and page titles

Images live in [`public/`](public/): `profile-img.png`, `og-image.png`, `logo.png`, the certificate scans, plus `projects/` and `experience/` logos.

The resume PDF lives at `public/resume/` and is referenced by `siteConfig.resumeFile`.

## License

See [LICENSE](LICENSE). Built on the [minimal-next-portfolio](https://github.com/namanbarkiya/minimal-next-portfolio) template.
