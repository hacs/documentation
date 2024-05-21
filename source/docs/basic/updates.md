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

On each RepositoryView (the page with details about the element) there is a reload icon at the top-right corner, clicking that will reload it.
