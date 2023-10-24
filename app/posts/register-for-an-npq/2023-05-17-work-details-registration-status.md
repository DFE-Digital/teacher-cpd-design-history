---
  title: Change work details - registration status
  description: Journey for users who have registered for an NPQ and need to change their work details.
  date: 2023-05-17
  screenshots:
    items:
    - text: "User journey"
      src: "journey.png"
    - text: "Check and confirm"
      src: "check-answers.png"
    - text: "Confirmation"
      src: "confirmation.png"
  tags:
  - account area 
  - work details 
  - change details

---

## Update 

This work is currently on hold, as of June 2023. 

It could be prioritised in the future if the number of support requests increase. However, at this time users can continue with the NPQ they have registered without needing to update their work details, therefore the effort of doing this piece of work outweighs the benefit. It would be a large techical undertaking with impact on data. There is also a possibility the DfE Identity account could encompass this in the future. 

We did a [further investigation](https://dfedigital.atlassian.net/browse/CPDNPQ-1196) into the extent of this problem. Looking at all registrations in a 2 month period:
- 10.4% of registrations are full dupes (no changed details)  
- **4.8% of registrations have any detail except course or email changed**
- 8.8% just have a different course or provider, or both
- 4.6% just have a different course
- 3.7% just have a different provider
- **0.7% just change work details**

*percentages cannot be added together, because some registrations will appear in more than one of the queries.

We believe we can assume these are duplicates and mainly due to not being able to change details after registration is completed.

## Problem statement

Users who change their employment after registering for an NPQ need to raise a ticket with support to be able to update their details. This increases the work of support agents.

## Design

We have designed a journey so the user can self-serve when they need to update their work details. The journey below shows the process the user needs to follow to make the changes.

The screens are the same screens they go through in the registration process. The journey will depend on the type of work setting the user works in (as it is in the registration journey).

Once they've made all the changes, they can amend the work details in the check and confirm page (see screenshot).

Finally, once they complete the changes they can go back to the registration status page using the link on the confirmation page (see screenshot "Confirmation page").
