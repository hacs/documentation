---
id: basic
title: Initial Configuration
description: 'Basic configuration'
---

!!! info
    _This page assumes that you have already completed the [download](/docs/use/download/prerequisites.md)._


## In your Home Assistant UI go to the Integrations panel

1. First go to the "Settings" in the Home Assistant UI
1. Then "Devices & Services" and the "Integrations" tab in the Home Assistant UI

## Clear your browser cache

Before HACS can show up in the list you need to clear your browser cache or perform hard-refresh.

!!! tip
    You actually need to do this, don't skip it.

## Add the integration

1. Click on the "+ Add integration" button in the bottom right corner.
1. Search for "HACS".
1. Then select (click on) it.

![image](/assets/images/config_flow/conf3.png)

## Accept usage

![image](/assets/images/config_flow/part1.png)

Only the last item (experimental features) are optional, you need to accept everything above that before you can setup HACS.

## Device registration

HACS uses a device OAuth flow for authentication against the GitHub API.

---

![image](/assets/images/config_flow/part2.png)

On the first screen you are presented with a device code, copy that to your clipboard and click on the [https://github.com/login/device](https://github.com/login/device) link to continue the setup.

**Do not click on submit yet!**

---

![image](/assets/images/config_flow/no_account.png)

If you are not signed in to GitHub in your browser you need to signup or signin now to continue the setup, if you are already signed in, you can skip this part.

---

![image](/assets/images/config_flow/part3.png)

When that page is loaded up, paste or type in your device code that was presented to you in the previous step.

---

![image](/assets/images/config_flow/part4.png)

Here you click on "Authorize hacs".

---

![image](/assets/images/config_flow/part5.png)

Once you see the confirmation screen, you can close the tab and go back to Home Assistant.

---

![image](/assets/images/config_flow/part2.png)

Now you can click "Submit" to complete the configuration of HACS.

---

![image](/assets/images/config_flow/conf5.png)

## Changing the configuration

If you need to change the configuration, you first need to delete the integration from the integrations list, then you need to add it back again.
