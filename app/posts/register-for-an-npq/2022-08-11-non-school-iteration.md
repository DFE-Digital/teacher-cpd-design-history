---
title: Iterating the journey for those who don’t work in a school or early years
description: Updates to the journey which enables some non-school users to receive funding for an NPQ
date: 2022-08-11
screenshots:
      items:
        - text: "What setting do you work in?"
          src: 01-what-setting.png
        - text: "How are you employed?"
          src: 02-how-employed.png
        - text: "What is your role?"
          src: 03-role.png
        - text: "What is the name of your employer?"
          src: 04-employer.png
        - text: "Check your answers"
          src: 05-check.png          
---

## Why we decided to iterate  

Although when the [non-school user journey](http://teacher-cpd-design-history.herokuapp.com/register-for-an-npq/non-teacher-journey/)  was first launched, there was an idea of the type of “other” roles or settings that would be funded, Policy now has a more definite steer. Participants working in virtual schools, hospital schools, young-offender institutes and supply teachers who were employed by a local authority will all receive DfE scholarship funding. 

We also had feedback that participants who assumed they would be funded were getting confused by the “How are you paying?” page. 

In addition we also wanted to change the “Do you work in a school, academy trust or 16 to 19 educational setting?” page. In the first month of the relaunch we found that 3.7% of school users were going down the non-school user route. Whilst we could change this page independently, it still relates to the non-school user journey.

## What we did 

### Changed “Do you work in a school, academy trust or 16 to 19 educational setting?

Our hypothesis was that the H1 was too long and confused users. Therefore we decided to break the three settings within the question into radios and change the H1. 

We also included an “Early years or childcare” and “Other” radio. This meant that we no longer needed to ask “Other” users whether they worked in childcare and therefore we removed the “Do you work in early years or childcare page?” which was included in the [original early years flow.](http://teacher-cpd-design-history.herokuapp.com/register-for-an-npq/early-years/) 

### Added “How are you employed?” 

If a user selects “Other”, once they’ve entered their personal details we will ask them a bit more about their employment. 

Originally we envisioned that if a user selected anything **except** “Other” on this page, we would automatically fund them. When proposing this to Policy, their decision was to still check these users eligibility for funding manually, in case there was confusion about these roles. It is also assumed that the amount of registrations for this route would be manageable. 

We decided it made sense to still keep this page, giving Policy better information for manual checks. In the future we will also be adding new roles/settings to the flow and we may decide to automate checks.

### Split the “Tell us about where you work?” page

After users have told us about how they are employed. We ask them what their role is, this is the first field of the original “Tell us about where you work?” page  

We did this for two reasons:

1. It is best practice to have one question per page.
2. On other pages in the flow we already ask for details about where users work, splitting the pages meant we could have more distinctive H1s. 

### Removed the “How are you paying page?”

We removed the “How are you paying?” for the non-school users, as it was confusing for users who were told they would be funded and it was not adding anything to those who would not be funded. 

### Moved the new flow ahead of selecting an NPQ and provider

We felt this was more logical and reflected the other routes within the service.
