---
title: Playback answers on validation
description: Help users recover from mistakes
date: 2021-10-07
---

If we playback the answers a user has given on our validation failed page, they can more easily see if they have made a mistake.

We’ve split this into two stages to release:

1. Add the details
2. Refactor out the multiple buttons into a single question with a Continue button

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
      text: "Cannot find your details",
      img: { src: "01-cannot-find-your-details.png" }
    }, {
      text: "No National Insurance number given",
      img: { src: "02-no-nino-provided.png" }
    }, {
      text: "Next iteration",
      img: { src: "03-next-iteration.png" }
    }]
}) }}
