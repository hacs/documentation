---
id: download
title: Download
description: "HACS download steps"
---
You use the [HACS download script](https://github.com/hacs/get) to setup HACS.

!!! info
    If you are not sure what type of Home Assistant you are using or how to find that, then you should probably not use HACS (or any other custom integration).


=== "OS/Supervised"

    1. Go to the Add-on store
    1. Install one of the SSH add-ons (you need to enable advanced mode in your user profile to see them)
    1. Configure the SSH add-on you chose by following the documentation for it
    1. Start the SSH add-on
    1. Connect to the SSH add-on
    1. Run the HACS download script

        ```bash
        wget -O - https://get.hacs.xyz | bash -
        ```

    1. Restart Home Assistant

=== "Container"

    1. Open a terminal
    1. Go inside the container with `docker exec -it <name of container running homeassistant> bash`
    1. Run the HACS download script

        ```bash
        wget -O - https://get.hacs.xyz | bash -
        ```

    1. Restart Home Assistant

=== "Core"

    1. Open a terminal
    1. Change to the user that is running Home Assistant
    1. Run the HACS download script

        ```bash
        wget -O - https://get.hacs.xyz | bash -
        ```

    1. Restart Home Assistant

## Troubleshooting

- ++ctrl+v++ not working for you? 
    - Try ++ctrl+shift+v++ instead
    - Try ++ctrl+ins++ `SHIFT+INS(insert)` instead
    - Try `Right-click` instead
