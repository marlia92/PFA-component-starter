---
_schema: default
title: Members
pageSections:
  - _component: page-sections/builders/custom-section
    label: Hero with card
    contentSections:
      - _component: building-blocks/wrappers/split
        label: ''
        firstColumnContentSections:
          - _component: building-blocks/core-elements/simple-text
            text: CONNECT WITH US
            alignX: start
            size: md
          - _component: building-blocks/core-elements/heading
            text: Become a member
            level: h1
            size: default
            alignX: start
            iconName:
            iconPosition: before
          - _component: building-blocks/core-elements/simple-text
            text: >-
              Pasifika Festivals Aotearoa brings together festivals, organisers,
              and partners who share a commitment to celebrating Pacific culture
              and strengthening our communities through events.
            alignX: start
            size: md
        secondColumnContentSections:
          - _component: building-blocks/wrappers/card
            label:
            contentSections:
              - _component: building-blocks/core-elements/heading
                text: 'Membership benefits:'
                level: h4
                size: default
                alignX: start
                iconName:
                iconPosition: before
              - _component: building-blocks/core-elements/list
                items:
                  - _component: building-blocks/core-elements/list/list-item
                    text: Access shared resources and templates
                    iconName: check
                    iconColor: orange
                  - _component: building-blocks/core-elements/list/list-item
                    text: Connect with other festival organisers
                    iconName: check
                    iconColor: orange
                  - _component: building-blocks/core-elements/list/list-item
                    text: Share knowledge and experience
                    iconName: check
                    iconColor: orange
                  - _component: building-blocks/core-elements/list/list-item
                    text: Contribute to national advocacy for Pacific festivals
                    iconName: check
                    iconColor: orange
                direction: vertical
                alignX: start
                size: md
                listType: icon
            maxContentWidth:
            paddingHorizontal: xl
            paddingVertical: xl
            colorScheme: inherit
            backgroundColor: highlight
            backgroundImage:
              source:
              alt:
              positionVertical: top
              positionHorizontal: center
            link:
            rounded: true
            border: true
            showBeforeAfter: false
            beforeContentSections: []
            afterContentSections: []
        distributionMode: half
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
    heading: 'Interested in becoming a member? '
    subtext: >-
      Register your interest below and we'll get back to you as soon as
      possible.
    formAction:
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
    imageSource: /src/assets/images/img-1411.jpeg
    imageAlt: CTA image
    reverse: false
    colorScheme: inherit
    backgroundColor: base
description: ''
---
