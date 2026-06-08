---
title: Why we based the NPD service on the NPQ service
description: Understand why we used the NPQ service as the base for the NPD reception service.
date: 2026-06-05
tags:
  - Reception
---

## Summary  

We chose to base the NPD registration service on the existing NPQ service.  

This gave us a proven foundation and allowed us to focus on the areas of highest risk.

---

## Why we started with NPQ  

### NPD and NPQ services are very similar

Both services:

- let participants register for a course  
- determine funding eligibility  
- pass data to providers  
- support providers to manage participants and delivery  
- allow providers to get paid for delivering the course

[![A summary of the NPQ eco-system, which includes participant registration service, DfE admin and finance tool, provider / DfE API, data dashboards, GOV.UK guidance pages, API guidance pages.](/npd-courses/2026-06-05-copying-npq/NPQ-ecosystem.png "A summary of the NPQ eco-system.")](/npd-courses/2026-06-05-copying-npq/NPQ-ecosystem.png)

### Many of the underlying processes are shared
Because the NPD Reception course is delivered through the same commercial framework as NPQs. 

[![A table showing the key processes that support the delivery of both NPQ and NPD courses. This clearly lays out the similarities between the two.](/npd-courses/2026-06-05-copying-npq/NPD-processes.png "A table showing the key processes that support the delivery of both NPQ and NPD courses.")](/npd-courses/2026-06-05-copying-npq/NPD-processes.png)

### But there are some differences

| NPQ policy | NPD policy |
|------------|-----------|
| Different prices for specialist and leadership courses | Single NPD price (different to NPQs) |
| Outcome fees split equally across declarations | Outcome fees split 60% / 40% |
| 3 or 4 declarations per course | 2 declarations per course |
| Deferrals can be indefinite | Deferrals limited to 12 months |
| NPQs are qualifications | NPDs are not qualifications |
| Complex funding eligibility rules | Simpler eligibility (no manual review required) |
| Around 10 NPQ courses | Initially 1 NPD course |
| Programme name is NPQ | Programme name is NPD |
| Audience: leadership or aspiring leaders | Audience: experienced teachers |

---

## A well established service  

The NPQ service is already live and widely used.

It has:

- been running for several years  
- supported over 150k registrations 
- been through multiple rounds of user research  

This means we already understand:

- how users move through the journey  
- where they get confused  
- what works well 

Basing NPD on NPQ meant we could build on this existing insight rather than starting from scratch. 

---

## What we decided and how it shaped our approach  

We chose to reuse the NPQ service as our starting point, rather than building a new service from scratch.  

We simplified it where NPD rules are different, and kept NPD separate so we could adapt it over time without impacting NPQ.

This approach:

- reduced delivery risk, cost and effort  
- allowed us to use established patterns and components  
- avoided re-solving well understood problems  

It also shaped how we approached design and research.

Instead of re-testing everything, we focused on:

- simplifying the registration journey  
- removing unnecessary steps  
- adapting the service for a different user group  
- addressing known pain points from NPQ  

We used existing research to validate decisions quickly and prioritise changes.

---

## Focusing on the riskiest areas  

By reusing a proven service, we could focus our effort on new or unclear areas, such as:

- how users understand the end-to-end process  
- how policy changes translate into digital journeys  
- more complex paths like deferrals and changing provider  

Rather than rebuilding everything, we targeted the areas where:

- user needs were least well understood  
- policy introduced new complexity  
- the risk of failure was highest  

---

## What we learned  

Starting with an existing service gave us speed and confidence.  

It allowed us to focus on what was different, rather than re-solving what was already known.  

Using proven patterns alongside targeted iteration helped us reduce risk while still improving the experience.