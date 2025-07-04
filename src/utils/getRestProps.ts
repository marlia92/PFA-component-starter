import { z } from "zod/v4";

export function getRestProps(props: any, schema: z.ZodObject<any>): Record<string, any> {
  const schemaKeys = Object.keys(schema.shape);
  const restProps: Record<string, any> = {};

  for (const [key, value] of Object.entries(props)) {
    if (!schemaKeys.includes(key) && !key.startsWith("_")) {
      restProps[key] = value;
    }
  }

  return restProps;
}
