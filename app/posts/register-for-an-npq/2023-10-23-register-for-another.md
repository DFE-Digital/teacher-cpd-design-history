---
  title: Register for another NPQ - improving signposting 
  description: Changes made after receiving support requests from users struggling to register for another NPQ, who have previously registered. 
  date: 2023-06-01
  related:
    items:
    - text: Jira ticket
      href: https://dfedigital.atlassian.net/browse/CPDNPQ-1321
     
---

### The problem

People with existing registrations are unsure how to register for another. 

We received some support requests where users think using the ‘register for an NPQ’ button in the account area will either:

- overwrite their existing registration 
- or, use the same provider or course for the new registration 

And, once they get into the registration flow, on the ‘Have you already chosen an NPQ and provider? (yes/no)’ question they are answering no because they think picking 'Yes' will use the details from the other registration. They are then getting stuck in a cycle and not managing to register. 

We discovered a looping problem when users are signed in that could be accentuating this problem. If you have logged into your account and are viewing your previous registrations. Then use the 'Register for an NPQ' link in the header you are taken to the start page. Then you go to the 'your signed in to DfE Identity' blue page and then back to your previous registrations. So the only way to register for another is to use the button at the bottom of the NPQ account page.

### Design changes 

#### For 1st iteration

1. Update the content for the heading and button to 'Register for **another** NPQ'

2. Add a dividing line above the button block 

3. Remove ‘already’ from the question ‘Have you already chosen an NPQ and provider?’ 

4. When in the account area, change the URL of the link in the header ‘Register for a national professional qualification’, so it goes to the same place as the button 

5. For people with existing NPQ registrations, add a link to the header called ‘NPQ account’ which goes to the account area. This will show at all times while they are logged in, the same as the DfE Identity account link. 

6. Update page title for account pages so the browser bar references reflects the page and helps a user with navigation. Currently is is just 'Register for a national professional qualification' for all the account pages. 

- For multiple registration page - ‘Your NPQ registrations - Register for a national professional qualification’ 
- For registration details ‘Your registration details - Register for a national professional qualification’ 


#### For consideration later, if we are still getting support requests 

- Adding a button near the top of the registrations account page, like this (if we do this we’d most likely remove the block at the bottom of the page) :

- Re-jigging the order of questions in the flow, so the chose NPQ and chose provider questions come near the start. This would allow us to remove the ‘Have you already chosen an NPQ and provider?’, which is potentially causing confusion. Only 7% answer ‘No’ to this question. 

---

## Screenshots

### 1 + 2. Button block

#### Before changes were made

![Before changes were made to button block](/register-for-an-npq/register-for-another/updated-button-block.png)

### 3. Chosen an NPQ and provider question 

![After changes were made to NPQ and provider question](/register-for-an-npq/register-for-another/updated-question.png)

### 4 + 5. Header changes  

![After changes were made to header](/register-for-an-npq/register-for-another/updated-header.png)

### 6. Page title (browser bar)

![After changes were made to page title for account page](/register-for-an-npq/register-for-another/updated-browser-bar--account.png)

![After changes were made to page title for registration details pages](/register-for-an-npq/register-for-another/updated-browser-bar--registration-details.png)