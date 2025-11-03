---
title: Primary Grid
spacing: null
blocks:
  _component: wrappers/grid
  minItemWidth: 300
  layout: start
  items:
    - contentBlocks:
        - _component: typography/heading
          text: Grid Item 1
          level: h3
        - _component: typography/simple-text
          text: This is the first grid item with a heading and simple text. The grid component centers items and provides flexible width options.
    - contentBlocks:
        - _component: typography/heading
          text: Grid Item 2
          level: h3
        - _component: typography/simple-text
          text: This is the second grid item. Items can have equal or unequal widths.
    - contentBlocks:
        - _component: typography/heading
          text: Grid Item 3
          level: h3
        - _component: typography/simple-text
          text: This is the third grid item. The layout is responsive and adapts to different screen sizes.
  label: ""
  maxItemWidth: 400
  gap: md
---