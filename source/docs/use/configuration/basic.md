---
title: Initial configuration
description: 'Setting up and authenticating the HACS integration'
---

## Setting up the HACS integration

Follow these steps to set up the HACS integration and authenticate it with GitHub.

### Prerequisites


This guide assumes that you have completed the following steps:

   - [Downloaded HACS](/docs/use/download/prerequisites.md)
   - Restarted Home Assistant

### To set up the HACS integration

1. In Home Assistant, go to <!-- hacs:my integrations title="**{{coreui('panel.config')}}** > **{{coreui('ui.panel.config.dashboard.devices.main')}}**" -->.
2. Clear your browser cache.
    - HACS won't show up in the list unless you clear your browser cache or perform a hard-refresh.

3. In the bottom right corner, select **+ {{coreui('ui.panel.config.integrations.add_integration')}}**.

    ![image](/assets/images/screenshots/core/integrations/light.png#only-light)
    ![image](/assets/images/screenshots/core/integrations/dark.png#only-dark)

4. Search for **HACS** and select it.

    ![image](/assets/images/screenshots/core/select_brand/light.png#only-light)
    ![image](/assets/images/screenshots/core/select_brand/dark.png#only-dark)

5. Acknowledge the statements and select **Submit**.

    ![image](/assets/images/screenshots/core/config_flow/init/light.png#only-light)
    ![image](/assets/images/screenshots/core/config_flow/init/dark.png#only-dark)

6. Authenticate the integration:
    - HACS uses a device OAuth flow for authentication with GitHub.
    - Copy the device code and select the link [https://github.com/login/device](https://github.com/login/device).

        ![image](/assets/images/screenshots/core/config_flow/waiting/light.png#only-light)
        ![image](/assets/images/screenshots/core/config_flow/waiting/dark.png#only-dark)

    - Sign in to GitHub.
        - If you are not signed in to GitHub in your browser, you need to sign up or sign in now to continue the setup.
        - If you are already signed in, you can skip this part.

            ![image](/assets/images/screenshots/github/signin/light.png#only-light)
            ![image](/assets/images/screenshots/github/signin/dark.png#only-dark)

    - Enter the device code you copied in the previous step and select **Continue**.

        ![image](/assets/images/screenshots/github/enter_code/light.png#only-light)
        ![image](/assets/images/screenshots/github/enter_code/dark.png#only-dark)

    - Select **Authorize HACS**.

        ![image](/assets/images/screenshots/github/authorize/light.png#only-light)
        ![image](/assets/images/screenshots/github/authorize/dark.png#only-dark)

    - Once you see the confirmation screen, you can close the tab and go back to Home Assistant.

        ![image](/assets/images/screenshots/github/confirmation/light.png#only-light)
        ![image](/assets/images/screenshots/github/confirmation/dark.png#only-dark)

7. Assign HACS to an area and select **Finish**.

    ![image](/assets/images/screenshots/core/config_flow/success/light.png#only-light)
    ![image](/assets/images/screenshots/core/config_flow/success/dark.png#only-dark)
8. Congrats! You have installed the HACS integration in Home Assistant.

    - Now, go checkout the [configuration options](/docs/use/configuration/options.md).
    - Don't forget to [setup a backup process](/docs/use/data.md).



