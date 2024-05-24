---
id: dashboard
title: Main Dashboard
description: 'HACS Dashboard'
sidebar_position: 1
---

This is the home of HACS!

![nav_overview](/assets/images/panel/entry.png)

This is based on the same data table that you will find elsewhere in the [Home Assistant](https://www.home-assistant.io) frontend.

Each line in the data table, represent a repository that is (or can be) managed by HACS.

By default it only shows you which repositories you have downloaded with HACS.

If you want to see more use the [search](#search) and [filter](#filter) capabilites.

## Quick actions

All downloaded repositories will have a quick action button (this is the 3 dots to the right of each downloaded repository (:material-dots-vertical:)).

With this you can quickly manage the repository and get to its issue tracker.

## Search

Above the list of repositories there is a search field.
In this field you can serch for both downloaded and available repositories you can manage with HACS.

![image of search](/assets/images/panel/search.png)

You can search data in all [columns](#columns) of each repository including:

- Author
- Category
- Description
- Name
- Status
- Topics

## Filter

If you are just looking to bowse repositories, you can do so with filtering.
You can find and set the filters in the dialog you can open with the (:material-filter-variant:) icon button to the right in the searchbar.

![image of filters](/assets/images/dialog/manage_overview_table.png)

### Base filters

There are 2 base filters:

- Downloaded (This is the default filter that is applied, and when enabled will show downloaded repositoruies.)
- New (When enabled this will show repositories you have not looked at before.)

### Category filter

With this filter you can select one of the available [types](/docs/use/type/index.md) to show.

Once enabled it will show repositories in that category.

## Columns

!!! note
    This is **not** available for mobile devices.


You choose what's important to you, select the commumns you want to see.

## HACS Menu

At the top-right corner you will find the 3 dots menu (:material-dots-vertical:).

![image of menu](/assets/images/panel/menu.png)

Here you can:

- Open the documentation of HACS itself
- Open the [GitHub](https://github.com) page of HACS itself.
- Open an issue for HACS itself.
- Add [custom repositories](/docs/faq/custom_repositories.md).
- Dismiss all new repositories (if you have any).
- Show information about your HACS installation.
