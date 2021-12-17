---
title: Create a journey for users who’ve registered before
description: Stops users from changing their details on a subsequent registration
date: 2021-12-13
related:
  items:
  - text: Prototype PR
    href: https://github.com/DFE-Digital/npq-prototype/pull/19
  - text: Jira ticket
    href: https://dfedigital.atlassian.net/browse/CST-131
---

Sometimes users are registering multiple times, there are 3 scenarios:

1. They made a mistake with their course or provider and want to change it to something new
2. They need to register twice, once for an NPQH and once for the Additional Support offer
3. They are an admin user registering on behalf of people

## The admin user problem

Consider a school user, say admin@school.gov.uk, registers Jane Doe for an NPQH. They then use the same email address to register Joe Bloggs for an NPQSL. The effect of this is that Jane Doe's details get updated to Joe Blogg's, the users are not adequately separated.

By creating a post-registration flow for existing users, we prevent the user details from being updated accidentally.

## Bring the email question forward

We do not want to ask people that have registered before the same questions again.

We’ve brought the email part of the journey to the beginning, before the TRN and name change questions.

If a user signs in (using the code) with an existing email address, we’ll take them straight to the ‘You’ve registered before’ page.

The language on the email has been softened, the original content felt too abrupt when at the beginning of the journey.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
      text: "What’s your email address?",
      img: { src: "01-whats-your-email-address.png" }
    }, {
      text: "You’ve already registered (one course)",
      img: { src: "02-youve-already-registered-one-course.png" }
    }, {
      text: "You’ve already registered (multiple courses)",
      img: { src: "03-youve-already-registered-multiple-courses.png" }
    }, {
      text: "Add another course: Check your answers",
      img: { src: "04-add-another-course-check-your-answers.png" }
    }, {
      text: "Add another course: Check your answers (Additional Support offer)",
      img: { src: "05-add-another-course-aso-check-your-answers.png" }
    }]
}) }}
