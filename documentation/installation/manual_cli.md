---
id: manual_cli
title: Installation, Linux command-line
description: "Manual installation steps using the Linux command-line"
---

This guide will help you install HACS using the Linux command-line on your Home Assistant server.

### Step 1 - Go to your Home Assistant configuration directory 

The `hacs` folder needs to be placed under `<config_dir>/custom_components/`

`<config-dir>` is where your `configuration.yaml` file is located.

On Hassio/Docker the final location will be `/config/custom_components/hacs`

On Hassbian(venv) the final location will be `/home/homeassistant/.homeassistant/custom_components/hacs`

For this example, `<config-dir>` will be `/path/to/homeassistant/config`

Change-directory to your Home Assistant configuration directory:
```
cd /path/to/homeassistant/config
```

### Step 2 - Run the install script
```
curl -sfSL https://hacs.xyz/install | bash -
```

### Step 3 - Restart Home Assistant

Restart Home Assistant once before moving to the next step.

### Step 4 - ✏️

You should now be done. The next step is to add it to your [configuration](configuration/start.md).
