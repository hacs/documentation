---
id: settings
title: Settings
---

![nav_settings](/img/nav_settings.png)

The settings tab has 3 sections.

## HACS Information

Here you will see the version of HACS you are running, and how many repositories that HACS has.

You can also change the visual layout of the repositories.
You can choose between "Grid" (default) or "Table".

There are also some buttons here:

button | description
-- | --
Reload data | This forces HACS to reload all data from all installed repositories.
Upgrade all | This **WILL** upgrade **ALL** installed repositories that are upgradeable - be careful if you use this.
HACS Repo | This opens a new tab and takes you to the repository for HACS.
Open Issue | This takes you to where you can submit issues for HACS.

## Custom repositories

HACS comes with a large number of default repositories. A "custom" repository can be added if it is HACS-compliant.

The top of this section contains a list of installed custom repositories. New repositories can be added using the entry form at the bottom.

![new_custom](/img/new_custom.png)

In the left field add the URL of the repository you want to add - this can either be the full URL: `https://github.com/developer/repository` or the short version: `developer/repository`. Select the pertinent category in the drop-down, then click the save icon.

If the repository can be added it will now show in the list above, and can be installed from the appropriate tab.


## Hidden repositories

_If you have not hidden any repositories you will not see this section._

Repositories in this list are hidden from the store tabs. A hidden repository can be restored by clicking the unhide/reload icon to the left of the repository name.
