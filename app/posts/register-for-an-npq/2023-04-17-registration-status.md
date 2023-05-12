---
  title: Registration status
  description: Landing page for users who have registered for an NPQ and return to the service.
  date: 2023-04-17
  screenshots:
    items:
    - text: "Single registration"
      src: single-registration.png
    - text: "Multiple registrations"
      src: multiple-registrations.png
    - text: "Multiple registrations - details"
      src: "multiple-registrations-details.png"
    - text: "Registration when the course has started"
      src: course-started.png
---

## Problem statement

There's a lack of clarity throughout the NPQ registration and application process that is affecting the user experience of NPQ applicants.

Solving this issue will improve the users' experience and reduce the uncertainty around applying for an NPQ.

## Research exploration
We conducted research with providers and users and found that users find the process of registering for an NPQ relatively easy. However, the research revealed that some teachers don’t understand the end-to-end application process:

They think they've applied for an NPQ once they've registered with the DfE  

They think they've registered for funding once they've applied for an NPQ  

The lack of clarity in the process leads users to submit multiple applications. They do this because they:

- Needed to edit their registration to change:

  - their name or other personal data

  - the school

  - the applicant (registering on behalf of colleagues)

- were worried about not hearing back from their provider  

- had forgotten they'd already registered  



## Integration with Get an Identity

In November 2022 the NPQ registration service integrated with the Get an Identity service. This means that the personal information about a user is now managed by a centralised DfE team rather than the NPQ team itself. This integration opened the field to explore the possibility of allowing users to self-serve when they need to make changes to their NPQ registration.  



## Design

Based on the research and the integration work the NPQ team got together to ideate ways to help improve the registration experience. Through a [series of workshops](https://lucid.app/lucidspark/1a787433-4654-43ff-b60b-7f6a1b9fc1d9/edit?viewport_loc=-14009%2C-1431%2C7569%2C4016%2C0_0&invitationId=inv_7b79ff35-5c8f-41b0-8f09-4b9ffb994113) we defined a solution to enhance the visibility of the registration status.  

The agreed solution allows the user to see and change their personal and work details, as well as the chosen course and provider.

### Personal details

This section renders the details the user provided when they created their DfE Identity Account. If the user chooses to change their personal details they are redirected to their DfE Identity Account.

### Work details

This section renders the details the user provided during their latest NPQ registration.

There are a few variations for this section depending on the user's work setting:

#### School / Academy trust / 16 to 19 educational setting
- Do you work in England?
- Work setting
- Employer

#### Early years (local authority maintained and pre-school/nursery part of a school)
- Do you work in England?
- Work setting
- Type of nursery
- Workplace

#### Early years (private)
- Do you work in England?
- Work setting
- Type of workplace
- Do you have a URN?

#### Other (including ITT mentor)
- Do you work in England?
- Work setting
- Employment type
- Employer
- Role

#### Outside of England
- Do you work in England?


### Course details

This section confirms the name of the course the user registered for and the status of their registration and funding. The different states for each item are outlined below:

#### Registration
- Submitted (blue)

#### Scholarship funding
- Funded (green)
- Not funded (red)
- In review (yellow) - applicable for the edge-case users

#### Targeted support funding
- Funded (green)
- Disappears if the user isn't eligible


### Provider details

This section confirms the name of the provider and the status of their application. The states for the provider application are as follows:
- Not submitted (grey)
- Pending (yellow) - in this stage the user may or may not have submitted their application with their provider.
- Accepted (green)
- Rejected (red)
- Started (turquoise)


## Multiple registrations

We are aware that a number of users submit multiple applications for the same NPQ with different providers (see screenshot "Multiple registrations"). This design variation allows the user to see an overview of each of their applications and dive deeper into the details on a different page (see screenshot "Multiple registrations - details").

### Previous NPQs

There will be users who have previously completed an NPQ (see screenshot "Multiple applications"). The details for past NPQs appear at the bottom of the registration status page. The state of the NPQ can be one of the following:
- Passed (green)
- Failed (red)
- Deferred (yellow)

In this section we only show the details of the NPQs that have been started by the user. We don't show any additional registrations the user may have made at the time where they didn't start the course.

## Changing details

If a user decides to change their personal details, they will be redirected to the DfE Identity account service.

Users can change their work details at any time using the registration status page. Also, as long as the NPQ hasn't started they can change the course or the provider.

For more information on how to change registration details please read the following design histories:
- Change personal details
- Change work details
- Change course
- Change provider
