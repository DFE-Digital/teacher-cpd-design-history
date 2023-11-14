---
title: Exploring how schools tell us when a teacher has left
description: We removed an explicit option for induction tutors to add themselves as a mentor, instead allowing them to do it through the normal “add mentor” flow.
date: 2023-11-14
tags:
  - early career teachers
image:
  src: /manage-training/teachers-leaving-schools/teachers-leaving-schools.png
  alt: "Illustration showing the question “Has Jonathan left the school permanently?” with the answers “Yes” or “No, they’ve taken a temporary leave of absence, for example parental leave” as radio options"
  opengraphImage: true
---

We did some design and research to better understand how and when schools would tell us when one of their early career teachers leaves their school.

Our research showed that schools did not always understand when they were supposed to do this. There was also confusion about what to do when teachers take a break from teaching due to ill health or parental leave.

## Current process

Schools using the service see a link at the bottom of the profile page for each early career teacher with the text ‘Tell us if (teacher’s name) is transferring to another school’.

![TODO](current-leaving-link.png)

Clicking this takes them to a confirmation page:

![TODO](current-confirmation-page.png)

If they continue, they are then asked for a date when the teacher has or will leave the school. This can be in the past or future:

![TODO](current-date.png)

They are then asked to check their answers. If they press confirm and continue, they get a confirmation page:

![TODO](current-check-answers.png)

The confirmation page asks them to also notify their appropriate body and their training provider (if they use one):

![TODO](current-completion-page.png)

When returning to their list of early career teachers, the teacher is now shown as ‘No longer being trained’:

![TODO](current-list-view.png)

## The issue

We had evidence from our user support inbox that schools were sometimes using the journey above even where a teacher wasn’t leaving the school, in order to be able to re-register the teacher at their school with different training details. This caused issues with duplicate records.

Additionally, we were not sure whether schools understood and were able to easily answer the existing question about whether the early career teacher would be continuing their training in another school.

We were also aware that it is relatively common for early career teachers to take a break in their induction, for example due to ill health or for parental leave. In these circumstances, we were not clear whether schools knew what to do about managing that teacher’s induction and training.

## Design

We prototyped some design changes to the flow where schools tell us about teachers leaving.

The initial link was reworded to ‘Report that (teacher’s name) is leaving your school or taking a leave of absence’.

![TODO](new-leaving-link.png)

The next page then asked for their leaving date:

![TODO](new-date.png)

We then ask whether the teacher is leaving the school permanently or not. The question is worded using past or future tense based upon the leaving date.

![TODO](new-leaving-permanently.png)

If they are leaving the school permanently, we ask whether they are moving to another school in England. Schools can answer ‘Yes’, ‘No’ or ‘I do not know’.

If they select ‘Yes’, they are asked which school the teacher is moving to. This uses an autocomplete.

![TODO](new-moving-to-another-school.png)

They are then shown a check your answers page, as before:

![TODO](new-check-answers.png)

The confirmation page was updated to be clearer about what schools need to do next, by including the names of the appropriate body and training provider:

![TODO](new-completion-page.png)

When the school returns to their list of early career teachers, any teachers who have left their school are shown along with the date that teacher left:

![TODO](new-list-view.png)

Teachers who are leaving in the future are shown as currently training, but with the date they are leaving at shown:

![TODO](new-leaving-in-future.png)

## The research

We ran 2 focus group sessions with school induction tutors from 6 schools (2 secondary, 4 primary).

These participants were invited from a sample of schools who had previously had early career teachers leave during their induction.

In the focus groups, the participants were asked about their experience of teachers leaving school during their early career induction. They were also shown the new prototype design and asked to use it to tell us that one of the teachers was leaving the school.

The question about the date the teacher was leaving was clear and posed no issues.

There was some confusion about the question about whether the teacher was leaving permanently. Some participants did not perceive long-term sick leave as a temporary leave of absence. The term ‘permanently’ also tripped some participants up, as they associated this with permanently leaving the teaching profession.

With the question about whether the teacher was moving to another school in England or not, around half the participants said they would not know the answer to this. The other half said they would often know, such as if they had to give a reference to the teacher’s school.

One participant commented that they might know the teacher was moving to another school in England, but not which one, and that the question wording was unclear on what to do in this case.

One participant commented that they would expect to be shown a category of reasons why a teacher was leaving the school.

One participant commented that they would like to be able to specify an expected return date for a teacher leaving temporarily.

### Wider issues

The research also highlighted that the process of a teacher leaving their school could be quite long, involving many steps with lots of people and organisations to inform.

Using our service to tell the Department for Education is often the very last step – if they even remember to do so.

Some participants said they would expect the provider of the early career training to tell us instead.

Participants also mentioned that there is a separate process within [ECT Manager](http://ectmanager.com/) (which most schools use) to say that a teacher has left their school. This platform also lets them transfer the data about the teacher’s training (including their assessments) to the new school.

The requirement to use so many different platforms to enter the same (or similar) information was a cause of great frustration. It could also lead to confusion where the information was inconsistent across platforms.

## Next steps

We plan to do some further work to better understand the implications of a teacher being temporarily absent from their early career training – for example, at what point they should be deferred or withdrawn.

We also plan to explore whether we could allow schools to tell us directly about teachers taking a break from their training, with us then telling the training providers instead of the other way around.

We decided not to progress with the question asking schools if they knew the school a teacher was leaving to. There would be some benefit to getting this information, as it would mean we could make it easier for the new school to register that teacher without re-entering all the details. However there was not enough evidence that enough schools would know this information for the benefit to be worth the cost of the extra question.

In the longer term, we will continue to look at how we can reduce the duplication of data between the different platforms that schools need to use for early career teachers.
