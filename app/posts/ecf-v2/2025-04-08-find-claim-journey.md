---
title: Find and claim journey
description: "How we built the find and claim journeys of the RIAB service."
date: 2025-08-04
---


# Find and Claim Design history 

The record inductions as an appropriate body service (RIAB) was designed to replace the ‘Appropriate Body Portal’ held by the Teaching Regulation Agency (TRA) due to the decommissioning of the legacy Database for Qualified Teachers (DQT). The RIAB service contains part of the data from the DQT (now called TRS) relating to induction periods, but not the overall induction results. 

RIAB allows appropriate bodies to search for an early career teacher’s (ECT) data to check their details against those provided by a previous appropriate body or the ECT themselves. If the details match, the appropriate body can register the ECT with them and begin their induction, this is called ‘claiming’. The ‘find andclaim’ journey then refers to the process of searching for an ECT and registering them with the appropriate body that has done the search.  

## The ‘find and claim’ journey in the TRA AB portal  

The TRA AB portal would allow you to:  

- Search for ECT details by inputting 

    - Teacher reference number (TRN) 

    - Date of birth  

- Clicking ‘claim induction outcome’ 

- Adding  

    - Induction start date – the date the ECT began with the AB.  

    - Induction type, also called programme type – Full induction programme, Core Induction programme or Do it Yourself induction programme.  

### The original TRA claim journey, step by step is as follows. 

![original find claim step 1](/ecf-v2/find-claim-journey/original-find-claim-step-1.png)

[original-find-claim-step-2](ecf-v2/find-claim-journey/original-find-claim-step-2.png)

[original-find-claim-step-3](workspaces/teacher-cpd-design-history/app/images/ecf-v2/find-claim-journey/original-find-claim-step-3.png)

[original-find-claim-step-4](workspaces/teacher-cpd-design-history/app/images/ecf-v2/find-claim-journey/original-find-claim-step-4.png)

## The ‘find and claim’ journey in the RIAB service. Differences and similarities. 


### Differences.  

The existing RIAB ‘find and claim’ journey does overlap with the original ‘TRA AB portal’ service, with the main distinctions that the service uses GOV.UK user interface kit. This change in user interface was made to ensure government services follow accessibility standards and improve user experience. Following the GOV.UK UI kit meant the RIAB service made the following changes:  

- Split the activities of ‘searching for an ECT that the appropriate body has already claimed’ and ‘searching for a new ECT that the appropriate body has the details of (but has not claimed)’.  

- In the original journey, all steps were made in the same screen. GOV.UK UI kit follows a ‘1 action per page’ rule. By implementing it the claim journey is more intuitive.  

- By having the call to action ‘find and claim an ECT’ in the main page you also allow visibility of the ‘claim’ action, which before was hidden in the profile page of each ECT.  

- Created validation logic to avoid overlapping of dates.  

### Similarities. 

This journey asks for the same data as the original ‘claim’ journey as it was important to remain consistent in the data gathering requirements of RIAB service. 

- Induction start date – the date the ECT began with the AB.  

- Induction type, also called programme type – Full induction programme, Core Induction programme or Do it Yourself induction programme. 

The journey maintains the feature of if an ECT is registered with AB, they must be ‘released’ (unregistered) before being claimed by a different AB. This logic is meant to avoid erroneous data in the service, but it often comes at the expense of appropriate bodies, who must contact each other ‘off-service’ if an ECT needs to be released. This logic was not challenged due to time constraints, but it is possible to create logic in which an ECT can be claimed without any restrictions.  

The journey maintains backend logic that stops the ECT to be claimed if they have a prohibition, an alert or an exemption. This check happens through the TRS API. The TRS API allows CPD to access data held about an ECT by the Teaching Regulation Agency.   

- A prohibition would stop a teacher from teaching entirely and it is related to a serious misconduct.  

- An alert would not stop the ECT from teaching entirely but would be raised to the appropriate body and would potentially stop the ECT from being claimed. For example, if the ECT has failed induction.  

- An exemption usually happens if an ECT has completed induction in an offshore institution (for example Guernsey, Jersey) or non-English institutions (for example Northern Ireland, Scotland, Wales), or if the ECT has enough evidence that would suggest they do not need to go through induction.  

Once an ECT has been found and claimed the appropriate body is responsible to track, and support their induction progress up until the ECT finishes their induction and receives an outcome (pass or fail), or changes appropriate body.  

### The claim journey, step by step is as follows. 

[find-claim-step-1](workspaces/teacher-cpd-design-history/app/images/ecf-v2/find-claim-journey/find-claim-step-1.png)

[find-claim-step-2](workspaces/teacher-cpd-design-history/app/images/ecf-v2/find-claim-journey/find-claim-step-2.png)

[find-claim-step-3](workspaces/teacher-cpd-design-history/app/images/ecf-v2/find-claim-journey/find-claim-step-3.png)

[find-claim-step-4](workspaces/teacher-cpd-design-history/app/images/ecf-v2/find-claim-journey/find-claim-step-4.png)

[find-claim-step-5](workspaces/teacher-cpd-design-history/app/images/ecf-v2/find-claim-journey/find-claim-step-5.png)

[find-claim-step-6](workspaces/teacher-cpd-design-history/app/images/ecf-v2/find-claim-journey/find-claim-step-6.png)

[find-claim-step-7](workspaces/teacher-cpd-design-history/app/images/ecf-v2/find-claim-journey/find-claim-step-7.png)
 

 

 

 

 

 
