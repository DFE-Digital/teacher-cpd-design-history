---
tags: false
layout: collection
title: Register for an NPQ
description: This service helps teachers register, and manage their application for an NPQ
pagination:
  data: collections.register-for-an-npq
  reverse: true
  size: 50
permalink: "register-for-an-npq/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}{% endif %}/"
eleventyComputed:
  eleventyNavigation:
    key: "{{ title }}"
    excerpt: "{{ description }}"
    parent: home
related:
  items:
  - text: Prototype
    href: https://npq-prototype.herokuapp.com
  - text: Older prototype
    href: https://npq-alpha-prototype.herokuapp.com/
  - text: Prototype on Github
    href: https://github.com/fofr/npq-prototype
  - text: Older prototype on Github
    href: https://github.com/DFE-Digital/NPQ-Alpha-Prototype
---
