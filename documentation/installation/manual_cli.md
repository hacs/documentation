---
id: manual_cli
title: Installation, Linux command-line
description: "Manual installation steps using the Linux command-line"
---

This guide will help you install HACS using the Linux command-line on your Home Assistant server.

# Method #1 - Installation Script

### Step 1

This command should be run as the user that runs Home Assistant.

Don't blindly curl to bash! Take a look at [what the script does](https://hacs.xyz/install).

```
curl -sfSL https://hacs.xyz/install | bash -
```

### Step 2

Restart Home Assistant once before moving to the next step.

### Step 3

You should now be done. The next step is to add it to your [configuration](configuration/start.md).

# Method #2 - Manual Commands

The exact commands may vary.

### Step 1

Move the [latest HACS zip file](https://github.com/hacs/integration/releases/latest/download/hacs.zip) to your Home Assistant server.

### Step 2

Determine where the root of your Home Assistant configuration is located. This is the directory that contains your `configuration.yaml` file. (Example: `/home/homeassistant/.homeassistant/`)

Move into that directory. (Or adjust your commands.)

```
cd /home/homeassistant/.homeassistant/
````

### Step 3

The contents of the `hacs.zip` file need to be extracted to the `custom_components/hacs/` directory.

If the `custom_components/` directory doesn't exist, create that first.

```
mkdir -p custom_components/hacs/
unzip ~/hacs.zip -d custom_components/hacs/
````

### Step 4

Make sure permissions are correct. The user that runs Home Assistant should be able to write to the `custom_components` directory, the `custom_components/hacs` directory, as well as the `www/` directory.

```
chown homeassistant:homeassistant custom_components/
chown -R homeassistant:homeassistant custom_components/hacs/
chown homeassistant:homeassistant www/
````

### Step 5

Restart Home Assistant. After the restart, you should now be ready to add HACS to your [configuration](configuration/start.md).
