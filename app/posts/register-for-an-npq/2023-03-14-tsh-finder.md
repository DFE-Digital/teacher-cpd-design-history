---
title: Teaching School Hub (TSH) finder
description: New feature to allow teachers to find a teaching school hub near them
date: 2023-03-14
screenshots:
      items:
        - text: "DP finder - landing page"
          src: 01-dp-finder.png
        - text: "DP finder - user location"
          src: 02-dp-finder.png
        - text: "DP finder - choose NPQ"
          src: 03-dp-finder.png
        - text: "DP finder - results"
          src: 04-dp-finder.png
        - text: "TSH finder - landing page"
          src: 05-tsh-finder.png
        - text: "TSH finder - user location"
          src: 06-tsh-finder.png
        - text: "TSH finder - results"
          src: 07-tsh-finder.png
---

## Problem statement

We’re looking to help applicants who are interested in NPQs but struggle to find the information they need to select an NPQ and provider - especially those users who don't have an existing relationship with a provider or a teaching school hub.

We believe helping these users could increase the number of applications and reduce the time it takes an applicant to find the information they need.

## Research exploration

Initial quantitative research showed that 31% of users chose the lead provider for their NPQ themselves and another 16% had some influence over the choice. Of the users who made the choice themselves, 22% made the decision based on the geographical location of face-to-face training.

Additionally, qualitative research revealed that some users and schools are confused by the lead provider and delivery partner model; those working in the Early Years sector aren’t familiar with NPQs and training providers (especially those working in PVI settings); and finally, finding a local provider is a challenge for some users and a potential barrier to the uptake of NPQs

## Design exploration

We designed and tested 2 solutions to help users find a local provider: the Delivery Partner (DP) finder and the TSH finder. We have decided to move forward with the TSH finder due to the lower complexity in storing and maintaining accurate data.

### DP finder

The [provider or DP finder](https://npq-prototype.herokuapp.com/pdtl/tsh-finder-4/start-finder) allows users to find a DP in their local area. DPs work with Lead Providers (LP) to deliver NPQs. Therefore, finding a DP means that the user also finds a Lead Provider to use in their registration.

We conducted research with lead providers to gather their insight and found that there were concerns that how we list providers would give an advantage or disadvantage to some providers over others.

Additionally, we found the following issues around the DfE's ability to maintain accurate data:
- Delivery partner data can change throughout the year or be confirmed at short notice
- The location of face-to-face training might be determined after users have applied for the course
- The need for courses to be financially viable
- There will be a need for DfE and/or lead providers to update the data we would display to users

### TSH finder

The [TSH finder](https://npq-prototype.herokuapp.com/pdtl/tsh-finder-1/start-finder) allows users to find their local TSH where they can receive neutral information about NPQs. TSHs are also delivery partners as they work with providers to deliver all NPQs.

The data required to create the TSH finder is available and unlikely to change constantly which makes it an ideal feature to help users find the information they need.

During research, users generally felt the TSH finder provided the information they needed - users would visit their website, or follow up by email or phone.
