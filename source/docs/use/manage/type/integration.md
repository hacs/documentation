---
title: Integration
---

Integrations in HACS are community-built custom integrations.


## Configuring integrations

1. Follow the steps on [downloading a repository](/docs/use/download_repository.md).

2. How you configure the integration in Home Assistant depends on the integration:

    - The integration documentation page in HACS should instruct you how to get started.
    - Some integrations can be added from the integration page on <!-- hacs:my integrations title="**{{coreui('panel.config')}}** > **{{coreui('ui.panel.config.dashboard.devices.main')}}**" -->.
    - Others need to be added via YAML.
3. **Troubleshooting**: If you select the **Add integration** button but the integration does not show, clear your browser cache to refresh the UI.


## Integrations download location

Any Integration you download with HACS is stored in your [Home Assistant configuration directory](https://www.home-assistant.io/docs/configuration/#to-find-the-configuration-directory), under `custom_components/`.
