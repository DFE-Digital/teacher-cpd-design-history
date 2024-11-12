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

![A screenshot of asking a first draft of asking who will be mentoring the ECT.](/ecf-v2/assigning-mentors/screenshot1.png)

However, this was later iterated to be added to the end of the ‘add an ECT’ flow. This way the user could select already existing mentor records. In the case of a new mentor, they will select ‘someone else’ and be prompted to begin the flow of adding a mentor once the ECT registration is complete. We hoped this would help speed up assigning mentors to ECTs, where the mentor record already exists.

![A screenshot of asking who will be mentoring the ECT.](/ecf-v2/assigning-mentors/screenshot2.png)

![A screenshot of giving the user next steps if they choose to not assign a mentor.](/ecf-v2/assigning-mentors/screenshot3.png)

The user will have the option to return to their ECT list if they don’t want to add the mentor. If they do this, the ECT record is incomplete and will have a prompt beside it to assign a mentor (see below). We’re hoping by flagging to users that to finish registering the ECT, a mentor needs to be assigned, that the school user has a clearer idea on when they’re done and what’s needed of them.

![A screenshot of assigning a mentor after adding ECT.](/ecf-v2/assigning-mentors/screenshot4.png)

## How it tested and next steps

In the case of selecting ‘someone else’ for their ECT’s mentor, users expected to be then asked for the name and details of that mentor. Instead, the flow continues to a final check your answers page which left users confused around when they’d add a mentor, despite getting the ‘what you’ll need to next’ page directly after.

We’ve decided to remove the mentor selection page within the add an ECT flow. Instead,  we'll direct school users to assigning an existing mentor or adding a new mentor once their ECT is registered as this  better fits their expectations on the journey. It allows schools to give all the information for a mentor at once, or later, if they need to.
