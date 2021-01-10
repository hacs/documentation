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

:::warning
You actually need to do this, don't skip it.
:::

## Click the "+" button in the bottom right corner

![image](/img/conf2.png)

## Search for or scroll down to find "HACS" and select it

![image](/img/conf3.png)

:::info
You see this when Home Assistant is installing the requirements needed for the integration.
![image](/img/conf_note.png)

If this takes longer than 10 minutes, you may have an issue with your Home Assistant installation.
:::

## Accept usage

![image](/img/part1.png)

None of the items are optional, you need to accept everythin before you can setup HACS.

## Device registration

HACS uses a device OAuth flow for authentication agains the GitHub API.

_If you do not want that, you can use a Personal Access Token if you [configure HACS with YAML](/docs/configuration/legacy)._

***

![image](/img/part2.png)

On the first screen you are presented with a device code, copy that to your clipboard and click on the [https://github.com/login/device](https://github.com/login/device) link to continue the setup.

**Do not click on submit yet!**

***

![image](/img/no_account.png)

If you are not signed in to GitHub in your browser you need to signup or signin now to continue the setup, if you are allready signedin, you will skip this part.

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

_If something failed, you will be taken back to the [Add your configuration step](#add-your-configuration)_

## Changing the configuration

If you need to change the configuration, you first need to delete the integration from the integrations list, then you need to add it back again.
