---
title: Fixing DQT Data
description: "What we did to fix bad quality data that we imported from DQT for our new service database."
date: 2025-03-05
related:
  items:
    - text: Original import and cleansing scripts
      href: https://github.com/DFE-Digital/register-early-career-teachers-public/tree/1764b0846693b21e1da56e319bca677e02256b9c/lib/appropriate_bodies/importers
---

## Why we’re doing this

As the Database of Qualified Teachers (DQT) is being decommissioned, we are migrating induction period data to our new 'Record Inductions as an Appropriate Body' database. When we looked at the induction period records that were in scope for migrating to our new database, we wanted to make sure that the data we brought over was as high quality as possible. In order to do this, we analysed the DQT induction data and discovered a number of issues that we wanted to ideally resolve before importing. These issues could break our validation rules as well as cause complications and potentially increase support tickets if left unchecked. We agreed on recommendations for dealing with each of the issue types, leaving some as they were, preventing some being migrated and cleaning some with our scripts in order to migrate the cleanest data possible.

## Issue types and how we dealt with them

### Bad Status

This is an issue where a record has an open induction period alongside an overall induction status of passed, failed or exempt.
- There are roughly 60 records that require manual checking with the ops team post migration, where the record has an open induction period but a status that indicates they shouldn't or a record that is 'In Progress' but has no induction periods.
- There are 100 records that have no induction start date and an AB that is exempt in Wales, so this will be manually updated after migration.
- There were 3,500 records that have no induction dates, but an overall status they shouldn't have. We didn't bring these records over without any induction dates as they aren't technically in progress. However, we will leave them with an 'In Progress' status in TRS in order to show some proof that the individual has started induction.

### Induction Period start date after end date

This is an issue where an induction period has a start date that isn't blank and is after the period end date.
- There were 156 records that contained this issue. We conducted spot checks on these records and decided not to migrate them over as it would clash with our validation rules.
- These records will live in the DQT for now and we can check them if we get any queries associated with them.

### Induction Period start date before overall induction start date

This is an issue where the overall induction start date of a record is not blank and is after the induction period start and/or end date where populated. The overall induction start date should be the start date of the first induction period for an ECT. There was a bug in the DQT that caused the overall start date to be moved to a more recent induction period start date when it was created.
- There were 123 records that contained this issue. We didn't take the overall start date from DQT but assigned the overall start date as the start date of the first induction period on the record, which fixed this issue for our service on migration.

### Future start or end date

This is an issue where an induction period has a start and/or end date that is in the future.
- There were 1,671 records with a future start date in the DQT. The vast majority of these records were only a few weeks in advance and were mostly ahead of September starts with AB's claiming ECTs in preparation for the academic year.
- We set new validation rules on the AB service that prevent any start dates in the future from being entered. In order to not break our validation rules, we did not import any record with a start date that was later than our launch date of 18 February 2025. Any open records with a start date later than this will be prompted to resubmit when it goes live.

### Induction period < 10 weeks

This is an issue where an induction period end date is after the induction period start date, but the period is less than 10 weeks in duration.
- There were 5,802 records where an induction period is less than 10 weeks in length. Out of these records, 5,094 have a term of 0 or null and 298 have a term value of 1. We migrated these records across with no changes as there were no real problems with these records.
- There were a further 148 records which were shorter than 10 weeks in length but had between 2 and 7 terms associated with them. We decided to migrate these as is and then we will spot check them to understand why the term values don't match up to the period length and flag in the admin console to keep track of them.

### Duplicate start date, different ABs

This is an issue where an induction period has a start date that is duplicated with another AB for that TRN. (i.e. started induction with 2x ABs on the same day)
- There were 487 records with this issue in the DQT. We decided not to migrate these records for now as the overlaps would cause issues with our new validation rules. We will prioritise fixing the records for ECT's with a current induction period first. If there are clashing ABs we might need to communicate with them to resolve this.

### Duplicate start date, same ABs

This is an issue where the induction period is duplciated with the same AB for a TRN, and the period completely duplicates or has some other distinct data.
- There were 442 records with this issue in the DQT. We decided that we wanted to keep the longest version of the record we could, so that we weren't throwing away any induction data. We wrote a migration script that dealt with the overlapping records by extending any overlapping records to take the longer record of the two. We also took the maximum terms associated with the record from both. The rationale here was that it is better the keep more data than less as we don't want to cut out someone's induction progress.

### Close Induction Period Starts

This is an issue where the induction period start is distinct for the same AB for that TRN but is less than a fortnight apart.
- There were 140 records with this issues in the DQT. We decided for MVP that both of the records were valid and so they didn't need dealing with initially and so we migrated them as is.

### Invalid Period

This is a category of issue that occurs for several reasons. This is when; the period end date is null, the AB is no longer an active AB and/or the end/start date is populated and earlier than 1 September 2021.
- There were 4,327 records with this issue in the DQT. Records with an 'invalid' AB, are records where the appropriate body is either a Local Authority or a de-designated teaching school hub. We decided to migrate the records with these 'invalid' ABs as they were still valid records and we need them for proof of induction and historical checks, they just shouldn't remain as open records. In order to deal with this, where these records were open, we assigned a 'dummy' end date to them, using the 31st August 2024 as it is the de-designation date for local authorities. Alongside this, we also showed these induction periods as counting for no terms of induction served.

### Missing Data

This is another category of issue that also can occur for several reasons. There were 3,727 records with at least one of the issue types from the DQT. These records have at least one of the following:

1) **Start date is null** - When the start date was null, we did not migrate the records. If there is no start date on a record, we cannot count it as 'in progress' and it also would break our validation rules. If a record has only one induction period, then we used the induction period start date as the overall start date for induction.
2) **No appropriate body or holder/not detailed value** -  When there was no appropriate body or a holder value for the appropriate body, we didn't migrate them over. We assumed that these records were bad data and as we couldn't tell which AB made the record, we had no way of dealing with these before migration and chose not to migrate them. If there is a future support issue we can refer back to them to deal with the queries.
4) **The end date is populated but the number of terms is not** - When there was an end date but no number of terms given, we have migrated the records with no term amounts recorded and then we set the terms to 0 but we will add a note onto these to flag it was 0 in the DQT.
5) **The TRN is an ECF starter but doesn't have an induction programme type for a closed period** - When the TRN is an ECF starter but doesn't have a programme type on their record; if the records have a programme type but are before 2021, then we stripped the programme type from them. If the records have no programme type on them but are after 2021, then we have assigned them an 'unknown' value rather than a null value.
