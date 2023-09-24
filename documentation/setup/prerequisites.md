---
id: prerequisites
title: Prerequisites
description: "Prerequisites"
---

Before you start using HACS, you need to make sure you have the following requirements met:

- You are running [Home Assistant](https://www.home-assistant.io/) version [`2023.6.0`](https://my.home-assistant.io/redirect/info) or newer.
- You are running a [supported](https://github.com/home-assistant/architecture/blob/master/adr/0012-define-supported-installation-method.md) Home Assistant installation.
- You have the [`my` integration](https://www.home-assistant.io/integrations/my/) enabled.
- You have access to the filesystem where the Home Assistant configuration files are located.
- You know how to access the Home Assistant log file.
- You are aware that there are **no** [add-ons](https://www.home-assistant.io/docs/glossary/#add-on) in HACS.
- You have a stable internet connection with sufficent available bandwidth and no data caps.
- You are not blocking outgoing requests to GitHub or Cloudflare (See [faq/Data sources](/docs/faq/data_sources)).