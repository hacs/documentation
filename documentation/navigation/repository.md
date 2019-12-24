---
id: repository
title: Repository
description: ""
---

![nav_repository](/img/nav_repository.png)

This section has two parts: Core and Additional

## Core

This part give you core information about the repository:

- Title
- Description
- Installed version
- Available version(s)
- Author(s)


### Repository menu

You get to this by clicking the three vertical dots in the top right corner.

function | description
-- | --
Update information | This will reload the information about the repository.
Show beta | This will enable beta versions for the repository. (Only if the repository uses releases.)
Hide | This will hide the repository from the store views. (Only if the repository is not custom.)
Open issue | This will take you to where you can report issues about that repository.
Flag this | This will take you to an issue template to remove the repository from HACS.

### Repository buttons

button | description
-- | --
main action | This button will have a different function depending on the version you have installed, if any, but the main part is that it will install the selected version if clicked.
Change log | This will show you the change log for the repository. (This will only show if there is an update pending)
Repository | This will take you to the github repository
Open plugin | This will show you the plugin file that hacs will serve to Lovelace. (This will only show for installed plugins)
Uninstall | This will stop tracking versions in HACS, and delete the files that HACS has downloaded for it.

## Additional

This part shows more information about the repository.
At the bottom of this section you will also see where it is/will be installed.

If the repository is a plugin you will also get instructions on how to add it to your Lovelace configuration.
