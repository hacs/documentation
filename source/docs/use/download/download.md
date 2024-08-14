---
title: Downloading HACS
description: "Step-by-step instructions on downloading HACS to your Home Assistant"
---
To set up HACS, you can use the [HACS download script](https://github.com/hacs/get).

## To download HACS

How you download HACS depends on your Home Assistant installation type. In the instructions below, select the tab that matches your installation type (OS/Supervised, Container, or Core).

!!! warning
    If you don't know what type of Home Assistant installation you are running, you should not use HACS (or any other custom integration).

=== "OS/Supervised"

    For Home Assistant Operating System and Supervised, there is an add-on for downloading HACS. To add the custom add-on repository that allows you to get this add-on, follow these steps.

    1. To add the HACS add-on repository to your Home Assistant, select this [my link](https://my.home-assistant.io/redirect/supervisor_addon/?addon=cb646a50_get&repository_url=https%3A%2F%2Fgithub.com%2Fhacs%2Faddons).
        - When prompted to confirm if you want to open the page in Home Assistant, check if the URL to your Home Assistant is correct. Then, select **Open link**.
        - In the **Missing add-on repository** dialog, select **Add**.
        - You have now added the repository that allows you to download HACS to Home Assistant.
    2. In the **Get HACS** add-on, select **Install**.
    3. **Start** the add-on.
    4. Navigate to the add-on logs and follow instructions given there.

=== "Container"

    1. Open a terminal.
    2. Go inside the container with `docker exec -it <name of container running homeassistant> bash`.
    3. Run the HACS download script.

        ```bash
        wget -O - https://get.hacs.xyz | bash -
        ```

    
=== "Core"

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

- ++ctrl+v++ not working for you? 
    - Try ++ctrl+shift+v++ instead
    - Try ++ctrl+ins++ `SHIFT+INS(insert)` instead
    - Try `Right-click` instead
