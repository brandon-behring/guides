/**
 * src/content.config.ts — Hub repo content collections.
 *
 * Hub serves landing + /methodology + /about only. The frontmatter collection
 * powers the scaffold's auto-injected `/frontmatter/[slug]/` route (v3.4.0+).
 *
 * Per-guide chapter content lives in sibling repos; this hub does not house
 * chapter MDX. The `chapters` collection from defineBookSchemas() is included
 * for forward-compatibility but currently has no content.
 */
import {
  defineBookSchemas,
  frontmatterCollection,
} from '@brandon_m_behring/book-scaffold-astro/schemas';
import { z } from 'astro:content';

export const { collections } = {
  collections: {
    ...defineBookSchemas().collections,
    frontmatter: frontmatterCollection(
      z.object({
        slug: z.string(),
        title: z.string(),
        order: z.number(),
        description: z.string().optional(),
      })
    ),
  },
};
