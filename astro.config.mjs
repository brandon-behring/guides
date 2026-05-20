// @ts-check
/**
 * Hub repo for guides.brandon-behring.dev — landing + /methodology + /about.
 * Per-guide content lives in sibling repos (e.g., github.com/brandon-behring/guides-experimentation),
 * deployed to subroutes (e.g., guides.brandon-behring.dev/experimentation/).
 *
 * Phase 0b uses research-portfolio preset as-is per design doc v0.2 §15.1.
 */
import { defineBookConfig } from '@brandon_m_behring/book-scaffold-astro';

export default await defineBookConfig({
  preset: 'research-portfolio',
  site: 'https://guides.brandon-behring.dev',
});
