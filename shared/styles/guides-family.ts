import { defineStyle } from '@brandon_m_behring/book-scaffold-astro';

/**
 * Shared style for the guides.brandon-behring.dev family of repos.
 * Composes on top of researchPortfolioStyle in each guide's astro.config.mjs:
 *
 *   import { researchPortfolioStyle } from '@brandon_m_behring/book-scaffold-astro';
 *   import { guidesFamilyStyle } from './shared/styles/guides-family.js';
 *   defineBookConfig({ styles: [researchPortfolioStyle, guidesFamilyStyle], ... });
 *
 * Currently consumed by:
 *   - ~/guides/astro.config.mjs (hub) — via './shared/styles/guides-family.js'
 *
 * Inline-duplicated (NOT directly imported) by:
 *   - ~/guides-experimentation/astro.config.mjs (pilot) — see header comment there
 *
 * TODO: extract to npm package `@brandon-behring/guides-shared-style` when 2nd
 * guide arrives, to enable direct import + version-pinning across guide repos.
 */
export const guidesFamilyStyle = defineStyle({
  name: 'guides-family',
  site: 'https://guides.brandon-behring.dev',
  routes: { frontmatter: { enabled: true, prefix: '' } },
  deploy: 'pages',
});
