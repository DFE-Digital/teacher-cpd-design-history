---
title: Simplifying training options for early career teachers 
description: "Why the training options for ECTs have been simplified and how it's changed the digital services"
date: 2025-04-23
---

## How the training options are changing

Historically, there’ve been 3 training options for schools to choose from to train their early career teachers (ECTs): 
1. A training programme led by lead providers and delivered by delivery partners, with an online learning platform and training events. 

2. Using learning materials created by lead providers but otherwise running their own training programme as a school. 

3. Creating their own learning materials and running their own training programme as a school. 

For the 2025 academic year, we’re merging these 3 options into 2: 

1. A training programme led by lead providers and delivered by delivery partners, with an online learning platform and training events, now named ‘provider-led’. 

2. Running their own training programme as a school, regardless of if they use lead provider-created learning materials or not, now named ‘school-led’. 

## Why they're changing

We made this change because: 

* we believe it’ll make the options clearer for schools training ECTs 

* it better fits the reality of how schools are training ECTs 

## How this impacts the services

These changes impact different aspects of the services that facilitate the early career teacher entitlement (ECTE).

### How appropriate bodies are paid to quality-assure training programmes at schools 

This will change how appropriate bodies are funded for supporting induction for ECTs. We previously paid appropriate bodies less to quality assure ECT training programmes using lead provider materials. Now, they’ll be paid the same regardless of if the school users lead provider materials or not. They’ll also be paid per school, rather than per ECT. 

### How appropriate bodies submit inductions

When appropriate bodies record inductions, they will now need to select between if the training type of the inductions is provider-led or school-led.

### Changes to the existing services for early career teachers

The existing ECF1 service used terminology based on the 3 original training options, so we needed to work out how to handle both historic records and future-facing functionality to reflect the updated, simplified choices. 

We decided to merge any existing "Core induction programme" and "DIY" selections into the new "School-led" category across both historic and future records. It ensures we hold and display data consistently within the service. It also helps prepare for future data migration related to ECF2 by aligning terminology early and reducing complexity.  

To support this change, we needed to carry out significant development work. This included updates to user-facing journeys, admin functionality, and how historic data is presented. 

We replaced all references to the old terminology to ensure users are only interacting with the new programme choices. We did this to avoid confusion and provide a clear, consistent experience for school induction tutors, [lead providers using our API](/api-reference/changes-for-the-2025-2026-academic-year.html#changes-to-induction-programme-types), and internal teams. 

### Removing the learning materials question

In the past, we asked schools what learning materials they would use for their ECTs if they were going with option 2. They would answer with the name of the lead provider. 

We’ve decided to remove this question because: 

* it'll cost time and money to re-build it, for likely not many ECTs  

* we think it might confuse some schools not using any lead provider learning materials for school-led training  

* lead providers are now hosting these learning materials, and we're exploring ways to measure how schools use these materials through analytics or other reporting  

* this question will not be relevant for many schools registering school-led ECTs, adding an unnecessary extra question that increases their workload  

* we're not sure if the added value of collecting this information justifies the above 

### The team involved

These changes were worked on by different teams, involving:
 
* Matthew Doyle – business analyst 

* Tony Headford – tech lead  

* Abeer Salameh – tech lead  

* Mark Avery – content designer 

* Shahad Rahman – product manager 

* Claire Hughes – product manager  
