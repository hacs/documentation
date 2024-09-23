---
title: Prerequisites
description: 'What you need before downloading HACS'
---

Before you start using HACS, make sure the following requirements are met:

- You are running [Home Assistant](https://www.home-assistant.io/) version `2024.4.1` or newer.
    - To see which version your system is running, in Home Assistant, go to <!-- hacs:my info title="**{{coreui('panel.config')}}** > **{{coreui('ui.panel.config.dashboard.about.main')}}**" -->.
- You are running a [supported](https://github.com/home-assistant/architecture/blob/master/adr/0012-define-supported-installation-method.md) Home Assistant installation.
- You have [access to the file system](https://www.home-assistant.io/docs/configuration/#to-set-up-access-to-the-files-and-prepare-an-editor) where the Home Assistant configuration files are located.
- You know how to access the Home Assistant log file.
    - You know how to [enable debug logging](https://www.home-assistant.io/docs/configuration/troubleshooting/#debug-logs-and-diagnostics).
- You are aware that although you can use an add-on to download HACS, HACS itself is not an add-on, and does not contain any [add-ons](https://www.home-assistant.io/docs/glossary/#add-on).
- You have a stable internet connection with sufficient available bandwidth and no data caps.
- You are not blocking outgoing requests to GitHub or Cloudflare.
    - For more information, refer to the documentation under [**FAQ** > **Data sources**](/docs/faq/data_sources.md).
