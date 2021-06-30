---
id: installation
title: Installation
description: "HACS installation steps"
---

You install HACS by using the [HACS install script](https://github.com/hacs/install).

:::info
If you are not sure what type of Home Assistant you are using, then you should probably not install HACS (or any other custom integration), but if you really want to know, you can find it here:

1. In your Home Assistant UI go to the Configuration panel
1. Click on the "Info" block.
1. Under the System health card it will say "Installation Type  xxxx" 
:::

## Home Assistant OS

1. Go to the Supervisor panel
1. Install one of the SSH add-ons (you need to enable advanced mode in your user profile to see them)
1. Configure the SSH add-on you chose by following the documentation for it
1. Start the SSH add-on
1. Connect to the SSH add-on
1. Run the HACS install script

```bash
wget -q -O - https://install.hacs.xyz | bash -
```

## Home Assistant Container

For Home Assistant Container you have 2 options.

### Option 1: Run the installer on the host OS

1. Open a terminal
1. Change directory to your Home Assistant configuration directory
1. Run the HACS install script

```bash
wget -q -O - https://install.hacs.xyz | bash -
```

### Option 2: Run the installer inside the container

1. Open a terminal
1. Go inside the container with `docker exec -it homeassistant bash`
1. Run the HACS install script

```bash
wget -q -O - https://install.hacs.xyz | bash -
```

4. Exit the container with `exit`


## Home Assistant Core

1. Open a terminal
1. Change to the user that is running Home Assistant
1. Run the HACS install script

```bash
wget -q -O - https://install.hacs.xyz | bash -
```

## Home Assistant Supervised

The same as [Home Assistant OS](#home-assistant-os), but you can also run the script directly on the host OS.

1. Open a terminal
1. Run the HACS install script

```bash
wget -q -O - https://install.hacs.xyz | bash -
```

::tip

Having issues accessing `https://install.hacs.xyz`? try with `https://raw.githubusercontent.com/hacs/install/main/install` instead

:::
