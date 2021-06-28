---
title: A school viewing and managing participants in a cohort
description: How a school that is either using an approved training provider (FIP) or using the accredited materials (CIP) accesses, views and manages individual participants in a cohort.
date: 2021-06-16
---

How a school that is either using an approved training provider (FIP) or using the accredited materials (CIP) accesses, views and manages individual participants in a cohort.

## User needs
**As an induction tutor i need to**
have a quick overview all of the participants in a cohort, so that i can manage them accordingly

**As an induction tutor i need to**
view a participant in more detail, so that i can confirm or alter any data if required

**As an induction tutor i need to**
see specific details about a participants validation status, so that i can help them resolve any issues


## Business goals
* Replay the various validation statuses to the Induction Tutor so they can follow up directly with the participant if data is missing - ie. help progress the participant validation
* Allow the induction tutor to update the ECT / Mentor relationships to allow for changes in staffing
* Allow induction tutors to amend the data of participants who haven't yet signed in and confirmed it themselves (ie. the participants name, type, mentor/ECTs)



## How it works
The journey works as follows;
1. On signing in, the user selects the cohort they want to manage
2. Assuming they have already [chosen the programme they want to do for this cohort](/manage-training/school-choosing-an-induction-programme/), they are presented with a list of tasks to perform
3. Assuming the task list item "Add early career teachers and mentors", has the status <strong class="govuk-tag govuk-tag--grey">to do</strong> or <strong class="govuk-tag govuk-tag--grey">in progress</strong>, the user clicks on this and is presented with a table of all participants in that cohort; their name, whether they are an early career teacher (ECT) or mentor, and what their validation status is
4. The user clicks into each individual participant, and can view further information on this participant; context to their validation status (ie. what does the "not started" status mean), their email address and if they are an ECT, who their mentor is
5. If the user is viewing a individual ECT, they can also change their Mentor too


**Wireframe journey:**
[https://miro.com/app/board/o9J_ldVNkCY=/?moveToWidget=3074457358611816804&cot=14](https://miro.com/app/board/o9J_ldVNkCY=/?moveToWidget=3074457358611816804&cot=14)

**Journey on prototype**
[https://dfe-ecf-register-partner.herokuapp.com/school-signed-in/school-add-participants-to-cohort/cohort-participant-listing](https://dfe-ecf-register-partner.herokuapp.com/school-signed-in/school-add-participants-to-cohort/cohort-participant-listing).
Be sure to choose the [appropriate settings](https://dfe-ecf-register-partner.herokuapp.com/start-testing) first.


## Information architecture: why we manage participants through a cohort instead of via a global view
Put simply, there are a lot of attributes and relationships that the participant inherits by virtue of belonging to a cohort.  ie, the mentor they can have, the programme they are on and the materials they are using. Making the user (ie. the school induction tutor) aware of this is important in the early stages of setting up the cohort as it implies what the participant can and cannot do.

The logic of this isn't rooted in technical restrictions, but a set of requirements that determine how much a training provider gets paid for training an individual.

Through research, we've found that the mental model of a cohort (or academic year) is familiar with those who'd perform the role of the school induction tutor and hasn't yet caused any issues. However, whether this mental model will cause any problems as the platform matures needs to be taken into account - [see future considerations below](#future-considerations).


## Validation statuses
Once [a participant is added to a cohort](/manage-training/school-adding-participants-to-a-cohort/) their data is validated against various automated and manual sources to ensure they are;
1. a real person
2. a qualified teacher
3. eligible to receive training.

The status label that we assign the participant communicates to the user at what stage that validation is at, and whether any manual investigation is needed.

<strong class="govuk-tag govuk-tag--grey">NOT STARTED</strong>
The induction tutor has added the participant, but they haven't yet added their data to be validated.

What we tell the user: This person has not signed in and added their details yet. We will send them more notifications to add their details but you may also want to remind them.

<strong class="govuk-tag govuk-tag--yellow">WAITING ON DQT UPDATE</strong>
The participant has added their data, we have but they need to also update the Database of Qualified Teachers (DQT) manually. This requires the participant to do an extra step, and probably be chased by the induction tutor too, if they forget.

What we tell the user: We have asked this person to update their details on the Teacher Self Service.

<strong class="govuk-tag govuk-tag--yellow">Waiting to be added to DQT</strong>
The participant doesn't yet exist in DQT, so we can't automatically validate them. We are reliant on the Teaching Regulation Agency (TRA) adding them first. The reason they don't exist in DQT could be legitimate. For example; they are newly qualified or they were trained in Scotland, Ireland or abroad and waiting to be added.

What we tell the user: This person is being added to the teaching database. We will notify them when this is complete.

<strong class="govuk-tag govuk-tag--yellow">Waiting on QTS status</strong>
The participant has added their data, it's been validated against DQT, but they don't yet have their Qualified Teacher Status (QTS). This could be because they are newly qualified and waiting on the TRA to make an update on their side.

What we tell the user: We are checking their Qualified Teacher Status (QTS). This is usually updated in a month. You don’t need to do anything.

<strong class="govuk-tag govuk-tag--red">INVESTIGATE / rejected</strong>
The participant has added their data, it's been validated against DQT but alerts were found on their profile which prevents them from being trained. This could be because they have been disqualified, or have a disciplinary pending. There is nothing for the school induction tutor to do, and will require [DfE Admin to investigate and manually override].

What we tell the user: This person cannot be verified for statutory induction. You need to contact them directly.

<strong class="govuk-tag govuk-tag--green">Approved / validation finished</strong>
The participant has added their data, the data has been validated against DQT, there were no flags against their profile and they have QTS status.



## Future considerations
* **Will schools ever need a global view of participants?** From speaking to schools, multi academy trusts and training providers, we estimate that schools will be adding and managing ~ 6 participants per cohort. Knowing that the ECF programme will run for at least 3 years, and each cohort receives training for 2 years, this means that the most participants a school will manage on the platform at any given time will be ~18 (taking into account the need to setup a cohort several months before the new academic year). Ongoing research will need to be done, to see how participants are managed and if framing this management task through cohorts is an impediment. ie, "i just want to see all my participants in one place".
* **How might we evolve or transition the management of users when a cohort is fully setup**. Keeping the adding and managing of users in the task list currently makes sense as it's a vital part of getting a cohort prepared for the start of training. But once training is in place, how will this task list change and where will the management of users sit?




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
      text: "Your early career teachers (ECTs) and mentors",
      img: { src: "03-your-ects-mentors.png" }
    }, {
      text: "Single view of an ECT",
      img: { src: "04-ect-detail.png" },
      caption: ""
    }, {
      text: "Changing the mentor of an ECT",
      img: { src: "05-edit-mentor-1.png" },
      caption: ""
    }, {
      text: "Success: Single view of an ECT",
      img: { src: "06-edit-mentor-2.png" }
    }, {
      text: "Single view of a mentor",
      img: { src: "07-mentor-detail.png" }
    }]
}) }}
