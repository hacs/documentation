---
id: events
title: Events
---

When HACS operate it will fire some events that the frontend listens to.

These events can also be used in automations.

### Events

- `hacs/update`
- `hacs/repository`


### Automation example

This will create a new `persistent_notification` every time a new repository is added to HACS.

```yaml
automation:
  trigger:
    platform: event
    event_type: hacs/repository
    event_data:
      action: registration
  action:
    service: persistent_notification.create
    data_template:
      title: New repository in HACS
      message: >-
        {% set repo = trigger.event.data.repository %}
        [{{ repo }}](https://github.com/{{ repo }})
        was just added to HACS.
```

This example will give you this notification when something is added to HACS.

![notification](/img/notification.png)

Clicking the link will take you to the GitHub page for that repository.
