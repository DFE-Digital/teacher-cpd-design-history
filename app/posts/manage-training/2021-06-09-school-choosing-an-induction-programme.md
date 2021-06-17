---
title: A school choosing an induction programme for a cohort
description: How a school sets up each cohort to use either an approved training provider (FIP) or use the DfE accredited materials (CIP).
date: 2021-06-09
---

How a school sets up each cohort to use either an approved training provider (FIP) or use the DfE accredited materials (CIP).


## How it works
The journey works as follows;
1. On signing in for the first time, the user is presented with a brief overview of their choices and asked if they know how they want to run inductions for the upcoming cohort. Links to external guidance on GOV.UK are provided if they are unsure.
2. The user chooses between either using an approved training provider (the Full Induction Programme / FIP) or using the DfE accredited materials (the Core Induction Programme / CIP)
3. The user confirms their choice
4. Their choice of programme is saved and they continue onto the respective next steps for [a school preparing to use an approved training provider (or the FIP)](/manage-training/school-preparing-to-use-an-approved-training-provider-fip/) or [a school preparing to use the DfE accredited materials (or the CIP)](/manage-training/school-preparing-to-use-dfe-approved-materials-cip/)


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
