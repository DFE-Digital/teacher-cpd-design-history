---
title: School preparing to use an approved training provider (or the FIP)
description: How a school has who's chosen to use a training provider, performs tasks such as signing up with a training provider and adding participants (ie. teachers and mentors).
date: 2021-06-10
---

**How a school has who's chosen to use a training provider, performs tasks such as signing up with a training provider and adding participants (ie. teachers and mentors).**


## How it works
The journey works as follows;
1. On signing in, the user selects the cohort they want to manage
2. Assuming they have already [chosen the programme they want to do for this cohort](/manage-training/school-choosing-an-induction-programme/), they are presented with a list of tasks to perform
3. The first task of *choose your induction programme* is already marked as **done**. The user is presented with information on this page on the decision they made, and what their options are if they want to change that decision.
4. If second task of *sign up with a training provider* has the status of **to do** the following page gives instruction on how they can do this, along with advice on who they may need to talk to in their school network. If the task has the status of **done** the following page plays back who their training provider is and also a link to [report if your school has been signed up incorrectly].
5. The third task of *Add early career teachers and mentors* currently just provides the user with details on what information they need to gather when this functionality is finally released (~ July 2021)


**Wireframe journey:**
[https://miro.com/app/board/o9J_ldVNkCY=/?moveToWidget=3074457355306758748&cot=14](https://miro.com/app/board/o9J_ldVNkCY=/?moveToWidget=3074457355306758748&cot=14)

**Journey on prototype**
[https://dfe-ecf-register-partner.herokuapp.com/school-signed-in/fip/fip-choose-cohort](https://dfe-ecf-register-partner.herokuapp.com/school-signed-in/fip/fip-choose-cohort)




## Future considerations
* **How do we evolve or transition to a new state, once all tasks are "complete" **


## Error states
The journey also contained screens to account for scenarios where the user could not continue. These were;

### Your school is not eligible for this programme.
We know that ~7500 schools are not eligible to get DfE funding for the FIP programme and whilst we will be adding this criteria to guidance we need to accocunt for instances where users haven't read this.

**First release**
Note that this error state currently isn't used in the live service, as schools who aren't eligible are not being sent emails asking them to [nominate their induction tutors](/manage-training/nominating-an-induction-tutor/) yet. We also [prevent these schools from triggering the resend](/manage-training/resend-the-induction-tutor-nomination-email/#error-state-your-school-is-only-eligible-for-2-of-our-programmes) too.


{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
      text: "Do you know how you want to run your statutory induction programme?",
      img: { src: "01-do-you-know-how.png" }
    }, {
      text: "How do you want to run your induction programme this year?",
      img: { src: "02-how-do-you-want-to-run-induction-programme.png" }
    }, {
      text: "Confirm your induction programme (FIP)",
      img: { src: "03-confirm-your-induction-programme-fip.png" }
    }, {
      text: "Confirm your induction programme (CIP)",
      img: { src: "04-confirm-your-induction-programme-cip.png" }
    }, {
      text: "Induction programme confirmed",
      img: { src: "05-induction-programme-confirmed.png" }
    }, {
      text: "Error: Your school is not eligible for this programme",
      img: { src: "06-school-not-eligible.png" },
      caption: "See [note above](/manage-training/school-choosing-an-induction-programme/#error-states)"
    }]
}) }}
