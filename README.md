# ORC Site Starter

A ready-to-run Next.js + TypeScript + Tailwind starter for the Odisha Research Centre website.

## What is included

- App Router project structure
- Home, About, Research, Publications, Events, People, Opportunities, Archive, Announcements, Governance, and Contact pages
- Dynamic detail pages for research verticals, publications, events, people, and archive items
- Reusable card, layout, and section components
- Structured mock data in `data/`
- CMS-friendly content typing in `lib/types.ts`
- Placeholder PDFs in `public/docs/`
- Editorial and governance positioning aligned to the ORC website brief

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`

## Build for production

```bash
npm install
npm run build
npm run start
```

## Suggested next implementation steps

1. Replace mock content in `data/` with final approved ORC content.
2. Connect `data/` files to Sanity or another CMS.
3. Add submission forms for opportunities and event registration.
4. Add Odia locale support in phase two.
5. Replace placeholder PDFs and contact details with official institutional files.

## Route map

- `/`
- `/about`
- `/research`
- `/research/[slug]`
- `/publications`
- `/publications/[slug]`
- `/events`
- `/events/[slug]`
- `/people`
- `/people/[slug]`
- `/opportunities`
- `/archive`
- `/archive/[slug]`
- `/announcements`
- `/governance`
- `/contact`

## Notes

This bundle is source-only. It does not include `node_modules`, which keeps the zip small and portable.
