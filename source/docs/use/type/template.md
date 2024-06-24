---
title: Template
---

The templates shown in HACS are [custom templates](https://www.home-assistant.io/docs/configuration/templating/#reusing-templates) shared by someone from the community.

## Templates download location

Any template downloaded via HACS is stored in your [Home Assistant configuration directory](https://www.home-assistant.io/docs/configuration/#to-find-the-configuration-directory) under `custom_templates/`.

## No need to call the reload service

HACS will call the `homeassistant.reload_custom_templates`service each time it downloads a custom template file (both new and updates). You can start using this new template immediately. There is no need to call the service manually.
