---
title: Mobile optimisation for financial statements
description: HTML and CSS updates to improve financial statement display across mobile devices. Deployed in December 2022
date: 2023-01-04
related:
  items:
  - text: Targeted delivery funding included on NPQ financial statements
    href: /support-for-cpd/targeted-delivery-funding-included-on-npq-financial-statements
---


## Why we decided to iterate

### Issues affecting responsive display and accessibility

As part of ongoing reviews of interfaces designed for DfE contract management teams who support lead providers, a number of display issues were found on the ECF and NPQ financial statements.

When users sign in to the service to view financial statements on mobile devices, or smaller viewports, they were presented with a broken UI where content was either illegible or hidden.

Our aim was to fix these issues, so that all content is readily accessible across all devices and platforms, providing users with a mobile-friendly experience.


## What we did

1. We fixed the display issues by using Chrome’s dev tools to inspect the live service and write new HTML and CSS media queries.
2. We updated the LPDOB service prototype to reflect the live service. This had, due to the pace of delivery, become out of date. This now allows our team a more efficient workflow between design and development.

## What we learned

### Improved ways of working 

Some UI issues were still showing after the updated code had been published. This happened as the ways of working at the time excluded any official design review post deployment. Our team has since implemented post-dev design checks, which has proven successful and is one of the most valuable outcomes from this work.

### The need for design histories 

This work re-emphasised the importance of keeping design histories up-to-date. While we appreciate this should always be the case, we also understand that pace of delivery and staff turnover affects design history ownership. We want to ensure all significant design decisions are documented and, as new members of the team, we will be advocating for this going forward. 

{% from "govuk/components/inset-text/macro.njk" import govukInsetText %}
{{ govukInsetText({
  text: "For example, during the review we noticed that the ECF and NPQ financial statements had been designed and built independently, each statement using different HTML and CSS code. As no design history had been documented on the rationale for this, it was not clear why there was inconsistency or why they were not designed to be mobile friendly."
}) }}

### Continued iteration 

The overall designs of the current financial statements are still not ideal, both in terms of content and UI. A more holistic statement redesign including a number of improvements is on our road map for 2023.

## Next steps 

The UCD team will be redesigning the statements to allow for new functionality and standardisation across both ECF and NPQ. This will include the functionality for contract managers and finance teams to add adjustments and to view uplifts and clawbacks within monthly statements.


## Issues that were fixed 

Below are screenshots of problems that were identified and fixed with CSS. Please note, all sensitive data has been anonymised.


