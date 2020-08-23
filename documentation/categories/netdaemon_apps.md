---
id: netdaemon_apps
title: NetDaemon Apps
description: "Category: NetDaemon Apps"
---

NetDaemon apps are apps for [NetDaemon](https://netdaemon.xyz/)

:::caution
Since not all users are running NetDaemon, NetDaemon is **not** enabled by default in HACS.
:::

## Enable NetDaemon apps in HACS

_There are 2 ways of doing this._

### Enable if you used the UI to configure HACS

Add a checkmark to the left of NetDaemon apps in the UI configuration for HACS.

![configuration](/img/option3.png)

[For more about configuring HACS with the UI have a look here](configuration/basic.md)

### Enable if you used YAML to configure HACS

If you used YAML to configure HACS, add this under your HACS configuration to enable NetDaemon apps:

```yaml
hacs:
  ...
  netdaemon: true
```

After adding that you need to restart Home Assistant.

[For more about configuring HACS with YAML have a look here](configuration/legacy.md)

## NetDaemon apps download location

:::info
Any NetDaemon app downloaded with HACS is stored in `netdaemon/apps/` in your Home Assistant configuration directory.
:::

---

:::caution
_NetDaemon app support was added in HACS version 0.23.0_
:::
