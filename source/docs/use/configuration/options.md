---
id: options
title: Configuration options
description: 'Configuration options'
---

The configuration options allow you to change some settings of the HACS integration, such as the name and icon shown in the sidebar in Home Assistant.

## Changing the HACS configuration options

Follow these steps to change the HACS configuration options.

### Prerequisites

This guide assumes you have completed [initial configuration](/docs/use/configuration/basic.md).

### To change the HACS configuration options

1. In Home Assistant, go to <!-- hacs:my integrations title="**{{coreui('panel.config')}}** > **{{coreui('ui.panel.config.dashboard.devices.main')}}**" -->.
2. Select the HACS integration.
3. On the integration card, select **Configure**.
4. Edit the options.

    - **Side panel title**: The text (name or title) to display for HACS in the sidebar. Defaults to **HACS**.
    - **Side panel icon**: The icon you want to display for HACS in the sidebar.
        - You can use [Material icons](https://pictogrammers.com/library/mdi/).
    - **Filter with country code**: Only show repositories for a specific country (if the repository has information about that).
    - **Enable AppDaemon apps discovery & tracking**: Enables [AppDaemon](/docs/use/repositories/type/appdaemon.md).

    ![Screenshot of the HACS configuration options dialog](/assets/images/screenshots/core/options_flow/light.png#only-light)
    ![Screenshot of the HACS configuration options dialog](/assets/images/screenshots/core/options_flow/dark.png#only-dark)

5. To save your changes, select **Submit**.
    - HACS is being reloaded. Your changes will show after the confirmation message.
6. If you haven't already done so, [setup a backup process](/docs/use/data.md).

