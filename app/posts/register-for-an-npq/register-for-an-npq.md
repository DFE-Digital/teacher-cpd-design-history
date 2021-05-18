---
tags: false
layout: collection
title: Register for an NPQ
description: NPQ only - teacher facing
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
---
