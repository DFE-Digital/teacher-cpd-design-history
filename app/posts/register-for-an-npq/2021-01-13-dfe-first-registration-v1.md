---
title: DfE first registration  v1
description: First draft sketches for DfE registration journeys
date: 2021-01-12
---

This is the first sketch of a registation journey option that starts with the DfE, users enter their TRN details, create an account and then are handed over to the relevant provider. 

## User needs

<b>As a teacher </b>
I need to register interest and apply for an NPQ course at my chosen provider<br />
<b>As a teacher </b> 
I need to provide the correct data about myself in the application form (TRN, DOB, Names)


{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
      text: "Start",
      img: { src: "1.png" }
    },  {
      text: "Teacher reference number check",
            caption: "The big issue we identiied from UR is that many users don't know or have access to their TRN number. We caught this right at the start of the journey to ensure users didn't get part way through and get into difficulties because it didn't exist",
      img: { src: "2.png" }
    }, {
      text: "Teacher reference number reminder",
        caption: "If users selected no on the previous screen, they will be taken here which gives them more help to find it or request a reminder",

      img: { src: "3.png" }
    }, {
      text: "Qualified teacher check",
         caption: "Users had been set up for this by the previous screens, however they didn't read the hint text under the name which could cause issues later.",
      img: { src: "4.png" }
    }, {
      text: "Your details",
        caption: "This is asking for the name again, because the previous screen needs the name on the DQT, not necessarily the name you want to be registred with.",
      img: { src: "5.png" }
    }, {
      text: "Choose a password",
      img: { src: "6.png" }
    }, {
      text: "Confirm email",
      img: { src: "7.png" }
    }, {
      text: "Email confirmation",
      img: { src: "8.png" }
    },{
      text: "Funding",
      caption: "We are using this page to try and figure out the level of understanding the users have about funding and scholarships",

      img: { src: "10.png" }
    }, {
      text: "Choose a provider",
      img: { src: "11.png" }
    }, {
      text: "Check your details",
      img: { src: "12.png" }
    }, {
      text: "Account created on DfE",
        caption: "This page isn't quite right. Although the process has finished on DfE, in this version the user has to go to the provider site to finish. We were concerned that they might not realise if we use this pattern.",

      img: { src: "13.png" }
    }]
}) }}



## Iterations
This is the first iteration of this journey

## User research