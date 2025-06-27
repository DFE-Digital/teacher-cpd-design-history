---
title: "Iterating financial statements and how they're accessed"
description: "We've made some design changes to financial statements and how they'll be accessed."
date: 2025-06-09
---

## What we've done
[Financial statements were recently updated](/manage-cpd-delivery/updating-financial-statements-to-reflect-mentor-funding-changes/) to reflect mentor funding changes, and following that we've made some further tweaks to align the pre-2025 contract financial statements with those for contracts that start in the 2025/26 academic year.

We've also redesigned how to navigate to and find financial statements, as well as improving how the PDF save of the financial statement is rendered. Finally, we've also designed to bring financial statements closer to other admin services and tasks.

### Aligning the pre-2025 and 2025/26 onwards statements

As the design of the financial statement was updated to cater for changes to the 2025/26 contract, we've updated the design of the financial statement for pre-2025 contracts to align for consistency. This has included using the same summary table design across both statements.

![Summary table on pre-2025 contract financial statement after redesign.](/ecf-v2/updating-financial-statements/image.png)

### Navigating to financial statements

In the existing service, the finance portal is kept separate from the admin portal which contains the other admin tasks. Finance users would have to login separately and switch across these. We've designed to bring them together under a common admin service. We can accomodate this by adding a 'finance' link to the main navigation.

![Navigation bar example with an additional finance link.](/ecf-v2/updating-financial-statements/image_2.png)

We've also redesigned how users access the financial statement they're looking for. Previously, this required a user to select a lead provider, and we then automatically showed the latest statement for that lead provider to them, with the option to then select a different statement through dropdown options.

We've iterated this to a table format with filters, similar to NPQ. This enables filtering and finding the correct statement, rather than landing on the latest for a lead provider. The filter options may yet be iterated.

![Table with filter options to search and filter for financial statements.](/ecf-v2/updating-financial-statements/image_3.png)

### Updating the PDF design

We've also identified issues with the formatting of the PDF view of the financial statements. This occurs because when the PDF of the financial statement is being saved, we aren't stripping away formatting that should only be present within the web view. This includes the header, footer, links and buttons that are present on the web view.

![PDF view of statement prior to resolving formatting issues.](/ecf-v2/updating-financial-statements/image_4.png)

We've been able to resolve this issue by adding formatting specific to the PDF, which ensures we strip out elements that shouldn't be present on the PDF. This results in a cleaner and more usable PDF export which can be provided to lead providers.

![PDF view of statement after resolving formatting issues.](/ecf-v2/updating-financial-statements/image_5.png)

## Next steps

We've met with assurance and contract management users to discuss our ideas and show them our initial designs. We've had feedback which suggests we've made sensible design decisions, and we're looking to finalise our designs shortly.