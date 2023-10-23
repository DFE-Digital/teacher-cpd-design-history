---
  title: Change course - registration status
  description: Journey for users who have registered for an NPQ and want to change their course.
  date: 2023-05-17
  screenshots:
    items:
    - text: "User journey"
      src: "journey.png"
    - text: "Check and confirm"
      src: "check-answers.png"
    - text: "Confirmation"
      src: "confirmation.png"
---

## Update 

This work is currently on hold, as of June 2023. 

It could be prioritised in the future if the number of support requests increase or if the service changes leads to an increased need to change course. 

We did a [further investigation](https://dfedigital.atlassian.net/browse/CPDNPQ-1196) into the extent of this problem. Looking at all registrations in a 2 month period:
- 10.4% of registrations are full dupes (no changed details)  
- 4.8% of registrations have any detail except course or email changed
- **8.8% just have a different course or provider, or both**
- **4.6% just have a different course**
- 3.7% just have a different provider
- 0.7% just change work details

*percentages cannot be added together, because some registrations will appear in more than one of the queries.

We believe we can assume these are duplicates and mainly due to not being able to change details after registration is completed.

## Problem statement

Users who want to study a different NPQ from the one they registered for, need to submit a new registration or raise a ticket with support. This increases the work of support agents and takes more time from the user.

## Design

We have designed a journey so the user can self-serve when they need to change their NPQ. The journey below shows the process the user needs to follow to make the changes.

The screens are the same screens they go through in the registration process.

In some work settings (i.e. ITT mentor and private early years) changing the NPQ will affect their eligibility for funding (see journey).

In other cases, the provider previously chosen might not deliver the new NPQ. In this instance the user will need to choose a different provider (see journey).

Once they've made all the changes, they can amend the NPQ in the check and confirm page (see screenshot).

Finally, once they complete the changes they can go back to the registration status page using the link on the confirmation page (see screenshot "Confirmation page").
