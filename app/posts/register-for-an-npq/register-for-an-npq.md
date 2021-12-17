---
override:tags: []
layout: collection
date: 2000-01-02
title: Register for an NPQ
description: Register to study for an NPQ or the Additional Support Offer for new headteachers
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
    href: https://github.com/DFE-Digital/npq-prototype
  - text: Older prototype on Github
    href: https://github.com/DFE-Digital/NPQ-Alpha-Prototype
---
