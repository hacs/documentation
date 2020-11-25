---
id: manual
title: Installation
description: "Manual installation steps"
---

This guide will take you though all the steps you need to install HACS.

(Alternately, you can install HACS using these [Linux command-line instructions](installation/manual_cli.md).)

### Step 1 - Download HACS newest release

Download the [newest release from the release page](https://github.com/custom-components/hacs/releases/latest).

Initialize the download by clicking on the "hacs.zip" link at the bottom of the [page](https://github.com/custom-components/hacs/releases/latest).

![install2](/img/install2.png)

### Step 2 - Extract the content

Unzip the `hacs.zip` file you downloaded.

After unzipping it looks like:

![install3](/img/install3.png)

With this content (**NB!: This was the content for 0.20.0, it may be different on other releases.**)

![install4](/img/install4.png)

### Step 3 - Create custom_components folder in Home Assistant filesystem

Open the folder on Home Assistant where you have your `configuration.yaml` file.

:::tip
You can use the Terminal & SSH Add-on to create this file on the Home Assitant file system. Install it via Supervisor > Add-on Store > Search for Terminal & SSH. Add your public SSH key to the configuration and enter a port (for example `8181`) in the Network input field. After restarting the Add-on you should be able to connect with SSH by typing `ssh root@x.x.x.x -p 8181` where `x.x.x.x` is the port of your Home Assistant.

You can also use File Editor Add-on which you can install via Supervisor > Add-on Store > Search for File Editor. But later on you also need to copy folders, which is not possible in the File Editor Add-on.
:::

The `custom_components` folder should exist in the same place as your `configuration.yaml` file. If this is your first `custom_component`, that folder may not exist already. Go ahead and create it.

### Step 4 - Copy unpacked folder to Home Assistant

The folder you downloaded and unpacked (`hacs`) needs to be placed under `<config_dir>/custom_components/`.

On Home Assistant (OS/supervised/docker) the final location will be `/config/custom_components/hacs`.

:::tip
If you use SSH to connect to your Home Assistant you can run `scp -P 8181 -r ~/Downloads/hacs root@192.168.178.15:/config/custom_components/hacs` when you unpacked your folder in `~/Downloads`. Where `8181` will be the port (or any other port) your should add to the Terminal & SSH Add-on and `192.168.178.15` is the IP address of your Home Assistant.
:::

On a venv installation the final location will be `/home/homeassistant/.homeassistant/custom_components/hacs`.

:::warning
If you are running Home Assistant in a python venv, the user running Home Assistant needs to have full control over these directories and files.
:::

### Step 5 - Restart Home Assistant

Restart Home Assistant once before moving to the next step.

### Step 6 - ✏️

You should now be done, next part will be to add it to your [configuration](configuration/start.md).
