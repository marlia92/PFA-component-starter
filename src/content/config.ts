import { defineCollection, z } from 'astro:content';

const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    _schema: z.string().optional(),
    title: z.string(),
    description: z.string().optional(),
    pageSections: z.array(z.any()).optional(),
  }),
});

const festivalsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    location: z.string().optional(),
    date: z.string().optional(),
  }),
});

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.date().optional(),
    author: z.string().optional(),
  }),
});

const resourcesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

const teamCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string().optional(),
    bio: z.string().optional(),
  }),
});

export const collections = {
  pages: pagesCollection,
  festivals: festivalsCollection,
  blog: blogCollection,
  resources: resourcesCollection,
  team: teamCollection,
};
