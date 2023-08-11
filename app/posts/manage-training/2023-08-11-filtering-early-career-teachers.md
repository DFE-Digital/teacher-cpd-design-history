---
title: Filtering early career teachers
description: We explored how induction tutors could apply filters to see early career teachers who’ve completed induction, or who were no longer training.
date: 2023-08-11
tags:
  - completing induction
  - filtering
image:
  src: /manage-training/filtering-early-career-teachers/ecf-filter.png
  alt: "Illustration showing a set of 3 radio options: Currently training, Completed induction and No longer training"
---

As we enter the third year of the Early Career Framework, schools are now beginning to have teachers who have completed their induction under the 2 year training and induction programme.

To support this, we designed and researched an interface which allows induction tutors to filter teachers by status.

## The issue

Currently, all teachers registered for early career training at a school are displayed in a single list, grouped by their mentor.

If teachers who’ve completed their training and induction remain included in this list, the list would only grow over time, and would make it difficult for schools to focus on the teachers currently in training.

We were unclear whether there was any need to see the details of teachers who’ve completed training.

## What we changed

We considered giving induction tutors the option to archive or remove teachers who’ve completed their training, but decided to start with a simpler approach of moving these teachers into a separate list.

To allow induction tutors to switch between the lists, we introduced a filter panel on the left of the main list view.

![Screenshot showing a column on the left containing a filter panel and results on the right.](currently-training.png)

The filter includes the option to show teachers with 3 different statuses:

* Currently training
* Completed induction
* No longer training

The labels in the filter contain numbers in brackets to indicate the number of teachers with that status.

### Completed induction

For this list, the teachers are shown using a card layout, with only the name of the teacher and the date they completed visible.

![Screenshot showing the results of a filter for ‘Completed induction’](completed-induction.png)

The list is ordered from the most recently completed to the least recently completed.

The full details of the teacher’s early career training are visible when following the link, but the details are no longer editable.

![Screenshot showing the detail of a summary list for a teacher who has completed their induction, with rows for name, TRN, date of birth, email address, mentor, status, lead provider, delivery partner and appropriate body.](completed-induction-detail.png)

### No longer training

This list uses the existing design of only showing the name and the status in rows.

![Screenshot showing the result of a filter for ‘No longer training’](no-longer-being-trained.png)

## Research

We tested the filter design with 8 participants from a mix of small and large schools with varied levels of experience in the role of a induction tutor.

All participants noticed and used the filter successfully. Participants found the separation between the statuses to be be useful.

Participants suggested that being able to see teacher who’d completed their induction was reassuring, and that it may be helpful to be able to look back and check the dates of the training and who their mentor was.

The ‘No longer being training’ status was confusing, as some participants interpreted this as meaning the teacher had stopped their induction training completed, rather than having left the school but continuing their training elsewhere.

Participants nearly always only viewed a single status at time, and we observed no need to be able to see a mixture of statuses in a single list. Based upon this, we changed the filter from radios to checkboxes.

We also changed the button label from ‘Filter’ to ‘Apply filter’ as one participant was slightly unclear what the button did.

### Wider findings

Whilst the research was focused on early career teachers, some participants mentioned also wanting to be able to see a list of all their teacher mentors, and be able to remove people from this list who were no longer at their school.

Participants also suggested that they wanted to be able to easily see where a teacher was at within their induction, such as whether they were in their first or second year, or the date they started their induction.

When discussing the process around teachers completing their induction, participants were often not fully aware of all the steps needed, as this involved external organisations such as their ‘appropriate body’ and their training provider and training delivery partner.


