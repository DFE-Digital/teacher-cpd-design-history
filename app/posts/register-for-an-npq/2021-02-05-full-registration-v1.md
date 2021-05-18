---
title: Full registration v1
description: First draft of the full registration journey taking place on the NPQ service
date: 2021-01-27
---
We iterated on the DfE first registration flow to create a flow that is entirely on the DfE service. The main change to this is that it needs to include the questions that providers typically ask - usually about why a teacher want to do the course.

We chose to use the questions from Teach First as they have the most and longest questions. This will help us understand user reaction to this and to create a discussion with providers about how personalised these questions need to be.

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
      text: "Choose your NPQ",

      img: { src: "10.png" }
    },  {
      text: "Choose your provider",
       caption: "Choose NPQ and Provider needs to be earlier in the journey so that (if we need to) we can have dynamic provider questions  ",
      img: { src: "11.png" }
    }, {
      text: "Provider question 1",
      caption: "This feels like the user is being asked to do a lot later in the journey, need some way of either setting them up for this or saving and returning ",
      img: { src: "12.png" }
    }, {
      text: "Provider question 2",
      img: { src: "13.png" }
    }, {
      text: "Provider question 3",
      img: { src: "14.png" }
    }, {
      text: "Provider question 4",
      img: { src: "15.png" }
    }, {
      text: "Your school",
      img: { src: "30.png" }
    }, {
      text: "Find your school",
      img: { src: "31.png" }
    },{
      text: "Choose your school",
      img: { src: "32.png" }
    },{
      text: "Confirm school",
      img: { src: "34.png" }
    },{
      text: "Diversity monitoring - ethnicity",
      img: { src: "35.png" }
    },{
      text: "Diversity monitoring - gender",
      img: { src: "36.png" }
    },{
      text: "Diversity monitoring - disability",
      img: { src: "37.png" }
    },{
      text: "Check your details",
      img: { src: "38.png" }
    }, {
      text: "NPQ account created",
         caption: "Still not happy with this. We have to push the user over to the provider to finish and this looks like the whole journey has finished ",
      img: { src: "40.png" }
    }]
}) }}

## Iterations
This is the third iteration of the DfE first journey
