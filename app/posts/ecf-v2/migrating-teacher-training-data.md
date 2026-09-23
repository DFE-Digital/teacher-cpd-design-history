---
title: "Migrating teacher training data"
description: "Converting ECF1 training data into a format ECF2 understands"
date: 2026-09-21
author: Peter Yates
---

In April 2026 [Register early career teachers](https://www.register-early-career-teachers.education.gov.uk/) replaced the Manage early career teachers service.

The Manage early career teachers service had no private beta and the service was released to all schools in England in July 2021.

The lack of a private beta meant the system wasn't tested with real data before release.

Several major mistakes were made in its design.

For example, it was built with the assumption that most teachers would complete their training at the same school with the same training provider.

This was not the case.

### ECF1 induction records

In ECF1 a teacher's training and induction history was recorded as a series of `InductionRecord` records. Each entry holds the latest state for that teacher, including their:

* appropriate body
* lead provider and delivery partner (via `InductionProgramme`)
* cohort (via `InductionProgramme`)
* mentor
* school

When any of these things changes a new `InductionRecord` is written. The intent was that a teacher's current state could be found by retrieving their latest `InductionRecord`.

But, it's not that easy:

* some events are recorded before they happen, so we need to exclude any records with a `start_date` later than today
* a teacher's history will look different to each training provider, so we need to filter by provider
* the teacher might have been marked as leaving soon, so we need to ensure we include records where the `end_date` is in the future
* the teacher might have been claimed by another school, but we don't want the current school to know they're leaving as they might not yet have handed in their notice, so we need to account for that too 🫠️

This example query shows how complex it is to find a current induction record:

![A screenshot of a SQL query that retrieves the current induction record. It's spread over 7 lines and has lots of conditions grouped by 'or' and 'and'](/ecf-v2/migrating-teacher-training-data/current-induction-record-where-clause.png)

Over the years the service ran, the accidental complexity lead to many bugs. They were introduced, existed for a while, reported, diagnosed and fixed. All the records written between a bug's introduction and its fix being deployed are potentially affected.

There was no guarantee that once the fixes were deployed the broken data was fixed, so **building an 100% accurate history is impossible**.

In addition to migrating the records the migrator also needs to:

* adjust known bad dates
* ensure all combinations of teacher, lead provider, cohort and school are present in ECF2

### ECF2 periods

We solved the `InductionRecord` problems by splitting the different kinds of data up into their own tables. This means only the necessary record needs to be changes when a teacher changes school, mentor or training provider.

![An ERD diagram showing the relationship between teachers, schools and various period types. At school periods represent the time a teacher is an ECT or mentor at a school, mentorship periods represent the time a mentor was mentoring an ECT, and training periods the time an ECT or mentor was being trained](/ecf-v2/migrating-teacher-training-data/ecf2-periods.png)

The data model redesign is covered in [Designing the database first](/ecf-v2/designing-the-database-first/).

### The migration process

When migrating data from ECF1 to ECF2 we chose to connect ECF2 to ECF1's database and let it pull records from ECF1, transform them if necessary and insert them into ECF2.

These processes take place in background jobs so we're able to split all the records up into batches and process them in parallel --- table by table, row by row.

It works nicely for simple 1:1 record transfers because little translation is needed and the input is directly comparable to the output.

![A diagram showing a straightforward one to one copy of a delivery partner from ECF1 to ECF2](/ecf-v2/migrating-teacher-training-data/migration-easy.png)

However, it doesn't work for `InductionRecord` because it's an [append only](https://en.wikipedia.org/wiki/Append-only) table[^append-only]. Each record holds the current state, but to work out what it changed you need to compare it to the previous record.

A change of mentor is recorded with a new `InductionRecord` row where all the attributes are the same as the current one except the `mentor`.

To work out the full history of a teacher, including the history of the schools they've been at, the training they did and their mentoring history, we need to take all of the `InductionRecord` rows into account.

This diagram shows how stepping through a series of induction records allows a training history to be pieced together:

![A diagram the complexity of migrating induction records where each one can affect the others around it](/ecf-v2/migrating-teacher-training-data/migration-hard.png)

Processing one `InductionRecord` at a time would be extremely slow because the migrator would need to retrieve all ECF2 data in order to work out how the current `InductionRecord` might affect it.

### Migrating and fixing data, attempt one

The initial approach attempted to transfer one teacher at a time in a long, multi-step process. It looped through every:

1. teacher profile, user and participant profile and combines them into a `Teacher` record
2. ECT induction record creating `ECTAtSchoolPeriod` records
3. mentor induction record creating `MentorAtSchoolPeriod` records
4. induction record creating `TrainingPeriod` records
5. ECT induction record creating `MentorshipPeriod` records

With the number of broken records in ECF1 this process was extremely problematic.

Inaccuracies found in later `InductionRecord` records sometimes needs data from previous steps needs to be adjusted.

In order to test these complicated scenarios all the necessary data needs to be written to both ECF1's database and ECF2's database.

The `TrainingPeriod` sits at the centre of the data model, it depends on teacher and training provider data.

![Training period dependencies](/ecf-v2/migrating-teacher-training-data/training-period-dependencies.png)

Teachers can have many training periods, so setting up this structure multiple times per test case for each of the hundreds of test cases is unfeasible. It's too complicated and slow.

### The second attempt

After struggling with induction record migrations for several months, in November 2025 we decided to change tack.

The three steps in the process are:

1. **extract** data from ECF1
2. **transform** it to an ECF2 format
3. **load** it into to ECF2

In data engineering, [extract, transform, load](https://en.wikipedia.org/wiki/Extract,_transform,_load) is an approach that's been around since the 1970s[^history-of-data-management]. While it's usually used for data warehousing, it's a great fit for our needs now.

Dividing our process into:

* a simple **extractor** that pulls data from the ECF1 database and constructs a `ECF1TeacherHistory` object with all relevant data
* a complex **transformer** that converts an `ECF1TeacherHistory` into an `ECF2TeacherHistory`
* a simple **loader** that takes an `ECF2TeacherHistory` object and writes it to the ECF2 database

![The new three step teacher history migration process](/ecf-v2/migrating-teacher-training-data/process-overview.png)

This segregation of responsibility had several benefits:

* the code for extracting, transforming and loading was now separate and testing them in isolation was easy
* the **extract** and **load** sections were both completed in a matter of days
* the **transform** step no longer needed to touch the database, making them easy to write and fast to run
* a [test generator](https://github.com/DFE-Digital/register-early-career-teachers-public/blob/7f18f9d2064f3f280cc42e49e368a9a65e8504f4/app/migration/spec_generator.rb) could be used to convert real data from ECF1 to an test case, ensuring when we addressed a problem future changes wouldn't break it. We ended up with more than [30 real examples](https://github.com/DFE-Digital/register-early-career-teachers-public/tree/7f18f9d2064f3f280cc42e49e368a9a65e8504f4/spec/migration/teacher_history_converter/real_examples)
* only a small number of true end-to-end tests were needed to ensure the entire process worked as expected
* allowed us to add a data cleaning stage where fixes were applied, including:
  - removing records from British oversea schools
  - closing ECT induction records that continued after the teacher's induction completion date
  - fixing records where the `end_date` was before the `start_date`
  - trimming impossibly-early dates

### The home straight

The new teacher history converter unblocked the teacher history migration.

By the launch of Register early career teachers we aimed for 99.99% of records to be migrated via either method, and we'd manually fix anything that was too broken to migrate automatically.

We used two migration strategies:

* **economy** migrated the minimum data we need and overwrote some dates to ensure validity
* **premium** migrated all data and applied lots of corrections to make it valid in ECF2

Economy was the fallback, we didn't intend for it to be widely used but some histories were so broken we couldn't reassemble them. We built economy before premium and this chart shows how as the premium.

This chart shows how the economy route reduced from 91% of all participants in February 2026 to just 2% of all participants in April 2026, while premium rose from 0% to 97.88%.

![A chart showing the timespan from February 2026 to April 2026 where the economy percentage (orange) drops from 91% to 2% and the premium percentage (purple) rises from 0% to 97.88%](/ecf-v2/migrating-teacher-training-data/rise-of-premium.png)

We ran the full migration every night in a test environment and the team discussed the results the following morning and decided how to improve them. Running repeatedly increased our confidence that the process would work in production and got us used to the process of running it.

Our migration tooling gave us reports on which records had failed and why. Some fixes were applied in the ECF1 database and some needed amendments to be made to the converter.

We hit our target of 99.99% comfortably before the launch of Register early career teachers.

The production data migration was run on Register early career teachers' launch day and was a success. It took less than an hour. The remaining broken records were manually fixed and added post-launch.

This is the output of the production migration from 27 April 2026.

![A table listing the various kinds of data held in RECT and the success rate. The lowest is 99%](/ecf-v2/migrating-teacher-training-data/final-stats.png)


[^history-of-data-management]: Keith D. Foote (2022) [A Brief History of Data Management](https://www.dataversity.net/articles/brief-history-data-management/#extract-transform-and-load)
[^append-only]: Induction records were originally intended to be append-only but under certain circumstances they were updated. This made reconstructing the timeline for ECF2 conversion even more complicated.
