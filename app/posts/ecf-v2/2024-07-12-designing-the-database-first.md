---
title: "Designing the database first"
description: "Why getting the data schema right is so important"
date: 2024-07-12
author: Peter Yates
---

Usually in agile development, database schemas evolve as applications are written. When the usual phases of delivery specified in [the service manual](https://www.gov.uk/service-manual/agile-delivery) are followed, teams have plenty of time with a limited audience to refactor and refine their work before opening it up to the masses.

The Early Careers Framework (ECF) application didn't have that luxury. Within 8 months of the first line of code being written every school in the country was invited to register.

Once database choices have been made, are in production and used daily by thousands of people, it becomes very difficult to change them. The initial rush left us with a data model that wasn't the right fit and every attempt to fix it has resulted in other things breaking.

As a result, over the last 3 years we have spent lots of time reacting to problems caused by the data model.

Often, embarrassingly, we only find out something's wrong when informed by our users or providers. We've had to [build tools to help us fix data](https://github.com/DFE-Digital/early-careers-framework/pull/3783), [pepper links to support forms throughout the interface](http://localhost:8080/manage-training/redesigning-support-forms/) and spend a huge amount of time [optimising our API](https://github.com/DFE-Digital/early-careers-framework/pull/3573) to prevent our providers from experiencing timeouts.

## Rebuilding ECF

The data requirements for ECF are much more complicated than most services in the Department for Education, which are one-off transactions. ECF induction is a 2 year process and during those two years any number of events can happen which have an impact on the participant, their training and the way providers are paid.

For example, a participant could begin their induction at one school and switch to another mid way through. The new school might have chosen a different kind of induction programme but the participant chooses to continue with the one in place at their original school. The participant could fall ill and pause their induction for several months while they recover.

We need to ensure that our new database model can cope with these scenarios. Testing the model before writing the code will tell us sooner whether or not it will work, and it allows us to quickly iterate on our designs to cover all eventualities.

Data outlives code[^1] so it is important that we can accurately represent the most complex of induction histories in a way future custodians of this service understand.

## Prototypes, prototypes, prototypes

We first started thinking about how ... September 2023

[^1]: Kleppmann, M. (2017) [Designing Data-Intensive Applications](https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/). p130
