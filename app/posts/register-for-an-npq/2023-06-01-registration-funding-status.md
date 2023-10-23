---
  title: Registration details – updates
  description: Changes made after the first round of user research. 
  date: 2023-06-01
  related:
    items:
    - text: Research notes
      href: https://lucid.app/lucidspark/a0e9b3a2-be69-4c8f-9df8-ecebf112627b/edit?shared=true&invitationId=inv_910ffd78-0b8e-4d37-9aa0-b116dcb3bc3b&page=0_0#
    - text: Findings spreadsheet
      href: https://docs.google.com/spreadsheets/d/1VTxDNWjchuRMnB7UTTlp1M0eAAtiM5vueAPiaxYtxvg/edit#gid=0
    - text: Targeted Support funding flow
      href: https://lucid.app/lucidspark/323f8cf1-e51e-4992-a68b-6dfdc71bdd91/edit?invitationId=inv_d04d827e-52de-4656-a90f-3eaf8b75f76f&page=0_0#
    - text: Eligibility funding history 
      href: https://educationgovuk.sharepoint.com/:p:/r/sites/TeacherServices/_layouts/15/Doc.aspx?sourcedoc=%7B421E197D-EF06-5AD9-BA85-EBCD8B9C3CA2%7D&file=NPQ%20Funding%20Eligibility%20History.pptx&action=edit&mobileredirect=true
    - text: Content for all funding scenarios 
      href: https://educationgovuk-my.sharepoint.com/:w:/r/personal/emma_frith_education_gov_uk/_layouts/15/Doc.aspx?sourcedoc=%7B677CC74F-A4FF-456B-B9D8-FCF72B4E5E39%7D&file=NPQ%20funding%20scenarios%20-%20content%20review.docx&action=default&mobileredirect=true&cid=09bb19ae-2127-406d-a040-449b0073010d
     
---

See [this post](/register-for-an-npq/registration-status/) for background on the initial design. 

After a round of research and more in depth conversations with the development team, the following changes were made. 

## 1. Funding status 

### The problem

- Users did not know what the different types of funding were.
- The registration page gave no explanation for the status.

> I dont know what targeted or scholorship funded is? Terminology used to be 'fully funded' or 'DfE funded'.

### Design changes 

