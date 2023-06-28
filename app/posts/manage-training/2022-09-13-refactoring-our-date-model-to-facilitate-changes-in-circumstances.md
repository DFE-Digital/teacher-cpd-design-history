---
title: Refactoring our data model to facilitate changes in circumstances
description: When we launched the Manage training for early career teachers service in Autumn 2021, we focused on ensuring schools could choose how they want to deliver ECF-based training and register their early career teachers (ECTs) and mentors. Any changes in circumstances that result in changes to ECF-based training were deprioritised until post-launch.
date: 2022-09-13
related:
  items:
  - text: Documentation on the data model changes
    href: https://dfedigital.atlassian.net/wiki/spaces/CPD/pages/3653861377/Data+Model+Changes
tags:
  - moving schools
---

## Background

When we launched the Manage training for early career teachers service in Autumn 2021, we focused on ensuring schools could choose how they want to deliver ECF-based training and register their early career teachers (ECTs) and mentors. Any changes in circumstances that result in changes to ECF-based training were deprioritised until post-launch.

The majority (around 80-90%) of ECTs can be expected to complete their entire 2-year induction at the same school and complete their ECF-based training through a single delivery route and a single training provider or set of materials. However, there is still a substantial minority of ECTs who will not do this for various reasons. The most common reason is ECTs moving schools part-way through their induction.

We also expected that schools will want to change their programme mid-way through their ECTs’ induction for various reasons.
Soon after launch, we received a request via our helpdesk from a school asking what they need to do if an ECT is moving school.

## Statutory guidance
The two broad principles set out in the statutory guidance are:
- The type of statutory induction is determined at an individual ECT level rather than at a school level;
- Schools and ECTs have the right to change the type of induction they are completing at any point during the induction.

Statutory guidance allows for an induction to be completed across multiple schools. The minimum amount of induction is one term.

Statutory guidance and the contracts with lead providers do not dictate that every induction taking place at a school must be via the same delivery route or same provider. In practice, we anticipated that most schools will use the same induction provision across the majority, if not all, of their ECTs, but there will be instances where the needs of the ECT lend themselves to an alternative induction route.

Statutory guidance and contracts with lead providers do not dictate that an ECT is ‘locked in’ to one particular delivery route or training provider or set of DfE accredited materials for the duration of their induction. This means that an individual ECT could change induction programme mid-way through or a school could change all their ECTs to a different induction programme type at any point in the 2 year period. In cases where an ECT moves between schools, the contract guidance asks the school to explore maintaining the same provision for continuity, but ultimately the decision should be what is both manageable for the school and in the ECT’s best interests.

Any combination is possible with ECTs legally able to move between funded provider-led training, DfE accredited materials and DIY induction routes at any point.

### Constraints of the service
To simplify, our service is built on a ‘school-level’. In broad terms this means that a school chooses a particular delivery route for ECF-based training for their whole cohort. The assumption was that a school will almost always choose the same provision for their whole school cohort.

The architecture of our service meant that:
- A school can only choose one induction programme and only partner with a single provider for each cohort
- The programme and provider is linked via the school, not the participant

We therefore agreed that a major refactor of the data model and design work was necessary for us to be able to handle all possible scenarios in a sustainable way.

#### The old data model
[![alt text](/manage-training/refactoring-our-date-model-to-facilitate-changes-in-circumstances/01-datamodel-old.png)](/manage-training/refactoring-our-date-model-to-facilitate-changes-in-circumstances/01-datamodel-old.png)

## What we did
We remodelled our data structures to reflect the scenarios that are legally and contractually possible. Put simply, we needed to be able to facilitate participants at a given school completing different ECF-based training routes.

Our aims were to create and move to a new data model that would:
- Enable schools to run multiple programmes simultaneously
- Enable participants to move schools and continue their current induction programme
- Retain a history of training for participants across their career

On the front-end, we wanted to maintain a simple, clear user journey that makes it easy for SITs to choose their induction programme for their cohort and register participants. In the majority of cases, this will be for an entire cohort.

For our MVP, we decided that we would create and move to the new data model, and deliver the journeys that would enable SITs to report a participant joining their school from another school where they started their induction in the service. This was because the highest number of requests we received through support and the highest projected scenario was that of ECTs moving schools.

#### The new data model, at a high level
[![alt text](/manage-training/refactoring-our-date-model-to-facilitate-changes-in-circumstances/02-datamodel-new.png)](/manage-training/refactoring-our-date-model-to-facilitate-changes-in-circumstances/02-datamodel-new.png)

The key changes in the data model are the relationships between different entities.

One notable change is the creation of an ‘induction record’ for each participant. We’ve moved a lot of information from the participant profile to an induction record.

A participant can have more than one induction record. When a participant moves school, we create a new induction record which is connected to their profile. Induction records act as a form of participant history, so we can see where they have been training and what programme they have been doing over time.

This ensures we expose the right information about the participant, such as what school they’re at, to the right training provider via the participants API endpoint.

### User needs that the new data model caters for
As a SIT, I need to change my entire cohort or one or more individual participants in my cohort from:
- Using a DfE-funded training provider to a different DfE-funded training provider
- Using a DfE-funded training provider to using DfE accredited materials or DIY
- Using DfE accredited materials to using a DfE-funded training provider
- Using DfE accredited materials to using different DfE-accredited materials (provided by a different supplier)
- Using DfE accredited materials to designing and delivering my own ECF-based training
- Designing and delivering my own ECF-based training to using a DfE-funded training provider
- Designing and delivering my own ECF-based training to using a DfE accredited materials

As a SIT, I need to choose a different induction programme for a new ECT/ECTs joining my school.

As a SIT, I need to add an ECT/mentor transferring to my school who is:
- Doing the same programme and/or using the same DfE-funded training provider as the rest of my cohort
- Doing a different programme and/or DfE-funded training provider to the rest of my cohort

As a SIT, I want to report an ECT/mentor transferring from my school.
