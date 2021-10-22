---
title: Decoupling international and non-teacher journeys
description: Avoid the complexity of non-teacher to ship international
date: 2021-10-22
related:
  items:
  - text: Prototype PR
    href: https://github.com/DFE-Digital/npq-prototype/pull/9
  - text: First iteration PR
    href: https://github.com/DFE-Digital/npq-prototype/pull/10
---

When we [coupled international and non-teacher journeys together](/register-for-an-npq/international-and-non-teacher/) we believed the non-teacher case to be simple. Anyone who was not a teacher or school leader would not be eligible for DfE scholarship funding. We could put non-teachers through the same journey as international.

Non-teacher is actually more complex, eligibility is not based purely on if someone is a teacher or school leader.

People who might also be eligible include:

- central staff at multi-academy trusts (MATs), who might not strictly be in a school setting
- staff at other educational settings, such as teaching school hubs or SCITTs

We [attempted an iteration](https://github.com/DFE-Digital/npq-prototype/pull/10) where instead of asking if they were a teacher we asked if they worked in a school or college, another educational setting, or did not work in education. The thinking being that we would capture roles and settings and defer decisions about DfE scholarship funding to support.

## Descoping non-teacher

While we wait for clearer rules about eligibility we are descoping ‘non-teacher’.

This means:

* we drop the “are you a teacher?” page to decouple the non-teacher journey
* rename “where do you teach” to “where do you work” (page title and on check answers page) so we do not accidentally exclude school leaders with our language
* everything else should stay the same (ie if international we show different TRN guidance, we ask nino question, we skip school journey, we ask about funding)
