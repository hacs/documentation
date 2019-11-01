---
id: prerequisites
title: Prerequisites
---

*If you move from [`custom_updater`](https://github.com/custom-components/custom_updater) to this see the special note at the bottom here.*

## Requirements

If you do not have or know **all** of the following, don't try to install/use HACS.

- Home Assistant version `0.98.0` or newer
- A GitHub account
- Access to the filesystem where Home Assistant is located
- **How to access the Home Assistant log file**
- **A stable internet connection which a certain amount of bandwidth**


## Moving from custom_updater

If you have [`custom_updater`](https://github.com/custom-components/custom_updater) installed you need to remove that (rename the directory or delete it completely). You will also need to remove the `custom_updater` entry from your `configuration.yaml` file.

HACS and [`custom_updater`](https://github.com/custom-components/custom_updater) can not operate on the same installation.

If you used the special endpoint `/customcards/` endpoint for your Lovelace cards, you now need to reinstall that plugin using HACS and use the URL provided in the page for that plugin in the HACS UI, if the plugin is not there you need to use `/local/` instead.

As noted under ['Existing elements'](basic/existing_elements.md), you need to click the "INSTALL" button for each element you previously have installed.
