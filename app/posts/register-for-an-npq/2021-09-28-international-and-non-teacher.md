---
title: International and non-teacher journeys
description: Allow more types of user to register for an NPQ
date: 2021-09-28
related:
  items:
  - text: Prototype PR
    href: https://github.com/DFE-Digital/npq-prototype/pull/1
---

{% from "figure/macro.njk" import appFigure with context %}

The NPQ journey was originally scoped to only teachers in England (and Jersey, Guernsey and the Isle of Man). We are increasing scope to include:

- teachers who want to study an NPQ in different countries (including Wales, Scotland and Northern Ireland)
- non-teachers who want to study an NPQ (an example might be someone who works in a SCITT or multi-academy trust)

We do not anticipate a need for international non-teachers.

## Asking if they are a teacher in England

We attempt to categorise users with an initial question:

1. Teacher in England
2. International teacher
3. Not a teacher

The NPQ journey now begins with a new question, ‘Are you a teacher in England, Jersey, Guernsey or the Isle of Man?’. We can then tailor all subsequent pages based on who they identify as.

(We expect people working in FE to still identify as teachers, as opposed to tutors)

{{ appFigure({
  title: 'Are you a teacher in England?',
  image: {
    file: '02-are-you-a-teacher-in-england.png',
    alt: 'Are you a teacher in England?'
  }
}) }}

## TRNs

Anyone registering to study for an NPQ needs to have a TRN. Even if they are not a teacher, or have not trained to be a teacher in England.

We ask about TRNs early in the journey, but for non-teachers and international teachers the focus of the page is now about "having a TRN" versus "knowing your TRN". The options are worded differently, but they have the same effect.

The key difference is that the effect of your choice is more obvious, rather than "I don’t have a TRN" it’s "I need to get a TRN". And rather than "I don’t know my TRN" it’s "I need a reminder".

{{ appFigure({
  title: 'You’ll need a TRN',
  image: {
    file: '03-youll-need-a-trn.png',
    alt: 'You’ll need a TRN'
  }
}) }}

## Names

International names – and matching against them – introduce a set of complexities we haven’t dealt with here, for example:

- is their registered name an anglicised version, or a common name rather than their official one
- on validation first name matters, but the order of names can vary with different cultures – for example the family name coming first. We won’t know how the name was initially captured by TRA
- name are more likely to contain non-English characters and because of encoding issues that could prevent validation (there’s a known bug)

We need to consider how we ask for full name in an international context.

On the name change page, we asked if their name had changed since they registered as a teacher. That context doesn’t make sense for non-teachers, or for anyone who has obtained a TRN purely for an NPQ. It’s been changed to refer to since they received their TRN.

{{ appFigure({
  title: 'Has your name changed?',
  image: {
    file: '04-has-your-name-changed.png',
    alt: 'Has your name changed?'
  }
}) }}

## Do not ask about schools or colleges

There are two screens we exclude from the international and non-teacher journeys:

1. Where is your school or college
2. Which school or college

These fields are also excluded from the Check your answers page.

## Providers list

Right now we are showing all providers. Providers can have different attitudes to international users:

1. Offer an explicit international version of an NPQ
2. Not offer anything explicit, but happy to work with someone and try and offer something
3. Accept only those in England, for example: "Places are only available to those working in schools in England."

We will survey providers about whether they accept international users. The list might change.

## Funding

The funding options are used as an indicator for providers to know who is paying. In a non-teacher and international context we can simplify this to:

- I am paying
- My NPQ is being paid another way

These users may not know what a trust is, and they may not have a school or college – and it might not matter if their school is contributing.

We are surveying providers about how they accept payment from international and non-teacher users.

{{ appFigure({
  title: 'How is your course being paid for?',
  image: {
    file: '08-how-is-course-being-paid-for.png',
    alt: 'How is your course being paid for?'
  }
}) }}

## Other design changes

On the Start page we’ve:

- removed the bullet-point about needing to be a teacher in England
- tweaked who can use this service to be less explicit about teachers

On the Providers page, for these users only, we’ve removed a paragraph about checking with your school or college about.

When we ask for National Insurance number, there’s a pre-question asking if they have one. We might need to give guidance around this question if international users do not know what a national insurance number is.

The Additional Support Offer (ASO) is excluded from the course list, for now. We are not clear if these users are eligible to take the course. It might not be offered internationally. We also hide the ASO prompt for NPQH registrants on the confirmation page.

The "Share information" page has been moved to the end of the journey, right before the check your answers screen. It may later be incorporated into the check your answers page.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
      text: "Start",
      img: { src: "01-start.png" }
    }, {
      text: "Are you a teacher in England?",
      img: { src: "02-are-you-a-teacher-in-england.png" }
    }, {
      text: "You’ll need a TRN",
      img: { src: "03-youll-need-a-trn.png" }
    }, {
      text: "Has your name changed?",
      img: { src: "04-has-your-name-changed.png" }
    }, {
      text: "National insurance number",
      img: { src: "05-national-insurance-number.png" }
    }, {
      text: "Which NPQ?",
      img: { src: "06-which-npq.png" }
    }, {
      text: "Choose provider",
      img: { src: "07-choose-provider.png" }
    }, {
      text: "How is course being paid for?",
      img: { src: "08-how-is-course-being-paid-for.png" }
    }, {
      text: "Check your answers",
      img: { src: "09-check-your-answers.png" }
    }]
}) }}
