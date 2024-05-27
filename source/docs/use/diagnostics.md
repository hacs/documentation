---
id: diagnostics
title: Diagnostics
description: 'How to get HACS diagnostics'
---

The diagnostics dump is a JSON file with information about your instance, this is useful to upload to GitHub when creating issues.
To get the diagnostics dump for HACS do the following:

1. First go to the "Settings" in the Home Assistant UI, then "Devices & Services" and the "Integrations" tab in the Home Assistant UI
1. Then click on the entry for HACS.
1. Then click on the 3 dots to the right of the card for HACS, and select "Download diagnostics"

![image showing how to download diagnostics](/assets/images/diagnostics.png)

This will download a file with `json.txt` file ending to the computer you are doing this from (usually the downloads directory), this file can be pasted or dragged into GitHub issues.
