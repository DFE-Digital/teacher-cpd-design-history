---
title: Making it easier to find your workplace
description: Replacing a two-step journey with just one step.
date: 2025-11-05
related:
    items:
    - text: See how we’re building this 
      href: https://github.com/DFE-Digital/npq-registration/pull/3002
---

## User need

I need to find my workplace easily so that I can register for an NPQ without contacting the support desk.

## Current journey

Users need to answer 2 questions to find their workplace. 

![Screenshot showing the first question.](/register-for-an-npq/2025-11-05-find-your-workplace/question-one.png "We ask for your postcode in the first question.")

![Screenshot showing the second question.](/register-for-an-npq/2025-11-05-find-your-workplace/question-two.png "The second question has a drop-down list filtered based on the postcode you entered.")

## Problem

The most common issue reported to the support desk is that users cannot find their workplace.

## Hypothesis 

> If we remove the first question, users will be able to find their workplace more easily.

There’s evidence to suggest that users cannot find their workplace from the drop-down list because they did not enter their postcode correctly.

12% of users go back to the first question, suggesting that the postcode they provided did not return the desired results.

This could be caused by issues such as typos or the fact that some schools have multiple sites with different postcodes. Entering the wrong one may not return the correct result.

## New journey

![Screenshot showing how we’re replacing 2 questions with just one.](/register-for-an-npq/2025-11-05-find-your-workplace/new-question.png "We're replacing 2 questions with just one.")

This approach is tried and tested, as other services in Schools Digital ask the same type of question using the same school data.

### Journey without JavaScript 

The drop-down list uses JavaScript, but users can still find their workplace if they have Javascript disabled.

![Screenshot showing how we ask for your workplace without JavaScript.](/register-for-an-npq/2025-11-05-find-your-workplace/workplace-question-javascript-disabled.png "Users with Javascript disabled enter their workplace name.")

![Screenshot showing how we use radio buttons instead of a drop-down.](/register-for-an-npq/2025-11-05-find-your-workplace/radio-buttons-javascript-disabled.png "Users select the school they’re searching for.")

## Considerations

Because we no longer ask users to filter by postcode first, some people may see a longer drop-down list in the new user journey.

For example, there are many schools with names like ‘St Mary’s’ which could make the list appear long or harder to scan at first.

To help with this, users can narrow down the results using any combination of postcode, workplace name, URN, or street name. We’ve also added the option to search by URN, giving users more flexibility in how they find the correct school.

This approach follows a familiar pattern where users begin typing and the list refines as they go, so we expect most users will understand how to interact with it.

![Screenshot showing the content in the details component](/register-for-an-npq/2025-11-05-find-your-workplace/find-school-help.png "We’re keeping some extra help text on the page for now, but we’ll review this later.")

## Next steps

We plan to:

* work with internal teams to quality assure the updated service
* deploy this change during a quiet period so that we can monitor any issues with minimal user impact
* start monitoring how people search in the drop-down box
* work with the support team to identify patterns in reported issues
* improve the content and design patterns based on findings
* improve how users can search — for example using 'st' and 'saint' interchangeably

This change focuses on simplifying the main user journey, reducing the number of steps and potential points of confusion. There’s more work to do on the content and design patterns, which we’ll address in the next iteration.