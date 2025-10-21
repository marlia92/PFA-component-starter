---
title: Grid
order: 4
overview: "A responsive grid layout for displaying multiple items in rows and columns. Supports adjustable spacing, layouts, and width bounds."
slots:
  - title: default
    description: The contents for the the Grid.
    fallback_for: items
    child_component:
      name: GridItem
      props:
        - "contentBlocks/slot"
examples:
  - title: Layouts
    slugs:
      - features
      - flow
      - tiles
---
