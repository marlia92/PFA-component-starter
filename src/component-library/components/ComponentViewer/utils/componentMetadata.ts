import { getCollection } from "astro:content";
import { readdirSync, readFileSync } from "fs";
import yaml from "js-yaml";
import { join } from "path";

type ChildComponentInfo = {
  name: string;
  props?: string[];
};

type ComponentMetadata = {
  childComponent?: ChildComponentInfo;
  fallbackFor?: string;
};

let metadataCache: Map<string, ComponentMetadata> | null = null;
let nestedBlockPropertiesCache: Set<string> | null = null;

/**
 * Loads and caches component metadata from the docs-components collection
 */
export async function getComponentMetadataMap(): Promise<Map<string, ComponentMetadata>> {
  if (metadataCache) {
    return metadataCache;
  }

  metadataCache = new Map();

  try {
    const components = await getCollection("docs-components");

    for (const component of components) {
      // Skip example files or components without proper data
      if (!component || !component.id || component.id.includes("/examples/")) {
        continue;
      }

      // Extract component key from id (e.g., "components/typography/list/index" -> "typography/list")
      const slug = component.id.replace(/^components\//, "").replace(/\/index$/, "");

      const slots = component.data?.slots || [];

      // Find slots with child_component defined
      for (const slot of slots) {
        if (slot?.child_component && slot?.fallback_for) {
          metadataCache.set(slug, {
            childComponent: slot.child_component,
            fallbackFor: slot.fallback_for,
          });
          break; // Assume only one slot with child_component per component
        }
      }
    }
  } catch (error) {
    console.error("Error loading component metadata:", error);
  }

  return metadataCache;
}

/**
 * Scans all bookshop files to find properties that can contain nested blocks
 */
export async function getNestedBlockProperties(): Promise<Set<string>> {
  if (nestedBlockPropertiesCache) {
    return nestedBlockPropertiesCache;
  }

  nestedBlockPropertiesCache = new Set<string>();

  try {
    const componentsDir = "src/components";

    // Recursively find all bookshop.yml files
    function findBookshopFiles(dir: string): string[] {
      const files: string[] = [];

      try {
        const entries = readdirSync(dir, { withFileTypes: true });

        for (const entry of entries) {
          const fullPath = join(dir, entry.name);

          if (entry.isDirectory()) {
            files.push(...findBookshopFiles(fullPath));
          } else if (entry.name.endsWith(".bookshop.yml")) {
            files.push(fullPath);
          }
        }
      } catch {}

      return files;
    }

    const bookshopFiles = findBookshopFiles(componentsDir);

    for (const filePath of bookshopFiles) {
      try {
        const content = readFileSync(filePath, "utf8");
        const bookshopData = yaml.load(content) as any;

        // Scan spec.structures for nested block property names
        if (bookshopData.spec?.structures && Array.isArray(bookshopData.spec.structures)) {
          for (const structureName of bookshopData.spec.structures) {
            if (typeof structureName === "string") {
              nestedBlockPropertiesCache.add(structureName);
            }
          }
        }
      } catch (error) {
        console.error(`Error parsing bookshop file ${filePath}:`, error);
      }
    }
  } catch (error) {
    console.error("Error loading bookshop files for block properties:", error);
  }

  return nestedBlockPropertiesCache;
}
