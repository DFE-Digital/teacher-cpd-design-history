---
title: A school managing and viewing participants in a cohort
description: How a school who is either using a training provider or using the accredited materials (ie. FIP or CIP) accesses, views and manages individual participants in a cohort.
date: 2021-06-16
---

How a school who is either using an approved training provider (FIP) or using the accredited materials (CIP) accesses, views and manages individual participants in a cohort.


## How it works
The journey works as follows;
1. On signing in, the user selects the cohort they want to manage
2. Assuming they have already [chosen the programme they want to do for this cohort](/manage-training/school-choosing-an-induction-programme/), they are presented with a list of tasks to perform
3. Assuming the task list item "Add early career teachers and mentors", has the status **TO DO** or **IN PROGRESS**, the user clicks on this and is presented with a table of all participants in that cohort; their name, whether they are an early career teacher (ECT) or mentor, and what their validation status is
4. The user clicks into each individual participant, and can view further information on this participant; context to their validation status (ie. what does the "not started" status mean), their email address and if they are an ECT, who their mentor is
5. If the user is viewing a individual ECT, they can also change their Mentor too


**Wireframe journey:**
[https://miro.com/app/board/o9J_ldVNkCY=/?moveToWidget=3074457358611816804&cot=14](https://miro.com/app/board/o9J_ldVNkCY=/?moveToWidget=3074457358611816804&cot=14)

**Journey on prototype**
[https://dfe-ecf-register-partner.herokuapp.com/school-signed-in/school-add-participants-to-cohort/cohort-participant-listing](https://dfe-ecf-register-partner.herokuapp.com/school-signed-in/school-add-participants-to-cohort/cohort-participant-listing).
Be sure to choose the [appropriate settings](https://dfe-ecf-register-partner.herokuapp.com/start-testing) first.


### Information architecture: why we manage participants via a cohort instead of via a global view
Put simply, there are a lot of attributes and relationships that the participant inherits by virtue of belonging to a cohort.  ie, the mentor they can have, the programme they are on and the materials they are using. Making the user (ie. the school induction tutor) aware of this is important in the early stages of setting up the cohort as it implies what the participant can and cannot do.

The logic of this isn't rooted in technical restrictions, but a set of requirements that determine how much a training provider gets paid for training an individual.

Through research, we've found that the mental model of a cohort (or academic year) is familiar with those who'd perform the role of the school induction tutor and hasn't yet caused any issues.


## Future considerations
* **How might we evolve or transition the management of users when a cohort is fully setup**. Keeping the adding and managing of users in the task list currently makes sense as it's a vital part of getting a cohort prepared for the start of training. But once training is in place, how will this task list change and where will the management of users sit?
* **Will schools ever need a global view of participants?** From speaking to schools, multi academy trusts and training providers, we estimate that schools will be adding and managing ~ 6 participants per cohort. Knowing that the ECF programme will run for at least 3 years, and each cohort receives training for 2 years, this means that the most participants a school will manage on the platform at any given time will be ~18 (taking into account the need to setup a cohort several months before the new academic year). Ongoing research will need to be done, to see how participants are managed and if framing this management task through cohorts is an impediment. ie, "i just want to see all my participants in one place".



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
