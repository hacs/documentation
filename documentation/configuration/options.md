---
id: options
title: Configuration options
description: 'Configuration options'
---

:::info
_Finish [initial configuration](/docs/configuration/basic) before you modify HACS options described here._
:::

## Change HACS options

1. First go to the "Settings" in the Home Assistant UI, then "Devices & Services" and the "Integrations" tab in the Home Assistant UI
1. Then click on the entry for HACS.
1. On the card click on "Configure"

## Options

![image](/img/option3.png)

- `Side panel title`: The text (name or title) to display for HACS in the sidebar. Defaults to "HACS".
- `Side panel icon`: The icon you want to display for HACS in the sidebar.
- `Number of releases to show`: Number of releases to show in the dropdown.
- `Filter with country code`: Only show repositories for your country (if the repository has information about that).
- `Enable AppDaemon apps discovery & tracking`: Enables [AppDaemon](/docs/categories/appdaemon_apps).
- `Enable NetDaemon apps discovery & tracking`: Enables [NetDaemon](/docs/categories/netdaemon_apps).
  - NetDaemon apps is deprecated and will [deprecated](/docs/categories/netdaemon_apps#deprecation-notice) and will be removed from HACS.
- `Enable experimental features`: This enables [experimental features](https://experimental.hacs.xyz/) in HACS.

:::note
After you change the setting for experimental features, you must fully reload HACS. Restart Home Assistant and then, once Home Assistant has fully started, clear your browser cache.
:::

## Click submit and wait for confirmation

_This will reload HACS and your changes will be reflected when you see the confirmation._

![image](/img/option4.png)
