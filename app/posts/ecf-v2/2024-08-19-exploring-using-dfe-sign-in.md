---
title: Exploring using DfE sign-in for accessing the service
description: "We’ve been exploring using DfE sign-in for how users can access the new ECF2 service."
date: 2024-08-19
---

We’ve been exploring using DfE sign-in for how users can access the new ECF2 service.

In ECF1, school users currently access the service by creating a user account via the email address in the Get Information about Schools service, and do not currently access the service using DfE sign-in.

Appropriate bodies use DfE sign-in for the Teaching Regulation Agency’s (TRA) induction portal. However, for the check data for appropriate bodies service, they are sent a magic link to their email address, which are added manually by DfE teams.

Similarly, lead providers and delivery partners use magic links to access the services.

## Why DfE sign-in?

We’re keen on reducing our reliance on Get Information about Schools for accessing the service for school users. This is because it can create a blocker, as it limits who can get access in the first instance. Schools are not always aware of who their named contact is on GIAS. In research and support tickets, users have expressed confusion and frustration with this process.

Some schools also express confusion because they are used to using DfE sign-in for other services. They can self-serve and request access to their organisations and services.

We also know from previous research that there is a need for multiple users from schools to have access to the service, which DfE sign-in will allow and cater for.

Organisations such as lead providers and appropriate bodies already use DfE sign-in to access other services, including services linked to the delivery of the early career framework, such as the TRA AB portal.

## What we weren’t so sure about

We want to make sure that schools will be able to completely self-serve their own onboarding using DfE sign-in. We believe DfE sign in will allow already established ‘approver’ users from schools to grant access to other colleagues at their school. This is without any manual work from support users at DfE to add users.

We explored using DfE sign-in in a similar way for lead providers and appropriate bodies. However, we found that the data DfE sign-in uses to know an organisation’s type wouldn’t account for lead providers, delivery partners or appropriate bodies.

## What we’ve found out

We hope to implement a way for schools to safely, simply and reliably add themselves as users to the ECF2 service, without having to depend on a support agent to add them manually. We think DfE sign-in will help us achieve this.

However, for now, we will have to accept that lead providers and appropriate body users will be added manually by support. This is largely because there are fewer of these organisations to be added, and potentially who works there changes less frequently. In time, after we have developed a minimum viable product for ECF2, we hope to improve this.

## Next steps

We’ve decided we want to test using DfE sign-in for schools, in a way where schools can manage their own onboarding on to the ECF2 service.

For lead providers and appropriate body users, we want to test giving the option of using DfE sign-in or a one-time password. For this, we’ll need to hold a list of users for each organisation, which we can use flexibly when the user logs in. If the user logs in via DfE sign-in, we can use the email within the payload received to compare to our list. If they choose a one-time password, we’ll use the email they used to receive the password.



