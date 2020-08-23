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

### Step 3 - Create custom_components folder

Open the folder where you have your `configuration.yaml` file.

If you **do not** see a `custom_components` folder in **the same** folder as `configuration.yaml`, you need to create it.

If this is your first custom_component, that folder may not exist already. Go ahead and create it. The `custom_components` folder should exist in the same place as your `configuration.yaml` file.

The folder named `hacs` needs to be copied to your Home Assistant installation.

Specifically, the `hacs` folder needs to be placed under `<config_dir>/custom_components/`.

Use your favorite tool to move files to Home Assistant.

The `hacs` folder needs to be placed under `<config_dir>/custom_components/`

On Home Assistant (OS/supervised/docker) the final location will be `/config/custom_components/hacs`.

On a venv installation the final location will be `/home/homeassistant/.homeassistant/custom_components/hacs`.

:::warning
If you are running Home Assistant in a python venv, the user running Home Assistant needs to have full control over these directories and files.
:::

### Step 4 - Restart Home Assistant

Restart Home Assistant once before moving to the next step.

### Step 5 - ✏️

You should now be done, next part will be to add it to your [configuration](configuration/start.md).
