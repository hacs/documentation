---
id: diagnostics
title: Diagnostics
description: "How to get HACS diagnostics"
---

:::note

If you configured HACS with YAML, you do not have this option.

:::

Starting with Home Assistant 2022.2 integrations can now provide a diagnostics dump, HACS have this implemented.

The diagnostics dump is a JSON file with information about your installation, this is useful to upload to GitHub when creating issues.
To get the diagnostics dump for HACS do the following:

1. First to the integrations dashboard in the Home Assistant UI

  [![Open your Home Assistant instance and show your integrations.](https://my.home-assistant.io/badges/integrations.svg)](https://my.home-assistant.io/redirect/integrations/)

2. Then click on the 3 dots in the bottom right corner of the card for HACS, and select "Download diagnostics"

  ![download diagnostics](/img/download_diagnostics.png)]


This will download a file with `json.txt` file ending to the computer you are doing this from (usually the downloads directory), this file can be pasted or dragged into GitHub issues.