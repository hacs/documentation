---
id: options
title: Configuration options
description: 'Configuration options'
---

!!! info
    _Finish [initial configuration](/docs/use/configuration/basic.md) before you modify HACS options described here._


## Change HACS options

1. First go to the "Settings" in the Home Assistant UI, then "Devices & Services" and the "Integrations" tab in the Home Assistant UI
1. Then click on the entry for HACS.
1. On the card click on "Configure"

## Options

![image](/assets/images/options_flow/option3.png)

- `Side panel title`: The text (name or title) to display for HACS in the sidebar. Defaults to "HACS".
- `Side panel icon`: The icon you want to display for HACS in the sidebar.
- `Number of releases to show`: Number of releases to show in the dropdown.
- `Filter with country code`: Only show repositories for your country (if the repository has information about that).
- `Enable AppDaemon apps discovery & tracking`: Enables [AppDaemon](/docs/use/type/appdaemon.md).
- `Enable NetDaemon apps discovery & tracking`: Enables [NetDaemon](/docs/use/type/netdaemon.md).
  - NetDaemon apps is **deprecated** and will be removed from HACS.
- `Enable experimental features`: This enables experimental features in HACS.

!!! note
    After you change the setting for experimental features, you must fully reload HACS. Restart Home Assistant and then, once Home Assistant has fully started, clear your browser cache.


!!! note
    When changing the toggle for experimental features, you need to restart Home Assistant and clear the browser cache when it has fully started for it to properly be changed.


## Click submit and wait for confirmation

_This will reload HACS and your changes will be reflected when you see the confirmation._

![image](/assets/images/options_flow/option4.png)
