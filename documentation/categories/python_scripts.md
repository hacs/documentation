---
id: python_scripts
title: Python Scripts
---

Python Scripts is a part of the Home Assistant [`python_script` integration.](https://www.home-assistant.io/integrations/python_script/)

Python Scripts is **not** enabled by default in HACS, the reason for that is that it is not enabled by default in Home Assistant.

## Enable Python Scripts in HACS

_There are 2 ways of doing this._

### Enable if you used the UI to configure HACS

Add a checkmark to the left of python_scripts in the UI configuration for HACS.

![configuration](/img/conf4.png)

[For more about configure HACS with the UI have a look here](configuration/basic.md)

### Enable if you used the YAML to configure HACS

If you used YAML to configure HACS, add this under your HACS connfiguration to enable Python Scripts.

```yaml
hacs:
  ...
  python_script: true
```

When you have done that you need to restart Home Assistant.

[For more about configure HACS with YAML have a look here](configuration/legacy.md)

## Python Scripts in Home Assistant

Add this to your `configuration.yaml`

```yaml
python_script:
```

## Python Scripts download location

All the Python Scripts you download with HACS is stored in `python_scripts/` in your Home Assistant configuration directory.
