---
id: overview
title: Overview
description: "Overview of the HACS UI"
---

This is the overview of HACS.

![nav_overview](/img/nav_overview.png)

The overview consist of a header, [tabs](#tabs) and a [menu button (in the top right corner)](#menu-button)

## Tabs

Every tab you see here serves a separate purpose:

- [Installed](/docs/navigation/installed) This is where you get an overview of your installed repositories.
- [Stores (Integrations, plugins, appdaemon apps, python scripts, themes)](/docs/navigation/stores) This is where you can browse and install new repositories
- [Settings](/docs/navigation/settings) Settings and advanced features for HACS.


If you click on a repository under the installed or store tabs, you will get to the page of that [repository](/docs/navigation/repository).


## Menu button

![menubutton](/img/hacs_menu.png)

The items in this list vary from what view you are viewing.

- "Upgrade all" are only visible if you are on the "Installed" tab.
- "Table" and "Compact" are not visible on the "Settings" tab.

### Menu items

#### Documentation

This will open the documentation page for the tab you are viewing.

#### Reload data

This will start a background task that reloads the data of every repository HACS knows about.

#### Upgrade all

This will upgrade all installed repositories that have an update pending.

#### HACS Repo

This will take you to the HACS organisation page on GitHub.

#### Open issue

This will take you to where you can get information about creating issues under the HACS organisation.

#### Table

When active this changes the [layout](/docs/navigation/layout) to be in table mode.

#### Compact

When active this will comapct the [layout](/docs/navigation/layout) of HACS.

#### About

This shows a modal with info about HACS versions and the number of repositories it tracks.
