---
id: manual
title: Installation
description: "Manual installation steps"
---

This guide will take you though all the steps you need to install HACS.

(Alternately, you can install HACS using these [Linux command-line instructions](installation/manual_cli.md).)

### Step 1 - Download HACS latest release

Download the [latest release from the release page](https://github.com/custom-components/hacs/releases/latest).

Initialize the download by clicking on the "hacs.zip" link at the bottom of the [page](https://github.com/custom-components/hacs/releases/latest).

![install2](/img/install2.png)

### Step 2 - Extract the content

Unzip the `hacs.zip` file you downloaded.

After unzipping it looks like:

![install3](/img/install3.png)

With this content (**NB!: This was the content for 0.20.0, it may be different on other releases.**)

![install4](/img/install4.png)

**Do you see the `.translations` directory in the screenshot above? you _really really_ need that one.**

### Step 3 - Move the hacs folder to HA

The folder named `hacs` needs to be copied to your Home Assistant installation.

Specifically, the `hacs` folder needs to be placed under `<config_dir>/custom_components/`.

If this is your first custom_component, that folder may not exist already. Go ahead and create it. The `custom_components` folder should exist in the same place as your `configuration.yaml` file.

Use your favorite tool to move the `hacs` folder to Home Assistant.

On Home Assistant (supervised/docker) the final location will be `/config/custom_components/hacs`.

With a venv installation the final location will be `/home/homeassistant/.homeassistant/custom_components/hacs`.

### Step 4 - Verify Permissions (venv only)


The user account running Home Assistant needs full control to the `custom_components` folder. Easiest way to do this is to have the user account that runs Home Assistant to own the `custom_components` folder.

```
sudo chown -R homeassistant:homeassistant custom_components/
````

### Step 5 - Restart Home Assistant

Restart Home Assistant once before moving on. After restarting, you will need to [add HACS to your configuration](configuration/start.md).
