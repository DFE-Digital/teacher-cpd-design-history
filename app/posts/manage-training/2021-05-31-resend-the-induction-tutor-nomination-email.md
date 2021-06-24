---
title: Resend the school's "nominate an induction tutor" email
description: How a school triggers the resending of the nomination email, incase it gets missed or the unique link expires.
date: 2021-05-31
---

How a school triggers the resending of the nomination email, incase it gets missed or the unique link expires.


## User needs

We needed to allow schools to resend [the original nomination email](/manage-training/nominating-an-induction-tutor/#email-important-nqt-induction-changes) to the main GIAS contact, to cater for a few different needs.

**As a school decision maker who hasn't received or can't find the original email notification**
i need to resend the nomination email so i can continue with nominating my induction tutor

**As a school decision maker with a nomination link that's expired**
i need to resend the nomination email with a valid link, so i can continue with nominating my induction tutor

**As a school decision maker who's school isn't eligible for ECF**
i need to be told why i'm not eligible when i try to resend the nomination email

**As a school decision maker trying to resend the nomination email**
i need to know if an induction tutor has already nominated for my school, so that i know to speak to my staff instead of contacting DfE

## Business goals
* Allow schools a self-serve method for resending the original email notification, and seeing eligibility statuses so that the support team aren't burdened with requests


## How it works
The journey works as follows;
1. The user starts the journey, by clicking a link on the [How to get an account for this service](#how-to-get-an-account-for-this-service) page
2. They search and select the local authority where the school is based
3. They search and select the school they want
4. The user confirms the schools details
5. If the school is eligible and hasn't already nominated someone, the nomination email is sent to the school’s main GIAS contact, with a unique link to [nominate their induction tutor].

**Wireframe journey:**
[https://miro.com/app/board/o9J_ldVNkCY=/?moveToWidget=3074457355253267755&cot=14](https://miro.com/app/board/o9J_ldVNkCY=/?moveToWidget=3074457355253267755&cot=14)

**Journey on prototype**
[https://dfe-ecf-register-partner.herokuapp.com/school-resend-nomination-email/resend-nomination-1](https://dfe-ecf-register-partner.herokuapp.com/school-resend-nomination-email/resend-nomination-1)

### Why we first ask for the local authority
There are ~25,000 eligible schools in England and many of which have similar sounding names; there are for example, ~50 schools called "St Mary's". When using an [accessible autocomplete field](https://github.com/alphagov/accessible-autocomplete), this means the user has to manually scroll through a long list of results. By asking the user to select the local authority first, means we can narrow down the subsequent list school results. This built upon similar findings that the NPQ team also discovered.

We decided to use *local authority* instead of *postcode* as through testing, we learnt that this was universally known across users, whereas some couldn't recall a school's postcode when prompted (especially for schools split across different sites). For us to narrow down the results, the specifics of a street address weren't also needed.


### Potential issues with this journey

* **The pathway into this journey isn't well sign posted**. Our sign in journey can't reveal to users if they don't have an account (to protect against [Observable Response Discrepancy](https://cwe.mitre.org/data/definitions/204.html)), so we're reliant on them carefully reading the content on the [sign in page] or [check your inbox] page. We may have to change our appetite for risk if this puts a burden on support as users are missing this journey. Introduce a negative confirmation on sign in would help; ie. *"you don't have an account and may not be nominated. Begin nominating yourself here"*.
* **Whilst we confirm that the nomination email has been sent, we can't reveal what email address it was sent to**. This is because the GIAS main contact is not publicly available and therefore we can't reveal it as part of our service either. We have tried to help users by giving them an example of where it may have been sent (ie. check the admin@, office@ inboxes) and also instructions on how to change the GIAS main contact, but both of these options ultimately create more work for the user. We've learned through the launch of Private BETA that many users assume the "main contact" is the same as DfE sign.


## Error states
The journey also contained screens to account for scenarios where the user could not continue. These were;

1. Your school is only eligible for 2 of our programmes.
2. Sorry, teachers cannot serve statutory induction at your school
3. You can only send one email per day
4. An induction lead/tutor has already been nominated

The purpose for each error state is detailed under the relevant screenshot below.


{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
      text: "How to get an account for this service",
      img: { src: "01-how-to-get-an-account-for-this-service.png" },
      caption: "The user arrives here either from either two places in the sign in journey: 1). the Enter your email address page 2). the check your email page"
    }, {
      text: "Send your school a link to nominate an induction tutor",
      img: { src: "02-1-send-induction-tutor-link.png" }
    }, {
      text: "What is your school’s local authority?",
      img: { src: "02-find-school-location.png" }
    }, {
      text: "Find your school",
      img: { src: "03-find-your-school.png" }
    }, {
      text: "Confirm your details",
      img: { src: "04-confirm-your-details.png" }
    }, {
      text: "Success: Your school has been sent a link",
      img: { src: "05-success-your-school-has-been-sent-a-link.png" }
    }, {
      text: "Error state: Your school is only eligible for 2 of our programmes",
      img: { src: "06-error-your-school-is-only-eligible-for-2-programmes.png" },
      caption: "~4000 schools wont be eligible for funding for the Full Induction Programme, but they can still continue to do the Core Induction Programme (these schools are in GIAS codes: 10, 11, 30, 37). This page is to set their expectations on what they will be able to do on the service."
    }, {
      text: "Error state: Sorry, teachers cannot serve statutory induction at your school",
      img: { src: "07-fail-teachers-cannot-serve-statutory-induction-at-your-school.png" },
      caption: "Not all schools are eligible for ECF inductions. These schools are in GIAS codes: 24, 25, 26, 27, 29, 56"
    }, {
      text: "Error state: You can only send one email per day",
      img: { src: "08-fail-you-can-only-send-one-email-per-day.png" },
      caption: "Given the likelihood that the user wasn't able to find or access the email address that the nomination email was sent to, it was important to prevent the user from repeatedly resending the email out of frustration and provide them with details on what to do next."
    }, {
      text: "Error state: An induction lead/tutor has already been nominated",
      img: { src: "09-an-induction-tutor-has-already-been-nominated.png" }
    }]
}) }}
