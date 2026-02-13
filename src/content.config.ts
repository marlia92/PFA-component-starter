import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";

export const collections = {
  pages: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  }),

  blog: defineCollection({
    loader: glob({ pattern: "**/*.mdx", base: "./src/content/blog" }),
  }),

  festivals: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/festivals" }),
  }),

  team: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/team" }),
  }),

  resources: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/resources" }),
  }),

  "docs-pages": defineCollection({
    loader: glob({
      pattern: "**/*.md",
      base: "./src/component-library/content/pages",
    }),
  }),

  "docs-components": defineCollection({
    loader: glob({
      pattern: "**/*.md",
      base: "./src/component-library/content/components",
    }),
  }),
};
