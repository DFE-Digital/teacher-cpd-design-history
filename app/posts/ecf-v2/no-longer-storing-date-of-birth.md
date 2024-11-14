---
title: No longer storing date of birth for ECTs and mentors
description: "Why we've decided to stop storing date of birth for participants in our database."
date: 2024-11-14
---

## Why we’re doing this

In ECF1, the date of birth is stored constantly for both early career teachers (ECTs) and mentors.

This is because:
- the date of birth is used, alongside other information, to initially check the Teaching Regulation Agency's (TRA) teacher records, to check the person is eligible to undertake ECF training
- where an ECT is not eligible for training yet, we continue to check weekly if they've become eligible, for example, by being awarded qualified teacher status
- we also use information from the TRA's records to take in an induction start date or other relevant information for induction

There are no other reasons why date of birth is continued to be stored. It can be helpful in identifying individuals between the TRA's teacher records and the ECF database. But it is not exposed to lead providers or other users for any use. As a result, we should no longer store it in our database, to improve the security and privacy of personal details of ECTs and mentors.

The API for the TRA's teacher records has changed recently. To check for a record you only need to send the teacher reference number (TRN). This means we do not need to continue to store the date of birth (or national insurance number) to re-check teacher records once we've initially assured that the ECT is eligible for ECF training.

However, we still want to ask for a date of birth or national insurance number to help identify participants initially. This is for privacy and security reasons. We want to make sure the school user registering the ECT or mentor knows them. They can't just enter a random TRN and recieve back a name for an individual they aren't responsible for registering.




