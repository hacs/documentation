---
title: Integration
---

Integrations in HACS are community-built integrations.

## Downloading integrations

1. In Home Assistant, open HACS and [filter](/docs/use/dashboard.md#filter) for type *integration*.
2. Select the integration from the list and read their documentation.
3. To download the integration, select **Download**.
    - After download, the **State** changed to **Downloaded** or **Pending restart**.
    - The integration is now added to your [Home Assistant configuration directory](https://www.home-assistant.io/docs/configuration/#to-find-the-configuration-directory), under `custom_components/`. 
4. How you configure the integration in Home Assistant depends on the integration:

    - The integration documentation page in HACS should instruct you how to get started.
    - Some integrations, you can add from the integration page on <!-- hacs:my integrations title="**{{coreui('panel.config')}}** > **{{coreui('ui.panel.config.dashboard.devices.main')}}**" -->.
    - If you select the **Add integration** button and the integration does not show, clear your browser cache to refresh the UI.

        !!! tip

            _This **only** applies for the initial download of that integration. Whenever you update it, you still need to restart Home Assistant before it loads the new files._


## Integrations download location

Any Integration you download with HACS is stored in your [Home Assistant configuration directory](https://www.home-assistant.io/docs/configuration/#to-find-the-configuration-directory), under `custom_components/`.
