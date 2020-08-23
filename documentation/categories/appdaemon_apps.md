---
id: appdaemon_apps
title: AppDaemon Apps
description: "Category: AppDaemon Apps"
---

AppDaemon apps are apps for [AppDaemon](https://appdaemon.readthedocs.io/en/stable/)

:::caution
Since not all users are running AppDaemon, AppDaemon is **not** enabled by default in HACS.
:::

## Enable AppDaemon apps in HACS

_There are 2 ways of doing this._

### Enable if you used the UI to configure HACS

Add a checkmark to the left of AppDaemon apps in the UI configuration for HACS.

![configuration](/img/option3.png)

[For more about configuring HACS with the UI have a look here](configuration/basic.md)

### Enable if you used YAML to configure HACS

If you used YAML to configure HACS, add this under your HACS configuration to enable AppDaemon apps:

```yaml
hacs:
  ...
  appdaemon: true
```

After adding that you need to restart Home Assistant.

[For more about configuring HACS with YAML have a look here](configuration/legacy.md)

## AppDaemon apps download location

:::info
Any AppDaemon app downloaded with HACS is stored in `appdaemon/apps/` in your Home Assistant configuration directory.
:::
