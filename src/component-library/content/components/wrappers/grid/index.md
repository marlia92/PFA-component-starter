---
title: Grid
order: 4
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
