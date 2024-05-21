---
id: logs
title: Logs
description: "Logs"
---

Like any other integration this logs to the `home-assistant.log` file.

To enable `debug` logging, add this to your `configuration.yaml`(1):
{ .annotate }

1.  configuration

Lorem ipsum dolor sit amet, (1) consectetur adipiscing elit.
{ .annotate }

1.  :man_raising_hand: I'm an annotation! I can contain `code`, __formatted
    text__, images, ... basically anything that can be expressed in Markdown.



```yaml title="configuration.yaml"
logger:
  default: info
  logs:
    custom_components.hacs: debug
    aiogithubapi: debug
```

