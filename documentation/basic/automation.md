---
id: automation
title: Automation
description: "Automations with HACS"
---

Here are two simple automation examples of what you can do with the data that HACS provides:

## New repositories added

![auto_ex_2](/img/automation_example2.PNG)

_If you click the link here you will get to the page in HACS for that repository._

```yaml
automation hacs_new_repo:
  - alias: Create a notification when something is added to HACS
    trigger:
      platform: event
      event_type: hacs/repository
      event_data:
        action: registration
    condition:
      condition: template
      value_template: "{{ trigger.event.data.repository is defined }}"
    action:
      service: persistent_notification.create
      data_template:
        title: New repository in HACS
        notification_id: hacs-new-repo
        message: >-
          {% set repo = trigger.event.data.repository %}
          {% set id = trigger.event.data.repository_id %}
          [{{ repo }}](/hacs/repository/{{ id }})
          was just added to HACS.
```

## Updates pending

![auto_ex_1](/img/automation_example1.PNG)

```yaml
automation hacs_updates:
  - alias: Create a notification when there is updates pending in HACS
    trigger:
      platform: state
      entity_id: sensor.hacs
    condition:
      - condition: template
        value_template: "{{ states(trigger.entity_id) != 'unknown'}}"
      - condition: template
        value_template: "{{ (states(trigger.entity_id) | float) != 0}}"
    action:
      service: persistent_notification.create
      data_template:
        title: Updates pending in HACS
        notification_id: hacs-update
        message: >-
          {% for repo in state_attr(trigger.entity_id, 'repositories') %}
            **{{ repo.display_name }}** _{{ repo["installed_version"] }}_ -> _{{ repo["available_version"] }}_
          {% endfor %}
```
