---
_schema: default
title: Search
pageSections:
  - _component: page-sections/heroes/hero-center
    eyebrow:
    heading: Search
    subtext: >-
      Everything on your site is just one search away. (Free static search
      courtesy of <a href="https://pagefind.app/" target="_blank"
      rel="noopener">Pagefind</a> 💙)
    buttonSections: []
    colorScheme: default
    backgroundColor: base
    paddingVertical: 4xl
  - _component: page-sections/builders/custom-section
    label: ''
    contentSections:
      - _component: building-blocks/core-elements/embed
        html: |
          <link href="/pagefind/pagefind-ui.css" rel="stylesheet">
          <script src="/pagefind/pagefind-ui.js"></script>
          <div id="search"></div>
          <script>
              window.addEventListener('DOMContentLoaded', (event) => {
                  new PagefindUI({ element: "#search", showSubResults: true });
              });
          </script>
        aspectRatio: landscape
    maxContentWidth: xl
    paddingHorizontal: xl
    paddingVertical: 2xl
    colorScheme: default
    backgroundColor: base
    backgroundImage:
      source: ''
      alt: ''
      positionVertical: top
      positionHorizontal: center
    rounded: false
  - _component: page-sections/builders/custom-section
    label: Divider
    contentSections:
      - _component: building-blocks/core-elements/image
        source: /src/assets/images/pasifika-band.svg
        alt: ''
        rounded: false
        aspectRatio: none
        positionVertical: center
        positionHorizontal: center
        priority: false
    maxContentWidth: 2xl
    paddingHorizontal: md
    paddingVertical: md
    colorScheme: inherit
    backgroundColor: base
    backgroundImage:
      source: ''
      alt: ''
      positionVertical: top
      positionHorizontal: center
    rounded: false
description: ''
---
