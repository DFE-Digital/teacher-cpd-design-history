---
title: Removing the name change flow
description: It’s being replaced with contextual guidance
date: 2021-10-07
---

The [existing name change flow](/register-for-an-npq/service-september-2021/#has-your-name-changed) happens at the start of the journey, after we ask a user about their TRN.

Rather than a multi-step journey about whether your name has changed or not, and if you remember whether you have updated it, we’re putting the guidance at the point of use – in the same place that we ask for someone’s name.

By doing this we’re also making the guidance available to a user that is attempting to validate after an initial validation failure.

There are links to the same guidance about:

- requesting a reminder
- changing the name on record

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
      text: "Check your details",
      img: { src: "01-check-your-details.png" }
    }, {
      text: "Changed name guidance",
      img: { src: "02-changed-name-open.png" }
    }]
}) }}
