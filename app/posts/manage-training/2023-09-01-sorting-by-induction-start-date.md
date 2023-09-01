---
title: Sorting teachers by their induction start date
description: We added a new feature to show induction start dates, and allow schools to sort their teachers by this date.
date: 2023-09-01
tags:
  - induction
  - sorting
image:
  src: /manage-training/sorting-by-induction-start-date/sort-by-induction-start-date.png
  alt: "Illustration showing a sort order selected: Induction start date"
  opengraphImage: true
---

As we enter the third year of the Early Career Framework, schools are now beginning to a longer list of teachers at different stages of their 2 year induction.

To support this, are now showing the induction start date for all teachers where this has been recorded, and are allowing schools to sort their teachers by this date.

## The issue

Previously, early career teachers were shown as [belonging to a particular year’s 'cohort'](/manage-training/school-managing-viewing-participants-in-cohort/). This proved to be confusing, and the service was [redesigned to be cohortless](/manage-training/new-manage-training-dashboard-and-review-app/) with all references to cohorts and induction start dates removed.

Now that more time has passed and schools have more early career teachers and different stages of their 2 year induction, school induction tutors indicated to us in research they they need some way to easily see what stage each teacher is at.

## What we changed

We completed some development work to fetch induction start dates from the Database of Qualified Teachers, as recorded by appropriate bodies with the Teaching Regulation Agency.

This meant that we could display these induction start dates within the 'status' section on the detailed view for each teacher:

![Screenshot showing a summary of an early career teacher, with their induction start date listed within a 'Status' row](induction-start-date-detail.png)

We also added the option for school induction tutors to sort teachers by their induction start date:

![Screenshot showing a list view sorted by Induction start date](sorted-by-induction-start-date.png)

When this option is selected:

* any teachers without an induction start date appear at the top
* more recent induction start dates appear higher than one from longer ago

This order is based on our assumption that in most cases, the more recently registered early career teachers may require more attention than those further through their training, as the more recent ones may still need pairing with a mentor, or their eligibility status confirmed.

### Future considerations

We plan to do some research to see how useful school induction teachers find this feature.

We’ll also look at analytics data to see how often the "sort by induction start date" option is used.

In future, we could make this the default sort order.

