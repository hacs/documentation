---
title: Remove HACS
description: "Step-by-step instructions on removing HACS"
---

If you are not planning on using HACS anymore, you can remove HACS.

## Removing HACS

1. In Home Assistant, go to <!-- hacs:my integrations title="**{{coreui('panel.config')}}** > **{{coreui('ui.panel.config.dashboard.devices.main')}}**" -->.
2. Select the HACS integration and in the three-dot menu (:material-dots-vertical:), select **Delete**.

3. [Restart Home Assistant](https://www.home-assistant.io/docs/configuration/#reloading-the-configuration-to-apply-changes).
4. Restart Home Assistant again (yes, this needs to be done twice).
5. Delete the `hacs` directory under `custom_components`.
6. Restart Home Assistant.



# Revoking OAuth access

1. Navigate to https://github.com/settings/applications.
2. In the list of apps, find HACS and select the three-dot menu.
3. Select **Revoke**.
