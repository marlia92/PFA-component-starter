---
title: Fixed Flexible Mode
spacing:
blocks:
  _bookshop_name: "wrappers/split"
  firstColumnContentBlocks:
    - _bookshop_name: "wrappers/container"
      backgroundColor: "accent"
      contentBlocks:
        - _bookshop_name: "primitives/rich-text"
          text: |-
            ## Fixed Column

            This column has a fixed width.
  secondColumnContentBlocks:
    - _bookshop_name: "wrappers/container"
      backgroundColor: "highlight"
      contentBlocks:
        - _bookshop_name: "primitives/rich-text"
          text: |-
            ## Flexible Column

            This column takes up the remaining space.
  distributionMode: "fixed-flexible"
  fixedWidth: null
  verticalAlignment: "top"
  reverse: false
---
