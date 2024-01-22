---
title: Splitting ECTs and mentors into separate lists
description: Why we’ve separated out ECTs and mentors into separate lists
date: 2024-01-22
image:
  src: /manage-training/splitting-ects-and-mentors/splitting-ects-and-mentors.png
  alt: "Illustration showing ECTs and mentors split into 2 separate screens"
  opengraphImage: true
---

We’ve designed an updated interface where early career teachers (ECTs) and mentors are split into separate lists, each with their own filters.

## The problem

The current interface groups ECTs by their mentor. Any ECTs without a mentor are listed first, and any mentors not currently mentoring are listed at the end.

We previously added an option to [filter the list](/manage-training/filtering-early-career-teachers/) by the status of the ECT, and to [sort the list by ECT induction start date](/manage-training/sorting-by-induction-start-date/).

However these filters and sorting options are focused on the ECT rather than the mentor. Schools have different needs around managing their mentors, and so it makes sense to split ECTs and mentors into different – but linked – lists.

Splitting them up also allows us to split the "Add ECT or mentor" flow into 2 separate flows, which may help to avoid mistakes where schools add an ECT as a mentor or vice versa.

## What we changed

We created separate sections for early career teachers and mentors. A new horizontal navigation bar allows schools to navigate between them, as well as highlighting the current section.

### Home

This section contains the current 'Manage your training' page which summarises the number of early career teachers and mentors, and lets schools view and update their training choices for each academic year.

![Screenshot of the new home section](home.png "The 'Home' section")

### Early career teachers

This section is similar to the existing view, except that ECTs are now always sorted by induction start date (most recent first), with any ECTs missing a mentor moved to the top.

The page has a primary button to "Add ECT".

![Screenshot of the new ECTs section](ects.png "The 'Early career teachers' section")

### Mentors

This section lists mentors in alphabetical order. The list view also shows which ECTs the mentor is currently mentoring. Filters are added to let schools see mentors who are currently mentor or mentors not currently mentoring.

The page has a primary button to "Add mentor".

![Screenshot of the new Mentors section](mentors.png "The 'Mentors' section")

The 'Who do you want to add?' page, shown when clicking 'Add ECT or mentor', is no longer needed and has been removed:

![Screenshot showing the previous page with the heading 'Who do you want to add?' ](who-do-you-want-to-add.png "The previous 'Who do you want to add?' page")

## User research

In the user research sessions, most participants did not notice the navigation bar, and instead used the links on the detail views to navigate between ECTs and mentors.

Whilst this did not cause any problems, we responded by making the navigation bar more prominent by changing its background colour from light grey to blue.

![Screenshot showing a light grey navigation bar](old-nav.png "The version of the navigation bar tested in user research")


## Future considerations

In future, we may need to add additional filters to either the ECTs or mentors lists if we discover additional needs for them.

We could also look at the 'Home' view to see if the design and content of this page could be improved.
