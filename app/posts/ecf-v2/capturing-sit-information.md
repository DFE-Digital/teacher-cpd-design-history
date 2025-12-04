---
title: Capturing information about the school's induction tutor (SIT)
description: "We've designed journeys to capture information about who the school's induction tutor is, and to confirm whether any changes have been made since we were last notified."
date: 2025-11-25
---

## How we used to collect SIT information in ECF1

In the existing Manage training for early career teachers service, schools had to supply the name and email address for their induction tutor (SIT) before accessing the service. We used those details to send a link to the SIT and grant them access to register new early career teachers and mentors.

This approach assumed the SIT would be the only person from the school who needed to use the service, and we didn't allow for multiple users. In practice, more than one person might need access, and while the SIT is the main early career teacher training entitlement (ECTE) contact, they are not always the person registering new early career teachers and mentors. 

We also did not ask schools to reconfirm SIT details at the start of a contract period, so we relied on SITs to proactively update their own information when it changed.

We've already written a previous post about how we've since [designed for allowing multiple school accounts](https://teacher-cpd.design-history.education.gov.uk/ecf-v2/allowing-multiple-school-accounts/).

## What we've designed for RECT

When a user from a school logs into the service and we do not have SIT details, we now ask for the SIT's name and email address and explain that this contact will be used as the main point of contact for ECTE.

At the start of a new contract period, a school user sees the SIT details we currently hold and is asked to confirm they are correct or update them if the SIT details have changed.

We have also added an "induction tutor" area in the service where a user can proactively view and update the SIT details for the school they are signed in as.

In future, we'd like to allow schools to tell us when they have multiple SITs. This is because following policy this can happen. Schools have also stated that being able to tell us about multiple SITs will reduce the risk if the one SIT currently reported leaves or goes on long-term leave. 

However, we haven't done this yet for two reasons. One is because it is still relatively rare to have multiple SITs. The second is it would've been a breaking change to GET partnerships over the API. This would've been difficult for lead providers to adapt their systems to. 


## User research

We have conducted user research on the journey where we ask a school user to confirm the SIT at the beginning of a contract period. It generally tested well, but we found a few areas to improve.

In the first version of the design we asked whether the current SIT would continue in the role and, if the answer was no, we asked for new SIT details. This question felt unnatural when only a small detail like an email address needed updating rather than changing the person. We have since changed the question to ask whether the details are correct instead of asking if the existing SIT will continue.

<figure>
  <img src="/ecf-v2/capturing-sit-information/image-1.png" alt="First version asking the user to confirm the SIT details we held." />
  <figcaption>The first version we tested asked users to confirm the SIT details we already held.</figcaption>
</figure>

<figure>
  <img src="/ecf-v2/capturing-sit-information/image-2.png" alt="Reworded question making the confirmation clearer and more natural." />
  <figcaption>The iterated version makes the confirmation question clearer and more natural.</figcaption>
</figure>

Another reason we tweaked the language in the question was because asking, "Will (SIT name) continue as your school induction tutor?" felt odd when the person answering was that named SIT. Showing the existing name and email address and asking, "Are these details correct?" reads more naturally in that scenario.
<figure>
  <img src="/ecf-v2/capturing-sit-information/image-3.png" alt="Induction tutor area." />
  <figcaption>The "induction tutor" we've designed for users to update details in the service.</figcaption>
</figure>
