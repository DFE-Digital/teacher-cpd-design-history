---
title: Removing the delivery partner question
description: "We've tested a few ways to ask school users about the delivery partner they're using for training, when they haven't worked with a delivery partner before. It's not been well understood, and we've chosen to remove it."
date: 2025-01-22
---

## Why we’re doing this

We created and tested an initial design which asked school users to enter their delivery partner.

We [wanted to ask schools](../asking-for-lead-provider-and-delivery-partner) for this because:

- it helps their lead provider set up training for their ECTs and mentors quickly
- some schools have come to our support desk asking to submit this information, and find it confusing they can't
- when they've worked with a delivery partner in the most recent academic year, they confirm their delivery partner, and schools can find it confusing they don't in some scenarios
- a school does ultimately decide on their delivery partner, so it better matches reality
- we hoped it would reduce schools having to reach out to delivery partners directly to give information

As we were aware that a lot of schools have the 'same' delivery partner as their appropriate body, we had since designed a journey where we ask users if their appropriate body is also the delivery partner for the ECT they are registering.

We tested this with some users, who all used the 'same' appropriate body and delivery partner, so found the question relatively straightforward.

However, it is also common for appropriate bodies and delivery partners to have differing operating names. In this scenario, we wouldn't be able to ask if the appropriate body is the same organisation as the delivery partner, and we may have to present a different name. This could cause confusion for those users.

In addition, sometimes appropriate bodies split into multiple different delivery partners to deliver training too.

This would present us with a risk that users may choose to answer 'yes' to the organisations being the same where they aren't. We're not confident users would understand what we were asking in this scenario and may answer 'yes' mistakenly.

## What we tested

We initially tested asking the user to tell us who will be providing training for the ECT being added. We wanted to test asking the user this to see if it resonated better than using the term 'delivery partner' within the question.

![A screenshot of the initial design we tested to ask the users about who the delivery partner is.](/ecf-v2/removing-the-delivery-partner-question/dp-first.png)

However, as this didn't test well, we then changed the question to ask specifically for the delivery partner to be entered. Users were still unsure about which organisation or what role we were referring to with this question.

![A screenshot of the second iterated design we tested to ask the users about who the delivery partner is.](/ecf-v2/removing-the-delivery-partner-question/dp-second.png)

We learnt that quite often the 'appropriate body' organisation is the same as the 'delivery partner' organisation, so we also tested asking users a yes or no question, where we could ask whether the two organisations were the same. If they answered no, we would then ask the user to input the delivery partner.

![A screenshot of the third iterated design we tested to ask the users about who the delivery partner is.](/ecf-v2/removing-the-delivery-partner-question/dp-third.png)

While this tested better, we weren't able to test this question with users where the two organisations differ, and therefore could not be reassured that this question would work in that scenario for those users. We also learnt that operating names for appropriate bodies and delivery partners can often differ, and asking if they are the 'same' would not be technically correct in those cases.

## Next steps

As we've not been able to find a way to ask school users about their delivery partner confidently, we've decided not to ask school users to input their delivery partner for the initial release of Register early career teachers. We may explore this again in future, when we have more time. We believe that asking schools for their lead provider addresses the main problem where sometimes ECTs and mentors were starting training late because they weren't ever contacting lead providers to set up the training.

Lead provider and delivery partner partnerships that have already been confirmed from previous years will continue to be shown to users when they are rolling over to the next academic year.
