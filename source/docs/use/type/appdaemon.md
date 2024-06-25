---
title: AppDaemon apps
---

AppDaemon apps are apps for [AppDaemon](https://appdaemon.readthedocs.io/en/stable/). According to their documentation, *"AppDaemon is a loosely coupled, multi-threaded, sandboxed python execution environment for writing automation apps for home automation projects [...]"*.

!!! abscract "Not enabled by default"
    By default, AppDaemon apps are **not** visible in HACS because they are used only by a small subset of users. To see them, you need to enable them in the configuration options.


## Enabling AppDaemon apps in HACS

To enable AppDaemon apps in HACS, follow these steps:

1. In Home Assistant, open the HACS configuration options as described under [Configuration options](/docs/use/configuration/options.md).
2. In the **Options** dialog, select **Enable AppDaemon apps discovery & tracking**.

![configuration](/assets/images/options_flow/option3.png)

3. To save the changes, select **Submit**.

## AppDaemon apps download location

Any AppDaemon app downloaded with HACS is stored in your [Home Assistant configuration directory](https://www.home-assistant.io/docs/configuration/#to-find-the-configuration-directory), under  `appdaemon/apps/`.

??? nerd-mode

    Nothing yet :(