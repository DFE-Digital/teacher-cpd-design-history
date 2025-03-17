---
title: Helping lead providers understand evidence type changes  
description: We've published guidance to explain to lead providers the evidence type changes we're introducing for the 2025/26 academic year
date: 2025-03-17
---

## Background 

To get paid for training early career teachers (ECTs) and mentors, lead providers must notify DfE when participants reach set milestones. They do this through the 'Manage training for early career teachers' service API, in a process called submitting declarations.  

When submitting declarations, providers populate a field indicating the type of evidence they hold that participants have met the retention criteria for a given milestone period. 

There are currently 3 values to choose from in the `evidence_held` field:   

* `training-event-attended` 
* `self-study-material-completed` 
* `other`

## What’s changing 

For the 2025/26 academic year intake we're adding 4 new values:  

* `materials-engaged-with-offline`
* `one-term-induction` (ECTs-only)
* `75-percent-engagement-met`
* `75-percent-engagement-met-reduced-induction`

## Why we’re doing this

The new evidence types are being introduced to:

* increase transparency in tracking ECT and mentor engagement
* ensure payments align with validated training activity
* support automation of evidence submission, reducing manual data entry
* provide richer insights into training progress and participation

These improvements will help lead providers submit and manage evidence more efficiently while ensuring funding allocations are based on verified training engagement.

## Helping providers understand the evidence type updates  

One of the main challenges with this kind of change is ensuring providers get all the information they need to test the new scenarios.  

To help with this, we’ve published tables in our [API guidance](/api-reference/changes-for-the-2025-2026-academic-year.html#evidence-types-for-the-2025-26-academic-year) to display which `evidence_held` values can be used for every ECT and mentor `declaration_type`.  

We know from testing similar types of guidance with providers previously that using tables to display this kind of complex information improves clarity and usability. By breaking it down into digestible chunks, we’re making it faster and simpler for them to understand. 

We've highlighted any new evidence types in brackets, but may update this with a more visual signifier like a coloured tag depending on feedback from providers.  

We’ve also used the inset text component to draw attention to the fact that the new evidence types are not compatible with previous cohorts. Inset text helps keeps the primary message intact while offering more depth in a contained format. 

![Screenshot showing the evidence types table for mentors and related inset text](/manage-cpd-delivery/guidance-to-explain-evidence-type-changes/screenshot-evidence-type-table-and-inset-text.png)

## Next steps 

We're taking an iterative development approach to improving the guidance so it meets the needs of lead providers. 

The content will be refined and improved based on their feedback. We’ll also investigate whether weaving some of this information into the declaration endpoints documentation might further enhance provider understanding.  

## Design team

* Mark Avery - content designer
* Abeer Salameh - tech lead
* Andy Crawshaw - business analyst
* Shahad Rahman - product owner
