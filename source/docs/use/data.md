---
title: Data and backup
description: "About repository data and backup"
---

## Data storage

All repository data is saved in Home Assistant to files under `.storage` (hidden by default).

## Creating a backup

All HACS data is part of the regular Home Assistant backup. Make sure to regularly backup Home Assistant and store the backup files somewhere safe and outside of your Home Assistant instance. So that you can restore from the backup if needed.

For instructions on creating a backup, select the link below corresponding to your installation type.

- [Backups on Home Assistant Operating System](https://www.home-assistant.io/common-tasks/os/#backups)
- [Backups on Home Assistant Supervised](https://www.home-assistant.io/common-tasks/supervised/#backups)
- [Backups on Home Assistant Core and Container](https://www.home-assistant.io/integrations/backup/)

## Restoring from a backup

To restore your installation from a backup, follow the steps on [restoring a backup](https://www.home-assistant.io/integrations/backup/#restoring-a-backup) in the Home Assistant documentation.
