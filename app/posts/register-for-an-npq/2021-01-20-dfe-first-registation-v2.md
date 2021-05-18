---
title: DfE first registration v2
description:
date: 2021-01-20
---
This is the second iteration of a registration journey option that starts with the DfE, users enter their TRN details, create an account and then are handed over to the relevant provider.

In this version we have altered:
1. the beginning of the journey to deal with the 'name issue' - the name the user enters into the TRN fields needs to match what is stored on the DQT. We found that updating the DQT wasn't top of mind when names were changed and it could get out of synch.
2. added the ability to find your school, so that we can look up the URN of the school to check for funding eligibility
3. added the diversity questions that the DfE need to the end of the journey

## User needs

<b>As a teacher</b>
I need to register interest and apply for an NPQ course at my chosen provider<br />
<b>As a teacher</b>
I need to provide the correct data about myself in the application form (TRN, DOB, Names)

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
      text: "Start",
      img: { src: "1.png" }
    }, {
      text: "Share choices with provider",
      img: { src: "2.png" }
    }, {
      text: "Teacher reference number check",
      img: { src: "3.png" }
    }, {
      text: "Teacher reference number reminder",
      img: { src: "3b.png" }
    }, {
      text: "Name change",
      caption: "We identified an issue with the teacher check. Sometimes users change their name and don't update the name on the DQT - it's not a top priority or one that users remember to do. So users who changed names were getting caught out and the TRN check was failing because of this. This is an attempt to triage people who fall into that category ",
      img: { src: "4.png" }
    }, {
      text: "Updated name",
       caption: "If the user said that they had changed their name on the previous screen they will arrive here ",
      img: { src: "4b.png" }
    }, {
      text: "I don't know if i changed my name",
      caption: "If the user said not sure on the previous page, they will end up here. We're not quite sure if this is the right advice, we need to check and update it + there may be better ways to deal with don't knows, needs more research. ",
      img: { src: "4cc.png" }
    },{
      text: "Name not updated",
      caption: "If the user told us they did not change their name on the question earlier in the journey. They can proceed, and use their old name if they want or they are directed on how to change it on the DQT before proceeding. ",
      img: { src: "4c.png" }
    },  {
      text: "Change details on the DQT",
      caption: "To change their name it needs to be updated on the teacher self service portal. We aren't really happy with this screen as it just pushes users over to another service + the conent needs a bit of crafting. We need to figure out if there is a better way of doing this. ",
      img: { src: "4d.png" }
    }, {
      text: "Qualified teacher check",
      img: { src: "5.png" }
    }, {
      text: "Contact details",
      caption: "We are not asking for the name again here, as we should have got the right name at the TRN check and we can use that.  ",
      img: { src: "6.png" }
    }, {
      text: "Password",
      img: { src: "7.png" }
    }, {
      text: "Confirm email",
      img: { src: "8.png" }
    }, {
      text: "Email confirmation",
      img: { src: "9.png" }
    }, {
      text: "Your school",
      caption: "We are using the school that is stored on the DQT for this. However, this could be out of date as they are no longer updaing it. So may be better to junk this screen if too many are out of date.   ",
      img: { src: "10.png" }
    },  {
      text: "Find your school",
       caption: "There are several ways of handling school lookup. We'd need to test several versions to get the best one + ECF are looking into this as well. But for now we are using this pattern to test the principle of finding a school. First you enter a location to narrow the selection down.  ",
      img: { src: "11.png" }
    }, {
      text: "Choose your school",
      caption: "Once the selection is narrowed down by the location, the user can choose their school using the type ahead.  ",
      img: { src: "12.png" }
    }, {
      text: "Your school",
      img: { src: "13.png" }
    }, {
      text: "Equality - ethnicity",
      img: { src: "14.png" }
    }, {
      text: "Equality - gender",
      img: { src: "15.png" }
    }, {
      text: "Equality disability",
      img: { src: "16.png" }
    }, {
      text: "Check your details",
      img: { src: "17.png" }
    }, {
      text: "NPQ account created",
         caption: "Still not happy with this. We have to push the user over to the provider to finish and this looks like the whole journey has finished ",
      img: { src: "18.png" }
    }]
}) }}

## Iterations
This is the second iteration of this journey
