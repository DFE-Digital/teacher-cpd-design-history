---
title: Included targeted delivery funding on NPQ financial statements
description: New line items added to NPQ financial statements for the 2022 cohort onwards. Deployed in December 2022
date: 2023-01-09
related:
  items:
  - text: Mobile optimisation for financial statements
    href: /support-for-cpd/mobile-optimisation-for-financial-statements/
---


## Why we decided to iterate

### Additional funding should be clearly visible to users

From autumn 2022, updated CPD policy provided state-funded schools additional funding for each teacher or leader employed who take a National Professional Qualification (NPQ) course. This targeted delivery funding aims to help teachers and leaders in smaller settings who may find it harder to engage with professional development.<sup class="reference"><a href="#cite1">[1]</a></sup>

NPQ financial statements, which inform payments made to NPQ lead providers, needed to include explicit mention of targeted delivery funding. Our aim was to iterate on existing NPQ statement designs, adding line items as required.


## What we did

1. Requirements were gathered from finance teams (who manage and process payments) and contract managers (who manage relationships with lead providers). 
2. Targeted delivery funding was added as a line item to the statement summary field, as well as within each NPQ course table. Details include the number of declarations eligible for TDF, the payment per participant and total value to be paid.
3. Targeted delivery funding clawbacks were included in statement designs to allow for new functionality: 1. If a provider voids a ‘started’ declaration which has already been paid, then the output payment and any TDF payment will be clawed back on the next output statement. A clawback row for TDF will appear on the next statement. 2. If a provider voids a ‘started’ declaration that qualifies for TDF but has not been paid, then the output and TDF fee will be nulled.
4. The CSV extract (available to download from each statement) contains a new column called ‘Targeted Delivery Funding’. 
5. Content and UI refinements were also included as quick wins: 1. References to 'trainees' became 'participants' in line with UR findings (qualified teachers well into their careers felt ‘trainee’ did not apply to them). 2. Custom table headers were created for a more user-friendly experience. 3. NPQ course names were corrected in line with policy guidance.

## What we learned

### The need for standardisation

This work highlighted the need for a more holistic review of financial statement designs. As there are many lead providers who provide both ECF and NPQ training, it seems sensible to align financial statement designs where possible, and therefore increase usability and reduce potential risk of confusion. 

## Next steps 

The UCD team will continue iterating on statement designs to allow for new functionality and standardisation across both ECF and NPQ. This will include the functionality for contract managers and finance teams to add adjustments.

## Screenshots

Below is a screenshot from the development environment. Please note, all sensitive data has been anonymised.


<img src="/support-for-cpd/2023-01-09-targeted-delivery-funding-included-on-npq-financial-statements/img-1-anim.gif" alt="">


#### Citations

<p class="govuk-body govuk-!-font-size-14"><cite>1. <a id="cite1" href="https://www.gov.uk/government/publications/national-professional-qualifications-npqs-reforms/national-professional-qualifications-npqs-reforms#:~:text=for%20more%20information.-,Targeted%20support%20funding,employ%20who%20takes%20an%20NPQ%20" rel="noreferrer noopener" class="govuk-link" target="_blank">Guidance - National professional qualifications - NPQs (opens in new tab)</a></cite></p>

#### LPDOB design team

- Hazel Yule - content design
- Darren Courtney - interaction design
- Kerry Baugh - user research

