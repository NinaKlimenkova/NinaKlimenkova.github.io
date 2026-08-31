# Nina Klimenkova — academic research website

The static academic website for Nina Klimenkova, a PhD student in Data Science at
Worcester Polytechnic Institute. The site presents research areas, publications,
projects, teaching and mentoring, a web CV summary, and a downloadable CV.

## Technology and constraints

- Astro with static output
- Strict TypeScript and Astro type checking
- Markdown/MDX content collections
- Plain CSS with centralized custom properties
- GitHub Actions and GitHub Pages
- No React, Tailwind, CMS, database, API, or server runtime

The production site uses the repository Pages path `/personal_website/`. Internal
routes and public assets must use `withBase()` from `src/utils/urls.ts`.

## Local development

Requirements:

- Node.js 22.12 or newer (the deployment workflow uses Node.js 24)
- npm

Install dependencies and start the development server:

```sh
npm install
npm run dev
```

Open `http://localhost:4321/personal_website/`.

Run the required validation and production build:

```sh
npm run check
npm run build
```

Available scripts:

| Script | Purpose |
| --- | --- |
| `npm run dev` | Start the Astro development server |
| `npm run check` | Check Astro and TypeScript source |
| `npm run build` | Generate the static site in `dist/` |
| `npm run preview` | Preview the production build |
| `npm run ci` | Run the check and build sequentially |

## Content model

Validated collection schemas live in `src/content.config.ts`. Pages filter drafts
and sort records explicitly.

- `src/content/publications/` contains the static bibliography assembled from the
  supplied CV and Google Scholar profile, with publisher metadata used for
  verification.
- `src/content/projects/` contains evidence-based research-project summaries.
- `src/content/research/` contains the research-area descriptions.
- `src/content/news/` remains available for future verified updates. An empty news
  collection does not render an empty homepage section.

To add a publication, create a Markdown file such as:

```md
---
title: "Publication title"
authors:
  - "First Author"
  - "Nina Klimenkova"
year: 2026
venue: "Journal or conference"
publicationType: journal-article
status: published
volume: "1"
issue: "2"
pages: "1–12"
doi: "10.xxxx/example"
featured: false
draft: false
order: 10
---
```

Use `.mdx` only when a record genuinely needs an embedded Astro component. MDX
support does not add a client-side framework.

Site-wide identity, affiliation, adviser, contact information, and social links
belong in `src/config/site.ts`. Teaching, education, and CV-summary data live in
`src/data/profile.ts`; centralized image metadata lives in `src/data/media.ts`.

## Static assets

- `public/images/` contains optimized web derivatives and the 1200 × 630 social card.
- `public/pdfs/Nina_Klimenkova_CV.pdf` is the public CV.
- `public/files/` is reserved for other authorized downloads.

Do not publish raw DNG files, document working files, or other personal source
material. Public images should be oriented, resized, metadata-stripped, and given
explicit dimensions and useful alt text.

## Metadata

`src/components/BaseHead.astro` centralizes page titles, descriptions, canonical
URLs, Open Graph and Twitter metadata, the web manifest, and Person JSON-LD.
Defaults come from `src/config/site.ts`.

## GitHub Pages deployment

The existing workflow at `.github/workflows/deploy.yml` runs on pull requests,
pushes to `main`, and manual dispatches. It installs from the lockfile, runs the
Astro check and production build, uploads `dist/`, and deploys through the
`github-pages` environment for non-pull-request runs.

In the GitHub repository, set **Settings → Pages → Build and deployment → Source**
to **GitHub Actions**. The workflow deploys only after the changes are committed
and pushed.

## Directory structure

```text
.
├── .github/workflows/       # CI and GitHub Pages deployment
├── public/                  # Images, CV PDF, icon, manifest, crawler metadata
├── src/
│   ├── components/          # Reusable Astro components
│   ├── config/              # Site-wide identity and metadata defaults
│   ├── content/             # Markdown/MDX records by collection
│   ├── data/                # Typed profile and media data
│   ├── layouts/             # Shared document layout
│   ├── pages/               # Static routes
│   ├── styles/              # Global tokens and visual foundation
│   ├── utils/               # GitHub Pages base-path helper
│   └── content.config.ts    # Collection schemas
├── AGENTS.md                # Rules for future coding agents
├── astro.config.ts          # Static output and Pages base configuration
├── package.json             # Scripts and dependencies
└── tsconfig.json            # Strict TypeScript settings
```
