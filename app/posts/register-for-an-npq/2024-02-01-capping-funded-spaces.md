---
  title: Capping the number of funded courses 
  description: Designing processes to monitor and cap the number of funded scholarship places paid per recruitment cycle. 
  date: 2024-02-01
  related:
    items:
    - text: Discovery slidedeck 
      href: https://educationgovuk.sharepoint.com/:p:/r/sites/TeacherServices/_layouts/15/Doc.aspx
    - text: Discovery board 
      href: https://lucid.app/lucidspark/2e6101b3-3430-4878-a85d-71972148ba09/edit?invitationId=inv_b0c62b66-c148-4ddb-90af-a1103bdde828&page=0_0#
    - text: Alpha board 
      href: https://lucid.app/lucidspark/57459abf-f45f-49d0-9b59-81d49e0ae49e/edit?invitationId=inv_7c5f8963-7faf-4020-b31f-fa44b6d514f5&page=0_0#
  tags:
  - registration flow 
  - internal processes 
  - provider processes
  - API 
     
---

## Prior to Autumn 2024 funded places were not capped 

Between autumn 2021 and spring 2024 NPQs were funded by the ringfenced Education Recovery budget. There was an ambitious target of 150,000 courses being taken within that period, however demand for NPQs was below the funding available. Therefore, the risk of overspend was low and the need for rigid processes were not required.​

From Autumn 2024, the budget will significantly reduce and need to be managed more closely to ensure there was not overspend. Therefore, we needed to explore ways to do this. 

## We started with a discovery to understand how capped places could be managed

### Goals of the discovery

- Understand the business and user needs of different users in a capped system.

- Understand the benefits, risks and constraints of the approaches to delivery and maintaining a capped service. ​

- Understand the current end-to-end NPQ service how / whether this meets the user needs of a capped system and where changes would be needed​.

- Test the hypotheses of digitally managed capping vs lead provider managed capping​.

- Understand work needed in an alpha to ensure the needs are met.

### What we did 

- We ran sessions with all the DfE teams involved in delivering NPQs to understand their user needs and constraints. 

- From this, we mapped the existing service and highlighted the parts that would need to be changed to support capping. 

- Identified scenarios that would need to be considered and framed these as 'what if' statements. 

- Ran ideation sessions around the 'what if' statements to identify potential solutions, as well as risks. 

- We drew up a number of options, ranging from do nothing digital to a full digital solution. 

- We assessed each option, using criteria we had identified as being important (meets participant needs, ease for providers, move towards automation, achievable by June). We gave a confidence rating of our assessment. 

