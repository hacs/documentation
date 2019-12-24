---
id: themes
title: Themes
---

Themes is a part of the Home Assistant [`frontend` integration.](https://www.home-assistant.io/integrations/frontend/)

Themes in HACS will atomagically be enabled if you have it enabled in Home Assistant

## Enable themes in Home Assistant

Add this to your `configuration.yaml`

```yaml
frontend:
  themes: !include_dir_merge_named themes
```

## Themes download location

Any theme downloaded with HACS is stored in `themes/` in your Home Assistant configuration directory.

