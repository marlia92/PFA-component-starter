import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "zod";

/** Schemas */

// Pages
const pageSchema = z.object({
  title: z.string(),
  pageSections: z.array(z.any()).default([]), // always defaults to empty array
});

// Docs pages
const docsPageSchema = z.object({
  title: z.string(),
  contentSections: z.array(z.any()).default([]), // always defaults to empty array
});

// Docs components
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
    .array(
      z.object({
        title: z.string().optional(),
        slugs: z.array(z.string()),
        size: z.string().optional(),
      })
    )
    .optional()
    .default([])
    .transform((val) => {
      return val.map((example) => ({
        title:
          example.title ||
          (example.slugs?.[0]
            ? example.slugs[0].replace(/-/g, " ").replace(/^\w/, (c) => c.toUpperCase())
            : "Example"),
        slugs: example.slugs ?? [],
        size: example.size ?? "md",
      }));
    }),
});

// Blog posts
const blogPostSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  author: z.string().default("Anonymous"),
  image: z.string().optional(),
  tags: z.array(z.string()).default([]),
});

// Festivals
const festivalsSchema = z.object({
  title: z.string(),
  date: z.string(),
  location: z.string(),
  summary: z.string(),
  featured_image: z.string().optional(),
  featured: z.boolean().optional().default(false),
});

// Team members
const teamSchema = z.object({
  name: z.string(),
  role: z.string(),
  group: z.string(),
  image: z.string().optional(),
  order: z.number().optional(),
});

// Resources
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
