---
title: Emailing users who try to sign in with an unregistered email
description: We started emailing users who tried to sign in with an unregistered email address,
date: 2023-09-14
tags:
  - authentication
  - accounts
image:
  src: /manage-training/emailing-users-who-try-to-sign-in-with-an-unregistered-email/access-the-service.png
  alt: "Illustration showing an email saying ‘Someone tried to access the service with this email address. This email address is not registered with our service.’"
  opengraphImage: true
---
{% from "email/macro.njk" import appEmail %}

We now send an email to anyone who tries to sign in to the service with an unregistered email address. We provide guidance on how they can access the service.

## The issue

The first page of the service invites people to either sign in, or request access to the service. Users who request access to the service can generate an access link for their school. This is sent to the email address held on [Get Information about Schools](https://get-information-schools.service.gov.uk).

However we were still receiving a lot of emails from people who did not use the request access feature, and instead were asking the support team for access.

We believe that one cause of this is that users only need to use the service annually or infrequently, and so may not remember whether they have previously used the service or not, or whether they have an account or not.

This led to them trying to sign in, assuming they have access, at which point they saw the "Check your email" screen, checked their email, and then contacted support when no email was received.

The "Check your email" screen did contain some instructions on how to get an account, but we suspect this content was missed:

![Screenshot of a page titled 'Check your answers' followed by 'If you have an account, we’ve sent you a link to sign in.’'](previous-check-your-email-screen.png "The previous “Check your email’ screen")

## What we changed

Rather than only sending users an email if they sign in with a registered email, we now send an email to all users who try to sign in.

If they have a registered email address, they receive a sign in link as before.

If their email address was not registered, then we send them a separate email explaining how they can get access to the service:


{{ appEmail({
  subject: "Access the Manage training for early career teachers service",
  content: "Hello,

Someone just tried to sign in to the Manage training for early career teachers service using this email address.

> This email address is not registered with our service.

Choose one of the following options to get access.

1. If you registered to use the service with a different email address, sign in with that email address instead: [https://manage-training-for-early-career-teachers.education.gov.uk/users/sign_in](https://manage-training-for-early-career-teachers.education.gov.uk/users/sign_in)

2. If you know who’s currently registered to use the service for your school, contact them. Schools can only have one registered user at a time. If you’re taking over the role from that person, they must sign in and select the ‘Change’ option next to their name. They can then nominate you to be the registered user instead.

3. If you do not know who’s currently registered to use the service for your school, or your school has never had a registered user, follow this link to request an access code for your school: [https://manage-training-for-early-career-teachers.education.gov.uk/nominations/resend-email](https://manage-training-for-early-career-teachers.education.gov.uk/nominations/resend-email)"}) }}

We also updated the ‘Check your email’ screen:

![Screenshot of a page titled 'Check your answers' followed by ‘We’ve sent an email to frankie.roberto@education.gov.uk.’](check-your-email.png "The updated “Check your email’ screen")

The email address that they tried to sign in with is now repeated again, in bold. This is to help people spot if they made a typo when entering their email address.

We also suggest that people wait up to 5 minutes for the email to arrive, and check their spam folder.

## Initial results

In the first two days since this feature launched, over 500 people have received the new email when attempting to sign in with an unregistered email address. This represents around 1 in 7 sign in attempts.

This high number of unsuccessful sign ins suggests a wider issue with how accounts on the service work.

We suspect that users may be assuming that they can use an existing account, either from other GOV.UK branded services, or from other services and platforms relating to the Department for Education.
