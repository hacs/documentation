---
title: HACS and the Marketplace
description: "Starting with Home Assistant 2026.11, HACS is built into Home Assistant as the Marketplace. What that means for you."
---

Starting with Home Assistant 2026.11, HACS ships with Home Assistant itself, as the **Marketplace** integration. You find it under **Settings** > **Marketplace**. There is nothing to download anymore.

The Marketplace is HACS, brought into Home Assistant: the same catalog, the same repositories, and the same `hacs.json`. Development continues in Home Assistant, so HACS itself, the custom integration, doesn't get new features anymore.

## What this means for you

| You | Where to go |
| --- | --- |
| Use HACS on Home Assistant 2026.10 or older | Keep using HACS. The [user documentation](/docs/use/index.md) on this site still applies. Before you upgrade, read [Upgrading to Home Assistant 2026.11](#upgrading-to-home-assistant-202611). |
| Use Home Assistant 2026.11 or newer | The [Marketplace documentation](https://next.home-assistant.io/integrations/marketplace/). |
| Publish a repository | The [Marketplace publishing documentation](https://contributors.home-assistant.io/marketplace/). Getting into the catalog still works the same, through [hacs/default](https://github.com/hacs/default). |
| Want to contribute code | The [Home Assistant contributor documentation](https://contributors.home-assistant.io/). |

## Upgrading to Home Assistant 2026.11

You don't need to do anything. When Home Assistant starts after the update, the Marketplace takes over from HACS:

- Everything you downloaded with HACS stays installed, and keeps getting updates.
- Your custom repositories and update entities carry over, with their names, areas, and labels. The update entities keep their entity IDs, so automations and dashboards that use them keep working.
- HACS itself is removed. Bookmarks to `/hacs` open the Marketplace.

A few things work differently:

- The Marketplace is under **Settings**, not in the sidebar. The HACS options, like the sidebar title and icon, are gone.
- AppDaemon apps and Python scripts are no longer managed. Their files stay where they are and keep working, but they don't get updates anymore. A repair tells you which ones this concerns.
- Dashboard resources are served from `/local/community/` now. The old `/hacsfiles/` paths keep working. If you configured resources in YAML, a repair reminds you to change them.
- HACS can't be installed on Home Assistant 2026.11 or newer. Home Assistant blocks the custom integration, because the Marketplace replaces it.

The [Coming from HACS](https://next.home-assistant.io/integrations/marketplace/#coming-from-hacs) section of the Marketplace documentation has all the details, including what changes for templates and custom tools that use HACS.

## What stays here

- **The catalog.** The list of repositories everyone sees is still [hacs/default](https://github.com/hacs/default), and the Marketplace reads the same data HACS does. Submitting a repository works as before.
- **The checks.** The [HACS action](/docs/publish/action.md) and the [checks for the catalog](/docs/publish/include.md) are documented in the publishing section of this site.
- **HACS before 2026.11.** The user documentation and the FAQ on this site describe HACS, for everyone who hasn't upgraded yet.

## Feature requests and bugs

- **Feature requests and ideas:** the [Marketplace category](https://github.com/orgs/home-assistant/discussions/categories/marketplace) of the Home Assistant discussions.
- **Bugs in the Marketplace:** the [open Marketplace issues](https://github.com/home-assistant/core/issues?q=sort%3Aupdated-desc+is%3Aissue+state%3Aopen+label%3A%22integration%3A+marketplace%22) in the Home Assistant core repository. Open a new one there if yours isn't reported yet.
- **Bugs in something you downloaded:** the repository of that integration, card, or theme.
