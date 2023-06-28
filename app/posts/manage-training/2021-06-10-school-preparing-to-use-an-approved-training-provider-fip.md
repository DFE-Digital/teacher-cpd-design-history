---
title: A school preparing to use an approved training provider (or the FIP)
description: How a school that's using a training provider, performs tasks such as signing up with a training provider and adding participants (ie. teachers and mentors).
date: 2021-06-10
tags:
  - training providers
---

How a school has who's chosen to use a training provider, performs tasks such as signing up with a training provider and adding participants (ie. teachers and mentors).

## User needs
**As an induction tutor i need to**
See my next steps so that i can prepare my cohort to start training

**As an induction tutor i need to**
view my programme choice and instructions on how i can change that programme if needed

**As an induction tutor i need to**
view instructions on how to sign up with a training provider and which providers i can contact

**As an induction tutor i need to**
see which training provider i am signed up with and report any incorrect sign ups that i receive

**As an induction tutor i need to**
know what information i need to collect from my participants, so i can prepare for onboarding them


## Business goals
* provide a route into support, for those schools who want to change their programme choice
* provide schools with a way to report an incorrect sign up with a training provider


## How it works
The journey works as follows;
1. On signing in, the user selects the cohort they want to manage
2. Assuming they have already [chosen the programme they want to do for this cohort](/manage-training/school-choosing-an-induction-programme/), they are presented with a list of tasks to perform
3. The first task of *choose your induction programme* is already marked as <strong class="govuk-tag govuk-tag--blue">done</strong>. The user is presented with information on this page on the decision they made, and what their options are if they want to change that decision.
4. If second task of *sign up with a training provider* has the status of <strong class="govuk-tag govuk-tag--grey">to do</strong> the following page gives instruction on how they can do this, along with advice on who they may need to talk to in their school network. If the task has the status of <strong class="govuk-tag govuk-tag--blue">done</strong> the following page plays back who their training provider is and also a link to [report if your school has been signed up incorrectly](/manage-training/notify-school-been-recruited-by-provider/).
5. The third task of *Add early career teachers and mentors* currently just provides the user with details on what information they need to gather when this functionality is finally released (~ July 2021)


#### Wireframe journey
[![alt text](/manage-training/school-preparing-to-use-an-approved-training-provider-fip/wire-flows.jpg)](/manage-training/school-preparing-to-use-an-approved-training-provider-fip/wire-flows.jpg)

[Link to journey on Miro](https://miro.com/app/board/o9J_ldVNkCY=/?moveToWidget=3074457355308879313&cot=14)

#### Prototype of journey
[Journey start page](https://dfe-ecf-register-partner.herokuapp.com/school-signed-in/fip/fip-choose-cohort) (be sure to choose the [appropriate settings](https://dfe-ecf-register-partner.herokuapp.com/start-testing) first).

**Username:** ecf
**Password:** ecf

#### How a school's programme choice changes
A logic diagram below illustrates how a programme choice changes when a school is recruited by a training provider, or when a school reports an incorrect sign up.
[![alt text](/manage-training/school-preparing-to-use-an-approved-training-provider-fip/programme-choice-change.jpg)](/manage-training/school-preparing-to-use-an-approved-training-provider-fip/programme-choice-change.jpg)


## Things we've learned
### Why we don't help schools find a training provider
Much of the ALPHA phase looked at how might we help schools find a training provider. This included building and testing searchable directories of providers, and even processes where "proposals" could be sent to schools. However, research showed us that;

* Much of the courtship between training providers and schools takes places offline and through existing channels and networks; silo'ing this into a digital platform would be more restrictive than beneficial
* Training providers were reluctant to use this, as they were attached to their current methods which let them use their existing branding, processes and relationships

Aware that training providers were financially incentivised to recruit schools, a strategic decision was made not to focus effort on solving more pressing problems


## Future considerations
* **Do schools need the option to change their induction programme?** Currently changing induction programme is [a task for DfE support](/manage-training/school-preparing-to-use-an-approved-training-provider-fip/#choose-an-induction-programme-done). Even though we have put in place steps to [make the right decision](/manage-training/school-choosing-an-induction-programme/) (ie. slow down the user and consider all of the options), we'll need to monitor the frequency of these support requests.
* **How might we evolve or transition the task list once all tasks are "done"**. The task list is a useful component to help users understand and complete the necessary steps to prepare their cohort. However, what happens when they've chosen their induction programme, been recruited by a provider and finished adding all of their participants? How does this page evolve to help the user manage this cohort over the next 2 years, when all tasks are complete?
* **How might we help isolated schools be recruited by training providers?**. Currently much of the emphasis is placed on training providers recruiting a school, and not so much with schools finding the right training provider. Whilst this model works for schools who are part of a large network (networks are attractive for training providers to recruit - less effort, more sign ups), it may disadvantage more isolated schools. Work needs to be done into where the most motivation lies; in the school looking for a training provider (do they have the time and resources?) or the training provider (can we give them a list of schools not currently in a partnership).


{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
      text: "Manage your training",
      img: { src: "01-manage-your-training.png" },
      caption: "The ECF induction programme is designed to run for 2 years per cohort. In the next few years more cohorts will be added to this table, letting users manage cohorts that are running simultaneously. There will be a time in the future where a user needs to manage three separate cohorts at once; one cohort that is coming to an end, one cohort that's half way through and one cohort that's just about to start."
    }, {
      text: "Manage cohort: use an approved training provider",
      img: { src: "02-next-steps-use-a-training-provider.png" }
    }, {
      text: "Choose an induction programme (done)",
      img: { src: "03-choose-an-induction-programme.png" },
      caption: "This item / page is always marked as **done** as it's completed by virtue of setting up a cohort."
    }, {
      text: "Sign up with a training provider (to do)",
      img: { src: "04-a-sign-up-with-a-training-provider.png" },
      caption: "If a school hasn't been recruited by a training provider, instructions are provided on how they can do this."
    }, {
      text: "Sign up with a training provider (done)",
      img: { src: "04-b-sign-up-with-a-training-provider.png" },
      caption: "Once a training provider recruits a school and tells DfE, this task is changed to **done** and the providers information is played back to the user. For 14 days the user also has the option to report a mistake. They are also [notified about this via email](manage-training/2021-06-10-notify-school-been-recruited-by-provider)."
    }, {
      text: "Add early career teachers and mentors",
      img: { src: "05-add-ects-and-mentors.png" }
    }]
}) }}
