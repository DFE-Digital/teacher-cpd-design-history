---
title: Making the NPQ service standalone
author: Peter Yates
date: 2024-11-26
---

The two main services in Teacher CPD are [Manage training for early career teachers](https://manage-training-for-early-career-teachers.education.gov.uk/) (ECF) and [Register for a national professional qualification](https://register-national-professional-qualifications.education.gov.uk/) (NPQ).

Work on the ECF application began in November 2020 and on the NPQ application in May 2021. Both projects were live by July 2021.

Neither had a [private beta](https://www.gov.uk/service-manual/agile-delivery/how-the-beta-phase-works) and most work was done before the respective policies were finalised.

At first ECF and NPQ seemed very similar, they both:

* provide teachers with additional training
* use a heavily overlapping set of [lead providers](https://www.gov.uk/guidance/managing-training-for-early-career-teachers#choosing-a-training-option) to deliver the training
* usually are funded by the Department for Education

The ECF application's head start in development meant it already had some features that would also be required by the NPQ application, namely:

* an API (that many of the NPQ training providers were already integrating with)
* finance functions to work out training provider payments

Instead of building a second NPQ API we decided to combine the two into a single API that lived in the ECF application.

The API and finance engines need NPQ data so everything the NPQ application collected was sent straight to the ECF application.

![A flow chart showing registration data being fed into ECF by NPQ before being made available to training providers](/register-for-an-npq/2024-11-26-npq-becoming-standalone/npq-registration-data-flow.png)

However, as time progressed built some fundamental differences emerged:

1. NPQ registrations are made by teachers themselves but ECF registrations are done on behalf of the teacher by an administrator at the school
2. NPQ is elective but ECF is statutory
3. NPQ registration is a one-off transaction but ECF induction usually takes 2 years --- during that time information about the early career teacher's school and training needs to be kept up to date
4. A teacher can obtain many NPQs but will only ever be an early career teacher once

The NPQ and ECF registration functions are managed by different teams, and the API and finance engines are managed by a third team. We ended up with:

* **two** policies
* three teams
* **two** code repositories
* one database[^1]
* one API
* one finance engine

This sharing of responsibilities means simple changes need to be carefully planned across teams and releases carefully coordinated. It also means that new NPQ features are reliant on the availability of teams primarily working in the ECF space.

As a result, the NPQ team are disempowered by not owning the NPQ journey end-to-end.

Coupled with the ECF application's technical debt and the teams having many competing priorities, it's much harder for the NPQ team to improve their service than it is for other comparable teams in the department.

## Untangling

The intention is to entirely separate NPQ and ECF.

To do this we need to first add to the NPQ application the features it relies on the ECF application for, like the provider API and the finance engine.

![Proposed NPQ registration data flow](/register-for-an-npq/2024-11-26-npq-becoming-standalone/proposed-npq-data-flow.png)

This removes the NPQ application's dependence on the ECF application and means the NPQ team will be able to make sweeping changes at will.

Work started on separating the NPQ application at the beginning of 2024 and separation is scheduled for the end of November 2024.

During that time we:

* built a data model that eliminates duplication and applies validation rules to keep the quality high
* added financial functions so suppliers can be paid
* worked on migrating and tidying up all NPQ data that's stored in the ECF application
* created admin tools so DfE staff can fully manage NPQ applications
* built and documented a new API that providers can use to manage their data

![NPQ API documentation](/register-for-an-npq/2024-11-26-npq-becoming-standalone/npq-api-docs.png)

The new NPQ API very closely matches the ECF one so NPQ training providers will have a easier job in updating their integrations. The only significant changes are that endpoints in the old API that return combined ECF and NPQ data now only return NPQ data.

Once the NPQ application is independent we will have:

* **two** policies
* ~~three~~ **two** teams
* **two** code repositories
* **two** databases
* ~~one~~ **two** APIs
* ~~one~~ **two** finance engines

This simplification is key. It removes any questions of responsibility, makes both applications simpler and removes cross-team dependencies.

## Shifting and reorganising our data

When planning for separation we [designed the database first](/ecf-v2/designing-the-database-first/) and were able to distil a huge, complicated data model that contained a mixture of ECF and NPQ data into [a simple, normalised one](https://github.com/DFE-Digital/npq-separation/blob/main/data-modelling.md).

Once we'd agreed on a schema we needed to migrate any NPQ-related data from the ECF application's database into NPQ's. This was the biggest challenge of the entire project.

Data in the ECF database suffered from a lack of normalisation and validation. The new schema is very heavily validated to ensure data is of the highest quality. This meant migrating the data wasn't simply a case of copying it - there was a huge cleanup task too.

This is the riskiest part of the entire process. We knew it wouldn't be right first time, and because the accuracy of the data is vital we wanted confidence that it worked properly before doing it for real.

We decided to use a process that:

* could be run repeatedly
* gave us clear feedback about what worked
* output a list of things that didn't migrate cleanly and had to be investigated further

In early November 2024 we hit a 100% success rate across all entities. 🎉

![A GOV.UK styled dashboard showing a list of table names with a 100% migration success rate](/register-for-an-npq/2024-11-26-npq-becoming-standalone/migration-stats.png)

We've run the migration process hundreds of times and tidied thousands of records in the process.


## Actually separating

The separation of the ECF and NPQ applications is scheduled for the end of November 2024.

It's going to be a big, complex operation so we've spent lots of time planning and doing dress rehearsals.

A shortened version of the process we'll be following is:

1. bring both ECF and NPQ applications down so no new data is being written to the databases while we migrate
2. back up the NPQ application's database just in case we need to roll back
3. run the migration process which copies the data from ECF's database into NPQ's
4. check the migration dashboard to ensure everything is at 100%
5. do some manual checks to ensure everything's working and looks right
5. flick a switch in the ECF app so it will no longer return NPQ data from its API
6. bring the applications back up

We expect this process will take a couple of hours and it's scheduled outside of office hours.

We expect the days following separation to be busy as providers re-sync their data but are confident that this a huge step in the right direction.

Smaller, more independent services will be more flexible, easier to run and will be able to deliver improvements quicker.

[^1]: The NPQ application does have a database too but it's considered a snapshot at the point a registration was made. The ECF application is considered the source of truth.
