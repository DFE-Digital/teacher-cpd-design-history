---
tags: false
layout: collection
title: Manage CPD delivery
description: NPQ and ECF - learning provider facing
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
---
