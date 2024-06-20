---
title: Initial configuration
description: 'Setting up and authenticating the HACS integration'
---

## Prerequisites

!!! Prerequisites

    This page assumes that you have completed the following steps:

    - [Downloaded HACS](/docs/use/download/prerequisites.md)
    - Restarted Home Assistant

## Setting up the HACS integration

1. In Home Assistant, go to <!-- hacs:my integrations **{{coreui('panel.config')}}** > **{{coreui('ui.panel.config.dashboard.devices.main')}}** -->.
2. Clear your browser cache.
    - Before HACS can show up in the list, you need to clear your browser cache or perform a hard-refresh.
    !!! tip
        You actually need to do this, don't skip it.

3. In the bottom right corner, select **+ {{coreui('ui.panel.config.integrations.add_integration')}}**.
4. Search for **HACS** and select it.
5. Acknowledge the statements and select **Submit**.
6. Authenticate the integration:
    - HACS uses a device OAuth flow for authentication against the GitHub API.
    - Copy the device code and select the link [https://github.com/login/device](https://github.com/login/device).

        ![image](/assets/images/config_flow/part2.png)

    - Sign in to GitHub.
        - If you are not signed in to GitHub in your browser, you need to sign up or sign in now to continue the setup.
        - If you are already signed in, you can skip this part.

             ![image](/assets/images/config_flow/no_account.png)

    - Enter the device code you copied in the previous step and select **Continue**.

        ![image](/assets/images/config_flow/part3.png)

    - Select **Authorize HACS**.

        ![image](/assets/images/config_flow/part4.png)

    - Once you see the confirmation screen, you can close the tab and go back to Home Assistant.

        ![image](/assets/images/config_flow/part5.png)

7. Assign HACS to an area and select **Finish**.

    ![image](/assets/images/config_flow/conf5.png)

---


## Changing the configuration

If you need to change the configuration, you first need to delete the integration from the integrations list, then you need to add it back again.
