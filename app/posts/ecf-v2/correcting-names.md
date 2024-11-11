---
title: Improving how we gather an ECT or mentor’s name
description: ""
date: 2024-11-05
---

## Why we’re doing this

In ECF1, school users are asked to give an early career teacher or mentor’s TRN, date of birth and name when registering them.

When this is done, we check the Teaching Regulation Agency’s teacher records to make sure that person is eligible to become an ECT or mentor.

For example, we check that the early career teacher has qualified teaching status.

In ECF1, we ask for the name, but this isn’t actually needed. We can make the check based on either TRN and date of birth, or TRN and national insurance number. This would still be compliant with data security.

But in ECF1, the name is largely asked for because:

- to validate that the person being registered with that TRN has the same first name as on the official teacher record
- to make sure the name we have for that person is up to date, as we know sometimes the official teacher record might be outdated

This name is then passed on to lead providers and informs how they set them up with training and learning materials.

However, in ECF1 this results in support tickets and users being blocked from registering where the first name being entered in registration doesn’t directly match the name held on the official teacher record. For example, the user is entering ‘John’ instead of ‘Jonathan.’

It can also waste a school’s time giving us a name when technically we already store a name for that ECT or mentor in their TRA teacher record.

## What we tested with users

![A screenshot of the asking users for an ECTs TRN & DoB.](/ecf-v2/correcting-names/screenshot1.png)

We decided to ask school users for the ECT or mentor’s TRN and DOB.

We would then show them the name of that individual stored in the TRA’s records.

![A screenshot of giving users the option to review the name which is returned.](/ecf-v2/correcting-names/screenshot2.png)

This tested well with schools. They liked that it made sure they were registering the right person and saved them time entering the name.

It also helped them realise it was connected to that individual’s TRA teacher record. We hope this will prevent schools from entering a completely different person’s name when registering an ECT.

Schools said if the completely incorrect person showed, they’d go to their school office to check. They ignored the content there. We only anticipate this happening when schools might accidently mix up who they’re registering – it should be impossible unless they have the TRN and date of birth for that person.

In testing, schools understood they should only give us a more up to date name for a significant reason. For example, if that person’s surname had changed after marriage.

![A screenshot of giving users the option to edit the name which is returned.](/ecf-v2/correcting-names/screenshot3.png)

We also had to make clear that the corrected name would only be used for the purposes of ECF training. It wouldn’t update that ECT or mentor’s TRA teacher record. To do this, they need to go to the Access your teaching qualifications service with legal proof of a name change. Users typically understood this well, and that changes here wouldn’t impact anything other than the Register ECTs service. However, 1 user thought it might ask ECTs or mentors to update this themselves later.

## What we need to do next

We should think about removing the content on what to do when the person shown isn’t the individual they intended to register.

Longer term, when we launch Register early career teachers, we should monitor what names schools give when they correct an ECT or mentor’s name from their TRA teacher record.

If they are giving corrections that are changing the name to a different person, we would need to rethink this design.

We might also want to explore how the TRA Digital team can try to encourage individuals with TRA teacher records to keep their details up to date. This would mean it doesn’t need correcting in our service.
