---
title: Python Script
---

Python Scripts is a part of the Home Assistant [`python_script` integration](https://www.home-assistant.io/integrations/python_script/).


## Enable Python Scripts in Home Assistant

Python Scripts are automagically enabled in HACS if you have them enabled in Home Assistant.

To enable [Python Scripts](https://www.home-assistant.io/integrations/python_script/) in Home Assistant, add the following line to your [`configuration.yaml` file](https://www.home-assistant.io/docs/configuration/)


```yaml title="configuration.yaml"
python_script:
```

## Python Scripts download location

Any Python Script downloaded with HACS is stored in your [Home Assistant configuration directory](https://www.home-assistant.io/docs/configuration/#to-find-the-configuration-directory) under `python_scripts/`.
