---
title: Smart answers guidance v1
description: Smart answers type pattern to test whether a questions and answers style process will help users understand NPQ
date: 2021-02-05
---

This is similar content to the more standard guidance type pages. In this version we are asking the users questions and using the answers to give them personalised guidance. 

We have deliberately kept the copy to the basics as we want the users to tell us what is missing/what else they need during research. 


## User needs

<b>As a teacher </b>
To easily find and access information about NPQs<br />
<b>As a teacher </b> 
To understand the benefits of an NPQ qualification<br />
<b>As a teacher </b> 
To understand which NPQ is relevant to me<br />
<b>As a teacher </b> 
To understand if I'm eligible for funding<br />
<b>As a teacher </b> 
To understand who provides NPQs


{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
      text: "Start",
      img: { src: "1.png" }
    },  {
      text: "Choose to see personalised guidance or see everything",
      caption: "Offer the choice to see everything, often users will worry that they are missing something otherwise ",
      img: { src: "2.png" }
    }, {
      text: "Career stage",
      img: { src: "3.png" }
    }, {
      text: "Career goal",
      img: { src: "4.png" }
    }, {
      text: "Course advice",
      img: { src: "5.png" }
    }, {
      text: "Check funding - find a school",
      caption: "We need to know the school they are at to see if they are eligible for DfE funding. This is a bit trickier than that as we need to know if the provider has places as well, but for this prototype we are just seeing if this pattern is something that works for users",
      img: { src: "6.png" }
    }, {
      text: "Choose school",
      img: { src: "7.png" }
    }, {
      text: "Confirm school",
      img: { src: "8.png" }
    }, {
      text: "Paying for training",
      img: { src: "9.png" }
    },{
      text: "Provider options",
       caption: "This page is deliberately light so as to get users to tell us what they need on here. ",
      img: { src: "10.png" }
    }]
}) }}

## Iterations
This is the first iteration of this journey

## User research
