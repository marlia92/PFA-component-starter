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
  - _component: page-sections/ctas/cta-form
    heading: Register your festival with us
    subtext: Help us grow the directory by submitting your event.
    formAction: .
    formBlocks:
      - _component: building-blocks/forms/input
        label: Name
        name: name
        type: text
        required: true
      - _component: building-blocks/forms/input
        label: Email
        name: email
        type: email
        required: true
      - _component: building-blocks/forms/textarea
        label: Message
        name: message
        required: true
      - _component: building-blocks/forms/submit
        text: Send message
        variant: primary
        size: md
        iconPosition: before
        hideText: false
        disabled: false
    imageSource: /src/assets/images/kia-mau.jpeg
    imageAlt: Kia Mau
    reverse: true
    colorScheme: inherit
    backgroundColor: base
  - _component: page-sections/builders/custom-section
    label: ''
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
