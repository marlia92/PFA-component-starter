import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "zod";

// -----------------------------
// Page schemas
// -----------------------------
const pageSchema = z.object({
  title: z.string(),
  pageSections: z.array(z.any()),
});

const docsPageSchema = z.object({
  title: z.string(),
  contentSections: z.array(z.any()),
});

const docsComponentSchema = z.object({
  title: z.string().optional(),
  name: z.string().optional(),
  order: z.number().optional(),
  overview: z.string().optional(),
  spacing: z.string().optional().nullable(),
  component: z.string().optional(),
  component_path: z.string().optional(),
  blocks: z
    .union([z.record(z.string(), z.any()), z.array(z.record(z.string(), z.any()))])
    .optional(),
  slots: z
    .array(
      z.object({
        title: z.string(),
        description: z.string().optional(),
        fallback_for: z.string().optional().nullable(),
        child_component: z
          .object({
            name: z.stri
