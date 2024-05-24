---
id: update_entities
title: Update entities
description: 'Update entities'
---

!!! note
    This require [experimental features](/docs/use/configuration/options.md#options) enabled.


HACS provide [update entities](https://www.home-assistant.io/integrations/update/) for all tracked repositories.

## Install service

Like all other [update entities](https://www.home-assistant.io/integrations/update/), you can use the `update.install` service to handle updates.

The "Version" field supports the folowing:

- A GitHub tag (release)
- A public branch of the repository (this does **not** include forks)
- The full (not first 7) SHA of a commit

_In case there is a branch and tag that have identical names, the tag will be used._

!!! warning
    Setting the version in this service call is considered an advanced feature, and should **NOT** be used without instructions to use it from the author of the repository you are updating.


If the repository does not support versions, or if the specified version is not compliant with HACS (or your Home Assistant version) it will fail with a message similar to this:

![Image showing the service failing](/assets/images/update_service_failed.png)
