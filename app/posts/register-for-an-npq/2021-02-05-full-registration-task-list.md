---
title: Full registration task list
description: Task list style full registration journey
date: 2021-01-28
---
We iterated on the full registration flow to try and deal with the issue of having questions that needs a lot of thought and writing later in the registration journey. A task list pattern that allows the user to see what they need to write in advance is one way of handling this.

The tricky thing with this version that if providers need to set the questions themselves we would need to know the NPQ and Provider before we show the  questions to the teacher user.

## User needs

<b>As a teacher</b>
I need to register interest and apply for an NPQ course at my chosen provider<br />
<b>As a teacher</b>
I need to provide the correct data about myself in the application form (TRN, DOB, Names)

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
      text: "Task List",
      img: { src: "1.png" }
    }]
}) }}

## Iterations
This is the third iteration of the DfE first journey
