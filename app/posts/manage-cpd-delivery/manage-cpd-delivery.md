---
override:tags: []
layout: collection
date: 2000-01-03
title: Manage training delivery
description: Lets learning providers manage the delivery of their training
pagination:
  data: collections.manage-cpd-delivery
  reverse: true
  size: 50
permalink: "manage-cpd-delivery/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}{% endif %}/"
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
