---
title: Notify a school that they've been recruited by a provider, and report if it's incorrect
description: How a school finds out that a training provider has recruited them, and their options for reporting a mistake
date: 2021-06-11
---

How a school finds out that a training provider has recruited them, and their options for reporting a mistake

## How it works
The journey works as follows;
1.


**Wireframe journey:**
[https://miro.com/app/board/o9J_ldVNkCY=/?moveToWidget=3074457354439630103&cot=14](https://miro.com/app/board/o9J_ldVNkCY=/?moveToWidget=3074457354439630103&cot=14)

**Journey on prototype**
[https://dfe-ecf-register-partner.herokuapp.com/school-challenging-partnership/school-challenge-1](https://dfe-ecf-register-partner.herokuapp.com/school-challenging-partnership/school-challenge-1)

### Why schools opt out instead of opting in




{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
      text: "Email: provider confirmed",
      img: { src: "01-email-provider-confirmed.png" },
      caption: ""
    }, {
      text: "Report that your school has been signed up incorrectly",
      img: { src: "02-report.png" }
    }, {
      text: "Your report has been submitted",
      img: { src: "03-success.png" },
      caption: ""
    }, {
      text: "Error: Someone at [school name] has already reported this issue",
      img: { src: "04-error-already-reported.png" },
      caption: ""
    }, {
      text: "Error: This link has expired",
      img: { src: "05-error-link-expired.png" },
      caption: ""
    }]
}) }}
