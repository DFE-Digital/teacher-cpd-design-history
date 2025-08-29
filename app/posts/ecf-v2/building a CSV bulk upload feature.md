---
title: Building a CSV bulk upload feature for appropriate bodies (ABs) 
description: "The decisions and design process towards enabling ABs to upload multiple induction details at a time"
date: 2025-08-26
---

## Context  
 
In February 2025, the Record Inductions as an Appropriate Body (RIAB) service launched with a manual upload function for claiming inductions and recording induction outcomes, meaning that users had to manually input records one by one. This aligned with the expected low volume of early submissions and supported the delivery timeline. 

We knew that as the end of the 2024/25 academic year approached, that appropriate bodies would need to update multiple inductions at the same time. We needed to decide what was the best way to enable users to update large volumes of records easily and deliver it by June 2025. 


### Background - how appropriate bodies (ABs) previously uploaded multiple outcome records 

In the, now retired, Teaching Regulation Agency appropriate body portal, ABs were able to upload information either via a bulk upload in service, or via a single file transfer protocol (SFTP). This SFTP mechanism worked with a third-party service called ECT Manager. When data was moved away from the Teaching Regulation Agency and into the Department for Education (DfE), we decided not to replicate that SFTP setup for several reasons:  

* outdated Technology: the single file transfer protocol was an outdated method of transferring files and would have required a complex level of development to replicate  

* deadlines: the timeframe for implementation was too tight to allow for such a technically demanding solution 

* lack of consistency with our API-first approach: we use APIs to pass updates between our services and lead providers who deliver early career teacher training (ECTT) 

* lack of functionality: the SFTP mechanism did not support two-way transfer of data between service, or real-time data updates. 


## What we did and why 

We reviewed the functionality of the previous SFTP which enabled users to upload large quantities of data. We conducted desk research and reviewed existing upload features across both the DfE and the wider public sector. The goal was to identify best practices for a user-friendly, efficient system. 
 
A number of existing journeys were analysed. These references provided insight into existing workflows and user expectations:  
 
* GovNotify 

* [Submit an employer intermediary report](https://www.gov.uk/send-employment-intermediary-report)

* [Becoming a teacher](https://getintoteaching.education.gov.uk/) 

* HMRC error handling examples 

* HMCTS draft upload 

* [Check a teacher record](https://www.gov.uk/guidance/check-a-teachers-record)  
  


### Best practice design 

**Choosing CSV as our supported file format**

We decided to **only allow for CSV files** to be supported in the service. This was because: 

* Excel would contain formatting and validation logic that would make it difficult to process the file correctly 

* other Excel formats had processing limitations and did not meet government best practices 

* third-party providers confirmed they could support users exporting data from their services in CSV format 

* using a file format that users were already familiar should reduce errors or support needs 
 
 
## Designing the bulk upload journey 

Based on the desk research and user testing, the agreed best practice for bulk uploads was:  


1. Users would upload a CSV file
    
2. Users would receive a progress screen displaying the live processing of data
 
3. Users would see a summary of the uploaded data with number of ECTs with pass outcomes, failed outcomes and release outcome. At this stage the user would have to confirm the submission of the data 

4. Correct rows would be processed automatically and display in their homescreen 

5. The service would return a CSV file showing only the rows with errors 

6. Errors could then be corrected outside the service and re-uploaded in a new journey 


## User research 

We conducted two rounds of user research with ABs, to test feasibility of initial designs. 

**Round 1** – we aimed to better understand the ‘as-is’ process for ABs and to help identify any dependencies. We also tested users’ understanding of the intended journey, how it would align with their external processes—acknowledging that many relied on 'third-party IT’—and observed how users uploaded spreadsheets to the service.  

We aimed to validate whether releasing the bulk feature in two separate phases (one for outcomes and one for claiming) would meet users’ needs, and to concept-test the design using a CSV file with mock data.  

**Highlights of the user research findings:**  
* users were comfortable and familiar with the proposed csv upload journey 

* users wanted to be able to download exports from third party services to upload them to RIAB 

**Round 2** – the second round of research enabled us to review initial insights from Round 1, and test design iterations on the user journey. We used a task-based prototype test, using the review app and CSV files with mock data. 

We tested users' understanding of error messages in the CSV file, and in the service; we tested their understanding of how to save and upload spreadsheets for bulk upload and validated whether content was clear and helped them complete their task. 

We explored users’ understanding of a ‘partial upload’, where valid rows of data are uploaded immediately and error rows are returned in a CSV file, where the user must correct them, and re-upload the data 

We aimed to understand what happens if a user leaves the service mid-process, which could have significant backend implications. 

### Some insights from the research:  

* identified a need to add a teacher's name in some error messages: since names were not included in the CSV (which only used date of birth and teacher reference number), if one of these columns had an error, users couldn’t identify which record needed attention 

* users often mistook the upload summary page for a confirmation or success page, which required content updates to clarify the status and next steps at that point in the journey 
 

 

 
