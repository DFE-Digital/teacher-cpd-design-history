---
title: Email scheduling in the admin console
description: Improving the visibility and efficiency of our email processes.
date: 2023-12-06
---

#Email scheduling in the admin console

>[View the prototype](https://manage-training-for-ects-5c9ed99fc0a8.herokuapp.com/admin/performance/emails)

##The problem

We send over 800,000 emails each year to people involved in NPQs and ECF-based training.

Each email requires hours of manual work by team members including:

* analysing needs 
* drafting and approving content
* creating and updating Notify templates
* identifying the correct user group(s) to send the email to
* creating mailers and query strings in the codebase to target those users
* segmenting large groups of recipients into smaller batches
* manually actioning the email send via the service or Notify
* checking and communicating the bounce rates for each send

##The present

3 years into the project, we’ve streamlined our emails to focus on the basic tasks users need to complete across the registration cycle. The emails are:

1.	Announcing when registration opens for the new academic year.
2.	Reminding schools to set up training for the year.
3.	Reminding school induction tutors to register ECTs and mentors for the year.
4.	Reminding school induction tutors to assign each ECT a mentor in the service.
5.	Reminding schools who chose to use a training provider (known internally as the ‘full induction programme’ or ‘FIP’) that they must partner with one.
6.	Reminding schools to report any changes to their training programmes each term.

##The plan

To reduce manual workload and repeated effort, we’ve designed and created:

* an email schedule for the 23/23 academic year, based on schools’ working weeks and provider payment dates
* 5 ‘evergreen’ Notify templates for each of the reminders listed above
* mailers and query strings in the codebase to target specific user groups for each email
* a new section of the admin console to allow the 5 Notify reminders to be scheduled and viewed by the team

[![alt text](/manage-training/email_scheduling_in_the_admin_console/Manage training for early career teachers _ Design - Page 1 Automated comms (4).png)](/manage-training/email_scheduling_in_the_admin_console/Manage training for early career teachers _ Design - Page 1 Automated comms (4).png)

##Analysis and design

Our goal was to move from our highly manual and repetitive process to a more automated one. 

We wanted to avoid a ‘schedule and forget’ approach, as our team (and future teams) need the ability to: 

* know when emails are scheduled to make sure the support desk and providers are aware
* review the contents of the 5 Notify templates
* review the user groups who will receive the emails
* estimate the number of recipients for each email
* postpone or delete email sends if circumstances change for schools
* view how many emails were successfully sent each time

The new dashboard covers all of these needs. 

###View

[![alt text](/manage-training/email_scheduling_in_the_admin_console/screencapture-manage-training-for-ects-5c9ed99fc0a8-herokuapp-admin-performance-emails-2023-12-06-09_18_00.png)](/manage-training/email_scheduling_in_the_admin_console/screencapture-manage-training-for-ects-5c9ed99fc0a8-herokuapp-admin-performance-emails-2023-12-06-09_18_00.png)

###Schedule

[![alt text](/manage-training/email_scheduling_in_the_admin_console/screencapture-manage-training-for-ects-5c9ed99fc0a8-herokuapp-admin-performance-emails-new-2023-12-06-09_18_18.png)](/manage-training/email_scheduling_in_the_admin_console/screencapture-manage-training-for-ects-5c9ed99fc0a8-herokuapp-admin-performance-emails-new-2023-12-06-09_18_18.png)

###Change or delete any scheduled send

[![alt text](/manage-training/email_scheduling_in_the_admin_console/screencapture-manage-training-for-ects-5c9ed99fc0a8-herokuapp-admin-performance-emails-879232-2023-12-06-09_18_33.png)](/manage-training/email_scheduling_in_the_admin_console/screencapture-manage-training-for-ects-5c9ed99fc0a8-herokuapp-admin-performance-emails-879232-2023-12-06-09_18_33.png)

###View a sent email

[![alt text](/manage-training/email_scheduling_in_the_admin_console/screencapture-manage-training-for-ects-5c9ed99fc0a8-herokuapp-admin-performance-emails-64336-2023-12-06-09_18_56.png)](/manage-training/email_scheduling_in_the_admin_console/screencapture-manage-training-for-ects-5c9ed99fc0a8-herokuapp-admin-performance-emails-64336-2023-12-06-09_18_56.png)

##Technical implementation 

1.	Our dev team will create a job that runs every day at midday (allowing time in the morning for our team to react to any changes in circumstances that could impact the send).  
2.	If the job finds that an email has been scheduled for that day, it will automatically send it. 
3.	If the list of recipients is over 6000, it will be split into batches and sent in a staggered way to avoid any overload issues.



