---
title: A school preparing to use the DfE accredited materials (or the CIP)
description: How a school that's using the DfE accredited materials, performs tasks such as choosing their training materials and adding participants (ie. teachers and mentors).
date: 2021-06-16
---

How a school that's using the DfE accredited materials, performs tasks such as choosing their training materials and adding participants (ie. teachers and mentors).


## How it works
The journey works as follows;
1. On signing in, the user selects the cohort they want to manage
2. Assuming they have already [chosen the programme they want to do for this cohort](/manage-training/school-choosing-an-induction-programme/), they are presented with a list of tasks to perform
3. The first task of *choose your induction programme* is already marked as <strong class="govuk-tag govuk-tag--blue">done</strong>. The user is presented with information on this page on the decision they made, and what their options are if they want to change that decision. Note how the programme choice could change [if they get recruited by a provider, or report an incorrect sign up](#how-a-schools-programme-choice-changes-when-they-are-recruited-by-a-lead-provider-or-report-an-incorrect-sign-up).
4. If second task of *Choose your training materials* has the status of <strong class="govuk-tag govuk-tag--grey">to do</strong> the following pages walk the user through making the choice, and linking to external guidance giving a summary of the different options. If the task has the status of <strong class="govuk-tag govuk-tag--blue">done</strong> the following page plays back the name of the training materials they have chosen and instructions on how to change this choice.
5. The third task of *Add early career teachers and mentors* currently just provides the user with details on what information they need to gather when this functionality is finally released (~ July 2021)


**Wireframe journey:**
[https://miro.com/app/board/o9J_ldVNkCY=/?moveToWidget=3074457355306758748&cot=14](https://miro.com/app/board/o9J_ldVNkCY=/?moveToWidget=3074457355306758748&cot=14)

**Journey on prototype**
[https://dfe-ecf-register-partner.herokuapp.com/school-signed-in/fip/fip-choose-cohort](https://dfe-ecf-register-partner.herokuapp.com/school-signed-in/fip/fip-choose-cohort).
Be sure to choose the [appropriate settings](https://dfe-ecf-register-partner.herokuapp.com/start-testing) first.


### Why we have a separate guidance page to help users choose between the materials
Through research, we discovered that schools struggled to make a decision about which training materials to use, unless they had a consistent, summarised view of the different options available. Attributes that were important to users when making this decision were; the general style (often inferred by the organisation who wrote the material), how the programme was structured, what subject matter they covered and the approach (ie. prescriptive vs flexible).

Given the scale of this decision and thus the amount of content needed to sufficiently help the user, a separate guidance page was more appropriate than providing in-service guidance.


## Future considerations
* **Do schools need the option to change their induction programme?** Currently changing induction programme is [a task for DfE support](/manage-training/school-preparing-to-use-an-approved-training-provider-fip/#choose-an-induction-programme-done). Even though we have put in place steps to [make the right decision](/manage-training/school-choosing-an-induction-programme/) (ie. slow down the user and consider all of the options), we'll need to monitor the frequency of these support requests.
* **How might we evolve or transition the task list once all tasks are <strong class="govuk-tag govuk-tag--blue">done</strong>**. The task list is a useful component to help users understand and complete the necessary steps to prepare their cohort. However, what happens when they've chosen their induction programme, been recruited by a provider and finished adding all of their participants? How does this page evolve to help the user manage this cohort over the next 2 years, when all tasks are complete?


{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
      text: "Manage your training",
      img: { src: "01-manage-your-training.png" },
      caption: "The ECF induction programme is designed to run for 2 years per cohort. In the next few years more cohorts will be added to this table, letting users manage cohorts that are running simultaneously. There will be a time in the future where a user needs to manage three separate cohorts at once; one cohort that is coming to an end, one cohort that's half way through and one cohort that's just about to start."
      }, {
      text: "Manage cohort: use DfE accredited materials",
      img: { src: "02-manage-cohort.png" }
    }, {
      text: "Notification that the schools programme will soon change to use an approved training provider (FIP)",
      img: { src: "09-cip-but-recruited-for-fip.png" },
      caption: "A school can choose to use the accredited materials (CIP), but in the meantime also be recruited by a training provider (FIP). If this happens the school is [notified by email](/manage-training/notify-school-been-recruited-by-provider/) and a notification banner is also placed at the top of all pages when managing that specific cohort."
    }, {
      text: "Choose an induction programme (done)",
      img: { src: "03-choose-induction-programme.png" },
      caption: "This item / page is always marked as **done** as it's completed by virtue of setting up a cohort."
    }, {
      text: "Do you know which accredited materials you want to use?",
      img: { src: "04-choose-training-materials.png" },
      caption: ""
    }, {
      text: "Choose study materials for your early career teachers",
      img: { src: "05-training-materials-guidance.png" }
    }, {
      text: "Which training materials do you want this cohort to use?",
      img: { src: "06-which-materials.png" }
    }, {
      text: "Study materials saved",
      img: { src: "07-saved.png" }
    }, {
      text: "Add early career teachers and mentors",
      img: { src: "08-add-ects-mentors.png" }
    }, {
      text: "How a school's programme choice changes when they are recruited by a lead provider or report an incorrect sign up",
      img: { src: "programme-choice-change.jpg" },
      caption: "A logic diagram explaining how a programme choice changes when a school is recruited by a training provider, or when a school reports an incorrect sign up."
    }]
}) }}
