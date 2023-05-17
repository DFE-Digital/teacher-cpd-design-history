---
title: Improve API guidance for lead providers 
description: A content review and restructure of all API guidance in line with new and updated API v3 functionality. Deployed in May 2022
date: 2023-05-15
---

# Improve API guidance for lead providers 

## Why we decided to iterate  
 
### Guidance was needed to support API v3 integrations  

ECF and NPQ lead providers have integrated their CRM systems with the Manage CPD API. API version 1.0.0. and 2.0.0. have worked well in facilitating ECF and NPQ data and payment management.  

In line with provider feedback and the DfE’s commitment to continual improvement, a new API version 3.0.0. has been co-designed designed with providers. The scope of its functionality has been extended, with existing endpoints updated and new endpoints added.  

Providers have been invited to update their system integrations to make the most of improved functionality and processes. Guidance is required to support providers through the update.  

Note, the DfE will continue to support providers using v1 and v2. 
  
### Content was out of date

The original API guidance was published in 2021. Since then there have been multiple API updates and improvements.  

The team’s priority has been to focus on API operation and functionality. This focus had meant that the supporting documentation and guidance had become out of date. Content had become inaccurate; there were multiple broken links; naming conventions and information architectures required updates line with GDS standards. 

### Guidance was needed to support multiple users

Since launching the Manage CPD service, an appreciation and understanding of the multiple people involved in participant data and payment management has grown.  

Systems integrated with the API are used with by various people including: 

* digital team administrators 
* data officers  
* technical leads 
* contracts managers 
* programme, project and delivery managers 
* customer service advisors and managers 

Therefore, any new and improved API guidance must be accessible to, understood and adopted by different types of users. Users who were less technically knowledgeable needed not to be intimidated by the content, and should be easily able to navigate to the guidance they were looking for. 

## What we did   

* **Requirement gathering** - We spoke with DfE digital teams to understand the most common issues providers reach out about. We ran user research sessions with lead providers to understand their CRM processes and API related pain points and how improved guidance could help 
* **Co-design sessions** - We shared draft API specs for new and changed endpoints with providers, iterating upon their feedback, making note any areas of confusion where guidance could improve comprehension
* **Content review** - The content was redrafted in its entirety. Language was simplified and consistent content and information structures were implemented. Examples below.
* **Code review** - HTML was converted to markdown to simplify the code  
* **Process review** - Content maintenance processes were agreed, allowing content designers the ownership of content updates using Visual Studio Code 

### Standardised ECF and NPQ content structures 

#### Before   

![Screenshot of the original menu structure and title headings](/manage-cpd-delivery/updated-api-guidance/01-original-menu-structure.png) 

#### After

| H1      | H2      | H3     | 
| -------- | --------  | --------  | 
| {programme} management    |       |       | 
|       | Definitions and states      |       | 
|       |       | Key concepts      | 
|       |       | Data states     | 
|       | Guidance      |       | 
|       |       | Overview of API requests     | 
|       |       | {thematic task-led sections}       | 
|       | Schedules and milestone dates|       | 
|       |       | Key concepts       | 
|       |       | {programme specific schedules}       | 

![Screenshot of the new ECF menu](/manage-cpd-delivery/updated-api-guidance/03-ecf-menu.png) 

### Instructive headings   

#### Before 

* Continuing the ECF registration process 

#### After  

* View and update participant data 

## What we learned  
  
### Technical content requires ownership  

While the team’s priority is to ensure the operation of the API service, appropriate time and resource must be given to guidance updates, iterations and user interfaces. 

As with any other online content, an agreed strategy must be in place for content management. This responsibility sits most easily with the content designer, who can assess whether content is needed, in what format, and where it should be added. 

### Co-design with providers benefits all parties 

As the Manage CPD service continues to improve, we have found that working closely with providers, researching with users at different levels, from developers to non-technical support agents, has been incredibly insightful, efficient and productive. 

We have been able to identify and solve problems for all kinds of users, including DfE contract management and support staff.  

The original API service was launched at pace and before all real-world operations, behaviours and requirements were known. As user needs and requirements have emerged, original data models and APIs have been transformed.  

## Next steps   

Interactive components will be added to the content. This will likely include accordions, to allow content sections to be more easily scanned with irrelevant instruction hidden.  

The team will continue to balance continuity of service with agile iterations to satisfy unmet needs. An unchanging API risks being an unused API. 

### LPDOB design team  

* Tom Hall – product owner
* Hazel Yule - content design  
* Kerry Baugh - user research
* Abeer Salameh - LPDOB tech lead 
* Mooktakim Ahmed - developer
* Leandro Costantini - developer
* Peter Yates - CPD tech lead