---
title: Notify a school that they've been recruited by a provider, and report if it's incorrect
description: How a school finds out that a training provider has recruited them, and their options for reporting a mistake
date: 2021-06-11
---

How a school finds out that a training provider has recruited them, and their options for reporting a mistake

## User needs
**As an induction tutor i need to**
be notified when a training provider recruits my school, and have an appropriate window of time so that i can review this is correct

**As an induction tutor i need to**
report if sign up is incorrect, so that it doesn't hinder my opportunity using another training provider


## Business goals
* give schools an opportunity to tell us if the recruitment is incorrect
* record incorrect the reasons why, so we can monitor the recruitment behaviour of training providers and measure the success of the services' communications around recruitment
* break the relationship between a school and a training provider, allowing further recruitment to take place

## How it works
The journey works as follows;
1. A Lead Provider [reports the schools that they've recruited], which triggers an email notification to be sent to either the school's GIAS email address, or the induction tutor (if they've been nominated)
2. The email notification tells the school that a training provider has confirmed they will be delivering the induction, and link to report a mistake
3. On clicking the link, the user arrives on the digital service and selects from a series of pre-defined reasons why the recruitment looks like a mistake
4. The report is sent, and the reason reported back to DfE (for MI purposes) and the training provider notified


#### Wireframe journey
[![alt text](/manage-training/notify-school-been-recruited-by-provider/wire-flows.jpg)](/manage-training/notify-school-been-recruited-by-provider/wire-flows.jpg)

[Link to journey on Miro](https://miro.com/app/board/o9J_ldVNkCY=/?moveToWidget=3074457354439630103&cot=14)

#### Prototype of journey
[Journey start page](https://dfe-ecf-register-partner.herokuapp.com/school-challenging-partnership/school-challenge-1) (be sure to choose the [appropriate settings](https://dfe-ecf-register-partner.herokuapp.com/start-testing) first).

**Username:** ecf
**Password:** ecf


## Things we've learned

### Passive vs active consent
In an early iteration of the service, we explored asking schools to confirm that they have indeed been recruited by a particular training provider (ie. getting active consent). We felt this model was appropriate as validating the relationship from both sides meant we could pay training providers accurately.

However, through research with training providers and learning from the struggles of school engagement in Early Roll Out, it became clear that asking the schools to perform yet another task would simply cause delays. Which in turn would lead to training providers chasing schools to "approve the recruitment" via other methods (ie. by phone and email).

Instead we moved the due diligence back onto the training provider, by asking them to only [report the recruitment of a school], once contracts had been signed.

Passive consent is appropriate now, as the school has already followed an offline process with the training provider and is in a formal partnership by the time they receive the notification. ie. it shouldn't be a surprise to them.

### It's important to refer to both the Lead Provider and Delivery Partner
The launch of public BETA has shown that schools need to see the name of both the Lead Provider and the Delivery partner on the [notification email](/manage-training/notify-school-been-recruited-by-provider/#email-provider-confirmed) and also the [report page](/manage-training/notify-school-been-recruited-by-provider/#report-that-your-school-has-been-signed-up-incorrectly), otherwise they will report a mistake in error.

Lead Providers sometimes outsource the recruitment to Delivery Partners, meaning schools can have a relationship or familiarity with one but not the other.

### Errors reported in Public BETA so far (end of June 2021)
So far only a small handful of schools have reported a mistake using this journey. The data currently suggests that these schools belong to Multi Academy Trusts (MATs). This could indicate that the provider has recruited the MAT but perhaps not all schools in the MAT are aware of the partnership. To avoid these situations, it would be worth working with training providers to ensure MATs communicate the partnership to all their schools, before the Lead Providers report the partnerships to DfE.


## Error states

### Someone at the school has already reported this issue
Reporting a mistake with a partnership can only happen once, but there are a couple of instances where an error could have been reported by someone else. For example;
* The notification is received into a shared inbox and another person has reported the error first.  This is highly likely if a school hasn't yet [nominated an induction tutor](/manage-training/nominating-an-induction-tutor/).
*  The error has been reported via [the online service](/manage-training/school-preparing-to-use-an-approved-training-provider-fip/#sign-up-with-a-training-provider-done) and not via the email notification.

### This link in the notification email has expired
Errors can be reported within 14 days, but if a user tries to report a mistake after that period then it's important to pass them onto the support team to get help.

Through our research with schools, we learnt that our original 7 day period wouldn't be long enough for a school to pick up and action the email.


{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
      text: "Email: provider confirmed",
      img: { src: "01-email-provider-confirmed.png" },
      caption: "We include the name of the delivery partner and also the lead provider, to help schools recognise where the recruitment is coming from"
    }, {
      text: "Report that your school has been signed up incorrectly",
      img: { src: "02-report.png" },
      caption: "The schools have 14 days to report if something is incorrect. This information is fed back to DfE and used to help understand any patterns that may emerge; either from a providers behaviour, or confusing nature of communications"
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
