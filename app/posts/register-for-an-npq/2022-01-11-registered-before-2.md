---
  title: Journey for users who’ve registered before (Iteration)
  description: Keep the registration journey very similar, but lock down identity information
  date: 2022-01-11
  related:
  items:
  - text: Prototype PR
    href: https://github.com/DFE-Digital/npq-prototype/pull/22
  screenshots:
    items:
      - text: "Are you [user]?"
        src: 01-are-you.png
      - text: "Yes – Confirm your date of birth"
        src: 03-confirm-your-date-of-birth.png
      - text: "No – Email address associated with someone else"
        src: 02-email-address-associated-with-someone-else.png
      - text: "Are details still correct?"
        src: 04-registered-before-with-these-details.png
      - text: "No – Contact support about changing details"
        src: 05-contact-support-about-changing-details.png
      - text: "Check your answers and confirm"
        src: 06-check-your-answers-and-confirm.png
---

A follow-on from the [original design](/register-for-an-npq/registered-before/).

In this design the following has changed:

- we do not immediately assume the email owner is the person who registered before
- we ask if they are the name on record, then confirm with date of birth
- after confirmation of email and date of birth, we playback their information
- following confirmation of identity, the user continues with most of the questions in the current flow
- they do not see the pages asking about TRN, name, date of birth or National Insurance number

## Video walkthrough

{% from "embed/macro.njk" import appEmbed with context %}
{{ appEmbed({
  youtubeId: 'me4ydWPr-X0'
}) }}

---

## Asking who they are

When we ask who they are, we must use the name they gave during registration, not the name on the DQT record. It's a playback of what they told us, not what information we already had.

## Confirming date of birth

When implementing this check we need to be lenient on formatting – if they previously entered `01-01-1990` but are now giving something like `1-1-90`, those should still match.

We should check a date is valid before checking if it matches.

If the dates do not match our error message should be:

> __The date of birth you’ve given does not match our records__
> Contact our support team if you need help:
> [email]

## Playback of information

We show the information they gave us:

- full name
- TRN
- date of birth
- email address

We do not show their National Insurance number, even if it was given.

## Shared email addresses

We know that users have registered using generic school email addresses such as "head@" or "headteacher@", in these cases the headteacher could leave their job, and a new person join – the new person would get the same email address. If they want to register for an NPQ, they should not see the previous headteacher’s personal details. There are over 200 instances of this.

A similar issue, though a lot less likely, can happen if someone with a common name (for example John Smith) leaves, and someone else with the same name joins and is given the same email instead of a unique one. This will depend on IT policy.

We’ve added the date of birth check as an easy to complete way of confirming they are who they say they are, avoiding immediately showing personal details.

## Asking questions again

Following the confirmation of identity we ask all the same questions again (ie the country they work in, if they work in a school, which school they work in). We do this to cover any edge cases where information could have changed – changes of circumstance, school, course and provider.

### Optimising for repeat use

These questions can be further optimised – for example – if we know they work in a school, and which school they work in, we can ask if they still work there, and skip some of the original questions. But we can deliver this later.
