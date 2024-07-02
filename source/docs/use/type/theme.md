---
title: Theme
layout: type
---

[Themes](https://www.home-assistant.io/integrations/frontend/#defining-themes) are used to [style your user interface](https://www.home-assistant.io/frontend/). They are part of the Home Assistant [`frontend` integration](https://www.home-assistant.io/integrations/frontend/).

## Enable themes in Home Assistant

Themes are automagically enabled in HACS if you have them enabled in Home Assistant.

To enable Themes in Home Assistant, add this to your [`configuration.yaml` file](https://www.home-assistant.io/docs/configuration/).

```yaml title="configuration.yaml"
frontend:
  themes: !include_dir_merge_named themes
```

## Themes download location

Any theme downloaded with HACS is stored in your [Home Assistant configuration directory](https://www.home-assistant.io/docs/configuration/#to-find-the-configuration-directory), under `themes/`.
