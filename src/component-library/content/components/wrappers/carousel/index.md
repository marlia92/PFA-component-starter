---
title: Carousel
slots:
  - title: default
    description: The contents for the the Carousel.
    fallback_for: slides
    child_component:
      name: CarouselSlide
      props:
        - "contentBlocks/slot"
examples:
  - slugs:
      - auto-play
    size: lg
  - slugs:
      - auto-scroll
    size: lg
  - slugs:
      - width-percentage
    size: lg
---
