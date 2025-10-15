---
title: Accordion
slots:
  - title: default
    description: The contents for the the Accordion.
    fallback_for: items
    child_component:
      name: AccordionItem
      props:
        - "contentBlocks/slot"
        - "title"
examples:
  - title: Open First Item
    slugs:
      - open-first
  - title: Single Open
    slugs:
      - single-open
---
