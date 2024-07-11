---
title: Deciding what to build for the initial release of ECF 2
description: "What we want to build to replace and improve the digital services that facilitate the early career framework (ECF) policy reforms"
date: 2024-07-11
---

## What we've been working on

Over the last two months, we have been working on a discovery to explore the biggest problems in the existing digital services that facilitate the early career framework (ECF) policy reforms.

As part of this work, we had to define the minimum viable product for what we need to build to replace them. The minimum viable product, or MVP, is what we need to build for the new services, before we can initially release them. In this context, it's the minimum we need to make the services usable and fulfill their core purposes.

We need a MVP because it's impossible to address all the problems or build all the solutions at once. It's better to release something early that users can test, which we can then improve. The smaller this initial release, or MVP, is, the sooner we can do this.

Other new features and iterations will come to these services in the future.

The services we considered in our discovery included:
* Manage training for early career teachers
* The lead provider API and its documentation
* Internal finance and support tooling for DfE colleagues
* Check data for appropriate bodies
* Check data for delivery partners

Another design history will detail the problems we discovered and potential ideas to address them.

Here, we'll define what we currently think we need to build for the initial release of the new digital services for ECF.

## How we decided what we would include in the MVP

We decided what we needed to include for the MVP for the new digital services by considering:
* what the current ECF services do
* the core purposes of the ECF digital services
* our ideas for improvements to these services based on the problems we discovered
* how we could increase flexibility, self-sustainability and autonomy for these services

## The MVP for the new digital services for ECF 

We've aligned everything we want to do or build for MVP to the core purposes for [Teacher Continuing Professional Development programme](https://teacher-cpd.design-history.education.gov.uk/cross-programme/our-refreshed-vision/).

Here is a map showing what we hope to build for the MVP of the new digital services.

![A map showing what we want to build for the MVP of the new digital services. It includes building a new Lead Provider API, a database just for ECF with an improved model, a service for appropriate bodies to check training data, joint support and finance tooling for internal users and a service for schools to register early career teachers and mentors.](/ecf-2/initial-release-of-ecf-2/mvp-map.png)

### Capture and manage the data to enable teachers and leaders to take up ECF programmes 

To meet this purpose in our initial release, we will: 
* Build a more intuitive journey in the digital service for schools to register ECTs and mentors with DfE, that also helps them understand their ECF responsibilities  
* Build an improved and simplified data model for a separated database from NPQ that better represents reality (e.g. participants that span multiple contracts)  
* Build an easier way for schools to access the service (e.g. DFE sign in)  
* Migrate and clean the data we need to sustain the registration and training of ECTs and mentors  
* Create improved API documentation for lead providers in the style of NPQ  
* Build a service for appropriate bodies to check their training data 
* Create improved ways for schools and lead providers to make changes to ECT and mentor records, rather than support or developers  
* Include in the data model reliable tracking of more changes to data, such as eligibility for training or funding 
* Create an API for lead providers with the same endpoints, so we don't cause too much work for them  
* Build improved support tooling and processes, in the same place as finance tooling
* Make changes to the services to follow changes to ECF policy in 2025  
* Enable grant funding to schools to backfill mentors while they are completing training

### Capture and manage ECF data to facilitate payments to providers and enable effective contract management 

To meet this purpose in our initial release, we will:
* Build a way for payments to be calculated for lead provider training, so lead providers are paid the right amount  
* Improve the validation rules over the lead provider API, so data can be submitted efficiently  
* Apply the simplification for contracts for 2025, so we're up to date with current ECF policy  
* Build improved internal tooling and processes for finances that works with other support tooling  
* Show the right data over the Lead provider API, e.g. induction start date, whilst maintaining backwards compatibility  
* Give a specification of API changes to lead providers, so they're informed of what we hope to do

### Capture and manage ECF data to monitor impact of policy and programmes 

To meet this purpose in our initial release, we will:
* Create success metrics for the services with the Data Insights team
* Create an improved data model which is easier to query to monitor impact  
* Use tools to help us measure and visualise data for how the service is used

###  Inform users about DfE-funded ECF programmes 

To meet this purpose in our initial release, we will:
* Create a communications plan to inform users of the changes in ECF 2 and how to access the new service  
* Improve the naming of the services, their start pages, how they are separated and any key terms within our remit  
* Plan communications incorporating what is already done for ECF 1 and the Lead Provider API to ensure registration of early career teachers and payments to lead providers continues to be successful  
