---
  title: Registration status – updates
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
- The registration status gave no explanation for the status.

> I dont know what targeted or scholorship funded is? Terminology used to be 'fully funded' or 'DfE funded'.

### Design changes 

The changes listed below were guided by an [existing document](https://educationgovuk-my.sharepoint.com/:w:/r/personal/emma_frith_education_gov_uk/_layouts/15/Doc.aspx?sourcedoc=%7B677CC74F-A4FF-456B-B9D8-FCF72B4E5E39%7D&file=NPQ%20funding%20scenarios%20-%20content%20review.docx&action=default&mobileredirect=true&cid=09bb19ae-2127-406d-a040-449b0073010d), which outlines the different funding scenarios and shows the content used in each scenario (on outcome pages and in emails). The same or similar content was used to keep the service consistant and avoid confusion for users. 

1. Different versions of the registration page (the landing page for users who have already registered for an NPQ) have been created, showing the different possible funding statuses a user would see. 

2. The status names have been updated to reflect the langauge used on the outcome pages during the registration flow. They are now: 
  - Eligible 
  - Not eligible 
  - Eligibility in review 

3. Additional text has been added below the status to explain what it means for them. For Not eligible we also show the reason they are not eligible. This uses the same language as in the registration flow but a shorter version. 

4. We only show the row for Targeted support funding if the user is eligible. This matches the registration flow. We believe users are not that aware of this funding and that it would be confusing to show this information if they are not receiving it. 

[See screenshots further down this page](#1.-funding-status-1)

## 2. Provider details 

### The problem
- Users had different interpretations of what 'pending' meant, as a status under 'Provider application'.
- Users wanted to know what else needed to be done or if it was out of their hands. 

Pending can mean a variety of things and was being used when we didn't have a definite alternative status e.g. accepted or rejected. We are unable to get a status for every point on the journey e.g. application submitted. This leaves the status with too many potential options and unknowns and doesn't give the user clarity on what to do next. 

### Design changes 

1. Provider status has been removed throughout to avoid confusion for users. We often would not have an update to provide to users, so the status could be inaccurate. 

2. The provider details table has been removed. With the removal of the status, there was only the provider name remaining in the table. This is directly linked to the course details, so it made sense to combine these tables. 

3. Information has been added beneath the Registration status reminding users to apply with provider. As there is no provider status to nudge users if something needs doing, we still need to make it clear that their application has not been sent. 

4. Change links for 'Change course' and 'Change provider' has been moved to the associated row.

5. Making the multiple registrations page more consistent:

- Changing 'created at' column name to 'Submitted'
- Changing 'Lead provider' column name to 'Provider'
- Pluralising page title 'Your registrations'
- Right aligning 'more details' links

[See screenshots further down this page](#2.-provider-details-1)

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

#### Provide and course details on a single registration

##### Before

![Before changes were made to single registration](/register-for-an-npq/registration-funding-status/provider-details--before.png)

##### After

![Course details table on single registration](/register-for-an-npq/registration-funding-status/provider-details--after.png)

#### Multiple registration page

##### Before

![Before changes were made to multiple registration](/register-for-an-npq/registration-funding-status/multiple-registrations--before.png)

##### After

![Multiple registrations page](/register-for-an-npq/registration-funding-status/multiple-registrations--after.png)