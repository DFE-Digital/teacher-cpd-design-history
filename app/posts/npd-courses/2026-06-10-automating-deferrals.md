---
title: Automating the deferral process
description: Changes to the deferral policy for NPD courses meant we needed to have a closer eye on deferrals and ensure they were handled correctly.
date: 2026-06-10
tags:
  - Reception
  - SEND
---

## Summary  

We introduced automation for the deferrals policy in NPD due to the time restrictions in the policy compared to NPQs. NPQs didn't have anything built into the service to handle this. If we hadn't built this in, regular manual data cleansing would have been required to ensure deferrals didn't go beyond the timeframe.

---

## Why we changed this  

The deferrals policy for NPD differs from NPQs.

For NPD:

- participants can defer for up to 12 months  
- after this, they are withdrawn  

We identified a risk that applying this policy directly in the service would create problems.

Cohort timings can shift, and provider data can be delayed.  

This meant users could be unfairly withdrawn or fall outside expected windows. 

We also wanted to reduce reliance on manual intervention from DfE.

---

## What we decided  

We made three key decisions:

- extend the system limit slightly beyond the policy rule
- automate key parts of the journey  
- support users with clear notifications  

We set the system limit to **14 months**, rather than 12, to allow for delays and uncertainty in cohort timing. 

We also decided to automate withdrawal and communication, rather than relying on manual processes.

---

## How it works  

When a participant defers:

- they are given a fixed window to return  
- the system tracks how long they have been deferred for

During this period:

- they receive an email when they defer, telling them the policy
- they are notified when a new cohort opens, to see if they want to restart
- they are reminded before their final opportunity to restart  

If they do not return in time:

- the system automatically withdraws them  

This keeps data accurate and avoids manual clean-up. 

---

## Working with internal teams  

We worked closely with policy and operational colleagues to design this.

We needed to balance:

- policy intent (allowing deferral across cohorts)  
- digital constraints (fixed time limits)  
- operational needs (minimising manual work)  

We iterated the design with policy to ensure the system reflected how the policy is intended to work in practice. 

---

## Testing with users  

We did not test the full deferrals journey with users. 

This is because:

- deferrals occur later in the lifecycle  
- the journey depends on provider interactions  

However, we tested related parts of the service to ensure:

- users understand next steps after deferring

---

## How we will monitor this  

We will monitor:

- support queries related to deferrals 
- number of cases where users are withdrawn 
- feedback from providers and operations 
- potentially testing this full journey with users 

This will help us understand:

- whether the time window works in practice  
- whether users are able to restart successfully  
- whether further changes are needed  

--- 

## Screenshots

[![Screenshot of a submitted registration with a deferred status. Giving the user information about when they deferred, how long they have to restart the course and that they will be auto-wthdrawn after 12 months.](/npd-courses/2026-06-10-automating-deferrals/registration-deferred.png "A submitted registration with a deferred status.")](/npd-courses/2026-06-10-automating-deferrals/registration-deferred.png)

[![Screenshot of the email sent to users after DfE receives the deferred status. This tells them when they deferred, how long they have to restart the course and that they will be auto-wthdrawn after 12 months](/npd-courses/2026-06-10-automating-deferrals/email-deferred.png "The email the user receives after deferring.")](/npd-courses/2026-06-10-automating-deferrals/email-deferred.png)

[![Screenshot of the email the user receives when a new registration window opens, reminding them to restart the course.](/npd-courses/2026-06-10-automating-deferrals/email-deferred-next-window-open.png "The email the user receives when a new registration window opens, reminding them to restart the course.")](/npd-courses/2026-06-10-automating-deferrals/email-deferred-next-window-open.png)

[![Screenshot of the email the user receives when the last recruitment window opens before they will be withdrawn.](/npd-courses/2026-06-10-automating-deferrals/email-deferred-nearing-autowithdraw.png "The email the user receives when the last recruitment window opens before they will be withdrawn.")](/npd-courses/2026-06-10-automating-deferrals/email-deferred-nearing-autowithdraw.png)