<div class="govuk-accordion" data-module="govuk-accordion" id="accordion-001">
	<div class="govuk-accordion__section">
		<div class="govuk-accordion__section-header">
			<h4 class="govuk-accordion__section-heading">
				<span class="govuk-accordion__section-button" id="accordion-001-heading-1">
					Hidden content
				</span>
			</h4>
		</div>
		<div aria-labelledby="accordion-001-heading-1" class="govuk-accordion__section-content" id="accordion-001-content-1">
			<p class='govuk-body'>
				Missing CSS media query on container resulting in content being cropped and hidden when viewed on mobile devices.
			</p>
			<p class='govuk-body'>
				Below: mobile view with dark grey box highlighting cropped content that is hidden outside the viewport.
			</p>
			<img src="/support-for-cpd/2023-01-04-mobile-optimisation-for-financial-statements/img-1a.png" alt="" class="outline-no">
			<p class='govuk-body'>
				The updated CSS enables horizontal scroll bars so all the content is viewable including on narrow viewports and mobile.
			</p>
			<br>
			<img src="/support-for-cpd/2023-01-04-mobile-optimisation-for-financial-statements/img-1b.gif" alt="" class="outline-no img-anim"> 
		</div>
	</div>
	<div class="govuk-accordion__section">
		<div class="govuk-accordion__section-header">
			<h4 class="govuk-accordion__section-heading govuk-heading-s">
				<span class="govuk-accordion__section-button" id="accordion-001-heading-2">
					Zero margins
				</span>
			</h4>
		</div>
		<div aria-labelledby="accordion-001-heading-2" class="govuk-accordion__section-content" id="accordion-001-content-2">
			<p class='govuk-body'>
				Incorrect CSS class on container with missing CSS media queries resulting in zero margin in mobile view. This affected all pages.
			</p>
			<img src="/support-for-cpd/2023-01-04-mobile-optimisation-for-financial-statements/img-2a.png" alt="" class="outline-no">
			<p class='govuk-body'>
				Below: margin applied on the container.
			</p>
			<img src="/support-for-cpd/2023-01-04-mobile-optimisation-for-financial-statements/img-2b.png" alt="" class="outline-no"> 
		</div>
	</div>
	<div class="govuk-accordion__section">
		<div class="govuk-accordion__section-header">
			<h4 class="govuk-accordion__section-heading">
				<span class="govuk-accordion__section-button" id="accordion-001-heading-3">
					 Misaligned header
				</span>
			</h4>
		</div>
		<div aria-labelledby="accordion-001-heading-3" class="govuk-accordion__section-content" id="accordion-001-content-3">
			<p class='govuk-body'>
				Incorrect CSS class on header container with inconsistent CSS media queries resulting in misaligned content. This affected all pages.
			</p>
			<img src="/support-for-cpd/2023-01-04-mobile-optimisation-for-financial-statements/img-3a.png" alt="" class="outline-no">
			<p class='govuk-body'>
				Below: the header correctly aligned in any viewport size.
			</p>
			<img src="/support-for-cpd/2023-01-04-mobile-optimisation-for-financial-statements/img-3b.png" alt="" class="outline-no"> 
		</div>
	</div>
	<div class="govuk-accordion__section">
		<div class="govuk-accordion__section-header">
			<h4 class="govuk-accordion__section-heading">
				<span class="govuk-accordion__section-button" id="accordion-001-heading-4">
					 Inconsistent widths
				</span>
			</h4>
		</div>
		<div aria-labelledby="accordion-001-heading-4" class="govuk-accordion__section-content" id="accordion-001-content-4">
			<p class='govuk-body'>
				Missing CSS class on one of the containers resulting in inconsistent select input widths.
			</p>
			<img src="/support-for-cpd/2023-01-04-mobile-optimisation-for-financial-statements/img-4a.png" alt="" class="outline-no">
			<p class='govuk-body'>
				Below: all select elements filling the full width of their container.
			</p>
			<img src="/support-for-cpd/2023-01-04-mobile-optimisation-for-financial-statements/img-4b.png" alt="" class="outline-no"> 
		</div>
	</div>
	<div class="govuk-accordion__section">
		<div class="govuk-accordion__section-header">
			<h4 class="govuk-accordion__section-heading">
				<span class="govuk-accordion__section-button" id="accordion-001-heading-5">
					Incorrect layout (NPQ only)
				</span>
			</h4>
		</div>
		<div aria-labelledby="accordion-001-heading-5" class="govuk-accordion__section-content" id="accordion-001-content-5">
			<p class='govuk-body'>
				Missing CSS media query on CSS Grid resulting in two columns (with one empty), instead of one column in mobile view.
			</p>
			<img src="/support-for-cpd/2023-01-04-mobile-optimisation-for-financial-statements/img-5a.png" alt="" class="outline-no">
			<p class='govuk-body'>
				Below: CSS media queries applied to change the two columns into one when viewed on mobile.
			</p>
			<img src="/support-for-cpd/2023-01-04-mobile-optimisation-for-financial-statements/img-5b.png" alt="" class="outline-no"> 
		</div>
	</div>
	<div class="govuk-accordion__section">
		<div class="govuk-accordion__section-header">
			<h4 class="govuk-accordion__section-heading">
				<span class="govuk-accordion__section-button" id="accordion-001-heading-6">
					Squashed text (NPQ only)
				</span>
			</h4>
		</div>
		<div aria-labelledby="accordion-001-heading-6" class="govuk-accordion__section-content" id="accordion-001-content-6">
			<p class='govuk-body'>
				Poor spacing on CSS Grid and Flexbox resulting in the appearance of squashed looking content.
			</p>
			<img src="/support-for-cpd/2023-01-04-mobile-optimisation-for-financial-statements/img-6a.png" alt="" class="outline-no">
			<p class='govuk-body'>
				Below: CSS media queries applied to add margin spacing between elements when viewed on mobile.
			</p>
			<img src="/support-for-cpd/2023-01-04-mobile-optimisation-for-financial-statements/img-6b.png" alt="" class="outline-no"> 
		</div>
	</div>
	<div class="govuk-accordion__section">
		<div class="govuk-accordion__section-header">
			<h4 class="govuk-accordion__section-heading">
				<span class="govuk-accordion__section-button" id="accordion-001-heading-7">
					Incorrect text alignment
				</span>
			</h4>
		</div>
		<div aria-labelledby="accordion-001-heading-7" class="govuk-accordion__section-content" id="accordion-001-content-7">
			<p class='govuk-body'>
				Numeric CSS classes missing from various table columns resulting in incorrectly left aligned content.
			</p>
			<img src="/support-for-cpd/2023-01-04-mobile-optimisation-for-financial-statements/img-7a.png" alt="" class="outline-no">
			<p class='govuk-body'>
				Below: CSS classes applied to columns containing numeric data resulting in right aligned content.
			</p>
			<img src="/support-for-cpd/2023-01-04-mobile-optimisation-for-financial-statements/img-7b.png" alt="" class="outline-no">
		</div>
	</div>
</div>


#### LPDOB design team

- Hazel Yule - Content design
- Darren Courtney - Interaction design
- Kerry Baugh - User research

