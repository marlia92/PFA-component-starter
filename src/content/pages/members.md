---
_schema: default
title: Members
pageSections:
  - _component: page-sections/heroes/hero-split
    eyebrow: Eyebrow text
    heading: Membership
    subtext: >-
      Pasifika Festivals Aotearoa brings together festivals, organisers, and
      partners who share a commitment to celebrating Pacific culture and
      strengthening our communities through events.
    imageSource: /src/assets/images/component-library/dunedin-cliff.jpg
    imageAlt: Hero image
    imageAspectRatio: none
    buttonSections:
      - _component: building-blocks/core-elements/button
        text: My Button
        hideText: false
        link: ''
        iconName: ''
        iconPosition: before
        variant: primary
        size: md
    reverse: false
    colorScheme: inherit
    backgroundColor: base
  - _component: page-sections/builders/custom-section
    label: 'Membership Benefits '
    contentSections:
      - _component: building-blocks/core-elements/heading
        text: Membership Benefits
        level: h2
        size: default
        alignX: start
        iconName:
        iconPosition: before
      - _component: building-blocks/core-elements/list
        items:
          - _component: building-blocks/core-elements/list/list-item
            text: Access shared resources and templates
            iconName: document-check
            iconColor: default
          - _component: building-blocks/core-elements/list/list-item
            text: Connect with other festival organisers
            iconName: user-group
            iconColor: default
          - _component: building-blocks/core-elements/list/list-item
            text: Share knowledge and experience
            iconName: book-open
            iconColor: default
          - _component: building-blocks/core-elements/list/list-item
            text: Contribute to national advocacy for Pacific festivals
            iconName: globe-asia-australia
            iconColor: default
        direction: vertical
        alignX: start
        size: md
        listType: icon
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
    imageSource: /src/assets/images/component-library/dunedin-cliff.jpg
    imageAlt: CTA image
    reverse: false
    colorScheme: inherit
    backgroundColor: base
description: ''
---