- From this we gained a decision to go ahead with option 1 - do first digital changes ([see below the areas we identified to change](/register-for-an-npq/capping-funded-spaces/#areas-we-identified-as-a-priority-to-change-for-autumn-2024)). This would be achievable in the timeframe and give us the opportunity to monitor the changes during the first recruitment period, so we could ensure bigger changes were focussed on what was really needed. 

- We looked at the different points that a cap could be enforced (registration, acceptance, start declaration), and the for and against of each. We made the decision to use acceptance due to the limitations of the other two. Capping at either registration or start declarations would require a better understanding of dropout to reduce the risk of under or overspend. 

- Due to commercial sensitivity, we were unable to talk to providers or NPQ participants during the discovery. Conversations were had with providers during Alpha. 

## There were some structures already in place that would help with capping  

- The policy team were working on funding eligibility changes. These changes would help to align the level of demand for funded spaces with the number of spaces available. 

- Contracts define the target number of participants – per provider, per NPQ. 

- There were some clauses in contracts or processes not being used rigidly, as they had not needed to be e.g. around over-recruiting and acceptance dates. 

- Providers already monitor the number of participants applying and how many have been accepted. 

- Contract managers already meet with providers regularly to understand the number of participants recruited and accepted. Targets are reviewed and sometimes updated mid-recruitment cycle. 

- Funding is allocated when a registration is accepted by the provider (via the API).

## Areas we identified as a priority to change for Autumn 2024 

These are now being worked through with all teams and providers involved. 

- Firmed up contracts and acceptance dates.

- New dashboards for contract managers to monitor numbers. 

- Increased monitoring and tracking to allow the NPQ team to assess the first recruitment cycle and where changes need to be made. 

- Increased number of check-ins between contract managers and providers.

- A new ‘funded-space’ field in the database, which providers would will update when they change a participant's status to ‘accepted’. 

- The funded space field allows participants to self-fund even if they are eligible for funding, e.g. if they do not get a funded space.

- The funded space field allows the eligibility outcome to be kept with the registration, to help with reporting. Without this field, the only way to prevent a participant being paid would have been to change their eligibility. 

- Finance statements updated to look at the funded-space field, rather than funding eligibility to ensure payments are only made to those with a funded space. 

- Ways to communicate capping to participants.

![A diagram showing the different actions of NPQ participants, lead providers and DfE throughout a recruitment cycle. Highlighted are the parts that are changing for Autumn 2024, in order to deliver capped numbers of funded spaces.](/register-for-an-npq/capping-funded-spaces/option1-first-digital-changes.png)

## Changes made to the registration service 

1. Funding eligibility rules have been updated.

2. Funding outcome messages updated to mention 'if the provider accepts your application and confirms that you have a funded space, you will not have to pay for the course fees'.

3. Details about what participants can do if they do not get a funded space.  

4. Confirmation email updated to reiterate these messages. 

[See screenshots below of the changes made](/register-for-an-npq/capping-funded-spaces/#screenshot-of-changes-to-the-registration-service)

## Our hypotheses of areas that could be a problem 

- Capped numbers are adjusted more regularly, leading to regular manual updates in the finance app and dashboards.  

- Capped numbers are not kept to, meaning a more rigid cap is needed. For example, through the API or in financial statements.  

- Participants create multiple registrations for the same NPQ to try to get a funded space. We would need to look at better ways to communicate spaces to participants, so they can easily find a provider who has a funded space available.  

- Participants swap providers more often to get a funded space. We may need to update the manual processes currently in place.  

## We will monitor the first recruitment cycle before making further changes

Monitoring the first recruitment cycle will help us understand:

- where the pain points are

- the rigidity or flexibility needed in the process 

- how near providers recruit to caps 

- the level of dropout between registering and starting a course

- the impact on participants.

---

## Screenshots of changes to the registration service  

### Funding outcome messages
![The funding outcome message for when a participant is eligible for scholarship funding. It reads: "You're eligible for scholarship funding for the NPQ starting before November 2024. This means that if the provider accepts your application and confirms that you have a funded space, you will not have to pay for the course fees."](/register-for-an-npq/capping-funded-spaces/funding-outcome--eligible.png)

![The funding outcome message for when a participant's eligibility cannot be determined by the registration service and it is sent for DfE to review. It reads: "Your registration will be reviewed by the Department for Education (DfE) to check if you’re eligible for scholarship funding for the NPQ starting before November 2024. We may contact you to request more information about your registration. If you're eligible, and the provider confirms that you have a funded space, you will not have to pay for the course fees."](/register-for-an-npq/capping-funded-spaces/funding-outcome--review.png)

### Details about what participants can do if they do not get a funded space 
This is shown on the registration details page after the registration is submitted, for participants who are eligible for scholarship funding or their funding outcome has been sent for review. 

![The message shown giving information about what to do if a funded space is not available. It reads: "What if no funded spaces are available with my chosen provider? You can: Register with this provider again at a later date (courses are run twice a year, except for the Early headship coaching offer which varies by provider and is available year-round). Register with a different provider. Explore other payment options, including paying for the course yourself or checking if your workplace or trust can cover the cost."](/register-for-an-npq/capping-funded-spaces/registration-details--funded-space-info.png)
