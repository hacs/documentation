---
title: Getting started with the HACS dashboard
description: 'Steps on getting started with the HACS dashboard'
---

This section shows you how to use the HACS dashboard.

## Getting started with the HACS dashboard

1. To open HACS, in the Home Assistant sidebar, select the HACS icon.
    - Each line in the data table represents a community repository that can be downloaded via HACS.
    ![nav_overview](/assets/images/screenshots/overview/base/light.png#only-light)
    ![nav_overview](/assets/images/screenshots/overview/base/dark.png#only-dark)
2. To browse the repositories, use the [search](#search-repositories) and [filter](#filter-repositories) functions.
    - The HACS dashboard uses the same [table features](https://www.home-assistant.io/docs/organizing/filtering) used elsewhere in Home Assistant.
    - By default, the dashboard shows the repositories you have downloaded with HACS on top of the list.
3. To view the repository documentation, the select the 3 dots :material-dots-vertical: menu, then select **Show details**.
    - To view the source code, select **Repository**.
4. Once you found the custom element you want to use in Home Assistant, [download the repository](/docs/use/download_repository.md).

## {{coreui("ui.components.data-table.search")}} repositories

You can search for both downloaded and available repositories in HACS.

1. Enter your search term in the search field.
2. The search is not limited to the repository name or description. You can search for data from different categories, including:

    - Author
    - Type
    - Description
    - Name
    - Status
    - Topics

    ![nav_overview](/assets/images/screenshots/overview/search/light.png#only-light)
    ![nav_overview](/assets/images/screenshots/overview/search/dark.png#only-dark)

## Filter repositories

1. To define filters, next to the searchbar, select the (:material-filter-variant:) **Filters** button.

    ![nav_overview](/assets/images/screenshots/overview/filter/light.png#only-light)
    ![nav_overview](/assets/images/screenshots/overview/filter/dark.png#only-dark)
2. There are currently 2 filter types:

    - **Status**: For example, show only repositories that have been **Downloaded** or are **New**.
    - **Type**: filters for a specific [type](/docs/use/type/index.md) of custom element, such as integration, dashboard, or theme.

3. **Troubleshooting**: Don't see the status or type in your table?
    - Make sure the [columns are not hidden](https://www.home-assistant.io/docs/organizing/tables#customizing-columns)

## Reporting an issue with a repository

If you're experiencing an issue with a particular custom element, always report the issue to the repository owner, not to HACS or Home Assistant.

1. On the repository entry, select the 3 dots :material-dots-vertical: menu, then select **Open issue**.
    - This opens the issue tracker of the GitHub repository for that custom element.
2. To open an issue, in their repository, select **New issue**.
3. Add a detailed description of your issue and submit.

## HACS Menu

At the top-right corner you will find the 3 dots (:material-dots-vertical:) menu.

![nav_overview](/assets/images/screenshots/overview/menu/light.png#only-light)
![nav_overview](/assets/images/screenshots/overview/menu/dark.png#only-dark)

Here you can:

- Open the documentation of HACS itself
- Open the [GitHub](https://github.com) page of HACS itself.
- Open an issue for HACS itself.
- Add [custom repositories](/docs/faq/custom_repositories.md).
- Dismiss all new repositories (if you have any).
- Show information about your HACS installation.
