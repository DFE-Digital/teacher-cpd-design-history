---
title: Making it easier for users to contact support
description: We have designed a form to allow users to contact support within the service instead of having to send an email.
date: 2023-11-17
tags:
  - support
image:
  src: /manage-training/allowing-users-to-contact-support/contact-support.png
  alt: "Illustration showing a heading “Contact support’ with lines indicating some text content, a large text input box, and a green button."
  opengraphImage: true
---

There are currently several actions in the service that users cannot do themselves, and instead need to email the support team for by.

We have designed a form that would enable users to more easily contact the support team for these actions.

## The issue

Actions users are currently unable to do within the service include:

* correcting someone’s date of birth
* correcting someone’s teacher reference number (TRN)
* changing the lead provider or delivery partner for a teacher’s training
* changing the type of training programme for an academic year, once it is set up

To do these, users need to email the support team.

Resolving these issues can take some time, due to:

* users not being clear in their initial email what they are trying to do
* ambiguity where teachers are mentioned by name
* users emailing support from a different email address than the one registered for the service

In addition, we suspect that having to use email to contact support may be a cause of frustration for users.

## Designing a contact form

We added some additional Change links to teacher profile pages:

![Screenshot showing a page titled Early career teachers Hadley Daleon, with a summary of their name, TRN, date of birth, email address, mentor, lead provider, delivery partner and appropriate body. Each of these has a link labelled ‘Change’ to the right of them.](additional-change-links.png)

Where things cannot be immediately changed, clicking Change takes users to a contact support page:

![Screenshot showing a page titled Contact support, followed by ‘Complete this form to request a change to Hadley Deleon’s registered training provider. We’ll automatically include these details for you: their school name and URN, and the name of the Teacher. Tell us which training provider they'll work with instead, the date they’ll start training with the new provider and the reason for this change’. Beneath this is a text box labelled ‘Your message’ and a green button labelled ‘Send message to support’.](contact-support-form.png)

The page starts by explaining that they will have to contact support to complete the specific action.

We show some details which will be automatically included in the support request, for example the name and reference of the school and teacher.

We then tell the user what information the support team will require, and include a single text input for their message.


When the user submits the message, we show a confirmation page:

![Screenshot showing a page titled ‘Your support request has been submitted’. This is followed by ‘Our support team will reply by email as soon as possible. They may need more information from you. You must report this change to Hadley Deleon's current training provider, and their new provider too.’ which is followed by a link labelled ‘Return to Manage mentors and ECTs’](support-request-submitted.png)

At this point, the request would be sent to our support management system (Zendesk) with the automatic details of what the user was trying to do, along with their message.

The support team would then follow-up with the user by email, as before.

## Next steps

We plan to start by using this contact form for a single action in the service.

We would then look to gradually use it in more places once we are confident that the integration works, and is useful.

Longer-term we would look to avoid the need for the form in the first place, by allowing users to complete more of these actions themselves.
