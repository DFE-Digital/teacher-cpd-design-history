---
title: Preventing future start or end dates to be entered into the Record Inductions for Appropriate Bodies (RIAB) service
description: "The rationale for not allowing ABs to input future dates in the new RIAB service"
date: 2025-11-12
---

## The decision on future dates in the service
We decided that we will not accept future start or end dates in the initial release of RIAB. 

This means:
* Appropriate Bodies (ABs) will only be able to record induction periods that have already started
* Claims and releases must reflect events that have already occurred, not those planned for the future 


### Why we made this decision
ABs have asked for the ability to record induction start and end dates in advance, to help manage workload, facilitate smoother transfers between ABs, and report data as soon as it’s known. 
While these needs are valid, we’ve decided not to support future dates in the MVP because of:

* the risk of inaccurate data
* complexity of implementing a reliable solution within our delivery timeline


### What informed this decision
* training registrations often arrive earlier than induction records
* providers have adapted by onboarding ECTs before induction is confirmed - they monitor progress and may stop training if induction hasn’t started by a set milestone
* not having a registered induction does not block access to training
* impact on funding is minimal — declarations can’t be processed until induction starts, which aligns with the policy
* many ABs operate around the school calendar and rarely prepare data during summer holidays
* while some ECTs begin induction in July, the majority start in September, meaning the benefit of supporting future dates is limited
* making bulk upload available earlier may help, but doesn’t require accepting future dates.

## Our conclusion
We concluded that not allowing ABs to upload Claims before an ECT’s induction start date is a low-impact decision. Introducing it could add complexity and potential data issues at this stage of development.


## What we considered
We explored several options for handling future Claims:

### 1. Do not allow future Claim dates (keep as-is)
This is the option we’ve chosen for MVP.

#### Pros:

* lower risk of inaccurate data
* low effort to implement
* aligns with policy intent: induction and training should start together
* avoids complex rules around draft status and conflicting claims

#### Cons:

* risk of delays in receiving data
* inconsistent with other services (e.g. ECF, RECT) which do accept future registrations
* increased admin load in September/October
* may delay funding eligibility updates, though this impact is considered negligible


### 2. “Draft” Claims
Create a provisional record when the date is in the future, but don’t “accept” it until the induction start date.

#### Pros:

* ABs can balance workload better
* encourages earlier data return

#### Cons:

* high effort to implement
* risk of inaccurate data depending on implementation
* complex rules around draft status, conflicting claims, and data deletion

#### Sub-options:
**2A. Automatically “accept” a start date when the date hits**

Lower effort for ABs, but higher risk of inaccuracies.

**2B. Ask ABs to confirm the start is still happening before “accepting”**

Higher effort for ABs, but lower risk of inaccuracies.


### 3. Enable users to validate but not record future dates
Allow ABs to check whether a Claim would be valid (e.g. QTS awarded, not claimed by another AB), but don’t save any data until the induction has started.

#### Pros:

* helps ABs prepare data in advance
* no risk of inaccurate data being stored

#### Cons:

* doesn’t reduce workload at peak times
* doesn’t support early reporting

## Key considerations for future development

If we revisit this decision post-MVP, we’ll need to consider:

* what rules should apply to “draft” claims?
* should draft claims be allowed before QTS is recorded?
* should draft claims be allowed before an ECT is released by another AB?
* what happens if things change before the start date?
* how do we handle conflicting claims?
* what’s a reasonable limit for claiming in advance?
* how will ABs access and edit draft claims?
* what happens if a future claim is no longer happening?
* what if an ECT is registered for training but their draft induction claim is deleted?

## What’s next
We’ll monitor feedback from ABs during the MVP period and revisit this decision as part of our MVP+ planning. If we do decide to support future dates, we’ll need to design a solution that balances user needs with data accuracy and system complexity.
 
