---
title: Journey for users who do not work in a school
description: An iteration of our original non-teacher journey
date: 2021-12-09
related:
  items:
  - text: Funding queries
    href: https://docs.google.com/document/d/1g9-8hltnwu9W5oDukoi7N1RkZSqPKv3AZvLC28W77Mg
  - text: Combine non-school users PR
    href: https://github.com/DFE-Digital/npq-prototype/pull/17
  - text: Non-education PR
    href: https://github.com/DFE-Digital/npq-prototype/pull/16
  - text: Trello
    href: https://trello.com/c/sYTn7XoN/622-funding-queries
  - text: Jira
    href: https://dfedigital.atlassian.net/browse/CST-147
---

In October [we descoped](/register-for-an-npq/decoupling-international-and-non-teacher/) the [original non-teacher journey](/register-for-an-npq/international-and-non-teacher/) from the international one, so we could ship.

When we started we believed the ‘non-teacher’ case to be simple – anyone who was not a teacher or school leader would not be eligible for DfE scholarship funding. We could put non-teachers through the same journey as international.

In reality non-teaching staff at schools and other types of educational establishment may also be eligible for funding.

There are many types of educational establishment – some will be eligible for funding, others will not. Examples include:

- Teaching school hubs
- SCITTs
- State funded alternative provision
- Private limited companies that host alternative provision
- Pupil referral units (PRU)
- Virtual schools
- Hospital schools
- Youth offending institutions

## Defer funding status to support

We know that the volume of users who do not work in a school will be low. If we wanted to accurately determine the funding status for these users in the service we would need to:

- determine the type of educational establishment
- identify the organisation
- identify the user's role within that organisation
- refer to a pre-determined policy decision based on the combination of establishment and role
- research each variation with users

For the low volume of users this is too complex to build.

Instead we have chosen to descope and defer to support. For any user that identifies as not working in a school we will ask them:

- who is their employer
- what is their role
- how they expect to pay for their course

Every registration that identifies as not working in a school will be triaged by support to determine funding status.

## One journey for non-education and other education users

We started by separating out non-school users into two groups:

1. Users who work in a different educational establishment
2. Users who do not work in education

For anyone who identified as not working in education we could send them down the existing international journey (as originally designed). They would not be eligible for funding.

We chose to combine these into a single ‘non-school’ group so that:

- we can understand more about who is taking NPQ in non-education
- we can minimise risk in people going down the wrong route by mistake and ending up with the wrong funding (ie they will all be triaged)

## Additional support offer (ASO) for non-school users

The Additional support offer is a course aimed at helping new headteachers on the job. It is not targeted to people who do not work in schools. To be eligible to take it you need to have taken/be studying/be about to start an NPQH. To be eligible for funding you must be in your first 2 years of headship.

Non-school users will not be eligible for funding but may be eligible to take it, even if it's not something that's suitable for them.

The number of non-school users is low, the number of ASO registrations is also low. The intersection is probably zero. Rather than designing a different journey for these users, we will ask them to contact support.

## Video of journey

{% from "embed/macro.njk" import appEmbed with context %}
{{ appEmbed({
  youtubeId: 'HCquKEFtZyU',
  title: 'Video of journey for users who do not work in a school'
}) }}

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
      text: "Do you work in a school?",
      img: { src: "01-do-you-work-in-a-school.png" }
    }, {
      text: "You will need a trn",
      img: { src: "02-you-will-need-a-trn.png" }
    }, {
      text: "Tell us about where you work",
      img: { src: "03-tell-us-about-where-you-work.png" }
    }, {
      text: "How is your course being funded?",
      img: { src: "04-how-is-your-course-being-funded.png" }
    }, {
      text: "Check your answers",
      img: { src: "05-check-your-answers.png" }
    }, {
      text: "Earlier design: Do you work in education?",
      img: { src: "06-old-design-do-you-work-in-education.png" }
    }, {
      text: "Earlier design: Asking about educational setting",
      img: { src: "07-old-design-asking-about-educational-setting.png" }
    }]
}) }}
