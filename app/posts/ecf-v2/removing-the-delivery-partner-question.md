---
title: Removing the delivery partner question
description: "We've tested a few ways to ask school users about the delivery partner they're using for training. It's not been well understood, and we've chose to remove it."
date: 2025-01-22
---

## Why we’re doing this

We've previously created and tested an initial design which asked school users to enter their delivery partner name in an autocomplete text box, but this tested poorly. This was because some users weren't familiar with all the terminology of appropriate body / lead provider / delivery partner - either they didn't understand the difference or didn't know the answer.

As we were aware that a lot of schools have the 'same' delivery partner as their appropriate body, we had since designed a journey where we ask users if their appropriate body is also the delivery partner for the ECT they are registering.

We tested this with some users, who all used the 'same' appropriate body and delivery partner, so found the question relatively straightforward.

However, it is also common for appropriate bodies and delivery partners to have differing operating names. In this scenario, we wouldn't be able to ask if the appropriate body is the same organisation as the delivery partner, and we may have to present a different name. This could cause confusion for those users.

We'd also be at risk that users may choose to answer 'yes' to the organisations being the same where they aren't. We're not confident users would understand what we were asking in this scenario and may answer 'yes' mistakenly.

## What we tested

We initially tested asking the user to tell us who will be providing training for the ECT being added. We wanted to test asking the user this to see if it resonated better than using the term 'delivery partner' within the question.

![A screenshot of the initial design we tested to ask the users about who the delivery partner is.](/ecf-v2/removing-the-delivery-partner-question/dp-first.png)

However, as this didn't test well, we then changed the question to ask specifically for the delivery partner to be entered. Users were still unsure about which organisation or what role we were referring to with this question.

![A screenshot of the second iterated design we tested to ask the users about who the delivery partner is.](/ecf-v2/removing-the-delivery-partner-question/dp-second.png)

We learnt that quite often the 'appropriate body' organisation is the same as the 'delivery partner' organisation, so we also tested asking users a yes / no question, where we could ask whether the two organisations were the same. If they answered no, we would then ask the user to input the delivery partner.

![A screenshot of the third iterated design we tested to ask the users about who the delivery partner is.](/ecf-v2/removing-the-delivery-partner-question/dp-third.png)

While this tested better, we weren't able to test this question with users where the two organisations differ, and therefore could not be reassured that this question would work in that scenario for those users. We also learnt that operating names for appropriate bodies and delivery partners can often differ, and asking if they are the 'same' would not be technically correct in those cases.

## Next steps

As we've not been able to find a way to ask school users about their delivery partner confidently, we've decided not to ask school users to input their delivery partner. School users are much more confident about providing their lead provider and appropriate body, so we will continue asking for these bits of information.

Lead provider and delivery partner partnerships that have already been confirmed from previous years will continue to be shown to users when they are rolling over to the next academic year.
