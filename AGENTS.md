# Repository instructions for coding agents

This is Nina Klimenkova’s statically generated academic Data Science website. It
uses Astro, TypeScript, Markdown/MDX content collections, and plain CSS, and it is
deployed to GitHub Pages at the root `https://ninaklimenkova.github.io/` URL. Keep the
implementation small, static, accessible, and easy to maintain.

1. Prefer static Astro components.
2. Do not introduce React or another frontend framework unless actual client-side interactivity requires it.
3. Do not introduce server-side infrastructure, databases, or APIs unless explicitly requested.
4. Do not add npm dependencies when the same result can reasonably be implemented with Astro, TypeScript, or CSS.
5. Keep content separate from presentation.
6. Reuse components rather than duplicating markup.
7. Maintain responsive layouts and accessibility.
8. Preserve the established visual language unless a redesign is explicitly requested.
9. Use CSS custom properties for repeated global design values.
10. Avoid inline styles.
11. Before completing changes, run the relevant type/check command and production build.
12. Fix any errors introduced by the changes before finishing.

## Project-specific conventions

- This site represents Nina Klimenkova, not the GitHub repository owner.
- Ground profile facts, positions, dates, research claims, and project descriptions
  in supplied or verified sources. Never invent scholarly metrics, citation counts,
  affiliations, awards, research results, or publication details.
- Keep the static publication collection aligned with both the authorized CV and
  Nina’s supplied Google Scholar profile. Verify bibliographic fields with official
  publisher or proceedings sources where possible; do not fetch Scholar at runtime.
- Store publication, project, research-area, and update records under `src/content/`.
- Validate collection fields in `src/content.config.ts` and sort collection results explicitly.
- Keep verified site-wide identity and metadata values in `src/config/site.ts`.
- Keep typed profile and image information under `src/data/` when it is shared by
  multiple pages or components.
- Keep global design tokens in `src/styles/global.css`; component-specific CSS may
  remain scoped in `.astro` files.
- Build internal links and public-asset URLs with `withBase()` from
  `src/utils/urls.ts` so links work under the GitHub Pages repository path.
- Preserve the cream, dark-navy, and teal academic visual language unless a redesign
  is explicitly requested.
- Deployment remains the existing GitHub Pages workflow. Do not add a custom domain,
  server runtime, or alternative hosting configuration unless explicitly requested.
- Publish only authorized, optimized derivatives. Do not unintentionally commit raw
  DNG images, private documents, temporary conversion files, or other personal-source files.
- Keep the news section conditional so an empty collection produces no empty heading.
- Use `npm run check` and `npm run build` before handing work back.
