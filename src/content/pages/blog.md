---
_schema: default
title: Blog
pageSections:
  - _component: page-sections/builders/custom-section
    label: ''
    contentSections:
      - _component: building-blocks/core-elements/spacer
        size: xl
      - _component: building-blocks/wrappers/split
        label: ''
        firstColumnContentSections:
          - _component: building-blocks/core-elements/heading
            text: All posts
            level: h1
            size: default
            alignX: start
            iconName:
            iconPosition: before
          - _component: building-blocks/core-elements/simple-text
            text: >-
              This paginated blog index displays a grid of article cards, each
              waiting to be populated with genuine posts once your content
              strategy moves beyond placeholder text.
            alignX: start
            size: lg
        secondColumnContentSections: []
        distributionMode: half
        fixedWidth:
        minSplitWidth: 760
        verticalAlignment: center
        reverse: false
        reverseOrderOnMobile: false
        gap: lg
      - _component: building-blocks/core-elements/spacer
        size: xl
    maxContentWidth: 2xl
    paddingHorizontal: md
    paddingVertical: md
    colorScheme: inherit
    backgroundColor: base
    backgroundImage:
      source: /src/assets/images/pasifika-bg2.svg
      alt: ''
      positionVertical: bottom
      positionHorizontal: center
    rounded: false
description: >-
  Read our latest articles and insights on web development, design, and
  technology.
---
