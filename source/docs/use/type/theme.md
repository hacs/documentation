---
title: Theme
layout: type
---

[Themes](https://www.home-assistant.io/integrations/frontend/#defining-themes) are used to [style your user interface](https://www.home-assistant.io/frontend/). They are part of the Home Assistant [`frontend` integration](https://www.home-assistant.io/integrations/frontend/).

!!! info
    Themes in HACS will automagically be enabled if you have them enabled in Home Assistant

## Enable themes in Home Assistant

Add this to your [`configuration.yaml`](https://www.home-assistant.io/docs/configuration/).

```yaml title="configuration.yaml"
frontend:
  themes: !include_dir_merge_named themes
```

## Themes download location

Any theme downloaded with HACS is stored in `themes/` in your Home Assistant configuration directory.
