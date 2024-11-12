---
title: Assigning mentors through the ECT record
description: "Why we've changed the way we ask for who is mentoring the ECT"
date: 2024-11-05
---

## Why we’re doing this

We encountered the problem of existing mentor records without assigned ECTs within the service, this is a problem as they serve no purpose if they’re not assigned to an ECT. Equally, it was important that school users know to assign a mentor to their ECT record for the registration process to be complete.

## What we tested

We contemplated different ways in which we can ensure this and iterated. Our first option was beginning the ‘add a mentor’ journey with selecting which existing ECT record/s they will be assigned to (see screenshot below). Thus, not allowing for mentor records to exist without an already registered ECT connected to them.

![A screenshot of asking a first draft of asking who will be mentoring the ECT.](/ecf-v2/assigning-mentors/screenshot1.png)

However, this was later iterated to be added to the end of the ‘add an ECT’ flow, this way the user can select already existing mentor records at this stage and in the case of a new mentor – they will select ‘someone else’ and be prompted to begin the flow of adding a mentor once the ECT registration is complete.

![A screenshot of asking who will be mentoring the ECT.](/ecf-v2/assigning-mentors/screenshot2.png)

![A screenshot of giving the user next steps if they choose to not assign a mentor.](/ecf-v2/assigning-mentors/screenshot3.png)

The user will have the option to return to their ECT list if they don’t want to add the mentor at that stage, but in this case the ECT record is incomplete and will have a prompt beside it to assign a mentor (see below). We’re hoping by making this one holistic flow that users will have a clearer idea on when they’re done and what’s needed of them.

![A screenshot of assigning a mentor after adding ECT.](/ecf-v2/assigning-mentors/screenshot4.png)

## How it tested and next steps

In the case of selecting ‘someone else’ for their ECT’s mentor, users expected to be presented with a name field. Instead, the flow continues to a final check your answers page which left the users confused around when they’d add a mentor despite getting the ‘what you’ll need to next’ page directly after.

We’ve decided to remove the mentor selection page within the add an ECT flow and instead direct school users to assigning an existing mentor/ adding a new mentor once their ECT is registered as this has the same effect and better fits their expectations on the journey.
