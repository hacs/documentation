---
id: translation
title: Translation
description: "HACS Translations"
---

To handle submissions of translated strings we are using [Lokalise](https://lokalise.com) they provide us with an amazing platform that is easy to use and maintain.

![Lokalise](/assets/images/external/lokalise_overview.png)

To help out with the translation of HACS you need an account on Lokalise, the easiest way to get one is to [click here](https://lokalise.com/login/) then select "Log in with GitHub".

When you have created your account [click here to join the HACS project on Lokalise](https://lokalise.com/public/854515055f679055040b37.42677693/).

If you are unsure on how to proceed their documentation is really good, and you can [find that here](https:/.lokalise.com/en/). Or send me a message @ [discord](https://discord.gg/apgchf8) (username: `ludeeus#4212`)

Before each release new translations are pulled from Lokalise, so if you have added something look for it in the next version of HACS.

If you add elements to the UI of HACS that needs translations, update the [`en.json`](https://github.com/hacs/frontend/blob/master/src/localize/languages/en.json) file, when your PR are merged those new keys will be added to Lokalise ready to be translated.
