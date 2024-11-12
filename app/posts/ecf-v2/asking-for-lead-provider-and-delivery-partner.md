---
title: Asking schools for an ECT or mentor’s lead provider and delivery partner
description: "We've designed a journey to ask schools for the lead provider and delivery partner for their ECT or mentor."
date: 2024-11-05
---

## Why we’re doing this

Currently in ECF1, the lead provider submits a ‘partnership’ over the API that connects them with a school. This will mean they’re responsible for training that school’s ECTs and mentors for that academic year. In this partnership, the lead provider states the school, delivery partner and lead provider combination.

Lead providers have told us it’s sometimes tricky for them to set up these partnerships. We wanted to consider asking schools to tell us the lead provider and delivery partner because:

- sometimes schools don’t inform lead providers they’d like to work with them, which can lead to delays in training for ECTs and mentors
- schools also get confused about the partnerships process, and expect to be able to submit or change these details like they do during rollover
- we receive support tickets from schools regularly to make changes to partnerships

## What we tested with users

In the first round of testing, we asked schools who their delivery partner was. We deliberately avoided the phrase ‘delivery partner’ as we heard anecdotally schools weren’t familiar with this terminology.

![A screenshot of the first prototype we tested with to ask users for delivery partner.](/ecf-v2/asking-for-lead-provider-and-delivery-partner/screenshot1.png)

We didn’t ask for the ECT’s lead provider. This is because, in the vast majority of cases, we could infer the lead provider for an ECT or mentor based on their delivery partner. Delivery partners typically only work with 1 lead provider.

However, this tested very badly.

Users were confused. They had previously given their appropriate body, and often this was the same organisation as their delivery partner. The question was too ambigious - ‘provide training’ did not give them any clarity. Some users thought we were asking for their lead provider.

No users clicked into the details component to find out more about the delivery partner organisation either. Potentially this would change outside of user testing sessions, but it felt important to expose some more information about the organisation outside of the toggle.

## How we iterated the questions

We decided to ask schools directly for their lead provider. We thought this was a good idea because:

- lead provider was more important to get right, as they would see the information over the API depending on this question being answered correctly
- whilst schools struggled to always understand the different roles in ECF, they could clearly recognise the name of which of the 6 lead providers they were working with
- we could ask schools for their delivery partner from the list of eligible delivery partners working with that lead provider for that academic year

We also iterated the content for asking for lead provider and delivery partner, bringing out one of their key responsibilities to the main question.

![A screenshot of the second round prototype we tested with to ask users for lead provider.](/ecf-v2/asking-for-lead-provider-and-delivery-partner/screenshot2.png)

We also decided to ask schools if their delivery partner was the same as their appropriate body. This is because in around 80% of cases, it is the same organisation. Users in our first round of testing were confused why we asked for the same organisation twice.

![A screenshot of the second round prototype we tested with to ask users for delivery partner.](/ecf-v2/asking-for-lead-provider-and-delivery-partner/screenshot3.png)

This tested much better with schools in our second round of testing. They successfully answered each question. However, it’s worth noting we only tested with users where their delivery partner was the same as their appropriate body.

When we tested this, schools also said it would be more helpful to see guidance or information about the 3 different organisations in ECF in 1 place. Learning about a delivery partner in isolation was less helpful to them than comparing that organisational role with that of a lead provider or appropriate body.

## What we need to do next

Whilst these iterated questions tested much better with schools, we still have more to think about.

We still need to think about:

- how we’ll surface this over the lead provider API
- if we can get the organisation data for delivery partners and appropriate bodies to match up correctly
- researching with schools where their appropriate body is different to their delivery partner
- how we can help schools better understand lead providers, delivery partners and appropriate bodies and the differences between them
