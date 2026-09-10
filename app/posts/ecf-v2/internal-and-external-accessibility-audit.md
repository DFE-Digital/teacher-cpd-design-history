---
title: Internal and external accessibility audit
description: "We carried out an internal and external accessibility audit of the service, detailing how we did it and what we learnt."
date: 2026-09-09
---

## Internal accessibility audit

### Why we did this

We designed and built the service with accessibility in mind from the start, using established GOV.UK patterns and following WCAG (Web Content Accessibility Guidelines) best practice.

To check this had worked as intended, and to help us write an accessibility statement for the service, we carried out an internal accessibility review in February 2026. This covered both:

- technical testing, to check the markup behind the service is built correctly
- usability testing, to see how the service actually performs for people using assistive technology, like screen readers

### How we did it

We used automated scanning tools, such as axe DevTools, to check the service against WCAG standards.

We also carried out manual testing on a set of key user journeys, using keyboard only and VoiceOver, the screen reader built into macOS. The journeys we tested included:

- registering a new early career teacher (ECT)
- assigning a mentor to an ECT
- updating ECT, mentor, and school induction tutor (SIT) details
- reporting that an ECT is leaving a school permanently

We focused on the journeys users use most often. We didn't test every possible journey, and we only tested with one screen reader, so this review won't have caught every issue. Some things may only surface when tested with a wider range of assistive technology.

### What we found

Overall, the service performed well, and the issues we found were mostly small and specific, rather than fundamental problems with how the service is built. They fell into a few broad themes:

**Page titles and error messages weren't always consistent.** When someone submits a form with an error, the page title should change to show this. We found this didn't always happen consistently across similar journeys, which could make it less clear to screen reader users that something needs fixing.

**Some headings weren't structured correctly.** Screen reader users often navigate a page by jumping between headings, so it's important they follow a logical order. We found a few places where headings had been used inconsistently, which could make pages harder to navigate for these users.

**A known issue with an existing GOV.UK component.** We found an issue affecting radio buttons with conditional reveals (where selecting an answer shows an extra question). This is a known limitation of the standard GOV.UK Design System component, already being reviewed by the GOV.UK design system team. We'll keep monitoring their guidance and update our accessibility statement to reflect this as a known issue, rather than making a one off change that moves away from the standard pattern.

**"ECT" wasn't always read out clearly by screen readers.** We use "ECT" as shorthand throughout the service, but found VoiceOver sometimes read it as a made up word instead of three separate letters.

**Some duplication in summary card content.** Screen reader users navigating our summary card pattern have to move through several separate lists to get to different pieces of information, rather than one combined list.

**Repeated instructions in a form label.** On one page, the guidance text above a field was repeated in the field's label, which is unnecessary and adds extra noise for screen reader users.

### What we learnt

None of the issues we found were major barriers, but they reinforced a few things:

- automated tools are a good first check, but they only catch some kinds of issues. Testing real journeys with assistive technology surfaced problems the automated scan didn't
- some issues come from standard GOV.UK components rather than our own code. In these cases, it's often better to flag the issue and follow GOV.UK's guidance, rather than build a custom fix that moves us away from a tested pattern

We raised tickets to fix the issues within our control, and we'll continue to track the ones that depend on wider GOV.UK Design System updates. Since raising those tickets, we've mostly resolved the issues that were raised. We've also updated the accessibility statement prior to release so it is accurate.

## External accessibility audit

After conducting our internal review and resolving issues found, we commissioned an independent specialist to complete an external accessibility audit of our service. They tested 15 pages against WCAG 2.2 Level AA standards, and also worked through key user journeys using a range of assistive technologies to check how usable the service is in practice.

The audit found some accessibility issues, most of which affect people using assistive technologies such as screen readers. A recurring theme was heading structure, with some pages missing a heading level or using text that looked like a heading without being marked up as one, which can make content harder to find and understand for screen reader users. The audit also found that the "Back" link, and some staging and warning banners, weren't contained within an ARIA landmark, making them harder to navigate to. Screen reader testing also picked up on some questions and example answers being announced more than once, adding unnecessary effort for the user.

Overall, the audit found the service to be in a good position, with relatively few issues.

They raised 10 issues in total, however we identified that most of them were false positives, due to testing in the staging environment. In total we worked through 4 issues and resolved them.

As part of the retest, they reidentified the same false positives, as well as picking up 1 new issue and 1 issue that had only been partially resolved.

We've since raised tickets to resolve those issues.
