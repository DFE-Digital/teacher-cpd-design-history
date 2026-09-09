---
title: Making it easier to check funding eligibility
description: Replacing the need to register before finding out if funding is available
date: 2025-09-09
---

## Context
Previously, users needed to create a DfE Identity account before they could check whether they were eligible for funding for an NPQ.
This meant users had to complete an authentication journey before understanding whether they could access DfE funding. If a user later discovered they were not eligible, they had already spent time creating an account and beginning registration.
We also identified opportunities to improve the overall registration experience by introducing clearer funding outcomes, simpler routing and a more structured eligibility journey.
As part of the Funding Eligibility workstream, we reviewed the end-to-end registration process and designed a new journey that allows users to understand their funding eligibility before progressing into registration.

## What we've designed
We've introduced a dedicated funding eligibility journey that sits before registration.

Users can now choose whether they want to:
- check their funding eligibility
- continue without funding

This supports users who already know they will not require DfE scholarship funding, whilst allowing others to assess their eligibility before committing to registration.

The eligibility journey now uses user responses to determine what happens next. Instead of presenting eligibility as guidance only, answers are used to route users to the correct outcome and registration path.

We've also introduced dedicated outcome pages to clearly communicate whether a user is:
- eligible for funding
- not eligible for funding
- in review

These outcome pages explain the decision and provide clear next steps.

## Key design decisions
### Move funding eligibility before registration
We decided to move funding eligibility assessment to the beginning of the journey so that users can understand whether they are eligible for funding before investing time in registration and authentication.
This reduces unnecessary effort for users who are not eligible for funding and helps ensure that registration is only started when users understand the options available to them.

### Separate funded and non-funded routes
We decided to give users the option to either check their funding eligibility or continue without funding.
Not every applicant requires DfE scholarship funding. By separating these journeys, users who intend to self-fund can proceed directly to registration, while those seeking funding can complete an eligibility assessment and receive an outcome before registering.

### Use service rules to determine eligibility outcomes
We decided that funding eligibility should be determined by rules within the service rather than relying on users interpreting guidance themselves.
User responses are now used to determine funding outcomes, available routes and next steps. This creates a more consistent experience and ensures funding decisions are applied in line with policy requirements.

### Determine eligibility before application entry
We decided that users should complete eligibility checks before entering the registration journey.
Previously, users could reach application stages before their funding status had been established. The new routing structure prevents users entering journeys that may later become unavailable to them and helps create a clearer progression through the service.

### Make funding outcomes explicit
We decided to introduce dedicated outcome pages for eligibility decisions.
We identified a need for users to better understand their funding status and the reasons behind a decision. Dedicated outcome pages provide clear explanations, guidance and next steps rather than relying on routing alone to communicate the result.

### Use DfE funding records as the authoritative source
We decided that verified DfE funding records should take precedence over user-declared funding information.
In cases where system records identify previous funding that would make a user ineligible, the service updates the user's eligibility status and routes them through the appropriate non-funded journey. This ensures funding decisions are applied consistently and in line with available evidence.

### Allow users to continue unfinished registrations
We decided that users should be able to return to an incomplete registration rather than starting again.
This supports users who need to leave the service to gather information or return at a later date. Existing answers are retained and users can continue from the last incomplete step, reducing duplication and improving the overall experience.

## Introducing funded and non-funded routes
We wanted to create a clearer distinction between applicants seeking funding and those who intend to self-fund.
Users who choose to check their eligibility enter the funding assessment journey and receive an outcome based on their answers.
Users who choose to continue without funding can bypass the assessment and proceed directly into registration.
This approach reduces unnecessary questions for users who do not require funding while maintaining the information needed to assess scholarship eligibility.

## Improving routing and registration access
We've redesigned the routing structure so that eligibility decisions are made before users begin registration.
Previously, users could reach parts of the registration journey before their eligibility status had been determined.
The new journey ensures that users only enter registration when they are on an appropriate route. Users who are eligible for funding can continue with a funded registration journey, while users who are not eligible can continue on a non-funded route where applicable.
We've also removed legacy routing paths and introduced controls to prevent users bypassing required eligibility steps.

## Providing clearer funding outcomes
We identified that users needed more transparency about how funding decisions were reached.
To address this, we've introduced dedicated guidance and outcome pages that explain:
- a user's funding status
- the reason for the outcome
- any funding restrictions that apply
- what they can do next
Where users cannot continue, we've designed clear end points that explain why and provide appropriate guidance.

## Supporting users to return and complete registration
We know that users do not always complete registration in a single session.
We've introduced functionality that allows users to continue an existing registration and return to the last incomplete step.
This means users can leave the service and continue later without needing to restart the journey or re-enter information.

## Funding eligibility overrides
We also designed a journey for situations where DfE funding records differ from information provided by a user.
If DfE records indicate that a user has previously received funding for a course, those records are treated as the authoritative source when determining eligibility.
Where this occurs, users are informed that they are no longer eligible for funding and are routed through the appropriate non-funded registration journey.
This allows users to continue their registration while ensuring funding decisions are applied consistently.

## Next steps
The Funding Eligibility work was delivered in phases, with an MVP release followed by a post-MVP release.
The post-MVP phase completes the intended journey by introducing eligibility decision logic, funded and non-funded routes, explicit outcomes, routing controls and improved registration functionality.
We'll continue monitoring how users move through the new journey and use future research to identify further opportunities to simplify registration and funding assessment.
