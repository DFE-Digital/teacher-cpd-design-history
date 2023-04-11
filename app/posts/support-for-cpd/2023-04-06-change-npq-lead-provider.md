---
title: Admin ability to change an NPQ participant’s lead provider
description: New functionality to let admins change an NPQ participant’s lead provider. Deployed in March 2023
date: 2023-04-06
---

## Why we decided to iterate

### Inefficient process reliant on manual development 

An NPQ participant can change providers at any stage during their course.  

After a participant’s application has been accepted and they have begun their NPQ course, the provider will submit declarations to notify DfE that training has been delivered. 

If the participant then chooses to change their NPQ provider, a ‘transfer’ process would involves multiple people from various teams approving the change including Engagements, Policy, Contract and Digital. 

Once a ‘transfer’ had been agreed, a manual development request was needed to update the service. Given the time sensitive nature of these repetitive requests, the development task could not be planned for. It would result in resource being taken off other priority workstreams, causing delays in other areas.

Note, a ‘transfer’ process from one lead provider to another is only required where declarations have been submitted (and are in the `eligible`, `payable`, `paid`, `clawed_back` or `awaiting_clawback` states). If no declarations have been submitted for a participant, the DfE can simply revert the application to pending.

Designing a user interface for admins to change a lead provider eliminates the need for manual development. Support teams can self-serve, creating greater efficiencies across teams. 

## What we did 

* We gathered and scoped requirements from contract managers. These included 1) the functionality to change providers being available on admin views 2) the admin ability to schedule changes ahead of time. Due to code complexity and delivery timelines it was decided that the scheduling feature was not essential for MVP delivery.
* We used existing design patterns to allow admin users to ‘Change’ a participant’s lead provider via a two step journey. Users are asked to select the new lead provider, then to check their answers. They will see a confirmation banner once the change has been saved.

### Hyperlink in ‘Lead provider’ row 

![Screenshot of the 'Change' link](/support-for-cpd/2023-04-06-change-npq-lead-provider/01-change-hyperlink.png)

### Change lead provider 

![Screenshot of the 'Change lead provider' page](/support-for-cpd/2023-04-06-change-npq-lead-provider/02-change-lead-provider.png)

### Check your answers

![Screenshot of the 'Check your answers' page](/support-for-cpd/2023-04-06-change-npq-lead-provider/03-check-your-answers.png)

### Confirmation banner 

![Screenshot of the confirmation banner](/support-for-cpd/2023-04-06-change-npq-lead-provider/04-confirmation-banner.png)

## Next steps 

If time allows and the business need becomes priority, we will look into designing a journey to allow admin users to schedule provider changes.


#### Design team

- Hazel Yule - content design
- Shahad Rahman - business analysis 
- Mooktakim Ahmed - development
