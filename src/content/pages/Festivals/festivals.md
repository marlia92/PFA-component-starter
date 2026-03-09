---
_schema: default
title: Festivals
pageSections:
  - _component: page-sections/builders/custom-section
    label: ''
    contentSections:
      - _component: building-blocks/wrappers/split
        label: HERO SPLIT
        firstColumnContentSections:
          - _component: building-blocks/core-elements/heading
            text: FESTIVALS
            level: h6
            size: default
            alignX: start
            iconName:
            iconPosition: before
          - _component: building-blocks/core-elements/heading
            text: Celebrating Pasifika culture
            level: h1
            size: xl
            alignX: start
            iconName:
            iconPosition: before
          - _component: building-blocks/core-elements/simple-text
            text: >-
              Pasifika festivals play an important role in bringing communities
              together.
            alignX: start
            size: md
        secondColumnContentSections:
          - _component: building-blocks/core-elements/image
            source: /src/assets/images/pasifika25-1133x628-auckland-live.jpg
            alt: ''
            rounded: true
            aspectRatio: none
            positionVertical: center
            positionHorizontal: center
            priority: false
        distributionMode: quarter-three-quarters
        fixedWidth:
        minSplitWidth: 760
        verticalAlignment: center
        reverse: false
        reverseOrderOnMobile: false
        gap: lg
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
  - _component: page-sections/builders/custom-section
    label: ''
    contentSections:
      - _component: building-blocks/core-elements/divider
        paddingVertical: xl
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
  - _component: page-sections/builders/custom-section
    label: Center form
    contentSections:
      - _component: building-blocks/core-elements/heading
        text: Register your festival with us
        level: h2
        size: default
        alignX: center
        iconName:
        iconPosition: before
      - _component: building-blocks/core-elements/simple-text
        text: Help us grow the directory by submitting your event.
        alignX: center
        size: md
      - _component: building-blocks/forms/form
        action: ./
        formBlocks:
          - _component: building-blocks/forms/input
            label: Name
            name: my_input
            type: text
            placeholder: Full name
            required: true
            value:
          - _component: building-blocks/forms/input
            label: Email
            name: my_input
            type: email
            placeholder: Email address
            required: true
            value:
          - _component: building-blocks/forms/textarea
            label: Message
            name: my_textarea
            required: true
            placeholder:
            value:
          - _component: building-blocks/forms/submit
            text: Send message
            variant: primary
            size: md
            iconName:
            iconPosition: before
            hideText: false
            disabled: false
    maxContentWidth: md
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
