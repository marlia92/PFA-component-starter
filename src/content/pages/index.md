---
_schema: default
title: Your Site
pageBlocks:
  - _bookshop_name: wrappers/container
    label: ''
    contentBlocks:
      - _bookshop_name: typography/heading
        text: Welcome to your CloudCannon Starter Component site
        level: h1
      - _bookshop_name: wrappers/button-group
        buttonBlocks:
          - _bookshop_name: elements/button
            text: View Components
            link: /component-library/
            hideText: false
            variant: primary
            size: lg
          - _bookshop_name: primitives/button
            text: Some text
            link:
            iconName: archive-box
            iconPosition: before
            hideText: false
            variant: tertiary
            size: lg
        direction: row
        align: center
    maxContentWidth: 2xl
    paddingHorizontal: lg
    paddingVertical: lg
    colorScheme: default
    backgroundImage:
      source: ''
      alt: ''
      positionVertical: top
      positionHorizontal: center
    rounded: false
---
