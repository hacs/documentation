---
id: dashboard
title: Dashboard
description: 'HACS Dashboard'
sidebar_position: 1
---

This is the home of HACS!

![nav_overview](/img/panel/entry.png)

This is based on the same data table that you will find elsewhere in the [Home Assistant](https://www.home-assistant.io) frontend.

Each line in the data table, represent a repository that is (or can be) managed by HACS.

By default it only shows you which repositories you have downloaded with HACS.

If you want to see more use the [search](#search) and [filter](#filter) capabilites.

## Quick actions

All downloaded repositories will have a quick action button (this is the 3 dots to the right of each downloaded repository (<svg className="inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z" /></svg>)).

With this you can quickly manage the repository and get to its issue tracker.

## Search

Above the list of repositories there is a search field.
In this field you can serch for both downloaded and available repositories you can manage with HACS.

You can search data in all [columns](#columns) of each repository including:

- Author
- Category
- Description
- Name
- Status
- Topics

## Filter

If you are just looking to bowse repositories, you can do so with filtering.
You can find and set the filters in the filter menu you can open with the (<svg className="inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6,13H18V11H6M3,6V8H21V6M10,18H14V16H10V18Z" /></svg>) icon button to the right in the searchbar.

![image of filters](/img/filters.png)

### Downloaded filter

This is the default filter, and when enabled will show downloaded repositoruies.

### New filter

When enabled this will show repositories you have not looked at before.

### Category filter

With this filter you can select one of the available [categories](/docs/categories) to show.

Once enabled it will show repositories in that category.

## Columns

:::note
This is **not** available for mobile devices.
:::

You choose what's important to you, select the commumns you want to see.
