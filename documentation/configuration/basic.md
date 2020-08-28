---
id: basic
title: Initial Configuration
description: "Basic configuration"
---

:::info
_This page assume that you have already completed the [installation](/docs/installation/prerequisites)_
:::

## In your Home Assistant UI go to "Configuration", then click "Integrations"

![image](/img/conf1.png)

## Clear your browser cache

Before HACS can show up in the list you need to clear your browser cache.

## Click the "+" button in the bottom right corner

![image](/img/conf2.png)

## Search for or scroll down to find "HACS (Home Assistant Community Store)" and select it

![image](/img/conf3.png)

:::info
You see this when Home Assistant is installing the requirements needed for the integration.
![image](/img/conf_note.png)

If this takes longer than 10 minutes, you may have an issue with your Home Assistant installation.
:::

## Add your configuration

![image](/img/conf4.png)

- `GitHub Personal Access Token`: The token you got when you finished [_this guide_](/docs/configuration/pat)

## Click submit and wait for confirmation.

![image](/img/conf5.png)

_If something failed, you will be taken back to the [Add your configuration step](#add-your-configuration)_

:::info
The initial startup can take up to 1 hour, for more details click [here](https://hacs.xyz/docs/faq/initial_startup)
:::

## Changing the configuration

If you need to change the configuration, you first need to delete the integration from the integrations list, then you need to add it back again.
