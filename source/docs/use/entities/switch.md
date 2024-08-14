---
title: Switch Entities
description: 'Switch entities'
---

HACS provides [switch entities](https://www.home-assistant.io/integrations/switch/) for all tracked repositories.

By default, these switch entities are disabled. However, you can easily [enable them](https://www.home-assistant.io/common-tasks/general/#enabling-or-disabling-elements) in Home Assistant.

The state of this switch determines whether the [update entity](./update.md) considers pre-releases (beta versions) when checking for updates.

- **Switch ON**: Pre-releases are included in the update checks.
- **Switch OFF**: Pre-releases are not included in the update checks.

## Example

Suppose you are tracking a repository `github/octocat` with the following releases:

- `v1.0.0`
- `v2.0.0b0` (pre-release)

If the switch is ON, the update entity will consider `v2.0.0b0` as the latest version. If the switch is OFF, it will use `v1.0.0` as the latest version.
