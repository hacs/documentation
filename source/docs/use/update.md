---
title: Update HACS
description: "Step-by-step instructions on updating HACS"
---

As soon as a new version of HACS is available, you'll receive an update notification in Home Assistant, just like with any other integration.

## Updating HACS

Follow these steps to update HACS itself. Updating HACS does not automatically update the repositories you have downloaded from HACS.

1. [Create a backup](/docs/use/data.md/#creating-a-backup) and download that backup to another device.
2. In Home Assistant, go to <!-- hacs:my updates title="**{{coreui('panel.config')}}** > **{{coreui('ui.panel.config.updates.caption')}}**" -->.
    - Select the **HACS update** notification and check the release notes for backward-incompatible changes.
    - If you're sure you want to update, select **Install**.
3. [Restart Home Assistant](https://www.home-assistant.io/docs/configuration/#reloading-the-configuration-to-apply-changes).

## Updating repositories

Each repository represents an independent open-source project maintained by someone from the community. Each repository therefore has its very own update cycle.
HACS [regularly checks the repositories for updates](/docs/faq/data_sources.md/#updates). This means that the list of repositories is regularly updated, there is no need for you to keep track of this.

However, if you want to immediately check if something has changed for a repository, you can manually check for an [update of the repository metadata](/docs/use/repositories/dashboard.md/#updating-repository-metadata).

## To update a downloaded repository

These steps assume that you have already downloaded a repository. Follow these steps to update to a new software version of this repository.

1. [Create a backup](/docs/use/data.md/#creating-a-backup) and download that backup to another device.
2. There are 2 ways to install an update for a repository:
    - **Option 1**: From the update notification  under <!-- hacs:my updates title="**{{coreui('panel.config')}}** > **{{coreui('ui.panel.config.updates.caption')}}**" -->.
        - Open the notification and read the release notes.
        - Select **Install**.
    - **Option 2**: From the HACS dashboard.
        - The repositories with updates have status **Pending update**.
        - Select the 3 dots :material-dots-vertical: menu, then select **Redownload**.
3. If the repository is an integration, [restart Home Assistant](https://www.home-assistant.io/docs/configuration/#reloading-the-configuration-to-apply-changes).
