import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "zod";

/** Schemas */
const pageSchema = z.object({
  title: z.string(),
  pageSections: z.array(z.any()).default([]),
});

const docsPageSchema = z.object({
  title: z.string(),
  contentSections: z.array(z.any()).default([]),
});

const docsComponentSchema = z.object({
  title: z.string().optional(),
  name: z.string().optional(),
  order: z.number().optional(),
  overview: z.string().optional(),
  spacing: z.string().optional().nullable(),
  component: z.string().optional(),
  component_path: z.string().optional(),
  blocks: z.union([z.record(z.string(), z.any()), z.array(z.record(z.string(), z.any()))]).optional(),
  slots: z
    .array(
      z.object({
        title: z.string(),
        description: z.string().optional(),
        fallback_for: z.string().optional().nullable(),
        child_component: z
          .object({
            name: z.string(),
            props: z.array(z.string()).optional(),
          })
          .optional()
          .nullable(),
      })
    )
    .optional(),
  examples: z
    .union([
      z.array(
        z.object({
          title: z.string().optional(),
          slugs: z.array(z.string()),
        })
      ),
      z.null(),
    ])
    .optional()
    .transform((val: any) => {
      if (!val) return [];
      return val.map((example: any) => ({
        title:
          example.title ||
          (example.slugs?.[0]
            ? example.slugs[0].replace(/-/g, " ").charAt(0).toUpperCase() +
              example.slugs[0].replace(/-/g, " ").slice(1)
            : "Example"),
        slugs: example.slugs,
        size: example.size ?? "md",
      }));
    }),
});

const blogPostSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  author: z.string().default("Anonymous"),
  image: z.string().optional(),
  tags: z.array(z.string()).default([]),
});

const festivalsSchema = z.object({
  title: z.string(),
  date: z.string(),
  location: z.string(),
  summary: z.string(),
  featured_image: z.string().optional(),
  featured: z.boolean().optional(),
});

const teamSchema = z.object({
  name: z.string(),
  role: z.string(),
  group: z.string(),
  image: z.string().optional(),
  order: z.number().optional(),
});

const resourcesSchema = z.object({
  title: z.string(),
  category: z.string().optional(),
  file: z.string().optional(),
  external_link: z.string().optional(),
  summary: z.string().optional(),
});

/** Collections */
export const collections = {
  pages: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
    schema: pageSchema,
  }),

  "docs-pages": defineCollection({
    loader: glob({
      pattern: "**/*.md",
      base: "./src/component-library/content/pages",
    }),
    schema: docsPageSchema,
  }),

  "docs-components": defineCollection({
    loader: glob({
      pattern: "**/*.md",
      base: "./src/component-library/content/components",
    }),
    schema: docsComponentSchema,
  }),

  blog: defineCollection({
    loader: glob({ pattern: "**/*.mdx", base: "./src/content/blog" }),
    schema: blogPostSchema,
  }),

  festivals: defineCollection({
    loader: glob({
      pattern: "**/*.md",
      base: "./src/content/festivals",
    }),
    schema: festivalsSchema,
  }),

  team: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/team" }),
    schema: teamSchema,
  }),

  resources: defineCollection({
    loader: glob({
      pattern: "**/*.md",
      base: "./src/content/resources",
    }),
    schema: resourcesSchema,
  }),
};
