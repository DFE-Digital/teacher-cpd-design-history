---
title: Facilitating participants moving schools during their induction
description: Based on census data, it is estimated that around 10% of early career teachers (ECTs) will move schools mid-way through their induction. As a result, they may need to change their training route and, in many circumstances, their DfE-funded training provider.
date: 2022-09-08
---

## Background 

Based on census data, it is estimated that around 10% of early career teachers (ECTs) will move schools mid-way through their induction. As a result, they may need to change their training route and, in many circumstances, their DfE-funded training provider.

To date we have received almost 200 requests via our helpdesk from schools asking what they need to do if an ECT is moving school. We have found that most of these requests come via the school induction tutor at the ECT’s new school.  

The main volume of requests we have received, and expect to continue to receive, are from ECTs transferring between schools where the provider is the same (forecasted to be over 1,000 ECTs). ECTs often transfer between schools within the same MAT, which are more likely to use the same training provider, or transfer to a school in the same local area. We have also seen significant ‘bunching’ among schools, as most schools locally are partnering with the same provider.  

## What we did
We designed and delivered new journeys in the service to facilitate ECTs and mentors moving schools mid-way through their induction. Although the majority of participants moving schools during their induction are ECTs, we decided to facilitate mentors moving schools as well.

When an ECT or mentor moves school, we needed to: 
- Retain their participant profile so we know what training they have completed, which is captured in the history of declarations received. These are submitted by providers to indicate training completed at key milestones over the course of the two years. 
- Ensure we only pay providers what they are owed for the training they delivered to the participant based on the payment milestones.  

We delivered two journeys in the service: 
- A journey for the school induction tutor to report that an ECT or mentor is moving to another school where they will continue their ECF-based training 
- A journey for the school induction tutor to register an ECT or mentor who is joining their school from another school where they were doing ECF-based training. 

### The journeys we designed and delivered in the service to facilitate transferring participants 
#### Reporting an ECT or mentor leaving their school to join another school 
Even though schools can notify us if they have a participant leaving their school to join another school, they do not have to do this in order for us to successfully transfer a participant to a new school. The majority of requests for transfers that have come in so far via support are from the SIT at the new school. 

From a policy perspective, it is the responsibility of the school at which the ECT is employed to ensure they are doing their statutory induction. This means the new school needs to ensure that the ECT is registered for their induction and can continue their ECF-based training. They are also able to provide the ECT’s joining date, which the old school might not know, as well as other information that we cannot play back to the new school due to data privacy considerations. 

1. When a SIT reports that a participant is moving to another school, the participant is moved into a tab labelled “moving schools” on the ECTs and mentors page. This action has no influence on the new school. 
2. At this point, we send a notification to the ECT or mentor to inform them that they have been reported as leaving. This is to ensure the ECT or mentor has the opportunity to challenge the action in case of error. 
3. We do not notify the lead provider who is training the participant at this stage as the preferred process is for the SIT at the new school to add the participant before a withdrawal takes place. This is to ensure that a participant is not withdrawn prematurely i.e. when a participant is moving schools and staying with the same lead provider. If a participant is withdrawn, it will likely disrupt their training. 
4. On the leaving date supplied by the SIT, the participant is moved into the "not training" tab and given the following status: 'left the school'. However, if the old SIT has not yet informed us that the ppt is leaving, but the new SIT has, the participant will be moved to the “not training” tab on the joining date provided by the new SIT instead. 
5. The participant’s training status will only switch to “withdrawn by provider” when the lead provider has withdrawn them. 
6. The lead provider will only be able to view the declarations that they made for a participant ID. They will not be able to access declarations made by the new provider if a participant changes training provider when they move to their new school. 

[insert screenshots]

#### Reporting an ECT or mentor on the DfE-funded training provider route joining their school from another school 

When a participant is transferring to their school from another school where they started or were doing their ECF-based training, the SIT must register them on the service. As the majority of participants are using the DfE-funded training provider route, we prioritised delivering this feature first. 

1. When they go to add an ECT or mentor, and select that they are transferring from another school, they must enter participant details such as the TRN and date of birth. This is so we are able to locate the existing participant profile and transfer it across to the new school, If we are unable to find the participants existing record, then the participant cannot be added to the new school and the SIT will be directed to the support team for further investigation.This is to avoid the risk of duplication.
2. When a SIT adds a participant who has transferred, a new induction record is created. Given we have been able to match the TRN, this induction record will be attached to the same participant profile, with the same primary ppt ID (though a new ppt ID will be created if there is a new email). Both the participant status and training_status will be set to active. 
3. The participant is moved into the “moving schools” tab on the service until the joining date provided by the new SIT. At this point, we send a notification to the participant to inform them of the transfer. Before their joining date, this will be sent to their email address at their old school and after the joining date it will be sent to their new email address.
4. On the joining date provided by the SIT at the new school, the participant is moved into either the "ECTs" or "Mentors" tab on the ECTs and mentors page. An email is then sent to the old SIT notifying them of the transfer.
5. If the old school has not notified DfE, on the joining date supplied by the new SIT, the participant is moved into the "not training" tab with a 'left the school' status on the old schools dashboard.

Transferring ECTs and mentors can be broken down into the following three scenarios, which we have addressed in this feature. 

#### 1. An ECT or mentor transfers to a school who is training with a different delivery provider and delivery partner to the new schools' default, so changes to match the the new school
- Upon the creation of the new induction record, their record is added to the existing programme at the new school
- The old lead provider is notified via email of the transfer and asked to submit a withdrawal for this participant 
- The new lead provider is notified via email of the transfer and is able to access the declarations submitted for the participant. 
- When the old lead provider withdraws the participant, the old record status remains active, but their training status is set to “withdrawn by provider”. We null the email address and ask the lead provider to remove other participant details.
- The old lead provider will be able to see their own declarations but no further declarations that are made by the new lead provider.

#### 2. An ECT or mentor transfers to a school who is training with a different delivery provider and delivery partner to the new schools' default, and does not change to default school, so continues training with their existing training provider 
- Upon creation of the new induction record, a new relationship with their old provider and induction programme is added. A relationship is like a partnership, but because the new school already has a partnership with a lead provider, the new ECT instead has a ‘relationship’ with a different lead provider who is delivering their training. 
- The lead provider is notified via email of the change of URN and email address.

#### 3. An ECT or mentor transfers to a school training with the same delivery provider and delivery partner as the new schools default, so no change
- Upon creation of the new induction record, a new induction record is created and added to their existing programme.
- The lead provider is notified via email of the change of URN and email address.

[screenshots of the journey]

## Next steps 
- Monitoring the usage of this feature so we can understand what kinds of transfers are being reported and whether the number of transfers is in line with our forecasts.  
- Although we decided to email the providers notifying them of participants transferring schools, this was agreed to be the simplest and quickest solution for our MVP. This notification will be moved to the API in line with other communication and access to information for providers as part of API version 3. 
- Deliver the other scenarios where participants are moving schools who are not on the DfE-funded training provider route or are changing their training route. 
