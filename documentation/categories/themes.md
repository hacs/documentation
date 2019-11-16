---
id: themes
title: Themes
---

Themes is a part of the Home Assistant [`frontend` integration.](https://www.home-assistant.io/integrations/frontend/)

Themes is **not** enabled by default in HACS, the reason for that is that it is not enabled by default in Home Assistant.

## Enable themes in HACS

_There are 2 ways of doing this._

### Enable if you used the UI to configure HACS

Add a checkmark to the left of themes in the UI configuration for HACS.

![configuration](/img/conf4.png)

[For more about configure HACS with the UI have a look here](configuration/basic.md)

### Enable if you used the YAML to configure HACS

If you used YAML to configure HACS, add this under your HACS connfiguration to enable themes.

```yaml
hacs:
  ...
  theme: true
```

When you have done that you need to restart Home Assistant.

[For more about configure HACS with YAML have a look here](configuration/legacy.md)

## Enable themes in Home Assistant

Add this to your `configuration.yaml`

```yaml
frontend:
  themes: !include_dir_merge_named themes
```

## Themes download location

All the themes you download with HACS is stored in `themes/` in your Home Assistant configuration directory.