The changes listed below were guided by an [existing document](https://educationgovuk-my.sharepoint.com/:w:/r/personal/emma_frith_education_gov_uk/_layouts/15/Doc.aspx?sourcedoc=%7B677CC74F-A4FF-456B-B9D8-FCF72B4E5E39%7D&file=NPQ%20funding%20scenarios%20-%20content%20review.docx&action=default&mobileredirect=true&cid=09bb19ae-2127-406d-a040-449b0073010d), which outlines the different funding scenarios and shows the content used in each scenario (on outcome pages and in emails). The same or similar content was used to keep the service consistant and avoid confusion for users. 

1. The registration details page (the landing page for users who have already registered for an NPQ) reflects the different possible funding statuses a user would see during the registration flow. 

2. The status names have been updated to reflect the langauge used on the outcome pages during the registration flow. They are now: 
  - Eligible 
  - Not eligible 
  - For users whos eligibility is in review, there is content to tell them to contact their provider to find out the outcome. 

3. Additional text has been added below the status to explain what it means for them. For 'Not eligible' we also show the reason they are not eligible. This uses the same language as in the registration flow but a shorter version. 

4. We only show the row for Targeted support funding if the user is eligible. This matches the registration flow. We believe users are not that aware of this funding and that it would be confusing to show this information if they are not receiving it. 

[See screenshots further down this page](#1.-funding-status-1)

## 2. Provider details 

### The problem

- Users had different interpretations of what 'pending' meant, as a status under 'Provider application'.
- Users wanted to know what else needed to be done or if it was out of their hands. 

Pending can mean a variety of things and was being used when we didn't have a definite alternative status e.g. accepted or rejected. We are unable to get a status for every point on the journey e.g. application submitted. This leaves the status with too many potential options and unknowns and doesn't give the user clarity on what to do next. 

> Pending = waiting for provider to do their bit, I think - though this needs to be clearer

### Design changes 

1. The 'provider details' table has been removed. As this information is directly tied to the course it made sense to be in the same table.  

2. The status has been split into 'Provider application' and 'Course status' to give more clarity to users.

3. The statuses now have the following states: 
- **Provider application**
  - Apply with provider (yellow)
  - Successful (green)
  - Unsuccessful (red)
- **Course status**
  - Passed (green)
  - Not passed (red)

4. When the 'provider application' is 'Apply with provider', additional information is shown to remind users to apply with provider. 

5. 'Course status' is only shown when we have a value (this is after we receive an outcome declaration from the provider).

6. When there is no 'course status' an email address is provided at the top of the page for users to contact if they need to make changes. 

7. These statuses also show on the summary on multiple registration list view. 

[See screenshots further down this page](#2.-provider-details-1)

## 3. Making the multiple registrations page more consistent

### The problem 

The course names were hard to find and the table format wasn't consistent with other parts of the service, or other DfE services. 

Given only 0.05% of users (32 people) have more than 4 registrations, and the most is 9, there was no need for a table format. Summary cards allow the content to be displayed in an easy to consume format. 

### Design changes

1. Using summary cards for each registration instead of a table
2. Including NPQ in the h1 to improve signposting
3. Changing 'created at' label to 'Registration submitted'
4. Displaying the Provider application and Course statuses

[See screenshots further down this page](#3.-multiple-registrations-page)

## 4. Other design changes

1. All the funding details have been moved to a separate summary card so it's easier to find. 
2. The work details have moved to the last summary card shown. This is because it is the information the user is least likely to be reviewing when they return to their account. It also means the statuses move up the page and 'apply with provider' is visible when the page loads after completing a registration. This helps the user see the next action to take and that they haven't completed their application. 
3. A link to the DfE Identity account is shown instead of displaying each personal detail. As all of these are edited in the account.  
4. The registration status has been removed as it would only ever have one status. A user cannot see this page unless it has been submitted. 
5. If a user has multiple registrations, and is viewing the details of one of the registrations:
- The course name has been added to the h1, for signposting
- A back link has been added so they can return to the list view.
6. Information about who to contact to change details if you have already started the course has been moved next to the 'started' status instead of the top of the page. 

[See screenshots further down this page](#4.-other-design-changes-1)

---

## Screenshots

### 1. Funding status

#### Before changes were made

![Before changes were made](/register-for-an-npq/registration-funding-status/funding-status--before.png)

#### Eligible for Scholarship and Targeted support funding

![Eligible for Scholarship and Targeted support funding](/register-for-an-npq/registration-funding-status/eligible-for-both.png)

#### Eligible for Scholarship funding only

![Eligible for Scholarship funding only](/register-for-an-npq/registration-funding-status/eligible-scholarship.png)

#### Eligible for Targeted support funding only

![Eligible for Targeted support funding only](/register-for-an-npq/registration-funding-status/eligible-targeted.png)

#### Not eligible for Scholarship funding as they don't work in England

![Not eligible for Scholarship funding as they don't work in England](/register-for-an-npq/registration-funding-status/not-eligible-england.png)

#### Not eligible for Scholarship funding as they don't work an eligible setting

![Not eligible for Scholarship funding as they don't work an eligible setting](/register-for-an-npq/registration-funding-status/not-eligible-setting.png)

#### Not eligible for Scholarship funding as not registered with Ofsted

![Not eligible for Scholarship funding as not registered with Ofsted](/register-for-an-npq/registration-funding-status/not-eligible-ofsted.png)

#### Eligibility in review

![Eligibility in review](/register-for-an-npq/registration-funding-status/eligibility-in-review.png)

### 2. Provider details

##### Before

![Before changes were made to single registration](/register-for-an-npq/registration-funding-status/provider-details--before.png)

##### After 

#### Apply with provider
![Course details table on single registration, apply with provider](/register-for-an-npq/registration-funding-status/course-details--apply-with-provider.png)

#### Application unsuccessful
![Course details table on single registration, unsuccessful application](/register-for-an-npq/registration-funding-status/course-details--unsuccessful.png)

#### Application successful, course not passed
![Course details table on single registration, course not passed](/register-for-an-npq/registration-funding-status/course-details--not-passed.png)

#### Application successful, course passed
![Course details table on single registration, course passed](/register-for-an-npq/registration-funding-status/course-details--passed.png)



### 3. Multiple registrations page

##### Before

![Before changes were made to multiple registration page](/register-for-an-npq/registration-funding-status/multiple-reg--before.png)

##### After - showing all possible statuses

![After changes were made to multiple registration page](/register-for-an-npq/registration-funding-status/multiple-reg--after.png)

### 4. Other design changes 

##### Before

![Before changes were made to single registration](/register-for-an-npq/registration-funding-status/single-reg--before.png)

##### After - viewing details of registration, for a user with multiple registrations

![After changes were made to registration details page, for a user with multiple registrations](/register-for-an-npq/registration-funding-status/single-reg--after.png)

![After changes were made to registration details page, when user has no course status](/register-for-an-npq/registration-funding-status/single-reg3--after.png)

##### After - single registration

![After changes were made to single registration page](/register-for-an-npq/registration-funding-status/confirmation-message--after.png)