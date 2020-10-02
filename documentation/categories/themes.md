---
id: themes
title: Themes
description: "Category: Themes"
---

Themes is a part of the Home Assistant [`frontend` integration.](https://www.home-assistant.io/integrations/frontend/)

:::info
Themes in HACS will automatically be enabled if you have it enabled in Home Assistant
:::

## Enable themes in Home Assistant

Add this to your `configuration.yaml`

```yaml
frontend:
  themes: !include_dir_merge_named themes
```

## Themes download location

:::info
Any theme downloaded with HACS is stored in `themes/` in your Home Assistant configuration directory.
:::
