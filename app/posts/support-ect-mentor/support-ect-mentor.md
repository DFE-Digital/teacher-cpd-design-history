---
override:tags: []
layout: collection
date: 2000-01-05
title: Support for early career teachers
description: A service which gives mentors and ECTs access to the self study materials (CIP)
pagination:
  data: collections.support-ect-mentor
  reverse: true
  size: 50
permalink: "support-ect-mentor/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}{% endif %}/"
eleventyComputed:
  eleventyNavigation:
    key: "{{ title }}"
    excerpt: "{{ description }}"
    parent: home
---
