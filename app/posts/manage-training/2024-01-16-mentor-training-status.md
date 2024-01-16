---
title: Mentor training status
description: Showing schools whether their mentors have completed their mentor training or not
date: 2024-01-16
image:
  src: /manage-training/mentor-training-status/mentor-training.png
  alt: "Illustration showing a heading “Mentor training” with rows for Status, Lead provider and Delivery partner"
  opengraphImage: true
---

Now that many mentors will have finished their 2 year mentor training courses, we have designed a way to display this within the interface.

## The problem

In the current view of mentors within the service, no explicit mention is made of the 2 year mentor training programme that mentors receive alongside their mentoring of an early career teacher.

Additionally, no acknowledgement is made of when this training is completed.

![Screenshot of the current page summarising a mentor called Zenia, with sections labelled Mentor, Zenia is mentoring these ECTs and No longer training?](current-mentor-view.png "Current mentor profile page")


Evidence from user research sessions showed that awareness of the mentor training programme was often low, and often the mentor training was conflated with the mentoring itself.

## What we changed

We restructured the mentor page so that there is now separate sections for "Mentoring" and "Mentor training", as well as "Personal details" for information about their mentor themselves.

![Screenshot of a new mentor profile page, which sections labelled Personal details, Mentoring and Mentor training](currently-training.png "New mentor profile page")

The "Mentoring" section summarises who is currently being mentored. We also added a "Previously mentored" section to list any early career teachers the mentor previously mentored, but who have since completed their induction.

The "Mentor training" section summarises the training provider and delivery partner that the mentor is doing the training with. This is usually the same organisations as the early career teacher is doing their training with, but doesn’t have to be.

We designed three possible statuses for the mentor training.

### Not yet started

The first is "Not yet started". This would be where the mentor has not yet been assigned an early career teacher to mentor, following a policy rule that teachers are only eligible for mentor training once they are paired with an ECT.

![Screenshot of a mentor with the status 'Not yet started' within the Mentor training section](not-yet-started.png "The 'Not yet started' status")

### Training

The second is "Training". This would be set as soon as they are assigned an ECT to mentor, as their is no other eligibility criteria to meet. We also added a reference to the term that they started the mentor training.

![Screenshot of a mentor with the status 'Training' within the Mentor training section](currently-training-closeup.png "The 'training' status")

### Training completed

The third is "Training completed". This would be set once we have received a final declaration from the training provider. We added a date when the training was completed based upon this declaration.

![Screenshot of a mentor with the status 'Training completed' within the Mentor training section](training-completed.png "The 'training completed' status")

## What we learned

In the user research sessions, there continued to be some confusion about the mentor training.

As many of the mentors are highly experienced teachers, they often did not consider that they needed 'training', and instead were more focused on gaining access to the training materials used by the early careers teachers they were mentoring and being able to monitor their progress.

We also realised that there was a lot of uncertainty around the dates that the mentor training both began and was completed. As this information is not explicitly collected by our service, we are only able to infer it from other information, and it may not always be accurate. Whilst abstracting it to a term or month may mitigate this, even that may be wrong.

## Iterations following research

As we have not yet implemented the policy rule that teachers can only access the mentor training once paired with a mentor, we have removed both the "Not yet training" and the "Training" status. Instead, we will only show the "Training completed" status once the declaration has been received.

We’ve removed the references to both the term that the training started, and the date the training was completed, as this data is not explicitly collected.

We’ve also removed the list of "Previously mentored" teachers for now, as this data is not yet reliable.

## Future considerations

In future, as we implement the additional policy rules about when mentors can start their training, and the maximum length of time they have to complete it, we may need additional statuses to reflect this.

We will also explore ways to accurately explain when the mentor training starts and is completed.
