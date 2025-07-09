import { defineCollection, z } from "astro:content";

const pageSchema = z.object({
  title: z.string(),
  content_blocks: z.array(z.any()),
});

const pagesCollection = defineCollection({
  schema: pageSchema,
});

export const collections = {
  pages: pagesCollection,
};
