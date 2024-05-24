---
title: Template
---

[Custom templates](https://www.home-assistant.io/docs/use/configuration/templating/#reusing-templates) was introduced in the Home Assistant 2023.4.0

## Templates download location

Any template downloaded with HACS is stored in `custom_templates/` in your Home Assistant configuration directory.


## Reload service

When using HACS to download custom template files you do not have to call the `homeassistant.reload_custom_templates`service.

HACS will call that service each time it downloads a custom template file (both new and updates), so you can start using it immediately.

??? nerd-mode

    Nothing yet :(