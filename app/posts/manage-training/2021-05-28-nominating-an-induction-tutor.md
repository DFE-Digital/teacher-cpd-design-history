---
title: Nominating a School's induction tutor
description: How a school nominates an induction tutor, to make decisions on its behalf
date: 2021-05-27
---

How a school nominates an induction tutor, to make decisions on its behalf

Managing the induction of Early Career Teachers usually falls to one person in a school, called an Induction Lead or Tutor. Thankfully this role and responsibility is already established in most schools.

Given most of the "Manage training for early career teachers" service is built around the Induction Tutor, it was important that we knew who they were, what school they worked for and how we can contact them. Although we could access an administrative email address for the majority of schools via GIAS data, we didn't want to burden the school admin staff with further tasks that were time sensitive or not relevant to their job.

## How it worked: the first version
An early iteration of the nomination journey allowed anyone to nominate an induction tutor for a school by;

1. arriving on the platform (from a variety of different comms channels)
2. selecting their school from a long list
3. entering the details of their induction tutor
4. checking they work for the school by comparing their email address

Our plan for verifying that an induction tutor legitimately worked at a school was to compare the email domain of the school's main contact on GIAS, with the domain of the nominated induction tutor. However, from analysing GIAS data we discovered that domains across school contacts were rarely consistent. ie. it could be perfectly valid for `jane.smith@coastalacademies.co.uk` to be the Induction Tutor for `Acorn Primary School`.

## How it worts: the second version
Learning that this validation method wouldn't work, we looked at the feasibility of sending an email to the main contact on GIAS, with a unique link to nominate the school induction tutor.

From speaking to the [Get help with tech](https://get-help-with-tech.education.gov.uk/) team, we learned that the launch of their service was incentivising schools to update their data in GIAS.

The journey works as follows;
1. We send an email to the school’s main GIAS contact, with a unique link to nominate their induction tutor.
2. On clicking this link, the user arrives on the digital service to nominate their induction tutor, with their school already preselected by virtue of a token in the URL. ie. the unique link both verifies that the user is the recipient (or at least was forwarded) the official email, and allows us to identify the school they are nominating a tutor for.
3. They enter the full name and email address of the induction Tutor
4. If nomination is successful, the school admin staff have no further responsibilities on the service and the newly nominated induction tutor is notified via email.

**Wireframe journey:**
[https://miro.com/app/board/o9J_ldVNkCY=/?moveToWidget=3074457354086350072&cot=14](https://miro.com/app/board/o9J_ldVNkCY=/?moveToWidget=3074457354086350072&cot=14).

**Journey on prototype:**
[https://dfe-ecf-register-partner.herokuapp.com/school-nominate-school-lead/nominate-school-lead-1](https://dfe-ecf-register-partner.herokuapp.com/school-nominate-school-lead/nominate-school-lead-1).

## Error states
The journey also contained screens to account for scenarios where the user could not continue. These were;

1. The link in the email has expired
2. The email you entered is used by another school
3. An induction tutor has already been nominated for your school


{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
      text: "Email: Important - NQT induction changes",
      img: { src: "01-induction-changes-email.png" },
      caption: "The email sent to the school’s main GIAS contact, with a unique link to nominate their induction tutor"
    }, {
      text: "Nominate an induction tutor or lead for <school name>",
      img: { src: "02-nominate-start.png" }
    }, {
      text: "Nominate an induction lead or tutor",
      img: { src: "03-nominate-induction-tutor.png" }
    }, {
      text: "Success: Induction lead or tutor nominated",
      img: { src: "04-nomination-complete.png" }
    }, {
      text: "Error state: This link has expired",
      img: { src: "05-link-expired.png" }
    }, {
      text: "Error state: The email you entered is used by another school",
      img: { src: "06-email-used.png" }
    }, {
      text: "Error state: An induction tutor has already been nominated for your school",
      img: { src: "07-already-nominated.png" }
    }, {
      text: "Email: Sign in to manage induction",
      img: { src: "08-notification-to-new-induction-tutor.png" },
      caption: "The email sent is sent to the newly nominated induction tutor"
    }]
}) }}
