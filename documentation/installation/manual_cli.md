---
id: manual_cli
title: Installation, Linux command-line
description: "Manual installation steps using the Linux command-line"
---

This guide will help you install HACS using the Linux command-line on your Home Assistant server.

:::tip
This command should be run as the user that runs Home Assistant.
:::

## Step 1 - Inspect the script

Don't blindly curl to bash! Take a look at [what the script does](https://hacs.xyz/install).

## Step 2 - Run the script

```
curl -sfSL https://hacs.xyz/install | bash -
```

### Step 3 - Restart Home Assistant

Restart Home Assistant once before moving to the next step.

### Step 4 - Configure HACS

You should now be done. The next step is to add it to your [configuration](configuration/start.md).