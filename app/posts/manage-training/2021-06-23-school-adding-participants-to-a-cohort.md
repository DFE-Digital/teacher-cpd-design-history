---
title: A school adding participants to a cohort
description: How a school induction tutor adds Early Career Teachers and Mentors to a cohort
date: 2021-06-23
---

How a school induction tutor adds Early Career Teachers and Mentors to a cohort



## User needs

**As a school induction tutor i need to**
add participants to a cohort, so their attendance on an induction course is recorded and they can begin their training

**As a school induction tutor i need to**
add participants to a cohort, using only the information that's easily available to me, so i don't have to collate large amounts of personal information

**As a school induction tutor using an approved training provider i need to**
add participants to a cohort, so my training provider can access their information and start to onboard them


## Business goals
* create a record of participants who have been inducted, to be referenced in the future (ie. to monitor and measure a change in retention)
* access a record of individual participants, to request they provide further information that can be validated
* to collect information on the relationships between ECTs and mentors, so that providers aren't paid twice for mentors who have already received training
* validate participant data against various data sources, to confirm the participants are real and eligible for training, to prevent fraud
* to know how many participants a school is training in a given cohort, so their training provider can be paid accurately


## How it works
The journey works as follows;
1. Whilst [viewing the participants within a cohort](/school-managing-viewing-participants-in-cohort/) the user clicks the "Add a new ECT or mentor" button.
2. The choose the type of participant they want to add to the cohort
3. They enter the full name and email address of the participant
4. If they are adding an ECT, they are asked who their mentor is
5. They confirm the details they have provided
6. They receive confirmation that the participant has been added


#### Wireframe journey
[![alt text](/images/manage-training/school-adding-participants-to-a-cohort/wire-flows.jpg)](/images/manage-training/school-adding-participants-to-a-cohort/wire-flows.jpg)

[Link to journey on Miro](https://miro.com/app/board/o9J_ldVNkCY=/?moveToWidget=3074457356227023262&cot=14)

#### Prototype of journey
[Journey start page](https://dfe-ecf-register-partner.herokuapp.com/school-signed-in/school-add-participants-to-cohort/choose-participant-type) (be sure to choose the [appropriate settings](https://dfe-ecf-register-partner.herokuapp.com/start-testing) first).

**Username:** ecf
**Password:** ecf



## Things we've learned
### Deal directly with the person who owns the data
We don't want to burden School Induction Tutors with the task of having to collect and validate lots of personal data for lots of participants. Instead, we simply notify the individual participant and ask them to do provide it directly. That way, it's easier for any validation errors to be rectified, as we're dealing directly with the person and their own data.

Much of the complications in Early Roll Out, were caused by training providers being given the responsibility of collecting all of the personal data of participants, and then having to pass this data onto DfE to validate (manually against a spreadsheet). Any validation errors DfE found would then be passed back to the training provider, who in turn had to ask the school or participant to rectify. Essentially, the training provider had become middleman in this process.

[![alt text](/images/manage-training/school-adding-participants-to-a-cohort/ero-onboarding-flow.jpg)](/images/manage-training/school-adding-participants-to-a-cohort/ero-onboarding-flow.jpg) A diagram illustrating how the training provider / delivery partner had become the bottleneck in the validation process for each participant. [View the diagram on Miro](https://miro.com/app/board/o9J_lIKQEEs=/?moveToWidget=3074457357844582750&cot=14).



Much of the personal data that frequently failed validation was also difficult to find and easy to misunderstand. For example;

* Their teacher Reference Number (issued at the start of a career but rarely referred to)
* Their exact name in the Database of Qualified teachers (life events could mean their name has changed since it being first entered)
* Finding information in schools is never consistent. Some have centralised systems that only HR can access, whilst others simply use on spreadsheets that anyone can view.

We explored several models of solving this data collection exercise, including asking the induction tutor to do all of the validation.

[![alt text](/images/manage-training/school-adding-participants-to-a-cohort/it-onboarding-flow.jpg)](/images/manage-training/school-adding-participants-to-a-cohort/it-onboarding-flow.jpg) A diagram exploring how the induction tutor would manage the validation tasks for each participant. [View the diagram on Miro](https://miro.com/app/board/o9J_lIKQEEs=/?moveToWidget=3074457357846001650&cot=14).


Our original hesitations of asking participants to add all of their own details were;

* delegating the task to a wide audience could mean a higher likelihood of delays - meaning suppliers get paid late and the start of training is affected
* adding yet another user group into the platform, could put more demand on the support team

Whilst having one user take ownership of a task can sometimes be a good idea (higher likelihood of it being completed) through research the pattern was consistent; delays would always be caused by assigning the data validation task to anyone but the individual whos data it was.

[![alt text](/images/manage-training/school-adding-participants-to-a-cohort/ptp-onboarding-flow.jpg)](/images/manage-training/school-adding-participants-to-a-cohort/ptp-onboarding-flow.jpg) A diagram exploring how the induction tutor would initially add the participant, but the participant entering their own data. [View the diagram on Miro](https://miro.com/app/board/o9J_lIKQEEs=/?moveToWidget=3074457357905455285&cot=14).


## Error states
#### This email has already been added
This error page appears when a user is trying to add a participant using an email address that is already used elsewhere in the service. ie. it is not just confined to the school or cohort. Emails per participant need to be unique as this is how users sign in and receive personal notifications.  


{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
      text: "Manage cohort: use DfE accredited materials",
      img: { src: "01.png" }
    }, {
      text: "Your early career teachers (ECTs) and mentors",
      img: { src: "02.png" }
    }, {
      text: "Add your early career teachers and mentors",
      img: { src: "03.png" }
    }, {
      text: "Enter their personal details",
      img: { src: "04.png" }
    }, {
      text: "Who is the mentor for this Early Career Teacher?",
      img: { src: "05.png" }
    }, {
      text: "Confirm these details",
      img: { src: "06.png" }
    }, {
      text: "Success: You have added <full name> to the cohort",
      img: { src: "07.png" }
    }, {
      text: "Error: this email has already been added",
      img: { src: "09.png" }
    }]
}) }}
