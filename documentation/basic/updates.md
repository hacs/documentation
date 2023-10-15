---
id: updates
title: Updates
description: 'Data updates'
---

Everything you download with HACS will be create a dedicated [update entity](/docs/entities/update) for that repository.

When a update is available for the repository, this will be shown in the Configuration panel of Home Assistant with other updates.

# Install update service

Like all other [update entities](/docs/entities/update), you can use the `update.install` service to handle updates.

The "Version" field supports the folowing:

- A GitHub tag (release)
- A public branch of the repository (this does **not** include forks)
- The full (not first 7) SHA of a commit

:::warning

Setting the version in this service call is considered an advance feature, and should **NOT** be used without instructions to use it from the author of the repository you are updating.

:::

If the repository does not support versions, or if the specified version is not compliant with HACS (or your Home Assistant version) it will fail with a message similar to this:

![Image showing the service failing](/img/update_service_failed.png)

## Managed elements

HACS will check for updates to downloaded elements:

- At startup.
- Every 48 hours after HA startup.

## Everything else

HACS will check for updates to every element:

- At startup
- Every 96 hours after HA startup.

## Manually trigger updates

On each RepositoryView (the page with details about the element) there is a reload icon at the top-right corner, clicking that will reload it.
