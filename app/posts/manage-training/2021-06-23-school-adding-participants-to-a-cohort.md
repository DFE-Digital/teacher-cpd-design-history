---
title: A school adding participants to a cohort
description: How a school induction tutor adds Early Career Teachers and Mentors to a cohort
date: 2021-06-23
---

How a school induction tutor adds Early Career Teachers and Mentors to a cohort

## How it works
The journey works as follows;
1.


**Wireframe journey:**
[https://miro.com/app/board/o9J_ldVNkCY=/?moveToWidget=3074457356227023262&cot=14](https://miro.com/app/board/o9J_ldVNkCY=/?moveToWidget=3074457356227023262&cot=14)

**Journey on prototype**
[https://dfe-ecf-register-partner.herokuapp.com/school-signed-in/school-add-participants-to-cohort/choose-participant-type](https://dfe-ecf-register-partner.herokuapp.com/school-signed-in/school-add-participants-to-cohort/choose-participant-type)


## What happens after a participant has been added?
Validation screenshot?

## Why we do a certain thing


## Error states
The journey also contained screens to account for scenarios where the user could not continue. These were;

### This email has already been added


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
