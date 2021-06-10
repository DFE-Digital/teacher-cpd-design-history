---
title: Notify a school that they've been recruited by a provider, and report if it's incorrect
description: How a school finds out that a training provider has recruited them, and their options for reporting a mistake
date: 2021-06-11
---

How a school finds out that a training provider has recruited them, and their options for reporting a mistake

## How it works
The journey works as follows;
1. A Lead Provider [reports the schools that they've recruited], which triggers an email notification to be sent to either the school's GIAS email address, or the induction tutor (if they've been nominated)
2. The email notification tells the school that a training provider has confirmed they will be delivering the induction, and link to report a mistake
3. On clicking the link, the user arrives on the digital service and selects from a series of pre-defined reasons why the recruitment looks like a mistake
4. The report is sent, and the reason reported back to DfE (for MI purposes) and the training provider notified


**Wireframe journey:**
[https://miro.com/app/board/o9J_ldVNkCY=/?moveToWidget=3074457354439630103&cot=14](https://miro.com/app/board/o9J_ldVNkCY=/?moveToWidget=3074457354439630103&cot=14)

**Journey on prototype**
[https://dfe-ecf-register-partner.herokuapp.com/school-challenging-partnership/school-challenge-1](https://dfe-ecf-register-partner.herokuapp.com/school-challenging-partnership/school-challenge-1)

### Passive vs active consent
In an early iteration of the service, we explored asking schools to confirm that they have indeed been recruited by a particular training provider (ie. getting active consent). We felt this model was appropriate as validating the relationship from both sides meant we could pay training providers accurately.

However, through research with training providers and learning from the struggles of school engagement in Early Roll Out, it became clear that asking the schools to perform yet another task would simply cause delays. Which in turn would lead to training providers chasing schools to "approve the recruitment" via other methods (ie. by phone and email).

Instead we moved the due diligence back onto the training provider, by asking them to only [report the recruitment of a school], once contracts had been signed.

Passive consent is appropriate now, as the school has already followed an offline process with the training provider and is in a formal partnership by the time they receive the notification. ie. it shouldn't be a surprise to them.

### It's important to refer to both the Lead Provider and Delivery Partner
The launch of public BETA has shown that schools need to see the name of both the Lead Provider and the Delivery partner on the [notification email](/manage-training/notify-school-been-recruited-by-provider/#email-provider-confirmed) and also the [report page](/manage-training/notify-school-been-recruited-by-provider/#report-that-your-school-has-been-signed-up-incorrectly), otherwise they will report a mistake in error.

Lead Providers sometimes outsource the recruitment to Delivery Partners, meaning schools can have a relationship or familiarity with one but not the other.


## Error states
The journey also contained screens to account for scenarios where the user could not continue. These were;

1. Someone at the school has already reported this issue
2. This link in the notification email has expired

The purpose for each error state is detailed under the relevant screenshot below.

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
      caption: "Reporting a mistake with a partnership can only happen once, and we need to account for scenarios where the notification is sent to an inbox which multiple people access. This is highly likely if a school hasn't yet [nominated an induction tutor](/manage-training/nominating-an-induction-tutor/)."
    }, {
      text: "Error: This link has expired",
      img: { src: "05-error-link-expired.png" },
      caption: "The unique link is valid for 14 days. If a user clicks on the link after that period, they will see this screen."
    }]
}) }}
