---
title: Updating financial statements to reflect mentor funding changes
description: We've updated the provider payments financial statement template.
date: 2025-03-17
---

## Background

We’re changing the way we fund training for mentors. These changes, which are being introduced for contracts that start in the 2025/26 academic year, must be reflected in the financial statements outlining payments to lead providers for training early career teachers (ECTs) and mentors. 

DfE contract and funding managers use a digital version of the statements within their admin portal to help ensure accuracy and transparency in funding allocations. They share PDF copies with lead providers after payments have been approved. 

## Current design

We prepare statements for each lead provider in line with their regular payment dates. The existing template includes:  

* headline figures such as the total payment the lead provider will receive and the overall number of participants that have been declared for each stage of training
* payments made to training providers are based on the outputs of the training they deliver. Since ECT and mentor prices are the same, the displayed output payments information does not distinguish between the two participant types
* additional payments made to the standard funding rates. These "uplift" fees are typically added to account for specific circumstances, such as increased costs or additional support needs during the training process
* "clawback" fees. These typically happen when a provider fails to deliver on agreed targets or milestones, or if there is an overpayment
* additional adjustments. This is where custom figures can be added by finance managers if necessary
* a contract information summary tailored to each lead provider
* a calculation errors disclaimer

### Current design for the top section of the financial statement  

![Screenshot of the current financial statement template](/manage-cpd-delivery/updating-financial-statements-to-reflect-mentor-funding-changes/screenshot-current-design.png)

## What needed to change  

For the statements covering contracts that start in the 2025/26 academic year onwards, we had the following requirements to ensure the updated design reflects the new pricing model. 

We had to: 

* split ECT and mentor output payments and clawbacks to show the new values and payment breakdowns. Although this sounds simple, a new table would need to be created behind the scenes to support the updated mentor price, separate from the current contract
* change the heading because the early career framework will now be known as the early career teacher programme

We also needed to remove: 

* service fees for mentors. Going forward, payments for mentor training will be 100% output fees
* the Band D column from the payment bands because it's not being used for the 2025/26 academic year
* "retained" figures for mentors because there’ll only be 2 mentor declarations ("started" and "completed") rather than 6 from the 2025/26 academic year onwards
* uplift fees because these additional payments will no longer be included 

## What we did

We initially considered separate statements for ECTs and mentors, but after testing with contract and funding managers, they preferred keeping everything on one statement for easier process management. 

In response, we designed a single statement with separate data for ECTs and mentors, using dummy figures for more realistic testing. 

### Initial financial statement template redesign

![Screenshot of initial financial statement template design](/manage-cpd-delivery/updating-financial-statements-to-reflect-mentor-funding-changes/screenshot-initial-design.png)

After more testing, we refined the design by: 

* splitting out the declarations summary data in the 'Totals' section into its own table to reduce clutter. This makes it easier to scan the information and clearly distinguish between ECT and mentor declarations
* replacing the 'Adjustments' section with separate 'Clawbacks' tables for ECTs and mentors. 'Clawbacks' is more descriptive and accurately reflects the information being displayed
* changed the ‘Contract information’ link text to the more accurate ‘Provider targets (per academic year)’

### Final financial statement template design

![Screenshot of iterated financial statement template design](/manage-cpd-delivery/updating-financial-statements-to-reflect-mentor-funding-changes/screenshot-final-design.png)

## What we learned
 
The collaborative approach we’ve taken has resulted in the updated financial statement designs being tailored to the needs of our users. Sticking to a single statement rather than splitting them out has also meant that we’ve avoided needing to use a lot of developer time to go from design into production.  

## Design team  

* Mark Avery - content designer  
* Abeer Salameh - tech lead
* Andy Crawshaw - business analyst
* Shahad Rahman - product owner
