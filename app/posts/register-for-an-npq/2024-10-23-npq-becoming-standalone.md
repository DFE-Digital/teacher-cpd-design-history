---
title: Making the NPQ service standalone
author: Peter Yates
date: 2024-10-23
---

The two main services in Teacher CPD are [Manage training for early career teachers](https://manage-training-for-early-career-teachers.education.gov.uk/) (ECF) and [Register for a national professional qualification](https://register-national-professional-qualifications.education.gov.uk/) (NPQ).

Work on ECF began in November 2020 and NPQ in May 2021.

NPQ is currently reliant on ECF. When an NPQ registration is made it is sent via an internal API to ECF where [the providers of the training](https://www.gov.uk/guidance/national-professional-qualification-npq-courses#npqproviders) can see and accept registrations, and deal with the finances needed for providing the training.

![NPQ registration data flow](/register-for-an-npq/2024-10-23-npq-becoming-standalone/npq-registration-data-flow.png)

Within DfE, the NPQ and ECF applications are managed by different teams. In addition to spanning teams, changes to NPQ functionality often spans multiple:

* code repositories
* APIs
* databases

The extra hop in the NPQ data journey means even small changes have to be carefully coordinated. The process is more complicated and errors are often harder to diagnose and resolve.

The NPQ team are disempowered by not owning the NPQ journey end-to-end.

Coupled with [ECF's technical debt](/ecf-v2/designing-the-database-first/) and the ECF team having many competing priorities in addition to NPQ, it's much harder for the NPQ team to improve their service than it is for other comparable teams.

## Breaking free

## Shifting and reorganising our data
