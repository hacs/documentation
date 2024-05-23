---
id: updates
title: Updates
description: 'Data updates'
---

Everything you download with HACS will create a dedicated [update entity](/docs/entities/update.md) for that repository.

## Managed elements

HACS will check for updates to downloaded elements:

- At startup.
- Every 48 hours after HA startup.

## Everything else

HACS will check for updates to every element:

- At startup
- Every 96 hours after HA startup.

## Manually trigger updates

On each RepositoryView (the page with details about the element), click the "kebab" menu in the top-right corner and choose "Update information" from the dropdown.
