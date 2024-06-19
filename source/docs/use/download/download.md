---
title: Download
description: "HACS download steps"
---
Setting up HACS is done by using the [HACS download script](https://github.com/hacs/get).

!!! info
    If you are not sure what type of Home Assistant installation you are running or how to find that, then you should not use HACS (or any other custom integration). 


=== "OS/Supervised"

    For Home Assistant Operating System and Supervised, there is an add-on for downloading HACS. To add the custom add-on repository that allows you to get this add-on, follow these steps.

    1. To add the HACS add-on repository to your Home Assistant, select this [my link](https://my.home-assistant.io/redirect/supervisor_addon/?addon=cb646a50_get&repository_url=https%3A%2F%2Fgithub.com%2Fhacs%2Faddons).
        - Once you selected the link, you are asked to confirm if you want to open the page in Home Assistant. Check the URL to your Home Assistant and select **Open link**.
        - This brings up the **Missing add-on repository** dialog. To add the repository, select **Add**.
        - You have now added the repository to your Home Assistant that allows you to download HACS.
    2. In the **Get HACS** add-on, select **Install**.
    3. **Start** the add-on.
    4. Navigate to the add-on logs and follow instructions given there.
    5. Restart Home Assistant.

=== "Container"

    1. Open a terminal.
    2. Go inside the container with `docker exec -it <name of container running homeassistant> bash`.
    3. Run the HACS download script.

        ```bash
        wget -O - https://get.hacs.xyz | bash -
        ```

    4. Restart Home Assistant.

=== "Core"

    1. Open a terminal.
    2. Change to the user that is running Home Assistant.
    3. Run the HACS download script.

        ```bash
        wget -O - https://get.hacs.xyz | bash -
        ```

    4. Restart Home Assistant.

## Troubleshooting

- ++ctrl+v++ not working for you? 
    - Try ++ctrl+shift+v++ instead
    - Try ++ctrl+ins++ `SHIFT+INS(insert)` instead
    - Try `Right-click` instead
