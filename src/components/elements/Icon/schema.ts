import type { HTMLAttributes } from "astro/types";
import { z } from "zod/v4";

type IconHTMLAttributes = HTMLAttributes<"svg">;

export const iconSchema = z
  .object({
    name: z.string().meta({
      description: "Path to the icon relative to the icons directory (without extension)",
    }),
    size: z
      .enum(["none", "sm", "md", "lg"])
      .meta({ description: "Size class to apply to the icon" })
      .default("none"),
    background: z
      .enum(["none", "subtle"])
      .meta({
        description: "Background color to apply to the icon",
      })
      .default("none"),
  })
  .catchall(z.any())
  .meta({
    description: "Displays an icon from your icon library.",
  });

export type IconProps = z.infer<typeof iconSchema> & IconHTMLAttributes;
