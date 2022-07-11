---
id: legacy
title: Configure HACS with YAML
sidebar_label: YAML (legacy)
description: "Configure HACS with YAML (legacy)"
---

:::info
_This page assume that you have already finished the [download](/docs/setup/prerequisites)_.
New setups should **not** use this.
This section is intended for developers and really, really, really advanced users.
Some features of HACS is not enabled if you use YAML.
Use [this](/docs/configuration/basic) instead
:::

## Example configuration

```yaml
hacs:
  token: d73jds8f73jkr9d8sufv2br8sd9fy92nr9f80u23r97fhse (Don't copy+paste this token, create your own)
```

| key               | optional | default           | description                                                                                        |
| ----------------- | -------- | ----------------- | -------------------------------------------------------------------------------------------------- |
| `token`           | False    |                   | [A Github Personal Access Token](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)                                          |
| `sidepanel_title` | True     | Community         | The name used for the sidepanel link.                                                              |
| `sidepanel_icon`  | True     | "mdi:alpha-c-box" | The icon used for the sidepanel link.                                                              |
| `appdaemon`       | True     | `False`           | Enable tracking of AppDaemon apps.                                                                 |
| `netdaemon`       | True     | `False`           | Enable tracking of NetDaemon apps.                                                                 |
| `country`         | True     |                   | Set a filter based on your [A2(ISO) country code](https://www.worldatlas.com/aatlas/ctycodes.htm). |
| `release_limit`   | True     | `5`               | Number of releases to show in the version selector.                                                |
| `experimental`    | True     | `False`           | Boolean to enable experimental features.                                                           |
