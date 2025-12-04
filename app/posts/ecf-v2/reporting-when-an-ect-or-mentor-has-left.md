---
title: Reporting when an ECT or mentor has left a school
description: "We've designed a journey to capture information about when an ECT or mentor has left a school."
date: 2025-12-02
---

## Context

In the existing Manage training for ECTs service there is no way for schools to tell us an ECT or mentor has left unless they are transferring to another school. This causes difficulties because:

- school users want to be able to report when someone has left their school for any reason - it causes support tickets and frustration that they can't
- it means the data we hold is less accurate, as we don't know for example as quickly when someone has left their school
- it increases the time it takes and workload required for lead providers to report a withdrawal over the API
- it means often schools are having to pass on when someone leaves in multiple places, but not in the DfE service, which ideally we want to be the one source of truth


As a result, we designed a journey where schools can report when an ECT or mentor is leaving or has left, regardless of whether they are moving elsewhere.

It was important to distinguish temporary absences from permanent leavers. If someone is away on long-term leave, we do not need to capture this information from the school user, and instead they may just need to notify the organisations providing training. We only want to capture information in the service for ECTs or mentors who are leaving and not expected to return. However, in future we might introduce a way for schools to tell us about pauses in induction or training, such as due to maternity leave or long-term illness.

## What we've designed

We designed a journey from the ECT or mentor details page that lets a school user report when someone is leaving, or has left, and is not expected to return. As part of that flow, we capture the date the person is leaving or has left. For the MVP, once that date has passed, we remove the ECT or mentor from the school's view.

In the first version, we were too light on content, and following user research needed to clarify what we mean by expecting someone to return, including an example. The content now also prompts the user to tell their appropriate body and training provider if someone is leaving but expected to return.

<figure>
  <img src="/ecf-v2/reporting-when-an-ect-or-mentor-has-left/image.png" alt="Report an ECT or mentor leaving flow start - first iteration." />
  <figcaption>The first design we tested with which included the call to action to report an ECT or mentor as leaving the school.</figcaption>
</figure>

<figure>
  <img src="/ecf-v2/reporting-when-an-ect-or-mentor-has-left/image-2.png" alt="Iteration to the design following user research to be more clear regarding when someone may be expected to return, and notifying lead provider and appropriate body." />
  <figcaption>Iteration to the design following user research to be more clear regarding when someone may be expected to return, and notifying lead provider and appropriate body.</figcaption>
</figure>

<figure>
  <img src="/ecf-v2/reporting-when-an-ect-or-mentor-has-left/image-3.png" alt="Entering the date the ECT or mentor is leaving or has left." />
  <figcaption>Capturing the date the ECT or mentor is leaving or has left.</figcaption>
</figure>

We also made the wording dynamic so the journey reflects whether the leaving date is in the past or future, using "leaving" versus "left" accordingly. When a future leaving date is reported, we update the profile with a "leaving school" status.

<figure>
  <img src="/ecf-v2/reporting-when-an-ect-or-mentor-has-left/image-4.png" alt="onfirm an ECT or mentor has already left." />
  <figcaption>Confirm an ECT or mentor has already left.</figcaption>
</figure>

<figure>
  <img src="/ecf-v2/reporting-when-an-ect-or-mentor-has-left/image-6.png" alt="Confirm an ECT or mentor is leaving in the future." />
  <figcaption>Confirm an ECT or mentor is leaving in the future.</figcaption>
</figure>
