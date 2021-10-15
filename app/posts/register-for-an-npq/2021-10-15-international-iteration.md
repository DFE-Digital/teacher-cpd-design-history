---
title: Add country to international journey
description: Ask users which country they teach in
date: 2021-10-15
related:
  items:
  - text: Prototype PR
    href: https://github.com/DFE-Digital/npq-prototype/pull/8
---

Following on from our [initial design](/register-for-an-npq/international-and-non-teacher/), we were asked to capture the country a user is teaching in. This data is not passed to providers, but will be used to determine where international demand for NPQ sits.

## Design changes

We’ve split the ‘Are you a teacher in England, Jersey, Guernsey or the Isle of Man’ question into two new questions:

1. Are you a teacher or school leader?
2. Where do you teach?

This has the benefit of moving the ‘Jersey, Guernsey or the Isle of Man’ edge cases out of the page titles.

These new questions are reflected on the Check your answers page.

## Where do you teach?

We put the home nations and the edge cases as options for ease of use. For international applicants they can select ‘Another country’, and they are asked which country, using the [govuk-country-and-territory-autocomplete](https://github.com/alphagov/govuk-country-and-territory-autocomplete).

The autocomplete:

- lists all countries and territories
- excludes historic countries (like USSR)
- supports common country synonyms

Someone is considered international if they select Scotland, Wales, Northern Ireland or Another country.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
      text: "Are you a teacher or school leader?",
      img: { src: "01-are-you-a-teacher.png" }
    }, {
      text: "Where do you teach?",
      img: { src: "02-where-do-you-teach.png" }
    }, {
      text: "Check your answers: Teacher",
      img: { src: "03-check-your-answers-teacher.png" }
    }, {
      text: "Check your answers: Not a teacher",
      img: { src: "04-check-your-answers-not-a-teacher.png" }
    }]
}) }}
