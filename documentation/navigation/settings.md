---
id: settings
title: Settings
---

![nav_settings](/img/nav_settings.png)

The settings tab have 3 sections.

## HACS Information

Here you will see the version of HACS you are running, and how many repositories that HACS have.

You can also change how the layout of the repositories are shown.
You can choose between "Grid" (default) or "Table".

There are also some buttons here

button | desription
-- | --
Reload data | This forces HACS to reload the data of every repository it konws about.
Upgrade all | This **WILL** upgrade **ALL** your installed repositories, be carefull if you use this.
HACS Repo | This opens a new tab and takes you to the repository for HACS.
Open Issue | This takes you to where you can submit issues for HACS.

## Custom repositories

HACS have a lot of repositories in the store by default, but not all are there, if the repository is compliant with the rules that HACS needs for the reposiotry you can add it to HACS as a custom repository.

The first part of this section is a list of all the custom repositories you have added.

The second part is where you can add new repositories.

![new_custom](/img/new_custom.png)

In the left add the repository you wand to add, this can be `https://github.com/developer/repository` or `developer/repository`, then you select the correct category, and click the save icon.

If the repository can be added it will now show in the list, and in the store for you to install it.


## Hidden repositories

_If you have not any hidden repositories you will not see this section._

Repositories in this list are hidden from the store tabs, if you have hidden a repository by mistake you can click the reload (unhide) icon and it will once again show up in the store tabs.