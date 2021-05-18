---
title: NPQ registration. Provider First v1
description: First draft sketches for registration journeys
date: 2021-01-12
---

This is the first sketch of a registation journey option that starts with the provider journey and then hands over to DfE to complete the TRN and final set up of the DfE account.


## User needs

<b>As a teacher </b>
I need to register interest and apply for an NPQ course at my chosen provider<br />
<b>As a teacher </b> 
I need to provide the correct data about myself in the application form (TRN, DOB, Names)


{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
      text: "Invite email",
      caption: "As the user has started the process on the provider site, the user needs to either be linked from the end of the provider journey or will receive an email to start that journey.",
      img: { src: "1.png"  }
    }, {
      text: "Start",
      img: { src: "2.png" }
    }, {
      text: "Teacher reference number check",
      caption: "The big issue we identiied from UR is that many users don't know or have access to their TRN number. We caught this right at the start of the journey to ensure users didn't get part way through and get into difficulties because it didn't exist",
      img: { src: "3.png" }
    }, {
      text: "Teacher reference number reminder",
        caption: "If users selected no on the previous screen, they will be taken here which gives them more help to find it or request a reminder",
      img: { src: "4.png" }
    }, {
      text: "Check you are a teacher",
       caption: "Users had been set up for this by the previous screens, however they didn't read the hint text under the name which could cause issues later.",
      img: { src: "5.png" }
    }, {
      text: "Confirm email address",
      img: { src: "6.png" }
    }, {
      text: "Confirm your details",
        caption: "An assumption that we would have to check the details they have entered with their provider. Could get messy if the user wants to change those details.",
      img: { src: "7.png" }
    }, {
      text: "Updates by email",
      caption: "This was included to get an understanding of whether users needed updates from the DfE and if so what they might need.",
      img: { src: "8.png" }
    }, {
      text: "Account created",
      img: { src: "9.png" }
    }]
}) }}


## Iterations
This is the first iteration of this journey

## User research