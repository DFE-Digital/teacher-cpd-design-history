---
title: A school chooses how they want to run inductions for a cohort
description: How a school sets up a cohort to use an approved training provider (FIP), the DfE accredited materials (CIP), declares they are designing their own induction or states they have no ECTs starting in the academic year.
date: 2021-06-09
---

How a school sets up a cohort to use an approved training provider (FIP), the DfE accredited materials (CIP), declares they are designing their own induction or states they have no ECTs starting in the academic year.

## User needs

**As an induction tutor i need to**
review the a summary of programme choices on offer so that i can make an informed decision for this cohort

**As an induction tutor i need to**
confirm our programme choice for a cohort, so that i can learn about the next steps and prepare the cohort to begin their training

**As an induction tutor i need to**
tell DfE that we have no ECTs / are designing our own induction for this cohort, so that i stop receiving notifications and reminder emails from the service for this cohort


## Business goals
* collect the programme choice from the school for a given cohort, to measure uptake
* identify which schools want to use an approved training provider, so we can tell the training providers to start communicating / recruiting these schools
* identify schools that have no ECTs or are doing their own induction, so that the service doesn’t send them reminder emails and training providers stop contacting them for this given cohort


## How it works
The journey works as follows;
1. On signing in for the first time, the user is presented with a brief overview of their choices and asked if they know how they want to run inductions for the upcoming cohort. Links to external guidance on GOV.UK are provided if they are unsure.
2. The user chooses between the two DfE programmes on offer (ie. the FIP or CIP), or declares that they are running their own inductions or simply don't have any ECTs for this cohort.
3. The user confirms their choice.
4. Their choice of programme is saved and they continue onto the respective next steps for;
* [a school preparing to use an approved training provider (FIP)](/manage-training/school-preparing-to-use-an-approved-training-provider-fip/)
* [a school preparing to use the DfE accredited materials (CIP)](/manage-training/school-preparing-to-use-dfe-approved-materials-cip/)


**Wireframe journey:**
[https://miro.com/app/board/o9J_ldVNkCY=/?moveToWidget=3074457355290069818&cot=14](https://miro.com/app/board/o9J_ldVNkCY=/?moveToWidget=3074457355290069818&cot=14)

**Journey on prototype**
[https://dfe-ecf-register-partner.herokuapp.com/school-signed-in/no-decision/pre-choose-provision](https://dfe-ecf-register-partner.herokuapp.com/school-signed-in/no-decision/pre-choose-provision)

## Why we link to long-form external guidance instead of having in-line guidance
We learnt through research that choosing an induction programme will not be a simple process and will often involve;

* multiple stakeholders
* reviewing existing staff roles and responsibilities
* discussions with Teaching School Hubs and/or Muti Academy Trusts
* discussions with other schools

Given the number of actors and non-linear nature of the decision making process, we decided that the aim of this journey was to simply collect the final decision and not try to lead the user through how to make it.


## Future considerations
* **How does this work with subsequent new cohorts?** Whilst the platform is being launched for the 2021 cohorts, the prompt to make a decision is part of a logical and possibly expected "set up process". As new cohorts are added to the platform, what might be the best way of prompting schools to decide the programme choice for these?


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
      img: { src: "03-confirm-your-induction-programme-fip.png" },
      caption: "The choice from the previous screen is presented back to the user"
    }, {
      text: "Success: Induction programme confirmed (CIP or FIP)",
      img: { src: "05-induction-programme-confirmed.png" },
      caption: "This success page is the same, if the school has chosen either to use an approved training provider (FIP), the DfE accredited materials (CIP)."
    }, {
      text: "Success: Induction programme confirmed (Design and deliver your own programme)",
      img: { src: "05-induction-programme-confirmed-diy.png"}
    }, {
      text: "Success: Induction programme confirmed (No early career teachers for this cohort)",
      img: { src: "05-induction-programme-confirmed-noects.png"}
    },{
      text: "Error: Your school is not eligible for this programme",
      img: { src: "06-school-not-eligible.png" },
      caption: "See [note above](/manage-training/school-choosing-an-induction-programme/#error-states)"
    }]
}) }}
