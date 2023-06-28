---
title: Notifying a new school induction tutor and first sign in
description: How a newly nominated school induction tutor gets notified and the journey they follow when signing in for the first time
date: 2021-06-03
tags:
  - school induction tutors

---

How a newly nominated school induction tutor gets notified and the journey they follow when signing in for the first time


## User needs

**As a newly nominated induction tutor i need to**
be notified that i can sign into the service and informed of my responsibilities


## Business goals
* notify the induction tutor that they are now responsible for reporting data and decisions to DfE
* provide users with a way of signing in that doesn't require passwords
* provide the induction tutor with the most recent privacy policy for them to read when signing in (appears only once, with every change)


## How it works
The journey works as follows;
1. After a school has nominated an induction tutor, this person receives an email notifying them of their new role and the next steps they need to take
2. They follow a link in the email and arrive on the service start page for "Manage training for early career teachers"
3. They follow a password-less sign in journey, where authentication involves the user clicking on a unique link sent to their email address, instead of entering in a password
4. Once authentication is successful, the user is signed in and presented with the privacy policy. This privacy policy only appears the first time a user signs in, or if an amendment to the policy has been made since they last viewed it.
5. If the user hasn't yet chosen a programme for this upcoming cohort, they are redirected to the [School choosing an induction programme for a cohort](/manage-training/school-choosing-an-induction-programme/) journey.



#### Wireframe journey
[![alt text](/manage-training/notification-of-induction-tutor-and-first-sign-in/wire-flow.jpg)](/manage-training/notification-of-induction-tutor-and-first-sign-in/wire-flow.jpg)

[Link to journey on Miro](https://miro.com/app/board/o9J_ldVNkCY=/?moveToWidget=3074457355250705583&cot=14)

#### Prototype of journey
[Journey start page](https://dfe-ecf-register-partner.herokuapp.com/school-lead-notification-and-sign-in/notification-of-school-lead) (be sure to choose the [appropriate settings](https://dfe-ecf-register-partner.herokuapp.com/start-testing) first).

**Username:** ecf
**Password:** ecf



## Future considerations
### Authenticating via a unique link may not work for all users
We're assuming that they can access their email inbox, on the same browser that they are using the service. What if they have their personal email on their phone but are accessing the platform on a school-issued laptop? An alternative would be to email the user a 6 digit authentication code, which they are prompted for during sign in.
### We don't tell users if they don't have an account
We do this to protect against [Observable Response Discrepancy](https://cwe.mitre.org/data/definitions/204.html)), however this could confuse users especially as there is no explicit registration. Other services have decided to introduce a "you do not have an account page" and inherit the risk, as the benefits to the end users (and service support team) were more important. This maybe worth exploring if we want to prevent a bottle neck with the support team.


## Error states
### This link has expired
The unique sign in link that's emailed to users, has a token which is only valid for 1 hour. If this token has expired, the user is prompted to sign in again.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
      text: "Email: Sign in to manage induction",
      img: { src: "03-sign-in-to-manage-induction.png" }
    }, {
      text: "Start page: Manage training for early career teachers",
      img: { src: "02-manage-training-for-early-career-teachers.png" }
    }, {
      text: "Sign in",
      img: { src: "04-sign-in.png" }
    }, {
      text: "Check your email",
      img: { src: "05-check-your-email.png" }
    }, {
      text: "Email: Link to sign in",
      img: { src: "06-link-to-sign-in.png" }
    }, {
      text: "You are now signed in",
      img: { src: "07-a-you-are-now-signed-in.png" }
    }, {
      text: "Privacy policy",
      img: { src: "08-privacy-policy.png" }
    }, {
      text: "Error: This link has expired",
      img: { src: "07-b-this-link-has-expired.png" },
      caption: ""
    }]
}) }}
