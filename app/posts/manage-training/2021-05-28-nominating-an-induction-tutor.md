---
title: Nominating a School’s induction tutor
description: How a school nominates an induction tutor, to make decisions on its behalf
date: 2021-05-27
---

How a school nominates an induction tutor, to make decisions on its behalf


## User needs

**As a school decision maker i need to**
tell DfE who is in charge of training at my school, so that they can receive future ECF communications and make decisions on our behalf

**As a school decision maker i need to**
ensure my school admin staff aren't burdened with further tasks that are time sensitive or not relevant to their job

**As a school decision maker i need to**
tell DfE that if have no ECTs in this cohort, so that i stop receiving notifications and reminder emails from the service for this cohort


## Business goals
* communicate to all eligible schools the new statutory changes and how they can start to engage with the service
* create an accurate record of who is responsible for training in each school, so notifications and tasks can be delegated to them
* prevent the service from contacting generic admin email addresses that could easily be ignored
* identify schools that have no ECTs so that the service doesn't send them reminder emails and training providers stop contacting them for this given cohort


## First attempt: how it worked
An early iteration of the nomination journey allowed anyone to nominate an induction tutor for a school by;

1. arriving on the platform (from a variety of different comms channels)
2. selecting their school from a long list
3. entering the details of their induction tutor
4. checking they work for the school by comparing their email address

Our plan for verifying that an induction tutor legitimately worked at a school was to compare the email domain of the school's main contact on GIAS, with the domain of the nominated induction tutor. However, from analysing GIAS data we discovered that domains across school contacts were rarely consistent. ie. it could be perfectly valid for `jane.smith@coastalacademies.co.uk` to be the Induction Tutor for `Acorn Primary School`.

## Second attempt: how it works
Learning that this validation method wouldn't work, we looked at the feasibility of sending an email to the main contact on GIAS, with a unique link to nominate the school induction tutor.

From speaking to the [Get help with tech](https://get-help-with-tech.education.gov.uk/) team, we learned that the launch of their service was incentivising schools to update their data in GIAS.

The journey works as follows;
1. We send an email to the school’s main GIAS contact, containing information about the new statutory changes and with a unique link to nominate their induction tutor.
2. On clicking this link, the user arrives on the service and is asked if they are expecting any Early Career Teachers for the upcoming cohort / academic year. Clicking either "Yes" or "i don't know" moves them onto the next step. Choosing "no" sees the school unsubscribing from future reminders from the platform, for that academic year.
3. If they are nominating their induction tutor, their school is already preselected by virtue of a token in the URL they followed from the email. ie. the unique link both verifies that the user is the recipient (or at least was forwarded) the official email, and allows us to identify the school they are nominating a tutor for.
3. They enter the full name and email address of the induction Tutor
4. If nomination is successful, the school admin staff have no further responsibilities on the service and the newly nominated induction tutor is notified via email.

**Wireframe journey:**
[https://miro.com/app/board/o9J_ldVNkCY=/?moveToWidget=3074457354086350072&cot=14](https://miro.com/app/board/o9J_ldVNkCY=/?moveToWidget=3074457354086350072&cot=14).

**Journey on prototype:**
[https://dfe-ecf-register-partner.herokuapp.com/school-nominate-school-lead/nominate-school-lead-1](https://dfe-ecf-register-partner.herokuapp.com/school-nominate-school-lead/nominate-school-lead-1).

### Why do we ask schools if they're expecting any ECTs?
Put simply, if a school doesn't have any ECTs, there is no need for them to use the service. Recording this information about this cohort allows our service to;

* stop sending them reminder emails to nominate an induction tutor or choose a training programme for this cohort
* indicate to training providers that they shouldn't approach the school (until next academic year / cohort)

It's essentially a way of opting out of further notifications for this cohort, from both DfE and the training providers.


## Error states
The journey also contained screens to account for scenarios where the user could not continue. These were;

1. The link in the email has expired
2. The email you entered is used by another school
3. An induction tutor has already been nominated for your school


{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
      text: "Email: Set up your NQT induction (Early Career Framework)",
      img: { src: "01-induction-changes-email.png" },
      caption: "The email sent to the school’s main GIAS contact, with a unique link to nominate their induction tutor"
    }, {
      text: "Do you expect to have any early career teachers at [school name] this year?",
      img: { src: "02-pre-start.png" }
    }, {
      text: "Nominate an induction lead or tutor for [school name]",
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
