---
id: legacy
title: Configure HACS with YAML
sidebar_label: YAML (legacy)
description: "Configure HACS with YAML (legacy)"
---

:::info
_This page assume that you have already finished the [installation](/docs/installation/prerequisites)_
:::

## Example configuration

```yaml
hacs:
  token: dd6592a5acde4849eaa19b4a28a2944f0d2f9bac
```

| key               | optional | default           | description                                                                                        |
| ----------------- | -------- | ----------------- | -------------------------------------------------------------------------------------------------- |
| `token`           | False    |                   | [A Github Personal Access Token](/docs/configuration/pat)                                          |
| `sidepanel_title` | True     | Community         | The name used for the sidepanel link.                                                              |
| `sidepanel_icon`  | True     | "mdi:alpha-c-box" | The icon used for the sidepanel link.                                                              |
| `appdaemon`       | True     | `False`           | Enable tracking of AppDaemon apps.                                                                 |
| `netdaemon`       | True     | `False`           | Enable tracking of NetDaemon apps.                                                                 |
| `country`         | True     |                   | Set a filter based on your [A2(ISO) country code](https://www.worldatlas.com/aatlas/ctycodes.htm). |
| `release_limit`   | True     | `5`               | Number of releases to show in the version selector.                                                |
| `experimental`    | True     | `False`           | Boolean to enable experimental features.                                                           |
