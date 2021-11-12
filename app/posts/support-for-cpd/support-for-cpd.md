---
tags: false
layout: collection
title: Support for CPD
description: This service helps DfE admin users provide support for both the ECF and NPQ services
pagination:
  data: collections.support-for-cpd
  reverse: true
  size: 50
permalink: "support-for-cpd/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}{% endif %}/"
eleventyComputed:
  eleventyNavigation:
    key: "{{ title }}"
    excerpt: "{{ description }}"
    parent: home
related:
  items:
  - text: Wireframe journeys (Miro)
    href: https://miro.com/app/board/o9J_ldVNkCY=/
  - text: Glossary
    href: /glossary/
  - text: DfE CPD Service Manual
    href: https://cpd-service-manual.london.cloudapps.digital/#dfe-continuing-professional-development-cpd
---
