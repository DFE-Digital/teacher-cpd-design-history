--- 
title: Closing the 2022 cohort for ECTs and mentors 
description: Designing a clean cohort closure process that supports continuity and reduces manual effort  
date: 2025-05-19 
--- 

## What we set out to do 

We need to close the **2022 ECF cohort** at the end of **July 2025** as part of the normal end-of-contract process. Our goal is to: 

* stop generating financial outputs for 2022 
* ensure no further payments would be made for participants in that cohort 
* make sure eligible early career teachers (ECTs) could continue training, without data loss or breaking API integrations 

We also wanted to avoid repeating some of the manual work that had been required during the closure of the 2021 cohort, particularly around mentor handling.

## What we're changing and why 

### We're freezing 2022 cohort payments   

From **1 August 2025**, lead providers won’t be able to: 

* submit new declarations for 2022 participants 
* void paid declarations made in that cohort 

We’re doing this to **prevent overpayments** and **ensure contractual milestones are enforced consistently**. 

### We're moving eligible ECTs to the 2024 cohort   

Where there's evidence that a 2022 participant still needs training during the 2025/26 academic year, we’ll move them to the **2024 cohort**. 

We introduced two automatic triggers for this: 

* if a participant transfers into a school after June 2025 
* if they're still recorded as actively serving induction after mid-September 2025 

These triggers only apply if the school has set up a 2025/26 programme. 

This approach allows providers to continue declaring against them without needing to re-register or start again. 

## How providers will be able to identify moved participants 

We've got a field in the API v3 response:   

* `cohort_changed_after_payments_frozen: true` 

This lets providers: 

* see that a participant was moved automatically 
* differentiate between participants originally from 2021 or 2022 

We've also ensured: 

* the **cohort field** in the `GET /participants` response shows the new (2024) cohort 
* historical declarations remain accessible under the **original cohort** 

## Updating enrolment records 

Once a participant is moved: 

* they appear in the API with their new cohort 
* providers need to update enrolment data on their side 

We didn’t automate enrolment updates because providers track this in different ways. Instead, we’ve documented the behaviour clearly and offered test data to support it. 

## Managing outstanding declarations 

We’ve advised providers to submit any outstanding 2022 declarations before registration opens for 2025/26. 

In cases where providers need to submit a late declaration for a participant already moved to 2024, we: 

* allow a temporary restore to the 2022 cohort (if the provider is default for both) 
* require voiding and resubmitting declarations in a specific sequence 

## Why we’re not moving 2022 mentors 

We decided **not to move mentors** from the 2022 cohort to 2024, even if they haven’t completed training. 

This simplifies logic and reflects our policy that mentors who started in 2022 are not eligible for further funded training. 

Instead, we mark them as `completed` and update their `mentor_funding_end_date`. 

## Test environment and data support 

To help providers prepare, we created: 

* dummy contracts and milestones in the test environment (sandbox) 
* test participants with `cohort_changed_after_payments_frozen: true` 

This gives providers a safe way to test their systems before live registration opens. 

## Supporting decision-making 

We reminded providers there’s no automatic way to tell how much training a moved participant still needs. 

Instead, we advise checking: 

* how far they progressed in training 
* when they last engaged 
* where they were previously training 

This reflects the real-world complexity of stop-start training and leaves providers room to make informed judgments. 

## How to tell between 2021 and 2022 starters 

We documented a clear method for providers to determine a participant’s original cohort: 

1. Check the participant’s `cohort_changed_after_payments_frozen` flag. 
2. Use `GET /participant-declarations` to retrieve `statement_id`. 
3. Call `GET /statements/{id}` — the cohort field will show the declaration’s original cohort 

## Final contract checks 

DfE’s contract management and assurance teams will run final payment checks before 31 July.   

After that, 2022 participants who haven’t been moved will no longer be eligible for any declarations. 

If a declaration is attempted for them, the API will return a **422 error**, with messaging to contact support. 

## What this work enables 

This approach allows us to: 

* cleanly close down the 2022 contract without losing data 
* continue funding participants who genuinely need to complete training 
* reduce support queries compared to the 2021 closure 
* prepare providers for more flexible training journeys in future 
