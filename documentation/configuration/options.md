---
id: options
title: Configuration options
description: "Configuration options"
---

:::info
_This page assumes that you have already finished the [initial configuration](/docs/configuration/basic)_
:::

## In your Home Assistant UI go to the Integrations panel

[![Open your Home Assistant instance and show your integrations.](https://my.home-assistant.io/badges/integrations.svg)](https://my.home-assistant.io/redirect/integrations/)

## Select "Options" on the card for "HACS"

![image](/img/option1.png)

## Options

![image](/img/option3.png)

- `Side panel title`: The name/title you want to display for HACS in the sidebar.
- `Side panel icon`: The icon you want to display for HACS in the sidebar.
- `Number of releases to show`: Number of releases to show in the dropdown.
- `Filter with country code`: Only show repositories for your country (if the repository has information about that).
- `Enable AppDaemon apps discovery & tracking`: Enables [AppDaemon](/docs/categories/appdaemon_apps).
- `Enable NetDaemon apps discovery & tracking`: Enables [NetDaemon](/docs/categories/netdaemon_apps).
    - NetDaemon apps is deprecated and will [deprecated](/docs/categories/netdaemon_apps#deprecation-notice) and will be removed from HACS.
- `Enable experimental features`: This enables experimental features in HACS.

:::note
When changing the toggle for experimental features, you need to restart Home Assistant and clear the browser cache when it has fully started for it to properly be changed.
:::

## Click submit and wait for confirmation

_This will reload HACS and your changes will be reflected when you see the confirmation._

![image](/img/option4.png)
