---
title: Downloading HACS
description: "Step-by-step instructions on downloading HACS to your Home Assistant"
---

This section shows how to download HACS to your Home Assistant and how to troubleshoot some common issues.

## To download HACS

How you download HACS depends on your Home Assistant installation type. In the instructions below, select the tab that matches your installation type (OS/Supervised, Container, or Core).

!!! warning
    If you don't know what type of Home Assistant installation you are running, you should not use HACS (or any other custom integration).

=== "OS/Supervised"

    For Home Assistant Operating System and Supervised, there is an app for downloading HACS. To add the custom app repository that allows you to get this app, follow these steps.

    1. Add the HACS app repository to your Home Assistant.
        - Follow the [Installing a third-party app repository](https://www.home-assistant.io/common-tasks/os/#installing-a-third-party-app-repository) instructions in the Home Assistant documentation.
        - Use `https://github.com/hacs/addons` as the repository URL.
    2. Go to **Settings** > **Apps** > **Install app** and select **Get HACS**. Then select **Install**.
    3. **Start** the app.
    4. Navigate to the app logs and follow the instructions given there.

=== "Container"

    To set up HACS, you can use the [HACS download script](https://github.com/hacs/get).

    1. Open a terminal.
    2. Go inside the container with `docker exec -it <name of the container running homeassistant> bash`.
    3. Run the HACS download script.

        ```bash
        wget -O - https://get.hacs.xyz | bash -
        ```

    
=== "Core"

    To set up HACS, you can use the [HACS download script](https://github.com/hacs/get).

    1. Open a terminal.
    2. Change to the user that is running Home Assistant.
    3. Run the HACS download script.

        ```bash
        wget -O - https://get.hacs.xyz | bash -
        ```

### Finalizing steps

1. Restart Home Assistant.
2. Follow the steps on [setting up the HACS integration](/docs/use/configuration/basic.md).

## Troubleshooting

- Is ++ctrl+v++ not working for you?
    - Try ++ctrl+shift+v++ instead
    - Try ++ctrl+ins++ `SHIFT+INS(insert)` instead
    - Try `Right-click` instead
