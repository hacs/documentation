---
title: Diagnostics
description: 'How to get HACS diagnostics'
---

The diagnostics file is a JSON file with information about your instance. This file is particularly helpful when you want to report a HACS issue via issue tracker on GitHub. The diagnostics file provides context and helps people understand your setup.

To get the diagnostics file for HACS, follow these steps:

1. In Home Assistant, go to <!-- hacs:my integrations title="**{{coreui('panel.config')}}** > **{{coreui('ui.panel.config.dashboard.devices.main')}}**" -->.
2. Select the **HACS** integration.
3. Select the three-dots (:material-dots-vertical:) menu, then select **Download diagnostics**.

    - This downloads a `.json` file to the computer you are doing this from (usually into the downloads directory).
    - This file can be dragged into GitHub issues.


    ![image showing how to download diagnostics](/assets/images/diagnostics.png)

4. For more instructions, refer to the Home Assistant documentation on [reporting issues](https://www.home-assistant.io/help/reporting_issues/).
