---
id: basic
title: Initial Configuration
description: "Basic configuration"
---

:::info
_This page assume that you have already completed the [download](/docs/setup/prerequisites)._
:::

## In your Home Assistant UI go to the Integrations panel

[![Open your Home Assistant instance and show your integrations.](https://my.home-assistant.io/badges/integrations.svg)](https://my.home-assistant.io/redirect/integrations/)

## Clear your browser cache

Before HACS can show up in the list you need to clear your browser cache or perform hard-refresh.

:::warning
You actually need to do this, don't skip it.
:::

## Click the "+ ADD INTEGRATION" button in the bottom right corner

[![Open your Home Assistant instance and start setting up a new integration.](https://my.home-assistant.io/badges/config_flow_start.svg)](https://my.home-assistant.io/redirect/config_flow_start/?domain=hacs)

## Search for or scroll down to find "HACS" and select it

![image](/img/conf3.png)

## Accept usage

![image](/img/part1.png)

Only the last item (experimental features) are optional, you need to accept everything above that before you can setup HACS.

## Device registration

HACS uses a device OAuth flow for authentication against the GitHub API.

***

![image](/img/part2.png)

On the first screen you are presented with a device code, copy that to your clipboard and click on the [https://github.com/login/device](https://github.com/login/device) link to continue the setup.

**Do not click on submit yet!**

***

![image](/img/no_account.png)

If you are not signed in to GitHub in your browser you need to signup or signin now to continue the setup, if you are already signed in, you can skip this part.

***

![image](/img/part3.png)

When that page is loaded up, paste or type in your device code that was presented to you in the previous step.

***

![image](/img/part4.png)

Here you click on "Authorize hacs".

***

![image](/img/part5.png)

Once you see the confirmation screen, you can close the tab and go back to Home Assistant.

***

![image](/img/part2.png)

Now you can click "Submit" to complete the configuration of HACS.

***

![image](/img/conf5.png)

_If something failed, you will be taken back to the [Add your configuration step](#add-your-configuration)._

## Changing the configuration

If you need to change the configuration, you first need to delete the integration from the integrations list, then you need to add it back again.
