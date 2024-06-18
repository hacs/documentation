---
title: Prerequisites
description: 'What you need before downloading HACS'
---

Before you start using HACS, you need to make sure you have the following requirements met:

- You are running [Home Assistant](https://www.home-assistant.io/) version `2024.4.1` or newer.
    - To see which version your system is running, in Home Assistant, go to <!-- hacs:my info **{{coreui('panel.config')}}** > **{{coreui('ui.panel.config.dashboard.about.main')}}** -->.
    - To see more detailed system information, go to <!-- hacs:my system_health **{{coreui('panel.config')}}** > **{{coreui('ui.panel.config.dashboard.system.main')}}** > **{{coreui('ui.panel.config.repairs.caption')}}** > Three dots in the upper right > **{{coreui('ui.panel.config.repairs.system_information')}}** -->.
- You are running a [supported](https://github.com/home-assistant/architecture/blob/master/adr/0012-define-supported-installation-method.md) Home Assistant installation.
- You have [access to the file system](https://www.home-assistant.io/docs/configuration/#to-set-up-access-to-the-files-and-prepare-an-editor) where the Home Assistant configuration files are located.
- You know how to access the Home Assistant log file.
    - You know how to [enable debug logging](https://www.home-assistant.io/docs/configuration/troubleshooting/#debug-logs-and-diagnostics).
- You are aware that there are **no** [add-ons](https://www.home-assistant.io/glossary/#add-on) in HACS.
- You have a stable internet connection with sufficient available bandwidth and no data caps.
- You are not blocking outgoing requests to GitHub or Cloudflare. Refer to the documentation under [**FAQ** > **Data sources**](/docs/faq/data_sources.md).
