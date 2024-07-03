---
title: Getting started with the HACS dashboard
description: 'Steps on getting started with the HACS dashboard'
---

This section shows you how to use the HACS dashboard.

## Getting started with the HACS dashboard

1. To use HACS, in the Home Assistant sidebar, select the HACS icon. 
    - This opens the HACS dashboard.
    - The HACS dashboard uses the same [table features](https://www.home-assistant.io/docs/organizing/filtering) used elsewhere in Home Assistant.
    - Each line in the data table represents a community repository that can be downloaded via HACS.
2. If you do not see the repository you are looking for, use the [search](#search) and [filter](#filter).
    - By default, the dashboard shows the repositories you have downloaded with HACS on top of the list. 


![nav_overview](/assets/images/screenshots/overview/base/light.png#only-light)
![nav_overview](/assets/images/screenshots/overview/base/dark.png#only-dark)

## Downloading a repository

1. In Home Assistant, open HACS and find the repository of interest.
    - If you are unsure what you are looking for and want to browse, you can [filter](/docs/use/dashboard.md#filter). For example, for type *integration*.
    - If you already know what you want, type the name into the search field.
2. Select the repository from the list and read its documentation.
3. To download the repository, select **Download**.
    - The files provided by the repository are now added to your [Home Assistant configuration directory](https://www.home-assistant.io/docs/configuration.md#to-find-the-configuration-directory).
4. [Restart Home Assistant](https://www.home-assistant.io/docs/configuration/#reloading-the-configuration-to-apply-changes).

## Quick actions

All downloaded repositories will have a quick action button (this is the 3 dots to the right of each downloaded repository (:material-dots-vertical:)).

With this you can quickly manage the repository and get to its issue tracker.

## {{coreui("ui.components.data-table.search")}}

Above the list of repositories there is a search field.
In this field you can search for both downloaded and available repositories you can manage with HACS.

![nav_overview](/assets/images/screenshots/overview/search/light.png#only-light)
![nav_overview](/assets/images/screenshots/overview/search/dark.png#only-dark)

You can search data in all [columns](#columns) of each repository including:

- Author
- Category
- Description
- Name
- Status
- Topics

## Filter

If you are just looking to browse repositories, you can do so with filtering.
You can find and set the filters in the dialog you can open with the (:material-filter-variant:) icon button to the right in the searchbar.

![nav_overview](/assets/images/screenshots/overview/filter/light.png#only-light)
![nav_overview](/assets/images/screenshots/overview/filter/dark.png#only-dark)

### Base filters

There are 2 base filters:

- Downloaded (This is the default filter that is applied, and when enabled will show downloaded repositoruies.)
- New (When enabled this will show repositories you have not looked at before.)

### Category filter

With this filter you can select one of the available [types](/docs/use/type/index.md) to show.

Once enabled it will show repositories in that category.

## {{hacsui("dialog_overview.columns")}}

!!! note
    This is **not** available for mobile devices.


You choose what's important to you, select the commumns you want to see.

## HACS Menu

At the top-right corner you will find the 3 dots menu (:material-dots-vertical:).

![nav_overview](/assets/images/screenshots/overview/menu/light.png#only-light)
![nav_overview](/assets/images/screenshots/overview/menu/dark.png#only-dark)

Here you can:

- Open the documentation of HACS itself
- Open the [GitHub](https://github.com) page of HACS itself.
- Open an issue for HACS itself.
- Add [custom repositories](/docs/faq/custom_repositories.md).
- Dismiss all new repositories (if you have any).
- Show information about your HACS installation.
