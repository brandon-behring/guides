// @ts-check
/**
 * Hub repo for guides.brandon-behring.dev — landing + /methodology + /about.
 * Per-guide content lives in sibling repos (e.g., github.com/brandon-behring/guides-experimentation),
 * deployed to subroutes (e.g., guides.brandon-behring.dev/experimentation/).
 *
 * v4 (2026-05-24): migrated from `preset: 'research-portfolio'` to the
 * `styles: [researchPortfolioStyle, guidesFamilyStyle]` composition per
 * book-scaffold-astro v4.0.0. The family style supplies site +
 * routes.frontmatter (prefix '' → mount /methodology + /about at root) +
 * deploy: 'pages' (closes scaffold #49 + #50).
 */
import { defineBookConfig, researchPortfolioStyle } from '@brandon_m_behring/book-scaffold-astro';
import { guidesFamilyStyle } from './shared/styles/guides-family.js';

export default await defineBookConfig({
  styles: [researchPortfolioStyle, guidesFamilyStyle],
  // site, routes.frontmatter, deploy all come from guidesFamilyStyle.
  //
  // Bundle the self-hosted variable-font CSS during SSR. These packages'
  // entry points are .css files; when Vite externalizes them, Astro's dev
  // SSR loader (Node ESM) can't import a .css and every page 500s with
  // "Unknown file extension .css" (Base.astro imports them). noExternal tells
  // Vite to process them instead. Harmless in build (already bundled there).
  vite: {
    ssr: {
      noExternal: ['@fontsource-variable/roboto', '@fontsource-variable/source-code-pro'],
    },
  },
});
