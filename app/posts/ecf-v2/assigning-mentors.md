---
title: Assigning mentors through the ECT record
description: "Why we've changed the way we ask for who is mentoring the ECT"
date: 2024-11-05
---

## Why we’re doing this

In ECF1, there are existing mentor records without assigned ECTs within the service. This is a problem as a mentor is not eligible for funding or training until they are assigned.  It also means we might hold personal information for a mentor when this data isn't always being used for the purposes of training or funding.

We also want to make sure schools fully understand their ECT registration responsibilities. We wanted to make sure school users knew to assign a mentor to their ECT record for the registration process to be complete.

## What we tested

We contemplated different ways to solve this problem. 

Our first option was beginning the ‘add a mentor’ journey with selecting which existing ECT record(s) they will be assigned to (see screenshot below). This would mean mentor records could not be created without an already registered ECT connected to them.

![A screenshot of a journey where we ask which ECT is being mentored when adding a mentor.](/ecf-v2/assigning-mentors/screenshot1.png)

However, this was later iterated to be added to the end of the ‘add an ECT’ flow. This way the user could select already existing mentor records. In the case of a new mentor, they will select ‘someone else’ and be prompted to begin the flow of adding a mentor once the ECT registration is complete. We hoped this would help speed up assigning mentors to ECTs, where the mentor record already exists.

![A screenshot of asking who will be mentoring the ECT.](/ecf-v2/assigning-mentors/screenshot2.png)

![A screenshot of giving the user next steps if they choose to not assign a mentor.](/ecf-v2/assigning-mentors/screenshot3.png)

The user will have the option to return to their ECT list if they don’t want to add the mentor. If they do this, the ECT record is incomplete and will have a prompt beside it to assign a mentor (see below). We’re hoping by flagging to users that to finish registering the ECT, a mentor needs to be assigned, that the school user has a clearer idea on when they’re done and what’s needed of them.

![A screenshot of assigning a mentor after adding ECT.](/ecf-v2/assigning-mentors/screenshot4.png)

## How it tested and next steps

In the case of selecting ‘someone else’ for their ECT’s mentor, users expected to be then asked for the name and details of that mentor. Instead, the flow continues to a final check your answers page which left users confused around when they’d add a mentor, despite getting the ‘what you’ll need to next’ page directly after.

We’ve decided to remove the mentor selection page within the add an ECT flow. Instead,  we'll direct school users to assigning an existing mentor or adding a new mentor once their ECT is registered as this  better fits their expectations on the journey. It allows schools to give all the information for a mentor at once, or later, if they need to.

## Updates and iterations - June 2025

Since further testing and iterating, we've now further refined our content, as well as accomodate for capturing details about mentor training.

### Content updates

We've updated the content for the radio option from 'Someone else' to 'Register a new mentor', as we've found it to test more clearly, that it explicitly means a new mentor will be registered.

![A screenshot of when a user can select to register a new mentor.](/ecf-v2/assigning-mentors/screenshot5.png)

We've also updated the content on the confirmation page to more clearly tell the user that they've completed registering the ECT now that they've added the mentor for the ECT.

![A screenshot of the confirmation page when adding a mentor.](/ecf-v2/assigning-mentors/screenshot6.png)

### Mentor training

We've found that for mentors who receive mentor training when training a provider-led ECT, they typically would use the same lead provider for that training as the ECT they're mentoring. We initially tested a journey where users were being asked to answer 'yes' or 'no' to confirming the mentors training provider.

![A screenshot of the what we initially tested for confirming mentor training choices.](/ecf-v2/assigning-mentors/screenshot7.png)

However, in research, users found this confusing. Some users expressed confusion as to why this would differ from the ECT, and it introduced some hesitation. We since iterated to a design pattern where we tell the user that the mentor is eligible for mentor training, and tell them that the lead provider for the ECT will contact them regarding it. We also give an option to tell us if that lead provider will not be providing training and select a different lead provider, for those scenarios where the user knows that will be the case.

![A screenshot of our iterated pattern where we tell the user about the mentor training eligibility.](/ecf-v2/assigning-mentors/screenshot8.png)

![A screenshot of where the user can tell us about a different lead provider.](/ecf-v2/assigning-mentors/screenshot9.png)

We only playback mentor training options as part of the 'add a mentor' journey when a mentor is mentoring an ECT who is provider-led, and we skip mentor training questions for school-led.