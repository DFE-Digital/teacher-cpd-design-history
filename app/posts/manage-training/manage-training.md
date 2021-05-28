---
tags: false
layout: collection
title: Manage training for early career teachers
description: This service helps schools in England setup, manage and run ECF inductions for each new cohort of early career teachers.
pagination:
  data: collections.manage-training
  reverse: true
  size: 50
permalink: "manage-training/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}{% endif %}/"
eleventyComputed:
  eleventyNavigation:
    key: "{{ title }}"
    excerpt: "{{ description }}"
    parent: home
related:
  items:
  - text: Prototype
    description: |
      Username: `ecf`
      Password: `ecf`
    href: https://dfe-ecf-register-partner.herokuapp.com/
  - text: Wireframe journeys (Miro)
    href: https://miro.com/app/board/o9J_ldVNkCY=/
---
