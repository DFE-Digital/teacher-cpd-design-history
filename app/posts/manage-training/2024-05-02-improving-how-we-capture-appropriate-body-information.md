---
title: Improving accuracy when collecting information about an appropriate body
description: We've redesigned how we collect information about appropriate bodies to make it more accurate.
date: 2024-05-02
---

While undertaking a review of the service we noticed that it was possible for any school induction tutor to select any type of appropriate body, even though there are different rules for certain types of school.

For instance, as well as using a teaching school hub as an appropriate body, independent schools and British schools overseas can also use other organisations as appropriate bodies.

[Appropriate bodies are the organisations that quality-assure statutory teacher induction](https://www.gov.uk/government/publications/statutory-teacher-induction-appropriate-bodies/find-an-appropriate-body). All ECTs (early career teachers) must be registered with an appropriate body by their school.

We ask the school induction tutor to confirm which appropriate body the school has appointed when registering an ECT.

![Screenshot of existing screen to select type of appropriate body](select-type-of-ab.png "The current options available to all schools")
![Screenshot of existing screen to select Independent Schools Teacher Induction Panel](select-istip.png "After selecting national organisation, this option is currently presented to all schools")

This can result in users incorrectly selecting an organisation that they are not eligible to select.

Therefore we redesigned how we ask users for information on appropriate bodies so we only present them with options relevant to their circumstances. We do this using the information we have about their establishment from the Get Information about Schools (GIAS) register.

This means that a school induction tutor will no longer be shown options to choose an appropriate body which are ineligible for their school to use. For example, a user from a British school overseas will no longer be provided with the option to select an Independent Schools Teacher Induction Panel (IStip).

![Screenshot of enter teaching school hub - for schools who can't select a different appropriate body](which-tsh.png)
![Screenshot of select a different type of appropriate body for british schools overseas](select-bso-type-of-ab.png)

We’ve also looked at issues in where a user is not able to specify or find appropriate body at the time of registration.

In this instance, we’re conscious that users could be entering incorrect information to continue and look to alter this information later.

To avoid that, we’ve added the option to skip adding an appropriate body at the time of registration and allow for it to be added later.

We’ve kept this option to skip as a subtle link.

![Screenshot to skip adding an appropriate body](ab-not-listed-link.png)

We’ve also identified that we are currently asking users who have selected to ‘deliver their own’ programme for the appropriate body they’ve appointed.

As we don’t capture any information about ECTs for schools following this programme, we’ve decided we can remove collecting information about appropriate bodies also.

This helps to reduce the administrative burden on the end user and ensure we’re not collecting any unnecessary information.

We’ll be looking to remove this from the service in the future.

**The prototype can be found here**

[SIT registration for 'normal' school with AB changes](https://manage-training-for-ects-5c9ed99fc0a8.herokuapp.com/v1/new-induction-tutor/ab-not-ind-or-bo)
[SIT registration for independent school with AB changes](https://manage-training-for-ects-5c9ed99fc0a8.herokuapp.com/v1/new-induction-tutor/ab-ind-school)
[SIT registration for British school overseas with AB changes](https://manage-training-for-ects-5c9ed99fc0a8.herokuapp.com/v1/new-induction-tutor/ab-bo-school)
Password is ‘ect’ (without the quotes).
