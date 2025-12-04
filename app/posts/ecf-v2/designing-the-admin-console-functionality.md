---
title: Designing the functionality for the admin console
description: "How we've designed different feature and functionality in the admin console, to support RECT users once the service goes live."
date: 2025-12-01
---

## What we needed to design

We needed to design an admin console that lets us add, delete, and update Register ECTs data. This includes information supplied by schools, appropriate bodies, and lead providers. A lot of similar capability exists in the previous ECF1 admin console, so we've reused what works well while improving areas that were inefficient or unclear.

We also decided to merge the finance and admin tooling. Previously, these had to be signed into separately, which caused friction and annoyance for users of both. Now, we'll have permissions for users that need access to both, and they can more easily navigate between the two.
## How we've designed and ensured we're meeting needs

We approached the design by taking learnings from the ECF1 admin console, and creating a shared library of patterns for the new console. Related admin journeys sit close together so navigation feels intuitive rather than fragmented. We tested with the teams who will use the console, gathering early input on their needs and expected outcomes and then reviewing designs with them to validate the improvements.

## What we've designed

Below is a comprehensive set of screenshots of the different aspects of the admin console we've designed.

### Design framework

<figure>
  <img src="/ecf-v2/designing-the-admin-console-functionality/design-framework/design-framework-1.png" alt="List of design framework patterns" />
  <figcaption>A list of patterns created and documented to be used as a design framework for designing the admin console.</figcaption>
</figure>

<figure>
  <img src="/ecf-v2/designing-the-admin-console-functionality/design-framework/design-framework-2.png" alt="Search and filter pattern documentation in the admin console design framework." />
  <figcaption>An example of a pattern for searching and filtering as documented in the design framework.</figcaption>
</figure>

### Organisations

<figure>
  <img src="/ecf-v2/designing-the-admin-console-functionality/organisations/organisations-home.png" alt="Homepage for list of organisations that can be managed." />
  <figcaption>A landing page for list of organisations that can be managed.</figcaption>
</figure>

### Lead providers

<figure>
  <img src="/ecf-v2/designing-the-admin-console-functionality/organisations/list-of-lead-providers.png" alt="A list of lead providers that can be managed." />
  <figcaption>A list of lead providers that can be managed.</figcaption>
</figure>

### Delivery partners

<figure>
  <img src="/ecf-v2/designing-the-admin-console-functionality/organisations/list-of-dps.png" alt="A list of delivery partners that can be managed." />
  <figcaption>A list of delivery partners that can be managed.</figcaption>
</figure>

<figure>
  <img src="/ecf-v2/designing-the-admin-console-functionality/organisations/dp-information.png" alt="A view of a delivery partner, where information can be viewed and edited." />
  <figcaption>A view of information held for a delivery partner, where information can also be edited.</figcaption>
</figure>

### Schools

<figure>
  <img src="/ecf-v2/designing-the-admin-console-functionality/schools/list-of-schools.png" alt="A list of the schools that can be managed in the console." />
  <figcaption>A list of schools that can be managed in the console.</figcaption>
</figure>

<figure>
  <img src="/ecf-v2/designing-the-admin-console-functionality/schools/school-overview.png" alt="School overview showing key details." />
  <figcaption>School overview showing key details.</figcaption>
</figure>

<figure>
  <img src="/ecf-v2/designing-the-admin-console-functionality/schools/school-partnerships.png" alt="List of partnerships for a school that can be edited and updated." />
  <figcaption>List of partnerships for a school that can be edited and updated.</figcaption>
</figure>

<figure>
  <img src="/ecf-v2/designing-the-admin-console-functionality/schools/school-add-partnership-cya.png" alt="Check your answers page when adding a partnership to a school." />
  <figcaption>Check your answers page when adding a new partnership to a school.</figcaption>
</figure>

<figure>
  <img src="/ecf-v2/designing-the-admin-console-functionality/schools/school-partnership-added.png" alt="Confirmation page after adding a partnership to a school." />
  <figcaption>Confirmation banner after adding a partnership to a school.</figcaption>
</figure>

<figure>
  <img src="/ecf-v2/designing-the-admin-console-functionality/schools/school-teachers.png" alt="Teachers associated with a school." />
  <figcaption>List of teachers that are associated with a school.</figcaption>
</figure>

### Teachers

<figure>
  <img src="/ecf-v2/designing-the-admin-console-functionality/teachers/list-of-teachers.png" alt="A list of teachers that can be managed in the console." />
  <figcaption>A list of teachers that can be managed in the console.</figcaption>
</figure>

<figure>
  <img src="/ecf-v2/designing-the-admin-console-functionality/teachers/teachers-overview.png" alt="Teacher overview showing key details." />
  <figcaption>Teacher overview showing key details.</figcaption>
</figure>

<figure>
  <img src="/ecf-v2/designing-the-admin-console-functionality/teachers/teacher-training-api-response.png" alt="Teacher training information as returned via the API." />
  <figcaption>Teacher training information as returned via the API.</figcaption>
</figure>

<figure>
  <img src="/ecf-v2/designing-the-admin-console-functionality/teachers/teacher-training-periods.png" alt="Training periods for a teacher." />
  <figcaption>Training periods for a teacher.</figcaption>
</figure>

<figure>
  <img src="/ecf-v2/designing-the-admin-console-functionality/teachers/teachers-school-periods.png" alt="School periods for a teacher." />
  <figcaption>School periods for a teacher.</figcaption>
</figure>

<figure>
  <img src="/ecf-v2/designing-the-admin-console-functionality/teachers/teacher-update-partnership.png" alt="Update partnership information for a teacher." />
  <figcaption>Update partnership information for a teacher.</figcaption>
</figure>

<figure>
  <img src="/ecf-v2/designing-the-admin-console-functionality/teachers/teachers-induction.png" alt="Induction details for a teacher." />
  <figcaption>Induction details for a teacher.</figcaption>
</figure>

### Finance

<figure>
  <img src="/ecf-v2/designing-the-admin-console-functionality/finance/financial-statements.png" alt="List of financial statements that can be managed." />
  <figcaption>List of financial statements.</figcaption>
</figure>

<figure>
  <img src="/ecf-v2/designing-the-admin-console-functionality/finance/statement-yet-to-be-approved.png" alt="Financial statement with status indicating it is yet to be approved." />
  <figcaption>Financial statement example - a statement that is yet to be approved.</figcaption>
</figure>

<figure>
  <img src="/ecf-v2/designing-the-admin-console-functionality/finance/make-adjustment-to-statement.png" alt="Make an adjustment to a financial statement." />
  <figcaption>Make an adjustment to a financial statement.</figcaption>
</figure>

<figure>
  <img src="/ecf-v2/designing-the-admin-console-functionality/finance/statement-adjustment-made-confirmation.png" alt="Confirmation after making an adjustment to a financial statement." />
  <figcaption>Confirmation after making an adjustment to a financial statement.</figcaption>
</figure>

## What's next

We've designed and built the designs above as part of the admin console, with ongoing user feedback. Still to come are the teacher "declarations" section and the teacher "timeline".
