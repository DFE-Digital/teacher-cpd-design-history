---
title: Iterations to eligibility checks
description: We recently made some updates to the eligibility checks on ECTs when they are registered on the service
date: 2022-05-25
---

We recently made some updates to the eligibility checks on ECTs when they are registered on the service, so that we ensure only eligible ECTS are marked as eligible and can complete funded ECF-based training delivered by providers.

## Who is eligible for DfE funding for ECF-based training?
Schools eligible for DfE funding include:
- state-funded schools
- maintained and non-maintained special schools
- independent schools that receive Section 41 funding

Early career teachers (ECTs) should be eligible for DfE funding if:
- they start their induction on or after 1 September 2021
- hold qualified teacher status (QTS)
- don’t have any flags, such as prohibitions, sanctions or restrictions

ECTs with qualified teacher learning and skills status (QLTS) are not eligible for DfE funding, because they are exempt from statutory induction.

## How the service checks the eligibility of ECTs and mentors
If a school uses a training provider for ECF-based training, we have to make sure that everyone taking part is eligible for funding. We do this by checking ECTs and mentors’ details in the Database of Qualified Teachers (DQT).

When school induction tutors register ECTs and mentors with the DfE, we:
- send each teacher an email
- ask them to sign into our service and tell us their teacher reference number (TRN) or National Insurance number, name and date of birth

We check that the ECT:
- holds qualified teacher status (QTS)
- has not completed statutory induction before
- has not started an induction before 1 September 2021
- does not have any flags, such as prohibitions, sanctions or restrictions

We check that the mentor:
- does not have any prohibitions, sanctions or restrictions on their record
- has not received funded training for ECF-based mentoring before

## The problem

In December 2021, we noticed that around 30 early career teachers (ECTs) had been marked as eligible even though they are actually exempt from the requirement to serve statutory induction. In addition, around 500 ECTs had been marked as eligible but subsequently had an induction registered with dates that render them ineligible.

We agreed that we need to iterate our eligibility checks so that teachers:
- who are exempt from serving statutory induction are marked as ineligible; and
- must have an induction registered on the DQT before eligibility can be confirmed.

## What we did

We added additional checks and automation to our eligibility checks to ensure that only eligible participants are marked as eligible.
### Check that the ECT’s induction is registered with the TRA

An induction has to be registered for each participant in the DQT in order for them to pass the eligibility checks.

Therefore, we changed the eligibility logic so that if no induction is registered against a TRN, the record remains NULL and is automatically re-checked regularly until an induction is registered.

### Check that the ECT is not exempt from serving statutory induction

Teachers who acquired QTS via particular routes or trained in particular countries are exempt from the requirement to serve statutory induction. This means they are also ineligible for DfE-funded provider-led training. These exemptions are stored against the teacher in the status field of the induction table in the DQT.

We added an additional check to query the ‘exempt from induction’ field in the DQT, and if a teacher is exempt, we now mark them as false. We also send an email to the SIT and ECT letting them know that they are exempt.

### Automate the checks for previous induction
When checking an ECTs eligibility, we check if they have a registered induction date before the 1st September 2021. If they do, then they are not eligible for funded training and are treated as an NQT+1.

If a SIT disagrees with this decision - i.e. the induction start date is a mistake - the current advice we give them is to go and speak to their appropriate body who can contact the TRA to get this amended.

Until these iterations were made, re-checking the induction start date for ineligible participants was a manual, ad-hoc process. This made it difficult for the support team to give schools the most up to date information on the status of their eligibility checks.

We implemented a weekly automated re-run of the previous induction eligibility check for ECTs to make this more frequent and less ad-hoc. If a previous induction has been registered pre-1st September 2021, we email the SIT to let them know and advise them to get this amended if they haven’t started their induction before the autumn term 2021.
