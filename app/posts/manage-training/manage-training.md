---
tags: false
layout: collection
title: Manage training for early career teachers
description: ECF only - school facing
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
---
