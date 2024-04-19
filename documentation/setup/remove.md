---
id: remove
title: Remove
description: "Remove HACS"
---

If you want to remove HACS you need to do that using the following steps.

**This should _only_ be done if you are not planning on using HACS anymore!**

1. Use the trashbin icon on the integration page.
1. Restart Home Assistant **important**
1. Restart Home Assistant (yes, this needs to be done twice) **important**
1. Delete the `hacs` directory under `custom_components`.
1. Restart Home Assistant.



# Revoke OAuth access

If you are using HACS with OAuth, you also need to revoke the access to complete the removal.

1. Navigate to https://github.com/settings/applications
1. Find HACS in the list of apps, click on the 3 dots to the right of HACS
1. Select "Revoke"
