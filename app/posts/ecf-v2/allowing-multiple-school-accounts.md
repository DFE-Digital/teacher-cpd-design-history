---
title: "Allowing multiple accounts for schools"
description: "Why we want to let schools have multiple accounts and no longer collect who the school induction tutor is"
date: 2024-09-06
author: Claire Hughes
---

When building new services to facilitate the delivery of the early career teaching reforms, we decided to make two key changes:
- we will allow multiple user accounts for schools, as opposed to one
- we will no longer collect who the school induction tutor is directly from schools

## Allowing multiple user accounts for schools

In our discovery, access to the Manage training for early career teachers service was highlighted as a key problem for school users.

In particular, being restricted to one account per school led to lots of support tickets and delays to getting ECTs and mentors registered.

This is because:
* there may be multiple people involved in the adminstration of early career teachers and mentors
* the person that handles registration might change, and when it does, it can be hard to update once the singular user has left
* the service asks for the school induction tutor to be the only user on the service, but often it is other administrative roles filling in this information

In the new digital service we will allow multiple accounts per school. These will be administered by DfE Sign in, as discussed in the [Exploring using DfE Sign in](https://teacher-cpd.design-history.education.gov.uk/ecf-v2/exploring-using-dfe-sign-in/) post.

## No longer collecting who the school induction tutor is

In the current service, only one user is allowed to sign in. It's asked that this user is the school induction tutor. However, we know from research and support tickets this is not always the case.

In the new service, we are currently not planning to collect from schools directly who the school induction tutor is.

This is because we could not directly infer it when we have multiple users and we don't want to add another question for users to think about and answer.

We could not find any evidence that we or lead providers needed to know who the school induction tutor was.

However, we know that the lead provider needs to know someone to contact at the school who is adminstrating the registration deals of that mentor or ECT.

Therefore we need to work out how we can surface contact details for one or more of the school users to lead providers via the API.

This could be passing the emails for all school accounts, or just giving them the email of the user who registered that particular ECT or mentor.

## Next steps

We're still a long way off releasing anything. However, we still need to consider the impacts of this decision and how we can still best meet the needs of users in a way that is technichally feasible.

First, we should check with other teams in DfE that there are negative ramifications of this decision we haven't considered. We're hoping this design history will help us to do this.

We need to check how we can make these changes whilst not adversely impacting the API lead providers use. We'll work with the team that currently works on the API to find out how we can best communicate school contact details to lead providers.

We also need to research with lead providers to see what would be most helpful to them.
