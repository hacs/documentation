---
id: remove
title: Remove
description: "Remove HACS"
---

If you want to remove HACS you need to do that using the following steps.

1. Remove the configuration from `configuration.yaml` (if configured with legacy (YAML)) or remove it using the trashbin icon on the integration page.
1. Restart Home Assistant **important**
1. Restart Home Assistant (yes, this needs to be done twice) **important**
1. Delete the `hacs` directory under `custom_components`.
1. Delete all files and directories containing `hacs` under the `.storage` directory.
1. Restart Home Assistant.

When removed the wrong way. An option is to install it again.
Just move hacs back to custom components and reboot. And start the remove procedure again.
