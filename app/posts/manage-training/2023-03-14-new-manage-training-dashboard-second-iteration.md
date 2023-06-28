---
title: Second iteration of the new manage training dashboard
description: This work showcases the second iteration of the new dashboard design, focusing on UI and content changes based on recent user research. The changes include improvements to the "Manage training" and "Manage ECTs and mentors" pages, CSS improvements, and changes to improve scannability and routing. The team plans to continue making improvements in future iterations, including redesigning the participant profile page.
date: 2023-03-14
related:
  items:
    - text: Re-nomination journey
      href: /manage-training/re-nomination-journey/
    - text: New manage training dashboard and review app
      href: /manage-training/new-manage-training-dashboard-and-review-app/
    - text: Temporary Cohorts for ECTs and Mentors
      href: /manage-training/temporary-cohorts-for-ects-and-mentors/
    - text: Supporting Schools in LP-DP Transition
      href: /manage-training/supporting-schools-in-lp-dp-transition/
tags:
  - dashboard
---

<video src="https://user-images.githubusercontent.com/128088/241957501-5deab459-06c3-4c97-a1a0-4c2965610e80.mp4" controls>
</video>

## Background
This video showcases the second iteration of the new dashboard design, focusing on UI and content changes based on recent user research. The changes include improvements to the "Manage training" and "Manage ECTs and mentors" pages, CSS improvements, and changes to improve scannability and routing. The team plans to continue making improvements in future iterations, including redesigning the participant profile page.

### Design summary

The new dashboard was recently tested with School Induction tutors, where they were asked to complete various tasks. Some of these included: adding participants, and assigning mentors to ECTs. We also observed how they responded to notifications regarding actions needed to assign mentors to ECTs.

### Design detail

#### ECTs without mentor
The new addition of the 'ECTs without mentor' information proved useful in testing, but it could be improved with a graphical sense of urgency in the future. However, consideration would be needed to avoid duplicating the same notification on the 'Manage your training' page, which already enables users to view and take action to resolve.

#### CTA button
Initially, the primary call to action button was placed at the bottom of the page assuming users might miss the content below it. However, user testing showed that participants had difficulty finding the manage mentors and ECTs button as it appeared off-screen on smaller screens, requiring them to scroll down. Some users also thought the button related to the tabs above it, likely due to habits formed by the older design where content and actions were hidden inside tabs.

#### Content changes
Content changes and improvements were made to the page, including removing the repetition of the words "Academic year" in the tabs to reduce cognitive load and free up space for a possible third tab. The title "School programme" was also replaced with "Academic year."

#### CSS improvements - Academic year
UI CSS improvements were made on the page by reducing the width of the 1st and 3rd columns of the summary list, to increase the space available for the bulk of the content in the 2nd column. This allowed most text in the 2nd column to fit on one line in desktop view, reducing vertical scrolling and avoiding typographic widows.


#### UI
On the Manage mentors and ECTs page, overall users found it useful to be alerted of necessary actions, but some found the process to take action was cumbersome as they would need to click on the hyperlink name rather than have an instant dedicated ‘assign’ hyperlink.

During testing, one user found it challenging to distinguish between ECTs and their mentors due to unclear separators. After feedback, changes were made by adding vertical borders to create a box around each group, preventing any confusion about who is inside or outside the group.

#### Scannability improvements
Some users had difficulty scanning the list of participants, specifically due to the prefix "mentor-" before each mentor's name. This required users to scan horizontally before continuing vertically. Additionally, the list was not in alphabetical order, adding to cognitive load. For iteration two, changes were made by removing the mentor prefix, providing a heading for mentors similar to ECTs, and alphabetising the list.

#### Status tags and definitions
Users found it helpful to view participant s tatuses at a glance, but some terms didn't match mental models, causing confusion. Some statuses lacked clear reasoning, requiring more information. Improvements to address these issues are currently underway.

#### Routing
During testing, inconsistencies in routing were found, where changing the mentor of an ECT resulted in different routing depending on whether the user clicked on the mentor or the ECT.

In the first iteration, the routing was made consistent, but the confirmation was unclear, and navigating back was awkward.

In the second iteration, routing users straight back to the manage mentors & ECTs page was explored but rejected due to the the confirmation message creating clutter on the page.

In the third iteration, we decided to create a new confirmation page with a clear h1 heading and a primary call to action button that routed users back to the manage mentors & ECTs page.  This solved the routing problem and improved the user experience.

### Outcome and Learnings
That concludes the UCD changes made for the second iteration of the new dashboard. There are a number of other improvements that are on our UCD map such as redesigning the participant profile page amongst a number of other improvements, and these will be covered in the next iteration of the dashboard.


#### UCD team

- Dale Moore - Content Designer
- Darren Courtney - Interaction Designer
- Elena Bracey - User Researcher
- Costa Christou - User Researcher
- Zoe Popperwell - User Researcher

