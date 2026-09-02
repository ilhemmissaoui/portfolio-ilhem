# Portfolio Overview

This document outlines the navigation structure of the portfolio website
[portfolio-phi-indol-46.vercel.app](https://portfolio-phi-indol-46.vercel.app/),
detailing each page and its primary sections.

## Pages

1. **Home**: `/`
2. **Projects**: `/projects`
3. **Experience**: `/experience`
4. **Skills**: `/skills`
5. **Education**: `/education`
6. **Contact**: `/contact`
7. **Resume**: `/resume` (redirects to `NEXT_PUBLIC_RESUME_LINK`)

## Home

**URL:** `/`

- Hero with profile image, name, title and a short summary
- Featured projects (first three entries of `config/projects.ts`)
- Experience (three most recent roles)
- Skills (six highest-rated entries)
- Education and certifications

## Projects

**URL:** `/projects`

- Tabs for **All**, **Personal** and **Professional** projects
- Each card links to `/projects/[projectId]` with the full description,
  tech stack, and page-by-page details

## Experience

**URL:** `/experience`

- Timeline of roles at Almindhar, Nehos Group and Pixelium
- Each entry links to `/experience/[expId]` with achievements and skills

## Skills

**URL:** `/skills`

- All skills sorted by rating, grouped visually by card

## Education

**URL:** `/education`

- Engineering degree and applied bachelor's degree, with EQF levels
- Certifications: Scrum Foundation (CertiProf), Cisco CCNA, ACPC

## Contact

**URL:** `/contact`

- Contact form posting to `/api/contact` (Google Form backend)
- Direct contact details: email, phone, LinkedIn, location
