---
title: Reusing recent choices for the add an ECT journey
description: "How we want to make it easier to add ECTs for schools by allowing users to reuse their recent default programme choices."
date: 2024-11-05
---

## Why we’re doing this

Currently in ECF1 school users set up the programme type, AB and training details which are then applied to all ECTs and mentors that they register going forward. The problem is that there are cases in which ECTs and mentors will have different training details and there currently isn't a way of specifying this difference in the add ECT journey (they would need to edit details once record is registered).

Therefore we've designed and tested a default programme choice as an alternative to setting up school-level details for AB, LP, DP and programme type, as we know there may be ECTs and mentors within a school that differ.

## What we tested

When a school user registers their first ECT's details, they will be prompted to input the:
- programme type
- appropriate body
- lead provider
- delivery partner

Once they provide their details for the first ECT they register, we asked if they would like to save the details provided for future registrations of ECTs and mentors. This doesn’t block users in future if they have an ECT or mentor with differing programme details to the default choice. They will have the option to manually input these details, but in most cases, schools will have consistent details for the majority.```

![A screenshot of the asking users if they'd like to save their choices as defaults.](/ecf-v2/saving-default-choices/screenshot1.png)

## How it tested and next steps

Research found that this feature mainly tested well, and school users knew what to do when interacting with the screen. However, some users mistook it as a ‘check your answers' page.

We have looked at iterating this heading to make it clearer for users.

However, we've decided to first iterate and test a version where we don't ask users to save, but instead remember their last used choices and present them to when they return to add a new ECT. We want to test this, as it may be that this meets the needs of our users without requiring them to think about whether they need to save or not. It also shortens registration and helps save more time for users.

We'll test this version next, and then decide if we want to make any further changes to the page we tested the first time or whether we want to remove it.

## Update following testing

![A screenshot of the page where we play back the last used choices.](/ecf-v2/saving-default-choices/screenshot2.png)

We tested the above design in which we play back the most recently used choices to the user when they are adding a new ECT.

This tested well with users, and it was clearer to users what they were seeing compared to the previous version in which we were asking users to save their choices first.

Participants considered it very helpful to not have to re-enter information and they recognised the partnerships they were seeing on the page, especially as we tested with the real information for their school.

We've designed to progress with this design in which we won't ask users to save their default choices so they can reuse them later, but instead play back their most recently used choices so they can reuse them when they are adding an ECT.
