---
title: Notifying a Lead Provider that a school has reported a mistake (ECF only)
description: How a Lead Provider is notified of the mistake and how this is reflected in the user interface of the digital service
date: 2021-06-30
---

## User needs

## Business goals

## How it works

#### Wireframe journey
[![alt text](/images/manage-training/nominating-an-induction-tutor/wire-flow.jpg)](/images/manage-training/nominating-an-induction-tutor/wire-flow.jpg)

[Link to journey on Miro](https://miro.com/app/board/o9J_ldVNkCY=/?moveToWidget=3074457354086350072&cot=14)

#### Prototype of journey
There is no prototype for this journey.

## Things we've learned

## Future considerations

## Error states

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
      text: "Confirm schools",
      img: { src: "01-confirm-schools.png" }
    }, {
      text: "Choose delivery partner",
      img: { src: "02-choose-delivery-partner.png" }
    }, {
      text: "Upload CSV of schools",
      img: { src: "03-upload-csv-of-schools.png" }
    }, {
      text: "CSV upload error",
      img: { src: "04-csv-upload-error.png" }
    }, {
      text: "Confirm schools",
      img: { src: "05-confirm-schools.png" }
    }, {
      text: "Schools confirmed",
      img: { src: "06-schools-confirmed.png" }
    }]
}) }}
