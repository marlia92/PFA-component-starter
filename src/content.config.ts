import { defineCollection, z } from "astro:content";

export const collections = {
  pages: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string().optional(),
      content_blocks: z.array(z.record(z.any())).optional(),
    }),
  }),

  "skele/components": defineCollection({
    schema: z.object({
      title: z.string().optional(),
      name: z.string().optional(),
      spacing: z.string().optional(),
      component: z.string().optional(),
      component_path: z.string().optional(),
      blocks: z.union([z.record(z.any()), z.array(z.record(z.any()))]).optional(),
      primary_size: z.string().optional(),
      examples: z
        .union([
          z.array(
            z.object({
              title: z.string(),
              slugs: z.array(z.string()),
              size: z.string().optional(),
            })
          ),
          z.null(),
        ])
        .optional()
        .transform((val: any) => val || []),
    }),
  }),
};
