---
title: Select
slots:
  - title: default
    description: Select options.
    fallback_for: options
    child_component:
      name: SelectOption
      props:
        - "label/slot"
        - "value"
        - "selected"
        - "disabled"
examples:
  - slugs:
      - placeholder
    size: md
  - slugs:
      - required
    size: md
---
