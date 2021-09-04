---
id: integrations
title: Integrations
description: "Category: Integrations"
---

Integrations in HACS (or custom_components as they are often referred to) are community-built integrations.

## Special notes about Integrations

:::info
When you download, update or remove an integration in HACS, you need to restart Home Assistant.
:::

:::info
There is 1 exception to this:
If the integration supports configuration with `config_flow`, you do not have to restart Home Assistant after the download.
You can go straight to the "Configuration" section of the UI, then to "Integrations".
:::

:::tip
You _may_ need to clear your browser cache before you see it in the "+" list.

_Note that this **only** applies for the initial download of that Integration, if you update it, you still need to restart Home Assistant before it loads the new files._
:::

## Integrations download location

Any Integration you download with HACS is stored in `custom_components/` in your Home Assistant configuration directory.
