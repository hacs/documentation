---
id: options
title: Configuration options
description: "Configuration options"
---

:::info
_Finish [initial configuration](/docs/configuration/basic) before you modify HACS options described here._
:::

## In Home Assistant, go to the Settings ➤ Integrations panel

[![Open your Home Assistant instance and show your integrations.](https://my.home-assistant.io/badges/integrations.svg)](https://my.home-assistant.io/redirect/integrations/)

## Select "Options" on the card for "HACS"

![image](/img/option1.png)

## Options

![image](/img/option3.png)

- `Side panel title`: The text (name or title) to display for HACS in the sidebar. Defaults to "HACS".
- `Side panel icon`: The icon you want to display for HACS in the sidebar.
- `Number of releases to show`: Number of releases to show in the dropdown.
- `Filter with country code`: Only show repositories for your country (if the repository has information about that)
- `Enable AppDaemon apps discovery & tracking`: Enables [AppDaemon](/docs/categories/appdaemon_apps)
- `Enable NetDaemon apps discovery & tracking`: Enables [NetDaemon](/docs/categories/netdaemon_apps)
    - NetDaemon apps is deprecated and will [deprecated](/docs/categories/netdaemon_apps#deprecation-notice) and will be removed from HACS.
- `Enable experimental features`: This enables [experimental features](https://experimental.hacs.xyz/) in HACS.

:::note
After you change the setting for experimental features, you must fully reload HACS. Restart Home Assistant and then, once Home Assistant has fully started, clear your browser cache.
:::

## Click submit and wait for confirmation

_This will reload HACS and your changes will be reflected when you see the confirmation._

![image](/img/option4.png)
