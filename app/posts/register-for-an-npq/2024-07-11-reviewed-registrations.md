---
  title: Autumn 2024 – Reducing registrations that need to be manual reviewed   
  description: To save policy time were certain registration types that could now receive their funding outcome within the service. 
  date: 2024-07-11
  related:
    items:
    - text: Lucid frame of changes made
      href: https://lucid.app/lucidspark/e33a4231-5282-4a1f-b98d-694b4295d6cc/edit?view_items=z~2kQ7904z5N&invitationId=inv_31cc941f-c63c-4ac5-95fc-2775e26969fc 
  tags:
  - registration flow
  - admin tool  
     
---

## Background

There has always been some routes within the registration service that result in the user receiving an 'in review' funding outcome. This is shown when the service cannot determine if the person should be eligible or not and is then reviewed manually by the policy team. 

Previously, this was the outcome for all users who selected 'other' for 'what setting do you work in?'. With the exception of 'As a lead mentor for an accredited initial teacher training (ITT) provider' which has always received an outcome in the service. 

The policy team have reviewed a large number of registrations with this setting and after analysis the outcomes of those reviews were now confident to give an outcome in the service. 

Around 2.25% of registrations need manually reviewing. This takes the policy team around 5 hours per week. It is estimated that by giving more funding outcomes in the service, policy time spent reviewing would be reduced to 1 hour per week. 

## Changes we made 

Alongside the user-facing changes, we also made updates to the admin tool to help manage the process of reviewing easier for the policy team. 

### Eligibility changes 

For the question 'How are you employed?', when the users chooses: 

- 'In a hospital school' or 'young offender instituation' and chooses the Maths, SENCO, headship or early headship coaching offer courses = eligible for funding. 

- 'Other' = not eligible for funding any NPQ. 

### Recording if a user has been referred by the return to teaching service

These users are eligible for funding for all NPQ courses. 

Previously, users referred by the return to teaching service would answer 'other' to 'How are you employed?' and would their registration would then be reviewed by the policy team. As that route would now receive an automatic not eligible outcome, we needed a way for these users to still be reviewed. 

A new question was added after 'do you work in England?' if the user answered 'yes'. This asks, 'did a return to teaching adviser refer you to this service?'. If a user answers 'no' they continue as normal through the service. If they answer 'yes' they skip all the employment questions and are taken straight to the 'choose an NPQ' question. And receive the funding in review outcome. 

![Screenshot of the new question. It reads "Did a return to teaching adviser refer you to this service?" Followed by a details component, which is closed by default "What is a return to teaching adviser? This is a one-to-one service where an adviser supports you with: finding and applying for teaching vacancies, accessing courses to enhance your subject knowledge or teaching practice". Followed by radio buttons with the options 'yes' or 'no' and lastly, a green 'continue' button.](/register-for-an-npq/2024-07-11-reviewed-registrations/referred-by-rtta.png)

### Changes to help users select the correct options 

Sometimes policy see that users have selected options in the flow that do not match their employment. So we made some changes to make it clearer. These included: 

#### On the 'what setting do you work in?' question

- New hint text under the question to deter users entering inaccurate information about their work setting in order to get a eligible for funding outcome. It was felt this could be more likely when funding places and eligibility was more restricted. 

- New hint text under the 'a school' option. This was added to reduce the number of users who use the 'other' option by mistake. 

- Hint text under the 'other' option has been updated to include more examples and change the order so users don't as easily see 'local authority' listed and use that option by mistake (when they should use 'a school'). 

![Screenshot of the 'what setting do you work in?' question. It reads: "What setting do you work in?", then hint text "You must make sure the information you provide is correct, as your course provider will check your details.". Then radio buttons "Early years or childcare", "A school" with the hint text "This includes local authority maintained schools.", "An academy trust", "A 16 to 19 educational setting" or "Other" with the hint text "For example a virtual school, initial teacher training (ITT) provider (including ITT lead mentors), hospital school, young offender institution or other local authority setting.".](/register-for-an-npq/2024-07-11-reviewed-registrations/setting-question.png)

#### On the 'how are you employed?' question

The content for the 4th radio has changed from 'As a supply teacher employed by a local authority' to be more accurate about the roles this covers. 

It is also hoped this change will reduce the number of users who choose this option when they are not working in a teaching role.  

![Screenshot of the 'how are you employed?' question. It reads: "How are you employed?", followed by radio buttons "In a virtual school (local authority run organisations that support the education of children in care)", "In a hospital school", "In a young offender institution", "As a teacher employed by a local authority to teach in more than one school" with the hint text "This could be as a supply teacher or peripatetic teacher.", "As a lead mentor for an accredited initial teacher training (ITT) provider" or "Other".](/register-for-an-npq/2024-07-11-reviewed-registrations/how-employed-question.png)

#### Employment questions 

Previously, after answering the 'How are you employed?' question (and if their answer was not and ITT mentor) users were asked 'what is your role?' and 'what organisation are you employed by?'.

This has now changed. If they answer: 

- 'In a hospital school' or 'young offender institution', they are only asked 'what organisation are you employed by?'. This is so their organisation can be checked against eligible lists to see if they are eligible. 

- 'Other' they are not asked either question as the registration is no longer reviewed, so we don't require this information. 

## Potential future changes

### Emailing users with their funding outcome
This is currently in progress. Previously, not all users were notified after their registration had been reviewed and a funding outcome was reached. We have now created templates for these emails and hope to automate the sending of these soon. They would give the funding outcome and if they user is not eligible, a reason why (in the same way as the service does). 

### Referred by return to teaching service question
This question is now asked to the vast majority of people completing a registration, however the number of people this is relevant for is low. In future, we could move this question further into the flow. For example, after a user answers 'other' to 'How are you employed?' and before their funding outcome is given. 

### Eligibility and employment questions

We might be able to check within the service whether the organisation for someone who works in a hospital school or young offender institution is on an eligble list, and therefore give a funding outcome within the service.  
